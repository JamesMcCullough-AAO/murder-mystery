import { HStack, Heading } from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";

export const LoadingComponent = () => {
  return (
    <HStack
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      backgroundColor="blackAlpha.500"
    >
      <Heading size="lg" color="white">
        Generating mystery...
      </Heading>
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
