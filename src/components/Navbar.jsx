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
    const isMobile = useBreakpointValue({base: true, md: false});
    const [open, setOpen] = useState(false)

    const DesktopNav = () => (
        <>
            <HStack spacing={6}>
                <Button variant="link" fontSize="lg">Главная</Button>
                <Button variant="link" fontSize="lg">О клубе</Button>
                <Button variant="link" fontSize="lg">Цены</Button>
                <Button variant="link" fontSize="lg">Галерея</Button>
                <Button variant="link" fontSize="lg">Контакты</Button>
            </HStack>
            <Button bg="rgb(21, 128, 61)" color="white">Купить абонемент</Button>
        </>
    );

    const MobileNav = () => (
        <>
            <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
                <Drawer.Trigger asChild>
                    <Button variant="outline" size="sm">
                        <TfiAlignJustify />
                    </Button>
                </Drawer.Trigger>
                <Portal>
                    <Drawer.Backdrop/>
                    <Drawer.Positioner>
                        <Drawer.Content>
                            <Drawer.Header>
                            </Drawer.Header>
                            <Drawer.Body>
                                <Stack spacing={6} align="stretch">
                                    <Button variant="link" fontSize="lg">Главная</Button>
                                    <Button variant="link" fontSize="lg">О клубе</Button>
                                    <Button variant="link" fontSize="lg">Цены</Button>
                                    <Button variant="link" fontSize="lg">Галерея</Button>
                                    <Button variant="link" fontSize="lg">Контакты</Button>
                                </Stack>
                            </Drawer.Body>
                            <Drawer.Footer>
                            </Drawer.Footer>
                            <Drawer.CloseTrigger asChild>
                                <CloseButton size="sm"/>
                            </Drawer.CloseTrigger>
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>
        </>
    );

    return (
        <Box bg="white" py={4} px={8} boxShadow="sm">
            <Flex maxW="container.xl" mx="auto" justify="space-between" align="center">

                {/* Логотип всегда виден */}
                <Link href="/" _hover={{textDecoration: 'none'}}>
                    <Image src={logo} alt="Логотип клуба" boxSize="70px" cursor="pointer"/>
                </Link>

                {isMobile ? <MobileNav/> : <DesktopNav/>}
            </Flex>
        </Box>
    );
};

export default Navbar;