import { createContext, useContext, useState } from "react"

const WorkoutContext = createContext()

export const WorkoutProvider = ({ children }) => {
    const initialWorkout = {
        duration: "",
        intensity: "",
        muscleGroup: "",
        intensityComplete: false,
        muscleGroupComplete: false,
    }

    const [workout, setWorkout] = useState(initialWorkout)

    const resetWorkout = () => setWorkout(initialWorkout)

    return (
        <WorkoutContext.Provider value={{ workout, setWorkout, resetWorkout }}>
            {children}
        </WorkoutContext.Provider>
    )
}

export const useWorkout = () => useContext(WorkoutContext)