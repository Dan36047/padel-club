import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Card,
    Flex,
    VStack,
} from '@chakra-ui/react';
import {FaCheck, FaUsers, FaChartLine, FaBuilding, FaBook, FaCubes, FaTrophy, FaMapMarkerAlt} from 'react-icons/fa';

const AdvantageCard = ({icon, title, description}) => {
    return (
        <Card.Root
            bg="gray.50"
            borderRadius="md"
            p={4}
            _hover={{bg: 'gray.100', transform: 'translateY(-2px)'}}
            transition="all 0.2s"
        >
            <Card.Body p={2}>
                <Flex direction="column" gap={3} align={{base: 'center', md: 'flex-start'}}>
                    {/* Иконка */}
                    <Box
                        color="green.600"
                        bg="green.200"
                        w="40px"
                        h="40px"
                        borderRadius="md"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="2xl"
                        boxSize={12}
                    >
                        {icon}
                    </Box>
                    {/* Заголовок */}
                    <Heading as="h3" size="md" fontWeight="bold">
                        {title}
                    </Heading>
                    {/* Описание */}
                    <Text fontSize="md" color="gray.600" fontWeight={600}>
                        {description}
                    </Text>
                </Flex>
            </Card.Body>
        </Card.Root>
    );
};

const Advantages = () => {
    const advantages = [
        {
            icon: <FaCheck/>,
            title: 'Подходит новичкам',
            description: 'Начнешь играть в первый день. Простые правила и помощь тренера.',
        },
        {
            icon: <FaUsers/>,
            title: 'Командная игра 2×2',
            description: 'Атмосфера, партнерство, клубные матчи каждую неделю.',
        },
        {
            icon: <FaChartLine/>,
            title: 'Быстрый прогресс',
            description: 'Тренеры дают прикладные советы, персональный план развития.',
        },
        {
            icon: <FaBuilding/>,
            title: '4 крытых корта',
            description: 'Игра круглый год, 10×20 м, стеклянные стены, профессиональное покрытие.',
        },
        {
            icon: <FaBook/>,
            title: 'Сертифицированные тренеры',
            description: 'Персональный план и разбор техники, видео-анализ игры.',
        },
        {
            icon: <FaCubes/>,
            title: 'Аренда инвентаря',
            description: 'Ракетки и мячи на месте, бесплатно для пробной тренировки.',
        },
        {
            icon: <FaTrophy/>,
            title: 'Турниры и лига',
            description: 'Рейтинги, события каждую неделю, призы и признание.',
        },
        {
            icon: <FaMapMarkerAlt/>,
            title: 'Удобная локация',
            description: 'м. ВДНХ, парковка поблизости, легко добраться.',
        },
    ];

    return (
        <Box pt="80px" mb="80px">
            <Container>

                <VStack spacing={4} mb="70px" align="center" gap="40px">
                    <Heading as="h1" fontWeight="bold" color="gray.800" fontSize={{base: '3xl', md: '5xl', lg: '6xl'}}>
                        Преимущества клуба
                    </Heading>
                    <Text fontSize={{base: "md", md: "xl"}} fontWeight={600} color="gray.600" textAlign="center">
                        Почему выбирают Падел Хаб Москва
                    </Text>
                </VStack>

                <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap="35px">
                    {advantages.map((adv, index) => (
                        <AdvantageCard
                            key={index}
                            icon={adv.icon}
                            title={adv.title}
                            description={adv.description}
                        />
                    ))}
                </SimpleGrid>


            </Container>
        </Box>

    )
}

export default Advantages;