export default function Footer() {
  return (
    <footer className="w-full bg-[#15311B] text-white/80 text-center py-4 px-4 text-xs flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 font-sans mt-auto shrink-0">
      <p>© 2026 CicloTrilhas Florianópolis. Todos os direitos reservados.</p>
      <p className="hidden sm:block">|</p>
      <p>
        Desenvolvido por{" "}
        <a
          href="https://loadingtechnology.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-white hover:underline transition-all"
        >
          Loading Technology
        </a>
      </p>
    </footer>
  );
}
