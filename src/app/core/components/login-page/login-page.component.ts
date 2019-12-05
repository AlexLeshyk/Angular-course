import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {

  @Output() close = new EventEmitter<void>();
  @Output() login = new EventEmitter<string>();
  @Input() loginValue: string = '';
  passwordValue: string = '111';

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    if (this.loginValue.trim() && this.passwordValue.trim()) {
      this.close.emit();
    }
  }

  onChange(event) {
    this.loginValue = event;
    this.login.emit(event);
  }
}
