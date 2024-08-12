import { HStack, Image, Text } from '@chakra-ui/react'
import huaji from '../assets/huaiji.webp'
const NavBar = () => {
  return (
    <HStack>
      <Image src={huaji} boxSize='60px'/> 
      <Text>NavBar</Text> 
    </HStack>
  )
}

export default NavBar