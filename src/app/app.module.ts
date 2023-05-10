import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { BannerHomeComponent } from './banner-home/banner-home.component';
import { CursoComponent } from './curso/curso.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { CallToActionSecondComponent } from './call-to-action-second/call-to-action-second.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    BannerHomeComponent,
    CursoComponent,
    CallToActionComponent,
    ContactenosComponent,
    SobreNosotrosComponent,
    HeaderComponent,
    FooterComponent,
    CategoriasComponent,
    TestimoniosComponent,
    CallToActionSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
