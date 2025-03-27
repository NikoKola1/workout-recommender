const Intensity = ({selectedValue, onSelect }) => {
    return (
        <div style={{ ...styles.box }}>
            <h2>Choose Intensity</h2>
            <select value={selectedValue} onChange={(e) => onSelect(e.target.value)}>
                <option value="">Select</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
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
}

export default Intensity
