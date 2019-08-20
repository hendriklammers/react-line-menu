import React, { useRef } from 'react'
// react-spring causes tsserver performance problems
// https://github.com/react-spring/react-spring/issues/613
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'

const menuItems = [
  { label: 'Home', active: true },
  { label: 'About', active: false },
  { label: 'Blog', active: false },
  { label: 'Contact', active: false },
]

const Menubar = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 10px;
`

const Line = styled(animated.div)`
  position: absolute;
  left: 0;
  top: 0;
  background: #000;
  width: 100px;
  height: 2px;
`

const Link = styled.a`
  margin: 0 10px;
  font-size: 30px;
  color: #000;
  text-decoration: none;
`

const App = () => {
  const [animatedProps, setAnimatedProps] = useSpring(() => ({
    transformOrigin: 'top left',
    transform: 'translateX(0px) scaleX(1)',
    config: { mass: 1, tension: 120, friction: 20 },
  }))

  const linkRefs = useRef<(HTMLAnchorElement)[]>([])

  return (
    <Menubar>
      {menuItems.map(({ label }, index) => {
        return (
          <Link
            key={index}
            href="/"
            ref={ref => linkRefs.current.push(ref as HTMLAnchorElement)}
            onClick={event => {
              event.preventDefault()
              const ref = linkRefs.current[index]
              const left = ref.offsetLeft
              const scale = ref.getBoundingClientRect().width / 100
              setAnimatedProps({
                transform: `translateX(${left}px) scaleX(${scale})`,
              })
            }}
          >
            {label}
          </Link>
        )
      })}
      <Line style={animatedProps} />
    </Menubar>
  )
}

export default App
