import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  padding-left: 2.5rem;
  display: flex;
  gap: 2rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`
export const ProfileContainerHeader = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: 1.5rem;
  }
`
export const ProfileContainerFooter = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-top: 1.5rem;

  > div {
    gap: 0.5rem;
    display: flex;
    align-items: center;
  }

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`
