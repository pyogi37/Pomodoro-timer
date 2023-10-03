import {
  Box,
  Button,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

function TimerSetup({ startTimer }) {
  const toast = useToast();
  const [workDuration, setWorkDuration] = useState();
  const [restDuration, setRestDuration] = useState();
  const [repititions, setReps] = useState();

  const handleStartTimer = () => {
    if (workDuration == null || restDuration == null || repititions == null) {
      toast({
        title: "Fill all Fields",
        status: "warning",
        duration: 2000, // Display toast for 2 seconds
      });
      console.log(workDuration, restDuration, repititions, "values null");
      return;
    }

    const setupData = { workDuration, restDuration, repititions };

    localStorage.setItem("setupData", JSON.stringify(setupData));
    // Call the startTimer function passed as a prop

    startTimer({ workDuration, restDuration, repititions });
  };

  return (
    <Box
      id="timerSetupContainer"
      bg="purple.300"
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100%"
    >
      <FormControl
        id="timerSetupForm"
        bg="#4e97c8"
        w="50%"
        borderRadius="lg"
        mb="40"
        p="4"
      >
        <VStack>
          <FormLabel>Timer Setup</FormLabel>

          <NumberInput
            id="workDuration"
            step={5}
            min={25}
            max={45}
            bg="white"
            w="70%"
            value={workDuration}
            onChange={(value) => setWorkDuration(value)}
            borderRadius="lg"
          >
            <NumberInputField placeholder=" Work Duration (25-45 mins)" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <NumberInput
            id="restDuration"
            step={1}
            min={5}
            max={10}
            bg="white"
            w="70%"
            value={restDuration}
            onChange={(value) => setRestDuration(value)}
            borderRadius="lg"
          >
            <NumberInputField placeholder=" Rest Duration (5-10 mins)" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <NumberInput
            id="repititions"
            step={1}
            min={3}
            max={7}
            bg="white"
            w="70%"
            value={repititions}
            onChange={(value) => setReps(value)}
            borderRadius="lg"
          >
            <NumberInputField placeholder="Number of Repetitions (3-7)" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button onClick={handleStartTimer} w="70%">
            Start Timer
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
}

export default TimerSetup;
