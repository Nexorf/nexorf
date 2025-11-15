"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
import {
    InfinityIcon,
    CheckCircle,
    Zap,
    Star,
    Flame,
    Crown,
} from "lucide-react";
import {Button} from "@/shared/ui/atoms/Button";
import {pricingTiers} from "@/core/data/pricing-tiers";

const iconMap = {
    Free: <InfinityIcon className="w-8 h-8 text-gray-400" />,
    Basic: <CheckCircle className="w-8 h-8 text-blue-500" />,
    Pro: <Zap className="w-8 h-8 text-purple-500" />,
    Premium: <Star className="w-8 h-8 text-yellow-500" />,
    Savage: <Flame className="w-8 h-8 text-red-500" />,
};

export function Tiers() {
    const [isVisible, setIsVisible] = useState(false);
    const [active, setActive] = useState(null);
    const [isAnnual, setIsAnnual] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const calculatePrice = (monthly:string) => {
        if (monthly.includes("$") && monthly.includes("/mo")) {
            const value = parseFloat(monthly.replace("$", "").replace("/mo", ""));
            const yearly = (value * 12 * 0.85).toFixed(2);
            return `$${yearly}/año`;
        }
        return monthly;
    };

    return (
        <section ref={sectionRef} className="bg-white dark:bg-black py-28 px-4 min-h-screen">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Planes y Precios</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
                    Planes flexibles para cada etapa de tu negocio. Elige mensual o anual y empieza hoy mismo.
                </p>

                <div className="mb-10 flex justify-center items-center gap-4">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Pago mensual</span>
                    <button
                        onClick={() => setIsAnnual(!isAnnual)}
                        className={clsx(
                            "w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition",
                            isAnnual && "from-blue-600 to-blue-900 bg-gradient-to-r",
                        )}
                    >
            <span
                className={clsx(
                    "bg-white w-4 h-4 rounded-full shadow-md transform duration-300",
                    isAnnual ? "translate-x-6" : "translate-x-0"
                )}
            />
                    </button>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Pago anual (15% dcto)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={tier.title}
                            className={clsx(
                                "rounded-2xl p-6 shadow-lg text-left transition-all duration-300 hover:-translate-y-2 cursor-pointer group",
                                "bg-white dark:bg-gray-900 border dark:border-gray-700",
                                {
                                    "border-yellow-400": tier.title === "Pro",
                                    "border-blue-500": tier.title === "Basic",
                                    "border-purple-600": tier.title === "Premium",
                                    "border-green-600": tier.title === "Savage",
                                    "col-span-full": tier.title === "Demo",
                                }
                            )}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            onClick={() => setActive(tier)}
                        >
                            <div className="mb-4">{iconMap[tier.title]}</div>
                            <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{tier.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">{tier.description}</p>
                            <p className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                                {isAnnual ? calculatePrice(tier.price) : tier.price}
                            </p>
                            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">{tier.content()}</div>
                            <Button className="mt-6 w-full bg-black dark:bg-white text-white dark:text-black hover:scale-105 transition-transform">
                                {tier.ctaText}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {active && (
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="bg-white dark:bg-gray-900 rounded-xl p-8 w-full max-w-screen-2xl relative"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                            >
                                <button
                                    onClick={() => setActive(null)}
                                    className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white text-xl"
                                >
                                    &times;
                                </button>
                                <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">{active.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{active.description}</p>
                                <p className="text-3xl font-bold text-black dark:text-white mb-4">
                                    {isAnnual ? calculatePrice(active.price) : active.price}
                                </p>
                                <div className="text-sm text-gray-600 dark:text-gray-300">{active.specifications()}</div>
                                <a href={active.ctaLink} className="block mt-6">
                                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                                        {active.ctaText}
                                    </Button>
                                </a>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}