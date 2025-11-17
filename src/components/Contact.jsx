import {
    Box,
    Flex,
    Heading,
    Text,
    VStack,
    HStack,
    Button,
    Icon,
    Link, Container,
} from "@chakra-ui/react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaWhatsapp,
    FaTelegramPlane,
} from "react-icons/fa";

const Contact = () => {
    return (
        <Box bg="white" mb="80px" mt="80px" px={{ base: 4, md: 12 }} maxW="1200px" mx="auto">
            <Container>


            {/* Заголовок */}
            <VStack spacing={3} textAlign="center" mb={10}>
                <Heading
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight="bold"
                    color="blue.900"
                >
                    Контакты
                </Heading>
                <Text fontSize="lg" color="gray.600">
                    Приезжай и попробуй падел прямо сегодня
                </Text>
            </VStack>

            <Flex direction={{ base: "column", lg: "row" }} gap={8} align="stretch">
                {/* Левая часть */}
                <VStack flex="1" align="stretch" spacing={5}>
                    {/* Адрес */}
                    <Box p={5} borderWidth="1px" borderRadius="xl" boxShadow="sm">
                        <HStack spacing={3} mb={2}>
                            <Icon as={FaMapMarkerAlt} color="yellow.400" boxSize={5} />
                            <Heading as="h3" fontSize="lg">
                                Адрес
                            </Heading>
                        </HStack>
                        <Text color="gray.700" mb={3}>
                            Москва, Ракетный бульвар, д. 7, стр. 2 <br /> (м. ВДНХ)
                        </Text>
                        <Button
                            size="sm"
                            variant="outline"
                            colorScheme="blue"
                            as={Link}
                            href="https://yandex.ru/maps/-/CDS9eB2W"
                            isExternal
                        >
                            Открыть в картах
                        </Button>
                    </Box>

                    {/* Телефон */}
                    <Box p={5} borderWidth="1px" borderRadius="xl" boxShadow="sm">
                        <HStack spacing={3} mb={2}>
                            <Icon as={FaPhoneAlt} color="yellow.400" boxSize={5} />
                            <Heading as="h3" fontSize="lg">
                                Телефон
                            </Heading>
                        </HStack>
                        <Link href="tel:+74951234567" color="gray.700">
                            +7 (495) 123-45-67
                        </Link>
                    </Box>

                    {/* Email */}
                    <Box p={5} borderWidth="1px" borderRadius="xl" boxShadow="sm">
                        <HStack spacing={3} mb={2}>
                            <Icon as={FaEnvelope} color="yellow.400" boxSize={5} />
                            <Heading as="h3" fontSize="lg">
                                Email
                            </Heading>
                        </HStack>
                        <Link href="mailto:hello@padelhub-msk.ru" color="blue.500">
                            hello@padelhub-msk.ru
                        </Link>
                    </Box>

                    {/* График работы */}
                    <Box p={5} borderWidth="1px" borderRadius="xl" boxShadow="sm">
                        <HStack spacing={3} mb={2}>
                            <Icon as={FaClock} color="yellow.400" boxSize={5} />
                            <Heading as="h3" fontSize="lg">
                                График работы
                            </Heading>
                        </HStack>
                        <Text color="gray.700">Пн–Вс 08:00–23:00</Text>
                    </Box>

                    {/* Кнопки */}
                    <HStack spacing={4} pt={3}>
                        <Button
                            colorScheme="whatsapp"
                            flex="1"
                            size="lg"
                            borderRadius="xl"
                            as={Link}
                            href="https://wa.me/74951234567"
                            isExternal
                        >
                            <FaWhatsapp /> WhatsApp
                        </Button>
                        <Button
                            bg="black"
                            color="white"
                            _hover={{ bg: "gray.700" }}
                            flex="1"
                            size="lg"
                            borderRadius="xl"
                            as={Link}
                            href="https://t.me/padelhub"
                            isExternal
                        >
                            <FaTelegramPlane />Telegram
                        </Button>
                    </HStack>
                </VStack>

                {/* Правая часть — Карта */}
                <VStack flex="1" spacing={5} align="stretch">
                    <Box
                        borderRadius="xl"
                        overflow="hidden"
                        boxShadow="md"
                        height="400px"
                    >
                        <iframe
                            src="https://yandex.com/map-widget/v1/?ll=37.527103%2C55.760130&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjcyMTY2NRJM0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsIDIt0Y8g0JzQsNCz0LjRgdGC0YDQsNC70YzQvdCw0Y8g0YPQu9C40YbQsCwgN9GBMiIKDcIbFkIVYApfQg%2C%2C&z=17.05"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            title="Карта клуба"
                            loading="lazy"
                        ></iframe>
                    </Box>

                    <Box p={5} borderWidth="1px" borderRadius="xl" boxShadow="sm">
                        <Heading as="h3" fontSize="lg" mb={3}>
                            Как добраться
                        </Heading>
                        <VStack align="start" spacing={2} color="gray.700">
                            <Text>• 10 минут пешком от метро ВДНХ</Text>
                            <Text>• Парковка рядом с бизнес-центром</Text>
                            <Text>• Удобный подъезд на общественном транспорте</Text>
                        </VStack>
                    </Box>
                </VStack>
            </Flex>
            </Container>
        </Box>
    );
};

export default Contact;