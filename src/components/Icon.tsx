import React, { FC } from 'react'
import styled from '@emotion/styled'
import { icons } from '../assets'

interface Props {
  icon: string
  alt: string
  onClick?: () => void
}

const Icon: FC<Props> = ({ icon, alt, onClick }): any => {
  const renderIcon = (icon: string, alt: string, onClick?: () => void) => {
    switch (icon) {
      case "redHeartIcon":
        return <RedHeartIcon src={icons[icon]} alt={alt} onClick={onClick} />
      case "whiteHeartIcon":
        return <WhiteHeartIcon src={icons[icon]} alt={alt} onClick={onClick} />
    }
  }

  return renderIcon(icon, alt, onClick)
}

const RedHeartIcon = styled.img({
  width: '17px',
  height: '15px',
  alignSelf: 'center',
})

const WhiteHeartIcon = styled.img({
  width: '17px',
  height: '15px',
  alignSelf: 'center',
})

export default Icon