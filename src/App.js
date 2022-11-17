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
import colors from './pallete.json';
import routes from './routes';
import { keys, random, range, size, values, extend } from 'lodash';

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
  const spanText = '.'
  const location = useLocation()
  return (
    <div className="app">
      <div className="collapse" onClick={() => {}}>{buttonText}</div>
      <nav className="navbar">
        <ul>
          {values(routes).map((route, i) => {
            const styleMap = getColorStyle(i)
            const isActiveRoute = location.pathname == route.link
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


