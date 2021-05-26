import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MedicationService } from 'src/app/services/medication.service';
import { getMedicationForm } from 'src/app/shared/forms/medication.form';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-profile',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class addComponent implements OnInit {
  form: FormGroup | null = null;

  constructor(private ms: MedicationService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = getMedicationForm();
    const idFormArray = this.form.get('identifier') as FormArray;
    (idFormArray.get([1]) as FormGroup).controls.value.setValue(
      'bob@doctor.com'
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  status = [
    { id: 1, value: 'active' },
    { id: 2, value: 'completed' },
    { id: 3, value: 'entered-in-error' },
    { id: 4, value: 'intended' },
    { id: 5, value: 'stopped' },
    { id: 6, value: 'on-hold' },
    { id: 7, value: 'unknown' },
    { id: 8, value: 'not-taken' },
  ];

  category = [
    { id: 1, value: 'inpatient' },
    { id: 2, value: 'outpatient' },
    { id: 3, value: 'community' },
    { id: 4, value: 'patientspecified' },
  ];

  subject = [
    { id: 1, value: 'Bob' },
    { id: 2, value: 'John' },
    { id: 3, value: 'Jake' },
  ];


  addToDatabase(): void {
    if (this.form?.valid) {
      this.ms
        .add('medications', this.form?.value)
        .then((r) => {
          this.openSnackBar('Data succesfully inserted!', 'Close');
          this.form?.reset();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
}

