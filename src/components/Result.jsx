import React, { useState } from 'react'
import { useWorkout } from "../context/WorkoutContext"
import { exercises } from "../data/Moves"

const intensityLevelMap = {
    'aloittelija': 1,
    'keskitaso': 2,
    'raskas': 3,
}

const Result = () => {
    const { workout } = useWorkout();
    const [randomizedExercises, setRandomizedExercises] = useState([])
    const [isRandomized, setIsRandomized] = useState(false)

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

    // score filtering logic, duration is not used yet
    const scoredExercises = exercises
        .filter(ex => ex.type === workout.muscleGroup.toLowerCase())
        .map(ex => {
            if (ex.intensity > selectedIntensity) return null
            const score = ex.intensity === selectedIntensity ? 2 : 1
            return { ...ex, score}
        })
        .filter(Boolean)
        .sort((a, b) => b.score - a.score)

    const handleRandomize = () => {
        const shuffled = shuffleByScore(scoredExercises)
        setRandomizedExercises(shuffled)  // Set the randomized list
        setIsRandomized(true)  // Mark that we've randomized
    }

    const exercisesToDisplay = isRandomized ? randomizedExercises : scoredExercises;

    return (
        <div style={styles.container}>
            <div style={styles.resultData}>
                {exercisesToDisplay.length === 0 ? (
                    <p>Ei sopivia liikkeitä</p>
                ) : (
                    <ul style={styles.ul}>
                        {exercisesToDisplay.map(ex => (
                            <li style={styles.li} key={ex.name}>
                                Score {ex.score} {ex.name} {ex.machineId ? `(Laite ${ex.machineId})` : `(Ei laitenumero)`}
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
                        <button onClick={handleRandomize} style={styles.button}>Randomize Results</button>
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
        padding: '20px',
        marginRight: '20px',
    },
    ul: {  
        listStyleType: 'none', // Remove default list bullets
        padding: 0, // Remove default padding for list
        margin: 0, // Remove default margin
    },
    li: {
        padding: '10px', // Add padding around each list item
        border: '1px solid #ddd', // Add a border between items for separation
        fontSize: '2rem', // Set font size for list items
        color: '#333', // Text color for items
        transition: 'background-color 0.3s', // Smooth transition for hover effect
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
        marginTop: '10px',
    },
    infobox: {
        flex: 2,
        marginTop: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
    },
    button: {
        padding: '10px 50px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#1CDAF9',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
    },
}

export default Result;
