import React, { useState } from "react";
import "./App.css";
import TimerSetup from "./components/TimerSetup";
import TimerPage from "./pages/TimerPage";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import TimerData from "./pages/TimerData";

function App() {
  const [timerData, setTimerData] = useState(null);

  const startTimer = (data) => {
    // Handle timer start and data passed from TimerSetup
    setTimerData(data);
  };

  return (
    <Box w="100%" h="100vh" className="App">
      <Routes>
        <Route
          path="/"
          element={
            !timerData ? (
              <TimerSetup startTimer={startTimer} />
            ) : (
              <TimerPage timerSetup={timerData} />
            )
          }
        />
        <Route path="/timer-data" element={<TimerData />} />
      </Routes>
    </Box>
  );
}

export default App;
