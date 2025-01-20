import { DialogueEntry } from "./types";

export function dummyAIPredictSectionStart(
  dialogueEntries: DialogueEntry[],
  sectionName: string,
  previousSectionStartIndex?: number
): number {
  const minIndex =
    previousSectionStartIndex !== undefined ? previousSectionStartIndex + 1 : 0;
  const maxIndex = dialogueEntries.length - 1;

  if (minIndex >= maxIndex) {
    return -1;
  }

  return Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
}
