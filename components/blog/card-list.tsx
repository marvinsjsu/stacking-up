import Card from './card';

type CardListProps = {
    slug: string;
    link: string;
    date: string;
    title?: string;
    key: string;
    abstract?: string;
    imgUrl?: string;
};

export default function CardList({ data }: {data: Array<CardListProps>}) { 
    return (
        <div>
            <div className='pb-8 mt-4 dark:text-white mx-4'>
                <ul className='list-none p-0 m-0 dark:text-white w-full'>
                    {data.map((props: CardListProps) => (
                        <Card {...props} key={props.slug} link={`blog/${props.slug}`} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

