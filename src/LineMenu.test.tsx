import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import LineMenu from './LineMenu'

describe('LineMenu component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <LineMenu>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </LineMenu>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const clickHandler = jest.fn()
    const { asFragment, getByText, getByTestId } = render(
      <LineMenu
        active={1}
        clickHandler={clickHandler}
        duration={0.4}
        easing="easeOutExpo"
        linePosition="center"
        lineColor="#ff00ff"
        lineWeight={4}
      >
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </LineMenu>
    )
    expect(asFragment()).toMatchSnapshot()

    const line = getByTestId('line')
    expect(line).toHaveStyle('background-color: #ff00ff')
    expect(line).toHaveStyle('top: 50%')
    expect(line).toHaveStyle('height: 4px')

    fireEvent.click(getByText('Contact'))
    expect(clickHandler).toBeCalledWith(2)

    fireEvent.click(getByText('Home'))
    expect(clickHandler).toBeCalledWith(0)
  })
})
