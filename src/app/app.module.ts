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
import { SubAlnProgramComponent } from './sub-aln-program/sub-aln-program.component';
import { SubAlnGeneralComponent } from './sub-aln-general/sub-aln-general.component';
import { CreateSubAlnProgramComponent } from './create-sub-aln-program/create-sub-aln-program.component';
import { ProgramOfficeAlnComponent } from './program-office-aln/program-office-aln.component';
import { ReportingSubAlnComponent } from './reporting-sub-aln/reporting-sub-aln.component';
import { CostsharingSubAlnComponent } from './costsharing-sub-aln/costsharing-sub-aln.component';
import { LawSubAlnComponent } from './law-sub-aln/law-sub-aln.component';
import { SubAlnSummaryComponent } from './sub-aln-summary/sub-aln-summary.component';
import { SubAlnSummaryGeneralComponent } from './sub-aln-summary-general/sub-aln-summary-general.component';
import { SubAlnSummaryProgramOfficeComponent } from './sub-aln-summary-program-office/sub-aln-summary-program-office.component';
import { SubAlnSummaryReportingComponent } from './sub-aln-summary-reporting/sub-aln-summary-reporting.component';
import { SubAlnSummaryCostSharingComponent } from './sub-aln-summary-cost-sharing/sub-aln-summary-cost-sharing.component';
import { SubAlnSummaryLawComponent } from './sub-aln-summary-law/sub-aln-summary-law.component';
import { SubAlnConfirmComponent } from './sub-aln-confirm/sub-aln-confirm.component';
import { SubAlnConfirmGeneralComponent } from './sub-aln-confirm-general/sub-aln-confirm-general.component';
import { SubAlnConfirmProgramOfficeComponent } from './sub-aln-confirm-program-office/sub-aln-confirm-program-office.component';
import { SubAlnConfirmReportingComponent } from './sub-aln-confirm-reporting/sub-aln-confirm-reporting.component';
import { SubAlnConfirmCostSharingComponent } from './sub-aln-confirm-cost-sharing/sub-aln-confirm-cost-sharing.component';
import { SubAlnConfirmLawComponent } from './sub-aln-confirm-law/sub-aln-confirm-law.component';
import { AccoutingSubAlnComponent } from './accouting-sub-aln/accouting-sub-aln.component';
import { SubAlnSummaryAccountingComponent } from './sub-aln-summary-accounting/sub-aln-summary-accounting.component';
import { UpdateSubAlnComponent } from './update-sub-aln/update-sub-aln.component';
import { EditSubAlnComponent } from './edit-sub-aln/edit-sub-aln.component';
import { EditSubAlnProgramComponent } from './edit-sub-aln-program/edit-sub-aln-program.component';
import { EditSubAlnProgramGeneralComponent } from './edit-sub-aln-program-general/edit-sub-aln-program-general.component';
import { EditSubAlnProgramProgramOfficeComponent } from './edit-sub-aln-program-program-office/edit-sub-aln-program-program-office.component';
import { EditSubAlnProgramReportingComponent } from './edit-sub-aln-program-reporting/edit-sub-aln-program-reporting.component';
import { EditSubAlnProgramCostSharingComponent } from './edit-sub-aln-program-cost-sharing/edit-sub-aln-program-cost-sharing.component';
import { EditSubAlnProgramAccountingComponent } from './edit-sub-aln-program-accounting/edit-sub-aln-program-accounting.component';
import { EditSubAlnProgramLawComponent } from './edit-sub-aln-program-law/edit-sub-aln-program-law.component';

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
    SubAlnProgramComponent,
    SubAlnGeneralComponent,
    CreateSubAlnProgramComponent,
    ProgramOfficeAlnComponent,
    ReportingSubAlnComponent,
    CostsharingSubAlnComponent,
    LawSubAlnComponent,
    SubAlnSummaryComponent,
    SubAlnSummaryGeneralComponent,
    SubAlnSummaryProgramOfficeComponent,
    SubAlnSummaryReportingComponent,
    SubAlnSummaryCostSharingComponent,
    SubAlnSummaryLawComponent,
    SubAlnConfirmComponent,
    SubAlnConfirmGeneralComponent,
    SubAlnConfirmProgramOfficeComponent,
    SubAlnConfirmReportingComponent,
    SubAlnConfirmCostSharingComponent,
    SubAlnConfirmLawComponent,
    AccoutingSubAlnComponent,
    SubAlnSummaryAccountingComponent,
    UpdateSubAlnComponent,
    EditSubAlnComponent,
    EditSubAlnProgramComponent,
    EditSubAlnProgramGeneralComponent,
    EditSubAlnProgramProgramOfficeComponent,
    EditSubAlnProgramReportingComponent,
    EditSubAlnProgramCostSharingComponent,
    EditSubAlnProgramAccountingComponent,
    EditSubAlnProgramLawComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule],
  providers: [AuthGuard, AlnService, DatePipe, SubAlnProgramComponent, EditSubAlnComponent, UpdateSubAlnComponent, CreateSubAlnComponent, SubAlnSummaryComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
