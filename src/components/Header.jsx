import { useLocation, useNavigate } from "react-router-dom"

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const isFullView = location.pathname.startsWith("/fullview")

    const handleToggleView = () => {
        navigate(isFullView ? "/simpleview" : "/fullview")
    }

    return (
        <div style={styles.header}>
            {/* Toggle Button on Left */}
            <div style={styles.leftContainer}>
                <button style={styles.toggleButton} onClick={handleToggleView}>
                    {isFullView ? "← Simple View" : "← Full View"}
                </button>
            </div>

            {/* Title in the Center */}
            <div style={styles.centerContainer}>
                <h1 style={styles.title}>AVAINN</h1>
            </div>

            {/* Empty placeholder container */}
            <div style={styles.rightContainer}></div>

        </div>
    )
}

const styles = {
    header: {
        width: "100%",
        backgroundColor: "white",
        color: "#15daf7",
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
        border: '2px solid #15daf7',
        // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
    },
    leftContainer: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-start",
    },
    centerContainer: {
        flex: 2,
        display: "flex",
        justifyContent: "center",
        padding:'10px'
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        flex: 1,
        textAlign: "center",
        margin: 0,
    },
    toggleButton: {
        minWidth: "150px",
        padding: "8px 16px",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#15daf7",
        backgroundColor: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background 0.3s",
    },
}

export default Header