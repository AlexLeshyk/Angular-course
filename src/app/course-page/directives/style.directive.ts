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

  constructor( private elRef: ElementRef, private r: Renderer2) {
    // this.r.setStyle(this.elRef.nativeElement, 'borderColor', 'blue');
    // this.r.addClass(this.elRef.nativeElement, this.freshCourse);
  }

  ngOnInit() {
    if ( this.courseItem.dateObj < this.currentDate && this.courseItem.dateObj >= this.freshCourseDate) {
      this.r.addClass(this.elRef.nativeElement, 'fresh');
    }
    if (this.courseItem.dateObj > this.currentDate) {
      this.r.addClass(this.elRef.nativeElement, 'upcoming' );
    }
  }

  @HostListener('mouseenter') onHover() {
    this.highlightedClass = 'highlighted';
  }

  @HostListener('mouseleave') onLeaveHover() {
    this.highlightedClass = null;
  }
}
