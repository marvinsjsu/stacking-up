import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { getPostData, getAllPostParams } from '@/utils/posts';

export async function generateStaticParams() {
  const postParams = await getAllPostParams();
  return postParams.map(({ params }) => ({
    id: params.slug,
  }));
}

async function fetchData(paramsPromise: Promise<{ id: string }>) {
  const params = await paramsPromise;
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}


export default async function Page({ params }: {
  params: Promise<{ id: string }>
}) {
  const data = await fetchData(params);
  const { title, abstract, imgUrl, htmlContent, protocol } = data.props.postData;

  return (
    <div className="animate-fadeIn items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-lexend)] text-primary-blue">
      <Head>
        <title>{title}</title>
        <meta
          property="og:image"
          content={`http://localhost:3000/api/og?title=${title}`}
        />
      </Head>
      <main className="text-primary-blue bg-white max-h-screen w-full flex flex-col max-w-screen-md items-center sm:items-start px-8">
        <div className="w-full flex justify-center">
          <Image
            src={imgUrl}
            alt="blog post image"
            width={400}
            height={100}
            priority={true}
            className="inline object-cover outline outline-8 outline-white shadow-lg shadow-slate-800"
          />
        </div>
        <h1 className="w-full px-4 mt-14 text-lg font-medium text-primary-blue text-center">{title}</h1>
        <p className="text-sm text-primary-orange leading-snug px-4 py-8">{abstract}</p>
      </main>
        {Array.isArray(protocol) && (
          <section className="w-full bg-white px-8 flex flex-col max-w-screen-md items-center sm:items-start">
            <div className="mx-4 pb-8 mb-0 border-2 bg-white border-primary-orange p-4 rounded-md border-opacity-30">
              <h4 className="italic lowercase font-bold text-primary-blue text-opacity-65 text-[24px] pb-2">TLDR</h4>
              <ul className="list-disc ml-4 text-opacity-65 text-sm">
                {protocol.map((item: string) => (
                  <li className="pt-2 pb-0 mb-0 leading-relaxed" key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        )}
      
      <div className="bg-white w-full max-w-screen-md"></div>
      <section className="w-full bg-white py-10 px-8 flex flex-col max-w-screen-md items-center sm:items-start">
        <div
          className="prose bg-white w-full max-w-screen-md px-4"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
        <div className="w-full flex justify-center md:justify-end">
          <Link href="/" className="group">
            <button className="m-8 px-4 py-2 bg-primary-blue hover:bg-primary-orange hover:drop-shadow-lg hover:translate-y-[0.25px] hover:transition-transform hover:duration-75 rounded-md text-white">Back</button>
          </Link>
        </div>
        </section>
    </div>
  );
}
