import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DetectiveSetup from "./pages/detectiveSetup";
import { Box, HStack, Heading } from "@chakra-ui/react";
import { Location, investigationStory, mysteryDataType } from "./types";
import { TitleSelect } from "./pages/titleSelect";
import { generateMystery } from "./utils/generateMystery";

import { StoryReader } from "./pages/StoryReader";
import { LoadingComponent } from "./components/loadingComponent";
import { GameMenu } from "./pages/investigationMenu";
import { generateInvestigationStory } from "./utils/generateInvestigationStory";

function App() {
  const [mysteryData, setMysteryData] = React.useState<
    Partial<mysteryDataType>
  >({});
  const [currentStep, setCurrentStep] = React.useState(0);
  const [inStoryReader, setInStoryReader] = React.useState(false);
  const [currentLocation, setCurrentLocation] = React.useState("");
  const [investigationStory, setInvestigationStory] =
    React.useState<investigationStory>({
      locations: {},
      suspects: {},
    });

  // When the currentStep changes to 2, we want to generate the mystery. Call async generateMystery function, and when complete set the mysteryData to the new mysteryData, and set the currentStep to 3
  React.useEffect(() => {
    if (currentStep === 2) {
      generateMystery({ mysteryData }).then((newMysteryData) => {
        setMysteryData(newMysteryData);
        setCurrentStep(3);
        generateInvestigationStory({
          mysteryData: newMysteryData as mysteryDataType,
          setInvestigationStory: setInvestigationStory,
        });
      });
    }
  }, [currentStep]);

  const startGame = () => {
    // Set the current location to the scene of the murder.
    setCurrentLocation(mysteryData?.furtherDetails?.location || "");
    setCurrentStep(4);
  };

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
      {currentStep === 2 && (
        // Generating mystery screen
        <LoadingComponent />
      )}
      {currentStep === 3 && (
        // Debug display mystery data
        <StoryReader
          introductionText={mysteryData.introduction?.introductionText}
          setInStoryReader={setInStoryReader}
          onStoryComplete={() => startGame()}
        />
      )}
      {currentStep === 4 && (
        <GameMenu
          location={currentLocation}
          mysteryData={mysteryData}
          setLocation={setCurrentLocation}
        />
      )}
    </Box>
  );
}

export default App;
