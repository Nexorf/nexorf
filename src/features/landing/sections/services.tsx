"use client"

import {useEffect, useRef, useState} from "react"
import {
    ShoppingCart,
    Smartphone,
    Globe,
    CreditCard,
    FileText,
    Store,
} from "lucide-react"
import { FocusCards } from "@/components/ui/focus-cards";

const services = [
    {
        title: "ERP Completo",
        description: "Sistemas inteligentes para ventas, inventario, compras y reportes detallados",
        hoverDetail: "Administra toda tu empresa desde un solo lugar: ventas, compras, inventario, cuentas por pagar y por cobrar, reportes avanzados y facturación electrónica integrada con el SRI. Diseñado para negocios que quieren crecer con orden y control total.",
        icon: <FileText className="h-10 w-10"/>,
        link: "/services/erp",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", // Business Dashboard
    },
    {
        title: "POS Moderno",
        description: "Puntos de venta para tiendas, ferreterías, farmacias y más sectores",
        hoverDetail: "Sistema de punto de venta rápido, intuitivo y adaptado a cada tipo de negocio. Soporta múltiples cajas, impresión de tickets, descuentos, métodos de pago mixtos y sincronización en tiempo real con tu inventario.",
        icon: <CreditCard className="h-10 w-10"/>,
        link: "/services/pos",
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2550&auto=format&fit=crop", // Retail POS
    },
    {
        title: "Apps Móviles",
        description: "Aplicaciones nativas para Android e iOS con diseño intuitivo",
        hoverDetail: "Desarrollamos aplicaciones móviles a medida para Android e iOS con interfaces modernas y fluidas. Desde apps de gestión interna hasta plataformas de e-commerce o delivery, adaptamos cada funcionalidad a tu modelo de negocio.",
        icon: <Smartphone className="h-10 w-10"/>,
        link: "/services/apps",
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2340&auto=format&fit=crop", // Mobile App
    },
    {
        title: "Sitios Web",
        description: "Landing pages y sitios web responsivos y optimizados",
        hoverDetail: "Creamos sitios web modernos, veloces y optimizados para SEO. Desde landing pages de alto impacto hasta portales corporativos, cada proyecto está diseñado para convertir visitantes en clientes desde el primer clic.",
        icon: <Globe className="h-10 w-10"/>,
        link: "/services/websites",
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2344&auto=format&fit=crop", // Web Design/Laptop
    },
    {
        title: "Soluciones Personalizadas",
        description: "Sistemas a medida para necesidades específicas de tu negocio",
        hoverDetail: "Cuando los sistemas estándar no son suficientes, creamos soluciones a la medida de tu empresa. Analizamos tus procesos, diseñamos la arquitectura ideal y desarrollamos software escalable que se adapta exactamente a como trabajas.",
        icon: <Store className="h-10 w-10"/>,
        link: "/services/custom",
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2340&auto=format&fit=crop", // Architecture/Code workspace
    },
    {
        title: "E-commerce",
        description: "Tiendas online con pasarela de pago e integración con redes sociales",
        hoverDetail: "Lanza tu tienda online con todo lo que necesitas: catálogo de productos, carrito de compras, pasarela de pago segura, gestión de pedidos e integración con redes sociales para vender más y en más canales.",
        icon: <ShoppingCart className="h-10 w-10"/>,
        link: "/services/ecommerce",
        src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2340&auto=format&fit=crop", // Online Payment/Card
    },
]

export function Services() {
    const sectionRef = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            {threshold: 0.1}
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [mounted]);

    return (
        <section id="services" ref={sectionRef} className="py-20 px-4">
            <div className="container mx-auto max-w-7xl">
                <div
                    className={`transition-all duration-1000 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Nuestros servicios más solicitados
                        </h2>
                        <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-900"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            💡 Sistemas más eficientes dentro de tu negocio y sitio personal
                        </p>
                    </div>

                    <FocusCards cards={services} />
                </div>
            </div>
        </section>
    )
}
