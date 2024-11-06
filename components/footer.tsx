import Image from 'next/image';
import Link from 'next/link';
import { GithubIcon, TwitterIcon } from './icon';

interface SnsType {
  name?: string;
  link: string;
  icon: string | React.ReactNode;
  published: boolean;
}

interface DarmaT0o0SiteInfoType {
  title: string;
  description: string;
  name: string;
  sns: SnsType[];
  privacy: {
    name: string;
    link: string;
    published: boolean;
  };
}

export const darmaSiteInfo: DarmaT0o0SiteInfoType = {
  title: 'DarmaT0o0 Site',
  description: 'DarmaT0o0 Site',
  name: 'DarmaT0o0',
  sns: [
    {
      name: 'GitHub',
      link: 'https://github.com/darmadevZone?tab=repositories',
      icon: <GithubIcon height="20" width="20" />,
      published: true,
    },
    {
      name: 'Twitter',
      link: 'https://x.com/DarmaT1o',
      icon: <TwitterIcon height="20" width="20" />,
      published: true,
    },
    {
      name: 'Zenn',
      link: 'https://zenn.dev/dandan',
      icon: <Image src="/zenn.svg" width={20} height={20} alt="zenn" />,
      published: true,
    },
  ],
  privacy: {
    name: 'プライバシーについて',
    link: '/privacy',
    published: false,
  },
};

const Footer = () => {
  return (
    <footer className="container h-16 border-t">
      <div className="flex justify-between mt-2">
        <div className="flex items-center p-2 gap-3">
          <div>
            <p>
              &copy; 2024
              <span className="p-2 underline">{darmaSiteInfo.name}</span>
            </p>
          </div>
          {darmaSiteInfo.privacy.published && (
            <div>
              <p> {darmaSiteInfo.privacy.name}</p>
            </div>
          )}
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {darmaSiteInfo.sns.map(
            (sns) =>
              sns.published && (
                <Link href={sns.link} key={sns.name} target="_blank" rel="noreferrer">
                  <div className="p-2 bg-slate-300 rounded-lg hover:opacity-50">
                    <p>{sns.icon}</p>
                  </div>
                </Link>
              )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
