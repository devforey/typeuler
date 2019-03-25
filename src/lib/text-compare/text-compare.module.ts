import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextCompareService } from './text-compare.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class TextCompareModule {

  static forModule(): ModuleWithProviders {
    return {
      ngModule: TextCompareModule,
      providers: [ TextCompareService ]
    };
  }

}
