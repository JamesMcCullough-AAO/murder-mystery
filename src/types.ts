export type prevMessagesProps = {
  role: "assistant" | "user";
  content: string;
}[];

export interface DetectiveAndSidekick {
  detective: Character;
  sidekick?: Character;
}

export interface Character {
  name: string;
  pronouns: string;
  characteristics: string;
  visualDescription: string;
}

export type mysteryDataType = {
  title: string;
  description: string;
  setting: string;
  detectiveAndSidekick: DetectiveAndSidekick;
  characterDetails: characterDetails;
  locations: Location[];
  furtherDetails: furtherDetails;
  events: event[];
  clues: {
    clueList: clue[];
  };
  redHerrings: {
    clueList: clue[];
  };
  introduction: introduction;
};

export type Setting = {
  setting: string;
  title: string;
};

export type Location = {
  location: string;
  description: string;
  neighboringLocations: string[];
  charactersPresent: string[];
  unlockClues?: string[];
  lockType?: "hidden" | "locked";
};

export type characterDetails = {
  victim: Character;
  suspects: Character[];
};

export type furtherDetails = {
  murderer: string;
  motive: string;
  location: string;
  murderMeans: string;
  aftermath: string;
  discovery: string;
};

export type clue = {
  name: string;
  detail: string;
  location?: string;
  suspect?: string;
  unlockingClue: string | null;
  unlockMeans: string;
  event?: string;
  revealSuspects?: string[];
};

export type event = {
  name: string;
  involvedCharacters: string[];
  location: string;
  detail: string;
};

export type introduction = {
  introductionText: string[];
};
