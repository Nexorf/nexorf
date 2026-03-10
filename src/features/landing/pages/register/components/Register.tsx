
"use client";

import { useState } from "react";

interface RegisterForm {
  cedula: string;
  nombre: string;
  apellido: string;
  usuario: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const [form, setForm] = useState<RegisterForm>({
    cedula: "",
    nombre: "",
    apellido: "",
    usuario: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<any>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors: any = {};

    if (form.cedula.length < 10) {
      newErrors.cedula = "Cédula inválida";
    }

    if (!form.nombre) {
      newErrors.nombre = "Nombre requerido";
    }

    if (!form.apellido) {
      newErrors.apellido = "Apellido requerido";
    }

    if (form.usuario.length < 4) {
      newErrors.usuario = "Usuario mínimo 4 caracteres";
    }

    if (!validateEmail(form.email)) {
      newErrors.email = "Email inválido";
    }

    if (form.password.length < 6) {
      newErrors.password = "Contraseña mínimo 6 caracteres";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Registro:", form);
    }
  };

  return (
    <section className="bg-white dark:bg-black min-h-screen flex items-center px-4 py-16">
      <div className="max-w-md mx-auto w-full bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow">

        <h2 className="text-3xl font-bold text-center mb-6">
          Crear Cuenta
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Cedula */}
          <div>
            <input
              name="cedula"
              placeholder="Cédula"
              value={form.cedula}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.cedula && <p className="text-red-500 text-sm">{errors.cedula}</p>}
          </div>

          {/* Nombre */}
          <div>
            <input
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
          </div>

          {/* Apellido */}
          <div>
            <input
              name="apellido"
              placeholder="Apellido"
              value={form.apellido}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.apellido && <p className="text-red-500 text-sm">{errors.apellido}</p>}
          </div>

          {/* Usuario */}
          <div>
            <input
              name="usuario"
              placeholder="Usuario"
              value={form.usuario}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.usuario && <p className="text-red-500 text-sm">{errors.usuario}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={form.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Confirm password */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Repetir contraseña"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Crear cuenta
          </button>

        </form>
      </div>
    </section>
  );
}