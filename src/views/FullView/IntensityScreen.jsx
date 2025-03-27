import { useWorkout } from "../../context/WorkoutContext"
import Intensity from "../../components/Intensity"

const IntensityScreen = () => {
    const { workout, setWorkout } = useWorkout()

    return (
        <div style={styles.container}>
            <Intensity
                selectedValue={workout.intensity}
                onSelect={(value) => setWorkout({ ...workout, intensity: value })}
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

export default IntensityScreen