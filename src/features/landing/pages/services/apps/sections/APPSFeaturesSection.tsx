"use client";

import React, { useEffect, useRef } from "react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import createGlobe from "cobe";
import {cn} from "@/shared/utils/utils";
import Image from "next/image";

export function APPSFeaturesSection() {
    const features = [
        {
            title: "Aplicaciones móviles a medida",
            description: "Desarrollamos aplicaciones móviles nativas y multiplataforma adaptadas a las necesidades de tu negocio.",
            skeleton: <SkeletonApps />,
            className: "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
        },
        {
            title: "Integración con tus sistemas",
            description: "Conectamos tu app con ERP, CRM, APIs y plataformas existentes para centralizar la información.",
            skeleton: <SkeletonIntegration />,
            className: "border-b col-span-1 lg:col-span-3 dark:border-neutral-800",
        },
        {
            title: "Analítica y reportes inteligentes",
            description: "Obtén estadísticas de uso, comportamiento de usuarios y reportes inteligentes para mejorar tu producto.",
            skeleton: <SkeletonAnalytics />,
            className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
        },
        {
        title: "Escalabilidad y seguridad",
            description: "Aplicaciones seguras, rápidas y listas para crecer junto con tu negocio. Cumplimos con los más altos estándares de seguridad.",
            skeleton: <SkeletonSecurity />,
            className: "col-span-1 lg:col-span-3 border-b lg:border-none",
        },
    ];
    return (
        <section className="relative z-20 py-20 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                    Desarrollo de Aplicaciones Móviles
                </h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                    Creamos apps móviles modernas, seguras y escalables para impulsar tu negocio en iOS y Android.
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

const SkeletonApps = () => {
    return (
        <div className="mt-6 w-full h-[260px] relative">
            <Image
                src="https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Aplicaciones móviles a medida"
                fill
                className="rounded-lg shadow-md object-cover"
            />
        </div>
    );
};

const SkeletonIntegration = () => {
    return (
        <div className="mt-6 w-full h-[260px] relative">
            <Image
                src="https://images.unsplash.com/photo-1650978810641-6610f4b6d15a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Integración con tus sistemas"
                fill
                className="rounded-lg shadow-md object-cover"
            />
        </div>
    );
};

const SkeletonAnalytics = () => {
    return (
        <div className="mt-6 w-full h-[260px] relative">
            <Image
                src="https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Analitica y reportes inteligentes"
                fill
                className="rounded-lg shadow-md object-cover"
            />
        </div>
    );
};

const SkeletonSecurity = () => {
    return (
        <div className="mt-6 w-full h-[260px] relative">
            <Image
                src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Seguridad de aplicaciones"
                fill
                className="rounded-lg shadow-md object-cover"
            />
        </div>
    );
};

