import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {

  @Input() bookData: string;
  constructor() { }

  ngOnInit() {
  }

}
