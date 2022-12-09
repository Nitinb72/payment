import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'payment';

receiver_name: string=''
userInput(event: any){
  this.receiver_name = event.target.value;
  console.log(this.receiver_name)
}
payment_date: string=''
userInput1(event:any){
  this.payment_date = event.target.value;
  console.log(this.payment_date)
}

total_amount: string=''
userInput2(event:any){
  this.total_amount = event.target.value
}
}
 /* displayName='';
  displayDate='';
  displayAmt='';

  getName(name:any){
   console.warn(name.target.value)
    this.displayName=name.target.value
  }

  getDate(date:any){
    //console.log(date.target.value)
    this.displayDate=date.target.value
  }

  getAmt(amt:any){
    console.warn(amt.target.value)
    this.displayAmt=amt.target.value
  }
*/
