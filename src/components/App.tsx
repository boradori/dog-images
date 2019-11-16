import React from 'react';
import styled from '@emotion/styled'
import Header from './Header'
import SearchBar from './SearchBar'

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <SearchBar />
    </Container>
  );
}

const Container = styled.div({
  margin: '0 auto',
  height: '100%',
  width: '560px',
  paddingTop: '60px',
})

export default App;
