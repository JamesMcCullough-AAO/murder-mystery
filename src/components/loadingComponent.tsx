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
      setIndex((index) => (index + 1) % loadingLines.length);
      setCurrentLine(loadingLines[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HStack
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      backgroundColor="blackAlpha.500"
    >
      <Text fontSize="3xl" fontWeight="bold" color="white">
        {currentLine}
      </Text>
      // hover animated
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
