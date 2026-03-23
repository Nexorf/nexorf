import FooterLinkList from "../../molecules/footer/FooterLinkList";
import FooterContact from "@/shared/ui/molecules/footer/FooterContact";
import NexorfLogo from "@/shared/ui/molecules/NexorfLogo";
import FooterSocials from "@/shared/ui/molecules/footer/FooterSocials";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-black dark:from-neutral-950 dark:to-neutral-900 dark:bg-gradient-to-b text-white px-6 py-20">
            <div className="container mx-auto grid md:grid-cols-6 gap-6 text-sm">
                <FooterLinkList
                    title="Producto"
                    links={[
                        { label: "ERP", href: "/services/erp" },
                        { label: "POS", href: "/coming-soon" },
                        { label: "Apps móviles", href: "/coming-soon" },
                        { label: "Webs", href: "/coming-soon" },
                        { label: "E-Commerce", href: "/coming-soon" },
                    ]}
                />
                <FooterLinkList
                    title="Negocios"
                    links={[
                        { label: "Restaurantes", href: "/#restaurantes" },
                        { label: "Panaderías", href: "/#panaderias" },
                        { label: "Minimarkets y tiendas", href: "/#tiendas" },
                        { label: "Farmacias", href: "/#farmacias" },
                        { label: "Ferreterías", href: "/#ferreterias" },
                        { label: "Educación", href: "/#educacion" },
                        { label: "Salud", href: "/#salud" },]}
                />
                <FooterLinkList
                    title="Recursos"
                    links={[
                        { label: "Blog", href: "/coming-soon" },
                        { label: "Demo", href: "/coming-soon" },
                        { label: "FAQs", href: "/resources/faq" },
                    ]}
                />
                <FooterLinkList
                    title="Legal"
                    links={[
                        { label: "Términos y condiciones", href: "/coming-soon"},
                        { label: "Política de privacidad", href: "/coming-soon" },
                        { label: "Política de cookies", href: "/coming-soon" },
                        { label: "Licencias y tecnologías", href: "/coming-soon" },
                    ]}
                />
                <FooterLinkList
                    title="Empresa"
                    links={[
                        { label: "Nosotros", href: "/coming-soon" },
                        { label: "Contáctanos", href: "/contact" },
                        { label: "Trabaja con nosotros", href: "/coming-soon" },
                    ]}
                />
                <div>
                    <FooterContact />
                    <FooterSocials />
                </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-xs">
                <NexorfLogo className="w-6 h-6 inline-block mr-2" fill="#ffffff" />
                © {year} Nexorf · Todos los derechos reservados · Quito, Ecuador
            </div>
        </footer>
    );
}
