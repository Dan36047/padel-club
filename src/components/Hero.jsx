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
import { ReactTyped } from "react-typed";
import {useCallback} from "react";

const HeroSection = () => {
    const adu = [
        "Падел — игра для каждого",
        "Попробуй бесплатно",
        "Найди новых друзей",
        "Будь в форме с удовольствием",
    ];
    const scrollToSection = useCallback((id) => {
        const el = document.getElementById(id);

        if (el) {
            el.scrollIntoView({behavior: "smooth"});
        }
    }, []);

    return (
        <Box
            bgImage="url('/bg.png')"
            bgSize="cover"
            bgPosition="center"
            minH={{ base: "auto", md: "100vh" }}
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            py={{ base: 8, md: 16 }} // добавлены отступы
        >
            {/* Оверлей — только для фона */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg={'rgba(0, 0, 0, 0.5)'}
                zIndex={1}
            />

            {/* Контент — вне оверлея, внутри родительского Box */}
            <Box
                zIndex={2} // чтобы контент был поверх оверлея
                w="full"
                maxWidth="container.lg"
                px={{ base: 4, md: 8 }}
            >
                <Container
                    maxW={{ base: "container.sm", md: "container.lg" }}
                    px={{ base: 4, md: 8 }}
                >
                    <Box
                        color="white"
                        textAlign="left"
                        w="full"
                        pt={{ base: '60px', lg: '150px' }} // уменьшен отступ
                    >
                        <VStack align="start" spacing={6}>
                            <Heading
                                as="h1"
                                fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }} // уменьшен
                                fontWeight="bold"
                                lineHeight="shorter"
                                mb="28px"
                                height="80px"
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
                                fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} // уменьшен
                                maxW="6xl"
                                mb={6}
                            >
                                Попробуй бесплатно в Москве: инвентарь предоставим, тренер поможет, атмосфера — топ.
                            </Text>

                            <HStack spacing={4} gap="5" wrap="wrap" justifyContent={{ base: "center" }}>
                                <Button
                                    size={{ base: "lg", md: "2xl" }} // адаптивный размер
                                    bg="green.400"
                                    color="black"
                                    _hover={{
                                        bg: 'green.500',
                                        transform: 'scale(1.05)',
                                    }}
                                    transition="all 0.2s"
                                    borderRadius="md"
                                    width={{ base: "full", md: "auto" }}
                                    onClick={() => scrollToSection("pricing")}
                                >
                                    Записаться на пробную
                                </Button>
                                <Button
                                    size={{ base: "lg", md: "2xl" }}
                                    variant="outline"
                                    borderColor="green.400"
                                    color="green.400"
                                    _hover={{
                                        bg: 'green.50',
                                        transform: 'scale(1.05)',
                                    }}
                                    transition="all 0.2s"
                                    borderRadius="md"
                                    width={{ base: "full", md: "auto" }}
                                    onClick={() => scrollToSection("pricing")}
                                >
                                    Посмотреть цены
                                </Button>
                            </HStack>

                            {/* Блоки преимуществ */}
                            <Flex
                                mt={8}
                                gap={5}
                                wrap="wrap"
                                justify={{ base: 'center', md: 'start' }}
                            >
                                {[
                                    { title: '60 минут', subtitle: 'бесплатно' },
                                    { title: '2×2', subtitle: 'игра с первых минут' },
                                    { title: 'Всё включено', subtitle: 'ракетки и мячи' },
                                ].map((item, index) => (
                                    <Box
                                        key={index}
                                        bg="rgba(255, 255, 255, 0.1)"
                                        p={4}
                                        borderRadius="md"
                                        textAlign="center"
                                        minW={{ base: '120px', md: '200px' }} // уменьшен
                                        backdropFilter="blur(10px)"
                                        border="1px solid rgba(255, 255, 255, 0.2)"
                                        width={{ base: "full", md: "auto" }}
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
            </Box>
        </Box>
    );
};

export default HeroSection;