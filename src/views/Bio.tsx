"use client";

import {
  Button,
  Center,
  Container,
  Heading,
  HStack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Bio = () => {
  return (
    <Container maxW={"3xl"} p="12">
      <HStack
        justifyContent={"space-between"}
        alignItems={"center"}
        divider={<StackDivider borderColor="gray.200" />}
      >
        <Button colorScheme={"orange"} leftIcon={<FaGithub />}>
          <Center>
            <Text onClick={() => window.open("https://github.com/rohitjaryal")}>
              GitHub
            </Text>
          </Center>
        </Button>
        {/*<Button colorScheme={"orange"} leftIcon={<FaConnectdevelop />}>*/}
        {/*  <Center>*/}
        {/*    <Text>Book my time</Text>*/}
        {/*  </Center>*/}
        {/*</Button>*/}
        <Button colorScheme={"orange"} leftIcon={<FaEnvelope />}>
          <Center>
            <Text onClick={() => window.open("mailto:contact@rohitjaryal.dev")}>
              contact@rohitjaryal.dev
            </Text>
          </Center>
        </Button>
        <Button colorScheme={"orange"} leftIcon={<FaLinkedin />}>
          <Center>
            <Text
              onClick={() =>
                window.open("https://www.linkedin.com/in/rohit-j-32824a242/")
              }
            >
              LinkedIn
            </Text>
          </Center>
        </Button>
      </HStack>

      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Center color="green">New UI in progress. Coming soon :) ...</Center>
        <Heading as="h3" fontSize="x-large">
          Heya, I'm Rohit Jaryal
        </Heading>
        <Text as="p" fontSize="lg">
          With years of dedicated frontend development experience under my belt,
          I've had the privilege of transforming creative ideas into functional,
          eye-catching, and user-friendly websites and applications. My passion
          for clean, elegant code drive me to excel in the ever-evolving world
          of web development
        </Text>
      </VStack>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h5" fontSize="x-large">
          Why I Love Frontend Development
        </Heading>
        <Text as="p" fontSize="lg">
          Frontend development is where art and science collide. It's the
          perfect blend of creativity and precision, where I get to breathe life
          into designs and make them accessible to people around the world.
          Whether it's building an intuitive user interface or optimizing for
          blazing-fast load times, I relish the challenge of creating seamless
          online experiences.
        </Text>
      </VStack>
    </Container>
  );
};

export default Bio;
