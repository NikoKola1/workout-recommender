import { useState } from "react";

const Footer = ({ onNext, onSubmit, onPrev, isFirstStep, isLastStep, onBackToStart, showNav = true , isNextDisabled}) => {
    const [showTooltip, setShowTooltip] = useState(false)

    const tooltipMessage = "Valitse ennen jatkamista"

    const handleMouseEnter = () => {
        if (isNextDisabled) {
            setShowTooltip(true)
        }
    }
    const handleMouseLeave = () => {
        setShowTooltip(false)
    }

    return (
        <div style={styles.footer(isFirstStep)}>

            {/* Left */}
            <div style={styles.sideContainerLeft}>
                {!isFirstStep && (
                    <button
                        style={{ ...styles.button, ...styles.secondaryButton }}
                        onClick={isLastStep ? onBackToStart : onPrev}
                    >
                        {isLastStep ? "Takaisin" : "Edellinen"}
                    </button>
                )}
            </div>

            {/* Center */}
            <div style={styles.centerContainer}>
                {isFirstStep && (
                    <div style={styles.textContainer}>
                        <p style={styles.textLine}>Tee treeniohjelma puhelimellasi skannaamalla QR-koodi</p>
                        <p style={styles.textLine}>Tai jatka tällä laitteella koskettamalla ruutua</p>
                    </div>
                )}
                {showTooltip && (
                    <div style={{...styles.textContainer, position: "absolute"}}>
                        <p style={styles.textLine}>{tooltipMessage}</p>
                    </div>
                )}
                {isLastStep && (
                    <button
                        style={{ ...styles.button, ...styles.primaryButton }}
                        onClick={onSubmit}
                    >
                        🖨 Tulosta
                    </button>
                )}
            </div>

            {/* Right */}
            <div style={styles.sideContainerRight} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                {/* {isFirstStep && <img src="some-logo.png" alt="qr" style={styles.logo} />} */}
                {isFirstStep && <img src="some-logo.png" alt=" QR-koodi" style={styles.logo} />}
                {!isFirstStep && !isLastStep && (
                    <button
                        style={{ ...styles.button, ...styles.primaryButton(isNextDisabled) }}
                        onClick={showNav ? onNext : onSubmit}
                        disabled={isNextDisabled}
                    >
                        {showNav ? "Seuraava" : "Hyväksy"}
                    </button>
                )}
            </div>

        </div>
    )
}

const styles = {
    footer: (isFirstStep) => ({
        width: "100%",
        height: isFirstStep ? "10rem" : "7rem",
        padding: "10px",
        background: "#FFFFFF",
        border: "2px solid #15daf7",
        borderRadius: "2px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "10px",
        borderTop: '1px solid #ccc',
    }),
    sideContainerLeft: {
        display: "flex",
        justifyContent: "center",
        minWidth: "300px",
    },
    sideContainerRight: {
        display: "flex",
        justifyContent: "center",
        minWidth: "300px",
    },
    centerContainer: {
        display: "flex",
        justifyContent: "center",
    },
    button: {
        padding: "12px 24px", // From the old styles
        minHeight: "42px", // Consistent height from old styles
        fontSize: "40px", // Larger text from old styles
        fontWeight: "bold",
        border: '2px solid #999999',
        borderRadius: "8px",
        height: "100%",
        cursor: "pointer",
        transition: "background 0.3s, transform 0.1s",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
    },
    primaryButton: (disabled) => ({
        backgroundColor: disabled? "#cccccc" : "#13c2db", // From old styles        
        color: "#fff",
    }),
    secondaryButton: {
        backgroundColor: "#e0e0e0", // Slightly different secondary button background from old styles
        color: "#333",
    },
    textContainer: {
        textAlign: "center",
    },
    textLine: {
        margin: "0.25rem 0",
        fontSize: "2rem",
        color: "#444",
        fontWeight: 'bold',
    },
    logo: {
        width: "50px",
        height: "auto",
        color: 'black'
    },
}

export default Footer