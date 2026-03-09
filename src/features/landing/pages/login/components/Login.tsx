"use client";

import { useState } from "react";

interface LoginForm {
  email: string;
  password: string;
}

export function Login() {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = { email: "", password: "" };

    if (!validateEmail(form.email)) {
      newErrors.email = "Email inválido";
    }

    if (!validatePassword(form.password)) {
      newErrors.password = "La contraseña debe tener mínimo 6 caracteres";
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      console.log("Login data:", form);
    }
  };

  return (
    <section className="bg-white dark:bg-black py-20 px-4 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">

          <h2 className="text-3xl font-bold text-center mb-2">
            Bienvenido
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
            Ingresa a tu cuenta
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-700"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Password
              </label>

              <div className="flex">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-l-md bg-white dark:bg-gray-700"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="px-3 border rounded-r-md bg-gray-200 dark:bg-gray-600"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Iniciar sesión
            </button>

            {/* DIVIDER */}
            <div className="flex items-center gap-3">
              <hr className="flex-1 border-gray-300"/>
              <span className="text-sm text-gray-500">o</span>
              <hr className="flex-1 border-gray-300"/>
            </div>

            {/* GOOGLE BUTTON UI */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
              />
              Continuar con Google
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}