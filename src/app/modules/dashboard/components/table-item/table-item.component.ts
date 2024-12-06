import { Component, Input, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Funds } from '../../models/Funds';

@Component({
    selector: '[table-item]',
    templateUrl: './table-item.component.html',
    standalone: true,
    imports: [AngularSvgIconModule, CurrencyPipe],
})
export class TableItemComponent implements OnInit {
  @Input() fund = <Funds>{};

  constructor() {}

  ngOnInit(): void {}
}
