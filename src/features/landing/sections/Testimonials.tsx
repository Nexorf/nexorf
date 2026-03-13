"use client"

import { AnimatedTestimonials } from "@/features/landing/ui/organisms/testimonials/animated-testimonials";

export function Testimonials() {
    const testimonials = [
        {
            quote:
                "Controla tu inventario en tiempo real, evita quiebres de stock y mantén siempre actualizado el estado de tus productos.",
            name: "Gestión de Inventario",
            designation: "Control total de productos y existencias",
            src: "https://images.unsplash.com/photo-1648824572347-517357c9c44e?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "Registra ventas de forma rápida y sencilla con un sistema de punto de venta moderno que agiliza la atención al cliente.",
            name: "Punto de Venta",
            designation: "Ventas rápidas y control de caja",
            src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "Obtén reportes claros sobre ingresos, productos más vendidos y desempeño de tu negocio para tomar mejores decisiones.",
            name: "Reportes y Analítica",
            designation: "Información para decisiones inteligentes",
            src: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "Automatiza procesos administrativos como compras, facturación y control financiero para ahorrar tiempo y reducir errores.",
            name: "Automatización",
            designation: "Procesos más eficientes",
            src: "https://images.unsplash.com/photo-1718241905462-56e7b9f722f3?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "Gestiona clientes, historial de compras y fidelización para mejorar la experiencia y aumentar las ventas.",
            name: "Gestión de Clientes",
            designation: "Relación con clientes centralizada",
            src: "https://images.unsplash.com/photo-1715635845783-7404fae223f9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    return (
        <section id="use-cases" className="py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Lo que podemos hacer por ti
                    </h2>

                    <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-900"></div>

                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Nuestra plataforma ayuda a negocios a optimizar su gestión,
                        automatizar procesos y tomar decisiones basadas en datos.
                    </p>
                </div>

                <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            </div>
        </section>
    );
}