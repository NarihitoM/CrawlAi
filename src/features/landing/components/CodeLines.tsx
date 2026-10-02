import type { CodeLine, Tone, Token } from "../types/types";

const tones: Record<Tone, string> = {
  plain: "text-zinc-950",
  keyword: "text-lime-900",
  string: "text-zinc-600",
  comment: "text-zinc-500",
};

export const plain = (text: string): Token => [text, "plain"];
export const keyword = (text: string): Token => [text, "keyword"];
export const string = (text: string): Token => [text, "string"];
export const comment = (text: string): Token => [text, "comment"];

export function toText(lines: CodeLine[]) {
  return lines.map((line) => line.map(([text]) => text).join("")).join("\n");
}

type CodeLinesProps = {
  lines: CodeLine[];
  className?: string;
};

export function CodeLines({ lines, className = "" }: CodeLinesProps) {
  return (
    <pre className={`font-mono ${className}`}>
      <code>
        {lines.map((line, index) => (
          <span key={index} className="block">
            {line.length === 0
              ? " "
              : line.map(([text, tone], tokenIndex) => (
                  <span key={tokenIndex} className={tones[tone]}>
                    {text}
                  </span>
                ))}
          </span>
        ))}
      </code>
    </pre>
  );
}
