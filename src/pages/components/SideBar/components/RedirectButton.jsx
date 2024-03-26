import { Button, Text } from "@chakra-ui/react";
import { theme } from "../../../../utils/color";
import { MainContext } from "../../../../MainProvider";
import { useContext } from "react";

const RedirectButton = ({ link, text }) => {
  const { redirect } = useContext(MainContext);

  const getPathFromLink = () => {
    let result = link;
    if (typeof link == "string") if (link.length == 0) return null;
    if (link.charAt(0) == "/") result = link.substring(1);
    if (link == "/") result = "Main";
    return result;
  };

  const handleRedirect = () => {
    redirect(link);
  };

  return (
    <Button
      onClick={handleRedirect}
      w="100%"
      h="4em"
      bgColor={theme.base}
      borderRadius={0}
    >
      <Text>{text || getPathFromLink() || "Some Text"}</Text>
    </Button>
  );
};

export default RedirectButton;
