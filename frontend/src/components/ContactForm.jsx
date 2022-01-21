import React from "react";
import { VStack } from "@chakra-ui/react";
import Builder from "./FormBuiler";

const LoginForm = () => {
  return (
    <VStack mt={8} spacing="3px">
      <Builder />
    </VStack>
  );
};

export default LoginForm;
