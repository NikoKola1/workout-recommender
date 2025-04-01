import { Slider, Panel } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'

const Duration = ({ selectedValue, onSelect }) => {
    const convertToTimeString = (minutes) => {
        if (minutes === 0) return ''
        return `${minutes} min`
    }

    // Handle slider change
    const handleSliderChange = (value) => {
        onSelect(convertToTimeString(value))
    }

    return (
        <div style={styles.box}>
            <Panel header="Choose Duration" bordered style={styles.panel}>
                <div style={styles.sliderContainer}>
                    <Slider
                        min={0}  // Start at 0 minutes
                        max={120}  // Max is 2 hours (120 minutes)
                        step={20}  // Step size is 20 minutes
                        value={selectedValue ? parseInt(selectedValue, 10) : 0}
                        onChange={handleSliderChange}
                        tooltip="auto"
                        style={styles.slider}
                    />
                </div>
                <div style={styles.selectedTime}>
                    <span>Selected Duration: {selectedValue || "0 min"}</span>
                </div>
            </Panel>
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
    sliderContainer: {
        marginTop: '20px',
        marginBottom: '10px',
    },
    slider: {
        width: '100%',
        marginBottom: '15px', // Space between the slider and the selected time text
    },
    panel: {
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        backgroundColor: '#f9f9f9',
    },
    selectedTime: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
    },
}

export default Duration
