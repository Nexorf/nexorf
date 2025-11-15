"use client";

import { Play, ImageIcon, Video, MessageCircle, Settings, Zap, Database, Server, Users } from "lucide-react";
import { cn } from "@/shared/utils/utils";
import {AnimatedList, AnimatedListDemo} from "@/shared/ui/organisms/magicui/animated-list";
import {Marquee} from "@/shared/ui/organisms/magicui/marquee";
import {BentoCard, BentoGrid} from "@/shared/ui/organisms/magicui/bento-grid";

const resources = [
    {
        Icon: Play,
        name: "Demos Interactivas",
        description: "Prueba nuestros sistemas en tiempo real.",
        action: "Ver Demo",
        className: "col-span-3 lg:col-span-1",
        background: (
            <AnimatedListDemo className="absolute right-0 top-2 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
        ),
    },
    {
        Icon: Video,
        name: "Videos Explicativos",
        description: "Tutoriales y presentaciones de nuestras soluciones.",
        action: "Ver Videos",
        className: "col-span-3 lg:col-span-1",
        background: (
            <AnimatedList className="absolute inset-0 p-4 scale-75 opacity-30 dark:opacity-20">
                {[...Array(5)].map((_, i) => (
                    <figure
                        key={i}
                        className={cn(
                            "mb-3 rounded-xl bg-white bg-opacity-40 p-2 shadow-sm dark:bg-gray-800 dark:bg-opacity-30",
                            "text-center text-sm font-semibold text-gray-800 dark:text-gray-200"
                        )}
                    >
                        Video Tutorial #{i + 1}
                    </figure>
                ))}
            </AnimatedList>
        ),
    },
    {
        Icon: Settings,
        name: "Configuración Avanzada",
        description: "Personaliza tu experiencia con opciones detalladas.",
        action: "Configurar",
        className: "col-span-3 lg:col-span-1 row-span-2",
        background: (
            <AnimatedListDemo className="absolute right-0 top-2 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
        ),
    },
    {
        Icon: Zap,
        name: "Automatizaciones",
        description: "Optimiza procesos con flujos automáticos inteligentes.",
        action: "Ver Automatizaciones",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Marquee reverse pauseOnHover className="absolute inset-0 opacity-10 dark:opacity-5 [--duration:28s]">
                {[...Array(15)].map((_, i) => (
                    <Zap key={i} className="mx-6 text-yellow-400 dark:text-yellow-300" size={40} />
                ))}
            </Marquee>
        ),
    },
    {
        Icon: Database,
        name: "Gestión de Datos",
        description: "Centraliza y administra toda tu información eficazmente.",
        action: "Gestionar Datos",
        className: "col-span-3 lg:col-span-1",
        background: (
            <AnimatedList className="absolute inset-0 p-4 opacity-25 dark:opacity-15">
                {["Bases de datos", "Consultas", "Reportes", "Backup"].map((item, i) => (
                    <figure
                        key={i}
                        className="mb-2 rounded-md bg-blue-200 bg-opacity-30 p-2 text-center font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                    >
                        {item}
                    </figure>
                ))}
            </AnimatedList>
        ),
    },

];

export function Resources() {
    return (
        <section className="py-20 px-4 transition-colors duration-500 relative">
            <div className="container mx-auto max-w-screen-xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Recursos Disponibles
                    </h2>
                    <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-900"></div>
                    <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                        Todo lo que necesitas para conocer nuestras soluciones
                    </p>
                </div>

                <BentoGrid>
                    {resources.map((item, idx) => (
                        <BentoCard
                            key={idx}
                            Icon={item.Icon}
                            href="#"
                            cta={item.action}
                            name={item.name}
                            description={item.description}
                            className={item.className}
                            background={item.background}
                            style={{ position: "relative", overflow: "hidden" }}
                        >
                            <div className="flex justify-center items-center h-full pointer-events-none" />
                        </BentoCard>
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
