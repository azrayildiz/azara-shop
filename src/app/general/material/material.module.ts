import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    MatMenuModule, 
    MatSidenavModule, 
    MatListModule, 
    MatTabsModule, 
    MatCardModule, 
    MatFormFieldModule,
    MatInputModule
  ], 
  exports: [
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    MatMenuModule,
    MatSidenavModule, 
    MatListModule, 
    MatTabsModule,
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule
    ]
})
export class MaterialModule { }
