const dashboardUrl =
  process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "https://app.crawlai.dev";

export const site = {
  name: "CrawlAi",
  signInUrl: `${dashboardUrl}/sign-in`,
  signUpUrl: `${dashboardUrl}/sign-up`,
  docsUrl: "/docs",
  githubUrl: "https://github.com/NarihitoM/CrawlAi",
};
