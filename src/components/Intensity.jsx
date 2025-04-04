import React, { useState } from 'react';

const intensityTexts = {
    'low': 'Low intensity is ideal for beginners or recovery workouts.',
    'medium': 'Medium intensity provides a balance of effort and endurance.',
    'high': 'High intensity is challenging and best for advanced fitness levels.',
    'default': 'Select an intensity level to see more information.',
};

const IntensitySelection = ({ selectedValue, onSelect }) => {
    const [selectedIntensity, setSelectedIntensity] = useState(selectedValue || 'default');

    const handleButtonClick = (intensity) => {
        setSelectedIntensity(intensity);
        onSelect(intensity);
    };

    return (
        <div style={styles.container}>
            <div style={styles.buttonsContainer}>
                <button style={styles.button} onClick={() => handleButtonClick('low')}>
                    Low
                </button>
                <button style={styles.button} onClick={() => handleButtonClick('medium')}>
                    Medium
                </button>
                <button style={styles.button} onClick={() => handleButtonClick('high')}>
                    High
                </button>
            </div>
            <div style={styles.infobox}>
                <h2>{selectedIntensity.charAt(0).toUpperCase() + selectedIntensity.slice(1)} Intensity</h2>
                <p>{intensityTexts[selectedIntensity]}</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid #15daf7',
        padding: '20px',
        borderRadius: '5px',
        backgroundColor: '#ffffff',
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#1CDAF9',
        color: '#fff',
        border: '2px solid #AAAAAA',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    infobox: {
        padding: '10px 20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
        maxWidth: '400px',
    },
};

export default IntensitySelection;
