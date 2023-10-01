import { mysteryDataType, prevMessagesProps } from "../types";
import { sendChatMessage } from "./chatGPT";
import {
  isValidObjectResponse,
  parseObjectResponse,
} from "./parseObjectResponse";

type PromptForObjectProps = {
  objectName: string;
  prompt: string;
};

export const sendPromptForObject = async ({
  objectName,
  prompt,
}: PromptForObjectProps): Promise<any> => {
  let object = null;
  let newMessageList = null;
  do {
    console.log("Sending request for " + objectName);
    newMessageList = await sendChatMessage({
      message: prompt,
    });
    if (newMessageList === null) {
      console.log("newMessageList is null");
      continue;
    }

    if (
      isValidObjectResponse(
        newMessageList[newMessageList.length - 1].content,
        objectName
      )
    ) {
      object = parseObjectResponse(
        newMessageList[newMessageList.length - 1].content,
        objectName
      );
    }
  } while (object === null);

  return object;
};
