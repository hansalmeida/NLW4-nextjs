import { createContext, ReactNode, useState } from "react"

interface ChallengesContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  levelUp: () => void
  startNewChallenge: () => void
}

interface ChallengesProviderProps {
  children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export const ChallengesProvider = ({ children }) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  const levelUp = () => setLevel(level + 1)

  const startNewChallenge = () => {
    console.log("new challenge")
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}