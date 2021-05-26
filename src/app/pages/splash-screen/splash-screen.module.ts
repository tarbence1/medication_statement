import { ContainerModule } from './../../shared/components/container/container.module';
import { SplashScreenRoutingModule } from './splash-screen-routing.module';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { SplashScreenComponent } from './splash-screen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [SplashScreenComponent],
  imports: [
    CommonModule, SplashScreenRoutingModule, MatCardModule, MatRippleModule, ContainerModule, MatIconModule
  ]
})
export class SplashScreenModule { }
