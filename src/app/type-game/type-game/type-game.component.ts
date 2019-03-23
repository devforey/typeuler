import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-game',
  templateUrl: './type-game.component.html',
  styleUrls: ['./type-game.component.scss']
})
export class TypeGameComponent implements OnInit {

  private static COMPARE_UNTYPED = -1;
  private static COMPARE_MISMATCH = 0;
  private static COMPARE_MATCH = 1;

  private static COLOR_HEX_BLACK = '#000000';
  private static COLOR_HEX_RED = 'red';
  private static COLOR_HEX_GREEN = 'green';

  private sentence = 'Transform me';
  coloredTextMetadata: object;
  typedSentence: string;

  constructor() {
    this.coloredTextMetadata = this.parseSentenceToColoredTextMetadata(this.sentence);
  }

  private parseSentenceToColoredTextMetadata(text: string, colorArray?: string[]): object[] {
    return text
      .split('')
      .map((letter: string, index: number) => {
        const color = colorArray && colorArray.length > index ? colorArray[index] : TypeGameComponent.COLOR_HEX_BLACK;
        return {
          letter,
          color
        };
      });
  }

  onTypeInputChange(value) {
    const compareData = this.compareSentences(value, this.sentence);
    const colorValues = this.parseCompareDataToColorValues(compareData);
    this.coloredTextMetadata = this.parseSentenceToColoredTextMetadata(this.sentence, colorValues);
  }

  private compareSentences(sentence, toSentence): number[] {
    const compareRawData = toSentence.split('').map(() => TypeGameComponent.COMPARE_UNTYPED);

    for (let index = 0; index < sentence.length; index++) {

      // Get out of the for loop since the inputted sentence is longer that the challenge sentence
      if (index >= toSentence.length) {
        break;
      }

      if (sentence[index] === toSentence[index]) {
        compareRawData[index] = TypeGameComponent.COMPARE_MATCH;
      } else {
        compareRawData[index] = TypeGameComponent.COMPARE_MISMATCH;
      }
    }

    return compareRawData;
  }

  private parseCompareDataToColorValues(compareData): string[] {
    const colorValues = compareData.map((compareDatum: number) => {
      switch (compareDatum) {
        case TypeGameComponent.COMPARE_MATCH:
          return TypeGameComponent.COLOR_HEX_GREEN;
        case TypeGameComponent.COMPARE_MISMATCH:
          return TypeGameComponent.COLOR_HEX_RED;
        case TypeGameComponent.COMPARE_UNTYPED:
        default:
          return TypeGameComponent.COLOR_HEX_BLACK;
      }
    });
    return colorValues;
  }

  ngOnInit() { }

}
