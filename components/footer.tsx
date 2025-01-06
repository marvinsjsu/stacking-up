'use client';

import { usePathname } from 'next/navigation';

import CustomLink from './custom-link';

import LinkedInSvg from '../public/static/linkedin.svg';
import GitHubSvg from '../public/static/github.svg';

const pages = [
    { href: '/', label: 'Home', external: false },
    { href: '/about-me', label: 'About Me', external: false },
    { href: 'https://linkedin.com/in/marvin-mante', label: 'LinkedIn', external: true, svg: true },
    { href: 'https://github.com/marvinsjsu', label: 'GitHub', external: true, svg: true },
];

const svgClassNames = 'w-7 h-7 cursor-pointer fill-current hover:text-primary-blue group-hover:text-primary-blue transition-colors duration-300';

const svgToLink = (label:string) => {
    if (label === 'LinkedIn') { 
        return <LinkedInSvg className={svgClassNames} />;
    }

    if (label === 'GitHub') { 
        return <GitHubSvg className={svgClassNames} />;
    }
};

export default function Footer() { 
    const pathname = usePathname();

    return (
        <footer className="fixed w-full shadow-[5px_5px_15px_5px_rgba(0,0,0,0.2)] backdrop-blur-[20px] bottom-0 right-0 flex p-0 m-0">
            <nav className="w-full border-0 flex lg:justify-end justify-center space-x-10 bg-transparent bg-opacity-20 uppercase p-4 shadow-md">
                {pages.map((link) => (
                    <CustomLink
                        href={link.href}
                        key={link.href}
                        external={link.external}
                        className={pathname === link.href
                            ? 'group text-primary-blue border-b-2 border-primary-blue transition-border duration-500 ease-in-out'
                            : 'text-primary-orange border-0'
                        }
                    >
                        {link?.svg
                            ? svgToLink(link.label)
                            : link.label
                        }
                    </CustomLink>
                ))}
            </nav>
        </footer>
    );
}