import React from 'react';
import {
  Link,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Rumi from './Rumi';
import Home from './Home';
import Art from './Art';
import Teaching from './Teaching';
import colors from './pallete.json';
import routes from './routes';
import { keys, random, values } from 'lodash';

function getColorStyle(i, background) {
  const currPainting = keys(colors.stella)[1] // "harran_ii"
  const c = values(colors.stella[currPainting])
  const index = i >= 0 ? i % (c.length - 1) : random(c.length - 1)
  return {
    color: c[index]
  }
}

export default function App() {
  const buttonText = '<<'
  const location = useLocation()
  return (
    <div className="app">
      <div className="collapse" onClick={() => {}}>{buttonText}</div>
      <nav className="navbar">
        <ul>
          {values(routes).map((route, i) => {
            const styleMap = getColorStyle(i)
            const isActiveRoute = location.pathname === route.link
            const suffix = isActiveRoute ? '>>' : '.'
            const linkStyleMap = { padding: isActiveRoute ? 0 : 'inherit' }
            return (
              <li key={i} style={styleMap}>
                <Link to={route.link} style={linkStyleMap}>
                  {route.nav} <span>{suffix}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/rumi" element={<Rumi/>} />
          <Route path="/art" element={<Art/>} />
          <Route path="/music" element={Placeholder("Music")} />
          <Route path="/writing" element={Placeholder("Writing")} />
          <Route path="/teaching" element={<Teaching/>} />
          <Route path="/india" element={Placeholder("India")} />
          <Route path="/peru" element={Placeholder("Peru")} />
          <Route path="/letters" element={Placeholder("Letters")} />
        </Routes>
      </div>
    </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Placeholder(name) {
  return (
    <React.Fragment>
      <h2>{name}</h2>
      <p>coming soon :)</p>
    </React.Fragment>
  )
}


