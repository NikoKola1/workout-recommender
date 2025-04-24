import { useWorkout } from "../../context/WorkoutContext"
import Duration from "../../components/Duration"
import { useEffect } from "react"

const DurationScreen = () => {
    const { workout, setWorkout } = useWorkout()

    const defaultDuration = '45 min'
    const duration = workout?.duration || defaultDuration
    //handle default duration if user skips moving the slider
    useEffect(() => {
        if (!workout?.duration) {
            setWorkout({ ...workout, duration: defaultDuration })
        }
    }, [workout, setWorkout])

    const handleSelectDuration = (value) => (
        setWorkout({ ...workout, duration: value})
    )

    return (
        <div style={styles.container}>
            <Duration
                selectedValue={duration}
                onSelect={handleSelectDuration}
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
