import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  useLocation,
  withRouter
} from "react-router-dom";
import Rumi from './Rumi';
import colors from './pallete.json';
import { keys, random, range, size, values, extend } from 'lodash';

function getColorStyle(i, background) {
  const currPainting = keys(colors.stella)[1] // "harran_ii"
  const c = values(colors.stella[currPainting])
  const index = i >= 0 ? i % c.length - 1 : random(c.length - 1)
  // if (background) {
  //   return {
  //     backgroundColor: c[index]
  //   }
  // }
  return {
    color: c[index],
    //color: "white"
  }
}

const routes = {
  home: {
    link: "/",
    nav: "home",
    element: <Home />
  },
  about: {
    link: "/about",
    nav: "about",
    element: <About />
  },
  users: {
    link: "/users",
    nav: "users",
    element: <Users />
  },
  rumi: {
    link: "/rumi",
    nav: "rumi",
    element: <Rumi />
  },
  rumi_f: {
    link: "/art",
    nav: "artworks",
    element: <Rumi />
  },
  rumi_e: {
    link: "/writing",
    nav: "writing",
    element: <Rumi />
  },
  rumi_d: {
    link: "/teaching",
    nav: "teaching",
    element: <Rumi />
  },
  rumi_a: {
    link: "/gallery",
    nav: "gallery",
    element: <Rumi />
  },
  rumi_b: {
    link: "/travel",
    nav: "travel",
    element: <Rumi />
  },
  rumi_c: {
    link: "/ramblings",
    nav: "ramblings",
    element: <Rumi />
  },
  rumi_1: {
    link: "/map",
    nav: "morgan map",
    element: <Rumi />
  },
  rumi_2: {
    link: "/morganic-produce",
    nav: "plantings",
    element: <Rumi />
  },
}

const screenHeight = window.screen.availHeight;
const remainingHeight = screenHeight - (28 * size(routes))

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
        {/* <ul>
          {range(0,remainingHeight/8).map(i => (
            <li key={i} style={getColorStyle(i)}> </li>
          ))}
        </ul> */}
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/rumi" element={<Rumi/>} />
        </Routes>
      </div>
    </div>
  );
}

function Home() {
    return <h2>Home</h2>;
  }
  
function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

