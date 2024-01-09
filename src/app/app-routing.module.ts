import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './order-info/order-info.component';
import { TableComponent } from './table/table.component';
import { BoxComponent } from './box/box.component';
import { AppComponent } from './app.component';
import { GroupComponent } from 'src/group/group.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Order-information',component:ToolbarComponent},
  {path:'configuration',component:TableComponent},
  {path:"group-parameters",component:GroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
