"use client";

import { useState } from "react";
import Button from "./Button";

interface HeaderProps {
  ctaText?: string;
  ctaHref?: string;
}

export default function Header({
  ctaText = "Conheça as trilhas",
  ctaHref = "#",
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Overlay do menu mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 px-6 backdrop-blur-md md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute right-6 top-8 p-2 text-white"
            aria-label="Fechar menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <nav className="flex flex-col items-center gap-y-8 text-2xl font-medium text-white">
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
              Produtos
            </a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
              Faça sua doação
            </a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
              Quem somos?
            </a>
            <Button
              href={ctaHref}
              onClick={() => setIsMobileMenuOpen(false)}
              variant="outline-white"
              className="mt-4"
            >
              {ctaText}
            </Button>
          </nav>
        </div>
      )}

      {/* Header / Nav */}
      <header className="flex w-full items-center justify-between gap-4 py-4">
        {/* Logo / Espaço (Se houver logo no futuro, coloque aqui) */}
        <div className="flex w-full items-center justify-between md:hidden">
          <div className="hidden text-xl font-bold uppercase tracking-widest text-white">
            Logo
          </div>
          <button
            className="ml-auto p-1 text-white"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden text-sm font-medium text-white sm:text-base md:flex flex-wrap items-center gap-x-6 lg:gap-x-10">
          <a href="#" className="transition-colors hover:text-gray-200">
            Home
          </a>
          <a href="#" className="transition-colors hover:text-gray-200">
            Produtos
          </a>
          <a href="#" className="transition-colors hover:text-gray-200">
            Faça sua doação
          </a>
          <a href="#" className="transition-colors hover:text-gray-200">
            Quem somos?
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href={ctaHref}>{ctaText}</Button>
        </div>
      </header>
    </>
  );
}
