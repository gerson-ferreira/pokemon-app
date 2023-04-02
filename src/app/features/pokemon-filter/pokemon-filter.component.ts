import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pokemon-filter',
  templateUrl: './pokemon-filter.component.html',
  styleUrls: ['./pokemon-filter.component.css']
})
export class PokemonFilterComponent implements OnInit {
  filterInput: FormControl;

  constructor() {
    this.filterInput = new FormControl('');
  }

  ngOnInit(): void {
  }
}
