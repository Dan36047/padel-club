import {Box, Heading, Text, Flex, Icon, Container, VStack} from '@chakra-ui/react';
import {FaBolt, FaUsers, FaHeart} from 'react-icons/fa';


const AboutGame = () => {

    const features = [
        {
            icon: FaBolt,
            title: "Легкий старт",
            description: "Техника проще, чем в теннисе. Освойшь базовые удары за первую тренировку."
        },
        {
            icon: FaUsers,
            title: "Социальная игра",
            description: "Формат 2×2, быстро находишь партнеров. Отличный способ завести новых друзей."
        },
        {
            icon: FaHeart,
            title: "Кардио + драйв",
            description: "Много розыгрышей, мало пауз. Отличная тренировка и адреналин в одном флаконе."
        }
    ];
    return (
        <>
            <Box pt="90px" pb="80px"  bg="#f9fafb" textAlign="center">
                <Container>
                    <VStack gap="40px">
                        <Heading
                            as="h2"
                            fontSize={{base: '3xl', md: '5xl', lg: '6xl'}}
                            fontWeight="bold"
                        >
                            Что такое падел?
                        </Heading>
                        <Text fontSize={{base: "md", md: "xl"}} fontWeight={600} color="gray.600" maxW="800px"
                              mx="auto">
                            Падел — динамичный вид спорта на корте 10×20 м со стеклянными стенами. Ракетки без струн, мяч
                            похож на теннисный, формат чаще 2×2, счет как в теннисе. Розыгрыши часто от стен — легко начать,
                            интересно и новичкам, и опытным.
                        </Text>
                    </VStack>

                    <Flex
                        direction={{base: "column", md: "row"}}
                        justify="center"
                        align="stretch"
                        gap={10}
                        maxW="900px"
                        mx="auto"
                        pt="80px"
                    >
                        {features.map((feature, index) => (
                            <Box
                                key={index} // Обязательно используй уникальный `key`, а не индекс, если данные могут меняться
                                bg="white"
                                p={10}
                                borderRadius="lg"
                                boxShadow="sm"
                                flex="1"
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                textAlign="center"
                                transition="transform 0.2s"
                                _hover={{transform: "translateY(-10px)"}}
                            >
                                <Icon
                                    as={feature.icon}
                                    boxSize={14}
                                    color="green.600"
                                    bg="green.200"
                                    borderRadius="full"
                                    p={3}
                                    mb={4}
                                />
                                <Heading as="h3" size="lg" mb={2} color="gray.800">
                                    {feature.title}
                                </Heading>
                                <Text fontSize="md" color="gray.600" fontWeight={600} >
                                    {feature.description}
                                </Text>
                            </Box>
                        ))}
                    </Flex>
                </Container>
            </Box>
        </>
    )
}

export default AboutGame;