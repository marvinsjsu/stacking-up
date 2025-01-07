
import CardList from '@/components/blog/card-list';

import { getSortedPostsData } from '@/utils/posts';


export default function Home() {
  const data = getSortedPostsData();

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-lexend)] text-primary-blue">
      <main className="mb-20 text-primary-blue bg-white max-h-screen w-full flex flex-col max-w-screen-lg gap-2 row-start-2 items-center sm:items-start">
        <h1 className="text-xl font-semibold text-blue px-8 py-2 pt-24">Stacking Up!</h1>
        <p className="px-8 text-[14px] md:text-[16px] md:w-[450px]">
          Welcome to some of my thoughts and musings taken from my journey building software.
          While I occupy this virtual space to learn and develop my writing style, my
          hope is that, in some way, these will be of some help to you.
        </p>
        <CardList data={data} />
      </main>
    </div>
  );
}
