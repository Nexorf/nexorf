"use client";

import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {LinkPreview} from "@/shared/ui/organisms/LinkPreview";
import Image from "next/image";

export function About() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            {threshold: 0.3}
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-20 px-4"
        >
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        className="order-1 md:order-1"
                        initial={{opacity: 0, y: 40}}
                        animate={isVisible ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                                ¿Quiénes somos?
                            </h2>
                            <div
                                className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-900"></div>
                        </div>

                        <div
                            className="max-w-4xl mx-auto text-center space-y-8 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                            <motion.p
                                initial={{opacity: 0, y: 20}}
                                animate={isVisible ? {opacity: 1, y: 0} : {}}
                                transition={{delay: 0.1}}
                            >
                                <strong>Nexorf</strong> es una empresa ecuatoriana dedicada al
                                desarrollo de software a medida. Nos especializamos en crear
                                soluciones tecnológicas que impulsan negocios reales.
                            </motion.p>

                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={isVisible ? {opacity: 1, y: 0} : {}}
                                transition={{delay: 0.2}}
                            >
                                Usamos tecnologías como{" "}
                                <span>

                            <LinkPreview
                                url="https://tailwindcss.com"
                                width={180}
                                height={100}
                                className="font-semibold underline underline-offset-4 transition-all duration-300 hover:text-purple-600"
                            >
                                Tailwind CSS
                            </LinkPreview>
                            </span>{" "}
                                y{" "}
                                <span>

                            <LinkPreview
                                url="https://framer.com/motion"
                                width={180}
                                height={100}
                                className="font-semibold underline underline-offset-4 transition-all duration-300 hover:text-pink-600"
                            >
                                Framer Motion
                            </LinkPreview>
                            </span>{" "}
                                para lograr experiencias modernas y fluidas.
                            </motion.div>

                            <motion.p
                                initial={{opacity: 0, y: 20}}
                                animate={isVisible ? {opacity: 1, y: 0} : {}}
                                transition={{delay: 0.3}}
                            >
                                Con innovación, experiencia y compromiso, transformamos ideas en
                                herramientas digitales que generan resultados tangibles.
                            </motion.p>

                        </div>
                    </motion.div>
                    <div
                        className="flex justify-center items-center order-2 md:order-2"
                    >

                        <Image
                            src="/nice-to-meet-you.svg"
                            alt="Nice to meet you illustration"
                            width={500}
                            height={500}
                            className="w-96 h-96 mb-8"
                        />
                    </div>


                </div>
            </div>
        </section>
    );
}
