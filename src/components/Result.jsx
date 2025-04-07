import { useWorkout } from "../context/WorkoutContext"

const Result = () => {
    const { workout } = useWorkout()

    return (
        <div style={styles.container}>
            <h2>Treeniohjelma</h2>
            <p><strong>Kesto:</strong> {workout.duration || "Not selected"}</p>
            <p><strong>Vaativuus:</strong> {workout.intensity || "Not selected"}</p>
            <p><strong>Lihasryhmä:</strong> {workout.muscleGroup || "Not selected"}</p>
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        border: "2px solid black",
        borderRadius: "8px",
        textAlign: "center",
        maxWidth: "400px",
        margin: "auto",
    },
    button: {
        marginTop: "20px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
    },
}

export default Result
