import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-filter',
  templateUrl: './pokemon-filter.component.html',
  styleUrls: ['./pokemon-filter.component.scss']
})
export class PokemonFilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<string>();
  filterSubject = new Subject<string>();

  ngOnInit(): void {
    this.filterSubject.pipe(debounceTime(300)).subscribe(filter => {
      this.filterChange.emit(filter);
    });
  }

  filterChanged(event: any): void {
    this.filterSubject.next(event.target.value);
  }
}
