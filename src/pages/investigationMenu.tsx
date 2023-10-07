import {
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { Character, clue, mysteryDataType } from "../types";
import { useState } from "react";
import { generateLocationInvestigationStory } from "../utils/generateLocationInvestigationStory";

interface Props {
  location: string;
  mysteryData: Partial<mysteryDataType>;
  setLocation: (location: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  setReaderText: (readerText: string[]) => void;
}

export const GameMenu: React.FC<Props> = ({
  location,
  setLocation,
  mysteryData,
  setIsLoading,
  setReaderText,
}) => {
  const [unlockedClues, setUnlockedClues] = useState<clue[]>([]);

  const currentLocationData = mysteryData?.locations?.locationList.find(
    (locationData) => {
      return locationData.location === location;
    }
  );

  const currentSuspects =
    mysteryData?.characterDetails?.suspects.filter((suspect) => {
      return currentLocationData?.charactersPresent.includes(suspect.name);
    }) || [];

  const neighboringLocations = currentLocationData?.neighboringLocations || [];

  const handleInvestigate = async () => {
    setIsLoading(true);
    // Generate the story for the room's investigation
    const story = await generateLocationInvestigationStory({
      location: location,
      mysteryData: mysteryData as mysteryDataType,
    });

    // Set the reader text to the story
    setReaderText(story);

    setIsLoading(false);
  };

  return (
    <Flex direction="column" align="start" p={4}>
      {/* Current Location */}
      <Heading size="3xl" mb={4} color="white">
        Location: {location}
      </Heading>

      {/* Investigate Button */}
      <Button
        colorScheme="blue"
        mb={2}
        onClick={() => {
          handleInvestigate();
        }}
      >
        Investigate
      </Button>

      {/* Suspects at Location */}
      {currentSuspects.map((suspect, index) => (
        <Menu key={index}>
          <MenuButton as={Button} rightIcon={<ExpandCircleDownIcon />} mb={2}>
            {suspect.name}
          </MenuButton>
          <MenuList>
            <MenuItem>Interview</MenuItem>
            {unlockedClues.map((clue) => (
              <MenuItem key={clue.name}>Show Clue: {clue.name}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      ))}

      {/* Show Clues */}
      <Menu>
        <MenuButton as={Button} rightIcon={<ExpandCircleDownIcon />} mb={2}>
          Show Clues
        </MenuButton>
        <MenuList>
          {unlockedClues.map((clue) => (
            <MenuItem key={clue.name}>Show Clue: {clue.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton as={Button} rightIcon={<ExpandCircleDownIcon />} mb={2}>
          Travel to another location
        </MenuButton>
        <MenuList>
          {neighboringLocations.map((location) => (
            <MenuItem
              key={location}
              onClick={() => {
                setLocation(location);
              }}
            >
              Travel to {location}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};
