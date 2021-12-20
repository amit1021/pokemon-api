import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-details',
  templateUrl: './dialog-details.component.html',
  styleUrls: ['./dialog-details.component.css']
})
export class DialogDetailsComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data :any ) {

  }

  ngOnInit(): void {

  }

}
