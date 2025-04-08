import React, { useState } from 'react'
import upperImage from '../assets/ylacropped.png';
import lowerImage from '../assets/alacropped.png';
import fullImage from '../assets/kokocropped.png';
import defaultImage from '../assets/tyhjacropped.png';

const muscleGroupImages = {
    'Ylä': upperImage,
    'Ala': lowerImage,
    'Koko': fullImage,
    'Yleis': defaultImage,
}

const muscleGroupTexts = {
    'Ylä': 'info for upper body',
    'Ala': 'info for lower body',
    'Koko': 'info for full body',
    'Yleis': 'Yleistietoa lihasryhmistä',
}

const MuscleGroup = ({ selectedValue, onSelect}) => {
    const [selectedGroup, setSelectedGroup] = useState(selectedValue || 'Yleis')

    const handleButtonClick = (group) => {
        setSelectedGroup(group)
        onSelect(group)
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.selectHeader}>Valitse Lihasryhmä</h1>
        <div style={styles.flexContainer}>
            <div style={styles.buttonsContainer}>
                {['Ylä', 'Ala', 'Koko'].map((group) => (
                    <button
                        key={group}
                        style={{
                            ...styles.button,
                            backgroundColor: selectedGroup === group ? '#00b3ce' : '#1CDAF9',
                            color: selectedGroup === group ? '#fff' : '#000',
                        }}
                        onClick={() => handleButtonClick(group)}
                    >
                        {group}
                    </button>
                ))}
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
        </div>
    )
    
}

const styles = {
    container: {
        border: "2px solid #15daf7",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        padding: '30px',
    },
    selectHeader: {
        marginTop: '30px',
        fontSize: '48px',
        fontWeight: 'bold',
    },
    flexContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        width: '100%',
        height: '100%',
    },
    buttonsContainer: {
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        height: '100%',
        maxWidth: '30%',
        gap: '20px',
    },
    button: {
        padding: '20px 40px', // Increased padding for a larger clickable area
        fontSize: '48px',      // Adjusted font size for readability and emphasis
        backgroundColor: '#1CDAF9',
        color: '#fff',
        border: '2px solid #1CDAF9', // Matching border color for a cohesive look
        borderRadius: '8px',  // Slightly more rounded corners for a modern appearance
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.2s',
        maxWidth: '60%',     // Ensures a consistent and substantial button width
        minWidth: '200px',
        maxHeight: '18%',    // Provides ample height for touch targets
        minHeight: '15%',
        textAlign: 'center',  // Centers text within the button
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: '0px 40px 0px 30px',
        textAlign: 'center',
        height: '100%'
    },
    image: {
        filter: 'blur(.3px) invert(46%) sepia(100%) hue-rotate(140deg) brightness(115%) contrast(180%)',
        maxHeight: '100%',
        objectFit: 'contain',
    },
    infobox: {
        padding: '10px 20px',
        minWidth: '20%',
        minHeight: '51%',
        border: "2px solid #15daf7",
        backgroundColor: '#f9f9f9',
    }
}

export default MuscleGroup;
