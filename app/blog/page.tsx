import CardList from '@/components/blog/card-list';

import { getSortedPostsData } from '@/utils/posts';

export default async function Page() { 
    const data = getSortedPostsData();

    return (
        <div className="border-orange-300 border-solid border-spacing-4 border-2">
            <div className="m-2 py-4 px-1 lg:px-12">
                <h1 className="text-xl">Blog Posts!</h1>
                <div className="py-2"></div>
                <CardList data={data} />
            </div>
        </div>
    );
}

