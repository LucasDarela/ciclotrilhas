import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  variant?: "primary" | "primary-green" | "outline-white";
}

export default function Button({
  href,
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseClasses =
    "whitespace-nowrap rounded-2xl border-2 font-semibold uppercase tracking-wide transition-colors inline-flex justify-center items-center";

  const variants = {
    primary:
      "border-black bg-white text-black shadow-[1px_2px_0_0_#000] hover:bg-black hover:text-white px-5 py-2.5 text-xs sm:text-xs",
    "primary-green":
      "border-[#3AAA35] bg-white text-[#3AAA35] shadow-[1px_2px_0_0_#3AAA35] hover:bg-[#3AAA35] hover:text-white px-5 py-2.5 text-xs sm:text-xs",
    "outline-white":
      "border-white text-white hover:bg-white hover:text-black px-8 py-3 text-sm",
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
