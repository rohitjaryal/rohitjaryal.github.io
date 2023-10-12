"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const Bio = () => {
  return (
    <Container maxW={"3xl"} p="12">
      <Heading as="h1">Heya, I'm Rohit Jaryal</Heading>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Text as="p" fontSize="lg">
          With years of dedicated frontend development experience under my belt,
          I've had the privilege of transforming creative ideas into functional,
          eye-catching, and user-friendly websites and applications. My passion
          for clean, elegant code drive me to excel in the ever-evolving world
          of web development
        </Text>
      </VStack>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box width={{ base: "100%", sm: "85%" }} zIndex="2" marginTop="5%">
            <Heading marginTop="1">
              <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
                Why I Love Frontend Development
              </Text>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              Frontend development is where art and science collide. It's the
              perfect blend of creativity and precision, where I get to breathe
              life into designs and make them accessible to people around the
              world. Whether it's building an intuitive user interface or
              optimizing for blazing-fast load times, I relish the challenge of
              creating seamless online experiences.
            </Text>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Bio;
