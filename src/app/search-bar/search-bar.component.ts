import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() submitEvent = new EventEmitter<string>();
  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  onFormSubmitEvent(event:any){
    //The following prevents the browser from auto-form-submission
    //which passes the submitted value to the server and not to our app.
    event.preventDefault();
    this.submitEvent.emit(this.searchTerm);
  }

  // This is an alternative syntax for setting a value 
  // of 'inputValue' to the variable named 'searchTerm'.
  // onInput(inputValue: string){
  //   this.searchTerm = inputValue;
  // }


}
