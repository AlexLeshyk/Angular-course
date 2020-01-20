import { Directive, ElementRef, HostBinding, HostListener, Renderer2, Input } from '@angular/core';
import { CourseItem } from '../models/course-item.model';

@Directive({
  selector: '[app-course-item-style]'
})
export class StyleDirective {
  @Input('courseItem') courseItem : CourseItem;

  @HostBinding('class.highlighted') highlightedClass = null;

  public currentDate = Date.now();
  public date = new Date();
  public freshCourseDate: number = this.date.setDate( this.date.getDate() - 14 );

  constructor( private ElementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if ( this.courseItem.date < this.currentDate && this.courseItem.date >= this.freshCourseDate) {
      this.renderer.addClass(this.ElementRef.nativeElement, 'fresh');
    }
    if (this.courseItem.date > this.currentDate) {
      this.renderer.addClass(this.ElementRef.nativeElement, 'upcoming' );
    }
  }

  @HostListener('mouseenter') onHover() {
    this.highlightedClass = 'highlighted';
  }

  @HostListener('mouseleave') onLeaveHover() {
    this.highlightedClass = null;
  }
}
