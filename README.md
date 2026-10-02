# CrawlAi

CrawlAi is a free AI gateway and monitoring dashboard for chatbots and AI agents. You install one npm package, `@crawlai/sdk`, and call every model through it. Each call is routed through a unified gateway and shows up in the dashboard as a trace.

## Features

- **Unified gateway**: one endpoint for OpenAI, Anthropic, Google, Mistral, Groq, xAI and DeepSeek. It handles fallbacks, retries, response caching, rate limits and PII redaction.
- **Tracing and monitoring**: every agent run, model call and tool call is recorded with its tokens, cost, latency and status.
- **Prompt management**: two ways to set up an agent. Easy setup lets anyone write the system prompt and pick the model in the dashboard. Developers can set everything in code instead.
- **Cost analytics**: model spend broken down by model, provider, project and user.

CrawlAi is free. There are no paid plans.

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4
- Geist and Geist Mono fonts

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
|--------|--------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── app/                      # Thin route wrappers
├── features/                 # One folder per domain
│   ├── landing/
│   └── coming-soon/
└── shared/
    ├── components/
    │   ├── layout/           # Nav, mobile menu, footer, providers
    │   └── ui/               # Buttons, icons, theme toggle, fade in
    ├── hooks/
    ├── lib/
    └── types/
```

This repo holds the landing page only. The dashboard lives in a separate project.

## License

[MIT](LICENSE)
