import { Component } from '@angular/core';
import { TypeGameService } from '../type-game.service';

@Component({
  selector: 'app-type-game',
  templateUrl: './type-game.component.html',
  styleUrls: ['./type-game.component.scss']
})
export class TypeGameComponent {

  private sentence = 'Transform me';
  coloredTextMetadata: object;
  typedSentence: string;

  public constructor(private typeGameService: TypeGameService) {
    this.coloredTextMetadata = this.typeGameService.parseSentenceToColoredTextMetadata(this.sentence);
  }

  public onTypeInputChange(value): void {
    const compareData = this.typeGameService.compareSentences(value, this.sentence);
    const colorValues = this.typeGameService.parseCompareDataToColorValues(compareData);
    this.coloredTextMetadata = this.typeGameService.parseSentenceToColoredTextMetadata(this.sentence, colorValues);
  }

  public trackByIndex(index): number {
    return index;
  }

}
