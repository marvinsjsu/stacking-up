'use client';

import { useEffect, useState } from 'react';
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
}: CardProps) { 

    return (
        <div className="p-0 m-0">
            <Link href={link}>
                <li
                    className='flex flex-col px-4 rounded-md py-2 mb-2 text-primary-blue hover:text-primary-orange'
                    key={slug}
                >
                    <div className="group">
                        <h2>
                            {title}
                        </h2>
                        {date && (
                            <span className='text-gray-951 group-hover:text-primary-orange text-sx flex flex-col'>
                                <Date value={date} />
                            </span>
                        )}                    
                    </div>
                </li>
            </Link>
        </div>
    );
}

export default Card;
