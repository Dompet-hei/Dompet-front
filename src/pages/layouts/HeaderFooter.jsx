import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { theme } from "../../utils/color";
import SideBar from "../components/SideBar";

const HNavBar = "5em";

const HeaderFooter = ({ children }) => {
  return (
    <Flex
      h="100vh"
      w="100vw"
      position="relative"
      direction="column"
      overflow="hidden"
    >
      <Header h={HNavBar} />
      <Flex w="100%" h={`calc(100vh - ${HNavBar})`} direction="row">
        <SideBar h={`calc(100vh - ${HNavBar})`} />
        <Flex
          w="100%"
          h="100%"
          direction="column"
          overflowX="hidden"
          overflowY="scroll"
          gap="6em"
        >
          {children}
          <Footer />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeaderFooter;
