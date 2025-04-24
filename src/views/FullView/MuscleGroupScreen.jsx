import { useWorkout } from "../../context/WorkoutContext"
import MuscleGroup from "../../components/MuscleGroup"

const MuscleGroupScreen = () => {
    const { workout, setWorkout } = useWorkout()

    const handleSelectMuscleGroup = (selectedGroup) => {
        setWorkout({
            ...workout,
            muscleGroup: selectedGroup,
            muscleGroupComplete: true,
        })
    }   

    return (
        <div style={styles.container}>
            <MuscleGroup
                selectedValue={workout.muscleGroup}
                onSelect={handleSelectMuscleGroup}
            />
        </div>
    )
}

const styles = {
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
        height:'100%',
    }
}

export default MuscleGroupScreen