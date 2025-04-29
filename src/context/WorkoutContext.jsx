import { createContext, useContext, useState } from "react"

const WorkoutContext = createContext(null)

export const WorkoutProvider = ({ children }) => {
    const initialWorkout = {
        duration: "",
        intensity: "",
        muscleGroup: "",
        intensityComplete: false,
        muscleGroupComplete: false,
    }

    const [workout, setWorkout] = useState(initialWorkout)
    const [finalExercises, setFinalExercises] = useState([])

    const resetWorkout = () => setWorkout(initialWorkout)

    const value = {
        workout,
        setWorkout,
        resetWorkout,
        finalExercises,
        setFinalExercises,
    }

    return (
        <WorkoutContext.Provider value={value}>
            {children}
        </WorkoutContext.Provider>
    )
}

export const useWorkout = () => {
    const context = useContext(WorkoutContext)
    if (!context) {
        throw new Error("useWorkout must be used within a WorkoutProvider")
    }
    return context
}