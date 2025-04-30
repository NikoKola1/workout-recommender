import { useState, useRef, useEffect } from 'react'
import { useWorkout } from "../context/WorkoutContext"
import { exercises } from "../data/Moves"

const intensityLevelMap = {
    'aloittelija': 1,
    'keskitaso': 2,
    'raskas': 3,
}

const Result = () => {
    const { workout } = useWorkout()
    const { setFinalExercises } = useWorkout()
    const [randomizedExercises, setRandomizedExercises] = useState([])
    const [isRandomized, setIsRandomized] = useState(false)
    const hasSetFinalExercises = useRef(false)

    // Shuffle function to randomize the exercises
    const shuffleByScore = (list) => {
        const grouped = list.reduce((acc, ex) => {
            acc[ex.score] = acc[ex.score] || []
            acc[ex.score].push(ex)
            return acc
        }, {})

        const sortedScores = Object.keys(grouped)
            .map(Number)
            .sort((a, b) => b - a)

        return sortedScores.flatMap(score => shuffleArray(grouped[score]))
    }

    const shuffleArray = (array) => {
        const arr = [...array]; // Create a shallow copy of the array
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Random index
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        return arr;
    }

    const selectedIntensity = intensityLevelMap[workout.intensity]

    function getWorkoutPlan(timeStr) {
        const time = parseInt(timeStr)
        if (time <= 15) return { exercises: 2, sets: 2, reps: 12 }
        if (time <= 30) return { exercises: 3, sets: 2, reps: 10 }
        if (time <= 45) return { exercises: 4, sets: 3, reps: 10 }
        if (time <= 60) return { exercises: 5, sets: 3, reps: 8 }
        if (time <= 75) return { exercises: 6, sets: 3, reps: 8 }
        return { exercises: 6, sets: 4, reps: 8 }
    }

    const plan = getWorkoutPlan(workout.duration)

    let filteredExercises = exercises;

    if (workout.muscleGroup.toLowerCase() !== "koko") {
        filteredExercises = filteredExercises.filter(
            ex => ex.type === workout.muscleGroup.toLowerCase()
        )
    }

    // score filtering logic, duration is not used yet
    const scoredExercises = filteredExercises
        .map(ex => {
            if (ex.intensity > selectedIntensity) return null
            const score = ex.intensity === selectedIntensity ? 2 : 1
            return { ...ex, score, sets: plan.sets, reps: plan.reps}
        })
        .filter(Boolean)
        .sort((a, b) => b.score - a.score)
        .slice(0, plan.exercises)

    const handleRandomize = () => {
        const shuffled = shuffleByScore(scoredExercises)
        setRandomizedExercises(shuffled)  // Set the randomized list
        setIsRandomized(true)  // Mark that we've randomized
        hasSetFinalExercises.current = false
    }

    useEffect(() => {
        if (!hasSetFinalExercises.current) {
            hasSetFinalExercises.current = true
            setFinalExercises(scoredExercises)
        }
    }, [setFinalExercises, scoredExercises])

    const exercisesToDisplay = isRandomized ? randomizedExercises : scoredExercises

    return (
        <div style={styles.container}>
            <div style={styles.resultData}>
                {exercisesToDisplay.length === 0 ? (
                    <p>Ei sopivia liikkeitä</p>
                ) : (
                    <ul style={styles.ul}> {/* slice max exercises based on time*/}
                        {exercisesToDisplay.map((ex, index) => (
                            <li style={styles.li} key={`${ex.name}-${index}`}>
                                <div style={styles.listTexts}>
                                    <p>{ex.name}</p>
                                    <p>{ex.machineId ? `(Laite ${ex.machineId})` : `(Ei laitenumero)`} {`${ex.sets} sarjaa x ${ex.reps} toistoa`}</p>
                                </div>
                                <img src={null} alt="tba" style={styles.placeholderImg}/>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div style={styles.rightSideContainer}>
                <div style={styles.detailsContainer}>
                    <div style={styles.detailSelection}>
                        <p><strong>Lihasryhmä:</strong> {workout.muscleGroup || "Not selected"}{workout.muscleGroup ? 'keho' : ''}</p>
                        <p><strong>Kesto:</strong> {workout.duration || "Not selected"}</p>
                        <p><strong>Vaativuus:</strong> {workout.intensity || "Not selected"}</p>
                    </div>
                    <div style={styles.randomizeButton}>
                        <button onClick={handleRandomize} style={styles.button}>Arvo uudet tulokset <br></br> tai järjestys</button>
                    </div>
                </div>
                <div style={styles.infobox}>
                    infobox
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: '20px',
    },
    resultData: {
        flex: 1,
        border: "2px solid #15daf7",
        marginRight: '20px',
    },
    ul: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-evenly',
        listStyleType: 'none', // Remove default list bullets
        padding: 0, // Remove default padding for list
        margin: 0, // Remove default margin
        overflow: 'hidden',
    },
    li: {
        display: 'flex',
        padding: '8px', // Add padding around each list item
        flexDirection: 'row',
        border: '1px solid #ddd', // Add a border between items for separation
        fontSize: '2rem', // Set font size for list items
        color: '#333', // Text color for items
        transition: 'background-color 0.3s', // Smooth transition for hover effect
    },
    listTexts: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    placeholderImg: {
        border: '1px solid black',
        minWidth: '80px',
        minHeight: '70px',
    },
    rightSideContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    detailsContainer: {
        flex: 1,
        display: 'flex',
        fontSize: '2em',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: '8px',
    },
    detailSelection: {
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid #ddd',
        padding: '10px',
    },
    randomizeButton: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: '0px 10px',
    },
    infobox: {
        flex: 2,
        marginTop: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
    },
    button: {
        padding: '10px 10px',
        fontSize: '1.3rem',
        cursor: 'pointer',
        backgroundColor: "#13c2db",
        color: '#fff',
        border: '2px solid #999999',
        width: '100%',
        borderRadius: "8px",
        transition: 'background-color 0.3s ease',
    },
}

export default Result;
