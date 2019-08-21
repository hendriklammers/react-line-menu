import React, { useState, useCallback, Children, ReactNode } from 'react'
import styled from 'styled-components'
import Line, { LineTransform, Easing } from './Line'

interface ListProps {
  space: number
}

const List = styled.ul`
  margin: 0 -${({ space }: ListProps) => space / 2}px;
  padding: 0;
  position: relative;
  display: ${({ space }: ListProps) => (space > 0 ? 'inline-flex' : 'flex')};
  flex-direction: row;
  justify-content: ${({ space }: ListProps) =>
    space > 0 ? 'center' : 'space-between'};
  list-style: none;

  & > li {
    margin: 0 ${({ space }: ListProps) => space / 2}px;
  }
`

interface Props extends Partial<ListProps> {
  active?: number
  children: ReactNode
  clickHandler: (index: number) => void
  duration?: number
  easing?: Easing
}

const LineMenu = ({
  children,
  active,
  space = 0,
  clickHandler,
  duration = 0.3,
  easing = 'linear',
}: Props) => {
  const [transforms, setTransforms] = useState<LineTransform[]>([])

  const ref = useCallback(node => {
    if (node !== null) {
      setTransforms(t => [
        ...t,
        {
          left: node.offsetLeft,
          width: node.getBoundingClientRect().width,
        },
      ])
    }
  }, [])

  return (
    <List space={space}>
      {Children.map(children, (child, index) => (
        <li ref={ref} key={index} onClick={() => clickHandler(index)}>
          {child}
        </li>
      ))}
      {active !== undefined && (
        <Line {...transforms[active]} easing={easing} duration={duration} />
      )}
    </List>
  )
}

export default LineMenu
