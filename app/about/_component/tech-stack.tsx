import {
  AwsIcon,
  DockerIcon,
  GitIcon,
  GithubIcon,
  GolangIcon,
  Nextjs,
  React as ReactIcon,
  Tailwindcss,
  TypescriptIcon,
  VercelIcon,
} from '@/components/icon';
import Link from 'next/link';
export interface TechStackProps {
  name: string;
  icon?: React.ReactNode | string;
  href?: string;
  description?: string;
  year?: string;
  //   display?: "tech-stack" | "history";
}

interface SkillStackProps {
  frontend?: TechStackProps[];
  backend?: TechStackProps[];
  other?: TechStackProps[];
  design?: TechStackProps[];
}
export const skillStack: SkillStackProps = {
  frontend: [
    {
      name: 'React',
      icon: <ReactIcon />,
    },
    {
      name: 'Next.js',
      icon: <Nextjs />,
    },
    {
      name: 'TailwindCSS',
      icon: <Tailwindcss />,
    },
    {
      name: 'TypeScript',
      icon: <TypescriptIcon />,
    },
  ],
  backend: [
    {
      name: 'Golang',
      icon: <GolangIcon />,
    },
  ],
  other: [
    {
      name: 'GitHub',
      icon: <GithubIcon />,
      href: 'https://github.com/darmadevZone?tab=repositories',
    },
    {
      name: 'Git',
      icon: <GitIcon />,
    },
    {
      name: 'Docker',
      icon: <DockerIcon />,
    },
    {
      name: 'Vercel',
      icon: <VercelIcon />,
    },
    {
      name: 'AWS',
      icon: <AwsIcon />,
    },
  ],
};

export const TechStack = () => (
  <div className="flex flex-col gap-3">
    <div>
      <h2 className="text-xl font-bold">Tech Stack</h2>
      <p>今までに使用した技術は、以下の通りです</p>
    </div>
    <div className="flex flex-col gap-3">
      <h3 className="text-lg italic border-b">Frontend</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 ">
        {skillStack.frontend?.map((item) => (
          <div
            key={item.name}
            className="p-3 border flex flex-col gap-2 items-center  justify-center min-h-[150px]"
          >
            <div>{item.icon}</div>
            <div className="text-muted-foreground">{item.name}</div>
          </div>
        ))}
      </div>
      <h3 className="text-lg italic border-b border-inherit">Backend</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 ">
        {skillStack.backend?.map((item) => (
          <div
            key={item.name}
            className="p-3 border flex flex-col gap-2 items-center  justify-center min-h-[150px]"
          >
            <div>{item.icon}</div>
            <div className="text-muted-foreground">{item.name}</div>
          </div>
        ))}
      </div>

      <h3 className="text-lg italic border-b">Others</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 ">
        {skillStack.other?.map((item) => (
          <div
            key={item.name}
            className="p-3 border flex flex-col gap-2 items-center  justify-center min-h-[150px]"
          >
            <div>{item.icon}</div>
            <div className="flex gap-3">
              <div className="text-muted-foreground">{item.name}</div>
              {item.href && (
                <div>
                  <Link href={item.href} className="text-muted-foreground">
                    Link
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
