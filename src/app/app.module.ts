import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } 
    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';  
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './order-info/order-info.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TableComponent } from './table/table.component';
import { BoxComponent } from './box/box.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { UpdateComponent } from './update/update.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DeleteComponent } from './delete/delete.component';
import {MatRadioModule } from '@angular/material/radio';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { GroupComponent } from 'src/group/group.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { addUserReducer } from './Store/table.reducer';








@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    TableComponent,
    BoxComponent,
    UpdateComponent,
    DeleteComponent,
    GroupComponent,
    HomeComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule, 
    RouterModule ,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatRadioModule,
    MatProgressBarModule,
    StoreModule.forRoot({user:addUserReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
