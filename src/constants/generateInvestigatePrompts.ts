export const generateInvestigatePrompts = {
  promptIntro: `Hey chat, I need you to write a section of a murder mystery story. Here are some relevant details:`,
  promptOutro: `Provide your response as a JSON object containing a string array called story. Write only one paragraph per string. For example:
  {
    "story":["The text goes here...","And more goes here..."]
  }
  
  Please don't include any extra text before or after the object, thank you!`,
  enterRoomPrompt: `This is the detective's first time entering the room in question. Give a brief description of the room, as well as introduce any characters within it (listed above).`,
  investigatePrompt: `This is a detective investigating the room. If there are any clues in the room, describe the detective finding them, but don't reveal how they relate to the murder.`,
  investigatePromptCrimeScene: `This is a detective investigating the crime scene. Describe the scene as it would be after the murder occurs as described above, and include the detectives discovering any clues in the area.`,
};
