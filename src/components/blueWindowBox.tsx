import { Box, HStack, Stack } from "@chakra-ui/react";

type BlueWindowBoxProps = {
  children: React.ReactNode;
  stackDir?: "row" | "column";
};

export const BlueWindowBox = ({ children, stackDir }: BlueWindowBoxProps) => {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="absolute"
    >
      <Stack
        direction={stackDir || "column"}
        position="relative"
        spacing={6}
        backgroundColor="pallette.blue"
        color="white"
        width="70%"
        padding={6}
        alignItems="flex-start"
        borderRadius="md"
      >
        {children}
      </Stack>
    </Box>
  );
};
