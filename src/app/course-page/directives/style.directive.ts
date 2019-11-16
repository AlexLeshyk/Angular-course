import { Directive, ElementRef, HostBinding, HostListener, Renderer2, Input } from '@angular/core';
import { CourseItem } from '../models/course-item.model';

@Directive({
  selector: '[app-style-border]'
})
export class StyleDirective {
  @Input('border-fresh') color: string = '';
  @Input('border-upcoming') color2: string = '';
  @Input('courseItemFromParent') courseItemP : CourseItem;

  // @HostBinding('style.borderColor') elBColor = null;

  public freshCourseDate = Date.now() - 14*1000*60*60*24;
  public currentDate = Date.now();

  constructor( private elRef: ElementRef, private r: Renderer2) {
    // this.r.setStyle(this.elRef.nativeElement, 'borderColor', this.color);
    // this.r.addClass(this.elRef.nativeElement, this.color);
  }

  ngOnInit() {
    if ( this.courseItemP.dateObj < this.currentDate && this.courseItemP.dateObj >= this.freshCourseDate) {
      this.r.addClass(this.elRef.nativeElement, this.color );
    }
    if (this.courseItemP.dateObj > this.currentDate) {
      this.r.addClass(this.elRef.nativeElement, this.color2 );
    }
  }

  @HostListener('mouseenter') onHover() {
    // this.r.setStyle(this.elRef.nativeElement, 'borderColor', this.color);
    // this.r.addClass(this.elRef.nativeElement, this.color);
    // this.elBColor = this.color;
  }

  @HostListener('mouseleave') onLeaveHover() {
    // this.elBColor = null;
    // this.r.setStyle(this.elRef.nativeElement, 'borderColor', null);
  }
}
