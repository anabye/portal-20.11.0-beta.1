import{o as y,p as oe}from"./chunk-XTKMJXR5.js";import{Ab as C,Fa as $,Ga as L,Ma as ee,Na as te,O as J,Q as X,U as V,Xa as ne,a as Z,nb as ie,sa as Y,v as F,zb as v}from"./chunk-PZXWGKHI.js";import"./chunk-ZXY2ZB5H.js";import{$a as I,Aa as E,Da as w,Eb as M,Fc as D,Gc as j,Hc as G,Ic as z,Jc as Q,La as n,Ma as t,N as T,Na as o,Q as O,Ra as N,Sa as h,U as c,V as u,Wc as U,Yc as K,_a as R,_c as W,ab as H,cb as e,eb as P,gb as S,hb as x,ib as b,ja as p,ka as A,ob as _,qa as g,ra as k}from"./chunk-GP3Z6ZCX.js";var ae=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","login","p-label","PO Login"]],template:function(l,i){l&1&&o(0,"po-login",0)},dependencies:[L],encapsulation:2})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Login Basic"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-login-basic/sample-po-login-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-login name="login" p-label="PO Login"> </po-login>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-login-basic/sample-po-login-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-login-basic',
  templateUrl: './sample-po-login-basic.component.html',
  standalone: false
})
export class SamplePoLoginBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-login-basic"),t(),o(23,"hr")),l&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),E("ngClass",_(4,Se,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,ae],encapsulation:2})}return a})();var pe=(()=>{class a{helperText;errorPattern;event;help;label;login;maxlength;minlength;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText="",this.errorPattern="",this.event="",this.label=void 0,this.login="",this.help=void 0,this.maxlength=void 0,this.minlength=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-labs"]],standalone:!1,decls:20,vars:35,consts:[["f","ngForm"],["name","login",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-label","p-loading","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-label-text-wrap","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-help","Ex.: Required field","p-label","Error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let m=N();n(0,"po-login",1),b("ngModelChange",function(r){return c(m),x(i.login,r)||(i.login=r),u(r)}),h("p-blur",function(){return c(m),u(i.changeEvent("p-blur"))})("p-change",function(){return c(m),u(i.changeEvent("p-change"))})("p-change-model",function(){return c(m),u(i.changeEvent("p-change-model"))})("p-enter",function(){return c(m),u(i.changeEvent("p-enter"))})("p-keydown",function(){return c(m),u(i.changeEvent("p-keydown"))}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),b("ngModelChange",function(r){return c(m),x(i.label,r)||(i.label=r),u(r)}),t(),n(9,"po-input",6),b("ngModelChange",function(r){return c(m),x(i.help,r)||(i.help=r),u(r)}),t(),n(10,"po-input",7),b("ngModelChange",function(r){return c(m),x(i.placeholder,r)||(i.placeholder=r),u(r)}),t(),n(11,"po-input",8),b("ngModelChange",function(r){return c(m),x(i.helperText,r)||(i.helperText=r),u(r)}),t(),n(12,"po-input",9),b("ngModelChange",function(r){return c(m),x(i.pattern,r)||(i.pattern=r),u(r)}),t(),n(13,"po-input",10),b("ngModelChange",function(r){return c(m),x(i.errorPattern,r)||(i.errorPattern=r),u(r)}),t(),n(14,"po-number",11),b("ngModelChange",function(r){return c(m),x(i.minlength,r)||(i.minlength=r),u(r)}),t(),n(15,"po-number",12),b("ngModelChange",function(r){return c(m),x(i.maxlength,r)||(i.maxlength=r),u(r)}),t(),n(16,"po-checkbox-group",13),b("ngModelChange",function(r){return c(m),x(i.properties,r)||(i.properties=r),u(r)}),t(),n(17,"po-radio-group",14),b("ngModelChange",function(r){return c(m),x(i.size,r)||(i.size=r),u(r)}),t(),n(18,"div",2)(19,"po-button",15),h("p-click",function(){return c(m),u(i.restore())}),t()()()}l&2&&(S("ngModel",i.login),E("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),p(3),E("p-value",i.login),p(),E("p-value",i.event),p(4),S("ngModel",i.label),p(),S("ngModel",i.help),p(),S("ngModel",i.placeholder),p(),S("ngModel",i.helperText),p(),S("ngModel",i.pattern),p(),S("ngModel",i.errorPattern),p(),S("ngModel",i.minlength),p(),S("ngModel",i.maxlength),p(),S("ngModel",i.properties),E("p-options",i.propertiesOptions),p(),S("ngModel",i.size),E("p-options",i.sizeOptions))},dependencies:[Q,D,j,z,G,F,Z,J,X,$,L,ee,ne],encapsulation:2})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Login Labs"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-login-labs/sample-po-login-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-login
  name="login"
  [(ngModel)]="login"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-label]="label"
  [p-loading]="properties?.includes('loading')"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-pattern]="pattern"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-login>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="login"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6 po-lg-4" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6 po-lg-4" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6 po-lg-4" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder">
  </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input
    class="po-md-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '[a-zA]{5}[Z0-9]{3}'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="errorPattern"
    [(ngModel)]="errorPattern"
    p-clean
    p-help="Ex.: Required field"
    p-label="Error pattern"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max length"> </po-number>

  <po-checkbox-group
    class="po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-login-labs/sample-po-login-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-login-labs',
  templateUrl: './sample-po-login-labs.component.html',
  standalone: false
})
export class SamplePoLoginLabsComponent implements OnInit {
  helperText: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  login: string;
  maxlength: number;
  minlength: number;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.errorPattern = '';
    this.event = '';

