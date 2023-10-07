import { generateInvestigatePrompts } from "../constants/generateInvestigatePrompts";
import { mysteryDataType } from "../types";
import { returnDataForLocationEntry } from "./returnDataForLocationEntry";
import { sendPromptForObject } from "./sendPromptForObject";

type generateLocationEntryStoryType = {
  mysteryData: mysteryDataType;
  location: string;
};

export const generateLocationEntryStory = async ({
  mysteryData,
  location,
}: generateLocationEntryStoryType) => {
  // Generate entrance to location story
  const data = returnDataForLocationEntry({
    mysteryData,
    location,
  });

  const prompt = `${generateInvestigatePrompts.promptIntro}
  ${JSON.stringify(data, null, 2)}
  ${generateInvestigatePrompts.enterRoomPrompt}
  ${generateInvestigatePrompts.promptOutro}`;

  const enterRoomStory = await sendPromptForObject({
    objectName: "story",
    prompt,
  });

  return enterRoomStory.story;
};
