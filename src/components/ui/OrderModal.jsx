import { Dialog, Button, Field, Input, VStack, Text } from "@chakra-ui/react";
import { toaster } from "./toaster.core";

export default function OrderModal({ open, setOpen, plan }) {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const phone = form.get("phone");
        const email = form.get("email");

        const res = await fetch("/api/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone, email, plan }),
        });

        const data = await res.json();

        if (data.ok) {
            toaster.success({
                title: "Заявка отправлена!",
                description: "Мы свяжемся с вами в ближайшее время.",
            });
            setOpen(false);
        } else {
            toaster.error({
                title: "Ошибка",
                description: "Не удалось отправить сообщение.",
            });
        }
    };

    return (
        <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Content maxW="500px">
                    <Dialog.Header>
                        <Dialog.Title>Оформление заказа</Dialog.Title>
                        <Text mt={1} color="gray.600">
                            Тариф: <strong>{plan}</strong>
                        </Text>
                    </Dialog.Header>

                    <Dialog.Body>
                        <form onSubmit={handleSubmit}>
                            <VStack gap="4">
                                <Field.Root>
                                    <Input name="name" placeholder="Ваше имя" required />
                                    <Field.ErrorText>Введите имя</Field.ErrorText>
                                </Field.Root>

                                <Field.Root>
                                    <Input name="phone" placeholder="+7 (XXX) XXX-XX-XX" required />
                                    <Field.ErrorText>Введите телефон</Field.ErrorText>
                                </Field.Root>

                                <Field.Root>
                                    <Input name="email" placeholder="Email (необязательно)" />
                                </Field.Root>

                                <Button type="submit" colorScheme="blue" w="full">
                                    Отправить заявку
                                </Button>
                            </VStack>
                        </form>
                    </Dialog.Body>

                    <Dialog.Footer>
                        <Dialog.CloseTrigger />
                    </Dialog.Footer>
                </Dialog.Content>
            </Dialog.Positioner>
        </Dialog.Root>
    );
}
