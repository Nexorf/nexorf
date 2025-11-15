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
import {BentoGrid, BentoGridItem} from "@/shared/ui/organisms/bento-grid/bento-grid";
import {CardSkeletonContainer, Skeleton} from "@/shared/ui/organisms/card/cards-demo-3";


const services = [
    {
        title: "ERP Completo",
        description: "Sistemas inteligentes para ventas, inventario, compras y reportes detallados",
        icon: <FileText className="h-10 w-10 text-neutral-500"/>,
        href: "/services/erp",
        className: "lg:col-span-2",
    },
    {
        title: "POS Moderno",
        description: "Puntos de venta para tiendas, ferreterías, farmacias y más sectores",
        icon: <CreditCard className="h-10 w-10 text-neutral-500"/>,
        href: "/services/pos",
        className: "lg:col-span-1",
    },
    {
        title: "Apps Móviles",
        description: "Aplicaciones nativas para Android e iOS con diseño intuitivo",
        icon: <Smartphone className="h-10 w-10 text-neutral-500"/>,
        href: "/services/apps",
        className: "lg:col-span-1",
    },
    {
        title: "Sitios Web",
        description: "Landing pages y sitios web responsivos y optimizados",
        icon: <Globe className="h-10 w-10  text-neutral-500"/>,
        href: "/services/websites",
        className: "lg:col-span-1",
    },
    {
        title: "Soluciones Personalizadas",
        description: "Sistemas a medida para necesidades específicas de tu negocio",
        icon: <Store className="h-10 w-10  text-neutral-500"/>,
        href: "/services/custom",
        className: "lg:row-span-2",
    },
    {
        title: "E-commerce",
        description: "Tiendas online con pasarela de pago e integración con redes sociales",
        icon: <ShoppingCart className="h-10 w-10 text-neutral-500"/>,
        href: "/services/ecommerce",
        className: "lg:col-span-2",
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
            { threshold: 0.2 }
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
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">¿Qué ofrecemos?</h2>
                        <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-900"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            💡 Sistemas inteligentes, visuales y eficientes para distintos sectores
                        </p>
                    </div>

                    <BentoGrid className="max-w-7xl mx-auto">
                        {services.map((service, index) => (
                            <BentoGridItem
                                key={index}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                href={service.href}
                                className={service.className}
                                header={
                                    <CardSkeletonContainer>
                                        <Skeleton/>
                                    </CardSkeletonContainer>
                                }
                            />
                        ))}
                    </BentoGrid>
                </div>
            </div>
        </section>
    )
}
