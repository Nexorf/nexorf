import Image from "next/image";

const team = [
    {
        name: "Mauricio Pérez",
        role: "CEO & Arquitecto de Software",
        image: "/team/mauricio.jpg",
        description: "Apasionado por crear sistemas sólidos, seguros y eficientes.",
    },
    {
        name: "Ana López",
        role: "UX/UI Designer",
        image: "/team/ana.jpg",
        description: "Experta en diseño centrado en el usuario y prototipado interactivo.",
    },
]

export function Team() {
    return (
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Nuestro Equipo</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Personas detrás de Nexorf</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {team.map((member, index) => (
                        <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                            <Image 
                            src={member.image}
                            alt={member.name} 
                            width={500}
                            height={500}
                            className="w-24 h-24 rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-sm text-green-500">{member.role}</p>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
