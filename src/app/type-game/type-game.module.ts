import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeGameRoutingModule } from './type-game-routing.module';
import { TypeGameComponent } from './type-game/type-game.component';
import { FormsModule } from '@angular/forms';
import { TextCompareModule } from '@lib/text-compare/text-compare.module';

@NgModule({
  declarations: [
    TypeGameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TextCompareModule.forModule(),
    TypeGameRoutingModule
  ]
})
export class TypeGameModule { }
