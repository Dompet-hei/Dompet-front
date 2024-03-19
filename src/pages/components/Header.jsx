import {
  Flex,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  MenuDivider,
} from "@chakra-ui/react";
import { opacityTheme } from "../../utils/color";
import { useContext } from "react";
import { UserContext } from "../../UserProvider";
import { useEffect } from "react";
import { MainContext } from "../../MainProvider";
import { FaAngleDown } from "react-icons/fa6";

const Header = ({ h }) => {
  const { logoutAccount, id } = useContext(UserContext);
  const { redirect } = useContext(MainContext);

  const handleLogOut = () => {
    logoutAccount();
    redirect("/");
  };

  useEffect(() => {}, [id]);

  return (
    <Flex
      h={h}
      w="100%"
      bgColor={opacityTheme.base(0.7)}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX="5em"
    >
      <Flex>
        <a href="/">Dompet</a>
      </Flex>
      <Flex>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaAngleDown />}
            colorScheme="blue"
          >
            Setting
          </MenuButton>
          <MenuList>
            <MenuDivider />
            <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;
