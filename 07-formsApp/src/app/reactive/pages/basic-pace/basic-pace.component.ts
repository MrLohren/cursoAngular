import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-pace',
  templateUrl: './basic-pace.component.html',
  styleUrl: './basic-pace.component.css'
})
export class BasicPaceComponent implements OnInit {

  public myForm : FormGroup = this.fb.group({
    name      : ['', [ Validators.required, Validators.minLength(3) ]],
    price     : [0, [Validators.required, Validators.min(0)]],
    inStorage : [0, [Validators.required, Validators.min(0)]]
  })

  constructor (private fb : FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset({
      name      : 'hola',
      price     : 2,
      inStorage : 3
    })
  }

  isValidField ( field : string ) : boolean | null {
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched
  }

  getFieldError( field : string ) : string | null {

    if( !this.myForm.controls[field] ) return null

    const errors = this.myForm.controls[field].errors || {}

    for(const key of Object.keys(errors)) {
      switch(key) {
        case 'required':
          return 'Este campo es Requerido.'

        case 'minlength':
          return `Este campo requiere minimo ${errors['minlength'].requiredLength} letras`
      }
    }

    return null

  }

  onSave() : void {

    if(this.myForm.invalid) {

      this.myForm.markAllAsTouched()

      return
    }

    console.log(this.myForm.value)

    this.myForm.reset({
      price     : 10,
      inStorage : 0
    })
  }

}
