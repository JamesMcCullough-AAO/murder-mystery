export const generateMysteryPrompts = {
  promptIntro: `Hey chat, I need you to write a section of a murder mystery story. Here are some relevant details:`,
  enterRoomPrompt: `This is the detective's first time entering the room in question. Give a brief description of the room, as well as introduce any characters within it (listed above).
  Provide your response as a JSON object containing a string array called story. Write only one paragraph per string. For example:
  {
    "story":["The text goes here...","And more goes here..."]
  }
  
  Please don't include any extra text before or after the object, thank you!`,
  investigatePrompt: `Test`,
};
