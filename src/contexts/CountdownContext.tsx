import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { ChallengesContext } from "./ChallengesContext"

let countdownTimeout: NodeJS.Timeout

interface CountdownContextData {
  isActive: boolean
  hasFinished: boolean
  minutes: number
  seconds: number
  startCountdown: () => void
  resetCountdown: () => void
}

interface CountdownContextProps {
  children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData)

export const CountdownProvider = ({ children }: CountdownContextProps) => {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const startCountdown = () => setIsActive(true)
  const resetCountdown = () => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(25 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
      setHasFinished(false)
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider
      value={{
        isActive,
        hasFinished,
        minutes,
        seconds,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
