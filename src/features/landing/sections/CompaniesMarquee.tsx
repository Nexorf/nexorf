"use client";

import { cn } from "@/shared/utils/utils";
import {Marquee} from "@/shared/ui/organisms/magicui/marquee";
import Image from "next/image";

const companyLogos = [
    "https://logos-world.net/wp-content/uploads/2020/04/Google-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
];

const firstRow = companyLogos.slice(0, Math.ceil(companyLogos.length / 2));

export function CompaniesMarquee() {
    return (
        <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16">

            <div className="text-center mb-12 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Empresas que confían en nosotros
                </h2>
                <div className="w-20 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r mb-8 from-blue-600 to-blue-900" />
                <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
                    Colaboramos con líderes de la industria para ofrecer soluciones de
                    calidad y alto impacto.
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
                            alt={`Logo empresa ${idx + 1}`}
                            width={500}
                            height={500}
                            className="max-h-12 object-contain"
                        />
                    </div>
                ))}
            </Marquee>


            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent" />
        </section>
    );
}
