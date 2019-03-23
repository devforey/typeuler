import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import {TypeGameComponent} from './type-game/type-game.component';

const routes: Routes = [
  {
    path: 'play',
    component: TypeGameComponent
  } as Route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeGameRoutingModule { }
