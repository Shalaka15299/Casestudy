import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ResetPasswordDoneComponent } from './auth/reset-password-done/reset-password-done.component';

import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddPizzaComponent } from './admin/add-pizza/add-pizza.component';
import { EditPizzaComponent } from './admin/edit-pizza/edit-pizza.component';
import { ViewPizzaComponent } from './admin/view-pizza/view-pizza.component';
import { ViewUserComponent } from './admin/view-user/view-user.component';
import { SearchUserComponent } from './admin/search-user/search-user.component';
import { SearchOrderComponent } from './admin/search-order/search-order.component';
import { ViewFeedbackComponent } from './admin/view-feedback/view-feedback.component';
import { CartComponent } from './user/cart/cart.component';
import { ChangepasswordComponent } from './user/changepassword/changepassword.component';
import { EditprofileComponent } from './user/editprofile/editprofile.component';
import { EmptyprofileComponent } from './user/emptyprofile/emptyprofile.component';
import { EmptycartComponent } from './user/emptycart/emptycart.component';
import { GlowComponent } from './user/glow/glow.component';
import { MyprofileComponent } from './user/myprofile/myprofile.component';
import { AdminserviceService } from './admin/service/adminservice.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserhomeComponent } from './user/userhome/userhome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    ResetPasswordComponent,
    ResetPasswordDoneComponent,

    AdminHeaderComponent,
    AdminHomeComponent,
    AddPizzaComponent,
    EditPizzaComponent,
    ViewPizzaComponent,
    ViewUserComponent,
    SearchUserComponent,
    SearchOrderComponent,
    ViewFeedbackComponent,
    CartComponent,
    ChangepasswordComponent,
    EditprofileComponent,
    EmptyprofileComponent,
    EmptycartComponent,
    GlowComponent,
    MyprofileComponent,
    UserhomeComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AdminserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
