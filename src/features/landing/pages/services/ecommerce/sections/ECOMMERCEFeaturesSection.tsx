"use client";

import React, { useEffect, useRef } from "react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import createGlobe from "cobe";
import {cn} from "@/shared/utils/utils";
import Image from "next/image";

export function ECOMMERCEFeaturesSection() {
    const features = [
        {
            title: "Tu tienda online disponible 24/7",
            description: "Desarrollamos tiendas en línea modernas que permiten a tus clientes explorar productos, realizar compras y pagar de forma segura en cualquier momento. Esto amplía el alcance de tu negocio y te permite vender sin límites de horario.",
            skeleton: <SkeletonOnline />,
            className: "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
        },
        {
            title: "Administra tus productos fácilmente",
            description: "Gestiona tu catálogo de productos, precios, inventario e imágenes desde un panel intuitivo. Mantén tu tienda siempre actualizada y organiza tus productos de forma clara para mejorar la experiencia de compra.",
            skeleton: <SkeletonAdministration />,
            className: "border-b col-span-1 lg:col-span-3 dark:border-neutral-800",
        },
        {
            title: "Pagos en línea rápidos y seguros",
            description: "Integramos métodos de pago confiables que permiten a tus clientes comprar con facilidad y seguridad. Esto simplifica el proceso de compra y aumenta la confianza en tu tienda online.",
            skeleton: <SkeletonPayment />,
            className: "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
        },
        {
            title: "Gestión eficiente de pedidos",
            description: "Administra pedidos, clientes y estados de compra desde un panel centralizado. Esto te permite mantener un control claro de tus ventas y ofrecer un mejor seguimiento a cada pedido realizado en tu tienda.",
            skeleton: <SkeletonImplant />,
            className: "col-span-1 lg:col-span-3 border-b lg:border-none",
        },
    ];

    return (
        <section className="relative z-20 py-20 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Potencia tu empresa con nuestro ERP</h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                    Optimiza operaciones, mejora tu toma de decisiones y transforma tu negocio con Nexorf ERP.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-6 mt-16 xl:border rounded-xl dark:border-neutral-800 overflow-hidden">
                {features.map((feature) => (
                    <FeatureCard key={feature.title} className={feature.className}>
                        <FeatureTitle>{feature.title}</FeatureTitle>
                        <FeatureDescription>{feature.description}</FeatureDescription>
                        <div className="h-full w-full">{feature.skeleton}</div>
                    </FeatureCard>
                ))}
            </div>
        </section>
    );
}

const FeatureCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
    return <div className={cn("p-6 sm:p-10 relative", className)}>{children}</div>;
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return <h3 className="text-xl md:text-2xl font-semibold text-left text-black dark:text-white">{children}</h3>;
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return <p className="mt-2 text-justify text-neutral-600 dark:text-neutral-300 text-sm md:text-base">{children}</p>;
};

const SkeletonOnline = () => {
    return (
        <div className="mt-6 w-full h-[260px] relative">
            <Image
                src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tienda online"
                fill
                className="rounded-lg shadow-md object-cover"
            />
        </div>
    );
};

const SkeletonAdministration = () => {
    return (
        <div className="mt-6 w-full h-[260px] relative">
            <Image
                src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Administración de Pedidos"
                fill
                className="rounded-lg shadow-md object-cover"
            />
        </div>
    );
};

const SkeletonPayment = () => {
    return (
        <div className="mt-6 w-full h-[260px] relative">
            <Image
                src="https://images.unsplash.com/photo-1758519292252-03dfd0cb8658?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Pagos en línea rápidos y seguros"
                fill
                className="rounded-lg shadow-md object-cover"
            />
        </div>
    );
};

const SkeletonImplant = () => {
    return (
        <div className="mt-6 w-full h-[260px] relative">
            <Image
                src="https://images.unsplash.com/photo-1638202947561-e372255007b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Gestión eficiente de pedidos"
                fill
                className="rounded-lg shadow-md object-cover"
            />
        </div>
    );
};