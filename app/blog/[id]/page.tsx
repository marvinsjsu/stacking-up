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
  const { title, abstract, imgUrl, htmlContent } = data.props.postData;

  return (
    <div className="flex flex-auto justify-center">
      <Head>
        <title>{title}</title>
        <meta
          property="og:image"
          content={`http://localhost:3000/api/og?title=${title}`}
        />
      </Head>
      <div className="max-w-screen-lg bg-white items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-lexend)]">
        <Image
          src={imgUrl}
          alt="blog post image"
          width={400}
          height={100}
          priority={true}
          className="rounded-xl py-8 w-auto h-auto"
        />
        <h1 className="text-2xl font-medium text-blue">{title}</h1>
        <p className="font-medium text-blue p-4">{abstract}</p>
        <div
          className="prose text-blue px-8"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
