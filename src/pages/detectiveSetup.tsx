import React, { useState } from "react";
import {
  Button,
  Input,
  Textarea,
  VStack,
  FormLabel,
  FormControl,
  HStack,
  Select,
} from "@chakra-ui/react";
import { Character, mysteryDataType } from "../types";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { popularPairs, pronownDropdownOptions } from "../constants";
import { BlueWindowBox } from "../components/blueWindowBox";

type DetectiveSetupProps = {
  mysteryData: Partial<mysteryDataType>;
  setMysteryData: React.Dispatch<
    React.SetStateAction<Partial<mysteryDataType>>
  >;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const DetectiveSetup = ({
  mysteryData,
  setMysteryData,
  setCurrentStep,
}: DetectiveSetupProps) => {
  const [detective, setDetective] = useState<Character>({
    name: "",
    pronowns: "",
    characteristics: "",
    visualDescription: "",
  });

  const [sidekick, setSidekick] = useState<Character>({
    name: "",
    pronowns: "",
    characteristics: "",
    visualDescription: "",
  });

  const [isSidekickEnabled, setIsSidekickEnabled] = useState(false);

  const handlePrepopulate = () => {
    const randomPair =
      popularPairs[Math.floor(Math.random() * popularPairs.length)];

    setDetective(randomPair.detective);

    if (randomPair.sidekick) {
      setIsSidekickEnabled(true);
      setSidekick(randomPair.sidekick);
    } else {
      setIsSidekickEnabled(false);
      setSidekick({
        name: "",
        pronowns: "",
        characteristics: "",
        visualDescription: "",
      });
    }
  };

  const handleConfirm = () => {
    setMysteryData((prev) => ({
      ...prev,
      detectiveAndSidekick: {
        detective: detective,
        sidekick: isSidekickEnabled ? sidekick : undefined,
      },
    }));
    setCurrentStep(1);
  };

  return (
    <BlueWindowBox stackDir="column">
      <HStack flex="1" width="100%">
        <VStack flex="1">
          <FormControl>
            <FormLabel>Name of Detective</FormLabel>
            <Input
              value={detective.name}
              onChange={(e) =>
                setDetective((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Pronouns of Detective</FormLabel>
            <Select
              placeholder="Select pronouns"
              value={detective.pronowns}
              onChange={(e) =>
                setDetective((prev) => ({ ...prev, pronowns: e.target.value }))
              }
            >
              {pronownDropdownOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Characteristics of Detective</FormLabel>
            <Textarea
              value={detective.characteristics}
              onChange={(e) =>
                setDetective((prev) => ({
                  ...prev,
                  characteristics: e.target.value,
                }))
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Visual Description of Detective</FormLabel>
            <Textarea
              value={detective.visualDescription}
              onChange={(e) =>
                setDetective((prev) => ({
                  ...prev,
                  visualDescription: e.target.value,
                }))
              }
            />
          </FormControl>
        </VStack>

        {isSidekickEnabled && (
          <VStack flex="1">
            <FormControl>
              <FormLabel>Name of Sidekick</FormLabel>
              <Input
                value={sidekick.name}
                onChange={(e) =>
                  setSidekick((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </FormControl>
            <FormControl>
              <FormLabel>Pronouns of Sidekick</FormLabel>
              <Select
                placeholder="Select pronouns"
                value={sidekick.pronowns}
                onChange={(e) =>
                  setSidekick((prev) => ({
                    ...prev,
                    pronowns: e.target.value,
                  }))
                }
              >
                <option value="he/him">he/him</option>
                <option value="she/her">she/her</option>
                <option value="they/them">they/them</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Characteristics of Sidekick</FormLabel>
              <Textarea
                value={sidekick.characteristics}
                onChange={(e) =>
                  setSidekick((prev) => ({
                    ...prev,
                    characteristics: e.target.value,
                  }))
                }
              />
            </FormControl>

            <FormControl>
              <FormLabel>Visual Description of Sidekick</FormLabel>
              <Textarea
                value={sidekick.visualDescription}
                onChange={(e) =>
                  setSidekick((prev) => ({
                    ...prev,
                    visualDescription: e.target.value,
                  }))
                }
              />
            </FormControl>
          </VStack>
        )}
      </HStack>
      <HStack flex="1" width="100%" justifyContent="flex-end">
        // Toggle button for Sidekick with checkbox icon
        <Button onClick={() => setIsSidekickEnabled(!isSidekickEnabled)}>
          {isSidekickEnabled ? (
            <HStack spacing="0">
              <FormLabel mb="0">Sidekick</FormLabel>
              <CheckBoxIcon fontSize="medium" />
            </HStack>
          ) : (
            <HStack spacing="0">
              <FormLabel mb="0">Sidekick</FormLabel>
              <CheckBoxOutlineBlankIcon fontSize="medium" />
            </HStack>
          )}
        </Button>
        <Button onClick={handlePrepopulate}>Random</Button>
        <Button colorScheme="blue" onClick={handleConfirm}>
          Confirm
        </Button>
      </HStack>
    </BlueWindowBox>
  );
};

export default DetectiveSetup;
