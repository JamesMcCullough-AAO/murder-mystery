import { HStack, Heading, Text } from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

const loadingLines = [
  "Generating mystery...",
  "Searching for clues...",
  "Gathering suspects...",
  "Finding the truth...",
  "Identifying a motive...",
  "Finding the culprit...",
  "Examining the evidence...",
  "Solving the mystery...",
  "Putting the clues together...",
  "Looking for a smoking gun...",
  "Finding the missing piece...",
  "Following the trail...",
  "Tracking down the killer...",
  "Asking the right questions...",
  "Getting to the bottom of it...",
  "Looking for a lead...",
  "Finding the needle in the haystack...",
];

export const LoadingComponent = () => {
  // every 3 seconds, pick a random line from the loadingLines array
  // and display that line in the Heading component
  // (use the useState hook to store the current line)
  // (use the useEffect hook to set up the interval)

  const [currentLine, setCurrentLine] = useState<string>(loadingLines[0]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % loadingLines.length);
      setCurrentLine(loadingLines[index]);
    }, 6000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <HStack
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      backgroundColor="blackAlpha.800"
      borderRadius="lg"
      padding="1rem"
    >
      <Text fontSize="3xl" fontWeight="bold" color="white">
        {currentLine}
      </Text>
      <SearchIcon
        style={{
          animation: "hover 2s infinite",
          width: "50px",
          height: "50px",
          color: "white",
        }}
      />
    </HStack>
  );
};
