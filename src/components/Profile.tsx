import styled, { css } from "styled-components/macro"

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({ ...props }) => {
  return (
    <StyledProfile {...props}>
      <UserImage src="https://github.com/snahier.png" alt="Snahier" />
      <Details>
        <strong>Snahier</strong>
        <p>Level 1</p>
      </Details>
    </StyledProfile>
  )
}

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
`

const UserImage = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
`

const Details = styled.div`
  ${({ theme }) => css`
    margin-left: 1.5rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${theme.title};
    }

    p {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  `}
`