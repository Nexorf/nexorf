"use client";

import Link from "next/link";
import {Button} from "@/shared/ui/atoms/Button";
import Image from "next/image";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center dark:from-gray-900 dark:to-black text-center px-6">
            <Image
                src="/skateboard.svg"
                alt="Skateboard"
                width={500}
                height={500}
                className="w-60 h-60 mb-8 animate-bounce"
            />

            <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                ¡Oops! Página no encontrada
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                Parece que te fuiste de ride por una ruta que no existe. Pero tranquilo, puedes volver al inicio.
            </p>

            <Link href="/">
                <Button className="px-6 py-3 text-lg rounded-full transition-transform hover:scale-105">
                    Volver al inicio
                </Button>
            </Link>
        </div>
    );
}
