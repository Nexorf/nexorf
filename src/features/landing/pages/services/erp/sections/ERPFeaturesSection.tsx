"use client";

import React, { useEffect, useRef } from "react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import createGlobe from "cobe";
import {cn} from "@/shared/utils/utils";
import Image from "next/image";

export function ERPFeaturesSection() {
    const features = [
        {
            title: "Gestión de Inventario Inteligente",
            description: "Controla el stock de tu empresa en tiempo real, con alertas predictivas y análisis automático de demanda.",
            skeleton: <SkeletonInventory />,
            className: "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-neutral-800",
        },
        {
            title: "Facturación Electrónica Automática",
            description: "Genera, envía y valida facturas electrónicas con un solo clic, 100% compatible con SRI.",
            skeleton: <SkeletonBilling />,
            className: "border-b col-span-1 lg:col-span-3 dark:border-neutral-800",
        },
        {
            title: "Reportes con IA",
            description: "Obtén reportes dinámicos impulsados por inteligencia artificial para tomar mejores decisiones.",
            skeleton: <SkeletonReports />,
            className: "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
        },
        {
            title: "Implantación Rápida y Segura",
            description: "Implementa el sistema ERP en minutos con nuestras soluciones cloud y soporte personalizado.",
            skeleton: <SkeletonDeploy />,
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
    return <p className="mt-2 text-justifytext-neutral-600 dark:text-neutral-300 text-sm md:text-base">{children}</p>;
};

const SkeletonInventory = () => {
    return (
        <div className="mt-6 w-full h-[260px] relative">
            <Image
                src="https://images.unsplash.com/photo-1553413077-190dd305871c"
                alt="Gestión de Inventario"
                fill
                className="rounded-lg shadow-md object-cover"
            />
        </div>
    );
};

const SkeletonBilling = () => {
    return (
        <div className="mt-6 w-full h-[260px] relative">
            <Image
                src="https://images.unsplash.com/photo-1701836924569-a0b887ed1322?q=80&w=1093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Facturación Electrónica"
                fill
                className="rounded-lg shadow-md object-cover"
            />
        </div>
    );
};

const SkeletonReports = () => {
    return (
        <a
            href="https://www.youtube.com/watch?v=GX79smagB2Y"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-6 w-full h-[260px] flex items-center justify-center group"
        >
            <IconBrandYoutubeFilled className="w-14 h-14 text-red-600 absolute z-10" />

            <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Reportes con IA"
                fill
                className="rounded-lg object-cover group-hover:blur-sm transition-all duration-200"
            />
        </a>
    );
};

const SkeletonDeploy = () => {
    return (
        <div className="relative mt-6 h-[260px] flex items-center justify-center">
            <Globe className="w-[320px] h-[320px] -ml-15" />
        </div>
    );
};

const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;
        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                { location: [0, 0], size: 0.05 },
                { location: [37.7595, -122.4367], size: 0.03 },
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () => globe.destroy();
    }, []);

    return (
    <canvas
        ref={canvasRef}
        className={className}
        style={{
            width: "100%",
            height: "100%",
            maxWidth: "320px",
            aspectRatio: "1"
        }}
    />
);
};
