import React from 'react';
import {
    Box,
    VStack,
    Heading,
    Text,
    Button,
    HStack,
    Flex,
    Container,
} from '@chakra-ui/react';
import {ReactTyped} from "react-typed";

const HeroSection = () => {

    const adu = [
        "Падел — игра для каждого",
        "Попробуй бесплатно",
        "Найди новых друзей",
        "Будь в форме с удовольствием",]


    return (

        /* Контент */
        <Container>
            <Box
                color="white"
                textAlign="left"
                maxWidth="container.lg"
                w="full"
                pt="335px"
            >
                <VStack align="start" spacing={6} >
                    <Heading
                        as="h1"
                        fontSize={{base: '4xl', md: '6xl', lg: '7xl'}}
                        fontWeight="bold"
                        lineHeight="shorter"
                        mb="28px"
                    >
                        <ReactTyped
                            strings={adu}
                            typeSpeed={40}
                            backSpeed={50}
                            backDelay={3000}
                            loop
                        />
                    </Heading>

                    <Text
                        fontSize={{base: 'lg', md: 'xl', lg: '3xl'}}
                        maxW="6xl"
                        mb={6}
                    >
                        Попробуй бесплатно в Москве: инвентарь предоставим, тренер поможет, атмосфера — топ.
                    </Text>

                    <HStack spacing={4} gap="5" wrap="wrap">
                        <Button
                            size="2xl"
                            bg="green.400"
                            color="black"
                            _hover={{
                                bg: 'green.500',
                                transform: 'scale(1.05)',
                            }}
                            transition="all 0.2s"
                            borderRadius="md"
                        >
                            Записаться на пробную
                        </Button>
                        <Button
                            size="2xl"
                            variant="outline"
                            borderColor="green.400"
                            color="green.400"
                            _hover={{
                                bg: 'green.50',
                                transform: 'scale(1.05)',
                            }}
                            transition="all 0.2s"
                            borderRadius="md"
                        >
                            Посмотреть цены
                        </Button>
                    </HStack>

                    {/* Блоки преимуществ */}
                    <Flex
                        mt={8}
                        gap={5}
                        wrap="wrap"
                        justify={{base: 'center', md: 'start'}}
                    >
                        {[
                            {title: '60 минут', subtitle: 'бесплатно'},
                            {title: '2×2', subtitle: 'игра с первых минут'},
                            {title: 'Всё включено', subtitle: 'ракетки и мячи'},
                        ].map((item, index) => (
                            <Box
                                key={index}
                                bg="rgba(255, 255, 255, 0.1)"
                                p={4}
                                borderRadius="md"
                                textAlign="center"
                                minW={{base: '120px', md: '300px'}}
                                backdropFilter="blur(10px)"
                                border="1px solid rgba(255, 255, 255, 0.2)"
                            >
                                <Text
                                    fontSize="xl"
                                    fontWeight="bold"
                                    color="green.300"
                                >
                                    {item.title}
                                </Text>
                                <Text fontSize="sm" mt={1}>
                                    {item.subtitle}
                                </Text>
                            </Box>
                        ))}
                    </Flex>
                </VStack>
            </Box>
        </Container>


    );
};

export default HeroSection;