import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Line, { LineTransform } from './Line'

const menuItems = [
  { label: 'Home' },
  { label: 'About' },
  { label: 'Blog' },
  { label: 'Contact' },
]

const Menubar = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
`

const Link = styled.a`
  margin: 0 10px;
  font-size: 30px;
  color: #000;
  text-decoration: none;
`

const LineMenu: React.FC = () => {
  const [active, setActive] = useState<null | number>()
  const linkRefs = useRef<(HTMLAnchorElement)[]>([])

  useEffect(() => {
    setActive(2)
  }, [])

  const transform = (index: number): LineTransform => {
    const ref = linkRefs.current[index]
    return {
      translateX: ref ? ref.offsetLeft : 0,
      scaleX: ref ? ref.getBoundingClientRect().width / 100 : 0,
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
        {typeof active === 'number' && <Line {...transform(active)} />}
      </Menubar>
    </>
  )
}

export default LineMenu
