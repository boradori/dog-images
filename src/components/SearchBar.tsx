import React, { FC, useState, useRef, useEffect, ChangeEvent, FormEvent } from 'react'
import styled from '@emotion/styled'
import { colors } from '../assets/colors'
import { connect } from 'react-redux'
import { fetchDogs } from '../redux/actions'

interface StateProps {}

interface DispatchProps {
  fetchDogs: (input: string) => void
}

type Props = StateProps & DispatchProps

const SearchBar: FC<Props> = ({fetchDogs}) => {
  const [searchText, setSearchText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null)

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (inputRef.current) { inputRef.current.focus() }
    fetchDogs(searchText)
  }

  useEffect(() => {
    if (inputRef.current) { inputRef.current.focus() }
  }, [])

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <SearchField
          ref={inputRef}
          type='text'
          value={searchText}
          onChange={handleValueChange}
        />
        <SearchButton type='submit'>
          Search
        </SearchButton>
      </Form>
    </Container>
  )
}

const Container = styled.div({
  marginTop: '20px',
  maxWidth: '640px',
  width: '100%',
  paddingLeft: '1rem',
  paddingRight: '1rem',
})

const Form = styled.form({
  display: 'flex',
  justifyContent: 'space-center',
  flex: 'wrap',
  maxWidth: '640px',
  width: '100%',
})

const SearchField = styled.input({
  background: colors.mostlyWhiteGrey,
  width: '100%',
  border: '0px none',
  borderRadius: '4px',
  outline: 'none',
  fontFamily: 'Nunito Sans',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '16px',
  lineHeight: '22px',
  paddingLeft: '17px',
})

const SearchButton = styled.button({
  display: 'flex',
  justifyContent: 'center',
  background: colors.lightBlue,
  borderRadius: '4px',
  color: colors.white,
  height: '36px',
  minWidth: '100px',
  border: '0px none',
  outline: 'none',
  alignSelf: 'center',
  fontFamily: 'Nunito Sans',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '14px',
  lineHeight: '19px',
  ':hover, :active': {
    background: colors.veryDarkGrayishBlue
  }
})

const mapDispatchToProps = {
  fetchDogs
}

export default connect(null, mapDispatchToProps)(SearchBar)