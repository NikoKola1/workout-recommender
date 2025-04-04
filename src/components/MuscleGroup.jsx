import React, { useState } from 'react'
import upperImage from '../assets/ylavartalotaustaton.png';
import lowerImage from '../assets/alavartalotaustaton.png';
import fullImage from '../assets/kokovartalotaustaton.png';
import defaultImage from '../assets/tyhjataustaton.png';

const muscleGroupImages = {
    'upper': upperImage,
    'lower': lowerImage,
    'full': fullImage,
    'default': defaultImage,
}

const muscleGroupTexts = {
    'upper': 'info for upper body',
    'lower': 'info for lower body',
    'full': 'info for full body',
    'default': 'default info text (no selection)',
}

const MuscleGroup = ({ selectedValue, onSelect}) => {
    const [selectedGroup, setSelectedGroup] = useState(selectedValue || 'default')

    const handleButtonClick = (group) => {
        setSelectedGroup(group)
        onSelect(group)
    }

    return (
        <div style={styles.container}>
            <div style={styles.buttonsContainer}>
                <button style={styles.button} onClick={() => handleButtonClick('upper')}>
                    Upper Body
                </button>
                <button style={styles.button} onClick={() => handleButtonClick('lower')}>
                    Lower Body
                </button>
                <button style={styles.button} onClick={() => handleButtonClick('full')}>
                    Full Body
                </button>
            </div>
            <div style={styles.imageContainer}>
                {selectedGroup && (
                    <img
                        src={muscleGroupImages[selectedGroup]}
                        alt={selectedGroup}
                        style={styles.image}
                    />
                )}
            </div>
            <div style={styles.infobox}>
                    <h2>{selectedGroup} Info</h2>
                {selectedGroup && (
                    <p>{muscleGroupTexts[selectedGroup]}</p>
                )}
            </div>
        </div>
    )
}

const styles = {
    box: {
        flex: 1,
        minWidth: "200px",
        width: "100%",
        height: "100%",
        border: "2px solid #15daf7",
        textAlign: "center",
        borderRadius: "2px",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        border: "2px solid #15daf7",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        zIndex: '1',
    },
    imageContainer: {
        marginLeft: '-70px',
        marginRight: '-50px',
        textAlign: 'center',
        maxWidth: '500px',
    },
    image: {
        maxWidth: '100%', // Limits the image's width to its container
        maxHeight: '100%', // Limits the height to its container
        width: 'auto', // Ensures proper scaling
        height: 'auto', // Keeps the aspect ratio intact
        objectFit: 'contain', // Ensures the image fits within the container without cropping
    },
    infobox: {
        padding: '10px 20px',
        minWidth: '250px',
        border: "2px solid #15daf7",
        backgroundColor: '#f9f9f9',
        minHeight: '50%'
    }
}

export default MuscleGroup;
