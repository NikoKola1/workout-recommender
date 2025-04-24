import { useWorkout } from "../../context/WorkoutContext"
import Intensity from "../../components/Intensity"

const IntensityScreen = () => {
    const { workout, setWorkout } = useWorkout()

    const handleSelectIntensity = (selectedIntensity) => {
        setWorkout({
            ...workout,
            intensity: selectedIntensity,
            intensityComplete: true,
        })
    }   

    return (
        <div style={styles.container}>
            <Intensity
                selectedValue={workout.intensity}
                onSelect={handleSelectIntensity}
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

export default IntensityScreen