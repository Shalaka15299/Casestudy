import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPizzaComponent } from './admin/add-pizza/add-pizza.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { EditPizzaComponent } from './admin/edit-pizza/edit-pizza.component';
import { SearchUserComponent } from './admin/search-user/search-user.component';
import { ViewPizzaComponent } from './admin/view-pizza/view-pizza.component';
import { ViewUserComponent } from './admin/view-user/view-user.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserhomeComponent } from './user/userhome/userhome.component';

const routes: Routes = [
  {path:"admin",redirectTo:"admin",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},

  {path:"admin-header",component:AdminHeaderComponent},
  {path:"admin",component:AdminHomeComponent},
  {path:"add", component:AddPizzaComponent},
  {path:"edit",component:EditPizzaComponent},
  {path:"viewpizza",component:ViewPizzaComponent},
  {path:"viewuser",component:ViewUserComponent},
  {path:"searchuser",component:SearchUserComponent},
  {path:"userhome",component:UserhomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
