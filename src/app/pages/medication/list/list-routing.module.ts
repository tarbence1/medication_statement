import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { listComponent } from './list.component';

const routes: Routes = [
    {
        path: '',
        component: listComponent,
        data: { title: 'List' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserProfileRoutingModule { }
