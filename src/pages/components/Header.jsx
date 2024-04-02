import {
  Flex,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  MenuDivider,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { opacityTheme, theme } from "../../utils/color";
import { useContext } from "react";
import { UserContext } from "../../UserProvider";
import { useEffect } from "react";
import { MainContext } from "../../MainProvider";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import WithdrawalsModal from "../../modal/WithdrawalsModal";
import DepositsModal from "../../modal/DepositsModal";
import InterestModal from "../../modal/InterestModal";

const Header = ({ h }) => {
  const { logoutAccount, id } = useContext(UserContext);
  const { redirect } = useContext(MainContext);

  const withDrawalsUseDisclosure = useDisclosure();
  const depositsUseDisclosure = useDisclosure();
  const interestUseDisclosure = useDisclosure();

  const handleLogOut = () => {
    logoutAccount();
    setTimeout(() => redirect("/chose"), 1000);
  };

  useEffect(() => {}, [id]);

  return (
    <Flex
      h={h}
      w="100%"
      bgColor={theme.base}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX="5em"
    >
      <Link to="/">
        <Text fontSize="1.5em">Dompet</Text>
      </Link>
      <Flex>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaAngleDown />}
            colorScheme="blue"
          >
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem onClick={interestUseDisclosure.onOpen}>
              Modify Interest
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={depositsUseDisclosure.onOpen}>Deposits</MenuItem>
            <MenuItem onClick={withDrawalsUseDisclosure.onOpen}>
              With Drawals
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <WithdrawalsModal useDisclosure={withDrawalsUseDisclosure} />
      <DepositsModal useDisclosure={depositsUseDisclosure} />
      <InterestModal useDisclosure={interestUseDisclosure} />
    </Flex>
  );
};

export default Header;
