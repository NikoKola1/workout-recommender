import React from 'react'
import { Slider, Panel } from 'rsuite'
import './slider.css'
import 'rsuite/dist/rsuite-no-reset.min.css'

const Duration = ({ selectedValue, onSelect }) => {
    const convertToTimeString = (minutes) => `${minutes} min`

    const handleSliderChange = (value) => {
        onSelect(convertToTimeString(value))
    };

    const defaultTime = 45
    const marks = {
        15: '15 min',
        30: '30 min',
        45: '45 min',
        60: '60 min',
        75: '75 min',
        90: '90 min',
    }

    return (
        <div style={styles.container}>
            <Panel header="Choose Duration" style={styles.panel}>
                <div style={styles.sliderContainer}>
                    <Slider
                        min={15}  
                        max={90}
                        step={15}  
                        value={selectedValue ? parseInt(selectedValue, 10) : defaultTime}
                        onChange={handleSliderChange}
                        graduated
                        tooltip="auto"
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
                    <span>Selected Duration: {selectedValue || `${defaultTime} min`}</span>
                </div>
            </Panel>
            <div style={styles.generalInfo}>
                <h2>General Info</h2>
                <p>
                    Duration is a key factor for optimizing workout routines. Select a duration that aligns with your fitness level and goals.
                </p>
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
        borderRadius: '5px',
        padding: '20px',
        backgroundColor: '#ffffff',
    },
    labelTrack: {
        position: 'relative',
        width: '100%',
        marginTop: '10px',
        height: '20px',
    },
    label: {
        position: 'absolute',
        transform: 'translateX(-50%)', // Center each label on its mark
        fontSize: '12px',
        fontWeight: 'normal',
        color: '#333',
        textAlign: 'center',
        whiteSpace: 'nowrap',
    },
    panel: {
        textAlign: 'center',
        padding: '15px',
        width: '100%',
        maxWidth: '500px',
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
        fontSize: '18px',
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
};

export default Duration;
