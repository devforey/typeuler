import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeGameRoutingModule } from './type-game-routing.module';
import { TypeGameComponent } from './type-game/type-game.component';
import { FormsModule } from '@angular/forms';
import { TypeGameService } from './type-game.service';

@NgModule({
  declarations: [
    TypeGameComponent
  ],
  providers: [
    TypeGameService
  ],
  imports: [
    CommonModule,
    FormsModule,
    TypeGameRoutingModule
  ]
})
export class TypeGameModule { }
