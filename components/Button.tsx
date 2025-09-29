// components/Button.tsx
import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
// A tiny utility to compose class names conditionally. Avoids bringing an
// external dependency for such a small function.
function clsx(...args: (string | boolean | undefined)[]): string {
  return args
    .flatMap((arg) => {
      if (typeof arg === 'string') return arg.split(' ');
      if (typeof arg === 'boolean' || arg === undefined) return [];
      return [];
    })
    .filter(Boolean)
    .join(' ');
}

interface BaseProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}
interface LinkProps extends BaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
interface ButtonProps
  extends BaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

/**
 * A reusable button component that can render as either a <button> or a
 * Next.js <Link>. Variants define the color palette.
 */
export default function Button(props: LinkProps | ButtonProps) {
  const { variant = 'primary', className, children, ...rest } = props as any;
  const classes = clsx(
    'inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    variant === 'primary' && 'bg-brand text-white hover:bg-brand/90',
    variant === 'secondary' && 'border border-brand text-brand hover:bg-brand/10',
    variant === 'ghost' && 'text-brand hover:underline',
    className,
  );
  if ('href' in props && props.href) {
    const { href, ...linkProps } = rest as LinkProps;
    return (
      <Link href={href} className={classes} {...(linkProps as any)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...(rest as ButtonProps)}>
      {children}
    </button>
  );
}