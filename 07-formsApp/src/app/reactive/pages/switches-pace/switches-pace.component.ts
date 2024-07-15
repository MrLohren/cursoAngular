import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-pace',
  templateUrl: './switches-pace.component.html',
  styleUrl: './switches-pace.component.css'
})
export class SwitchesPaceComponent implements OnInit{

  public myForm : FormGroup = this.fb.group({
    gender              : ['M', Validators.required],
    wantNotifications   : [true, Validators.required],
    termsAndConditions  : [false, Validators.requiredTrue],
  })

  public person = {
    gender : 'F',
    wantNotification : false,
  }

  constructor(private fb : FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset(this.person)
  }

  isValidField ( field : string ) : boolean | null {
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched
  }

  onSave() : void {
    this.myForm.markAllAsTouched()
    if(this.myForm.invalid) return

    const { termsAndConditions, ...newPerson } = this.myForm.value

    this.person = newPerson
  }

}
