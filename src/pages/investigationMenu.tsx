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
import { Character, clue } from "../types";

interface Props {
  location: string;
  suspects: Character[];
  clues: clue[];
}

export const GameMenu: React.FC<Props> = ({ location, suspects, clues }) => {
  return (
    <Flex direction="column" align="start" p={4}>
      {/* Current Location */}
      <Heading size="md" mb={4}>
        Location: {location}
      </Heading>

      {/* Investigate Button */}
      <Button colorScheme="blue" mb={2}>
        Investigate
      </Button>

      {/* Suspects at Location */}
      {suspects.map((suspect, index) => (
        <Menu key={index}>
          <MenuButton as={Button} rightIcon={<ExpandCircleDownIcon />} mb={2}>
            {suspect.name}
          </MenuButton>
          <MenuList>
            <MenuItem>Interview</MenuItem>
            {clues.map((clue) => (
              <MenuItem key={clue.name}>Show Clue: {clue.name}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      ))}

      {/* Travel Button */}
      <Button colorScheme="green" mb={2}>
        Travel to another location
      </Button>

      {/* Show Clues */}
      <Menu>
        <MenuButton as={Button} rightIcon={<ExpandCircleDownIcon />} mb={2}>
          Show Clues
        </MenuButton>
        <MenuList>
          {clues.map((clue) => (
            <MenuItem key={clue.name}>Show Clue: {clue.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};
