import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Header from '../components/Header'

describe('<Header />', () => {
  afterEach(cleanup)

  it('renders and takes a snapshot', () => {
    const { asFragment } = render(<Header />)
    expect(asFragment).toMatchSnapshot()
  })

  it('renders title', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Dog Breeds')).toBeInTheDocument()
  })

  it('renders icon', () => {
    const { getByAltText } = render(<Header />)
    expect(getByAltText('red heart icon')).toBeInTheDocument()
  })
})
