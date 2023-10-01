import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import TimerData from "./TimerData";

function TimerPage({ timerSetup }) {
  const navigate = useNavigate();

  const { workDuration, restDuration, repitiotions } = timerSetup;
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [timerLabel, setTimerLabel] = useState("Work Time");
  const [minutes, setMinutes] = useState(workDuration);
  const [reps, setReps] = useState(repitiotions);
  const [seconds, setSeconds] = useState(0);
  const [timerPageBgColor, setTimerPageBgColor] = useState("tomato"); // Initial background color

  useEffect(() => {
    let interval;

    if (isTimerRunning) {
      interval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          // Timer reached zero
          if (timerLabel === "Work Time") {
            // Switch to rest time and change background color
            setTimerLabel("Rest Time");
            setMinutes(restDuration);
            setTimerPageBgColor("#4e97c8"); // Change background color to #4e97c8
          } else {
            // Switch to work time and decrement reps
            setTimerLabel("Work Time");
            setMinutes(workDuration);
            setReps(reps - 1);
            setTimerPageBgColor("tomato"); // Change background color back to tomato
          }
        } else {
          // Continue counting down
          if (seconds === 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            setSeconds(seconds - 1);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Cleanup the interval when component unmounts or when reps reach 0
    return () => clearInterval(interval);
  }, [isTimerRunning, minutes, seconds, reps, workDuration, restDuration]);

  const handlePauseResume = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const handleStop = () => {
    const details = {
      minutes: minutes,
      timerLabel: timerLabel,
      seconds: seconds,
      reps: reps,
    };
    localStorage.setItem("timerData", details);
    console.log(details);
    setIsTimerRunning(false);
    setTimerLabel("Work Time");
    setMinutes(workDuration);
    setSeconds(0);

    navigate("/timer-data");
  };

  return (
    <Box
      className="timer-page"
      display="flex"
      flexDirection="column"
      bg={timerPageBgColor} // Use the timerPageBgColor state to set the background color
      h="100vh"
    >
      <Text height="10%" m="4" fontSize="5xl">
        {timerLabel}
      </Text>
      <Box
        className="timer"
        height="70%"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        fontSize="9xl"
      >
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </Box>
      <Box className="controlButtons" h="15%" m="4">
        <Button onClick={handlePauseResume} m="4" bg="lightgrey">
          {isTimerRunning ? "Pause" : "Resume"}
        </Button>
        <Button onClick={handleStop} bg="lightgrey">
          Stop
        </Button>
      </Box>
    </Box>
  );
}

export default TimerPage;
