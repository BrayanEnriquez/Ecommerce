import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/atoms/Button';
import { useState } from 'react';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-[#fbf8ff] font-['Inter'] flex flex-col items-center px-4 py-8">
      {/* Header / Logo Area */}
      <div className="w-full max-w-md mb-12 text-center">
        <h1 className="text-[#002b92] text-4xl font-bold tracking-tight mb-2">Lumina</h1>
        <p className="text-[#434654] text-sm uppercase tracking-[0.05em] font-medium">Precision Commerce</p>
      </div>

      {/* Register Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-[0_20px_40px_rgba(26,27,35,0.06)] p-8">
        <h2 className="text-[#1a1b23] text-2xl font-semibold mb-8 text-center">Crear una cuenta</h2>

        <form className="space-y-6">
          {/* Name Field */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-[#434654] uppercase tracking-wider ml-1">Nombre Completo</label>
            <input
              type="text"
              placeholder="Tu Nombre"
              className="w-full bg-[#f3f2fe] text-[#1a1b23] px-4 py-3 rounded-md outline-none focus:bg-[#e2e1ed] border-l-0 focus:border-l-4 border-[#003ec7] transition-all"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-[#434654] uppercase tracking-wider ml-1">Email</label>
            <input
              type="email"
              placeholder="tu@email.com"
              className="w-full bg-[#f3f2fe] text-[#1a1b23] px-4 py-3 rounded-md outline-none focus:bg-[#e2e1ed] border-l-0 focus:border-l-4 border-[#003ec7] transition-all"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-[#434654] uppercase tracking-wider ml-1">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-[#f3f2fe] text-[#1a1b23] px-4 py-3 rounded-md outline-none focus:bg-[#e2e1ed] border-l-0 focus:border-l-4 border-[#003ec7] transition-all"
            />
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-[#434654] uppercase tracking-wider ml-1">Confirmar Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-[#f3f2fe] text-[#1a1b23] px-4 py-3 rounded-md outline-none focus:bg-[#e2e1ed] border-l-0 focus:border-l-4 border-[#003ec7] transition-all"
            />
          </div>

          {/* Register Button */}
          <Button
            type="submit"
            text="Registrarse"
            variant="primary"
          />
        </form>

        {/* Divider */}
        <div className="relative my-10 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#c4c5d7]/30"></div>
          </div>
          <span className="relative bg-white px-4 text-xs font-bold text-[#434654] uppercase tracking-widest">o regístrate con</span>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-[#434654] text-sm">
            ¿Ya tienes una cuenta?{' '}
            <Link
              to="/login"
              className="text-[#a04100] font-bold hover:underline"
            >
              Inicia Sesión
            </Link>
          </p>
        </div>
      </div>

      {/* Footer info */}
      <div className="mt-auto pt-8 text-[#747686] text-xs text-center max-w-xs">
        Al registrarte, aceptas nuestros <a href="#" className="underline">Términos de Servicio</a> y <a href="#" className="underline">Política de Privacidad</a>.
      </div>
    </div>
  );
};

export default RegisterPage;
