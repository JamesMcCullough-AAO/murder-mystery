import OpenAI from "openai";
import { prevMessagesProps } from "../types";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

type sendChatMessageProps = {
  message: string;
  prevMessages?: prevMessagesProps;
};

export const sendChatMessage = async ({
  message,
  prevMessages = [],
}: sendChatMessageProps) => {
  prevMessages.push({
    role: "user",
    content: message,
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: prevMessages,
    model: "gpt-3.5-turbo",
  });

  if (chatCompletion.choices[0].message.content != null) {
    prevMessages.push({
      role: "assistant",
      content: chatCompletion.choices[0].message.content,
    });

    return prevMessages;
  }
  return null;
};
