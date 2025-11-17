import {
    Box,
    Flex,
    Text,
    Link,
    VStack,
    HStack,
    Input,
    IconButton,
    Separator,
} from "@chakra-ui/react";
import {
    FaVk,
    FaTelegramPlane,
    FaYoutube,
    FaPaperPlane,
} from "react-icons/fa";
import {useCallback} from "react";


const Footer = () => {
    const scrollToSection = useCallback((id) => {
        const el = document.getElementById(id);

        if (el) {
            el.scrollIntoView({behavior: "smooth"});
        }
    }, []);

    return (
        <Box bg="#061a2a" color="white" py="48px" px={{base: 6, md: 16}}>
            <Flex
                direction={{base: "column", md: "row"}}
                justify="space-between"
                align={{base: "flex-start", md: "flex-start"}}
                gap={10}
            >
                {/* Левая колонка */}
                <VStack align="flex-start" spacing={4} maxW="300px">
                    <Text fontSize="lg" fontWeight="bold" color="#d6ff00">
                        Падел Хаб Москва
                    </Text>
                    <Text fontSize="sm" color="#dbe6f0">
                        Современный падел-клуб в центре Москвы. <br/>
                        Бесплатная пробная тренировка для всех желающих.
                    </Text>
                    <HStack spacing={4} mt={2}>
                        <Link href="#" color="white" isExternal>
                            <FaVk size={20}/>
                        </Link>
                        <Link href="#" color="white" isExternal>
                            <FaTelegramPlane size={20}/>
                        </Link>
                        <Link href="#" color="white" isExternal>
                            <FaYoutube size={20}/>
                        </Link>
                    </HStack>
                </VStack>

                {/* Навигация */}
                <VStack align="flex-start" spacing={3}>
                    <Link color="#dbe6f0" onClick={() => scrollToSection("home")}>Главная</Link>
                    <Link color="#dbe6f0" onClick={() => scrollToSection("about")}>Что такое падел</Link>
                    <Link color="#dbe6f0" onClick={() => scrollToSection("advantages")}>Преимущества</Link>
                    <Link color="#dbe6f0" onClick={() => scrollToSection("pricing")}>Цены</Link>
                    <Link color="#dbe6f0" onClick={() => scrollToSection("pricing")}>Пробная тренировка</Link>
                    <Link color="#dbe6f0" onClick={() => scrollToSection("faq")}>FAQ</Link>
                    <Link color="#dbe6f0" onClick={() => scrollToSection("contact")}>Контакты</Link>
                </VStack>

                {/* Подписка */}
                <VStack align="flex-start" spacing={3} maxW="320px">
                    <Text fontWeight="bold">Подписка на новости</Text>
                    <Text fontSize="sm" color="#dbe6f0">
                        Узнавай первым о турнирах, акциях и событиях
                    </Text>
                    <HStack w="100%">
                        <Input
                            placeholder="Ваш email"
                            bg="rgba(255,255,255,0.1)"
                            border="none"
                            _placeholder={{color: "gray.400"}}
                        />
                        <IconButton
                            aria-label="Send"
                            bg="#d6ff00"
                            color="black"
                            _hover={{bg: "#e6ff33"}}
                        ><FaPaperPlane/></IconButton>
                    </HStack>
                </VStack>
            </Flex>

            {/* Разделительная линия */}
            <Separator my={8} borderColor="gray.700"/>

            {/* Нижняя часть футера */}
            <Flex
                justify="space-between"
                direction={{base: "column", md: "row"}}
                align="center"
                gap={3}
            >
                <Text fontSize="sm" color="gray.400">
                    © 2025 Падел Хаб Москва. Все права защищены.
                </Text>
                <HStack spacing={6}>
                    <Link href="#" fontSize="sm" color="gray.400">
                        Политика конфиденциальности
                    </Link>
                    <Link href="#" fontSize="sm" color="gray.400">
                        Публичная оферта
                    </Link>
                    <Link href="#" fontSize="sm" color="gray.400">
                        Cookies
                    </Link>
                </HStack>
            </Flex>
        </Box>
    );
};

export default Footer;
