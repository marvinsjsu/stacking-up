'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Date from '@/components/date';

type CardProps = {
    slug: string;
    link: string;
    date?: string;
    title?: string;
    key: string;
    imgUrl?: string;
}

function Card({
    slug,
    link,
    date,
    title,
    imgUrl = '/card-default-bg.jpg'
}: CardProps) { 
    const [imgSrc, setImgSrc] = useState('/card-default-bg.jpg');

    useEffect(() => { 
        setImgSrc(imgUrl);
    }, []);

    const handleError = () => { 
        setImgSrc('/card-default-bg.jpg');
    };

    return (
        <div className={`border-solid border-spacing-2 border-1 drop-shadow-sm m-2 hover:bg-orange-200 bg-white p2 lg:p-3`}>
            <Link href={link}>
                <li
                    className={`flex flex-col mb-4 lg:px-6 dark:bg-gray-900 text-black dark:text-white hover:cursor-pointer pb-2
                    overflow-hidden hover:text-gray-900 mr-2`}
                    key={slug}
                >
                    <>
                        <h2 className="outline-none mb-0 py-2 text-lg lg:text-xl">
                            {title}
                        </h2>
                        {date && (
                            <span className={'text-gray-951 text-sx flex flex-col py-2'}>
                                <Date value={date} />
                            </span>
                        )}                    
                    </>
                </li>
            </Link>
        </div>
    );
}

export default Card;
