import { JSX } from "react";

export const pricingTiers = [
    {
        title: "Basic",
        description: "Ideal para pequeños negocios que recién comienzan",
        price: "$9/mo",
        src: "/img/plans/basic.jpg",
        ctaText: "Comenzar",
        ctaLink: "/login",
        content: (): JSX.Element => (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold">Usuario único</h4>
                    <p>Incluye 1 usuario con todas las funciones básicas del sistema.</p>
                </div>
                <div>
                    <h4 className="font-semibold">Panel estándar</h4>
                    <p>Acceso a un panel intuitivo con las herramientas esenciales para tu negocio.</p>
                </div>
                <div>
                    <h4 className="font-semibold">Soporte por email</h4>
                    <p>Recibe ayuda vía correo electrónico en horario laboral.</p>
                </div>
                <div>
                    <h4 className="font-semibold">Actualizaciones menores</h4>
                    <p>Tu sistema siempre estará al día con las últimas mejoras básicas.</p>
                </div>
                <div>
                    <h4 className="font-semibold">5GB de almacenamiento</h4>
                    <p>Espacio suficiente para tus documentos y archivos iniciales.</p>
                </div>
                <div>
                    <h4 className="font-semibold">Pensado para freelancers</h4>
                    <p>Perfecto para proyectos individuales o negocios unipersonales.</p>
                </div>
            </div>
        ),
        specifications: (): JSX.Element => (
            <div className="grid grid-cols-3 gap-4 text-gray-600 dark:text-gray-400">
                <div><strong>Usuarios</strong><br />1</div>
                <div><strong>Almacenamiento</strong><br />5GB</div>
                <div><strong>Soporte</strong><br />Email</div>
                <div><strong>Actualizaciones</strong><br />Menores</div>
                <div><strong>Integraciones</strong><br />Básicas</div>
                <div><strong>Seguridad</strong><br />Estándar</div>
            </div>
        )
    },
    {
        title: "Pro",
        description: "Perfecto para equipos que necesitan velocidad",
        price: "$29/mo",
        src: "/img/plans/pro.jpg",
        ctaText: "Comenzar",
        ctaLink: "/login",
        content: () => (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold">Hasta 5 usuarios</h4>
                    <p>Colabora con tu equipo sin límites en la productividad.</p>
                </div>
                <div>
                    <h4 className="font-semibold">Reportes avanzados</h4>
                    <p>Obtén información detallada sobre el rendimiento y ventas.</p>
                </div>
                <div>
                    <h4 className="font-semibold">Soporte prioritario</h4>
                    <p>Atención más rápida a través de correo prioritario.</p>
                </div>
                <div>
                    <h4 className="font-semibold">Integraciones clave</h4>
                    <p>Conecta con herramientas como Google Workspace, Slack y más.</p>
                </div>
                <div>
                    <h4 className="font-semibold">10GB en la nube</h4>
                    <p>Guarda tus datos de forma segura y accede desde cualquier lugar.</p>
                </div>
                <div>
                    <h4 className="font-semibold">Funciones beta</h4>
                    <p>Prueba antes que nadie las nuevas herramientas en desarrollo.</p>
                </div>
            </div>
        ),
        specifications: (): JSX.Element => (
            <div className="grid grid-cols-3 gap-4 text-gray-600 dark:text-gray-400">
                <div><strong>Usuarios</strong><br />5</div>
                <div><strong>Almacenamiento</strong><br />10GB</div>
                <div><strong>Soporte</strong><br />Prioritario</div>
                <div><strong>Actualizaciones</strong><br />Menores + Beta</div>
                <div><strong>Integraciones</strong><br />Google, Slack, etc.</div>
                <div><strong>Seguridad</strong><br />Estándar</div>
            </div>
        )
    },
    {
        title: "Premium",
        description: "Incluye todas las funciones premium para crecer sin límites",
        price: "$59/mo",
        src: "/img/plans/premium.jpg",
        ctaText: "Comenzar",
        ctaLink: "/login",
        content: () => (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold">Usuarios ilimitados</h4>
                    <p>Escala tu equipo sin preocuparte por restricciones.</p>
                </div>
                <div>
                    <h4 className="font-semibold">API personalizadas</h4>
                    <p>Conecta y automatiza procesos con integraciones a medida.</p>
                </div>
                <div>
                    <h4 className="font-semibold">Soporte en vivo</h4>
                    <p>Asistencia por chat en tiempo real cuando más lo necesites.</p>
                </div>
                <div>
                    <h4 className="font-semibold">Reportes financieros</h4>
                    <p>Analiza ingresos, gastos y métricas avanzadas en detalle.</p>
                </div>
                <div>
                    <h4 className="font-semibold">50GB de almacenamiento</h4>
                    <p>Gran capacidad para documentos, imágenes y respaldos.</p>
                </div>
                <div>
                    <h4 className="font-semibold">Auditoría de seguridad</h4>
                    <p>Protege tu negocio con revisiones periódicas de seguridad.</p>
                </div>
            </div>
        ),
        specifications: (): JSX.Element => (
            <div className="grid grid-cols-3 gap-4 text-gray-600 dark:text-gray-400">
                <div><strong>Usuarios</strong><br />Ilimitados</div>
                <div><strong>Almacenamiento</strong><br />50GB</div>
                <div><strong>Soporte</strong><br />Chat en vivo</div>
                <div><strong>API</strong><br />Personalizada</div>
                <div><strong>Seguridad</strong><br />Auditoría</div>
                <div><strong>Reportes</strong><br />Financieros</div>
            </div>
        )
    },
    {
        title: "Savage",
        description: "Para negocios que rompen esquemas y crecen rápido",
        price: "$99/mo",
        src: "/img/plans/savage.jpg",
        ctaText: "Comenzar",
        ctaLink: "/login",
        content: () => (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold">Auditoría mensual</h4>
                    <p>Evaluación personalizada de tus procesos y resultados.</p>
                </div>
                <div>
                    <h4 className="font-semibold">Backups diarios</h4>
                    <p>Respaldo automático de todos tus datos importantes.</p>
                </div>
                <div>
                    <h4 className="font-semibold">Consultoría en gestión</h4>
                    <p>Sesión mensual con expertos en optimización de negocios.</p>
                </div>
                <div>
                    <h4 className="font-semibold">Soporte 24/7</h4>
                    <p>Atención ininterrumpida todos los días del año.</p>
                </div>
                <div>
                    <h4 className="font-semibold">100GB encriptados</h4>
                    <p>Protección avanzada para tus archivos más sensibles.</p>
                </div>
                <div>
                    <h4 className="font-semibold">Integraciones externas</h4>
                    <p>Conecta con CRM, ERP y otras plataformas profesionales.</p>
                </div>
            </div>
        ),
        specifications: (): JSX.Element => (
            <div className="grid grid-cols-3 gap-4 text-gray-600 dark:text-gray-400">
                <div><strong>Usuarios</strong><br />Ilimitados</div>
                <div><strong>Almacenamiento</strong><br />100GB</div>
                <div><strong>Soporte</strong><br />24/7</div>
                <div><strong>Seguridad</strong><br />Encriptado</div>
                <div><strong>Backups</strong><br />Diarios</div>
                <div><strong>Consultoría</strong><br />Mensual</div>
            </div>
        )
    },
    {
        title: "Demo",
        description: "Para quienes quieren probar sin compromiso",
        price: "$0",
        src: "/img/plans/free.jpg",
        ctaLink: "/login",
        ctaText: "Comenzar",
        content: (): JSX.Element => (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold">Usuario único</h4>
                    <p>Acceso básico para explorar el sistema antes de decidir.</p>
                </div>
            </div>
        ),
        specifications: (): JSX.Element => (
            <div className="grid grid-cols-3 gap-4 text-gray-600 dark:text-gray-400">
                <div><strong>Usuarios</strong><br />1</div>
                <div><strong>Almacenamiento</strong><br />1GB</div>
                <div><strong>Soporte</strong><br />Limitado</div>
            </div>
        )
    },
];
