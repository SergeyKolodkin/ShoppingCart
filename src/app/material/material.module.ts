import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatDialogModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatTableModule,
  MatListModule,
  MatDividerModule,
  MatButtonToggleModule



} from '@angular/material';


const MaterialComponents =[
  MatButtonModule,
  MatToolbarModule,
  MatGridListModule,
  MatDialogModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatTableModule,
  MatListModule,
  MatDividerModule,
  MatButtonToggleModule
]

@NgModule({
  imports:[MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
