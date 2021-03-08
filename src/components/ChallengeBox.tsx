import styled, { css } from "styled-components/macro"

interface ChallengeBoxProps {}

export const ChallengeBox: React.FC<ChallengeBoxProps> = ({ ...props }) => {
  const hasActiveChallenge = true

  return (
    <StyledChallengeBox {...props}>
      {hasActiveChallenge ? (
        <ChallengeActive>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>

          <footer>
            <ChallengeFailedButton>Falhei</ChallengeFailedButton>
            <ChallengeCompleteButton>Completei</ChallengeCompleteButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios
          </p>
        </ChallengeNotActive>
      )}
    </StyledChallengeBox>
  )
}

const StyledChallengeBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 500px;
    padding: 1.5rem 2rem;

    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    background: ${theme.colors.white};

    text-align: center;
  `}
`

const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 3rem;
    max-width: 70%;

    line-height: 1.4;

    img {
      margin-bottom: 1rem;
    }
  }
`

const ChallengeActive = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    height: 100%;

    header {
      padding: 0 2rem 1.5rem;

      border-bottom: 1px solid ${theme.grayLine}

      color: ${theme.colors.blue};
      font-weight: 600;
      font-size: 1.25rem;
    }

    main {
      flex: 1;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      strong {
        margin : 1.5rem 0 1rem;

        color: ${theme.title};
        font-size: 2rem;
        font-weight: 600;
      }

      p {
        line-height: 1.5;
      }
    }

    footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  `}
`

const buttonDefaultStyles = css`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.2s;

    height: 3rem;

    border: none;
    border-radius: 5px;

    color: ${theme.colors.white};
    font-size: 1rem;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  `}
`

const ChallengeFailedButton = styled.button`
  ${({ theme }) => css`
    ${buttonDefaultStyles}
    background: ${theme.colors.red};
  `}
`

const ChallengeCompleteButton = styled.button`
  ${({ theme }) => css`
    ${buttonDefaultStyles}
    background: ${theme.colors.green};
  `}
`