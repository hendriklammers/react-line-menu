import React, {
  useState,
  useCallback,
  Children,
  ReactNode,
  cloneElement,
  isValidElement,
} from 'react'
import styled from 'styled-components'
import Line, { LineTransform } from './Line'

const Menubar = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
`

interface Props {
  children: ReactNode
  active: number
  clickHandler: (index: number) => void
}

const LineMenu = ({ children, active, clickHandler }: Props) => {
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

  const onClickHandler = (index: number) => (event: MouseEvent) => {
    event.preventDefault()
    clickHandler(index)
  }

  return (
    <Menubar>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            onClick: onClickHandler(index),
            ref,
          })
        } else {
          return ''
        }
      })}
      <Line {...transforms[active]} />
    </Menubar>
  )
}

export default LineMenu
