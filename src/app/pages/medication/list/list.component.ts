import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MedicationService } from 'src/app/services/medication.service';
import { getMedicationForm } from 'src/app/shared/forms/medication.form';
import { IMedication } from 'src/app/shared/models/medication.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class listComponent implements OnInit, OnDestroy {
  list: Observable<IMedication[]> | null = null;

  constructor(private ms: MedicationService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.list = this.ms.get('medications');
  }

  ngOnDestroy(): void {
    this.list = null;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  deleteItem(item: { id: string }) {
    this.ms.delete('medications', item.id);
    this.openSnackBar('Data succesfully deleted!', 'Close');
  }
}
