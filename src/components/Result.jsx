import React, { useState } from 'react';
import { useWorkout } from "../context/WorkoutContext";

const Result = () => {
    const { workout } = useWorkout();
    const [randomized, setRandomized] = useState(false);

    const handleRandomize = () => {
        // add logic later to reroll the workout data
    };

    return (
        <div style={styles.container}>
            <div style={styles.resultData}>
                Liikesarjat tänne
            </div>
            <div style={styles.rightSideContainer}>
                <div style={styles.detailsContainer}>
                    <div style={styles.detailSelection}>
                        <p><strong>Lihasryhmä:</strong> {workout.muscleGroup || "Not selected"}</p>
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
    );
};

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
