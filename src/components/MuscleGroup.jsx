import React, { useState } from 'react'
import upperImage from '../assets/ylavartalotaustaton.png';
import lowerImage from '../assets/alavartalotaustaton.png';
import fullImage from '../assets/kokovartalotaustaton.png';
import defaultImage from '../assets/tyhjataustaton.png';

const muscleGroupImages = {
    'upper': upperImage, // Replace with actual image paths
    'lower': lowerImage,
    'full': fullImage,
    'default': defaultImage,
}
const MuscleGroup = ({ selectedValue, onSelect, isMobile }) => {
    const [selectedGroup, setSelectedGroup] = useState( selectedValue || 'default')
    
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
        display: 'flex',
        justifyContent: 'space-between',
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
    },
    imageContainer: {
        marginLeft: '20px',
        textAlign: 'center',
        maxWidth: '500px',
    },
    image: {
        maxWidth: '100%',
        maxHeight: '400px',
        objectFit: 'contain',
    }
}

export default MuscleGroup;
