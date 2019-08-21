import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link as RouterLink,
  withRouter,
  RouteProps,
} from 'react-router-dom'
import LineMenu from './LineMenu'
import styled from 'styled-components'

const Link = styled(RouterLink)`
  font-size: 30px;
  color: #000;
  text-decoration: none;
`

const Home = () => (
  <section>
    <h2>Home</h2>
  </section>
)

const About = () => (
  <section>
    <h2>About</h2>
  </section>
)

const Blog = () => (
  <section>
    <h2>Blog</h2>
  </section>
)

const Contact = () => (
  <section>
    <h2>Contact</h2>
  </section>
)

const Navigation = withRouter(({ location }: RouteProps) => {
  const [activeMenuItem, setActiveMenuItem] = useState(0)

  const clickHandler = (index: number) => {
    setActiveMenuItem(index)
  }

  // if (location) {
  //   console.log(location.pathname.match(/^\/([a-zA-Z]+)/))
  // }

  return (
    <LineMenu active={activeMenuItem} clickHandler={clickHandler} space={20}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </LineMenu>
  )
})

const App = () => {
  return (
    <Router>
      <Navigation />
      <section>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </section>
    </Router>
  )
}

export default App
