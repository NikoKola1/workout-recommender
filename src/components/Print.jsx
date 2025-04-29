import React, { forwardRef } from "react";
import { useWorkout } from "../context/WorkoutContext";
import './print.css'

const HiddenPrintContent = forwardRef((props, ref) => {
  const { finalExercises } = useWorkout();

  return (
    <div
      ref={ref}
      className="print-content"
    >
      <h2>Tulostusnäkymä</h2>
      <ul>
        {finalExercises && finalExercises.length > 0 ? (
          finalExercises.map((ex, index) => (
            <li key={index}>
              <strong>{ex.name}</strong> — {ex.sets} x {ex.reps} (
              {ex.machineId || "Ei laitetta"})
            </li>
          ))
        ) : (
          <li>No exercises to display.</li>
        )}
      </ul>
    </div>
  );
});

export default HiddenPrintContent;
