import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import SimpleView from "./views/SimpleView"
import { WorkoutProvider } from "./context/WorkoutContext"
import FullView from "./views/FullView"
import DurationScreen from "./views/FullView/DurationScreen"
import IntensityScreen from "./views/FullView/IntensityScreen"
import MuscleGroupScreen from "./views/FullView/MuscleGroupScreen"
import ResultScreen from "./views/FullView/ResultScreen"

const AppRoutes = () => {
    return (
        <WorkoutProvider>
            <Router>
                <Routes>
                    {/* Default to SimpleView */}
                    <Route path="/" element={<Navigate to="/simpleview" />} />

                    {/* Simple View */}
                    <Route path="/simpleview" element={<SimpleView />} />

                    {/* Full View Wrapper */}
                    <Route path="/fullview" element={<FullView />}>
                        <Route path="duration" element={<DurationScreen />} />
                        <Route path="intensity" element={<IntensityScreen />} />
                        <Route path="musclegroup" element={<MuscleGroupScreen />} />
                        <Route path="result" element={<ResultScreen />} />
                        <Route index element={<Navigate to="duration" />} /> {/* Default step */}
                    </Route>

                    {/* redirect unknown paths to SimpleView for now */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </WorkoutProvider>
    )
}

export default AppRoutes
