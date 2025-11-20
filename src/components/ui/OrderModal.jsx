import {
    Dialog,
    Button,
    Field,
    Input,
    VStack,
    Text,
    Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import { toaster } from "./toaster.jsx";

export default function OrderModal({ open, setOpen, plan }) {
    const [phoneError, setPhoneError] = useState("");
    const [policyError, setPolicyError] = useState("");

    const validatePhone = (phone) => {
        const cleaned = phone.replace(/[^\d+]/g, "");
        const phoneRegex = /^(\+7|8)?\d{10}$/;
        return phoneRegex.test(cleaned);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const phone = form.get("phone");
        const email = form.get("email");
        const policyAccepted = form.get("policyAccepted") === "on"; // чекбокс

        // политика
        if (!policyAccepted) {
            setPolicyError("Нужно согласиться с политикой конфиденциальности");
            return;
        } else {
            setPolicyError("");
        }

        // телефон
        if (!validatePhone(phone)) {
            setPhoneError("Введите корректный номер телефона");
            return;
        } else {
            setPhoneError("");
        }

        const res = await fetch("/api/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                phone,
                email,
                plan,
                policyAccepted,
            }),
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
                description: data.message || "Не удалось отправить сообщение.",
            });
        }
    };

    return (
        <Dialog.Root open={open} onOpenChange={(details) => setOpen(details.open)}>
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
                            <VStack gap="4" align="stretch">
                                {/* Имя */}
                                <Field.Root>
                                    <Field.Label>Имя</Field.Label>
                                    <Input name="name" placeholder="Ваше имя" required />
                                    <Field.ErrorText>Введите имя</Field.ErrorText>
                                </Field.Root>

                                {/* Телефон */}
                                <Field.Root invalid={!!phoneError}>
                                    <Field.Label>Телефон</Field.Label>
                                    <Input
                                        name="phone"
                                        placeholder="+7 (XXX) XXX-XX-XX"
                                        required
                                        onChange={() => setPhoneError("")}
                                    />
                                    {phoneError && (
                                        <Field.ErrorText>{phoneError}</Field.ErrorText>
                                    )}
                                </Field.Root>

                                {/* Email */}
                                <Field.Root>
                                    <Field.Label>Email</Field.Label>
                                    <Input
                                        name="email"
                                        placeholder="Email (необязательно)"
                                        type="email"
                                    />
                                </Field.Root>

                                {/* Политика конфиденциальности */}
                                <Field.Root invalid={!!policyError}>
                                    <Checkbox.Root name="policyAccepted">
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control>
                                            <Checkbox.Indicator />
                                        </Checkbox.Control>
                                        <Checkbox.Label>
                                            Согласен с{" "}
                                            <a
                                                href="/privacy-policy"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ textDecoration: "underline" }}
                                            >
                                                политикой конфиденциальности
                                            </a>
                                        </Checkbox.Label>
                                    </Checkbox.Root>
                                    {policyError && (
                                        <Field.ErrorText>{policyError}</Field.ErrorText>
                                    )}
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