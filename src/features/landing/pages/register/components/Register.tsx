"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, User, Mail, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShineBorder } from "@/shared/ui/organisms/ShineBorder";

const schema = z
  .object({
    nombre: z.string().min(3, "Mínimo 3 caracteres"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Mínimo 6 caracteres"),
    confirmPassword: z.string(),
    terms: z.boolean().refine((val) => val === true, {
      message: "Debes aceptar los términos",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("Registro:", data);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4 py-12">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ShineBorder
          shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          duration={12}
          borderWidth={1.5}
          className="w-full"
        >
          <div className="w-full bg-white dark:bg-neutral-950 rounded-xl p-8 shadow-2xl">

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                Crear cuenta
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                Únete a Nexorf hoy mismo
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              {/* NOMBRE */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nombre completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    {...register("nombre")}
                    placeholder="Juan Pérez"
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition-all"
                  />
                </div>
                {errors.nombre && (
                  <p className="text-red-500 text-xs">{errors.nombre.message}</p>
                )}
              </div>

              {/* EMAIL */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Correo electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="nombre@ejemplo.com"
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition-all"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>

              {/* PASSWORD */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs">{errors.password.message}</p>
                )}
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Confirmar contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    {...register("confirmPassword")}
                    type={showConfirm ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                  >
                    {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>
                )}
              </div>

              {/* TÉRMINOS */}
              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  {...register("terms")}
                  id="terms"
                  className="mt-0.5 w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 cursor-pointer"
                />
                <label htmlFor="terms" className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed cursor-pointer">
                  Acepto los{" "}
                  <Link href="/coming-soon" className="text-violet-600 hover:text-violet-500 font-medium transition-colors">
                    términos y condiciones
                  </Link>{" "}
                  y la{" "}
                  <Link href="/coming-soon" className="text-violet-600 hover:text-violet-500 font-medium transition-colors">
                    política de privacidad
                  </Link>
                </label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-xs -mt-2">{errors.terms.message}</p>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-black dark:bg-white text-white dark:text-black font-semibold text-sm hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-md"
              >
                Crear cuenta
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* DIVIDER */}
              <div className="flex items-center gap-3">
                <hr className="flex-1 border-gray-200 dark:border-gray-700" />
                <span className="text-xs text-gray-400">o continúa con</span>
                <hr className="flex-1 border-gray-200 dark:border-gray-700" />
              </div>

              {/* GOOGLE */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-900 hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-200 text-sm font-medium transition-all duration-200 shadow-sm"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="w-5 h-5"
                  alt="Google"
                />
                Continuar con Google
              </button>

            </form>

            {/* LOGIN LINK */}
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
              ¿Ya tienes cuenta?{" "}
              <Link
                href="/login"
                className="font-semibold text-violet-600 hover:text-violet-500 transition-colors"
              >
                Inicia sesión
              </Link>
            </p>

          </div>
        </ShineBorder>
      </motion.div>
    </section>
  );
}