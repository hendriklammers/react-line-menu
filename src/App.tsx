import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const menuItems = [
  { label: 'Home', active: true },
  { label: 'About', active: false },
  { label: 'Blog', active: false },
  { label: 'Contact', active: false },
]

const Menubar = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
`

interface LineProps {
  translateX: number
  scaleX: number
}

const Line = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 2px);
  background: #000;
  width: 100px;
  height: 2px;
  transform-origin: top left;
  transform: translate3d(${(props: LineProps) => props.translateX}px, 0, 0)
    scaleX(${(props: LineProps) => props.scaleX});
`

const Link = styled.a`
  margin: 0 10px;
  font-size: 30px;
  color: #000;
  text-decoration: none;
`

const App: React.FC = () => {
  const [active, setActive] = useState(0)
  const linkRefs = useRef<(HTMLAnchorElement)[]>([])

  useEffect(() => {
    setActive(2)
  }, [])

  const activeProps = (index: number): LineProps => {
    const ref = linkRefs.current[index]
    const translateX = ref ? ref.offsetLeft : 0
    const scaleX = ref ? ref.getBoundingClientRect().width / 100 : 0
    return {
      translateX,
      scaleX,
    }
  }

  return (
    <>
      <Menubar>
        {menuItems.map(({ label }, index) => (
          <Link
            key={index}
            href="/"
            ref={ref => linkRefs.current.push(ref as HTMLAnchorElement)}
            onClick={event => {
              event.preventDefault()
              setActive(index)
            }}
          >
            {label}
          </Link>
        ))}
        <Line {...activeProps(active)} />
      </Menubar>
    </>
  )
}

export default App
