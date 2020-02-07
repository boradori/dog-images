import React, { FC } from 'react';
import styled from '@emotion/styled'
import Icon from './Icon'
import { colors } from '../assets/colors'
import { connect } from 'react-redux'
import { favoritizeDog } from '../redux/actions'
import { Dog } from '../types'
import debounce from 'lodash.debounce'

interface StateProps {}

interface DispatchProps {
  favoritizeDog: (breed: string, id: string, favorited: boolean) => void
}

interface OwnProps {
  dog: Dog
  size: string
}

type Props = StateProps & DispatchProps & OwnProps

const Image: FC<Props> = ({dog, size, favoritizeDog}) => {
  const handleClick = debounce((): void => {
    favoritizeDog(dog.breed, dog.id, dog.favorited)
  }, 300)

  const redHeart = <Icon icon="redHeartIcon" alt="red heart icon" onClick={handleClick} />
  const whiteHeart = <Icon icon="whiteHeartIcon" alt="white heart icon" onClick={handleClick} />

  return (
    <Container size={size}>
      <ImageContainer
        key={dog.id}
        src={dog.imageUrl}
        onClick={handleClick}
      />
      <HeartContainer>
        { dog.favorited ? redHeart : whiteHeart }
      </HeartContainer>
    </Container>
  )
}

interface ContainerProps {
  size: string
}

const Container = styled.div<ContainerProps>`
  position: relative;
  width: ${props => props.size === 'medium' ? '151px' : '117px'};
  height: ${props => props.size === 'medium' ? '151px' : '117px'};
  @media (max-width: 320px) {
    width: ${props => props.size === 'medium' ? '144px' : '98.6px'};
    height: ${props => props.size === 'medium' ? '144px' : '98.6px'};
  }
  @media (min-width: 321px) and (max-width: 375px) {
    width: ${props => props.size === 'medium' ? '109px' : '85.75px'};
    height: ${props => props.size === 'medium' ? '109px' : '85.75px'};
  }
  @media (min-width: 376px) and (max-width: 414px) {
    width: ${props => props.size === 'medium' ? '121px' : '94.75px'};
    height: ${props => props.size === 'medium' ? '121px' : '94.75px'};
  }
  margin: ${props => props.size === 'medium' ? '8px' : '4px'};
  background: ${colors.veryLightGray};
`

const ImageContainer = styled.img({
  width: '100%',
  height: '100%',
  borderRadius: '4px',
})

const HeartContainer = styled.div({
  position: 'absolute',
  width: '16.73px',
  height: '15px',
  right: '5%',
  bottom: '5%',
})

const mapDispatchToProps = {
  favoritizeDog
}

export default connect(null, mapDispatchToProps)(Image)