import { useWorkout } from "../../context/WorkoutContext"
import MuscleGroup from "../../components/MuscleGroup"

const MuscleGroupScreen = () => {
    const { workout, setWorkout } = useWorkout()

    return (
        <div style={styles.container}>
            <MuscleGroup
                selectedValue={workout.muscleGroup}
                onSelect={(value) => setWorkout({ ...workout, muscleGroup: value })}
            />
        </div>
    )
}

const styles = {
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        overflowY: "auto"
    }
}

export default MuscleGroupScreen