import React, { FC } from 'react'
import styled from '@emotion/styled'
import { colors } from '../assets/colors'
import { connect } from 'react-redux'
import { getCurrentBreed, getFavoriteDogs, getAllBreeds } from '../redux/selectors'
import { AppState, FavoriteDogs, Breed } from '../types'
import Image from './Image'
import DogBreedBox from './DogBreedBox'
import Icon from './Icon'

interface StateProps {
  currentBreed: Breed
  favoriteDogs: FavoriteDogs
  allBreeds: Array<string>
}

interface DispatchProps {}

type Props = StateProps & DispatchProps

const DogImages: FC<Props> = ({currentBreed, favoriteDogs, allBreeds}) => {
  const renderDogs = (dogs: Breed | FavoriteDogs) => {
    return dogs.result.map((id: string) => {
      return (
        <Image
          key={id}
          dog={dogs === currentBreed ? currentBreed.entities.dogs![id] : favoriteDogs.dogs[id]}
          size={dogs === currentBreed ? 'medium' : 'small'}
        />
      )
    })
  }

  const renderBreeds = (breeds: Array<string>) => {
    return breeds.map((breed: string, index) => {
      return (
        <DogBreedBox
          key={index}
          breed={breed}
        />
      )
    })
  }

  return (
    <Container>
      <ImagesContainer>
        {currentBreed.breed === "" ? renderBreeds(allBreeds) : renderDogs(currentBreed)}
      </ImagesContainer>
      <Divider />
      <Footer>
        <Icon icon="redHeartIcon" alt="red heart icon" />
        <Title>Favorites</Title>
      </Footer>
      <ImagesContainer>
        {renderDogs(favoriteDogs)}
      </ImagesContainer>
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '20px',
})

const ImagesContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  height: '100%'
})

const Divider = styled.div({
  marginTop: '20px',
  border: `1px solid ${colors.veryLightGray}`
})

const Footer = styled.div({
  display: 'flex',
  margin: '20px 0'
})

const Title = styled.h1({
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '33px',
  marginLeft: '25px'
})

const mapStateToProps = (state: AppState) => ({
  // avoiding getCurrentBreed(getDogState(state)) with reselect
  currentBreed: getCurrentBreed(state),
  favoriteDogs: getFavoriteDogs(state),
  allBreeds: getAllBreeds(state),
})

export default connect(mapStateToProps, null)(DogImages)