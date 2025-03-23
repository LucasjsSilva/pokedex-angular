import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() name: string = '';
  @Input() number: number = 0;
  @Input() photo: string = '';
  @Input() type: string = '';
  @Input() types: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  getClass(type: string): string {
    return `bg-[var(--color-${type.toLowerCase()})]`;
  }

  formatarId(id: number): string {
    return String(id).padStart(3, '0');
  }
}
