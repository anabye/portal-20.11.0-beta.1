import{o as P,p as te}from"./chunk-F4JLAWPH.js";import{Ab as v,Fa as J,Ma as X,Na as k,O as Y,Q as Z,Xa as $,_ as O,a as U,nb as ee,v as R,zb as f}from"./chunk-LS5JYUA4.js";import"./chunk-ZXY2ZB5H.js";import{Aa as u,Da as C,Eb as M,Fc as V,Gc as F,Hc as z,Ic as N,Jc as A,La as n,Ma as t,N as T,Na as o,Q as H,Ra as L,Sa as x,U as s,V as c,Wc as Q,Yc as K,_c as B,bb as j,cb as e,eb as y,gb as g,hb as b,ib as h,ja as d,ka as W,mb as G,ob as _,qa as S,ra as D}from"./chunk-GP3Z6ZCX.js";var ne=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","password","p-label","PO Password"]],template:function(l,i){l&1&&o(0,"po-password",0)},dependencies:[k],encapsulation:2})}return a})();var ue=a=>({"docs-sample-code-tabs":a}),oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password Basic"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-basic/sample-po-password-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-basic/sample-po-password-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-password-basic"),t(),o(23,"hr")),l&2&&(d(5),C("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,ue,i.hideSampleCodeTabs)))},dependencies:[M,P,f,v,ne],encapsulation:2})}return a})();var ae=(()=>{class a{helperText;errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"hidepasswordpeek",label:"Hide Password Peek"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText="",this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-labs"]],standalone:!1,decls:20,vars:36,consts:[["f","ngForm"],["name","password",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-hide-password-peek","p-label","p-loading","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let p=L();n(0,"po-password",1),h("ngModelChange",function(r){return s(p),b(i.password,r)||(i.password=r),c(r)}),x("p-blur",function(){return s(p),c(i.changeEvent("p-blur"))})("p-change",function(){return s(p),c(i.changeEvent("p-change"))})("p-change-model",function(){return s(p),c(i.changeEvent("p-change-model"))})("p-enter",function(){return s(p),c(i.changeEvent("p-enter"))})("p-keydown",function(){return s(p),c(i.changeEvent("p-keydown"))}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),h("ngModelChange",function(r){return s(p),b(i.label,r)||(i.label=r),c(r)}),t(),n(9,"po-input",6),h("ngModelChange",function(r){return s(p),b(i.help,r)||(i.help=r),c(r)}),t(),n(10,"po-input",7),h("ngModelChange",function(r){return s(p),b(i.helperText,r)||(i.helperText=r),c(r)}),t(),n(11,"po-input",8),h("ngModelChange",function(r){return s(p),b(i.placeholder,r)||(i.placeholder=r),c(r)}),t(),n(12,"po-input",9),h("ngModelChange",function(r){return s(p),b(i.errorPattern,r)||(i.errorPattern=r),c(r)}),t(),n(13,"po-input",10),h("ngModelChange",function(r){return s(p),b(i.pattern,r)||(i.pattern=r),c(r)}),t(),n(14,"po-number",11),h("ngModelChange",function(r){return s(p),b(i.minlength,r)||(i.minlength=r),c(r)}),t(),n(15,"po-number",12),h("ngModelChange",function(r){return s(p),b(i.maxlength,r)||(i.maxlength=r),c(r)}),t(),n(16,"po-checkbox-group",13),h("ngModelChange",function(r){return s(p),b(i.properties,r)||(i.properties=r),c(r)}),t(),n(17,"po-radio-group",14),h("ngModelChange",function(r){return s(p),b(i.size,r)||(i.size=r),c(r)}),t(),n(18,"div",2)(19,"po-button",15),x("p-click",function(){return s(p),c(i.restore())}),t()()()}l&2&&(g("ngModel",i.password),u("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-hide-password-peek",i.properties.includes("hidepasswordpeek"))("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap")),d(3),u("p-value",i.password),d(),u("p-value",i.event),d(4),g("ngModel",i.label),d(),g("ngModel",i.help),d(),g("ngModel",i.helperText),d(),g("ngModel",i.placeholder),d(),g("ngModel",i.errorPattern),d(),g("ngModel",i.pattern),d(),g("ngModel",i.minlength),d(),g("ngModel",i.maxlength),d(),g("ngModel",i.properties),u("p-options",i.propertiesOptions),d(),g("ngModel",i.size),u("p-options",i.sizeOptions))},dependencies:[A,V,F,N,z,R,U,Y,Z,J,X,k,$],encapsulation:2})}return a})();var be=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password Labs"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-labs/sample-po-password-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-password
  name="password"
  [(ngModel)]="password"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-hide-password-peek]="properties.includes('hidepasswordpeek')"
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
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
>
</po-password>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="password"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-input
    class="po-md-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '[a-zA]{5}[Z0-9]{3}'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-labs/sample-po-password-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-labs',
  templateUrl: './sample-po-password-labs.component.html',
  standalone: false
})
export class SamplePoPasswordLabsComponent implements OnInit {
  helperText: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  password: string;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'hidepasswordpeek', label: 'Hide Password Peek' },
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
    this.errorPattern = undefined;
    this.event = undefined;
    this.help = undefined;
    this.label = undefined;
    this.maxlength = undefined;
    this.minlength = undefined;
    this.password = undefined;
    this.pattern = '';
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-password-labs"),t(),o(23,"hr")),l&2&&(d(5),C("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,be,i.hideSampleCodeTabs)))},dependencies:[M,P,f,v,ae],encapsulation:2})}return a})();var le=(()=>{class a{poAlert=H(O);confirmNewPassword;currentPassword;errorPattern;help="Initial password = 123456";newPassword;password="123456";setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:"Password Reset",message:"Password saved successfully",ok:()=>this.reset()})):this.poAlert.alert({title:"Password Error",message:"Your (new passsword) is different of (confirm new password)",ok:()=>this.reset()})}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-reset"]],standalone:!1,features:[G([O])],decls:7,vars:7,consts:[["passwordForm","ngForm"],["name","currentPassword","p-clean","","p-error-pattern","invalid password","p-label","Current Password","p-mask","999999","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-help"],["name","newPassword","p-clean","","p-error-pattern","invalid password","p-label","New password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","confirmNewPassword","p-clean","","p-error-pattern","invalid password","p-label","Confirm New Password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],[1,"po-row"],["p-label","Save",1,"po-md-4",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let p=L();n(0,"form",null,0)(2,"po-password",1),h("ngModelChange",function(r){return s(p),b(i.currentPassword,r)||(i.currentPassword=r),c(r)}),t(),n(3,"po-password",2),h("ngModelChange",function(r){return s(p),b(i.newPassword,r)||(i.newPassword=r),c(r)}),t(),n(4,"po-password",3),h("ngModelChange",function(r){return s(p),b(i.confirmNewPassword,r)||(i.confirmNewPassword=r),c(r)}),t(),n(5,"div",4)(6,"po-button",5),x("p-click",function(){return s(p),c(i.setPassword())}),t()()()}if(l&2){let p=j(1);d(2),g("ngModel",i.currentPassword),u("p-help",i.help),d(),g("ngModel",i.newPassword),u("p-disabled",i.currentPassword!==i.password),d(),g("ngModel",i.confirmNewPassword),u("p-disabled",i.currentPassword!==i.password),d(2),u("p-disabled",p.invalid)}},dependencies:[A,V,F,N,z,R,k],encapsulation:2})}return a})();var we=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-reset-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password - Reset"),t(),n(4,"a",2),x("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-reset/sample-po-password-reset.component.html"),t(),n(13,"pre",7),e(14,`<form #passwordForm="ngForm">
  <po-password
    class="po-sm-12"
    name="currentPassword"
    [(ngModel)]="currentPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Current Password"
    p-mask="999999"
    p-required
    [p-help]="help"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="newPassword"
    [(ngModel)]="newPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="New password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="confirmNewPassword"
    [(ngModel)]="confirmNewPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Confirm New Password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Save" [p-disabled]="passwordForm.invalid" (p-click)="setPassword()">
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-reset/sample-po-password-reset.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-reset',
  templateUrl: './sample-po-password-reset.component.html',
  providers: [PoDialogService],
  standalone: false
})
export class SamplePoPasswordResetComponent {
  private poAlert = inject(PoDialogService);

