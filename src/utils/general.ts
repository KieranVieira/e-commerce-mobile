/**
 * Capitalizes a string of words, capitalizing each first letter of
 * every word in the string
 * 
 * @param text - Text to be capitalized
 * @returns Capitalized text, with each word capitalized
 */
export const capitalize = (text: string) =>
  text.replace(/(?:^|\s|["([{])+\S/g, match => match.toUpperCase());
;