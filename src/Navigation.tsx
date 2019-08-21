import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { withRouter, RouteProps, Link } from 'react-router-dom'
import LineMenu from './LineMenu'

const MenuLink = styled(Link)`
  font-size: 30px;
  color: #000;
  text-decoration: none;
`

interface MenuItem {
  to: string
  label: string
}

const menuItems: MenuItem[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

const Navigation = withRouter(({ location }: RouteProps) => {
  const [activeMenuItem, setActiveMenuItem] = useState<number | null>(null)

  useEffect(() => {
    if (location) {
      const index = menuItems.findIndex(({ to }) => to === location.pathname)
      if (index >= 0) {
        setActiveMenuItem(index)
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const clickHandler = (index: number) => {
    setActiveMenuItem(index)
  }

  return (
    <LineMenu
      active={activeMenuItem !== null ? activeMenuItem : undefined}
      clickHandler={clickHandler}
      space={20}
    >
      {menuItems.map(({ to, label }, index) => (
        <MenuLink to={to} key={index}>
          {label}
        </MenuLink>
      ))}
    </LineMenu>
  )
})

export default Navigation
