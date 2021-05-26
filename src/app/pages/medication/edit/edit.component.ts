import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MedicationService } from 'src/app/services/medication.service';
import { getMedicationForm } from 'src/app/shared/forms/medication.form';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMedication } from 'src/app/shared/models/medication.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  form: FormGroup | null = null;

  data: Observable<any> | undefined;
  id: Observable<string> | undefined;
  param = "";

  constructor(
    private ms: MedicationService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = route.params.pipe(map((p) => p.id));
  }

  ngOnInit(): void {
    this.initForm();
    this.id?.subscribe((r: string) => {
      this.param = r;
    });
    this.data = this.ms.getById('medications', this.param);
    this.data.subscribe((d: IMedication) => {
      this.form?.patchValue(d);
      console.log(d);
    });
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

  
  editDatabase(): void {
    if (this.form?.valid) {
      this.ms
        .update('medications', this.param, this.form?.value)
        .then((r) => {
          this.openSnackBar('Data succesfully updated!', 'Close');
          this.router.navigate(['list']);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
}
