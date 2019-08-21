import styled from 'styled-components'

type CssEasing = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out'

type PennerEasing =
  | 'easeInExpo'
  | 'easeOutExpo'
  | 'easeInOutExpo'
  | 'easeInCirc'
  | 'easeOutCirc'
  | 'easeInOutCirc'
  | 'easeInSine'
  | 'easeOutSine'
  | 'easeInOutSine'
  | 'easeInQuad'
  | 'easeOutQuad'
  | 'easeInOutQuad'
  | 'easeInCubic'
  | 'easeOutCubic'
  | 'easeInOutCubic'
  | 'easeInQuart'
  | 'easeOutQuart'
  | 'easeInOutQuart'
  | 'easeInQuint'
  | 'easeOutQuint'
  | 'easeInOutQuint'

export type Easing = CssEasing | PennerEasing

const beziers: Record<string, string> = {
  easeInExpo: 'cubic-bezier(0.71,0.01,0.83,0)',
  easeOutExpo: 'cubic-bezier(0.14,1,0.32,0.99)',
  easeInOutExpo: 'cubic-bezier(0.85,0,0.15,1)',
  easeInCirc: 'cubic-bezier(0.34,0,0.96,0.23)',
  easeOutCirc: 'cubic-bezier(0,0.5,0.37,0.98)',
  easeInOutCirc: 'cubic-bezier(0.88,0.1,0.12,0.9)',
  easeInSine: 'cubic-bezier(0.22,0.04,0.36,0)',
  easeOutSine: 'cubic-bezier(0.04,0,0.5,1)',
  easeInOutSine: 'cubic-bezier(0.37,0.01,0.63,1)',
  easeInQuad: 'cubic-bezier(0.14,0.01,0.49,0)',
  easeOutQuad: 'cubic-bezier(0.01,0,0.43,1)',
  easeInOutQuad: 'cubic-bezier(0.47,0.04,0.53,0.96)',
  easeInCubic: 'cubic-bezier(0.35,0,0.65,0)',
  easeOutCubic: 'cubic-bezier(0.09,0.25,0.24,1)',
  easeInOutCubic: 'cubic-bezier(0.66,0,0.34,1)',
  easeInQuart: 'cubic-bezier(0.69,0,0.76,0.17)',
  easeOutQuart: 'cubic-bezier(0.26,0.96,0.44,1)',
  easeInOutQuart: 'cubic-bezier(0.76,0,0.24,1)',
  easeInQuint: 'cubic-bezier(0.64,0,0.78,0)',
  easeOutQuint: 'cubic-bezier(0.22,1,0.35,1)',
  easeInOutQuint: 'cubic-bezier(0.9,0,0.1,1)',
}

export interface LineTransform {
  left: number
  width: number
}

export type LinePosition = number | 'top' | 'bottom' | 'center'

interface Props extends LineTransform {
  duration: number
  easing: Easing
  weight: number
  color: string
  position: LinePosition
}

const transform = ({ left = 0, width = 10 }: LineTransform) =>
  `translate3d(${left}px, 0, 0) scaleX(${width / 10})`

const transition = ({ duration, easing }: Props) =>
  `transform ${duration}s ${beziers[easing] ? beziers[easing] : easing}`

const top = ({ position, weight }: Props): string => {
  switch (position) {
    case 'top':
      return `${0 - weight}px`
    case 'bottom':
      return '100%'
    case 'center':
      return '50%'
    default:
      return `${position}px`
  }
}

const Line = styled.div<Props>`
  position: absolute;
  left: 0;
  top: ${top};
  background: ${({ color }) => color};
  width: 10px;
  height: ${({ weight }) => weight}px;
  transform-origin: top left;
  transform: ${transform};
  transition: ${transition};
`

export default Line
