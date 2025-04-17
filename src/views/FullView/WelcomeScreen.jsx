import Welcome from "../../components/Welcome"

const WelcomeScreen = () => {
    return (
        <div style={styles.container}>
            <Welcome/>
        </div>
    )
}

const styles = {
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
        height:'100%',
        overflowY: "auto"
    }
}

export default WelcomeScreen