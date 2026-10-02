export type Tone = "plain" | "keyword" | "string" | "comment";

export type Token = [text: string, tone: Tone];

export type CodeLine = Token[];
