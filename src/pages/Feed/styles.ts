import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const FeedContainer = styled.main`
  width: 100%;
  margin: 0 auto;
  margin-top: -8rem;
  max-width: 57rem;
  padding: 1rem;
  min-height: calc(100vh - 18.5rem);

  > section {
    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
    }
  }
`

export const HeaderSectionPost = styled.div`
  margin-top: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: 700;
  }
`

export const SearchInput = styled.input`
  display: flex;
  width: 100%;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  color: #afc2d4;
  border: 1px solid var(--base-border, #1c2f41);
  background: var(--base-input, #040f1a);
  margin-top: 0.75rem;
  margin-bottom: 3rem;
`

export const PostListContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`

export const PostContainer = styled(NavLink)`
  text-decoration: none;
  width: 26rem;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-post']};
  max-height: 16.25rem;
  border-radius: 0.625rem;
  overflow: hidden;
  text-overflow: ellipsis;

  > div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    h4 {
      color: var(--base-title, #e7edf4);
      font-size: 1.25rem;
      font-weight: 700;
    }
    span {
      width: 5rem;
    }
  }

  p {
    overflow: hidden;
    text-align: justify;
    color: ${(props) => props.theme['base-text']};
  }
`
