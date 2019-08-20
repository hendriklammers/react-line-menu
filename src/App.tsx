import React, { useState } from 'react'
import LineMenu from './LineMenu'
import styled from 'styled-components'

const Link = styled.a`
  margin: 0 10px;
  font-size: 30px;
  color: #000;
  text-decoration: none;
`

const App = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0)

  const clickHandler = (index: number, event?: MouseEvent) => {
    if (event) {
      event.preventDefault()
    }
    setActiveMenuItem(index)
  }

  return (
    <div>
      <LineMenu active={activeMenuItem} clickHandler={clickHandler}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </LineMenu>
    </div>
  )
}

export default App
