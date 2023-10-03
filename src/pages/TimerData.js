import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const TimerData = () => {
  const navigate = useNavigate();
  const timerData = JSON.parse(localStorage.getItem("timerData"));
  const setupData = JSON.parse(localStorage.getItem("setupData"));
  console.log(timerData);
  console.log(setupData.repititions);

  let reps = setupData.repititions - timerData.reps;
  let workDurationMin =
    setupData.workDuration -
    timerData.minutes +
    reps * setupData.workDuration -
    1;
  console.log(workDurationMin);

  let workDurationSec = 60 - timerData.seconds;
  console.log(workDurationSec);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Box
      className="timer-data"
      display="flex"
      flexDirection="column"
      bg={"purple.300"} // Use the timerPageBgColor state to set the background color
      h="100vh"
      p="4"
    >
      <Text fontSize={"5xl"}>Timer Data</Text>

      <Box
        className="timer"
        height="70%"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box borderRadius={"full"} p="4" bg={"#4e97c8"} width={"30%"} h={"50%"}>
          <Text fontSize={"3xl"}> Minutes </Text>
          <Text fontSize={"6xl"} m={"4"}>
            {workDurationMin}{" "}
          </Text>
        </Box>
        <Box borderRadius={"full"} p="4" bg={"#4e97c8"} width={"30%"} h={"50%"}>
          <Text fontSize={"3xl"}> Seconds </Text>
          <Text fontSize={"6xl"} m={"4"}>
            {workDurationSec}{" "}
          </Text>
        </Box>
        <Box borderRadius={"full"} p="4" bg={"#4e97c8"} width={"30%"} h={"50%"}>
          <Text fontSize={"3xl"}> Reps </Text>
          <Text fontSize={"6xl"} m={"4"}>
            {reps}
          </Text>
        </Box>
      </Box>

      <Button bg={"lightgray"} onClick={handleClick}>
        {" "}
        Restart Timer{" "}
      </Button>
    </Box>
  );
};

export default TimerData;
