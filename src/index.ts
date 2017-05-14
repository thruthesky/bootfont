import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SampleComponent } from './sample.component';
// import { SampleDirective } from './sample.directive';
// import { SamplePipe } from './sample.pipe';
// import { SampleService } from './sample.service';

// export * from './sample.component';
// export * from './sample.directive';
// export * from './sample.pipe';
// export * from './sample.service';


import { HeaderComponent } from './header/header';
import { IconComponent } from './icon/icon';

export * from './icon/icon';
export * from './header/header';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    IconComponent
  ],
  exports: [
    HeaderComponent,
    IconComponent
  ]
})
export class BootFontModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BootFontModule,
      providers: []
    };
  }
}
