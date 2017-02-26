import { Component } from '@angular/core';
import {UserInfo} from './user-info';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:UserInfo={
    name: "",
    account : {email: '',
  confirm:''}
};
  onSubmit({value,valid}: {value:UserInfo, valid:boolean}){
    console.log(value, valid)
  }
}
