import { Box, Flex, Button, HStack, Image, Link } from '@chakra-ui/react';
import logo from '../assets/logo.svg';
const Navbar = () => {
    return (
        <Box bg="white" py={4} px={8} boxShadow="sm">
            <Flex maxW="container.xl" mx="auto" justify="space-between" align="center">

                <Link href="/" _hover={{ textDecoration: 'none' }}>
                    <Image src={logo} alt="Логотип клуба" boxSize="70px" cursor="pointer" />
                </Link>

                <HStack spacing={6}>
                    <Button variant="link" fontSize="lg" >Главная</Button>
                    <Button variant="link" fontSize="lg" >О клубе</Button>
                    <Button variant="link" fontSize="lg" >Цены</Button>
                    <Button variant="link" fontSize="lg" >Галерея</Button>
                    <Button variant="link" fontSize="lg" >Контакты</Button>
                </HStack>
                <Button bg="rgb(21, 128, 61)" color="white">Купить абонемент</Button>
            </Flex>
        </Box>
    );
}

export default Navbar;