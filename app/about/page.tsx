import type { PartialDeep } from 'type-fest';
import { TechStack } from './_component/tech-stack';
import TimeLineHistory from './_component/timeline-history';

interface ABOUT_CONTENT_TYPE {
  intro: string;
  content: string;
}

const ABOUT_CONTENT: PartialDeep<ABOUT_CONTENT_TYPE> = {
  intro: 'DarmaT0o0のプログラミングに関連についてを紹介します。',
  content: '2021年からプログラミングを初めて、Web,Androidを中心に開発しています。',
};

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-3 py-3">
      <h2 className="text-xl font-bold">About</h2>
      <div>
        <p>{ABOUT_CONTENT.intro}</p>
        <p>{ABOUT_CONTENT.content}</p>
      </div>
      <div className="flex flex-col gap-5">
        <TechStack />
        <TimeLineHistory />
      </div>
    </div>
  );
};

export default AboutPage;
