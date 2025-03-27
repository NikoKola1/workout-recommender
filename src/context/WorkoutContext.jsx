import { createContext, useContext, useState } from "react"

const WorkoutContext = createContext()

export const WorkoutProvider = ({ children }) => {
    const [workout, setWorkout] = useState({
        duration: "",
        intensity: "",
        muscleGroup: "",
    })

    return (
        <WorkoutContext.Provider value={{ workout, setWorkout }}>
            {children}
        </WorkoutContext.Provider>
    )
}

export const useWorkout = () => useContext(WorkoutContext)