    this.label = undefined;
    this.login = '';

    this.help = undefined;

    this.maxlength = undefined;
    this.minlength = undefined;

    this.pattern = '';
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-login-labs"),t(),o(23,"hr")),l&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),E("ngClass",_(4,fe,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,pe],encapsulation:2})}return a})();var de=(()=>{class a{poNotification=O(Y);poModal;userLogin;userPassword;primaryAction={label:"Confirm",action:()=>{this.confirmAction()}};openModal(){this.poModal.open()}cleanForm(){this.userLogin="",this.userPassword=""}confirmAction(){this.userLogin&&this.userPassword&&(this.poNotification.success(`Discount successfully applied to user ${this.userLogin}!`),this.poModal.close(),this.cleanForm())}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-confirm"]],viewQuery:function(l,i){if(l&1&&R(V,7),l&2){let m;I(m=H())&&(i.poModal=m.first)}},standalone:!1,decls:7,vars:3,consts:[[1,"po-text-center"],[1,"po-font-subtitle"],["p-label","Confirm Identity",3,"p-click"],["p-hide-close","true","p-size","auto","p-title","Confirm your identity",3,"p-primary-action"],["name","userLogin","p-clean","","p-label","User","p-maxlength","40","p-placeholder","domain\\user","p-required","",3,"ngModelChange","ngModel"],["name","userPassword","p-clean","","p-label","Password","p-placeholder","Enter your password","p-required","",3,"ngModelChange","ngModel"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"div",1),e(2," To gain a 25% discount on your purchases, confirm your identity with your username and password! "),t(),n(3,"po-button",2),h("p-click",function(){return i.openModal()}),t()(),n(4,"po-modal",3)(5,"po-login",4),b("ngModelChange",function(s){return x(i.userLogin,s)||(i.userLogin=s),s}),t(),n(6,"po-password",5),b("ngModelChange",function(s){return x(i.userPassword,s)||(i.userPassword=s),s}),t()()),l&2&&(p(4),E("p-primary-action",i.primaryAction),p(),S("ngModel",i.userLogin),p(),S("ngModel",i.userPassword))},dependencies:[D,z,F,L,te,V],encapsulation:2})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-confirm-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Login - Confirm Identity"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-login-confirm/sample-po-login-confirm.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-text-center">
  <div class="po-font-subtitle">
    To gain a 25% discount on your purchases, confirm your identity with your username and password!
  </div>

  <po-button p-label="Confirm Identity" (p-click)="openModal()"> </po-button>
</div>

