import { Component } from '@angular/core';
import { TextCompareService } from '@lib/text-compare/text-compare.service';
import { TextCompareType } from '@lib/text-compare/text-compare-type.enum';
import { ColorHex } from '@lib/color/color-hex.enum';

@Component({
  selector: 'app-type-game',
  templateUrl: './type-game.component.html',
  styleUrls: ['./type-game.component.scss']
})
export class TypeGameComponent {

  private sentence = 'Transform me';
  coloredTextMetadata: object;
  typedSentence: string;

  public constructor(
    private textCompareService: TextCompareService
  ) {
    this.coloredTextMetadata = this.parseSentenceToColoredTextMetadata(this.sentence);
  }

  private parseSentenceToColoredTextMetadata(text: string, colorArray?: string[]): object[] {
    return text
      .split('')
      .map((letter: string, index: number) => {
        const color = colorArray && colorArray.length > index ? colorArray[index] : ColorHex.BLACK;
        return {
          letter,
          color
        };
      });
  }

  public onTypeInputChange(value): void {
    const compareData = this.textCompareService.compareTexts(value, this.sentence);
    const colorValues = this.parseCompareDataToColorValues(compareData);
    this.coloredTextMetadata = this.parseSentenceToColoredTextMetadata(this.sentence, colorValues);
  }

  private parseCompareDataToColorValues(compareData): string[] {
    const colorValues = compareData.map((compareDatum: number) => {
      switch (compareDatum) {
        case TextCompareType.COMPARE_MATCH:
          return ColorHex.GREEN;
        case TextCompareType.COMPARE_MISMATCH:
          return ColorHex.RED;
        case TextCompareType.COMPARE_UNTYPED:
        default:
          return ColorHex.BLACK;
      }
    });
    return colorValues;
  }

  public trackByIndex(index): number {
    return index;
  }

}
