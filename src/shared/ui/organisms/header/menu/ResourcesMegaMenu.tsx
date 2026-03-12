"use client";

import {useCallback, useState} from "react";
import {MegaMenuItemProps} from "@/shared/ui/atoms/header/menu/MegaMenuItem";
import {
    FileText,
    Globe,
    Layers,
    Palette,
    ShoppingCart,
    TabletSmartphone,
    ChevronDown,
    BookOpen,
    FileCode2, TableOfContents
} from "lucide-react";
import MegaMenuColumn from "@/shared/ui/molecules/header/menu/MegaMenuColumn";

interface ResourcesMegaMenuProps {
    isMobile?: boolean;
}

const ResourcesMegaMenu = ({isMobile = false}: ResourcesMegaMenuProps) => {
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
            icon: <BookOpen className="w-8 h-8 text-sky-600" />,        // azul cielo oscuro
            title: "Blog",
            description:
                "Artículos, noticias y novedades para estar siempre actualizado en tecnología y negocios.",
        },
        {
            href: "/coming-soon",
            icon: <FileCode2 className="w-8 h-8 -mt-1 text-fuchsia-600" />, // fucsia
            title: "Documentación Técnica",
            description:
                "Manuales y guías detalladas para usuarios y desarrolladores de nuestros productos.",
        },
        {
            href: "/coming-soon",
            icon: <TableOfContents className="w-8 h-8 text-yellow-500" />,  // amarillo medio
            title: "FAQs",
            description:
                "Preguntas frecuentes para resolver tus dudas rápidamente y con eficacia.",
        },
    ];

    if (isMobile) {
        return (
            <div className="w-full flex flex-col items-center">
                <button
                    onClick={toggleMobileMenu}
                    className="flex justify-between items-center w-full max-w-sm py-2 px-4 font-medium"
                >
                    Recursos
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
                aria-controls="resources-menu"
                aria-expanded={open}
            >
                Recursos
            </button>

            <div
                id="resources-menu"
                role="menu"
                className={`absolute left-0 top-full mt-4 z-50 w-[550px] bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-800 p-6 gap-6 text-sm transition-all duration-200 ${
                    open ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
                <MegaMenuColumn items={column1Items}/>
            </div>
        </div>
    );
};

export default ResourcesMegaMenu;
