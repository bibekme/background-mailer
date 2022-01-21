import "./App.css";
import ContactForm from "./components/ContactForm";
import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";

function App() {
  return (
    <Box className="App" my={10}>
      <Heading as="h1">Send an email</Heading>
      <Text>We won't spam you ❤</Text>
      <ContactForm />
    </Box>
  );
}

export default App;
