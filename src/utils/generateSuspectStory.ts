import { investigationStory, mysteryDataType } from "../types";

export const generateSuspectStory = async ({
  mysteryData,
  investigationStory,
  name,
}: {
  mysteryData: mysteryDataType;
  investigationStory: investigationStory;
  name: string;
}): Promise<investigationStory> => {
  console.log("Generating suspect story for " + name + "...");
  // Get suspect data

  // Return updated investigationStory
  return investigationStory;
};
