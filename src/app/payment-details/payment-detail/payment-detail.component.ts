import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  paymentDetail: FormGroup = this.fb.group({
    CardOwnerName: [''],
    CardNumber:[''],
    ExpirationDate:[''],
    CVV:['']
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

}
