import React, { FC, useEffect } from 'react';
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { getAllBreeds } from '../redux/selectors'
import { AppState } from '../types'
import { fetchAllBreeds } from '../redux/actions'
import { initialState } from '../redux/dogReducer'
import Header from './Header'
import SearchBar from './SearchBar'
import DogImages from './DogImages'

interface StateProps {}

interface DispatchProps {
  fetchAllBreeds: () => void
}

type Props = StateProps & DispatchProps

const App: FC<Props> = ({fetchAllBreeds}) => {
  useEffect(() => {
    fetchAllBreeds()
  }, [fetchAllBreeds])

  return (
    <Container>
      <Header />
      <SearchBar />
      <DogImages
        currentBreed={initialState.currentBreed}
        favoriteDogs={initialState.favoriteDogs}
        allBreeds={initialState.allBreeds}
      />
    </Container>
  );
}

const Container = styled.div({
  margin: '0 auto',
  height: '100%',
  width: '560px',
  paddingTop: '60px',
})

const mapStateToProps = (state: AppState) => ({
  allBreeds: getAllBreeds(state)
})

const mapDispatchToProps = {
  fetchAllBreeds
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
