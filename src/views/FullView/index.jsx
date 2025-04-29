import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useRef } from 'react'
import { useWorkout } from '../../context/WorkoutContext'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import HiddenPrintContent from "../../components/Print";
import { useReactToPrint } from "react-to-print"

//Entry for FullView

const FullView = () => {
    const { workout } = useWorkout()
    const navigate = useNavigate()
    const location = useLocation()
    const printRef = useRef()

    const handlePrint = useReactToPrint({
        documentTitle: 'Recommender Results',
        contentRef: printRef,
    })

    const steps = ["/fullview/welcome", "/fullview/duration", "/fullview/intensity", "/fullview/musclegroup", "/fullview/result"]
    const currentIndex = steps.indexOf(location.pathname)
    const isFirstStep = currentIndex === 0

    const goBackToStart = () => {
        navigate("/fullview")
    }

    const onPrev = () => {
        if (currentIndex > 0) {
            navigate(steps[currentIndex - 1])
        }
    }

    const isNextDisabled = () => {
        switch (location.pathname){
            case steps[2]:
                return !workout.intensityComplete
            case steps[3]:
                return !workout.muscleGroupComplete
            default:
                return false
        }
    }

    const handleSubmit = () => {
        if (location.pathname === "/fullview/result") {
            console.log("Triggering print...")
            handlePrint();
        }
    }

    return (
        <div style={{...styles.container, ...(isFirstStep ? styles.clickable : {})}} onClick={isFirstStep ? () => navigate(steps[currentIndex + 1]) : undefined}>
            <Header />
            <div style={styles.content}>
                <Outlet /> {/* This will render DurationScreen, IntensityScreen, etc. */}
            </div>
            <Footer
                onNext={() => navigate(steps[currentIndex + 1])}
                onPrev={onPrev}
                onSubmit={() => handleSubmit()}
                isFirstStep={isFirstStep}
                isLastStep={currentIndex === steps.length - 1}
                onBackToStart={goBackToStart}
                isNextDisabled={isNextDisabled()}
            />
            {location.pathname === "/fullview/result" && (
                <HiddenPrintContent ref={printRef}/>
            )}
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    },
    content: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        overflow: "hidden"
    },
}

export default FullView