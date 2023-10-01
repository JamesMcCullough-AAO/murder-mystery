import { generateMysteryPrompts } from "../constants/generateMysteryPrompts";
import { mysteryDataType, prevMessagesProps } from "../types";
import { sendPromptForObject } from "./sendPromptForObject";

type generateMysteryProps = {
  mysteryData: Partial<mysteryDataType>;
};

export const generateMystery = async ({
  mysteryData,
}: generateMysteryProps) => {
  let newMysteryData = mysteryData;
  const characterDetailsPrompt = `${generateMysteryPrompts.promptIntro}
        ${JSON.stringify(newMysteryData)}
        ${generateMysteryPrompts.characterDetailsPrompt}`;
  const characterDetails = await sendPromptForObject({
    objectName: "characterDetails",
    prompt: characterDetailsPrompt,
  });
  newMysteryData = { ...newMysteryData, characterDetails: characterDetails };

  const furtherDetailsPrompt = `${generateMysteryPrompts.promptIntro}
       ${JSON.stringify(newMysteryData)}
        ${generateMysteryPrompts.furtherDetailsPrompt}`;
  const furtherDetails = await sendPromptForObject({
    objectName: "furtherDetails",
    prompt: furtherDetailsPrompt,
  });
  newMysteryData = { ...newMysteryData, furtherDetails: furtherDetails };

  const eventsPrompt = `${generateMysteryPrompts.promptIntro}
       ${JSON.stringify(newMysteryData)}
        ${generateMysteryPrompts.eventsPrompt}`;
  const events = await sendPromptForObject({
    objectName: "events",
    prompt: eventsPrompt,
  });
  newMysteryData = { ...newMysteryData, events: events };

  const cluesPrompt = `${generateMysteryPrompts.promptIntro}
       ${JSON.stringify(newMysteryData)}
        ${generateMysteryPrompts.cluesPrmopt}`;
  const clues = await sendPromptForObject({
    objectName: "clues",
    prompt: cluesPrompt,
  });

  newMysteryData = { ...newMysteryData, clues: clues };

  const redHerringsPrompt = `${generateMysteryPrompts.promptIntro}
       ${JSON.stringify(newMysteryData)}
        ${generateMysteryPrompts.redHerringsPrompt}`;
  const redHerrings = await sendPromptForObject({
    objectName: "redHerrings",
    prompt: redHerringsPrompt,
  });
  newMysteryData = { ...newMysteryData, redHerrings: redHerrings };

  const locationPrompt = `${generateMysteryPrompts.promptIntro}
       ${JSON.stringify(newMysteryData)}
        ${generateMysteryPrompts.locationPrompt}`;
  const locations = await sendPromptForObject({
    objectName: "locations",
    prompt: locationPrompt,
  });

  newMysteryData = { ...newMysteryData, locations: locations };

  const introductionPrompt = `${generateMysteryPrompts.promptIntro}
       ${JSON.stringify(newMysteryData)}
        ${generateMysteryPrompts.introductionPrompt}`;
  const introduction = await sendPromptForObject({
    objectName: "introduction",
    prompt: introductionPrompt,
  });
  newMysteryData = { ...newMysteryData, introduction: introduction };

  return newMysteryData;
};
