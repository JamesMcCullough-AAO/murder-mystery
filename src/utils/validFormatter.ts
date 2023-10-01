import { Character, characterDetails, furtherDetails } from "../types";

export const flattenMatchingKeys = (obj: any): any => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] && obj[key][key]) {
      return flattenMatchingKeys(obj[key]);
    }
  }
  return obj;
};

export const isCharacter = (obj: any): obj is Character => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.name === "string" &&
    typeof obj.pronouns === "string" &&
    typeof obj.characteristics === "string" &&
    typeof obj.visualDescription === "string"
  );
};

export const isValidCharacterDetails = (obj: any): obj is characterDetails => {
  if (typeof obj !== "object" || obj === null) return false;

  // Check if 'victim' is of type Character
  if (!isCharacter(obj.victim)) return false;

  // Check if 'suspects' is an array of Characters
  if (!Array.isArray(obj.suspects)) return false;
  for (const suspect of obj.suspects) {
    if (!isCharacter(suspect)) return false;
  }

  return true;
};

export const isValidfurtherDetails = (obj: any): obj is furtherDetails => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.murderer === "string" &&
    typeof obj.motive === "string" &&
    typeof obj.location === "string" &&
    typeof obj.murderMeans === "string" &&
    typeof obj.aftermath === "string" &&
    typeof obj.discovery === "string"
  );
};
