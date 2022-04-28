import { Component, OnInit  } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  value = ' ';
  xFormControl = new FormControl('', [Validators.required,  Validators.pattern("^[0-9]*$"),
  Validators.minLength(8)]);
  yFormControl = new FormControl('', [Validators.required,  Validators.pattern("^[0-9]*$"),
  Validators.minLength(8)]);
  zFormControl = new FormControl('', [Validators.required,  Validators.pattern("^[0-9]*$"),
  Validators.minLength(8)]);
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
     if(this.xFormControl.value  == this.yFormControl.value && this.yFormControl.value  == this.zFormControl.value  ) {
      this.value= "Equilateral Triangle"
     }
    else if (this.xFormControl.value == this.yFormControl.value || this.yFormControl.value == this.zFormControl.value || this.zFormControl.value == this.xFormControl.value ){
      this.value= "Isosceles Triangle"
     }
    else{
      this.value= "Scalene Triangle"
     } 
  }
  onReset() {
     this.xFormControl.reset();
     this.yFormControl.reset();
     this.zFormControl.reset();
     this.value=""
 }
}
