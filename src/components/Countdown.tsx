import Head from "next/head"
import { useContext } from "react"
import styled, { css } from "styled-components/macro"
import { CountdownContext } from "../contexts/CountdownContext"

interface CountdownProps {}

export const Countdown: React.FC<CountdownProps> = ({ ...props }) => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("")
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("")

  return (
    <div>
      <StyledCountdown {...props}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <TimeWrapper>
          <TimeDigit>{minuteLeft}</TimeDigit>
          <TimeDigit>{minuteRight}</TimeDigit>
        </TimeWrapper>

        <TimeSeparator>:</TimeSeparator>

        <TimeWrapper>
          <TimeDigit>{secondLeft}</TimeDigit>
          <TimeDigit>{secondRight}</TimeDigit>
        </TimeWrapper>
      </StyledCountdown>

      {hasFinished ? (
        <CountdownButton disabled>Ciclo encerrado</CountdownButton>
      ) : isActive ? (
        <CountdownButton onClick={resetCountdown} active>
          Abandonar ciclo
        </CountdownButton>
      ) : (
        <CountdownButton onClick={startCountdown}>
          Iniciar um ciclo
        </CountdownButton>
      )}
    </div>
  )
}

const StyledCountdown = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    color: ${theme.title};
    font-family: ${theme.fonts.rajdhani};
    font-weight: 600;
  `}
`

const TimeWrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    background: ${theme.colors.white};

    font-size: 8.5rem;
    text-align: center;

    ${TimeDigit} {
      &:first-child {
        border-right: 1px solid #f0f1f3;
      }
      &:last-child {
        border-left: 1px solid #f0f1f3;
      }
    }
  `}
`

const TimeSeparator = styled.span`
  margin: 0 0.25rem;

  font-size: 6.25rem;
`

const TimeDigit = styled.span`
  flex: 1;
`

type CountdownButtonProps = {
  active?: boolean
}
const CountdownButton = styled.button<CountdownButtonProps>`
  ${({ theme, active }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    margin-top: 2rem;
    width: 100%;
    height: 5rem;

    border: none;
    border-radius: 5px;
    background: ${theme.colors.blue};

    color: ${theme.colors.white};
    font-size: 1.25rem;
    font-weight: 600;

    &:disabled {
      cursor: not-allowed;
      background: ${theme.colors.white};

      color: ${theme.text};
    }

    &:not(:disabled):hover {
      background: ${theme.colors.blueDark};
    }

    ${active &&
    css`
      background: ${theme.colors.white};

      color: ${theme.title};

      &:hover {
        background: ${theme.colors.red};

        color: ${theme.colors.white};
      }
    `}
  `}
`
