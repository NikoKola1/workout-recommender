import Result from "../../components/Result"

const ResultScreen = () => {

    return (
        <div style={styles.container}>
            <Result/>
        </div>
    );
};

const styles = {
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        overflowY: "auto"
    }
}

export default ResultScreen