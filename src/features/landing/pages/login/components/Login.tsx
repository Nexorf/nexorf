"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ShineBorder } from "@/shared/ui/organisms/ShineBorder";

// ─── 1. ESQUEMA ZOD: aquí defines las reglas de validación ───────────────────
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "El correo es obligatorio")
    .email("El formato del correo no es válido"),
  password: z
    .string()
    .min(1, "La contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});

// Tipo inferido automáticamente desde el esquema (no necesitas escribirlo a mano)
type LoginFormData = z.infer<typeof loginSchema>;

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // ─── 2. REACT-HOOK-FORM: maneja el formulario y conecta con zod ──────────
  const {
    register,          // conecta cada input al formulario
    handleSubmit,      // envuelve el onSubmit con validación automática
    formState: { errors, isSubmitting }, // errores y estado de envío
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema), // zod valida los datos
  });

  // ─── 3. SUBMIT: solo se ejecuta si zod valida correctamente ─────────────
  const onSubmit = (data: LoginFormData) => {
    // Por ahora solo UI, sin backend
    console.log("Login data (validado por zod):", data);
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
                Bienvenido
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                Ingresa a tu cuenta para continuar
              </p>
            </div>

            {/* handleSubmit de react-hook-form llama a onSubmit solo si zod aprueba */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              {/* EMAIL */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Correo electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    {...register("email")}  // ← así se conecta el input a react-hook-form
                    type="email"
                    placeholder="nombre@ejemplo.com"
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500 transition-all"
                  />
                </div>
                {/* El error viene de zod, a través de react-hook-form */}
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
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
                    {...register("password")}  // ← conecta password a react-hook-form
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
                  <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                )}
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-black dark:bg-white text-white dark:text-black font-semibold text-sm hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Iniciar sesión
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* DIVIDER */}
              <div className="flex items-center gap-3">
                <hr className="flex-1 border-gray-200 dark:border-gray-700" />
                <span className="text-xs text-gray-400">o continúa con</span>
                <hr className="flex-1 border-gray-200 dark:border-gray-700" />
              </div>

              {/* GOOGLE BUTTON */}
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

            {/* REGISTER LINK */}
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
              ¿No tienes cuenta?{" "}
              <Link
                href="/register"
                className="font-semibold text-violet-600 hover:text-violet-500 transition-colors"
              >
                Regístrate gratis
              </Link>
            </p>

          </div>
        </ShineBorder>
      </motion.div>
    </section>
  );
}