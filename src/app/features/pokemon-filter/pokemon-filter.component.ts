import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-filter',
  templateUrl: './pokemon-filter.component.html',
  styleUrls: ['./pokemon-filter.component.css'],
})
export class PokemonFilterComponent implements OnInit {
  filter = '';
  @Output()
  filterChange = new EventEmitter<string>();

  onFilterChange(): void {
    this.filterChange.emit(this.filter);
  }

  ngOnInit(): void {}
}
