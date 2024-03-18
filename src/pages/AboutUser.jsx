import {
  Flex,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Avatar,
} from "@chakra-ui/react";

const AboutUser = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="100%" w="100%">
      <Card maxW="sm">
        <CardBody>
          <Avatar name="axel" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">About</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              deserunt perferendis ipsum modi quasi maiores natus eum nobis sed
              molestias omnis necessitatibus! Molestias cum esse quaerat
              expedita, nesciunt incidunt maiores.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flex>
  );
};

export default AboutUser;
