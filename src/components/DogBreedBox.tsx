import React, { FC } from 'react'
import styled from '@emotion/styled'
import { colors } from '../assets/colors'
import { connect } from 'react-redux'
import { fetchDogs } from '../redux/actions'

interface DispatchProps {
  fetchDogs: (input: string) => void
}

interface OwnProps {
  breed: string
}

type Props = DispatchProps & OwnProps

const DogBreedBox: FC<Props> = ({breed, fetchDogs}) => {
  const handleSearch = () => {
    fetchDogs(breed)
  }

  return (
    <Container>
      <BreedBox onClick={handleSearch}>
        {breed}
      </BreedBox>
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '5px auto',
})

const BreedBox = styled.button({
  width: '160px',
  height: '30px',
  borderRadius: '4px',
  background: colors.mostlyWhiteGrey,
  border: '0px none',
  outline: 'none',
  textAlign: 'center',
  fontSize: '1rem',
  ':hover, :active': {
    background: colors.veryLightGray
  }
})

const mapDispatchToProps = {
  fetchDogs
}

export default connect(null, mapDispatchToProps)(DogBreedBox)