import { Flex, Divider } from "@chakra-ui/react";
import { theme } from "../../../utils/color";
import RedirectButton from "./components/RedirectButton";

const SideBar = ({ h }) => {
  return (
    <Flex
      w={["0", "10em", "10em"]}
      h={h}
      bgColor={theme.base}
      direction="column"
      overflow="auto"
      alignItems="center"
    >
      <RedirectButton link="/" />
      <RedirectButton link="" />
      <Divider w="80%" />
      <RedirectButton link="" />
      <RedirectButton link="" />
    </Flex>
  );
};

export default SideBar;
