export const TEXT_SYMBOLS = {
  SPACE: ' ',
};
const READING_PER_MINUTE_THRESHOLD = 200;

export function getReadingTime(wordCount, readPerMinute = READING_PER_MINUTE_THRESHOLD) {
  return Math.ceil(wordCount / readPerMinute);
}

export function normalizeText(text) {
  return text.normalize('NFD') || '';
}

export function removeSpaces(text) {
  return text.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
}

export function removeSpecialsChars(text) {
  return text.replace(/(["'@/.\\?!,+\-:*=[\]{}()$%&#><;|])/g, '');
}

export function removeHtmlTags(text) {
  const div = document.createElement('div');
  div.innerHTML = text;
  return div.innerText;
}
