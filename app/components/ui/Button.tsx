// components/Button.tsx
import React, {
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
  AnchorHTMLAttributes,
} from "react";
import clsx from "clsx";
import Link from "next/link";

// Spinner component (can be customized further)
export function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={clsx("animate-spin h-5 w-5 text-current", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}

// Props
export type ButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "link" | "outline";
  size?: "sm" | "md" | "lg" | number | string;
  shape?: "rounded" | "pill" | "square";
  block?: boolean;
  loading?: boolean;
  disabled?: boolean;
  active?: boolean;
  toggleable?: boolean;
  checked?: boolean;
  align?: "left" | "center" | "right";
  margin?: string;
  padding?: string;
  href?: string;
  tooltip?: string;
  className?: string;
  style?: React.CSSProperties;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  ariaLabel?: string;
  tabIndex?: number;
  form?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  onFocus?: (
    e: React.FocusEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  onKeyPress?: (
    e: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "onClick">;

// Maps for easy maintenance
const sizeMap: Record<string, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const variantMap: Record<string, string> = {
  primary: "bg-primary text-white hover:bg-primary-600 focus:ring-primary-400",
  secondary:
    "bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary-light",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-400",
  link: "bg-transparent text-primary underline hover:text-primary-600",
  outline:
    "border border-primary text-primary bg-transparent hover:bg-primary-50",
};

const shapeMap: Record<string, string> = {
  rounded: "rounded-md",
  pill: "rounded-full",
  square: "rounded-none",
};

// ForwardRef Button
export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      icon,
      variant = "primary",
      size = "md",
      shape = "rounded",
      block = false,
      loading = false,
      disabled = false,
      active = false,
      toggleable = false,
      checked = false,
      align = "center",
      margin,
      padding,
      href,
      tooltip,
      className,
      style,
      type = "button",
      ariaLabel,
      tabIndex,
      form,
      onClick,
      onFocus,
      onKeyPress,
      ...rest
    },
    ref
  ) => {
    const isLink = !!href;

    // Handle toggleable active/checked state
    const isActive = toggleable ? checked : active;

    const baseClasses = clsx(
      "inline-flex items-center justify-center font-semibold transition-all focus:outline-none focus:ring-2",
      variantMap[variant],
      shapeMap[shape],
      typeof size === "string" ? sizeMap[size] : `px-4 py-2 text-base`,
      block && "w-full",
      loading && "opacity-60 cursor-not-allowed",
      disabled && "opacity-50 cursor-not-allowed",
      isActive && "ring-2 ring-primary-400",
      align === "left" && "justify-start",
      align === "center" && "justify-center",
      align === "right" && "justify-end",
      margin,
      padding,
      className
    );

    const content = (
      <>
        {loading && <Spinner className="mr-2" />}
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </>
    );

    if (isLink) {
      return (
        <Link
          href={href}
          className={baseClasses}
          style={style}
          aria-label={ariaLabel}
          tabIndex={tabIndex}
          title={tooltip}
          {...rest}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as any}
        type={type}
        className={baseClasses}
        style={style}
        aria-label={ariaLabel}
        tabIndex={tabIndex}
        disabled={disabled || loading}
        form={form}
        title={tooltip}
        onClick={onClick}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        {...rest}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
