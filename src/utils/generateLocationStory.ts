import { generateInvestigatePrompts } from "../constants/generateInvestigatePrompts";
import { investigationStory, mysteryDataType } from "../types";
import { returnDataForLocationEntry } from "./returnDataForLocationEntry";
import { returnDataForLocationInvestigate } from "./returnDataForLocationInvestigate";
import { sendPromptForObject } from "./sendPromptForObject";

export const generateLocationStory = async ({
  mysteryData,
  investigationStory,
  name,
}: {
  mysteryData: mysteryDataType;
  investigationStory: investigationStory;
  name: string;
}): Promise<investigationStory> => {
  console.log("Generating location story for " + name + "...");

  const isCrimeScene = mysteryData.furtherDetails.location === name;

  // Generate entrance to location story
  const data = returnDataForLocationEntry({
    mysteryData,
    location: name,
  });

  const prompt = `${generateInvestigatePrompts.promptIntro}
  ${JSON.stringify(data, null, 2)}
  ${generateInvestigatePrompts.enterRoomPrompt}
  ${generateInvestigatePrompts.promptOutro}`;

  const enterRoomStory = await sendPromptForObject({
    objectName: "story",
    prompt,
  });

  // Generate investigation in location story
  const data2 = returnDataForLocationInvestigate({
    mysteryData,
    location: name,
    isCrimeScene,
  });

  let prompt2 = `${generateInvestigatePrompts.promptIntro}
    ${JSON.stringify(data2, null, 2)}
    ${
      isCrimeScene
        ? generateInvestigatePrompts.investigatePromptCrimeScene
        : generateInvestigatePrompts.investigatePrompt
    }
    ${generateInvestigatePrompts.promptOutro}`;

  const investigateRoomStory = await sendPromptForObject({
    objectName: "story",
    prompt: prompt2,
  });

  console.log(`Location Data Generated: 
  ${JSON.stringify(enterRoomStory, null, 2)}
  ${JSON.stringify(investigateRoomStory, null, 2)}`);

  // Add location story to investigationStory
  investigationStory.locations[name] = {
    entrance: enterRoomStory.story,
    investigation: investigateRoomStory.story,
  };

  // Return updated investigationStory
  return investigationStory;
};
