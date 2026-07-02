import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary:
    "border-black bg-black text-white hover:bg-white hover:text-black",
  secondary:
    "border-black bg-white text-black hover:bg-black hover:text-white",
};

function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        "inline-flex min-h-12 items-center justify-center",
        "border px-6 py-3",
        "text-sm font-semibold",
        "transition-colors duration-300",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-4",
        "focus-visible:outline-black",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
}

export default ButtonLink;