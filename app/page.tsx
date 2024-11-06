import Link from 'next/link';

interface HomeContentType {
  content: ContentType[];
}
interface ContentType {
  name: string;
  href: string;
  description: string;
  published: boolean;
}

const homeContent: HomeContentType = {
  content: [
    {
      name: 'About',
      href: '/about',
      description: 'DarmaT0o0のプログラミングに関連についてを紹介します。',
      published: true,
    },
    {
      name: 'Blog',
      href: 'https://darmat0v0.vercel.app/',
      description: 'プログラミング学習のアウトプットを投稿しているサイトです。',
      published: true,
    },
    {
      name: 'Product',
      href: '/product',
      description: 'DarmaT0o0の製品を紹介します。',
      published: false,
    },
  ],
};

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-between py-16 ">
      <section className="grid sm:grid-cols-2 gap-4 grid-flow-row ">
        {homeContent.content.map(
          (item) =>
            item.published && (
              <Link
                key={item.name}
                href={item.href}
                className="hover:translate-x-2 hover:-translate-y-2  p-6  min-w-[300px] min-h-[300px] max-w-[300px]  bg-gradient-to-r from-teal-400 to-blue-500"
                target={item.name === 'Blog' ? '_blank' : '_self'}
              >
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <p className="text-lg py-4 ">{item.description}</p>
              </Link>
            )
        )}
      </section>
    </main>
  );
}
