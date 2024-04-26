import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CreateAlnComponent } from './create-aln/create-aln.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ListAlnComponent } from './list-aln/list-aln.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { AlnService } from './services/aln-service';
import { HttpClientModule } from '@angular/common/http';
import { AlnSummaryComponent } from './aln-summary/aln-summary.component';
import { ListComponent } from './list/list.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateAlnComponent,
    HomeComponent,
    ListAlnComponent,
    LoginComponent,
    AlnSummaryComponent,
    ListComponent,
    ConfirmationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule],
  providers: [AuthGuard, AlnService],
  bootstrap: [AppComponent],
})
export class AppModule {}
