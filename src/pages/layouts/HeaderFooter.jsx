import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HeaderFooter = ({ children }) => {
  return (
    <Flex h="100vh" w="100vw" maxH="auto" direction="column">
      <Header />
      <Flex w="100%" h="100%" direction="row">
        <Flex w="50px" h="100%" bgColor="blue"></Flex>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default HeaderFooter;
