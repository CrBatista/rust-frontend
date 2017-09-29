import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { RustUtils } from '../../utils/RustUtils';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.less']
})
export class LoginContainerComponent implements OnInit {


  @ViewChild('usernameLabel')
  private usernameLabel: ElementRef;

  @ViewChild('passwordLabel')
  private passwordLabel: ElementRef;

  @ViewChild('wrapperSubmit')
  private wrapperSubmit: ElementRef;

  public username: string;
  public password: string;

  private _usernameFocused: boolean;
  private _passwordFocused: boolean;

  public textHover: string;
  public submitHover: string;

  public loginButtonStyle: any;
  public loginTextStyle: any;

  constructor() { }

  ngOnInit() {
    this._usernameFocused = false;
    this._passwordFocused = false;
  }

  /**
   * Will dinamically add style to input's label (Username and Password)
   *
   * @param {string} element
   * @memberof LoginContainerComponent
   */
  public onFocusEvent(element: string): void {
    if (element === 'username') {
      this._usernameFocused = true;
    } else {
      this._passwordFocused = true;
    }
  }

  /**
   * Will dinamically remove style to input's label (Username and Password)
   *
   * @param {string} element
   * @memberof LoginContainerComponent
   */
  public onBlurEvent(element: string): void {
    if (element === 'username') {
      this._usernameFocused = false;
    } else {
      this._passwordFocused = false;
    }
  }

  /**
   * This method will return the Label Styling
   *
   * @returns {string}
   * @memberof LoginContainerComponent
   */
  public setLabelStyles(elementHtml: string): any {
    const styleStart = {
      'transition': 'all 0.2s',
      'top': '0px',
      'font-size': '15px'
    };

    const styleEnd = {
      'transition': 'all 0.2s',
      'top': '12px',
      'font-size': '22px'
    };

    if (elementHtml === 'username' && (this._usernameFocused || !RustUtils.isNullOrBlank(this.username))) {
      return styleStart;
    } else if (elementHtml === 'password' && (this._passwordFocused || !RustUtils.isNullOrBlank(this.password))) {
      return styleStart;
    } else {
      return styleEnd;
    }
  }

  /**
   * Event launched on Submit Login Hover. Used for styling
   *
   * @param {Event} event
   * @memberof LoginContainerComponent
   */
  public hoverLoginButton(event: Event): void {
    this.textHover = (event.type === 'mouseover') ? 'submitTextHovered' : null;
    this.submitHover = (event.type === 'mouseover') ? 'submitInputHovered' : null;
  }

  /**
   * Event launched on Submit Login clicked. Used for styling and DoLogin
   *
   * @memberof LoginContainerComponent
   */
  public clickLoginButton(): void {
    if (this._formInputsAreCorrect()) {
      this.loginButtonStyle = 'loginButtonClicked';
      (<HTMLInputElement>document.getElementById('loginSubmitText')).value = '';
    }

    // This will be the OK subscription
    setTimeout(() => {
      this.loginButtonStyle = 'loginButtonOK';
    }, 2000);
  }

  /**
   * Will validate the fields introduced for Login.
   *
   * @private
   * @returns {boolean}
   * @memberof LoginContainerComponent
   */
  private _formInputsAreCorrect(): boolean {
    return true;
  }
}
