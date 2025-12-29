import{o as y,p as ne}from"./chunk-XTKMJXR5.js";import{Ab as w,Cb as M,Eb as oe,Fa as Z,Ma as $,Q,Sa as ee,_ as X,a as J,nb as te,ra as Y,sa as k,v as K,zb as C}from"./chunk-PZXWGKHI.js";import"./chunk-ZXY2ZB5H.js";import{Aa as c,Da as P,Eb as _,Fc as q,Gc as R,Hc as H,Ic as j,Jc as z,La as e,Ma as t,N as L,Na as r,Q as N,Ra as I,Sa as S,U as d,V as u,Wc as G,Yc as U,_c as O,bb as x,cb as o,eb as T,gb as g,hb as h,ib as E,ja as m,ka as F,mb as W,ob as A,qa as b,ra as V}from"./chunk-GP3Z6ZCX.js";var ie=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-toolbar-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Toolbar"]],template:function(p,n){p&1&&r(0,"po-toolbar",0)},dependencies:[M],encapsulation:2})}return a})();var ge=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-toolbar-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(r(0,"br"),e(1,"blockquote",0)(2,"label",1),o(3,"PO Toolbar Basic"),t(),e(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),o(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-toolbar-basic/sample-po-toolbar-basic.component.html"),t(),e(13,"pre",7),o(14,`<po-toolbar p-title="PO Toolbar"></po-toolbar>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts"),t(),e(19,"pre",9),o(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-toolbar-basic',
  templateUrl: './sample-po-toolbar-basic.component.html',
  standalone: false
})
export class SamplePoToolbarBasicComponent {}
`),t()()()()(),e(21,"div",10),r(22,"sample-po-toolbar-basic"),t(),r(23,"hr")),p&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),T(" ",n.sampleCodeButtonLabel,""),m(),c("ngClass",A(4,ge,n.hideSampleCodeTabs)))},dependencies:[_,y,C,w,ie],encapsulation:2})}return a})();var re=(()=>{class a{poNotification=N(k);action;actions;actionsIcon;notificationActions;notificationNumber;profile;profileActions;showNotification;title;toolbarActionType;actionTypes=[{value:"danger",label:"Danger"},{value:"default",label:"Default"}];iconOptions=[{value:"an an-chats",label:"an an-chats"},{value:"an an-clock",label:"an an-clock"},{value:"an an-sign-out",label:"an an-sign-out"},{value:"an an-lock",label:"an an-lock"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"far fa-comment-alt",label:"far fa-comment-alt"}];actionsIconOptions=[{value:"an an-clock",label:"an an-clock"},{value:"an an-sign-out",label:"an an-sign-out"},{value:"an an-lock",label:"an an-lock"},{value:"an an-gear",label:"an an-gear"},{value:"far fa-comment-alt",label:"far fa-comment-alt"}];toolbarActionTypes=[{label:"Actions",value:"actions"},{label:"Profile",value:"profile"},{label:"Notification",value:"notification"}];ngOnInit(){this.restore()}addAction(l,p){let n=Object.assign({},l);n.action=n.action?this.showAction.bind(this,n.action):void 0,this.toolbarActionType==="profile"?this.profileActions.push(n):this.toolbarActionType==="notification"?this.notificationActions.push(n):this.actions.push(n),p.reset()}restore(){this.action={label:void 0},this.profile={avatar:"",subtitle:"",title:""},this.actions=[],this.actionsIcon=void 0,this.profileActions=[],this.notificationActions=[],this.notificationNumber=void 0,this.showNotification=!0,this.title="PO Toolbar"}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-toolbar-labs"]],standalone:!1,decls:33,vars:27,consts:[["formAction","ngForm"],["formProfile","ngForm"],["formToolbar","ngForm"],[3,"p-actions","p-actions-icon","p-profile","p-profile-actions","p-notification-actions","p-notification-number","p-show-notification","p-title"],[1,"sample-container"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionIcon","p-clean","","p-label","Action icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","actionLabel","p-clean","","p-label","Action label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionUrl","p-clean","","p-label","Action url",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionType","p-label","Action type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","actionDisabled","p-clean","","p-label","Action separator",1,"po-md-6",3,"ngModelChange","ngModel"],["name","toolbarActionType","p-columns","3","p-label","Toolbar action type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","actionsIcon","p-clean","","p-label","Actions icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","profileTitle","p-clean","","p-label","Profile title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","profileSubtitle","p-clean","","p-label","Profile subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","profileAvatar","p-clean","","p-label","Profile avatar",1,"po-md-6",3,"ngModelChange","ngModel"],["name","title","p-clean","","p-label","Title","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","notificationNumber","p-clean","","p-label","Notification number",1,"po-md-4",3,"ngModelChange","ngModel"],["name","showNotification","p-clean","","p-label","Show notification",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(p,n){if(p&1){let s=I();r(0,"po-toolbar",3),e(1,"div",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),E("ngModelChange",function(i){return d(s),h(n.action.action,i)||(n.action.action=i),u(i)}),t(),e(6,"po-select",7),E("ngModelChange",function(i){return d(s),h(n.action.icon,i)||(n.action.icon=i),u(i)}),t(),e(7,"po-input",8),E("ngModelChange",function(i){return d(s),h(n.action.label,i)||(n.action.label=i),u(i)}),t(),e(8,"po-input",9),E("ngModelChange",function(i){return d(s),h(n.action.url,i)||(n.action.url=i),u(i)}),t(),e(9,"po-radio-group",10),E("ngModelChange",function(i){return d(s),h(n.action.type,i)||(n.action.type=i),u(i)}),t(),e(10,"po-switch",11),E("ngModelChange",function(i){return d(s),h(n.action.separator,i)||(n.action.separator=i),u(i)}),t(),e(11,"po-radio-group",12),E("ngModelChange",function(i){return d(s),h(n.toolbarActionType,i)||(n.toolbarActionType=i),u(i)}),t()(),e(12,"div",5)(13,"po-button",13),S("p-click",function(){d(s);let i=x(3);return u(n.addAction(n.action,i))}),t()()(),r(14,"po-divider"),e(15,"div",5)(16,"po-select",14),E("ngModelChange",function(i){return d(s),h(n.actionsIcon,i)||(n.actionsIcon=i),u(i)}),t()(),r(17,"po-divider"),e(18,"form",null,1)(20,"div",5)(21,"po-input",15),E("ngModelChange",function(i){return d(s),h(n.profile.title,i)||(n.profile.title=i),u(i)}),t(),e(22,"po-input",16),E("ngModelChange",function(i){return d(s),h(n.profile.subtitle,i)||(n.profile.subtitle=i),u(i)}),t(),e(23,"po-input",17),E("ngModelChange",function(i){return d(s),h(n.profile.avatar,i)||(n.profile.avatar=i),u(i)}),t()()(),r(24,"po-divider"),e(25,"form",null,2)(27,"div",5)(28,"po-input",18),E("ngModelChange",function(i){return d(s),h(n.title,i)||(n.title=i),u(i)}),t(),e(29,"po-number",19),E("ngModelChange",function(i){return d(s),h(n.notificationNumber,i)||(n.notificationNumber=i),u(i)}),t(),e(30,"po-switch",20),E("ngModelChange",function(i){return d(s),h(n.showNotification,i)||(n.showNotification=i),u(i)}),t()(),e(31,"div",5)(32,"po-button",21),S("p-click",function(){d(s);let i=x(3),be=x(19);return x(26).reset(),be.reset(),i.reset(),u(n.restore())}),t()()()()}if(p&2){let s=x(3);c("p-actions",n.actions)("p-actions-icon",n.actionsIcon)("p-profile",n.profile)("p-profile-actions",n.profileActions)("p-notification-actions",n.notificationActions)("p-notification-number",n.notificationNumber)("p-show-notification",n.showNotification)("p-title",n.title),m(5),g("ngModel",n.action.action),m(),g("ngModel",n.action.icon),c("p-options",n.iconOptions),m(),g("ngModel",n.action.label),m(),g("ngModel",n.action.url),m(),g("ngModel",n.action.type),c("p-options",n.actionTypes),m(),g("ngModel",n.action.separator),m(),g("ngModel",n.toolbarActionType),c("p-options",n.toolbarActionTypes),m(2),c("p-disabled",s.invalid),m(3),g("ngModel",n.actionsIcon),c("p-options",n.actionsIconOptions),m(5),g("ngModel",n.profile.title),m(),g("ngModel",n.profile.subtitle),m(),g("ngModel",n.profile.avatar),m(5),g("ngModel",n.title),m(),g("ngModel",n.notificationNumber),m(),g("ngModel",n.showNotification)}},dependencies:[z,q,R,j,H,K,J,Q,Z,$,ee,Y,M],styles:[".sample-container[_ngcontent-%COMP%]{margin-top:50px}"]})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-toolbar-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(r(0,"br"),e(1,"blockquote",0)(2,"label",1),o(3,"PO Toolbar Labs"),t(),e(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),o(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-toolbar-labs/sample-po-toolbar-labs.component.html"),t(),e(13,"pre",7),o(14,`<style>
  .sample-container {
    margin-top: 50px;
  }
</style>

<po-toolbar
  [p-actions]="actions"
  [p-actions-icon]="actionsIcon"
  [p-profile]="profile"
  [p-profile-actions]="profileActions"
  [p-notification-actions]="notificationActions"
  [p-notification-number]="notificationNumber"
  [p-show-notification]="showNotification"
  [p-title]="title"
>
</po-toolbar>

<div class="sample-container">
  <form #formAction="ngForm">
    <div class="po-row">
      <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

      <po-select
        class="po-md-6"
        name="actionIcon"
        [(ngModel)]="action.icon"
        p-clean
        p-label="Action icon"
        [p-options]="iconOptions"
      >
      </po-select>

      <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-clean p-label="Action label" p-required>
      </po-input>

      <po-input class="po-md-6" name="actionUrl" [(ngModel)]="action.url" p-clean p-label="Action url"> </po-input>

      <po-radio-group
        class="po-md-6"
        name="actionType"
        [(ngModel)]="action.type"
        p-label="Action type"
        [p-options]="actionTypes"
      >
      </po-radio-group>

      <po-switch
        class="po-md-6"
        name="actionDisabled"
        [(ngModel)]="action.separator"
        p-clean
        p-label="Action separator"
      >
      </po-switch>

      <po-radio-group
        class="po-md-6"
        name="toolbarActionType"
        [(ngModel)]="toolbarActionType"
        p-columns="3"
        p-label="Toolbar action type"
        [p-options]="toolbarActionTypes"
      >
      </po-radio-group>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Action"
        [p-disabled]="formAction.invalid"
        (p-click)="addAction(action, formAction)"
      >
      </po-button>
    </div>
  </form>

  <po-divider />

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="actionsIcon"
      [(ngModel)]="actionsIcon"
      p-clean
      p-label="Actions icon"
      [p-options]="actionsIconOptions"
    >
    </po-select>
  </div>

  <po-divider />

  <form #formProfile="ngForm">
    <div class="po-row">
      <po-input
        class="po-md-6"
        name="profileTitle"
        [(ngModel)]="profile.title"
        p-clean
        p-label="Profile title"
        p-required
      >
      </po-input>

      <po-input
        class="po-md-6"
        name="profileSubtitle"
        [(ngModel)]="profile.subtitle"
        p-clean
        p-label="Profile subtitle"
      >
      </po-input>

      <po-input class="po-md-6" name="profileAvatar" [(ngModel)]="profile.avatar" p-clean p-label="Profile avatar">
      </po-input>
    </div>
  </form>

  <po-divider />

  <form #formToolbar="ngForm">
    <div class="po-row">
      <po-input class="po-md-4" name="title" [(ngModel)]="title" p-clean p-label="Title" p-required> </po-input>

      <po-number
        class="po-md-4"
        name="notificationNumber"
        [(ngModel)]="notificationNumber"
        p-clean
        p-label="Notification number"
      >
      </po-number>

      <po-switch
        class="po-md-4"
        name="showNotification"
        [(ngModel)]="showNotification"
        p-clean
        p-label="Show notification"
      >
      </po-switch>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Sample Restore"
        (p-click)="formToolbar.reset(); formProfile.reset(); formAction.reset(); restore()"
      >
      </po-button>
    </div>
  </form>
</div>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts"),t(),e(19,"pre",9),o(20,`import { Component, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption,
  PoToolbarAction,
  PoToolbarProfile
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-toolbar-labs',
  templateUrl: './sample-po-toolbar-labs.component.html',
  standalone: false
})
export class SamplePoToolbarLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoToolbarAction;
  actions: Array<PoToolbarAction>;
  actionsIcon: string;
  notificationActions: Array<PoToolbarAction>;
  notificationNumber: number;
  profile: PoToolbarProfile;
  profileActions: Array<PoToolbarAction>;
  showNotification: boolean;
  title: string;
  toolbarActionType: string;

  public readonly actionTypes: Array<PoRadioGroupOption> = [
    { value: 'danger', label: 'Danger' },
    { value: 'default', label: 'Default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-chats', label: 'an an-chats' },
    { value: 'an an-clock', label: 'an an-clock' },
    { value: 'an an-sign-out', label: 'an an-sign-out' },
    { value: 'an an-lock', label: 'an an-lock' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'far fa-comment-alt', label: 'far fa-comment-alt' }
  ];

  public readonly actionsIconOptions: Array<PoSelectOption> = [
    { value: 'an an-clock', label: 'an an-clock' },
    { value: 'an an-sign-out', label: 'an an-sign-out' },
    { value: 'an an-lock', label: 'an an-lock' },
    { value: 'an an-gear', label: 'an an-gear' },
    { value: 'far fa-comment-alt', label: 'far fa-comment-alt' }
  ];

  public readonly toolbarActionTypes: Array<PoRadioGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Profile', value: 'profile' },
    { label: 'Notification', value: 'notification' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action, form: NgForm) {
    const newAction = Object.assign({}, action);

    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    if (this.toolbarActionType === 'profile') {
      this.profileActions.push(newAction);
    } else if (this.toolbarActionType === 'notification') {
      this.notificationActions.push(newAction);
    } else {
      this.actions.push(newAction);
    }
    form.reset();
  }

  restore() {
    this.action = { label: undefined };
    this.profile = { avatar: '', subtitle: '', title: '' };
    this.actions = [];
    this.actionsIcon = undefined;
    this.profileActions = [];
    this.notificationActions = [];
    this.notificationNumber = undefined;
    this.showNotification = true;
    this.title = 'PO Toolbar';
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),t()()()()(),e(21,"div",10),r(22,"sample-po-toolbar-labs"),t(),r(23,"hr")),p&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),T(" ",n.sampleCodeButtonLabel,""),m(),c("ngClass",A(4,Se,n.hideSampleCodeTabs)))},dependencies:[_,y,C,w,re],encapsulation:2})}return a})();var me=(()=>{class a{poDialog=N(X);poNotification=N(k);notificationActions=[{icon:"an an-newspaper",label:"PO news, stay tuned!",type:"danger",action:l=>this.onClickNotification(l)},{icon:"an an-chat",label:"New message",type:"danger",action:l=>this.openDialog(l)}];profile={avatar:"https://via.placeholder.com/48x48?text=AVATAR",subtitle:"dev@po-ui.com.br",title:"Mr. Dev PO"};profileActions=[{icon:"an an-user",label:"User data",action:l=>this.showAction(l)},{icon:"an an-building-apartment",label:"Company data",action:l=>this.showAction(l)},{icon:"an an-gear",label:"Settings",action:l=>this.showAction(l)},{icon:"an an-sign-out",label:"Exit",type:"danger",separator:!0,action:l=>this.showAction(l)}];actions=[{label:"Start cash register",action:l=>this.showAction(l)},{label:"Finalize cash register",action:l=>this.showAction(l)},{label:"Cash register options",action:l=>this.showAction(l)}];title="PO Toolbar Logged";getNotificationNumber(){return this.notificationActions.filter(l=>l.type==="danger").length}onClickNotification(l){window.open("https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md","_blank"),l.type="default"}openDialog(l){this.poDialog.alert({title:"Welcome",message:"Hello Mr. Dev! Congratulations, you are a TOTVS!",ok:void 0}),l.type="default"}showAction(l){this.poNotification.success(`Action clicked: ${l.label}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-toolbar-logged"]],standalone:!1,features:[W([k])],decls:8,vars:7,consts:[["p-actions-icon","an an-shopping-cart-simple",3,"p-actions","p-profile","p-profile-actions","p-notification-actions","p-notification-number","p-title"],[1,"po-row"],[1,"sample-container"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-subtitle"]],template:function(p,n){p&1&&(r(0,"po-toolbar",0),e(1,"div",1)(2,"div",2)(3,"po-widget",3)(4,"div",4),o(5),t(),e(6,"div",5),o(7,"Let's work hard!"),t()()()()),p&2&&(c("p-actions",n.actions)("p-profile",n.profile)("p-profile-actions",n.profileActions)("p-notification-actions",n.notificationActions)("p-notification-number",n.getNotificationNumber())("p-title",n.title),m(5),T("Hello, ",n.profile.title,"."))},dependencies:[M,oe],styles:[".sample-container[_ngcontent-%COMP%]{margin-top:50px}"]})}return a})();var Ce=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-toolbar-logged-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(r(0,"br"),e(1,"blockquote",0)(2,"label",1),o(3,"PO Toolbar - Logged"),t(),e(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),o(6),t()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),o(12,"sample-po-toolbar-logged/sample-po-toolbar-logged.component.html"),t(),e(13,"pre",7),o(14,`<style>
  .sample-container {
    margin-top: 50px;
  }
</style>

<po-toolbar
  p-actions-icon="an an-shopping-cart-simple"
  [p-actions]="actions"
  [p-profile]="profile"
  [p-profile-actions]="profileActions"
  [p-notification-actions]="notificationActions"
  [p-notification-number]="getNotificationNumber()"
  [p-title]="title"
>
</po-toolbar>

<div class="po-row">
  <div class="sample-container">
    <po-widget class="po-sm-12">
      <div class="po-font-title">Hello, { { profile.title }}.</div>
      <div class="po-font-subtitle">Let's work hard!</div>
    </po-widget>
  </div>
</div>
`),t()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),o(18,"sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts"),t(),e(19,"pre",9),o(20,`import { Component, inject } from '@angular/core';

import { PoDialogService, PoNotificationService, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-toolbar-logged',
  templateUrl: './sample-po-toolbar-logged.component.html',
  providers: [PoNotificationService],
  standalone: false
})
export class SamplePoToolbarLoggedComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  notificationActions: Array<PoToolbarAction> = [
    {
      icon: 'an an-newspaper',
      label: 'PO news, stay tuned!',
      type: 'danger',
      action: item => this.onClickNotification(item)
    },
    { icon: 'an an-chat', label: 'New message', type: 'danger', action: item => this.openDialog(item) }
  ];

  profile: PoToolbarProfile = {
    avatar: 'https://via.placeholder.com/48x48?text=AVATAR',
    subtitle: 'dev@po-ui.com.br',
    title: 'Mr. Dev PO'
  };

  profileActions: Array<PoToolbarAction> = [
    { icon: 'an an-user', label: 'User data', action: item => this.showAction(item) },
    { icon: 'an an-building-apartment', label: 'Company data', action: item => this.showAction(item) },
    { icon: 'an an-gear', label: 'Settings', action: item => this.showAction(item) },
    { icon: 'an an-sign-out', label: 'Exit', type: 'danger', separator: true, action: item => this.showAction(item) }
  ];

  actions: Array<PoToolbarAction> = [
    { label: 'Start cash register', action: item => this.showAction(item) },
    { label: 'Finalize cash register', action: item => this.showAction(item) },
    { label: 'Cash register options', action: item => this.showAction(item) }
  ];

  title: string = 'PO Toolbar Logged';

  getNotificationNumber() {
    return this.notificationActions.filter(not => not.type === 'danger').length;
  }

  onClickNotification(item: PoToolbarAction) {
    window.open('https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md', '_blank');

    item.type = 'default';
  }

  openDialog(item: PoToolbarAction) {
    this.poDialog.alert({
      title: 'Welcome',
      message: \`Hello Mr. Dev! Congratulations, you are a TOTVS!\`,
      ok: undefined
    });

    item.type = 'default';
  }

  showAction(item: PoToolbarAction): void {
    this.poNotification.success(\`Action clicked: \${item.label}\`);
  }
}
`),t()()()()(),e(21,"div",10),r(22,"sample-po-toolbar-logged"),t(),r(23,"hr")),p&2&&(m(5),P("po-icon "+n.sampleCodeButtonIcon),m(),T(" ",n.sampleCodeButtonLabel,""),m(),c("ngClass",A(4,Ce,n.hideSampleCodeTabs)))},dependencies:[_,y,C,w,me],encapsulation:2})}return a})();var ce=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-toolbar-doc"]],standalone:!1,decls:521,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoToolbarAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoToolbarProfile"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(p,n){p&1&&(e(0,"div",0)(1,"p",1)(2,"code"),o(3,"import { PoToolbarModule } from '@po-ui/ng-components';"),t()(),e(4,"div",2)(5,"p"),o(6,"M\xF3dulo do componente po-toolbar"),t()(),e(7,"h3",3),o(8,"Componente"),t(),e(9,"h4",4)(10,"code",5),o(11,"PoToolbarComponent"),t()(),e(12,"div",2)(13,"p"),o(14,"O componente "),e(15,"code"),o(16,"po-toolbar"),t(),o(17," \xE9 um cabe\xE7alho para o t\xEDtulo da aplica\xE7\xE3o e informa\xE7\xF5es de usu\xE1rio e notifica\xE7\xF5es quando houver necessidade. "),t()(),e(18,"div",6)(19,"h4",7),o(20,"Seletor"),t(),e(21,"pre",8),o(22,`<po-toolbar
    p-actions="Array<PoToolbarAction>"
    p-actions-icon="string | TemplateRef<void>"
    p-notification-actions="Array<PoToolbarAction>"
    p-notification-number="number"
    p-profile="PoToolbarProfile"
    p-profile-actions="Array<PoToolbarAction>"
    p-show-notification="boolean"
    p-title="string" >
</po-toolbar>
`),t()(),e(23,"h4",9),o(24,"Propriedades"),t(),e(25,"table",10)(26,"tr",11)(27,"th",12),o(28,"Nome"),t(),e(29,"th",12),o(30,"Tipo"),t(),e(31,"th",12),o(32,"Padr\xE3o"),t(),e(33,"th",12),o(34,"Descri\xE7\xE3o"),t()(),e(35,"tr",13)(36,"td",14)(37,"div",15)(38,"span",16),o(39," p-actions"),r(40,"br"),t()()(),e(41,"td",17)(42,"code",18),o(43,"Array<PoToolbarAction>"),t()(),e(44,"td",19),o(45,"-"),t(),e(46,"td",20)(47,"em")(48,"strong"),o(49,"(opcional)"),t()(),e(50,"p"),o(51,"Define uma lista de a\xE7\xF5es que ser\xE3o exibidas ao clicar no \xEDcone declarado em "),e(52,"code"),o(53,"p-actions-icon"),t(),o(54,"."),t()()(),e(55,"tr",13)(56,"td",14)(57,"div",15)(58,"span",16),o(59," p-actions-icon"),r(60,"br"),t()()(),e(61,"td",17)(62,"code",21),o(63,"string "),t(),e(64,"code",22),o(65," TemplateRef<void>"),t()(),e(66,"td",19)(67,"p")(68,"code"),o(69,"an-dots-three"),t()()(),e(70,"td",20)(71,"em")(72,"strong"),o(73,"(opcional)"),t()(),e(74,"p"),o(75,"Define um "),e(76,"a",23),o(77,"\xEDcone"),t(),o(78," para a propriedade "),e(79,"code"),o(80,"p-actions"),t(),o(81,"."),t(),e(82,"p"),o(83,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),e(84,"a",23),o(85,"Biblioteca de \xEDcones"),t(),o(86,". conforme exemplo abaixo:"),t(),e(87,"pre")(88,"code"),o(89,`<po-toolbar p-actions-icon="an an-user" [p-actions]="actions"></po-toolbar>
`),t()(),e(90,"p"),o(91,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),e(92,"em"),o(93,"Font Awesome"),t(),o(94,", da seguinte forma:"),t(),e(95,"pre")(96,"code"),o(97,`<po-toolbar p-actions-icon="far fa-comment-alt" [p-actions]="actions"></po-toolbar>
`),t()(),e(98,"p"),o(99,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),e(100,"code"),o(101,"TemplateRef"),t(),o(102,", conforme exemplo abaixo:"),t(),e(103,"pre")(104,"code"),o(105,`<po-toolbar [p-actions-icon]="template" [p-actions]="actions"></po-toolbar>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),e(106,"blockquote")(107,"p"),o(108,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),e(109,"code"),o(110,"font-size: inherit"),t(),o(111," caso o \xEDcone utilizado n\xE3o aplique-o."),t()(),e(112,"blockquote")(113,"p"),o(114,"Caso n\xE3o haja a\xE7\xF5es definidas em "),e(115,"code"),o(116,"p-actions"),t(),o(117,", o \xEDcone n\xE3o ser\xE1 exibido."),t()()()(),e(118,"tr",13)(119,"td",14)(120,"div",15)(121,"span",16),o(122," p-notification-actions"),r(123,"br"),t()()(),e(124,"td",17)(125,"code",18),o(126,"Array<PoToolbarAction>"),t()(),e(127,"td",19),o(128,"-"),t(),e(129,"td",20)(130,"em")(131,"strong"),o(132,"(opcional)"),t()(),e(133,"p"),o(134,"Lista de a\xE7\xF5es da notifica\xE7\xE3o."),t()()(),e(135,"tr",13)(136,"td",14)(137,"div",15)(138,"span",16),o(139," p-notification-number"),r(140,"br"),t()()(),e(141,"td",17)(142,"code",24),o(143,"number"),t()(),e(144,"td",19),o(145,"-"),t(),e(146,"td",20)(147,"em")(148,"strong"),o(149,"(opcional)"),t()(),e(150,"p"),o(151,"N\xFAmero de notifica\xE7\xF5es."),t()()(),e(152,"tr",13)(153,"td",14)(154,"div",15)(155,"span",16),o(156," p-profile"),r(157,"br"),t()()(),e(158,"td",17)(159,"code",25),o(160,"PoToolbarProfile"),t()(),e(161,"td",19),o(162,"-"),t(),e(163,"td",20)(164,"em")(165,"strong"),o(166,"(opcional)"),t()(),e(167,"p"),o(168,"Define o objeto que ser\xE1 o cabe\xE7alho da lista de a\xE7\xF5es com as informa\xE7\xF5es do perfil."),t()()(),e(169,"tr",13)(170,"td",14)(171,"div",15)(172,"span",16),o(173," p-profile-actions"),r(174,"br"),t()()(),e(175,"td",17)(176,"code",18),o(177,"Array<PoToolbarAction>"),t()(),e(178,"td",19),o(179,"-"),t(),e(180,"td",20)(181,"em")(182,"strong"),o(183,"(opcional)"),t()(),e(184,"p"),o(185,"Define uma lista de a\xE7\xF5es que ser\xE3o exibidas ao clicar no \xEDcone do perfil."),t()()(),e(186,"tr",13)(187,"td",14)(188,"div",15)(189,"span",16),o(190," p-show-notification"),r(191,"br"),t()()(),e(192,"td",17)(193,"code",26),o(194,"boolean"),t()(),e(195,"td",19),o(196,"-"),t(),e(197,"td",20)(198,"em")(199,"strong"),o(200,"(opcional)"),t()(),e(201,"p"),o(202,"Se falso, oculta o \xEDcone de notifica\xE7\xF5es."),t()()(),e(203,"tr",13)(204,"td",14)(205,"div",15)(206,"span",16),o(207," p-title"),r(208,"br"),t()()(),e(209,"td",17)(210,"code",21),o(211,"string"),t()(),e(212,"td",19),o(213,"-"),t(),e(214,"td",20)(215,"p"),o(216,"T\xEDtulo do "),e(217,"em"),o(218,"toolbar"),t(),o(219," e aplica\xE7\xE3o."),t()()()(),e(220,"h3"),o(221,"Interfaces"),t(),e(222,"h4",27)(223,"code",5),o(224,"PoToolbarAction"),t()(),e(225,"div",2)(226,"p"),o(227,"Interface para lista de a\xE7\xF5es do componente. "),t()(),e(228,"h4",9),o(229,"Propriedades"),t(),e(230,"table",10)(231,"tr",11)(232,"th",12),o(233,"Nome"),t(),e(234,"th",12),o(235,"Tipo"),t(),e(236,"th",12),o(237,"Descri\xE7\xE3o"),t()(),e(238,"tr",13)(239,"td",14)(240,"div",15)(241,"span",16),o(242," action"),r(243,"br"),t()()(),e(244,"td",17)(245,"code",28),o(246,"Function"),t()(),e(247,"td",20)(248,"em")(249,"strong"),o(250,"(opcional)"),t()(),e(251,"p"),o(252,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),e(253,"p"),o(254,"No componente "),e(255,"code"),o(256,"po-dropdown"),t(),o(257,", a action tamb\xE9m pode ser executada para o agrupador de subitens."),t(),e(258,"blockquote")(259,"p"),o(260,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),e(261,"em"),o(262,"bind"),t(),o(263,"."),t()(),e(264,"p"),o(265,"Exemplo: "),e(266,"code"),o(267,"action: this.myFunction.bind(this)"),t()()()(),e(268,"tr",13)(269,"td",14)(270,"div",15)(271,"span",16),o(272," disabled"),r(273,"br"),t()()(),e(274,"td",17)(275,"code",26),o(276,"boolean "),t(),e(277,"code",28),o(278," Function"),t()(),e(279,"td",20)(280,"em")(281,"strong"),o(282,"(opcional)"),t()(),e(283,"p"),o(284,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),e(285,"p"),o(286,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),e(287,"tr",13)(288,"td",14)(289,"div",15)(290,"span",16),o(291," icon"),r(292,"br"),t()()(),e(293,"td",17)(294,"code",21),o(295,"string "),t(),e(296,"code",22),o(297," TemplateRef<void>"),t()(),e(298,"td",20)(299,"em")(300,"strong"),o(301,"(opcional)"),t()(),e(302,"p"),o(303,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),e(304,"p"),o(305,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),e(306,"a",23),o(307,"Biblioteca de \xEDcones"),t(),o(308,". conforme exemplo abaixo:"),t(),e(309,"pre")(310,"code"),o(311,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),t()(),e(312,"p"),o(313,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),e(314,"pre")(315,"code"),o(316,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),t()(),e(317,"p"),o(318,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),e(319,"code"),o(320,"TemplateRef"),t(),o(321,`, conforme exemplo abaixo:
component.html:`),t(),e(322,"pre")(323,"code"),o(324,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),t()(),e(325,"p"),o(326,"component.ts:"),t(),e(327,"pre")(328,"code"),o(329,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),t()()()(),e(330,"tr",13)(331,"td",14)(332,"div",15)(333,"span",16),o(334," label"),r(335,"br"),t()()(),e(336,"td",17)(337,"code",21),o(338,"string"),t()(),e(339,"td",20)(340,"p"),o(341,"R\xF3tulo da a\xE7\xE3o."),t(),e(342,"p"),o(343,"No componente "),e(344,"code"),o(345,"po-dropdown"),t(),o(346,", a label tamb\xE9m pode representar o agrupador de subitens."),t()()(),e(347,"tr",13)(348,"td",14)(349,"div",15)(350,"span",16),o(351," selected"),r(352,"br"),t()()(),e(353,"td",17)(354,"code",26),o(355,"boolean"),t()(),e(356,"td",20)(357,"em")(358,"strong"),o(359,"(opcional)"),t()(),e(360,"p"),o(361,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),e(362,"tr",13)(363,"td",14)(364,"div",15)(365,"span",16),o(366," separator"),r(367,"br"),t()()(),e(368,"td",17)(369,"code",26),o(370,"boolean"),t()(),e(371,"td",20)(372,"em")(373,"strong"),o(374,"(opcional)"),t()(),e(375,"p"),o(376,"Atribui uma linha separadora acima do item."),t()()(),e(377,"tr",13)(378,"td",14)(379,"div",15)(380,"span",16),o(381," type"),r(382,"br"),t()()(),e(383,"td",17)(384,"code",21),o(385,"string"),t()(),e(386,"td",20)(387,"em")(388,"strong"),o(389,"(opcional)"),t()(),e(390,"p"),o(391,"Define a cor do item, sendo "),e(392,"code"),o(393,"default"),t(),o(394," o padr\xE3o."),t(),e(395,"p"),o(396,"Valores v\xE1lidos:"),t(),e(397,"ul")(398,"li")(399,"code"),o(400,"default"),t()(),e(401,"li")(402,"code"),o(403,"danger"),t(),o(404," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),e(405,"tr",13)(406,"td",14)(407,"div",15)(408,"span",16),o(409," url"),r(410,"br"),t()()(),e(411,"td",17)(412,"code",21),o(413,"string"),t()(),e(414,"td",20)(415,"em")(416,"strong"),o(417,"(opcional)"),t()(),e(418,"p"),o(419,"URL utilizada para redirecionamento das p\xE1ginas."),t(),e(420,"p"),o(421,"No componente "),e(422,"code"),o(423,"po-dropdown"),t(),o(424,`, a url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),e(425,"code"),o(426,"url"),t(),o(427," \xE9 informada em um agrupador, o clique "),e(428,"strong"),o(429,"n\xE3o abrir\xE1 os subitens"),t(),o(430,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),t()()(),e(431,"tr",13)(432,"td",14)(433,"div",15)(434,"span",16),o(435," visible"),r(436,"br"),t()()(),e(437,"td",17)(438,"code",26),o(439,"boolean "),t(),e(440,"code",28),o(441," Function"),t()(),e(442,"td",20)(443,"em")(444,"strong"),o(445,"(opcional)"),t()(),e(446,"p"),o(447,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),e(448,"blockquote")(449,"p"),o(450,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),e(451,"p"),o(452,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),e(453,"ul")(454,"li")(455,"p"),o(456,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),e(457,"li")(458,"p"),o(459,"Informar diretamente um valor booleano."),t()()()()()(),e(460,"h4",27)(461,"code",5),o(462,"PoToolbarProfile"),t()(),e(463,"div",2)(464,"p"),o(465,"Interface que define o perfil do "),e(466,"code"),o(467,"PoToolbarComponent"),t(),o(468,"."),t()(),e(469,"h4",9),o(470,"Propriedades"),t(),e(471,"table",10)(472,"tr",11)(473,"th",12),o(474,"Nome"),t(),e(475,"th",12),o(476,"Tipo"),t(),e(477,"th",12),o(478,"Descri\xE7\xE3o"),t()(),e(479,"tr",13)(480,"td",14)(481,"div",15)(482,"span",16),o(483," avatar"),r(484,"br"),t()()(),e(485,"td",17)(486,"code",21),o(487,"string"),t()(),e(488,"td",20)(489,"em")(490,"strong"),o(491,"(opcional)"),t()(),e(492,"p"),o(493,"Define o caminho da imagem do perfil."),t()()(),e(494,"tr",13)(495,"td",14)(496,"div",15)(497,"span",16),o(498," subtitle"),r(499,"br"),t()()(),e(500,"td",17)(501,"code",21),o(502,"string"),t()(),e(503,"td",20)(504,"em")(505,"strong"),o(506,"(opcional)"),t()(),e(507,"p"),o(508,"Define um texto com menor destaque ao lado da imagem do perfil, como por exemplo o e-mail de usu\xE1rio."),t()()(),e(509,"tr",13)(510,"td",14)(511,"div",15)(512,"span",16),o(513," title"),r(514,"br"),t()()(),e(515,"td",17)(516,"code",21),o(517,"string"),t()(),e(518,"td",20)(519,"p"),o(520,"Define um texto com maior destaque ao lado da imagem do perfil, como por exemplo o nome de usu\xE1rio."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var de=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,p){this.route=l,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||a)(F(G),F(U))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Toolbar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),r(3,"sample-po-toolbar-doc"),t(),e(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),r(5,"sample-po-toolbar-basic-view")(6,"sample-po-toolbar-labs-view")(7,"sample-po-toolbar-logged-view"),t()()()),p&2&&(c("p-actions",n.actions),m(2),c("p-active",n.activeTab==="doc"),m(2),c("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[te,C,w,le,pe,se,ce],encapsulation:2})}return a})();var Pe=[{path:"",component:de}],ue=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=V({type:a});static \u0275inj=L({imports:[O.forChild(Pe),O]})}return a})();var nt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=V({type:a});static \u0275inj=L({imports:[ne,ue]})}return a})();export{nt as DocPoToolbarModule};
