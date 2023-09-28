import styled from 'styled-components'
import cover from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  background: url(${cover}) no-repeat center;
  width: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    margin-bottom: 6.7rem;
  }
`
