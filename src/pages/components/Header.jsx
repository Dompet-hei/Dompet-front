import { Flex, Button } from "@chakra-ui/react";
import { theme, opacityTheme } from "../../utils/color";
import { useContext } from "react";
import { UserContext } from "../../UserProvider";
import { useEffect } from "react";
import { MainContext } from "../../MainProvider";

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
        <Button onClick={handleLogOut}>LogOut</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
