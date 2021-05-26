import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addComponent } from './add.component';

const routes: Routes = [
    {
        path: '',
        component: addComponent,
        data: { title: 'Add New' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class addRoutingModule { }
