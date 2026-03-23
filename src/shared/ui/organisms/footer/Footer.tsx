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
                        { label: "ERP", href: "/servicios/erp" },
                        { label: "POS", href: "/servicios/pos" },
                        { label: "Apps móviles", href: "/servicios/apps-moviles" },
                        { label: "Webs", href: "/servicios/webs" },
                        { label: "E-Commerce", href: "/servicios/e-commerce" },
                    ]}
                />
                <FooterLinkList
                    title="Negocios"
                    links={[
                        { label: "Restaurantes", href: "/restaurantes" },
                        { label: "Panaderías", href: "/panaderias" },
                        { label: "Minimarkets y tiendas", href: "/tiendas" },
                        { label: "Farmacias", href: "/farmacias" },
                        { label: "Ferreterías", href: "/ferreterias" },
                        { label: "Educación", href: "/educacion" },
                        { label: "Salud", href: "/salud" },]}
                />
                <FooterLinkList
                    title="Recursos"
                    links={[
                        { label: "Blog", href: "/blog" },
                        { label: "Demo", href: "/demo" },
                        { label: "FAQs", href: "/resources/faq" },
                    ]}
                />
                <FooterLinkList
                    title="Legal"
                    links={[
                        { label: "Términos y condiciones", href: "/legal/terms"},
                        { label: "Política de privacidad", href: "/legal/privacy" },
                        { label: "Política de cookies", href: "/legal/cookies" },
                        { label: "Licencias y tecnologías", href: "/legal/licenses" },
                    ]}
                />
                <FooterLinkList
                    title="Empresa"
                    links={[
                        { label: "Nosotros", href: "/company" },
                        { label: "Contáctanos", href: "/contact" },
                        { label: "Trabaja con nosotros", href: "/company/careers" },
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
