import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../data';
import { PersonInterface } from '../interfaces/personinterface';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent implements OnInit {
  public id: number = null;
  public persons: Array<PersonInterface> = new Data().persons;
  public person: PersonInterface;
  private route: ActivatedRoute;

  constructor(route: ActivatedRoute) {
    this.route = route;
  }

  ngOnInit() {
    this.route.params.subscribe(el => {
      this.id = el.id as number;
      this.person = this.persons[this.id - 1];
    });
  }
}
