import React, { useEffect, useState } from "react";
import { Setting, mysteryDataType } from "../types";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Label, Title } from "@mui/icons-material";

type TitleSelectProps = {
  mysteryData: Partial<mysteryDataType>;
  setMysteryData: React.Dispatch<
    React.SetStateAction<Partial<mysteryDataType>>
  >;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const TitleSelect = ({
  mysteryData,
  setMysteryData,
  setCurrentStep,
}: TitleSelectProps) => {
  const [settings, setSettings] = useState<Setting[]>([
    {
      title: "The Masquerade's Midnight Deceit",
      setting:
        "In an opulent mansion, elite members of society gather for a masquerade ball. But as the clock strikes midnight, a masked guest is discovered dead, with no signs of who could have done the deed.",
    },
    {
      title: "Whispers in Windermere",
      setting:
        "The tranquil village of Windermere, known for its serene lakes and picturesque landscapes, becomes the center of intrigue when a local is found dead under suspicious circumstances. As the village comes to terms with the event, secrets that have long been buried begin to surface.",
    },
    {
      title: "Shadows over the Thames",
      setting:
        "London, 1930. The city is alive with the sounds of jazz, the buzz of the underground, and the glow of neon. But when a renowned jazz singer is found dead on the banks of the Thames, the city's vibrancy fades into a maze of enigmas and dark alleys.",
    },
    {
      title: "Isle of Ill Intent",
      setting:
        "On a remote island resort, guests gather for a week of relaxation and luxury. But the holiday turns sinister when a storm cuts off communication with the mainland and a guest goes missing. Is it a tragic accident, or is there a killer among them?",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [typedSetting, setTypedSetting] = useState<string>("");
  const typeWriterRef = React.useRef<NodeJS.Timeout>();

  useEffect(() => {
    const currentSetting = settings[currentIndex].setting;
    let i = 0;

    const typeWriter = () => {
      if (i < currentSetting.length) {
        setTypedSetting(currentSetting.substring(0, i + 1));
        i++;
        typeWriterRef.current = setTimeout(typeWriter, 20); // 50ms per character, adjust as needed
      }
    };

    // When the setting changes, disable and clear the typewriter effect.
    // Then, start the typewriter effect again.
    clearTimeout(typeWriterRef.current);
    setTypedSetting("");
    // Start typewriter effect
    typeWriter();

    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      clearTimeout(typeWriterRef.current);
    };
  }, [currentIndex, settings]);

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
        {/* Detective and Detective Sidekick star in... */}
        <Heading size="md" mb={4}>
          {mysteryData?.detectiveAndSidekick?.detective.name}
          {mysteryData?.detectiveAndSidekick?.sidekick
            ? " and " +
              mysteryData.detectiveAndSidekick.sidekick.name +
              " star in..."
            : " stars in..."}
        </Heading>
        {/* Title Select */}
        <HStack width="100%" flex="1" justifyContent="space-between">
          <Button
            colorScheme="blue"
            onClick={() => {
              if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
              }
            }}
          >
            Previous
          </Button>
          <Heading size="xl">{settings[currentIndex].title}</Heading>
          <Button
            colorScheme="blue"
            onClick={() => {
              if (currentIndex < settings.length - 1) {
                setCurrentIndex(currentIndex + 1);
              }
            }}
          >
            Next
          </Button>
        </HStack>

        {/* Setting Display with Typewriter Effect */}
        <Box
          width="100%"
          mb={4}
          backgroundColor="black"
          color="white"
          p={4}
          height="150"
          borderRadius={4}
        >
          {typedSetting}
        </Box>

        {/* Confirm Button */}
        <Button
          colorScheme="blue"
          onClick={() => {
            setMysteryData((prev) => ({
              ...prev,
              title: settings[currentIndex].title,
              setting: settings[currentIndex].setting,
            }));
            setCurrentStep(2);
          }}
        >
          Confirm
        </Button>
      </VStack>
    </Box>
  );
};
