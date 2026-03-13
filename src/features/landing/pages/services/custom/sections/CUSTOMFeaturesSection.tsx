"use client";

import React, { useEffect, useRef } from "react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import createGlobe from "cobe";
import {cn} from "@/shared/utils/utils";
import Image from "next/image";

export function CUSTOMFeaturesSection() {
    const features = [
        {
            title: "Software personalizado a tu medida",
            description: "Desarrollamos soluciones de software a medida para satisfacer las necesidades específicas de tu negocio.",
            skeleton: <SkeletonCustom />,
            className: "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
        },
        {
            title: "Empresarial o de consumo, lo que necesites",
            description: "Ofrecemos soluciones de software tanto para empresas como para consumidores, adaptadas a tus necesidades específicas.",
            skeleton: <SkeletonEnterprise />,
            className: "border-b col-span-1 lg:col-span-3 dark:border-neutral-800",
        },
        {
            title: "Automatización de procesos",
            description: "Automatiza tareas repetitivas y optimiza tus procesos con nuestras soluciones de software personalizadas.",
            skeleton: <SkeletonAutomation />,
            className: "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
        },
        {
            title: "Escalabilidad y soporte continuo",
            description: "Nuestras soluciones de software están diseñadas para crecer junto con tu negocio, con soporte continuo para garantizar su éxito a largo plazo.",
            skeleton: <SkeletonScalability />,
            className: "col-span-1 lg:col-span-3 border-b lg:border-none",
        },
    ];

    return (
        <section className="relative z-20 py-20 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Software Empresarial Personalizado</h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
                    Creamos software a medida que se adapta completamente a los procesos de tu negocio.
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
    return <p className="mt-2 text-left text-neutral-600 dark:text-neutral-300 text-sm md:text-base">{children}</p>;
};

const SkeletonCustom = () => {
    return (
        <div className="mt-6 w-full h-[260px] relative">
            <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                alt="Software Personalizado"
                fill
                className="rounded-lg shadow-md object-cover"
            />
        </div>
    );
};

const SkeletonEnterprise = () => {
    return (
        <div className="mt-6 w-full h-[260px] relative">
            <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
                alt="Facturación Electrónica"
                fill
                className="rounded-lg shadow-md object-cover"
            />
        </div>
    );
};

const SkeletonAutomation = () => {
    return (
        <a
            href="https://www.youtube.com/watch?v=7upsfu4Ur00"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-6 w-full h-[260px] flex items-center justify-center group"
        >
            <IconBrandYoutubeFilled className="w-14 h-14 text-red-600 absolute z-10" />

            <Image
                src="https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Automatización de procesos"
                fill
                className="rounded-lg object-cover group-hover:blur-sm transition-all duration-200"
            />
        </a>
    );
};

const SkeletonScalability = () => {
    return (
        <a
            href="https://www.youtube.com/watch?v=tQknZn9HSXo"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-6 w-full h-[260px] flex items-center justify-center group"
        >
            <IconBrandYoutubeFilled className="w-14 h-14 text-red-600 absolute z-10" />

            <Image
                src="https://images.unsplash.com/photo-1730382624709-81e52dd294d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Automatización de procesos"
                fill
                className="rounded-lg object-cover group-hover:blur-sm transition-all duration-200"
            />
        </a>
    );
};
