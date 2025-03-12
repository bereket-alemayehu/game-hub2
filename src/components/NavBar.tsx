import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitchMode from "./ColorSwitchMode";
import SearchInput from "./SearchInput";

interface Props {
  onSearchBar: (searchText: string) => void;
}
const NavBar = ({ onSearchBar }: Props) => {
  return (
    <HStack justify="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={(searchText) => onSearchBar(searchText)} />
      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;
