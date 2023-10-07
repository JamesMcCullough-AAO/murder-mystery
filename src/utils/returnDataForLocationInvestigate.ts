import { mysteryDataType } from "../types";

type returnDataForLocationInvestigateProps = {
  mysteryData: mysteryDataType;
  location: string;
  isCrimeScene: boolean;
};

export const returnDataForLocationInvestigate = ({
  mysteryData,
  location,
  isCrimeScene,
}: returnDataForLocationInvestigateProps) => {
  const currentLocationData = mysteryData.locations.locationList.find(
    (locationData) => locationData.location == location
  );
  const cluesPresent = mysteryData.clues.clueList.find(
    (clueData) => clueData.location == location
  );

  const murderData = {
    murderMeans: mysteryData.furtherDetails.murderMeans,
    aftermarth: mysteryData.furtherDetails.aftermarth,
    discovery: mysteryData.furtherDetails.discovery,
  };

  if (currentLocationData === undefined || cluesPresent === undefined)
    throw new Error("Invalid location or character data");

  return {
    DetectiveDetails: mysteryData.DetectiveDetails,
    location: {
      location: currentLocationData.location,
      description: currentLocationData.description,
    },
    cluesPresent: cluesPresent,
    ...(isCrimeScene && { murderData }),
  };
};
