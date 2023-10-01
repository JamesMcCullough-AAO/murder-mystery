export type prevMessagesProps = { role: string; content: string }[];

export interface DetectiveAndSidekick {
  detective: Character;
  sidekick?: Character;
}

export interface Character {
  name: string;
  pronowns: string;
  characteristics: string;
  visualDescription: string;
}

export type mysteryDataType = {
  title: string;
  description: string;
  detectiveAndSidekick: DetectiveAndSidekick;
};

export type Setting = {
  setting: string;
  title: string;
};