<po-modal p-hide-close="true" p-size="auto" p-title="Confirm your identity" [p-primary-action]="primaryAction">
  <po-login
    name="userLogin"
    [(ngModel)]="userLogin"
    p-clean
    p-label="User"
    p-maxlength="40"
    p-placeholder="domain\\user"
    p-required
  >
  </po-login>

  <po-password
    name="userPassword"
    [(ngModel)]="userPassword"
    p-clean
    p-label="Password"
    p-placeholder="Enter your password"
    p-required
  >
  </po-password>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-login-confirm/sample-po-login-confirm.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild, inject } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-login-confirm',
  templateUrl: './sample-po-login-confirm.component.html',
  standalone: false
})
export class SamplePoLoginConfirmComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  userLogin: string;
  userPassword: string;

  primaryAction: PoModalAction = {
    label: 'Confirm',
    action: () => {
      this.confirmAction();
    }
  };

  openModal() {
    this.poModal.open();
  }

  private cleanForm() {
    this.userLogin = '';
    this.userPassword = '';
  }

  private confirmAction() {
    if (this.userLogin && this.userPassword) {
      this.poNotification.success(\`Discount successfully applied to user \${this.userLogin}!\`);

      this.poModal.close();
      this.cleanForm();
    }
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-login-confirm"),t(),o(23,"hr")),l&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),P(" ",i.sampleCodeButtonLabel,""),p(),E("ngClass",_(4,ye,i.hideSampleCodeTabs)))},dependencies:[M,y,v,C,de],encapsulation:2})}return a})();var ce=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=g({type:a,selectors:[["sample-po-login-doc"]],standalone:!1,decls:1265,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoLoginComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),o(210,"br"),e(211," O "),n(212,"code"),e(213,"po-login"),t(),e(214," \xE9 um input espec\xEDfico para login. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),t()(),n(215,"div",8)(216,"h4",9),e(217,"Seletor"),t(),n(218,"pre",10),e(219,`<po-login
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-disabled="boolean"
    p-emit-all-changes="boolean"
    (p-enter)="EventEmitter"
    p-error-async-properties="ErrorAsyncProperties"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-mask="string"
    p-mask-format-model="boolean"
    p-mask-no-length-validation="boolean"
    p-maxlength="number"
    p-minlength="number"
    name="string"
    p-no-autocomplete="boolean"
    p-optional="boolean"
    p-pattern="string"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string"
    p-upper-case="boolean" >
</po-login>
`),t()(),n(220,"h4",11),e(221,"Propriedades"),t(),n(222,"table",12)(223,"tr",13)(224,"th",14),e(225,"Nome"),t(),n(226,"th",14),e(227,"Tipo"),t(),n(228,"th",14),e(229,"Padr\xE3o"),t(),n(230,"th",14),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),e(236," (p-additional-help)"),o(237,"br"),t()(),n(238,"div",19),e(239,"Deprecated"),t()(),n(240,"td",20)(241,"code",21),e(242,"EventEmitter"),t()(),n(243,"td",22),e(244,"-"),t(),n(245,"td",23)(246,"em")(247,"strong"),e(248,"(opcional)"),t()(),n(249,"p"),e(250,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(251,"blockquote")(252,"p"),e(253,"Essa propriedade est\xE1 "),n(254,"strong"),e(255,"depreciada"),t(),e(256," e ser\xE1 removida na vers\xE3o "),n(257,"code"),e(258,"23.x.x"),t(),e(259,". Recomendamos utilizar a propriedade "),n(260,"code"),e(261,"p-helper"),t(),e(262," que oferece mais recursos e flexibilidade."),t()()()(),n(263,"tr",15)(264,"td",16)(265,"div",24)(266,"span",25),e(267," p-additional-help-tooltip"),o(268,"br"),t()(),n(269,"div",19),e(270,"Deprecated"),t()(),n(271,"td",20)(272,"code",26),e(273,"string"),t()(),n(274,"td",22),e(275,"-"),t(),n(276,"td",23)(277,"em")(278,"strong"),e(279,"(opcional)"),t()(),n(280,"p"),e(281,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(282,"code"),e(283,"po-helper"),t(),e(284,`.
`),n(285,"strong"),e(286,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(287,"blockquote")(288,"p"),e(289,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(290,"blockquote")(291,"p"),e(292,"Essa propriedade est\xE1 "),n(293,"strong"),e(294,"depreciada"),t(),e(295," e ser\xE1 removida na vers\xE3o "),n(296,"code"),e(297,"23.x.x"),t(),e(298,". Recomendamos utilizar a propriedade "),n(299,"code"),e(300,"p-helper"),t(),e(301," que oferece mais recursos e flexibilidade."),t()()()(),n(302,"tr",15)(303,"td",16)(304,"div",24)(305,"span",25),e(306," p-append-in-body"),o(307,"br"),t()()(),n(308,"td",20)(309,"code",27),e(310,"boolean"),t()(),n(311,"td",22)(312,"p")(313,"code"),e(314,"false"),t()()(),n(315,"td",23)(316,"em")(317,"strong"),e(318,"(opcional)"),t()(),n(319,"p"),e(320,"Define que o popover ("),n(321,"code"),e(322,"p-helper"),t(),e(323," e/ou "),n(324,"code"),e(325,"p-error-limit"),t(),e(326,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(327,"blockquote")(328,"p"),e(329,"Quando utilizado com "),n(330,"code"),e(331,"p-helper"),t(),e(332,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(333,"tr",15)(334,"td",16)(335,"div",24)(336,"span",25),e(337," p-auto-focus"),o(338,"br"),t()()(),n(339,"td",20)(340,"code",27),e(341,"boolean"),t()(),n(342,"td",22)(343,"p")(344,"code"),e(345,"false"),t()()(),n(346,"td",23)(347,"em")(348,"strong"),e(349,"(opcional)"),t()(),n(350,"p"),e(351,"Aplica foco no elemento ao ser iniciado."),t(),n(352,"blockquote")(353,"p"),e(354,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(355,"tr",15)(356,"td",16)(357,"div",17)(358,"span",18),e(359," (p-blur)"),o(360,"br"),t()()(),n(361,"td",20)(362,"code",21),e(363,"EventEmitter"),t()(),n(364,"td",22),e(365,"-"),t(),n(366,"td",23)(367,"em")(368,"strong"),e(369,"(opcional)"),t()(),n(370,"p"),e(371,"Evento disparado ao sair do campo."),t()()(),n(372,"tr",15)(373,"td",16)(374,"div",17)(375,"span",18),e(376," (p-change)"),o(377,"br"),t()()(),n(378,"td",20)(379,"code",21),e(380,"EventEmitter"),t()(),n(381,"td",22),e(382,"-"),t(),n(383,"td",23)(384,"em")(385,"strong"),e(386,"(opcional)"),t()(),n(387,"p"),e(388,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(389,"tr",15)(390,"td",16)(391,"div",17)(392,"span",18),e(393," (p-change-model)"),o(394,"br"),t()()(),n(395,"td",20)(396,"code",21),e(397,"EventEmitter"),t()(),n(398,"td",22),e(399,"-"),t(),n(400,"td",23)(401,"em")(402,"strong"),e(403,"(opcional)"),t()(),n(404,"p"),e(405,"Evento disparado ao alterar valor do model."),t()()(),n(406,"tr",15)(407,"td",16)(408,"div",24)(409,"span",25),e(410,"p-clean"),o(411,"br"),t()()(),n(412,"td",20)(413,"code",27),e(414,"boolean"),t()(),n(415,"td",22),e(416,"-"),t(),n(417,"td",23)(418,"em")(419,"strong"),e(420,"(opcional)"),t()(),n(421,"p"),e(422,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(423,"tr",15)(424,"td",16)(425,"div",24)(426,"span",25),e(427,"p-disabled"),o(428,"br"),t()()(),n(429,"td",20)(430,"code",27),e(431,"boolean"),t()(),n(432,"td",22)(433,"p")(434,"code"),e(435,"false"),t()()(),n(436,"td",23)(437,"em")(438,"strong"),e(439,"(opcional)"),t()(),n(440,"p"),e(441,"Se verdadeiro, desabilita o campo."),t()()(),n(442,"tr",15)(443,"td",16)(444,"div",24)(445,"span",25),e(446," p-emit-all-changes"),o(447,"br"),t()()(),n(448,"td",20)(449,"code",27),e(450,"boolean"),t()(),n(451,"td",22)(452,"p")(453,"code"),e(454,"false"),t()()(),n(455,"td",23)(456,"em")(457,"strong"),e(458,"(opcional)"),t()(),n(459,"p"),e(460,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(461,"tr",15)(462,"td",16)(463,"div",17)(464,"span",18),e(465," (p-enter)"),o(466,"br"),t()()(),n(467,"td",20)(468,"code",21),e(469,"EventEmitter"),t()(),n(470,"td",22),e(471,"-"),t(),n(472,"td",23)(473,"em")(474,"strong"),e(475,"(opcional)"),t()(),n(476,"p"),e(477,"Evento disparado ao entrar do campo."),t()()(),n(478,"tr",15)(479,"td",16)(480,"div",24)(481,"span",25),e(482," p-error-async-properties"),o(483,"br"),t()()(),n(484,"td",20)(485,"code",28),e(486,"ErrorAsyncProperties"),t()(),n(487,"td",22),e(488,"-"),t(),n(489,"td",23)(490,"em")(491,"strong"),e(492,"(opcional)"),t()(),n(493,"p"),e(494,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(495,"code"),e(496,"Reactive Forms"),t(),e(497,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(498,"code"),e(499,"asyncValidators"),t(),e(500,"."),t()()(),n(501,"tr",15)(502,"td",16)(503,"div",24)(504,"span",25),e(505," p-error-limit"),o(506,"br"),t()()(),n(507,"td",20)(508,"code",27),e(509,"boolean"),t()(),n(510,"td",22)(511,"p")(512,"code"),e(513,"false"),t()()(),n(514,"td",23)(515,"em")(516,"strong"),e(517,"(opcional)"),t()(),n(518,"p"),e(519,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(520,"blockquote")(521,"p"),e(522,"Caso essa propriedade seja definida como "),n(523,"code"),e(524,"true"),t(),e(525,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(526,"tr",15)(527,"td",16)(528,"div",24)(529,"span",25),e(530," p-error-pattern"),o(531,"br"),t()()(),n(532,"td",20)(533,"code",26),e(534,"string"),t()(),n(535,"td",22),e(536,"-"),t(),n(537,"td",23)(538,"em")(539,"strong"),e(540,"(opcional)"),t()(),n(541,"p"),e(542,"Mensagem que ser\xE1 apresentada quando o "),n(543,"code"),e(544,"pattern"),t(),e(545," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(546,"blockquote")(547,"p"),e(548,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(549,"code"),e(550,"p-required-field-error-message"),t(),e(551," em conjunto."),t()()()(),n(552,"tr",15)(553,"td",16)(554,"div",24)(555,"span",25),e(556," p-help"),o(557,"br"),t()()(),n(558,"td",20)(559,"code",26),e(560,"string"),t()(),n(561,"td",22),e(562,"-"),t(),n(563,"td",23)(564,"em")(565,"strong"),e(566,"(opcional)"),t()(),n(567,"p"),e(568,"Texto de apoio do campo."),t()()(),n(569,"tr",15)(570,"td",16)(571,"div",24)(572,"span",25),e(573," p-icon"),o(574,"br"),t()()(),n(575,"td",20)(576,"code",26),e(577,"string "),t(),n(578,"code",29),e(579," TemplateRef<void>"),t()(),n(580,"td",22),e(581,"-"),t(),n(582,"td",23)(583,"em")(584,"strong"),e(585,"(opcional)"),t()(),n(586,"p"),e(587,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(588,"p"),e(589,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(590,"a",30),e(591,"Biblioteca de \xEDcones"),t(),e(592,". conforme exemplo abaixo:"),t(),n(593,"pre")(594,"code"),e(595,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(596,"p"),e(597,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(598,"em"),e(599,"Font Awesome"),t(),e(600,", da seguinte forma:"),t(),n(601,"pre")(602,"code"),e(603,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(604,"p"),e(605,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(606,"code"),e(607,"TemplateRef"),t(),e(608,", conforme exemplo abaixo:"),t(),n(609,"pre")(610,"code"),e(611,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(612,"blockquote")(613,"p"),e(614,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(615,"code"),e(616,"font-size: inherit"),t(),e(617," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(618,"tr",15)(619,"td",16)(620,"div",17)(621,"span",18),e(622," (p-keydown)"),o(623,"br"),t()()(),n(624,"td",20)(625,"code",21),e(626,"EventEmitter"),t()(),n(627,"td",22),e(628,"-"),t(),n(629,"td",23)(630,"em")(631,"strong"),e(632,"(opcional)"),t()(),n(633,"p"),e(634,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(635,"code"),e(636,"KeyboardEvent"),t(),e(637," com informa\xE7\xF5es sobre a tecla."),t()()(),n(638,"tr",15)(639,"td",16)(640,"div",24)(641,"span",25),e(642," p-label"),o(643,"br"),t()()(),n(644,"td",20)(645,"code",26),e(646,"string"),t()(),n(647,"td",22),e(648,"-"),t(),n(649,"td",23)(650,"em")(651,"strong"),e(652,"(opcional)"),t()(),n(653,"p"),e(654,"R\xF3tulo do campo."),t()()(),n(655,"tr",15)(656,"td",16)(657,"div",24)(658,"span",25),e(659," p-label-text-wrap"),o(660,"br"),t()()(),n(661,"td",20)(662,"code",27),e(663,"boolean"),t()(),n(664,"td",22)(665,"p")(666,"code"),e(667,"false"),t()()(),n(668,"td",23)(669,"em")(670,"strong"),e(671,"(opcional)"),t()(),n(672,"p"),e(673,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(674,"code"),e(675,"p-label"),t(),e(676,". Quando "),n(677,"code"),e(678,"p-label-text-wrap"),t(),e(679,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(680,"tr",15)(681,"td",16)(682,"div",24)(683,"span",25),e(684," p-loading"),o(685,"br"),t()()(),n(686,"td",20)(687,"code",27),e(688,"boolean"),t()(),n(689,"td",22)(690,"p")(691,"code"),e(692,"false"),t()()(),n(693,"td",23)(694,"em")(695,"strong"),e(696,"(opcional)"),t()(),n(697,"p"),e(698,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),n(699,"tr",15)(700,"td",16)(701,"div",24)(702,"span",25),e(703,"p-mask"),o(704,"br"),t()()(),n(705,"td",20)(706,"code",26),e(707,"string"),t()(),n(708,"td",22),e(709,"-"),t(),n(710,"td",23)(711,"em")(712,"strong"),e(713,"(opcional)"),t()(),n(714,"p"),e(715,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(716,"tr",15)(717,"td",16)(718,"div",24)(719,"span",25),e(720,"p-mask-format-model"),o(721,"br"),t()()(),n(722,"td",20)(723,"code",27),e(724,"boolean"),t()(),n(725,"td",22)(726,"p")(727,"code"),e(728,"false"),t()()(),n(729,"td",23)(730,"em")(731,"strong"),e(732,"(opcional)"),t()(),n(733,"p"),e(734,"Indica se o "),n(735,"code"),e(736,"model"),t(),e(737," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(738,"tr",15)(739,"td",16)(740,"div",24)(741,"span",25),e(742," p-mask-no-length-validation"),o(743,"br"),t()()(),n(744,"td",20)(745,"code",27),e(746,"boolean"),t()(),n(747,"td",22)(748,"p")(749,"code"),e(750,"false"),t()()(),n(751,"td",23)(752,"p"),e(753,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),n(754,"code"),e(755,"minLength"),t(),e(756,") e m\xE1ximo ("),n(757,"code"),e(758,"maxLength"),t(),e(759,") quando h\xE1 uma m\xE1scara ("),n(760,"code"),e(761,"p-mask"),t(),e(762,") definida."),t(),n(763,"ul")(764,"li"),e(765,"Quando "),n(766,"code"),e(767,"true"),t(),e(768,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(769,"li"),e(770,"Quando "),n(771,"code"),e(772,"false"),t(),e(773,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(774,"blockquote")(775,"p"),e(776,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),n(777,"code"),e(778,"p-mask-format-model"),t(),e(779,"."),t()(),n(780,"p"),e(781,"Exemplo:"),t(),n(782,"pre")(783,"code"),e(784,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(785,"ul")(786,"li"),e(787,"Entrada: "),n(788,"code"),e(789,"123-456"),t(),e(790," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(791,"code"),e(792,"-"),t(),e(793,"."),t()()()(),n(794,"tr",15)(795,"td",16)(796,"div",24)(797,"span",25),e(798," p-maxlength"),o(799,"br"),t()()(),n(800,"td",20)(801,"code",31),e(802,"number"),t()(),n(803,"td",22),e(804,"-"),t(),n(805,"td",23)(806,"em")(807,"strong"),e(808,"(opcional)"),t()(),n(809,"p"),e(810,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(811,"tr",15)(812,"td",16)(813,"div",24)(814,"span",25),e(815," p-minlength"),o(816,"br"),t()()(),n(817,"td",20)(818,"code",31),e(819,"number"),t()(),n(820,"td",22),e(821,"-"),t(),n(822,"td",23)(823,"em")(824,"strong"),e(825,"(opcional)"),t()(),n(826,"p"),e(827,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(828,"tr",15)(829,"td",16)(830,"div",24)(831,"span",25),e(832," name"),o(833,"br"),t()()(),n(834,"td",20)(835,"code",26),e(836,"string"),t()(),n(837,"td",22),e(838,"-"),t(),n(839,"td",23)(840,"p"),e(841,"Nome e identificador do campo."),t()()(),n(842,"tr",15)(843,"td",16)(844,"div",24)(845,"span",25),e(846," p-no-autocomplete"),o(847,"br"),t()()(),n(848,"td",20)(849,"code",27),e(850,"boolean"),t()(),n(851,"td",22)(852,"p")(853,"code"),e(854,"false"),t()()(),n(855,"td",23)(856,"em")(857,"strong"),e(858,"(opcional)"),t()(),n(859,"p"),e(860,"Define a propriedade nativa "),n(861,"code"),e(862,"autocomplete"),t(),e(863," do campo como "),n(864,"code"),e(865,"off"),t(),e(866,"."),t(),n(867,"blockquote")(868,"p"),e(869,"No componente "),n(870,"code"),e(871,"po-password"),t(),e(872," ser\xE1 definido como "),n(873,"code"),e(874,"new-password"),t(),e(875,"."),t()(),n(876,"p"),e(877,"Nos componentes "),n(878,"code"),e(879,"po-password"),t(),e(880," e "),n(881,"code"),e(882,"po-login"),t(),e(883," o valor padr\xE3o ser\xE1 "),n(884,"code"),e(885,"true"),t(),e(886,"."),t()()(),n(887,"tr",15)(888,"td",16)(889,"div",24)(890,"span",25),e(891," p-optional"),o(892,"br"),t()()(),n(893,"td",20)(894,"code",27),e(895,"boolean"),t()(),n(896,"td",22)(897,"p")(898,"code"),e(899,"false"),t()()(),n(900,"td",23)(901,"em")(902,"strong"),e(903,"(opcional)"),t()(),n(904,"p"),e(905,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(906,"blockquote")(907,"p"),e(908,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(909,"ul")(910,"li"),e(911,"O campo conter "),n(912,"code"),e(913,"p-required"),t(),e(914,";"),t(),n(915,"li"),e(916,"N\xE3o possuir "),n(917,"code"),e(918,"p-help"),t(),e(919," e/ou "),n(920,"code"),e(921,"p-label"),t(),e(922,"."),t()()()(),n(923,"tr",15)(924,"td",16)(925,"div",24)(926,"span",25),e(927,"p-pattern"),o(928,"br"),t()()(),n(929,"td",20)(930,"code",26),e(931,"string"),t()(),n(932,"td",22),e(933,"-"),t(),n(934,"td",23)(935,"em")(936,"strong"),e(937,"(opcional)"),t()(),n(938,"p"),e(939,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(940,"code"),e(941,"(p-mask)"),t(),e(942,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(943,"tr",15)(944,"td",16)(945,"div",24)(946,"span",25),e(947," p-placeholder"),o(948,"br"),t()()(),n(949,"td",20)(950,"code",26),e(951,"string"),t()(),n(952,"td",22)(953,"p"),e(954,"''"),t()(),n(955,"td",23)(956,"em")(957,"strong"),e(958,"(opcional)"),t()(),n(959,"p"),e(960,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(961,"tr",15)(962,"td",16)(963,"div",24)(964,"span",25),e(965," p-helper"),o(966,"br"),t()()(),n(967,"td",20)(968,"code",32),e(969,"PoHelperOptions "),t(),n(970,"code",26),e(971," string"),t()(),n(972,"td",22),e(973,"-"),t(),n(974,"td",23)(975,"em")(976,"strong"),e(977,"(opcional)"),t()(),n(978,"p"),e(979,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(980,"code"),e(981,"p-label"),t(),e(982," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(983,"code"),e(984,"p-label"),t(),e(985,"."),t(),n(986,"blockquote")(987,"p"),e(988,"Para mais informa\xE7\xF5es acesse: "),n(989,"a",33),e(990,"https://po-ui.io/documentation/po-helper"),t(),e(991,"."),t()(),n(992,"blockquote")(993,"p"),e(994,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(995,"code"),e(996,"p-additional-help-tooltip"),t(),e(997," e "),n(998,"code"),e(999,"p-additional-help"),t(),e(1e3,") ser\xE1 ignorado."),t()()()(),n(1001,"tr",15)(1002,"td",16)(1003,"div",24)(1004,"span",25),e(1005,"p-readonly"),o(1006,"br"),t()()(),n(1007,"td",20)(1008,"code",27),e(1009,"boolean"),t()(),n(1010,"td",22),e(1011,"-"),t(),n(1012,"td",23)(1013,"em")(1014,"strong"),e(1015,"(opcional)"),t()(),n(1016,"p"),e(1017,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(1018,"tr",15)(1019,"td",16)(1020,"div",24)(1021,"span",25),e(1022,"p-required"),o(1023,"br"),t()()(),n(1024,"td",20)(1025,"code",27),e(1026,"boolean"),t()(),n(1027,"td",22)(1028,"p")(1029,"code"),e(1030,"false"),t()()(),n(1031,"td",23)(1032,"em")(1033,"strong"),e(1034,"(opcional)"),t()(),n(1035,"p"),e(1036,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1037,"blockquote")(1038,"p"),e(1039,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1040,"code"),e(1041,"(p-disabled)"),t(),e(1042,"."),t()()()(),n(1043,"tr",15)(1044,"td",16)(1045,"div",24)(1046,"span",25),e(1047," p-required-field-error-message"),o(1048,"br"),t()()(),n(1049,"td",20)(1050,"code",27),e(1051,"boolean"),t()(),n(1052,"td",22)(1053,"p")(1054,"code"),e(1055,"false"),t()()(),n(1056,"td",23)(1057,"em")(1058,"strong"),e(1059,"(opcional)"),t()(),n(1060,"p"),e(1061,"Exibe a mensagem setada na propriedade "),n(1062,"code"),e(1063,"p-error-pattern"),t(),e(1064," se o campo estiver vazio e for requerido."),t(),n(1065,"blockquote")(1066,"p"),e(1067,"Necess\xE1rio que a propriedade "),n(1068,"code"),e(1069,"p-required"),t(),e(1070," esteja habilitada."),t()()()(),n(1071,"tr",15)(1072,"td",16)(1073,"div",24)(1074,"span",25),e(1075," p-show-required"),o(1076,"br"),t()()(),n(1077,"td",20)(1078,"code",27),e(1079,"boolean"),t()(),n(1080,"td",22),e(1081,"-"),t(),n(1082,"td",23)(1083,"p"),e(1084,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1085,"blockquote")(1086,"p"),e(1087,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1088,"ul")(1089,"li"),e(1090,"N\xE3o possuir "),n(1091,"code"),e(1092,"p-help"),t(),e(1093," e/ou "),n(1094,"code"),e(1095,"p-label"),t(),e(1096,"."),t()()()(),n(1097,"tr",15)(1098,"td",16)(1099,"div",24)(1100,"span",25),e(1101," p-size"),o(1102,"br"),t()()(),n(1103,"td",20)(1104,"code",26),e(1105,"string"),t()(),n(1106,"td",22)(1107,"p")(1108,"code"),e(1109,"medium"),t()()(),n(1110,"td",23)(1111,"em")(1112,"strong"),e(1113,"(opcional)"),t()(),n(1114,"p"),e(1115,"Define o tamanho do componente:"),t(),n(1116,"ul")(1117,"li")(1118,"code"),e(1119,"small"),t(),e(1120,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1121,"li")(1122,"code"),e(1123,"medium"),t(),e(1124,": altura do input como 44px."),t()(),n(1125,"blockquote")(1126,"p"),e(1127,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1128,"code"),e(1129,"medium"),t(),e(1130,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1131,"a",34),e(1132,"po-theme"),t(),e(1133,"."),t()()()(),n(1134,"tr",15)(1135,"td",16)(1136,"div",24)(1137,"span",25),e(1138," p-upper-case"),o(1139,"br"),t()()(),n(1140,"td",20)(1141,"code",27),e(1142,"boolean"),t()(),n(1143,"td",22),e(1144,"-"),t(),n(1145,"td",23)(1146,"p"),e(1147,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1148,"h3",11),e(1149,"M\xE9todos"),t(),n(1150,"table",35)(1151,"tr",15)(1152,"th",36)(1153,"div",24)(1154,"h4")(1155,"span",25),e(1156," showAdditionalHelp "),t()()()()(),n(1157,"tr",23)(1158,"td",23)(1159,"p"),e(1160,"M\xE9todo que exibe "),n(1161,"code"),e(1162,"p-helper"),t(),e(1163," ou executa a a\xE7\xE3o definida em "),n(1164,"code"),e(1165,"p-helper{eventOnClick}"),t(),e(1166," ou em "),n(1167,"code"),e(1168,"p-additionalHelp"),t(),e(1169,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1170,"code"),e(1171,"p-keydown"),t(),e(1172,"."),t(),n(1173,"blockquote")(1174,"p"),e(1175,"Exibe ou oculta o conte\xFAdo do componente "),n(1176,"code"),e(1177,"po-helper"),t(),e(1178," quando o componente estiver com foco."),t()(),n(1179,"pre")(1180,"code"),e(1181,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1182,"pre")(1183,"code"),e(1184,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1185,"br"),n(1186,"table",35)(1187,"tr",15)(1188,"th",36)(1189,"div",24)(1190,"h4")(1191,"span",25),e(1192," focus "),t()()()()(),n(1193,"tr",23)(1194,"td",23)(1195,"p"),e(1196,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1197,"p"),e(1198,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1199,"pre")(1200,"code"),e(1201,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1202,"br"),n(1203,"h3"),e(1204,"Interfaces"),t(),n(1205,"h4",37)(1206,"code",5),e(1207,"ErrorAsyncProperties"),t()(),n(1208,"div",2)(1209,"p"),e(1210,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1211,"h4",11),e(1212,"Propriedades"),t(),n(1213,"table",12)(1214,"tr",13)(1215,"th",14),e(1216,"Nome"),t(),n(1217,"th",14),e(1218,"Tipo"),t(),n(1219,"th",14),e(1220,"Descri\xE7\xE3o"),t()(),n(1221,"tr",15)(1222,"td",16)(1223,"div",24)(1224,"span",25),e(1225," errorAsync"),o(1226,"br"),t()()(),n(1227,"td",20)(1228,"code",38),e(1229,"(value) => Observable<boolean>"),t()(),n(1230,"td",23)(1231,"p"),e(1232,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1233,"code"),e(1234,"change"),t(),e(1235," ou "),n(1236,"code"),e(1237,"change-model"),t(),e(1238,", dependendo do valor da propriedade "),n(1239,"code"),e(1240,"triggerMode"),t(),e(1241,"."),t()()(),n(1242,"tr",15)(1243,"td",16)(1244,"div",24)(1245,"span",25),e(1246," triggerMode"),o(1247,"br"),t()()(),n(1248,"td",20)(1249,"code",39),e(1250,"'change' "),t(),n(1251,"code",40),e(1252," 'changeModel'"),t()(),n(1253,"td",23)(1254,"em")(1255,"strong"),e(1256,"(opcional)"),t()(),n(1257,"p"),e(1258,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1259,"code"),e(1260,"change"),t(),e(1261," ou "),n(1262,"code"),e(1263,"change-model"),t(),e(1264,"."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var ue=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(A(U),A(K))};static \u0275cmp=g({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Login",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),h("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-login-doc"),t(),n(4,"po-tab",3),h("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-login-basic-view")(6,"sample-po-login-labs-view")(7,"sample-po-login-confirm-view"),t()()()),l&2&&(E("p-actions",i.actions),p(2),E("p-active",i.activeTab==="doc"),p(2),E("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ie,v,C,re,me,se,ce],encapsulation:2})}return a})();var _e=[{path:"",component:ue}],Ee=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=k({type:a});static \u0275inj=T({imports:[W.forChild(_e),W]})}return a})();var tt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=k({type:a});static \u0275inj=T({imports:[oe,Ee]})}return a})();export{tt as DocPoLoginModule};
