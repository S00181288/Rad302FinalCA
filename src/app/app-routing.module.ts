import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from './home/home.component';
import { SearchFeatuerComponent } from './search-feature/search-feature.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchFeatuerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
