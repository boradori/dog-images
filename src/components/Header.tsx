import React, { FC } from 'react'
import styled from '@emotion/styled'
import Icon from './Icon'

const Header: FC = () => {
  return (
    <Container>
      <Title>Dog Breeds</Title>
      <Icon icon="redHeartIcon" alt="red heart icon" />
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
})

const Title = styled.h1({
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '33px',
})

export default Header
