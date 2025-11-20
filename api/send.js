export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ ok: false, message: "Only POST allowed" });
    }

    const { name, phone, plan, email, policyAccepted } = req.body;

    // обязательные поля
    if (!name || !phone || !plan) {
        return res.status(400).json({
            ok: false,
            message: "Missing required fields (name, phone, plan)",
        });
    }

    // проверка согласия с политикой (обязательно)
    if (!policyAccepted) {
        return res.status(400).json({
            ok: false,
            message: "Не отмечено согласие с политикой конфиденциальности",
        });
    }

    // валидация телефона
    const cleaned = String(phone).replace(/[^\d+]/g, "");
    const phoneRegex = /^(\+7|8)?\d{10}$/;

    if (!phoneRegex.test(cleaned)) {
        return res.status(400).json({
            ok: false,
            message: "Некорректный номер телефона",
        });
    }

    const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TOKEN || !CHAT_ID) {
        console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set in environment.");
        return res.status(500).json({
            ok: false,
            message: "Server configuration error (missing Telegram credentials).",
        });
    }

    const text =
        `📩 Новая заявка:\n` +
        `👨 Имя: ${name}\n` +
        `📞 Телефон: ${cleaned}\n` +
        (email ? `📧 Email: ${email}\n` : "") +
        `🏷 Тариф: ${plan}\n` +
        `✅ Согласие с политикой: ${policyAccepted ? "да" : "нет"}`;

    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    try {
        const tgRes = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: CHAT_ID, text }),
        });

        const data = await tgRes.json();

        if (data.ok) {
            res.status(200).json({ ok: true, message: "Message sent successfully" });
        } else {
            console.error("Telegram API Error:", data);
            res.status(500).json({
                ok: false,
                message: `Telegram API error: ${data.description || "Unknown error"}`,
            });
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        res.status(500).json({
            ok: false,
            message: "Failed to connect to Telegram API",
        });
    }
}