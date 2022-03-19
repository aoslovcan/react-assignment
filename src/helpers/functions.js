export function getTextExcerpt(stringData) {
  let strExcerpt = stringData;
  if (strExcerpt.length > 30) {
    strExcerpt = strExcerpt.substring(0, 30) + "...";
  }
  return strExcerpt;
}
