import { generateInvestigatePrompts } from "../constants/generateInvestigatePrompts";
import { investigationStory, mysteryDataType } from "../types";
import { generateLocationEntryStory } from "./generateLocationEntryStory";
import { generateLocationInvestigationStory } from "./generateLocationInvestigationStory";
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

  // Generate entrance to location story
  const enterRoomStory = await generateLocationEntryStory({
    mysteryData,
    location: name,
  });

  // Generate investigation story
  const investigateRoomStory = await generateLocationInvestigationStory({
    mysteryData,
    location: name,
  });

  console.log(`Location Data Generated: 
  ${JSON.stringify(enterRoomStory, null, 2)}
  ${JSON.stringify(investigateRoomStory, null, 2)}`);

  // Add location story to investigationStory
  investigationStory.locations[name] = {
    entrance: enterRoomStory,
    investigation: investigateRoomStory,
  };

  // Return updated investigationStory
  return investigationStory;
};
