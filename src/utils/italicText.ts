export default function italicText(input: string): string {
  let result = "";
  let insideGraveAccents = false;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "-" && !insideGraveAccents) {
      insideGraveAccents = true;
      result += "<i>";
    } else if (input[i] === "-" && insideGraveAccents) {
      insideGraveAccents = false;
      result += "</i>";
    } else {
      result += insideGraveAccents ? input[i].italics() : input[i];
    }
  }

  return result;
}
