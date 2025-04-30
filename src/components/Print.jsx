import React, { forwardRef } from "react"
import { useWorkout } from "../context/WorkoutContext"
import './print.css'

const currentDate = new Date()
const opts = {
    month: 'short', // Abbreviated month (e.g., "Jun")
    day: 'numeric', // Day of the month (e.g., 10)
    year: 'numeric', // Full year (e.g., 2025)
    hour: '2-digit', // 2-digit hour
    minute: '2-digit', // 2-digit minute
    hour12: false
}

const formattedDate = currentDate.toLocaleString('fi-FI', opts)

const HiddenPrintContent = forwardRef((props, ref) => {
    const { workout, finalExercises } = useWorkout()

    return (
        <div ref={ref} className="print-content">
            <div className="print-layout">
                <div className="print-left">
                    <ul>
                        {finalExercises.map((ex, index) => (
                            <li key={`${ex.name}-${index}`}>
                                <div className="print-list-texts">
                                    <p>{ex.machineId ? `(Laite ${ex.machineId})` : `(Ei laitenumero)`}</p>
                                    <p>{ex.name}</p>
                                    <p> {`${ex.sets} sarjaa x ${ex.reps} toistoa`}</p>
                                </div>
                                <img src={null} alt="img" />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="print-right">
                    <div className="print-details">
                        <p style={{ whiteSpace: 'nowrap'}}>{formattedDate}</p>
                        <p><strong>Lihasryhmä:</strong> {workout.muscleGroup || "Ei valittu"}{workout.muscleGroup ? 'keho' : ''}</p>
                        <p><strong>Kesto:</strong> {workout.duration || "Ei valittu"}</p>
                        <p><strong>Vaativuus:</strong> {workout.intensity || "Ei valittu"}</p>
                    </div>
                    <div className="print-infobox">
                        <p>Infobox</p>
                    </div>
                </div>
            </div>
        </div>
    )
})

const styles = {
    ul: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',
    },
    li: {
        fontSize: '2rem',
        color: '#333',
    },
    listTexts: {
        flex: 1,
        marginRight: '20px',
    },
}

export default HiddenPrintContent;
