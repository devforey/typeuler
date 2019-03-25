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
