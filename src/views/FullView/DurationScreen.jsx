import { useNavigate } from "react-router-dom"
import { useWorkout } from "../../context/WorkoutContext"
import Duration from "../../components/Duration"

const DurationScreen = () => {
    const navigate = useNavigate()
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        overflowY: "auto"
    }
}

export default DurationScreen
