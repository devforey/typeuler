import { Injectable } from '@angular/core';
import { TextCompareModule } from './text-compare.module';
import { TextCompareType } from './text-compare-type.enum';

@Injectable({
  providedIn: TextCompareModule
})
export class TextCompareService {

  public compareTexts(text, toText): number[] {
    const compareRawData = toText.split('').map(() => TextCompareType.COMPARE_UNTYPED);

    for (let index = 0; index < text.length; index++) {

      // Get out of the for loop since the inputted sentence is longer that the challenge sentence
      if (index >= toText.length) {
        break;
      }

      if (text[index] === toText[index]) {
        compareRawData[index] = TextCompareType.COMPARE_MATCH;
      } else {
        compareRawData[index] = TextCompareType.COMPARE_MISMATCH;
      }
    }

    return compareRawData;
  }

}
