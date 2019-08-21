import styled from 'styled-components'

// In left offset and width in pixels
export interface LineTransform {
  left: number
  width: number
}

type Props = {
  duration?: number
} & LineTransform

// const easings = {
// 'easeInLinear': bezier(0,0,1,1),
// 'easeOutLinear': bezier(0,0,1,1),
// 'easeInOutLinear': bezier(0,0,1,1),
// 'easeInExpo': bezier(0.71,0.01,0.83,0)
// 'easeOutExpo': bezier(0.14,1,0.32,0.99)
// 'easeInOutExpo': bezier(0.85,0,0.15,1)
// 'easeInCirc': bezier(0.34,0,0.96,0.23)
// 'easeOutCirc': bezier(0,0.5,0.37,0.98)
// 'circ:in:out': bezier(0.88,0.1,0.12,0.9)
// 'sine:in': bezier(0.22,0.04,0.36,0)
// 'sine:out': bezier(0.04,0,0.5,1)
// 'sine:in:out': bezier(0.37,0.01,0.63,1)
// 'quad:in': bezier(0.14,0.01,0.49,0)
// 'quad:out': bezier(0.01,0,0.43,1)
// 'quad:in:out': bezier(0.47,0.04,0.53,0.96)
// 'cubic:in': bezier(0.35,0,0.65,0)
// 'cubic:out': bezier(0.09,0.25,0.24,1)
// 'cubic:in:out': bezier(0.66,0,0.34,1)
// 'quart:in': bezier(0.69,0,0.76,0.17)
// 'quart:out': bezier(0.26,0.96,0.44,1)
// 'quart:in:out': bezier(0.76,0,0.24,1)
// 'quint:in': bezier(0.64,0,0.78,0)
// 'quint:out': bezier(0.22,1,0.35,1)
// 'quint:in:out': bezier(0.9,0,0.1,1)
// }

const transform = ({ left = 0, width = 10 }: LineTransform) =>
  `translate3d(${left}px, 0, 0) scaleX(${width / 10})`

const Line = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 2px);
  background: #000;
  width: 10px;
  height: 2px;
  transition: transform ${({ duration = 0.3 }: Props) => duration}s
    cubic-bezier(0.215, 0.61, 0.355, 1);
  transform-origin: top left;
  transform: ${props => transform(props)};
`

export default Line
