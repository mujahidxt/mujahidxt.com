import {
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

const Brief = () => {
  return (
    <Card
      m="auto"
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      bg="#0e0e0e"
      h="200px"
      rounded="24px"
    >
      <CardBody>
        <Flex flexDir="column" h="full" justify="space-around" color="#d9d9d9">
          <Flex justify="space-between">
            <Heading>IM MUJAHID</Heading>
          </Flex>
          <Text>
            I’m a professional programmer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products in the industry.
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Brief;
