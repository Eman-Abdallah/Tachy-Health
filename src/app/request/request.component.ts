import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
   countries=['option1','option2']
   segments=['option1','option2']
requestForm=new FormGroup({
fName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-z]+$')]),
lName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-z]+$')]),
email:new FormControl('',[Validators.required,Validators.email]),
phone:new FormControl('',[Validators.required,Validators.minLength(10)]),
country:new FormControl([this.countries],[Validators.required]),
orgName:new FormControl('',[Validators.required]),
segment:new FormControl([this.segments],[Validators.required]),
profile:new FormControl(''),

},
)
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.requestForm.reset()
  }
}
