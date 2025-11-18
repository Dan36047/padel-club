import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    VStack,
    HStack,
    Badge,
    Separator, Container,
} from "@chakra-ui/react";

const plans = [
    {
        title: "Разовое занятие",
        price: "2 200 ₽",
        features: [
            "60 минут тренировки",
            "Группа до 6 человек",
            "Инвентарь включен",
            "Профессиональный тренер",
        ],
        buttonColor: "black",
        buttonTextColor: "white",
    },
    {
        title: "Абонемент 8 тренировок/мес",
        price: "14 900 ₽",
        best: true,
        features: [
            "8 тренировок по 60 минут",
            "Приоритетная запись",
            "-10% на аренду корта",
            "Персональный план развития",
        ],
        buttonColor: "green.400",
        buttonTextColor: "black",
    },
    {
        title: "Индивидуальная тренировка",
        price: "4 500 ₽",
        features: [
            "60 минут 1-на-1",
            "Персональный тренер",
            "Видео-разбор техники",
            "Инвентарь включен",
        ],
        buttonColor: "black",
        buttonTextColor: "white",
    },
    {
        title: "Аренда корта 90 мин",
        price: "3 600 ₽",
        features: [
            "90 минут игры",
            "До 4 игроков",
            "Прокат ракетки — 300 ₽",
            "Бронирование онлайн",
        ],
        buttonColor: "black",
        buttonTextColor: "white",
    },
];

export default function PricingSection() {
    return (
        <Box mb="80px" pt="80px">
            <Container>
                {/* Заголовок */}
                <VStack spacing={3} textAlign="center" mb={10} gap="40px">
                    <Heading as="h1" fontWeight="bold" color="gray.800" fontSize={{base: '3xl', md: '5xl', lg: '6xl'}}>
                        Цены и тарифы
                    </Heading>
                    <Text as="h2" fontSize={{base: "md", md: "xl"}} fontWeight={600} color="gray.600" textAlign="center">
                        Выбери подходящий формат для себя
                    </Text>
                </VStack>

                {/* Карточки тарифов */}
                <Flex
                    wrap="wrap"
                    justify="center"
                    align="stretch"
                    gap={6}
                    maxW="7xl"
                    mx="auto"
                >
                    {plans.map((plan) => (
                        <Box
                            key={plan.title}
                            bg="white"
                            borderWidth={plan.best ? "2px" : "1px"}
                            borderColor={plan.best ? "green.400" : "gray.200"}
                            borderRadius="2xl"
                            boxShadow="sm"
                            p={8}
                            textAlign="center"
                            position="relative"
                            flex="1 1 260px"
                            maxW="290px"
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                            transition="all 0.2s"
                            _hover={{
                                transform: "translateY(-4px)",
                                boxShadow: "md",
                            }}
                        >
                            {/* Лучший выбор */}
                            {plan.best && (
                                <Badge
                                    position="absolute"
                                    top="-14px"
                                    left="50%"
                                    transform="translateX(-50%)"
                                    bg="green.400"
                                    color="black"
                                    px={4}
                                    py={1}
                                    fontSize="xs"
                                    borderRadius="full"
                                    fontWeight="bold"
                                    boxShadow="sm"
                                >
                                    Лучший выбор
                                </Badge>
                            )}

                            {/* Контейнер контента */}
                            <Flex
                                direction="column"
                                flex="1"
                                justify="space-between"
                                align="stretch"
                            >
                                {/* Заголовок + цена */}
                                <VStack spacing={1} mb={4}>
                                    <Heading fontSize="lg" fontWeight="semibold" color="#0A1628"
                                             minH={{base: 0, lg: "60px"}}>
                                        {plan.title}
                                    </Heading>
                                    <Text fontSize="3xl" fontWeight="bold" color="green.400" mt={1}>
                                        {plan.price}
                                    </Text>
                                </VStack>

                                <Separator mb={4} borderColor="gray.200"/>

                                {/* Список преимуществ */}
                                <VStack
                                    spacing={2}
                                    align="start"

                                    fontSize="sm"
                                    color="#0A1628"
                                    flex="1"
                                    mb={6}
                                >
                                    {plan.features.map((f) => (
                                        <HStack key={f} spacing={2}>
                                            <Text color="green.600">✓</Text>
                                            <Text>{f}</Text>
                                        </HStack>
                                    ))}
                                </VStack>
                            </Flex>

                            {/* Кнопка — прижата к низу */}
                            <Button
                                mt="auto"
                                bg={plan.buttonColor}
                                color={plan.buttonTextColor}
                                fontWeight="bold"
                                _hover={{
                                    opacity: 0.85,
                                    transform: "scale(1.02)",
                                }}
                                w="full"
                                borderRadius="xl"
                                py={5}
                            >
                                Выбрать тариф
                            </Button>
                        </Box>
                    ))}
                </Flex>

                {/* Нижний блок */}
                <Box
                    maxW="3xl"
                    mx="auto"
                    mt={16}
                    p={6}
                    bg="white"
                    borderRadius="2xl"
                    boxShadow="sm"
                    border="1px solid"
                    borderColor="gray.200"
                >
                    <Text
                        fontWeight="bold"
                        textAlign="center"
                        mb={3}
                        color="#0A1628"
                        fontSize="lg"
                    >
                        Первое занятие — бесплатно! 🎉
                    </Text>
                    <Separator mb={4} borderColor="gray.200"/>
                    <VStack align="start" spacing={1} fontSize="sm" color="#0A1628">
                        <Text>
                            <strong>Оплата:</strong> наличными, картой или через СБП на месте
                        </Text>
                        <Text>
                            <strong>Отмена:</strong> бесплатно за 12 часов до начала занятия
                        </Text>
                        <Text>
                            <strong>Заморозка абонемента:</strong> до 14 дней при
                            предварительном уведомлении
                        </Text>
                    </VStack>
                </Box>
            </Container>
        </Box>
    );
}
