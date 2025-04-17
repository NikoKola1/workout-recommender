import { useState, useEffect } from "react"
import { useWorkout } from "../context/WorkoutContext"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Duration from "../components/Duration"
import Intensity from "../components/Intensity"
import MuscleGroup from "../components/MuscleGroup"
import Result from "../components/Result"

// unused view

const SimpleView = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const { workout, setWorkout } = useWorkout()
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div style={styles.wrapper}>
            <Header />

            <div style={{ ...styles.container, flexDirection: isMobile ? "column" : "row" }}>
                {submitted ? (
                    <Result onModify={() => setSubmitted(false)} />
                ) : (
                    <>
                        <Duration isMobile={isMobile} selectedValue={workout.duration} onSelect={(value) => setWorkout({ ...workout, duration: value })} />
                        <Intensity isMobile={isMobile} selectedValue={workout.intensity} onSelect={(value) => setWorkout({ ...workout, intensity: value })} />
                        <MuscleGroup isMobile={isMobile} selectedValue={workout.muscleGroup} onSelect={(value) => setWorkout({ ...workout, muscleGroup: value })} />
                    </>
                )}
            </div>


            <Footer 
                onSubmit={submitted ? () => alert("Printing results...") : () => setSubmitted(true)} 
                onBackToStart={submitted ? () => setSubmitted(false) : undefined} 
                isLastStep={submitted} 
                showNav={false} // Prevents the "Next" button from appearing
            />
        </div>
    )
}

const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
        flexGrow: 1,
        width: "100%",
        margin: "0 auto",
        overflow: "hidden"

    },
    submitButton: { 
        marginTop: "20px", 
        padding: "10px 20px", 
        fontSize: "16px", 
        cursor: "pointer" 
    },
}

export default SimpleView