  confirmNewPassword: string;
  currentPassword: string;
  errorPattern: string;
  help: string = 'Initial password = 123456';
  newPassword: string;
  password: string = '123456';

  setPassword() {
    if (this.confirmNewPassword === this.newPassword) {
      this.password = this.newPassword;
      this.help = \`Actual password = \${this.password}\`;
      this.currentPassword = undefined;
      this.newPassword = undefined;
      this.confirmNewPassword = undefined;

      this.poAlert.alert({
        title: 'Password Reset',
        message: 'Password saved successfully',
        ok: () => this.reset()
      });
    } else {
      this.poAlert.alert({
        title: 'Password Error',
        message: 'Your (new passsword) is different of (confirm new password)',
        ok: () => this.reset()
      });
    }
  }

  reset() {
    this.newPassword = undefined;
    this.confirmNewPassword = undefined;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-password-reset"),t(),o(23,"hr")),l&2&&(d(5),C("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel,""),d(),u("ngClass",_(4,we,i.hideSampleCodeTabs)))},dependencies:[M,P,f,v,le],encapsulation:2})}return a})();var pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-doc"]],standalone:!1,decls:1284,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoPasswordComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"strong"),e(131,"Hover"),t()(),o(132,"td")(133,"td"),t(),n(134,"tr")(135,"td")(136,"code"),e(137,"--color-hover"),t()(),n(138,"td"),e(139,"Cor principal no estado hover"),t(),n(140,"td")(141,"code"),e(142,"var(--color-brand-01-dark)"),t()()(),n(143,"tr")(144,"td")(145,"code"),e(146,"--background-hover"),t()(),n(147,"td"),e(148,"Cor de background no estado hover"),t(),n(149,"td")(150,"code"),e(151,"var(--color-brand-01-lightest)"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Focused"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-focused"),t()(),n(162,"td"),e(163,"Cor principal no estado de focus"),t(),n(164,"td")(165,"code"),e(166,"var(--color-action-default)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--outline-color-focused"),t()(),n(171,"td"),e(172,"Cor do outline do estado de focus"),t(),n(173,"td")(174,"code"),e(175,"var(--color-action-focus)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Disabled"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-disabled"),t()(),n(186,"td"),e(187,"Cor principal no estado disabled"),t(),n(188,"td")(189,"code"),e(190,"var(--color-neutral-light-30)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--background-disabled"),t()(),n(195,"td"),e(196,"Cor de background no estado disabled"),t(),n(197,"td")(198,"code"),e(199,"var(--color-neutral-light-20)"),t()()(),n(200,"tr")(201,"td")(202,"code"),e(203,"--text-color-disabled"),t()(),n(204,"td"),e(205,"Cor do texto no estado disabled"),t(),n(206,"td")(207,"code"),e(208,"var(--color-neutral-dark-70)"),t()()()()(),n(209,"p"),o(210,"br"),e(211," O "),n(212,"code"),e(213,"po-password"),t(),e(214," \xE9 um input espec\xEDfico para senhas. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),t()(),n(215,"div",8)(216,"h4",9),e(217,"Seletor"),t(),n(218,"pre",10),e(219,`<po-password
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
    p-hide-password-peek="boolean"
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
</po-password>
`),t()(),n(220,"h4",11),e(221,"Propriedades"),t(),n(222,"table",12)(223,"tr",13)(224,"th",14),e(225,"Nome"),t(),n(226,"th",14),e(227,"Tipo"),t(),n(228,"th",14),e(229,"Padr\xE3o"),t(),n(230,"th",14),e(231,"Descri\xE7\xE3o"),t()(),n(232,"tr",15)(233,"td",16)(234,"div",17)(235,"span",18),e(236," (p-additional-help)"),o(237,"br"),t()(),n(238,"div",19),e(239,"Deprecated"),t()(),n(240,"td",20)(241,"code",21),e(242,"EventEmitter"),t()(),n(243,"td",22),e(244,"-"),t(),n(245,"td",23)(246,"em")(247,"strong"),e(248,"(opcional)"),t()(),n(249,"p"),e(250,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(251,"blockquote")(252,"p"),e(253,"Essa propriedade est\xE1 "),n(254,"strong"),e(255,"depreciada"),t(),e(256," e ser\xE1 removida na vers\xE3o "),n(257,"code"),e(258,"23.x.x"),t(),e(259,". Recomendamos utilizar a propriedade "),n(260,"code"),e(261,"p-helper"),t(),e(262," que oferece mais recursos e flexibilidade."),t()()()(),n(263,"tr",15)(264,"td",16)(265,"div",24)(266,"span",25),e(267," p-additional-help-tooltip"),o(268,"br"),t()(),n(269,"div",19),e(270,"Deprecated"),t()(),n(271,"td",20)(272,"code",26),e(273,"string"),t()(),n(274,"td",22),e(275,"-"),t(),n(276,"td",23)(277,"em")(278,"strong"),e(279,"(opcional)"),t()(),n(280,"p"),e(281,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(282,"code"),e(283,"po-helper"),t(),e(284,`.
`),n(285,"strong"),e(286,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(287,"blockquote")(288,"p"),e(289,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(290,"blockquote")(291,"p"),e(292,"Essa propriedade est\xE1 "),n(293,"strong"),e(294,"depreciada"),t(),e(295," e ser\xE1 removida na vers\xE3o "),n(296,"code"),e(297,"23.x.x"),t(),e(298,". Recomendamos utilizar a propriedade "),n(299,"code"),e(300,"p-helper"),t(),e(301," que oferece mais recursos e flexibilidade."),t()()()(),n(302,"tr",15)(303,"td",16)(304,"div",24)(305,"span",25),e(306," p-append-in-body"),o(307,"br"),t()()(),n(308,"td",20)(309,"code",27),e(310,"boolean"),t()(),n(311,"td",22)(312,"p")(313,"code"),e(314,"false"),t()()(),n(315,"td",23)(316,"em")(317,"strong"),e(318,"(opcional)"),t()(),n(319,"p"),e(320,"Define que o popover ("),n(321,"code"),e(322,"p-helper"),t(),e(323," e/ou "),n(324,"code"),e(325,"p-error-limit"),t(),e(326,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(327,"blockquote")(328,"p"),e(329,"Quando utilizado com "),n(330,"code"),e(331,"p-helper"),t(),e(332,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(333,"tr",15)(334,"td",16)(335,"div",24)(336,"span",25),e(337," p-auto-focus"),o(338,"br"),t()()(),n(339,"td",20)(340,"code",27),e(341,"boolean"),t()(),n(342,"td",22)(343,"p")(344,"code"),e(345,"false"),t()()(),n(346,"td",23)(347,"em")(348,"strong"),e(349,"(opcional)"),t()(),n(350,"p"),e(351,"Aplica foco no elemento ao ser iniciado."),t(),n(352,"blockquote")(353,"p"),e(354,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(355,"tr",15)(356,"td",16)(357,"div",17)(358,"span",18),e(359," (p-blur)"),o(360,"br"),t()()(),n(361,"td",20)(362,"code",21),e(363,"EventEmitter"),t()(),n(364,"td",22),e(365,"-"),t(),n(366,"td",23)(367,"em")(368,"strong"),e(369,"(opcional)"),t()(),n(370,"p"),e(371,"Evento disparado ao sair do campo."),t()()(),n(372,"tr",15)(373,"td",16)(374,"div",17)(375,"span",18),e(376," (p-change)"),o(377,"br"),t()()(),n(378,"td",20)(379,"code",21),e(380,"EventEmitter"),t()(),n(381,"td",22),e(382,"-"),t(),n(383,"td",23)(384,"em")(385,"strong"),e(386,"(opcional)"),t()(),n(387,"p"),e(388,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(389,"tr",15)(390,"td",16)(391,"div",17)(392,"span",18),e(393," (p-change-model)"),o(394,"br"),t()()(),n(395,"td",20)(396,"code",21),e(397,"EventEmitter"),t()(),n(398,"td",22),e(399,"-"),t(),n(400,"td",23)(401,"em")(402,"strong"),e(403,"(opcional)"),t()(),n(404,"p"),e(405,"Evento disparado ao alterar valor do model."),t()()(),n(406,"tr",15)(407,"td",16)(408,"div",24)(409,"span",25),e(410,"p-clean"),o(411,"br"),t()()(),n(412,"td",20)(413,"code",27),e(414,"boolean"),t()(),n(415,"td",22),e(416,"-"),t(),n(417,"td",23)(418,"em")(419,"strong"),e(420,"(opcional)"),t()(),n(421,"p"),e(422,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(423,"tr",15)(424,"td",16)(425,"div",24)(426,"span",25),e(427,"p-disabled"),o(428,"br"),t()()(),n(429,"td",20)(430,"code",27),e(431,"boolean"),t()(),n(432,"td",22)(433,"p")(434,"code"),e(435,"false"),t()()(),n(436,"td",23)(437,"em")(438,"strong"),e(439,"(opcional)"),t()(),n(440,"p"),e(441,"Se verdadeiro, desabilita o campo."),t()()(),n(442,"tr",15)(443,"td",16)(444,"div",24)(445,"span",25),e(446," p-emit-all-changes"),o(447,"br"),t()()(),n(448,"td",20)(449,"code",27),e(450,"boolean"),t()(),n(451,"td",22)(452,"p")(453,"code"),e(454,"false"),t()()(),n(455,"td",23)(456,"em")(457,"strong"),e(458,"(opcional)"),t()(),n(459,"p"),e(460,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(461,"tr",15)(462,"td",16)(463,"div",17)(464,"span",18),e(465," (p-enter)"),o(466,"br"),t()()(),n(467,"td",20)(468,"code",21),e(469,"EventEmitter"),t()(),n(470,"td",22),e(471,"-"),t(),n(472,"td",23)(473,"em")(474,"strong"),e(475,"(opcional)"),t()(),n(476,"p"),e(477,"Evento disparado ao entrar do campo."),t()()(),n(478,"tr",15)(479,"td",16)(480,"div",24)(481,"span",25),e(482," p-error-async-properties"),o(483,"br"),t()()(),n(484,"td",20)(485,"code",28),e(486,"ErrorAsyncProperties"),t()(),n(487,"td",22),e(488,"-"),t(),n(489,"td",23)(490,"em")(491,"strong"),e(492,"(opcional)"),t()(),n(493,"p"),e(494,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(495,"code"),e(496,"Reactive Forms"),t(),e(497,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(498,"code"),e(499,"asyncValidators"),t(),e(500,"."),t()()(),n(501,"tr",15)(502,"td",16)(503,"div",24)(504,"span",25),e(505," p-error-limit"),o(506,"br"),t()()(),n(507,"td",20)(508,"code",27),e(509,"boolean"),t()(),n(510,"td",22)(511,"p")(512,"code"),e(513,"false"),t()()(),n(514,"td",23)(515,"em")(516,"strong"),e(517,"(opcional)"),t()(),n(518,"p"),e(519,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(520,"blockquote")(521,"p"),e(522,"Caso essa propriedade seja definida como "),n(523,"code"),e(524,"true"),t(),e(525,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(526,"tr",15)(527,"td",16)(528,"div",24)(529,"span",25),e(530," p-error-pattern"),o(531,"br"),t()()(),n(532,"td",20)(533,"code",26),e(534,"string"),t()(),n(535,"td",22),e(536,"-"),t(),n(537,"td",23)(538,"em")(539,"strong"),e(540,"(opcional)"),t()(),n(541,"p"),e(542,"Mensagem que ser\xE1 apresentada quando o "),n(543,"code"),e(544,"pattern"),t(),e(545," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(546,"blockquote")(547,"p"),e(548,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(549,"code"),e(550,"p-required-field-error-message"),t(),e(551," em conjunto."),t()()()(),n(552,"tr",15)(553,"td",16)(554,"div",24)(555,"span",25),e(556," p-help"),o(557,"br"),t()()(),n(558,"td",20)(559,"code",26),e(560,"string"),t()(),n(561,"td",22),e(562,"-"),t(),n(563,"td",23)(564,"em")(565,"strong"),e(566,"(opcional)"),t()(),n(567,"p"),e(568,"Texto de apoio do campo."),t()()(),n(569,"tr",15)(570,"td",16)(571,"div",24)(572,"span",25),e(573," p-hide-password-peek"),o(574,"br"),t()()(),n(575,"td",20)(576,"code",27),e(577,"boolean"),t()(),n(578,"td",22)(579,"p")(580,"code"),e(581,"false"),t()()(),n(582,"td",23)(583,"em")(584,"strong"),e(585,"(opcional)"),t()(),n(586,"p"),e(587,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),t()()(),n(588,"tr",15)(589,"td",16)(590,"div",24)(591,"span",25),e(592," p-icon"),o(593,"br"),t()()(),n(594,"td",20)(595,"code",26),e(596,"string "),t(),n(597,"code",29),e(598," TemplateRef<void>"),t()(),n(599,"td",22),e(600,"-"),t(),n(601,"td",23)(602,"em")(603,"strong"),e(604,"(opcional)"),t()(),n(605,"p"),e(606,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(607,"p"),e(608,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(609,"a",30),e(610,"Biblioteca de \xEDcones"),t(),e(611,". conforme exemplo abaixo:"),t(),n(612,"pre")(613,"code"),e(614,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(615,"p"),e(616,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(617,"em"),e(618,"Font Awesome"),t(),e(619,", da seguinte forma:"),t(),n(620,"pre")(621,"code"),e(622,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(623,"p"),e(624,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(625,"code"),e(626,"TemplateRef"),t(),e(627,", conforme exemplo abaixo:"),t(),n(628,"pre")(629,"code"),e(630,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(631,"blockquote")(632,"p"),e(633,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(634,"code"),e(635,"font-size: inherit"),t(),e(636," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(637,"tr",15)(638,"td",16)(639,"div",17)(640,"span",18),e(641," (p-keydown)"),o(642,"br"),t()()(),n(643,"td",20)(644,"code",21),e(645,"EventEmitter"),t()(),n(646,"td",22),e(647,"-"),t(),n(648,"td",23)(649,"em")(650,"strong"),e(651,"(opcional)"),t()(),n(652,"p"),e(653,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(654,"code"),e(655,"KeyboardEvent"),t(),e(656," com informa\xE7\xF5es sobre a tecla."),t()()(),n(657,"tr",15)(658,"td",16)(659,"div",24)(660,"span",25),e(661," p-label"),o(662,"br"),t()()(),n(663,"td",20)(664,"code",26),e(665,"string"),t()(),n(666,"td",22),e(667,"-"),t(),n(668,"td",23)(669,"em")(670,"strong"),e(671,"(opcional)"),t()(),n(672,"p"),e(673,"R\xF3tulo do campo."),t()()(),n(674,"tr",15)(675,"td",16)(676,"div",24)(677,"span",25),e(678," p-label-text-wrap"),o(679,"br"),t()()(),n(680,"td",20)(681,"code",27),e(682,"boolean"),t()(),n(683,"td",22)(684,"p")(685,"code"),e(686,"false"),t()()(),n(687,"td",23)(688,"em")(689,"strong"),e(690,"(opcional)"),t()(),n(691,"p"),e(692,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(693,"code"),e(694,"p-label"),t(),e(695,". Quando "),n(696,"code"),e(697,"p-label-text-wrap"),t(),e(698,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(699,"tr",15)(700,"td",16)(701,"div",24)(702,"span",25),e(703," p-loading"),o(704,"br"),t()()(),n(705,"td",20)(706,"code",27),e(707,"boolean"),t()(),n(708,"td",22)(709,"p")(710,"code"),e(711,"false"),t()()(),n(712,"td",23)(713,"em")(714,"strong"),e(715,"(opcional)"),t()(),n(716,"p"),e(717,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),n(718,"tr",15)(719,"td",16)(720,"div",24)(721,"span",25),e(722,"p-mask"),o(723,"br"),t()()(),n(724,"td",20)(725,"code",26),e(726,"string"),t()(),n(727,"td",22),e(728,"-"),t(),n(729,"td",23)(730,"em")(731,"strong"),e(732,"(opcional)"),t()(),n(733,"p"),e(734,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(735,"tr",15)(736,"td",16)(737,"div",24)(738,"span",25),e(739,"p-mask-format-model"),o(740,"br"),t()()(),n(741,"td",20)(742,"code",27),e(743,"boolean"),t()(),n(744,"td",22)(745,"p")(746,"code"),e(747,"false"),t()()(),n(748,"td",23)(749,"em")(750,"strong"),e(751,"(opcional)"),t()(),n(752,"p"),e(753,"Indica se o "),n(754,"code"),e(755,"model"),t(),e(756," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(757,"tr",15)(758,"td",16)(759,"div",24)(760,"span",25),e(761," p-mask-no-length-validation"),o(762,"br"),t()()(),n(763,"td",20)(764,"code",27),e(765,"boolean"),t()(),n(766,"td",22)(767,"p")(768,"code"),e(769,"false"),t()()(),n(770,"td",23)(771,"p"),e(772,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),n(773,"code"),e(774,"minLength"),t(),e(775,") e m\xE1ximo ("),n(776,"code"),e(777,"maxLength"),t(),e(778,") quando h\xE1 uma m\xE1scara ("),n(779,"code"),e(780,"p-mask"),t(),e(781,") definida."),t(),n(782,"ul")(783,"li"),e(784,"Quando "),n(785,"code"),e(786,"true"),t(),e(787,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(788,"li"),e(789,"Quando "),n(790,"code"),e(791,"false"),t(),e(792,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(793,"blockquote")(794,"p"),e(795,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),n(796,"code"),e(797,"p-mask-format-model"),t(),e(798,"."),t()(),n(799,"p"),e(800,"Exemplo:"),t(),n(801,"pre")(802,"code"),e(803,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(804,"ul")(805,"li"),e(806,"Entrada: "),n(807,"code"),e(808,"123-456"),t(),e(809," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(810,"code"),e(811,"-"),t(),e(812,"."),t()()()(),n(813,"tr",15)(814,"td",16)(815,"div",24)(816,"span",25),e(817," p-maxlength"),o(818,"br"),t()()(),n(819,"td",20)(820,"code",31),e(821,"number"),t()(),n(822,"td",22),e(823,"-"),t(),n(824,"td",23)(825,"em")(826,"strong"),e(827,"(opcional)"),t()(),n(828,"p"),e(829,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(830,"tr",15)(831,"td",16)(832,"div",24)(833,"span",25),e(834," p-minlength"),o(835,"br"),t()()(),n(836,"td",20)(837,"code",31),e(838,"number"),t()(),n(839,"td",22),e(840,"-"),t(),n(841,"td",23)(842,"em")(843,"strong"),e(844,"(opcional)"),t()(),n(845,"p"),e(846,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(847,"tr",15)(848,"td",16)(849,"div",24)(850,"span",25),e(851," name"),o(852,"br"),t()()(),n(853,"td",20)(854,"code",26),e(855,"string"),t()(),n(856,"td",22),e(857,"-"),t(),n(858,"td",23)(859,"p"),e(860,"Nome e identificador do campo."),t()()(),n(861,"tr",15)(862,"td",16)(863,"div",24)(864,"span",25),e(865," p-no-autocomplete"),o(866,"br"),t()()(),n(867,"td",20)(868,"code",27),e(869,"boolean"),t()(),n(870,"td",22)(871,"p")(872,"code"),e(873,"false"),t()()(),n(874,"td",23)(875,"em")(876,"strong"),e(877,"(opcional)"),t()(),n(878,"p"),e(879,"Define a propriedade nativa "),n(880,"code"),e(881,"autocomplete"),t(),e(882," do campo como "),n(883,"code"),e(884,"off"),t(),e(885,"."),t(),n(886,"blockquote")(887,"p"),e(888,"No componente "),n(889,"code"),e(890,"po-password"),t(),e(891," ser\xE1 definido como "),n(892,"code"),e(893,"new-password"),t(),e(894,"."),t()(),n(895,"p"),e(896,"Nos componentes "),n(897,"code"),e(898,"po-password"),t(),e(899," e "),n(900,"code"),e(901,"po-login"),t(),e(902," o valor padr\xE3o ser\xE1 "),n(903,"code"),e(904,"true"),t(),e(905,"."),t()()(),n(906,"tr",15)(907,"td",16)(908,"div",24)(909,"span",25),e(910," p-optional"),o(911,"br"),t()()(),n(912,"td",20)(913,"code",27),e(914,"boolean"),t()(),n(915,"td",22)(916,"p")(917,"code"),e(918,"false"),t()()(),n(919,"td",23)(920,"em")(921,"strong"),e(922,"(opcional)"),t()(),n(923,"p"),e(924,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(925,"blockquote")(926,"p"),e(927,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(928,"ul")(929,"li"),e(930,"O campo conter "),n(931,"code"),e(932,"p-required"),t(),e(933,";"),t(),n(934,"li"),e(935,"N\xE3o possuir "),n(936,"code"),e(937,"p-help"),t(),e(938," e/ou "),n(939,"code"),e(940,"p-label"),t(),e(941,"."),t()()()(),n(942,"tr",15)(943,"td",16)(944,"div",24)(945,"span",25),e(946,"p-pattern"),o(947,"br"),t()()(),n(948,"td",20)(949,"code",26),e(950,"string"),t()(),n(951,"td",22),e(952,"-"),t(),n(953,"td",23)(954,"em")(955,"strong"),e(956,"(opcional)"),t()(),n(957,"p"),e(958,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(959,"code"),e(960,"(p-mask)"),t(),e(961,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(962,"tr",15)(963,"td",16)(964,"div",24)(965,"span",25),e(966," p-placeholder"),o(967,"br"),t()()(),n(968,"td",20)(969,"code",26),e(970,"string"),t()(),n(971,"td",22)(972,"p"),e(973,"''"),t()(),n(974,"td",23)(975,"em")(976,"strong"),e(977,"(opcional)"),t()(),n(978,"p"),e(979,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(980,"tr",15)(981,"td",16)(982,"div",24)(983,"span",25),e(984," p-helper"),o(985,"br"),t()()(),n(986,"td",20)(987,"code",32),e(988,"PoHelperOptions "),t(),n(989,"code",26),e(990," string"),t()(),n(991,"td",22),e(992,"-"),t(),n(993,"td",23)(994,"em")(995,"strong"),e(996,"(opcional)"),t()(),n(997,"p"),e(998,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(999,"code"),e(1e3,"p-label"),t(),e(1001," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(1002,"code"),e(1003,"p-label"),t(),e(1004,"."),t(),n(1005,"blockquote")(1006,"p"),e(1007,"Para mais informa\xE7\xF5es acesse: "),n(1008,"a",33),e(1009,"https://po-ui.io/documentation/po-helper"),t(),e(1010,"."),t()(),n(1011,"blockquote")(1012,"p"),e(1013,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(1014,"code"),e(1015,"p-additional-help-tooltip"),t(),e(1016," e "),n(1017,"code"),e(1018,"p-additional-help"),t(),e(1019,") ser\xE1 ignorado."),t()()()(),n(1020,"tr",15)(1021,"td",16)(1022,"div",24)(1023,"span",25),e(1024,"p-readonly"),o(1025,"br"),t()()(),n(1026,"td",20)(1027,"code",27),e(1028,"boolean"),t()(),n(1029,"td",22),e(1030,"-"),t(),n(1031,"td",23)(1032,"em")(1033,"strong"),e(1034,"(opcional)"),t()(),n(1035,"p"),e(1036,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(1037,"tr",15)(1038,"td",16)(1039,"div",24)(1040,"span",25),e(1041,"p-required"),o(1042,"br"),t()()(),n(1043,"td",20)(1044,"code",27),e(1045,"boolean"),t()(),n(1046,"td",22)(1047,"p")(1048,"code"),e(1049,"false"),t()()(),n(1050,"td",23)(1051,"em")(1052,"strong"),e(1053,"(opcional)"),t()(),n(1054,"p"),e(1055,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1056,"blockquote")(1057,"p"),e(1058,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1059,"code"),e(1060,"(p-disabled)"),t(),e(1061,"."),t()()()(),n(1062,"tr",15)(1063,"td",16)(1064,"div",24)(1065,"span",25),e(1066," p-required-field-error-message"),o(1067,"br"),t()()(),n(1068,"td",20)(1069,"code",27),e(1070,"boolean"),t()(),n(1071,"td",22)(1072,"p")(1073,"code"),e(1074,"false"),t()()(),n(1075,"td",23)(1076,"em")(1077,"strong"),e(1078,"(opcional)"),t()(),n(1079,"p"),e(1080,"Exibe a mensagem setada na propriedade "),n(1081,"code"),e(1082,"p-error-pattern"),t(),e(1083," se o campo estiver vazio e for requerido."),t(),n(1084,"blockquote")(1085,"p"),e(1086,"Necess\xE1rio que a propriedade "),n(1087,"code"),e(1088,"p-required"),t(),e(1089," esteja habilitada."),t()()()(),n(1090,"tr",15)(1091,"td",16)(1092,"div",24)(1093,"span",25),e(1094," p-show-required"),o(1095,"br"),t()()(),n(1096,"td",20)(1097,"code",27),e(1098,"boolean"),t()(),n(1099,"td",22),e(1100,"-"),t(),n(1101,"td",23)(1102,"p"),e(1103,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1104,"blockquote")(1105,"p"),e(1106,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1107,"ul")(1108,"li"),e(1109,"N\xE3o possuir "),n(1110,"code"),e(1111,"p-help"),t(),e(1112," e/ou "),n(1113,"code"),e(1114,"p-label"),t(),e(1115,"."),t()()()(),n(1116,"tr",15)(1117,"td",16)(1118,"div",24)(1119,"span",25),e(1120," p-size"),o(1121,"br"),t()()(),n(1122,"td",20)(1123,"code",26),e(1124,"string"),t()(),n(1125,"td",22)(1126,"p")(1127,"code"),e(1128,"medium"),t()()(),n(1129,"td",23)(1130,"em")(1131,"strong"),e(1132,"(opcional)"),t()(),n(1133,"p"),e(1134,"Define o tamanho do componente:"),t(),n(1135,"ul")(1136,"li")(1137,"code"),e(1138,"small"),t(),e(1139,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1140,"li")(1141,"code"),e(1142,"medium"),t(),e(1143,": altura do input como 44px."),t()(),n(1144,"blockquote")(1145,"p"),e(1146,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1147,"code"),e(1148,"medium"),t(),e(1149,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1150,"a",34),e(1151,"po-theme"),t(),e(1152,"."),t()()()(),n(1153,"tr",15)(1154,"td",16)(1155,"div",24)(1156,"span",25),e(1157," p-upper-case"),o(1158,"br"),t()()(),n(1159,"td",20)(1160,"code",27),e(1161,"boolean"),t()(),n(1162,"td",22),e(1163,"-"),t(),n(1164,"td",23)(1165,"p"),e(1166,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1167,"h3",11),e(1168,"M\xE9todos"),t(),n(1169,"table",35)(1170,"tr",15)(1171,"th",36)(1172,"div",24)(1173,"h4")(1174,"span",25),e(1175," showAdditionalHelp "),t()()()()(),n(1176,"tr",23)(1177,"td",23)(1178,"p"),e(1179,"M\xE9todo que exibe "),n(1180,"code"),e(1181,"p-helper"),t(),e(1182," ou executa a a\xE7\xE3o definida em "),n(1183,"code"),e(1184,"p-helper{eventOnClick}"),t(),e(1185," ou em "),n(1186,"code"),e(1187,"p-additionalHelp"),t(),e(1188,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1189,"code"),e(1190,"p-keydown"),t(),e(1191,"."),t(),n(1192,"blockquote")(1193,"p"),e(1194,"Exibe ou oculta o conte\xFAdo do componente "),n(1195,"code"),e(1196,"po-helper"),t(),e(1197," quando o componente estiver com foco."),t()(),n(1198,"pre")(1199,"code"),e(1200,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1201,"pre")(1202,"code"),e(1203,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1204,"br"),n(1205,"table",35)(1206,"tr",15)(1207,"th",36)(1208,"div",24)(1209,"h4")(1210,"span",25),e(1211," focus "),t()()()()(),n(1212,"tr",23)(1213,"td",23)(1214,"p"),e(1215,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1216,"p"),e(1217,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1218,"pre")(1219,"code"),e(1220,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1221,"br"),n(1222,"h3"),e(1223,"Interfaces"),t(),n(1224,"h4",37)(1225,"code",5),e(1226,"ErrorAsyncProperties"),t()(),n(1227,"div",2)(1228,"p"),e(1229,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1230,"h4",11),e(1231,"Propriedades"),t(),n(1232,"table",12)(1233,"tr",13)(1234,"th",14),e(1235,"Nome"),t(),n(1236,"th",14),e(1237,"Tipo"),t(),n(1238,"th",14),e(1239,"Descri\xE7\xE3o"),t()(),n(1240,"tr",15)(1241,"td",16)(1242,"div",24)(1243,"span",25),e(1244," errorAsync"),o(1245,"br"),t()()(),n(1246,"td",20)(1247,"code",38),e(1248,"(value) => Observable<boolean>"),t()(),n(1249,"td",23)(1250,"p"),e(1251,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1252,"code"),e(1253,"change"),t(),e(1254," ou "),n(1255,"code"),e(1256,"change-model"),t(),e(1257,", dependendo do valor da propriedade "),n(1258,"code"),e(1259,"triggerMode"),t(),e(1260,"."),t()()(),n(1261,"tr",15)(1262,"td",16)(1263,"div",24)(1264,"span",25),e(1265," triggerMode"),o(1266,"br"),t()()(),n(1267,"td",20)(1268,"code",39),e(1269,"'change' "),t(),n(1270,"code",40),e(1271," 'changeModel'"),t()(),n(1272,"td",23)(1273,"em")(1274,"strong"),e(1275,"(opcional)"),t()(),n(1276,"p"),e(1277,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1278,"code"),e(1279,"change"),t(),e(1280," ou "),n(1281,"code"),e(1282,"change-model"),t(),e(1283,"."),t()()()()())},dependencies:[P],encapsulation:2})}return a})();var me=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(W(Q),W(K))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-password-doc"),t(),n(4,"po-tab",3),x("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-password-basic-view")(6,"sample-po-password-labs-view")(7,"sample-po-password-reset-view"),t()()()),l&2&&(u("p-actions",i.actions),d(2),u("p-active",i.activeTab==="doc"),d(2),u("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ee,f,v,oe,re,de,pe],encapsulation:2})}return a})();var Pe=[{path:"",component:me}],se=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=D({type:a});static \u0275inj=T({imports:[B.forChild(Pe),B]})}return a})();var Ze=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=D({type:a});static \u0275inj=T({imports:[te,se]})}return a})();export{Ze as DocPoPasswordModule};
