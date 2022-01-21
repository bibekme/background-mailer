import React from "react";
import { useForm } from "react-hook-form";
import {
  VStack,
  Input,
  useToast,
  Box,
  Button,
  Textarea,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import AlertPop from "./AlertPop";

export default function Builder() {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { data: responseData } = await axios.post("/api/send/", data);
    toast({
      title: responseData.message,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack>
          <Text>Email</Text>
          <Input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Please enter your email",
              minLength: 3,
              maxLength: 80,
            })}
          />
          {errors.email && <AlertPop title={errors.email.message} />}
          <Text>Subject</Text>
          <Input
            type="text"
            placeholder="Subject"
            {...register("subject", {
              required: "Please enter your subject",
              minLength: 3,
              maxLength: 100,
            })}
          />
          {errors.subject && <AlertPop title={errors.subject.message} />}
          <Text>Message</Text>
          <Textarea
            type="text"
            placeholder="Message"
            {...register("message", {
              required: "Please enter your message",
            })}
          />
          {errors.message && <AlertPop title={errors.message.message} />}

          <Button
            borderRadius="md"
            bg="cyan.600"
            _hover={{ bg: "cyan.200" }}
            variant="ghost"
            type="submit"
          >
            Send
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
