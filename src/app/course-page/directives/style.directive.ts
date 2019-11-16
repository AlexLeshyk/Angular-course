import { Directive, ElementRef, HostBinding, HostListener, Renderer2, Input } from '@angular/core';
import { CourseItem } from '../models/course-item.model';

@Directive({
  selector: '[app-course-item-style]'
})
export class StyleDirective {
  @Input('fresh-course') freshCourse: string = '';
  @Input('upcoming-course') upComCourse: string = '';
  @Input('hover-class') classOnHover: string = '';
  @Input('courseItemFromParent') courseItemP : CourseItem;

  @HostBinding('class.highlighted') highlightedClass = null;

  public freshCourseDate = Date.now() - 14*1000*60*60*24;
  public currentDate = Date.now();

  constructor( private elRef: ElementRef, private r: Renderer2) {
    // this.r.setStyle(this.elRef.nativeElement, 'borderColor', this.freshCourse);
    // this.r.addClass(this.elRef.nativeElement, this.freshCourse);
  }

  ngOnInit() {
    if ( this.courseItemP.dateObj < this.currentDate && this.courseItemP.dateObj >= this.freshCourseDate) {
      this.r.addClass(this.elRef.nativeElement, this.freshCourse );
    }
    if (this.courseItemP.dateObj > this.currentDate) {
      this.r.addClass(this.elRef.nativeElement, this.upComCourse );
    }
  }

  @HostListener('mouseenter') onHover() {
    this.highlightedClass = this.classOnHover;
  }

  @HostListener('mouseleave') onLeaveHover() {
    this.highlightedClass = null;
  }
}
