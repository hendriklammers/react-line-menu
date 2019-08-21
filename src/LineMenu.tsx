import React, { useState, useCallback, Children, ReactNode } from 'react'
import styled from 'styled-components'
import Line, { LineTransform, Easing, LinePosition } from './Line'

interface ListProps {
  itemSpacing: number
}

const List = styled.ul<ListProps>`
  margin: 0 -${({ itemSpacing }) => itemSpacing / 2}px;
  padding: 0;
  position: relative;
  display: ${({ itemSpacing }) => (itemSpacing > 0 ? 'inline-flex' : 'flex')};
  flex-direction: row;
  justify-content: ${({ itemSpacing }) =>
    itemSpacing > 0 ? 'center' : 'space-between'};
  list-style: none;

  & > li {
    margin: 0 ${({ itemSpacing }) => itemSpacing / 2}px;
  }
`

interface Props extends Partial<ListProps> {
  active?: number
  children: ReactNode
  clickHandler: (index: number) => void
  duration?: number
  easing?: Easing
  lineWeight?: number
  lineColor?: string
  linePosition?: LinePosition
}

const LineMenu = ({
  children,
  active,
  itemSpacing = 0,
  clickHandler,
  duration = 0.3,
  easing = 'linear',
  lineWeight = 2,
  lineColor = '#000',
  linePosition = 'bottom',
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
    <List itemSpacing={itemSpacing}>
      {Children.map(children, (child, index) => (
        <li ref={ref} key={index} onClick={() => clickHandler(index)}>
          {child}
        </li>
      ))}
      {active !== undefined && (
        <Line
          {...transforms[active]}
          easing={easing}
          duration={duration}
          weight={lineWeight}
          color={lineColor}
          position={linePosition}
        />
      )}
    </List>
  )
}

export default LineMenu
