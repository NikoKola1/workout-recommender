import React from 'react'
import { Slider, Panel } from 'rsuite'
import 'rsuite/dist/rsuite-no-reset.min.css'
import './slider.css'

const Duration = ({ selectedValue, onSelect }) => {
    const convertToTimeString = (minutes) => `${minutes} min`

    const handleSliderChange = (value) => {
        onSelect(convertToTimeString(value))
    }

    const defaultTime = 45
    const marks = {
        15: '15 min',
        30: '30 min',
        45: '45 min',
        60: '60 min',
        75: '75 min',
        90: '90 min',
    }

    const chooseText = (
        <span style={styles.chooseText}>
          Valitse kesto
        </span>
      )


    return (
        <div style={styles.container}>
            <Panel header={chooseText} style={styles.panel}>
                <div style={styles.sliderContainer}>
                    <Slider
                        min={15}  
                        max={90}
                        step={15}  
                        value={selectedValue ? parseInt(selectedValue, 10) : defaultTime}
                        onChange={handleSliderChange}
                        graduated
                        tooltip={false}
                        marks={marks}
                        style={styles.slider}
                        className="custom-slider"
                    />
                </div>
                <div style={styles.labelTrack}>
                    {Object.entries(marks).map(([key, value]) => (
                        <div key={key} style={{ ...styles.label, left: `${((key - 15) / (90 - 15)) * 100}%` }}>
                            {value}
                        </div>
                    ))}
                </div>
                <div style={styles.selectedTime}>
                    <span>{selectedValue}</span>
                </div>
            </Panel>
            <div style={styles.generalInfo}>
                <h2>Yleistä tietoa</h2>
                <p>
                    Tähän tekstiä mitä saadaan heiltä ja pitää muokata tyylejä.
                </p>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid #15daf7',
        borderRadius: '5px',
        padding: '20px',
        width: '100%',
        backgroundColor: '#ffffff',
    },
    chooseText:{
        fontSize: '3rem', 
        fontWeight: 'bold' 
    },
    labelTrack: {
        position: 'relative',
        width: '200%',
        marginTop: '10px',
        marginLeft: '-25%',
        height: '20px',
    },
    label: {
        position: 'absolute',
        transform: 'translateX(-230%)', // Center each label on its mark
        fontWeight: 'normal',
        fontSize: '1.2rem',
        color: '#333',
        textAlign: 'center',
        whiteSpace: 'nowrap',
    },
    panel: {
        textAlign: 'center',
        padding: '15px',
        minWidth: '500px',
        overflow:'visible',
    },
    sliderContainer: {
        marginTop: '20px',
        marginBottom: '10px',
    },
    slider: {
        width: '100%',
        marginBottom: '15px',
    },
    selectedTime: {
        marginTop: '2rem',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#333',
    },
    generalInfo: {
        marginTop: '20px',
        padding: '10px 20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
        maxWidth: '500px',
    },
}

export default Duration;
