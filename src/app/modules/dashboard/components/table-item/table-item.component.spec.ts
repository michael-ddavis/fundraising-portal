import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItemComponent } from './table-item.component';

describe('NftAuctionsTableItemComponent', () => {
  let component: TableItemComponent;
  let fixture: ComponentFixture<TableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TableItemComponent],
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
