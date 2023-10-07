import { mysteryDataType } from "../types";

type returnDataForLocationEntryProps = {
  mysteryData: mysteryDataType;
  location: string;
};

export const returnDataForLocationEntry = ({
  mysteryData,
  location,
}: returnDataForLocationEntryProps) => {
  const currentLocationData = mysteryData.locations.locationList.find(
    (locationData) => locationData.location === location
  );
  const charactersPresent = mysteryData.characterDetails.suspects.find(
    (characterData) =>
      currentLocationData?.charactersPresent.includes(characterData.name)
  );

  if (!currentLocationData || !charactersPresent)
    throw new Error("Invalid location or character data");

  return {
    DetectiveDetails: mysteryData.DetectiveDetails,
    location: {
      location: currentLocationData.location,
      description: currentLocationData.description,
    },
    charactersPresent: charactersPresent,
  };
};
