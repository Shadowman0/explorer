import {AfterContentInit, Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-dependency-graph',
  templateUrl: './dependency-graph.component.html',
  styleUrls: ['./dependency-graph.component.css']
})
export class DependencyGraphComponent implements OnInit, AfterContentInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    d3.select('p').style('color', 'red');
  }

  clicked(event: MouseEvent) {
    d3.select(event.target).append('circle')
      .attr('cx', event.offsetX)
      .attr('cy', event.offsetY)
      .attr('r', 5)
      .attr('fill', 'red');
  }
}
