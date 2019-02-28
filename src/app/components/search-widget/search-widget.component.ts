import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.css']
})
export class SearchWidgetComponent implements OnInit {
  constructor() { }
  searchText: string = "";
  ngOnInit() {
  }

  filterCondition(post) {
    return post.title.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
}
