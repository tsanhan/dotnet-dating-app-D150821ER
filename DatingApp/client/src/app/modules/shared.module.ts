import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    NgxGalleryModule
  ],
  declarations: [],
  exports: [
    TabsModule,
    NgxGalleryModule
  ]
})
export class SharedModule { }
