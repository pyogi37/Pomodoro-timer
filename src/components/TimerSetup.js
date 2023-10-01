import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

function TimerSetup({ startTimer }) {
  const [workDuration, setWorkDuration] = useState();
  const [restDuration, setRestDuration] = useState();
  const [repitiotions, setReps] = useState();

  const handleStartTimer = () => {
    if (workDuration == null || restDuration == null || repitiotions == null) {
      // push notifications
      console.log(workDuration, restDuration, repitiotions, "values null");
      return;
    }
    // Call the startTimer function passed as a prop
    startTimer({ workDuration, restDuration, repitiotions });
  };

  return (
    <Box
      id="timerSetupContainer"
      bg="tomato"
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100%"
    >
      <FormControl
        id="timerSetupForm"
        bg="#4e97c8"
        w="50%"
        textAlign="center"
        borderRadius="lg"
        mb="40"
        p="4"
      >
        <FormLabel>Timer Setup</FormLabel>

        <VStack>
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
            id="repitiotions"
            step={1}
            min={3}
            max={7}
            bg="white"
            w="70%"
            value={repitiotions}
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
