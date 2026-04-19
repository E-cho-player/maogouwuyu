import type { Metadata } from 'next';
// import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '猫狗物语 - 养宠服务与文化百科',
    template: '%s | 猫狗物语',
  },
  description:
    '猫狗物语是一款集猫狗科普、宠物互动、养宠管理、社交救助于一体的综合性养宠服务平台。提供犬猫品种百科、文化史专栏、虚拟养成、真实记录、养宠服务、社区交流等全方位服务。',
  keywords: [
    '猫狗物语',
    '宠物科普',
    '犬猫品种',
    '虚拟养宠',
    '宠物文化',
    '养宠管理',
    '宠物社区',
    '宠物救助',
    '国风宠物',
    '非遗宠物好物',
  ],
  authors: [{ name: '猫狗物语团队' }],
  generator: 'Coze Code',
  openGraph: {
    title: '猫狗物语 - 探索猫狗文化，温暖养宠生活',
    description:
      '集科普知识库、虚拟养成、真实记录、养宠服务、社交救助于一体的综合性养宠平台。探索猫狗文化史，体验文化养成乐趣。',
    url: 'https://example.com',
    siteName: '猫狗物语',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`antialiased`} suppressHydrationWarning>
        {/* {isDev && <Inspector />} */}
        {children}
      </body>
    </html>
  );
}
