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
import { DatePipe } from '@angular/common';
import { AlnService } from './services/aln-service';
import { HttpClientModule } from '@angular/common/http';
import { AlnSummaryComponent } from './aln-summary/aln-summary.component';
import { ListComponent } from './list/list.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ApproveAlnComponent } from './approve-aln/approve-aln.component';
import { ApprovalSummaryComponent } from './approval-summary/approval-summary.component';
import { ApprovalSummaryConfirmationComponent } from './approval-summary-confirmation/approval-summary-confirmation.component';
import { EditAlnComponent } from './edit-aln/edit-aln.component';
import { EditAlnSummaryComponent } from './edit-aln-summary/edit-aln-summary.component';
import { DeleteAlnComponent } from './delete-aln/delete-aln.component';
import { DeleteAlnSummaryComponent } from './delete-aln-summary/delete-aln-summary.component';
import { DeleteAlnConfirmationComponent } from './delete-aln-confirmation/delete-aln-confirmation.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ApproveComponent } from './approve/approve.component';
import { SubAlnComponent } from './sub-aln/sub-aln.component';
import { SubAlnListComponent } from './sub-aln-list/sub-aln-list.component';
import { CreateSubAlnComponent } from './create-sub-aln/create-sub-aln.component';
import { AlnDetailComponent } from './aln-detail/aln-detail.component';

@NgModule({
  declarations: [
    CreateComponent,
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
    ConfirmModalComponent,
    ApproveAlnComponent,
    ApprovalSummaryComponent,
    ApprovalSummaryConfirmationComponent,
    EditAlnComponent,
    EditAlnSummaryComponent,
    DeleteAlnComponent,
    DeleteAlnSummaryComponent,
    DeleteAlnConfirmationComponent,
    EditComponent,
    DeleteComponent,
    ApproveComponent,
    SubAlnComponent,
    SubAlnListComponent,
    CreateSubAlnComponent,
    AlnDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule],
  providers: [AuthGuard, AlnService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
