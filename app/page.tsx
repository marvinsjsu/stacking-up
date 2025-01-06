
import CardList from '@/components/blog/card-list';

import { getSortedPostsData } from '@/utils/posts';


export default function Home() {
  const data = getSortedPostsData();

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-lexend)]">
      <main className="text-primary-blue bg-white flex flex-col max-w-screen-md gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl font-semibold text-blue px-8 py-2 pt-8">Stacking Up!</h1>
        <p className="px-8">
          These are some of my thoughts and musings from my journey building software.
          While I take up this virtual space to learn and develop my writing style, my
          hope is that, in some way, these will be of some help to you.
        </p>
        <CardList data={data} />
      </main>
    </div>
  );
}
