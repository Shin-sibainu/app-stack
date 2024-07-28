import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 mx-auto md:py-3">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#5a67d8] to-[#9b2c2c] rounded-lg">
          <div className="container px-4 md:px-6 text-center text-primary-foreground">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-3">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl">
                    あのアプリ、どんな技術を使っているんだろう？
                  </h1>
                  <p className="max-w-[600px] mx-auto text-lg">
                    普段利用しているアプリがどのような技術構成になっているのか、探索できるサービスです。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Link
                    href="/search"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    技術スタックを検索する
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="ヒーロー画像"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        {/* feature */}
        <section id="feature" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  特徴
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AppStackは人気のアプリの技術スタックをスムーズに詳しく検索できます。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <div className="bg-gradient-to-r from-[#5a67d8] to-[#9b2c2c] rounded-lg p-4 text-primary-foreground">
                  <SearchIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">簡単検索</h3>
                <p className="text-muted-foreground">
                  アプリまたは検索窓からスムーズに技術構成を検索できます。
                </p>
              </div>
              <div className="grid gap-1">
                <div className="bg-gradient-to-r from-[#5a67d8] to-[#9b2c2c] rounded-lg p-4 text-primary-foreground">
                  <PieChartIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">図解</h3>
                <p className="text-muted-foreground">
                  構成を理解しやすいように図解を用いて解説しています。
                </p>
              </div>
              <div className="grid gap-1">
                <div className="bg-gradient-to-r from-[#5a67d8] to-[#9b2c2c] rounded-lg p-4 text-primary-foreground">
                  <LayersIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">詳細な解説</h3>
                <p className="text-muted-foreground">
                  技術構成図だけでなく、詳細な解説も加えております。
                </p>
              </div>
              <div className="grid gap-1">
                <div className="bg-gradient-to-r from-[#5a67d8] to-[#9b2c2c] rounded-lg p-4 text-primary-foreground">
                  <ClockIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">随時アップデート</h3>
                <p className="text-muted-foreground">
                  要望箱を設置しております。随時アプリと構成図はアップデートしていきます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* hot-to-use */}
        <section
          id="how-to-use"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  使い方
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  3つの簡単なステップでお気に入りアプリの技術スタックを発見しましょう。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <div className="bg-gradient-to-r from-[#5a67d8] to-[#9b2c2c] rounded-lg p-4 text-primary-foreground">
                  <SearchIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">検索</h3>
                <p className="text-muted-foreground">
                  検索窓からフィルタリングしてアプリ名から検索できます。
                </p>
              </div>
              <div className="grid gap-1">
                <div className="bg-gradient-to-r from-[#5a67d8] to-[#9b2c2c] rounded-lg p-4 text-primary-foreground">
                  <LayersIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">カテゴリ・タグ検索</h3>
                <p className="text-muted-foreground">
                  アプリケーションのカテゴリやタグからも検索可能です。
                </p>
              </div>
              <div className="grid gap-1">
                <div className="bg-gradient-to-r from-[#5a67d8] to-[#9b2c2c] rounded-lg p-4 text-primary-foreground">
                  <LightbulbIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">知識を習得</h3>
                <p className="text-muted-foreground">
                  優れた技術スタックから学びを得て、個人の開発に活かしましょう。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  お気に入りの技術スタックを無料で探索
                </h2>
                <Link
                  href="/search"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  始める
                </Link>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  企業提携
                </div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  AppStackは企業提携を募集しています。アプリ紹介を応募したい法人様はshincodeinc@gmail.comまでお問い合わせください。
                </p>
                <Link
                  href="https://x.com/Shin_Engineer"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                  target="_blank"
                  rel="noreferrer"
                >
                  Xアカウントはこちら
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LightbulbIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function PieChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function LayersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}
