import {
    Box,
    Flex,
    Button,
    HStack,
    Stack,
    Image,
    Link,
    CloseButton,
    Drawer,
    Portal,
    useBreakpointValue
} from '@chakra-ui/react';
import {useState} from "react"
import { TfiAlignJustify } from "react-icons/tfi";
import logo from '../assets/logo.svg';

const Navbar = () => {
    const isMobile = useBreakpointValue({base: true, md: true, lg: false});
    const [open, setOpen] = useState(false)

    const DesktopNav = () => (
        <>
            <HStack spacing={6}>
                <Button variant="link" fontSize="lg" _hover={{transform: 'scale(1.2)'}} >Главная</Button>
                <Button variant="link" fontSize="lg" _hover={{transform: 'scale(1.2)'}}>Что такое падел</Button>
                <Button variant="link" fontSize="lg" _hover={{transform: 'scale(1.2)'}}>Преимущества</Button>
                <Button variant="link" fontSize="lg" _hover={{transform: 'scale(1.2)'}}>Галерея</Button>
                <Button variant="link" fontSize="lg" _hover={{transform: 'scale(1.2)'}}>Цены</Button>
                <Button variant="link" fontSize="lg" _hover={{transform: 'scale(1.2)'}}>FAQ</Button>
                <Button variant="link" fontSize="lg" _hover={{transform: 'scale(1.2)'}}>Контакты</Button>
            </HStack>
            <Button
                bg="#66BB6A"
                color="white"
                _hover={{ bg: "#4CAF50", transform: 'scale(1.2)'}}
            >Купить абонемент</Button>
        </>
    );

    const MobileNav = () => (
        <>
            <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)} placement="top">
                <Drawer.Trigger asChild>
                    <Button variant="outline" size="sm" >
                        <TfiAlignJustify color="white"/>
                    </Button>
                </Drawer.Trigger>
                <Portal>
                    <Drawer.Backdrop/>
                    <Drawer.Positioner>
                        <Drawer.Content
                            bg="#212e3c"
                            color="white"
                            maxH="80vh"
                            overflowY="auto"
                            mt="80px"          // ✅ Отступ под navbar
                            ml="20px"
                            mr="20px"
                            borderRadius="md"
                        >
                            <Drawer.Header>
                                <Image src={logo} alt="Логотип" boxSize="80px" bg="white" m="auto"/>
                            </Drawer.Header>
                            <Drawer.Body p={4}>
                                <Stack spacing={10} align="stretch">
                                    <Button variant="link" fontSize="lg">Главная</Button>
                                    <Button variant="link" fontSize="lg">Что такое падел</Button>
                                    <Button variant="link" fontSize="lg">Преимущества</Button>
                                    <Button variant="link" fontSize="lg">Цены</Button>
                                    <Button variant="link" fontSize="lg">FAQ</Button>
                                    <Button variant="link" fontSize="lg">Контакты</Button>

                                </Stack>
                            </Drawer.Body>
                            <Drawer.Footer p={4} pt={0}>
                                <Button
                                    w="100%"
                                    bg="#66BB6A"
                                    color="white"
                                    fontWeight="bold"
                                    fontSize="md"
                                    borderRadius="md"
                                    _hover={{ bg: "#4CAF50"}}
                                >Купить абонемент</Button>
                            </Drawer.Footer>
                            <Drawer.CloseTrigger asChild>
                                <CloseButton
                                    position="absolute"
                                    top="4"
                                    right="4"
                                    color="white"
                                    size="lg"
                                />
                            </Drawer.CloseTrigger>
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>
        </>
    );

    return (
        <Box
            bg="#212e3c"
            py={2}
            px={10}
            color="white"
            boxShadow="sm"
            position="fixed"
            top="0"
            left="0"
            right="0"
            zIndex="sticky"
        >
            <Flex maxW="container.xl" mx="auto" justify="space-between" align="center" >

                {/* Логотип всегда виден */}
                <Link href="/" _hover={{textDecoration: 'none'}}>
                    <Image src={logo} alt="Логотип клуба" boxSize="70px" cursor="pointer" bg="white"/>
                </Link>

                {isMobile ? <MobileNav/> : <DesktopNav/>}
            </Flex>
        </Box>
    );
};

export default Navbar;