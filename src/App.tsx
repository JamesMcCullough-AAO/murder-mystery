import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChatInterface from "./components/chatInterface";
import DetectiveSetup from "./pages/detectiveSetup";
import { Box } from "@chakra-ui/react";

function App() {
  // Background box with background-house.jpg image

  return (
    <Box bgImage="url('/background-house.jpg')" bgSize="cover" minH="100vh">
      <DetectiveSetup />
    </Box>
  );
}

export default App;
