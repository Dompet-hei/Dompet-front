import { Flex, Divider } from "@chakra-ui/react";
import { opacityTheme, theme } from "../../../utils/color";
import RedirectButton from "./components/RedirectButton";

const SideBar = ({ h }) => {
  return (
    <Flex
      w={["0", "10em", "17em"]}
      h={h}
      bgColor={opacityTheme.base(0.7)}
      direction="column"
      overflow="auto"
      alignItems="center"
    >
      <RedirectButton link="/" />
      <RedirectButton link="/balance" />
      <Divider w="80%" />
      <RedirectButton link="/debts" />
      <RedirectButton link="/transactions" />
      <RedirectButton link="/send" />
    </Flex>
  );
};

export default SideBar;
