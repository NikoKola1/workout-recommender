import { useLocation, useNavigate } from "react-router-dom"
import { useWorkout } from "../context/WorkoutContext"
import logo from '../assets/logo.png'

const Header = () => {
    // const location = useLocation()
    const navigate = useNavigate()

    const { resetWorkout } = useWorkout()
    // const isFullView = location.pathname.startsWith("/fullview")

    const returnToStart = () => {
        //!! clicking on the icon returns user to start and resets all chosen options
        resetWorkout()
        navigate("/fullview")
    }

    return (
        <div style={styles.header}>
            {/* Toggle Button on Left */}
            <button style={styles.toggleButton} onClick={returnToStart}>
                <img
                    src={logo} // Replace with your actual image path
                    alt="Toggle Icon"
                    style={styles.icon}
                />
            </button>

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
        color: "#0bcadc",
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
        height: "8rem",
        border: '2px solid #0bcadc',
        // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
    },
    centerContainer: {
        flex: 1,
        display: "flex",
        fontSize: "2.8rem",
        alignItems: 'center',
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
        flex: 1,
        display: 'flex',
        justifyContent: 'left',
        minWidth: "150px",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#0bcadc",
        backgroundColor: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background 0.3s",
    },
    icon: {
        marginTop: '-10px',
        height: "9rem",
        marginLeft: '14px',
    }
}

export default Header