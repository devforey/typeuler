import { Component } from '@angular/core';
import { TextCompareService } from '../../../lib/text-compare/text-compare.service';
import { TextCompareType } from '../../../lib/text-compare/text-compare-type.enum';

@Component({
  selector: 'app-type-game',
  templateUrl: './type-game.component.html',
  styleUrls: ['./type-game.component.scss']
})
export class TypeGameComponent {

  private static COLOR_HEX_BLACK = '#000000';
  private static COLOR_HEX_RED = 'red';
  private static COLOR_HEX_GREEN = 'green';

  private sentence = 'Transform me';
  coloredTextMetadata: object;
  typedSentence: string;

  public constructor(
    private textCompareService: TextCompareService
  ) {
    this.coloredTextMetadata = this.parseSentenceToColoredTextMetadata(this.sentence);
  }

  public onTypeInputChange(value): void {
    const compareData = this.textCompareService.compareTexts(value, this.sentence);
    const colorValues = this.parseCompareDataToColorValues(compareData);
    this.coloredTextMetadata = this.parseSentenceToColoredTextMetadata(this.sentence, colorValues);
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

  private parseCompareDataToColorValues(compareData): string[] {
    const colorValues = compareData.map((compareDatum: number) => {
      switch (compareDatum) {
        case TextCompareType.COMPARE_MATCH:
          return TypeGameComponent.COLOR_HEX_GREEN;
        case TextCompareType.COMPARE_MISMATCH:
          return TypeGameComponent.COLOR_HEX_RED;
        case TextCompareType.COMPARE_UNTYPED:
        default:
          return TypeGameComponent.COLOR_HEX_BLACK;
      }
    });
    return colorValues;
  }

  public trackByIndex(index): number {
    return index;
  }

}
