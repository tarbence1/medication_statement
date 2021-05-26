import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { getIdentifierForm } from './identifier.form';

export function getMedicationForm(): FormGroup {
  return new FormGroup({
    basedOn: new FormControl(),
    partOf: new FormControl(),
    status: new FormControl('', Validators.required),
    statusReason: new FormControl(),
    category: new FormControl(),
    subject: new FormControl('', Validators.required),
    context: new FormControl(),
    effective: new FormGroup({
      startingTime: new FormControl(),
      endTime: new FormControl(),
    }),
    dateAsserted: new FormControl(),
    informationSource: new FormControl(),
    derivedFrom: new FormControl(),
    reasonCode: new FormControl(),
    reasonReference: new FormControl(),
    note: new FormControl(),
    dosage: new FormControl(),

    medication: new FormControl('', Validators.required),

    id: new FormControl(),
    identifier: new FormArray([
      getIdentifierForm('uid'),
      getIdentifierForm('email'),
    ]),
  });
}
