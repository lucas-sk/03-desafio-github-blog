import styled from 'styled-components'

export const InfoCardContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  padding-left: 2.5rem;
  display: flex;
  gap: 2rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
`
export const InfoCardContainerHeader = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    border: none;
    background: transparent;
    font-size: 1.5rem;
  }
`

export const InfoCardContainerFooter = styled.div`
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
