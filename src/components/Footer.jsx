const Footer = ({ onNext, onSubmit, onPrev, isFirstStep, isLastStep, onBackToStart, showNav = true }) => {
    return (
        <div style={styles.footer}>
            {/* Left Section (Back OR Previous) */}
            <div style={styles.sideContainer}>
                {((!isFirstStep && showNav) || isLastStep ) && (
                    <button 
                        style={{ ...styles.button, ...styles.secondaryButton}} 
                        onClick={isLastStep ? onBackToStart : onPrev}
                    >
                        {isLastStep ? "Back" : "Previous"}
                    </button>
                )}
            </div>

            {/* Center Section (Next or Submit) */}
            <div style={styles.centerContainer}>
                {!isLastStep ? (
                    <button 
                        style={{ ...styles.button, ...styles.primaryButton }} 
                        onClick={showNav ? onNext : onSubmit}
                    >
                        {showNav ? "Next" : "Submit"}
                    </button>
                ) : null }
                {/* it's possible to add randomizing button here for the results if it should be included in the footer if wanted */}
            </div>

            {/* Right Section (Print only on last step) */}
            <div style={styles.sideContainer}>
                {isLastStep && (
                    <button 
                        style={{ ...styles.button, ...styles.primaryButton }} 
                        onClick={onSubmit}
                    >
                        🖨 Print
                    </button>
                )}
            </div>
        </div>
    )
}

const styles = {
    footer: {
        width: "100%",
        padding: "10px",
        background: "#FFFFFF",
        border: "2px solid #15daf7",
        borderRadius: "2px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        gap:"10px",
    },
    sideContainer: {
        display: "flex",
        justifyContent: "center",
        minWidth: "300px"
    },
    centerContainer: {
        display: "flex",
        justifyContent: "center",
    },
    button: {
        padding: "12px 24px",
        minHeight: "42",
        fontSize: "40px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "8px",
        height:"100%",
        cursor: "pointer",
        transition: "background 0.3s, transform 0.1s",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
    },
    primaryButton: {
        backgroundColor: "#13c2db",
        color: "#fff",
    },
    secondaryButton: {
        backgroundColor: "#d3d3d3",
        color: "#444",
    },
}

export default Footer