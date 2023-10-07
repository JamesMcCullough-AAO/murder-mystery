import { generateInvestigatePrompts } from "../constants/generateInvestigatePrompts";
import { mysteryDataType } from "../types";
import { returnDataForLocationEntry } from "./returnDataForLocationEntry";
import { returnDataForLocationInvestigate } from "./returnDataForLocationInvestigate";
import { sendPromptForObject } from "./sendPromptForObject";

type generateLocationInvestigationStoryType = {
  mysteryData: mysteryDataType;
  location: string;
};

export const generateLocationInvestigationStory = async ({
  mysteryData,
  location,
}: generateLocationInvestigationStoryType) => {
  console.log("Mystery Data: ", mysteryData);
  // Generate entrance to location story
  const isCrimeScene = mysteryData.furtherDetails.location === location;

  // Generate investigation in location story
  const data = returnDataForLocationInvestigate({
    mysteryData,
    location,
    isCrimeScene,
  });

  let prompt = `${generateInvestigatePrompts.promptIntro}
    ${JSON.stringify(data, null, 2)}
    ${
      isCrimeScene
        ? generateInvestigatePrompts.investigatePromptCrimeScene
        : generateInvestigatePrompts.investigatePrompt
    }
    ${generateInvestigatePrompts.promptOutro}`;

  const investigateRoomStory = await sendPromptForObject({
    objectName: "story",
    prompt: prompt,
  });

  return investigateRoomStory.story;
};
