import {
    Box,
    Heading,
    Text,
    VStack,
    Accordion,
    Span, Container,
} from "@chakra-ui/react";

const faqs = [
    {
        value: "a",
        question: "Сколько человек играет в падел?",
        answer:
            "Обычно падел — это игра 2×2 (два на два). Это создаёт отличную командную атмосферу и делает игру динамичной. Также возможны индивидуальные тренировки 1×1 с тренером для отработки техники.",
    },
    {
        value: "b",
        question: "Что взять с собой на тренировку?",
        answer:
            "Возьмите удобную спортивную одежду, кроссовки с плоской подошвой, воду и хорошее настроение. Инвентарь при необходимости предоставит клуб.",
    },
    {
        value: "c",
        question: "Сложно ли начать играть в падел?",
        answer:
            "Падел намного проще начать, чем теннис! Низкий порог входа, компактная площадка и использование стен делают игру доступной с первого дня. Большинство новичков уже через 15-20 минут начинают вести полноценные розыгрыши.",
    },
    {
        value: "d",
        question: "Сколько длится занятие?",
        answer:
            "Стандартная тренировка длится 60 минут, включая разминку и игровую часть. Аренда корта доступна на 90 минут для свободной игры. Этого времени достаточно для качественной тренировки и отдыха.",
    },
    {
        value: "e",
        question: "Чем падел отличается от тенниса?",
        answer:
            "Падел играется на меньшей площадке (10×20 м против 23×11 м в теннисе), используются ракетки без струн, мяч можно отбивать от стеклянных стен. Формат чаще 2×2, что делает игру более социальной и динамичной. Падел легче освоить новичкам.",
    },
    {
        value: "f",
        question: "Можно ли детям заниматься падел?",
        answer:
            "Да! У нас есть специальные детские группы для возраста 8-14 лет. Падел отлично развивает координацию, реакцию и командные навыки. Занятия проводятся под руководством сертифицированных тренеров с опытом работы с детьми.",
    },
    {
        value: "g",
        question: "Как записаться на тренировку и можно ли отменить?",
        answer:
            "Оставьте заявку на сайте через форму выше, или позвоните по телефону +7 (495) 123-45-67. Администратор подберет удобное время. Отменить занятие можно бесплатно за 12 часов до начала.",
    },
    {
        value: "h",
        question: "Есть ли прокат инвентаря?",
        answer:
            "Да, ракетки и мячи доступны на стойке администратора. Первое занятие инвентарь бесплатно, далее прокат ракетки стоит 300 ₽ за тренировку. Также можно купить собственную ракетку в нашем магазине.",
    },
];

export default function FAQSection() {
    return (
        <Box bg="gray.50" py={{base: 10, md: 20}} px={{base: 4, md: 8}}>
            <Container>
                <VStack spacing={6} textAlign="center" mb={8}>
                    <Heading fontSize={{base: "2xl", md: "4xl"}} fontWeight="bold">
                        Частые вопросы
                    </Heading>
                    <Text color="gray.600" fontSize={{base: "md", md: "lg"}}>
                        Ответы на самые популярные вопросы о падел
                    </Text>
                </VStack>

                <Accordion.Root
                    type="single"
                    collapsible
                    defaultValue={["a"]}
                    maxW="800px"
                    mx="auto"
                >
                    {faqs.map((faq) => (
                        <Accordion.Item
                            key={faq.value}
                            value={faq.value}
                            border="1px solid"
                            borderColor="gray.200"
                            borderRadius="xl"
                            bg="white"
                            boxShadow="sm"
                            mb={4}
                        >
                            <Accordion.ItemTrigger
                                px={6}
                                py={4}
                                _hover={{bg: "gray.50"}}
                                _open={{bg: "gray.100"}}
                                fontWeight="semibold"
                                fontSize="lg"
                            >
                                <Span flex="1" textAlign="left">
                                    {faq.question}
                                </Span>
                                <Accordion.ItemIndicator/>
                            </Accordion.ItemTrigger>

                            <Accordion.ItemContent>
                                <Accordion.ItemBody px={6} pb={4} color="gray.600" fontSize="md">
                                    {faq.answer}
                                </Accordion.ItemBody>
                            </Accordion.ItemContent>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </Container>
        </Box>
    );
}
