import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

type StoryReaderProps = {
  introductionText: string[] | undefined;
  setInStoryReader: (inStoryReader: boolean) => void;
};

export const StoryReader = ({
  introductionText,
  setInStoryReader,
}: StoryReaderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  setInStoryReader(true);

  if (!introductionText) {
    return null;
  }

  // A text box containing the current string from the introductionText array
  // and a button to continue.
  return (
    <Box color="white" position="absolute" height="100%" width="100%">
      <VStack
        width="70%"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        backgroundColor="blackAlpha.700"
        padding="30"
        spacing="5"
      >
        <Text>{introductionText[currentIndex]}</Text>
        <Button
          colorScheme="blue"
          onClick={() => {
            if (currentIndex < introductionText.length - 1) {
              setCurrentIndex(currentIndex + 1);
            } else {
              setInStoryReader(false);
            }
          }}
        >
          Continue
        </Button>
      </VStack>
    </Box>
  );
};
