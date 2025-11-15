"use client";

import {useEffect, useRef, useState} from "react";
import {Palette, Shield, Users, User, Cloud, RefreshCw} from "lucide-react";
import {cn} from "@/shared/utils/utils";
import {GlowingEffect} from "@/shared/ui/organisms/glowing/GlowingEffect";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";

const differentials = [
    {
        icon: Shield,
        title: "Facturación Electrónica",
        description: "Cumplimos al 100% con el SRI.",
        className: "md:col-span-1",
    },
    {
        icon: Palette,
        title: "Diseño UX Moderno",
        description: "Interfaces atractivas centradas en el usuario.",
        className: "md:row-span-2",
    },
    {
        icon: Users,
        title: "Soporte Personalizado",
        description: "Técnicos reales que responden por WhatsApp.",
        className: "md:col-span-1",
    },
    {
        icon: User,
        title: "Panel Multiusuario",
        description: "Control por roles, accesos y usuarios.",
        className: "md:row-span-2",
    },
    {
        icon: Cloud,
        title: "Hosting Flexible",
        description: "Nube o local, tú eliges.",
        className: "md:col-span-1",
    },
    {
        icon: RefreshCw,
        title: "Actualizaciones Continuas",
        description: "Siempre al día, sin costo adicional.",
        className: "md:col-span-2",
    },
];

export function Differentials() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            {threshold: 0.2}
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="differentials"
            className="py-20 px-4"
        >
            <div className="container mx-auto max-w-7xl">
                <div
                    className={cn(
                        "transition-all duration-1000",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
                            Nuestros Diferenciales
                        </h2>
                        <div
                            className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-900"></div>
                        <div className="w-20 h-1 mx-auto mt-4"/>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
                            Lo que realmente nos hace distintos en el mercado ecuatoriano.
                        </p>
                    </div>

                    {/* Cards */}
                    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {differentials.map((item, index) => (
                            <DifferentialCard
                                key={index}
                                className={item.className}
                                icon={<item.icon className="w-16 h-16 text-black dark:text-white"/>}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
    style?: React.CSSProperties;
}

const DifferentialCard = ({icon, title, description, className}: CardProps) => {
    return (
        <HoverCard>
            <li className={cn("min-h-[14rem] list-none", className)}>
                <div
                    className="relative h-full p-4 rounded-b md:rounded-3xl border border-neutral-200 bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black hover:bg-neutral-100 dark:hover:bg-neutral-900">
                    <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                        borderWidth={3}
                    />
                    <div
                        className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 z-10">
                        <HoverCardTrigger asChild>
                            <div className="group flex flex-1 flex-col justify-between gap-3">
                                {/* Icon */}
                                <div
                                    className="w-fit rounded-lg p-2 group-hover:scale-125 transition-transform duration-300">
                                    {icon}
                                </div>

                                {/* Text */}
                                <div className="space-y-2 group-hover:scale-105 transition-transform duration-300">
                                    <h3 className="text-xl font-semibold">
                                        {title}
                                    </h3>
                                    <p className="text-sm text-gray-700 dark:text-gray-400">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                            <div className="flex justify-between gap-4">
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">@nextjs</h4>
                                    <p className="text-sm">
                                        The React Framework – created and maintained by @vercel.
                                    </p>
                                    <div className="text-muted-foreground text-xs">
                                        Joined December 2021
                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                    </div>
                </div>
            </li>
        </HoverCard>
    )
        ;
};
