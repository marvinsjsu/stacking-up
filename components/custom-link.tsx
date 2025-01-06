import { ReactNode } from 'react';
import Link from 'next/link';

type CustomLinkProps = {
    href: string;
    children: ReactNode;
    external?: boolean;
    className?: string;
};


export default function CustomLink({
    href,
    children,
    className,
    external = false,
    ...props
}: CustomLinkProps) { 
    const defaultClassName = 'fill-current hover:text-primary-blue group-hover:text-primary-blue transition-colors duration-300 hover:text-primary-blue font-[family-name:var(--font-oswald)] font-16 transition-colors duration-300 ease-in-out uppercase';
    if (external) { 
        return (
            <a
                href={href}
                target='_blank'
                className={`${defaultClassName} ${className}`}
                rel='noopener noreferrer'
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={`${defaultClassName} ${className}`} {...props}>
            {children}
        </Link>
    );
}
