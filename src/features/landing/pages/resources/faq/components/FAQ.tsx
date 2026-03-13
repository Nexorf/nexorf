const faqs = [
    {
        question: "¿Cuánto tiempo tarda un desarrollo?",
        answer: "Dependiendo de la complejidad del proyecto, el desarrollo puede tomar entre 2 y 6 semanas.",
    },
    {
        question: "¿Tienen soporte post-venta?",
        answer: "Sí, ofrecemos soporte técnico continuo por WhatsApp y correo electrónico.",
    },
    {
        question: "¿Aceptan pagos mensuales?",
        answer: "Sí, manejamos planes de pago flexibles adaptados al tamaño de tu negocio.",
    },
    {
        question: "¿Qué es un sistema ERP?",
        answer: "Un ERP es un sistema que integra diferentes áreas de tu negocio como ventas, inventario, finanzas y clientes en una sola plataforma.",
    },
    {
        question: "¿El sistema incluye punto de venta (POS)?",
        answer: "Sí, nuestro sistema incluye un módulo POS que permite registrar ventas, controlar caja y gestionar productos en tiempo real.",
    },
    {
        question: "¿Puedo usar el sistema desde diferentes dispositivos?",
        answer: "Sí, nuestras aplicaciones web funcionan desde computadoras, tablets y dispositivos móviles.",
    },
    {
        question: "¿Cómo protegen la seguridad de mis datos?",
        answer: "Utilizamos buenas prácticas de seguridad, cifrado de datos y servidores confiables para proteger la información de tu empresa.",
    },
    {
        question: "¿Qué métodos de pago aceptan?",
        answer: "Aceptamos transferencias bancarias, pagos con tarjeta y otros métodos electrónicos según el país.",
    },
    {
        question: "¿El sistema se puede personalizar para mi empresa?",
        answer: "Sí, podemos adaptar el sistema según los procesos y necesidades específicas de tu negocio.",
    },
    {
        question: "¿El sistema permite generar reportes?",
        answer: "Sí, puedes generar reportes de ventas, inventario, clientes y rendimiento del negocio para tomar mejores decisiones.",
    },
]

export function FAQ() {
    return (
        <section className="py-20 px-4 bg-white dark:bg-black min-h-screen">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Preguntas Frecuentes</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-4">
                        Resuelve tus dudas antes de contactarnos
                    </p>
                </div>
                <div className="max-w-3xl mx-auto space-y-6">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group border rounded-lg p-4 cursor-pointer">
                            <summary className="text-lg font-semibold text-gray-800 dark:text-white group-open:text-green-500 transition-all duration-300">
                                {faq.question}
                            </summary>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}
