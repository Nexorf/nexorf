"use client";

import {useCallback, useState} from "react";
import {MegaMenuItemProps} from "@/shared/ui/atoms/header/menu/MegaMenuItem";
import {FileText, Users, ShieldCheck, ChevronDown, Briefcase, History, HandPlatter} from "lucide-react";
import MegaMenuColumn from "@/shared/ui/molecules/header/menu/MegaMenuColumn";

interface CompanyMegaMenuProps {
    isMobile?: boolean;
}

const CompanyMegaMenu = ({isMobile = false}: CompanyMegaMenuProps) => {
    const [open, setOpen] = useState(false);

    const handleMouseEnter = useCallback(() => {
        if (!isMobile) setOpen(true);
    }, [isMobile]);

    const handleMouseLeave = useCallback(() => {
        if (!isMobile) setOpen(false);
    }, [isMobile]);

    const toggleMobileMenu = () => {
        if (isMobile) setOpen((prev) => !prev);
    };

    const column1Items: MegaMenuItemProps[] = [
        {
            href: "/pricing",
            icon: <Users className="w-8 h-8 text-indigo-500" />,      // índigo
            title: "Sobre Nosotros",
            description:
                "Conoce nuestra historia, misión y valores que nos guían en cada proyecto y servicio.",
        },
        {
            href: "#",
            icon: <History className="w-8 h-8 -mt-1 text-pink-500" />, // rosa
            title: "Historia y misión",
            description:
                "Trayectoria que nos define y el propósito que impulsa nuestra labor diaria.",
        },
        {
            href: "#",
            icon: <HandPlatter className="w-8 h-8 text-yellow-500" />, // amarillo medio
            title: "Equipo",
            description:
                "Conoce al equipo multidisciplinario detrás de cada solución innovadora.",
        },
    ];

    const column2Items: MegaMenuItemProps[] = [
        {
            href: "/pricing",
            icon: <ShieldCheck className="w-8 h-8 text-teal-500" />,   // verde azulado
            title: "Términos y condiciones",
            description:
                "Consulta las políticas y condiciones que rigen el uso de nuestros servicios.",
        },
        {
            href: "#",
            icon: <FileText className="w-8 h-8 -mt-1 text-rose-400" />, // rojo suave
            title: "Políticas de privacidad",
            description:
                "Comprometidos con la protección y confidencialidad de tus datos personales.",
        },
        {
            href: "#",
            icon: <Briefcase className="w-8 h-8 text-amber-600" />,    // naranja intenso
            title: "Trabaja con nosotros",
            description:
                "Únete a nuestro equipo y sé parte de una empresa innovadora y en crecimiento.",
        },
    ];


    if (isMobile) {
        return (
            <div className="w-full flex flex-col items-center">
                <button
                    onClick={toggleMobileMenu}
                    className="flex justify-between items-center w-full max-w-sm py-2 px-4 font-medium"
                >
                    Empresa
                    <ChevronDown
                        className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                    />
                </button>

                {open && (
                    <div className="mt-2 w-full max-w-sm flex flex-col gap-4">
                        {[column1Items].flat().map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                            >
                                {item.icon}
                                <div className="flex flex-col">
                                    <span className="font-medium">{item.title}</span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.description}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    // Vista en ESCRITORIO: hover
    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className="text-sm font-medium hover:text-gray-200 transition"
                aria-controls="company-menu"
                aria-expanded={open}
            >
                Empresa
            </button>

            <div
                id="company-menu"
                role="menu"
                className={`absolute left-0 top-full mt-4 z-50 w-[800px] bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-800 p-6 grid grid-cols-2 gap-6 text-sm transition-all duration-200 ${
                    open ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
                <MegaMenuColumn items={column1Items}/>
                <MegaMenuColumn items={column2Items}/>
            </div>
        </div>
    );
};

export default CompanyMegaMenu;
