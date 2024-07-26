import { TechStack } from './_component/tech-stack';
import TimeLineHistory from './_component/timeline-history';

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-3 py-3">
      <h2 className="text-xl font-bold">About</h2>
      <ul>
        <li>Webフロントエンド、Androidアプリ開発に興味があります。</li>
        <li>
          最新の技術に興味があり、アプリケーションを作ったり、技術記事を書いてアウトプットしています。
        </li>
      </ul>
      <div className="flex flex-col gap-5">
        <TechStack />
        <TimeLineHistory />
      </div>
    </div>
  );
};

export default AboutPage;
