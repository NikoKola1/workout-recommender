import { useNavigate } from "react-router-dom"
import Result from "../../components/Result"

const ResultScreen = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <Result onModify={() => navigate("/fullview/duration")} />
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