"use client";

import React, { useEffect, useRef } from "react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import createGlobe from "cobe";
import {cn} from "@/shared/utils/utils";
import Image from "next/image";

export function POSFeaturesSection() {
    const features = [
        {
            title: "¿Qué es un POS y por qué puede transformar tu negocio?",
            description:
                "POS viene de las siglas Point of Sale (Punto de Venta). Es el sistema que utilizan los negocios para registrar ventas, cobrar a los clientes y administrar productos. Un POS moderno no solo funciona como una caja registradora, sino como una herramienta completa de gestión: permite controlar inventario, registrar cada transacción, generar reportes y analizar el rendimiento del negocio.",
            skeleton: <SkeletonMeaning />,
        },
        {
            title: "Ventas rápidas y eficientes desde cualquier dispositivo",
            description:
                "Nuestro sistema POS permite registrar ventas en segundos desde computadora, tablet o celular. Su interfaz intuitiva facilita el trabajo de cualquier empleado sin necesidad de capacitación técnica. Además, cada venta actualiza automáticamente el inventario y registra la información para reportes futuros.",
            skeleton: <SkeletonQuick />,
        },
    ];

    return (
        <section className="relative z-20 py-20 max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                    Moderniza tu negocio con un Punto de Venta Inteligente
                </h2>

                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                    Vende más rápido, controla tu inventario y entiende el rendimiento de tu negocio
                    con un sistema POS diseñado para comercios modernos.
                </p>
            </div>

            <div className="grid grid-cols-1 mt-16 border rounded-xl dark:border-neutral-800 overflow-hidden">
                {features.map((feature) => (
                    <FeatureCard key={feature.title} className="border-b last:border-b-0 dark:border-neutral-800">
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

const SkeletonMeaning = () => {
    return (
        <a
            href="https://www.youtube.com/watch?v=2puPhXfqqqk&t=4s"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-6 w-full h-[520px] flex items-center justify-center group"
        >
            <IconBrandYoutubeFilled className="w-14 h-14 text-red-600 absolute z-10" />

            <Image
                src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Reportes con IA"
                fill
                className="rounded-lg object-cover group-hover:blur-sm transition-all duration-200"
            />
        </a>
    );
};

const SkeletonQuick = () => {
    return (
        <a
            href="https://www.youtube.com/watch?v=GX79smagB2Y"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-6 w-full h-[520px] flex items-center justify-center group"
        >
            <IconBrandYoutubeFilled className="w-14 h-14 text-red-600 absolute z-10" />

            <Image
                src="https://images.unsplash.com/photo-1647427017067-8f33ccbae493?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Reportes con IA"
                fill
                className="rounded-lg object-cover group-hover:blur-sm transition-all duration-200"
            />
        </a>
    );
};
