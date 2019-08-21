import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Navigation'

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
