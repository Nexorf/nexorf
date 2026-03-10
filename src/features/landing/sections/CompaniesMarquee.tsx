"use client";

import { cn } from "@/shared/utils/utils";
import { Marquee } from "@/shared/ui/organisms/magicui/marquee";
import Image from "next/image";

const techLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg",
];


const firstRow = techLogos

export function CompaniesMarquee() {
    return (
        <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16">

            <div className="text-center mb-12 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Stack tecnológico de clase mundial
                </h2>

                <div className="w-20 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r mb-8 from-blue-600 to-blue-900" />

                <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
                    Construimos nuestras soluciones con tecnologías modernas,
                    escalables y seguras utilizadas por empresas de todo el mundo.
                </p>
            </div>

            <Marquee pauseOnHover className="[--duration:20s] flex gap-10 px-4 mb-6">
                {firstRow.map((logo, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            "flex h-16 w-40 items-center justify-center",
                            "filter grayscale opacity-70 transition hover:filter-none hover:opacity-100"
                        )}
                    >
                        <Image
                            src={logo}
                            alt={`Tecnología ${idx + 1}`}
                            width={500}
                            height={500}
                            className={`max-h-12 object-contain ${
                                logo.includes("Nextjs") ? "dark:invert" : ""
                            }`}
                        />
                    </div>
                ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent" />
        </section>
    );
}