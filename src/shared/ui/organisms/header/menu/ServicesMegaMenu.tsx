"use client";

import {useCallback, useState} from "react";
import {MegaMenuItemProps} from "@/shared/ui/atoms/header/menu/MegaMenuItem";
import {FileText, Globe, Layers, Palette, ShoppingCart, TabletSmartphone, ChevronDown} from "lucide-react";
import MegaMenuColumn from "@/shared/ui/molecules/header/menu/MegaMenuColumn";

interface ServicesMegaMenuProps {
    isMobile?: boolean;
}

const ServicesMegaMenu = ({isMobile = false}: ServicesMegaMenuProps) => {
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
            icon: <Layers className="w-8 h-8 text-cyan-500"/>,
            title: "ERP",
            description:
                "Sistema integral para la gestión de inventario, ventas, compras, finanzas y más. Ideal para empresas que buscan automatización total.",
        },
        {
            href: "/coming-soon",
            icon: <FileText className="w-8 h-8 -mt-1 text-red-500"/>,
            title: "POS",
            description:
                "Punto de venta moderno para tiendas físicas con control de caja, inventario y ventas rápidas.",
        },
        {
            href: "/coming-soon",
            icon: <ShoppingCart className="w-8 h-8 text-amber-500"/>,
            title: "E-commerce",
            description:
                "Plataforma para vender productos o servicios online con pasarelas de pago y panel de administración.",
        },
    ];

    const column2Items: MegaMenuItemProps[] = [
        {
            href: "/coming-soon",
            icon: <Globe className="w-8 h-8 -mt-1 text-lime-500"/>,
            title: "Web",
            description:
                "Desarrollo de sitios web profesionales, institucionales o corporativos optimizados para SEO.",
        },
        {
            href: "/coming-soon",
            icon: <TabletSmartphone className="w-8 h-8 text-blue-500 mt-0"/>,
            title: "Móvil",
            description:
                "Aplicaciones móviles para Android y iOS con funcionalidades a medida como notificaciones, GPS y login.",
        },
        {
            href: "/coming-soon",
            icon: <Palette className="w-8 h-8 text-purple-500"/>,
            title: "Personalizado",
            description:
                "Soluciones a medida para necesidades específicas: automatización, dashboards, integraciones y más.",
        },
    ];

    if (isMobile) {
        return (
            <div className="w-full flex flex-col items-center">
                <button
                    onClick={toggleMobileMenu}
                    className="flex justify-between items-center w-full py-2 px-4 font-medium"
                >
                    Servicios
                    <ChevronDown
                        className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                    />
                </button>

                {open && (
                    <div className="mt-2 w-full flex flex-col gap-4">
                        {[column1Items, column2Items].flat().map((item) => (
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
                aria-controls="services-menu"
                aria-expanded={open}
            >
                Servicios
            </button>

            <div
                id="services-menu"
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

export default ServicesMegaMenu;
