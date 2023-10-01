// A function to parse a response from the AI. Responses should be an object, starting with an object name and a colon. They should end with a close }
// Remove any text before the given object name, and remove the object name and colon from the start of the response.
// Remove any text after the close }.

export const isValidObjectResponse = (response: string, objectName: string) => {
  const start = response.indexOf("{");
  const end = response.lastIndexOf("}");
  if (start === -1 || end === -1) {
    return false;
  }
  // If the object can be parsed, it's valid.
  try {
    JSON.parse(response.substring(start, end + 1));
  } catch (error) {
    return false;
  }
  return true;
};

export const parseObjectResponse = (response: string, objectName: string) => {
  const start = response.indexOf("{");
  const end = response.lastIndexOf("}");
  const parsedResponse = response.substring(start, end + 1);
  return JSON.parse(parsedResponse);
};
