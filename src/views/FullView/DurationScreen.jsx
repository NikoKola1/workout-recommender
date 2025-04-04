import { useWorkout } from "../../context/WorkoutContext"
import Duration from "../../components/Duration"

const DurationScreen = () => {
    const { workout, setWorkout } = useWorkout()

    return (
        <div style={styles.container}>
            <Duration
                selectedValue={workout.duration}
                onSelect={(value) => setWorkout({ ...workout, duration: value })}
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
        overflowY: "auto"
    }
}

export default DurationScreen
