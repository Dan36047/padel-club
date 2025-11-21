import {Box, VStack, Heading, IconButton, Image, Container, Text} from "@chakra-ui/react";
import {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery = () => {
    const images = [
        '/gallery/p1.jpg',
        '/gallery/p2.jpg',
        '/gallery/p3.jpg',
        '/gallery/p4.jpg',
        '/gallery/p5.jpg',
        '/gallery/p6.jpg',
    ];

    const swiperRef = useRef(null);

    return (
        <Box pt="80px" pb="80px" bg="#f9fafb">
            <Container>
                <VStack gap="40px" align="center">
                    <Heading as="h1" fontWeight="bold" color="gray.800" fontSize={{base: '3xl', md: '5xl', lg: '6xl'}}>Галерея
                        клуба</Heading>
                    <Text fontSize={{base: "md", md: "xl"}} fontWeight={600} color="gray.600" maxW="800px"
                          mx="auto">
                        Посмотрите на наши корты, атмосферу тренировок и счастливых игроков
                    </Text>
                </VStack>

                <Box position="relative" width="100%" maxWidth="1200px" mx="auto" mt="60px" mb="8px">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={3}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={{
                            320: {slidesPerView: 1, spaceBetween: 20},
                            768: {slidesPerView: 2, spaceBetween: 30},
                            1024: {slidesPerView: 3, spaceBetween: 40},
                        }}
                        loop={true}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    borderRadius="xl"
                                    w="100%"
                                    h="300px"
                                    objectFit="cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Кнопки перелистывания */}
                    <IconButton
                        aria-label="Previous slide"
                        position="absolute"
                        top="50%"
                        left="10px"
                        transform="translateY(-50%)"
                        onClick={() => swiperRef.current?.slidePrev()}
                        colorScheme="gray"
                        bg="green.200"
                        color="black"
                        boxShadow="md"
                        size="sm"
                        borderRadius="full"
                        _hover={{
                            bg: 'green.500',
                            color: 'black'
                        }}
                        zIndex={10}
                    ><FaArrowLeft/></IconButton>
                    <IconButton
                        aria-label="Next slide"
                        position="absolute"
                        top="50%"
                        right="10px"
                        transform="translateY(-50%)"
                        onClick={() => swiperRef.current?.slideNext()}
                        colorScheme="gray"
                        bg="green.200"
                        color="black"
                        boxShadow="md"
                        size="sm"
                        borderRadius="full"
                        _hover={{
                            bg: 'green.500',
                            color: 'black'
                        }}
                        zIndex={10}
                    ><FaArrowRight/></IconButton>
                </Box>
            </Container>

        </Box>
    );
};

export default Gallery;