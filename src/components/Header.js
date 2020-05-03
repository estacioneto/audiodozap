import React from 'react'
import { Link } from 'gatsby'
import config from '../../config'
import HeadphoneIcon from './HeadphoneIcon'
import Search from './Search'
import styled from 'styled-components'

const Title = styled.h1`
  font-weight: bold;
  font-size: 2em;
  margin-left: 15px;
  color: ${(props) => props.theme.colors.primary};
`

const Small = styled.small`
  display: block;
  font-size: 0.5em;
  font-weight: normal;
  color: ${(props) => props.theme.colors.primaryLight};
`

const searchIndices = [{ name: 'Audios', title: `Audios`, hitComp: `AudioHit` }]

const Header = () => (
  <header
    css={css`
      position: relative;
    `}
  >
    <Link to="/">
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <HeadphoneIcon />
        <Title>
          {config.siteTitle}
          <Small>{config.siteDescription}</Small>
        </Title>
      </div>
    </Link>

    <Search collapse indices={searchIndices} />
  </header>
)

export default Header
