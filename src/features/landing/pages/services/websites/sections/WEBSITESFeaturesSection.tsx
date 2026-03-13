"use client";

import React, { useEffect, useRef } from "react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import createGlobe from "cobe";
import {cn} from "@/shared/utils/utils";
import Image from "next/image";

export function WEBSITESFeaturesSection() {
    const features = [
        {
            title: "Una presencia digital profesional para tu negocio",
            description: "Desarrollamos sitios web modernos que reflejan la identidad de tu negocio, pues una página profesional transmite confianza.",
            skeleton: <SkeletonPresence />,
            className: "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
        },
        {
            title: "Experiencia perfecta en todos los dispositivos",
            description: "Tu sitio web estará optimizado para funcionar correctamente en computadoras, tablets y celulares, garantizando una navegación fluida.",
            skeleton: <SkeletonExperience />,
            className: "border-b col-span-1 lg:col-span-3 dark:border-neutral-800",
        },
        {
            title: "Posicionamiento web para atraer nuevos clientes",
            description: "Aplicamos buenas prácticas de SEO para mejorar la visibilidad de tu sitio en navegadores, como Google, lo que te ayudará a atraer más visitantes.",

            skeleton: <SkeletonPositioning />,
            className: "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
        },
        {
            title: "Convierte visitantes en clientes",
            description: "Diseñamos páginas web con una estructura clara y llamados a la acción estratégicos para transformar las visitas a tu sitio en consultas o ventas.",
            skeleton: <SkeletonClients />,
            className: "col-span-1 lg:col-span-3 border-b lg:border-none",
        },
    ];

    return (
        <section className="relative z-20 py-20 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Construye una presencia digital sólida para tu negocio</h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                    Creamos sitios web modernos, rápidos y adaptados a cualquier dispositivo. Una página profesional te permite mostrar tus productos o servicios, fortalecer tu marca y llegar a nuevos clientes en internet.
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

const SkeletonPresence = () => {
    return (
        <div className="mt-6 w-full h-[260px] relative">
            <Image
                src="https://images.unsplash.com/photo-1648134859177-66e35b61e106?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Presencia Digital"
                fill
                className="rounded-lg shadow-md object-cover"
            />
        </div>
    );
};

const SkeletonExperience = () => {
    return (
        <div className="mt-6 w-full h-[260px] relative">
            <Image
                src="https://images.unsplash.com/photo-1758691030790-efe4c90a1ca6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Experiencia en todos los dispositivos"
                fill
                className="rounded-lg shadow-md object-cover"
            />
        </div>
    );
};

const SkeletonPositioning= () => {
    return (
        <div className="mt-6 w-full h-[260px] relative">
            <Image
                src="https://images.unsplash.com/photo-1762330917439-78d1a00e3fe5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt= "Posicionamiento web"
                fill
                className="rounded-lg shadow-md object-cover"
            />
        </div>
    );
};

const SkeletonClients = () => {
    return (
        <div className="mt-6 w-full h-[260px] relative">
            <Image
                src="https://images.unsplash.com/photo-1556740720-776b84291f8e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt= "Convierte visitantes en clientes"
                fill
                className="rounded-lg shadow-md object-cover"
            />
        </div>
    );
};
