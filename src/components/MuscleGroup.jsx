const MuscleGroup = ({ selectedValue, onSelect, isMobile }) => {
    return (
        <div style={{ ...styles.box }}>
            <h2>Choose Muscle Group</h2>
            <select value={selectedValue} onChange={(e) => onSelect(e.target.value)}>
                <option value="">Select</option>
                <option value="Upper Body">Upper Body</option>
                <option value="Lower Body">Lower Body</option>
                <option value="Full Body">Full Body</option>
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

export default MuscleGroup;
