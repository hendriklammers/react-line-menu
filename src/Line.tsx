import styled from 'styled-components'

export interface LineTransform {
  translateX: number
  scaleX: number
}

interface LineProps extends LineTransform {
  duration?: number
}

const Line = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 2px);
  background: #000;
  width: 100px;
  height: 2px;
  transition: transform ${({ duration = 0.3 }: LineProps) => duration}s
    cubic-bezier(0.215, 0.61, 0.355, 1);
  transform-origin: top left;
  transform: translate3d(${(props: LineProps) => props.translateX}px, 0, 0)
    scaleX(${(props: LineProps) => props.scaleX});
`

export default Line
