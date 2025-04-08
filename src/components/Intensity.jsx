import React, { useState } from 'react'

const intensityTexts = {
    'aloittelija': 'Tähän heidän tuottamaa tekstiä',
    'keskitaso': 'Tähän heidän tuottamaa tekstiä',
    'raskas': 'Tähän heidän tuottamaa tekstiä',
    'yleistä': 'Tähän heidän tuottamaa tekstiä',
}

const IntensitySelection = ({ selectedValue, onSelect }) => {
    const [selectedIntensity, setSelectedIntensity] = useState(selectedValue || 'yleistä')

    const handleButtonClick = (intensity) => {
        setSelectedIntensity(intensity)
        onSelect(intensity)
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.selectHeader}>Valitse teho</h2>
            <div style={styles.buttonsContainer}>
                {['aloittelija', 'keskitaso', 'raskas'].map((group) => (
                    <button
                        key={group}
                        style={{
                            ...styles.button,
                            backgroundColor: selectedIntensity === group ? '#00b3ce' : '#1CDAF9',
                            color: selectedIntensity === group ? '#fff' : '#000',
                        }}
                        onClick={() => handleButtonClick(group)}
                    >
                        {group}
                    </button>
                ))}
            </div>
            <div style={styles.infobox}>
                <h2>{selectedIntensity.charAt(0).toUpperCase() + selectedIntensity.slice(1)} vaativuus</h2>
                <p>{intensityTexts[selectedIntensity]}</p>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        border: '2px solid #15daf7',
        padding: '20px',
        borderRadius: '5px',
        backgroundColor: '#ffffff',
        width: '100%'
    },
    selectHeader: {
        fontSize: '48px', // Adjusted font size for prominence
        fontWeight: 'bold',
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '15px',
        marginBottom: '20px',
        minWidth: '59%'
    },
    button: {
        padding: '25px 40px', // Increased padding for a larger clickable area
        fontSize: '48px',      // Adjusted font size for readability and emphasis
        minWidth: '33%',
        maxHeight: '70%',
        minHeight: '150px',
        backgroundColor: '#1CDAF9',
        color: '#fff',
        border: '2px solid #1CDAF9', // Matching border color for a cohesive look
        borderRadius: '8px',  // Slightly more rounded corners for a modern appearance
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.2s',
        textAlign: 'center',  // Centers text within the button
    },
    infobox: {
        padding: '20px 30px', // Increased padding for more content space
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
        minWidth: '60%', // Ensures infobox matches the width of the container
        minHeight: '200px', // Increased height for more content space
        boxSizing: 'border-box', // Includes padding and border in the element's total width and height
    },
}

export default IntensitySelection
