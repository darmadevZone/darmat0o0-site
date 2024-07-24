import Link from "next/link";

interface HomeContentType {
  content: ContentType[];
}
interface ContentType {
  name: string;
  href: string;
  description: string;
}

const homeContent: HomeContentType = {
  content: [
    {
      name: "About",
      href: "/about",
      description: "DarmaT0o0のプログラミングに関連についてを紹介します。",
    },
    {
      name: "Blog",
      href: "/blog",
      description: "プログラミング学習のアウトプットを投稿しているサイトです。",
    },
  ],
};

export default function Home() {
  return (
    <main className="container flex flex-col items-center justify-between py-16 ">
      <section className="grid sm:grid-cols-2 gap-3 ">
        {homeContent.content.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="p-6  max-w-[300px] min-h-[300px]  bg-gradient-to-r from-indigo-200 to-blue-700"
          >
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <p className="text-lg py-4 ">{item.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
