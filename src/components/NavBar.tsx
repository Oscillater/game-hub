import { HStack, Image } from '@chakra-ui/react'
import huaji from '../assets/huaiji.webp'
import ColorModeSwitch from './ColorModeSwitch'
const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={huaji} boxSize='60px'/> 
      <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar