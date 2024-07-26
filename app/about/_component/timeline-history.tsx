import {
  AndroidIcon,
  CssIcon,
  FlutterIcon,
  HtmlIcon,
  JavascriptIcon,
  SupabaseIcon,
  TypescriptIcon,
} from '@/components/icon';
import { TechStackProps } from './tech-stack';

/** 　TIME LINE HISTORY */
interface HistoryStackProps {
  year: string;
  comment?: string;
  stack?: TechStackProps[];
}
const timeLineHistoryStacks: HistoryStackProps[] = [
  {
    year: '2021',
    comment: 'プログラミングを始めた頃',
    stack: [
      {
        name: 'HTML',
        icon: <HtmlIcon />,
      },
      {
        name: 'CSS',
        icon: <CssIcon />,
        description: 'SCSSもついでに学びました',
      },
      {
        name: 'JavaScript',
        icon: <JavascriptIcon />,
      },
      {
        name: 'TypeScript',
        icon: <TypescriptIcon width="40" height="40" />,
      },
    ],
  },
  {
    year: '2022',
    // comment: "プログラミングを始めた頃",
    stack: [
      {
        name: 'Flutter',
        icon: <FlutterIcon />,
        description: 'Android,iOSの開発ができるます。',
      },
    ],
  },
  {
    year: '2023',
    // comment: "プログラミングを始めた頃",
    stack: [
      {
        name: 'Android',
        description: 'Kotlinを使ったAndroidアプリ開発',
        icon: <AndroidIcon />,
      },
      {
        name: 'Supabase',
        description: 'Supabaseを使った開発経験もあります。',
        icon: <SupabaseIcon />,
      },
    ],
  },
  {
    year: '2024',
    // comment: "プログラミングを始めた頃",
  },
];
const TimeLineHistory = () => (
  <div>
    <div className="border-b">
      <h2 className="text-xl font-bold">プログラミングの経験</h2>
    </div>
    <div className="flex flex-col gap-2 pt-10">
      {timeLineHistoryStacks.map((history) => (
        <div className="flex  gap-8 min-h-[200px]">
          {/* header */}
          <div key={history.year} className=" flex flex-col items-center gap-2">
            <div className="flex items-center justify-center bg-gray-400 w-16 h-16 rounded-[50%] ">
              <h3 className="hover:scale-110">{history.year}</h3>
            </div>
            <div className="flex-1 w-1  rounded-full bg-gray-400 " />
          </div>
          {/* body */}
          <div className="flex flex-col w-full h-full gap-2">
            <p>{history.comment}</p>
            <div>
              <ul className="flex flex-wrap items-center gap-2 ">
                {history.stack?.map((stack) => (
                  <li className="relative group  flex flex-col items-center justify-between min-w-[100px] min-h-[100px] p-2 border">
                    {stack.icon && <div>{stack.icon}</div>}
                    <div className="text-sm">{stack.name}</div>
                    {stack.description && (
                      <div
                        className="absolute hidden  group-hover:block group-hover:scale-110 group-hover:animate-wiggle top-[-65px]
                      text-center  px-2 border text-wrap min-w-[200px]
                      before:content-[''] before:absolute before:top-full before:left-1/2 before:translate-x-[-50%] before:border-8
                      before:border-transparent before:border-t-gray-300 "
                      >
                        {stack.description}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="hover:translate-x-3 hover:-translate-y-2  m-2 p-8 text-center rounded-t-md bg-gradient-to-br from-gray-500 to-gray-100">
      <p className="text-lg ">今後もスキル向上の為に精進したいです。</p>
    </div>
  </div>
);

export default TimeLineHistory;
