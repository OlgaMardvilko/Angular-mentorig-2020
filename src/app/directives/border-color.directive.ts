import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import * as moment from 'moment';
import { DateColors } from '../models/date-colors.enum';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnInit {
  private isCreatedBeforeNow: boolean;
  private isCreatedAfterNow: boolean;
  private isCreatedAfterTwoWeeks: boolean;

  @Input('appBorderColor') creationDate: string;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    const dateNow = moment(Date.now()).startOf('day');
    const dateCreated = moment(this.creationDate).startOf('day');
    const twoWeekAgo = moment().add('-14', 'day');
    this.isCreatedBeforeNow = moment(dateCreated).isBefore(dateNow);
    this.isCreatedAfterNow = moment(dateCreated).isAfter(dateNow);
    this.isCreatedAfterTwoWeeks = moment(dateCreated).isSameOrAfter(twoWeekAgo);

    const colorName = this.getBorderColor();
    this.setColorToElement(colorName);
  }

  private getBorderColor(): string {
    let color = 'default';
    if (this.isCreatedBeforeNow && this.isCreatedAfterTwoWeeks) {
      color = 'green';
    } else if (this.isCreatedAfterNow) {
      color = 'blue';
    }
    return color;
  }

  private setColorToElement(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'border-bottom-color', DateColors[color]);
  }
}
