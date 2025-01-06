import Head from 'next/head';
import Image from 'next/image';

import { getPostData, getAllPostParams } from '@/utils/posts';

export async function generateStaticParams() {
  return getAllPostParams();
}

async function fetchData(params: { id: string }) {
  const postData = getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchData(params);
  const { title, abstract, imgUrl, htmlContent, protocol } = data.props.postData;

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-lexend)] text-primary-blue">
      
      <Head>
        <title>{title}</title>
        <meta
          property="og:image"
          content={`http://localhost:3000/api/og?title=${title}`}
        />
      </Head>
      <main className="text-primary-blue bg-white max-h-screen w-full flex flex-col max-w-screen-lg gap-2 row-start-2 items-center sm:items-start">
        <Image
          src={imgUrl}
          alt="blog post image"
          width={400}
          height={100}
          priority={true}
          className="inline object-cover outline outline-8 outline-white shadow-lg shadow-slate-800 w-[300px]"
        />
        <h1 className="mt-8 text-lg font-medium text-blue">{title}</h1>
        <p className="text-sm text-primary-orange leading-snug p-4">{abstract}</p>

        <div className="mb-4 border-2 border-primary-orange p-4 rounded-md border-opacity-30">
          <h4 className="italic lowercase font-bold text-primary-blue text-opacity-65 text-[24px] text-right pb-2 -mt-12">TLDR</h4>
          <ul className="list-disc ml-4 text-opacity-65 text-sm">
            {protocol.map((item: string) => (
              <li className="py-2 leading-relaxed" key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div
          className="h-full bg-white pb-8 mb-8 prose text-primary-blue px-4"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </main>
    </div>
  );
}
