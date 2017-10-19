import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { Product } from "./product";
const routes: Routes = [
	{path: "", component: HomeComponent, pathMatch:"full"},
	{ path: "add", component: AddComponent, pathMatch: "full" },
	{ path: "list", component: ListComponent, pathMatch: "full" },
	{ path: "edit/:id", component: EditComponent, pathMatch: "full" },
	{ path: "delete/:id", component: DeleteComponent, pathMatch: "full" },
	{ path: "**", component: EditComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
