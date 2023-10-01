import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChatInterface from "./components/chatInterface";
import DetectiveSetup from "./pages/detectiveSetup";
import { Box } from "@chakra-ui/react";
import { mysteryDataType } from "./types";
import { TitleSelect } from "./pages/titleSelect";

function App() {
  const [mysteryData, setMysteryData] = React.useState<
    Partial<mysteryDataType>
  >({});
  const [currentStep, setCurrentStep] = React.useState(0);
  // Background box with background-house.jpg image

  return (
    <Box bgImage="url('/background-house.jpg')" bgSize="cover" minH="100vh">
      {currentStep === 0 && (
        <DetectiveSetup
          mysteryData={mysteryData}
          setMysteryData={setMysteryData}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 1 && (
        <TitleSelect
          mysteryData={mysteryData}
          setMysteryData={setMysteryData}
          setCurrentStep={setCurrentStep}
        />
      )}
    </Box>
  );
}

export default App;
