import { Injectable } from '@angular/core';
import { TypeGameModule } from './type-game.module';

@Injectable({
  providedIn: TypeGameModule
})
export class TypeGameService {

  private static COMPARE_UNTYPED = -1;
  private static COMPARE_MISMATCH = 0;
  private static COMPARE_MATCH = 1;

  private static COLOR_HEX_BLACK = '#000000';
  private static COLOR_HEX_RED = 'red';
  private static COLOR_HEX_GREEN = 'green';

  public constructor() { }

  public parseSentenceToColoredTextMetadata(text: string, colorArray?: string[]): object[] {
    return text
      .split('')
      .map((letter: string, index: number) => {
        const color = colorArray && colorArray.length > index ? colorArray[index] : TypeGameService.COLOR_HEX_BLACK;
        return {
          letter,
          color
        };
      });
  }

  public compareSentences(sentence, toSentence): number[] {
    const compareRawData = toSentence.split('').map(() => TypeGameService.COMPARE_UNTYPED);

    for (let index = 0; index < sentence.length; index++) {

      // Get out of the for loop since the inputted sentence is longer that the challenge sentence
      if (index >= toSentence.length) {
        break;
      }

      if (sentence[index] === toSentence[index]) {
        compareRawData[index] = TypeGameService.COMPARE_MATCH;
      } else {
        compareRawData[index] = TypeGameService.COMPARE_MISMATCH;
      }
    }

    return compareRawData;
  }

  public parseCompareDataToColorValues(compareData): string[] {
    const colorValues = compareData.map((compareDatum: number) => {
      switch (compareDatum) {
        case TypeGameService.COMPARE_MATCH:
          return TypeGameService.COLOR_HEX_GREEN;
        case TypeGameService.COMPARE_MISMATCH:
          return TypeGameService.COLOR_HEX_RED;
        case TypeGameService.COMPARE_UNTYPED:
        default:
          return TypeGameService.COLOR_HEX_BLACK;
      }
    });
    return colorValues;
  }

}
