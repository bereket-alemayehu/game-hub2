import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorSwitchMode from './ColorSwitchMode';

const NavBar = () => {
  return (
   <HStack justify='space-between' padding='10px'>
    <Image src={logo} boxSize='60px'/>
    <ColorSwitchMode/>
   </HStack>
  )
}

export default NavBar;
