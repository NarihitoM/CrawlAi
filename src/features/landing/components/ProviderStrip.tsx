import { siAnthropic, siDeepseek, siGooglegemini, siMistralai } from "simple-icons";
import { Container } from "@/shared/components/layout/Container";
import { BrandIcon } from "@/shared/components/ui/BrandIcon";
import { FadeIn } from "@/shared/components/ui/FadeIn";
import { groq, openai, xai, type BrandMark } from "@/shared/lib/brandMarks";

type Provider = {
  name: string;
  icon: BrandMark;
};

const providers: Provider[] = [
  { name: "OpenAI", icon: openai },
  { name: "Anthropic", icon: siAnthropic },
  { name: "Google", icon: siGooglegemini },
  { name: "Mistral", icon: siMistralai },
  { name: "Groq", icon: groq },
  { name: "xAI", icon: xai },
  { name: "DeepSeek", icon: siDeepseek },
];

export function ProviderStrip() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50 py-10">
      <Container>
        <FadeIn className="flex flex-col items-center gap-6">
          <p className="text-[13px] text-zinc-500">One gateway for every model provider</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 text-zinc-400">
            {providers.map((provider) => (
              <li
                key={provider.name}
                className="flex items-center gap-2 text-[17px] font-semibold tracking-[-0.018em]"
              >
                <BrandIcon icon={provider.icon} />
                {provider.name}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
