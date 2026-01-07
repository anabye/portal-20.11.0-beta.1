import{o as w,p as me}from"./chunk-F4JLAWPH.js";import{Ab as C,Ea as ae,Eb as re,Fa as oe,O as te,Q as ne,Sa as le,U as z,a as W,nb as P,sa as j,v as ee,za as ie,zb as x}from"./chunk-LS5JYUA4.js";import"./chunk-ZXY2ZB5H.js";import{$a as G,Aa as u,Da as y,Eb as M,Fc as F,Gc as O,Hc as V,Ic as q,Jc as N,La as n,M as X,Ma as t,N as k,Na as r,Q as T,Ra as B,Sa as E,U as s,V as c,Wc as Z,Yc as $,_a as H,_c as J,ab as U,bb as I,cb as e,eb as D,gb as g,hb as f,ib as h,ja as m,ka as R,mb as Y,ob as _,qa as S,ra as L}from"./chunk-GP3Z6ZCX.js";var pe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Default"]],template:function(l,i){l&1&&r(0,"po-page-default",0)},dependencies:[P],encapsulation:2})}return o})();var ve=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Default Basic"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-default-basic/sample-po-page-default-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-default-basic/sample-po-page-default-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),t()()()()(),n(21,"div",10),r(22,"sample-po-page-default-basic"),t(),r(23,"hr")),l&2&&(m(5),y("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),u("ngClass",_(4,ve,i.hideSampleCodeTabs)))},dependencies:[M,w,x,C,pe],encapsulation:2})}return o})();var ce=(()=>{class o{poNotification=T(j);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;title;subtitle;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore()}addAction(d){let l=Object.assign({},d);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.actions=[...this.actions,l],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.literals="",this.title="PO Page Default",this.subtitle="",this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}showAction(d){this.poNotification.success(`Action clicked: ${d}`)}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-labs"]],standalone:!1,decls:43,vars:28,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formPage","ngForm"],[3,"p-actions","p-breadcrumb","p-components-size","p-literals","p-title","p-subtitle"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let p=B();r(0,"po-page-default",5)(1,"po-divider"),n(2,"form",null,0)(4,"div",6)(5,"po-input",7),h("ngModelChange",function(a){return s(p),f(i.action.action,a)||(i.action.action=a),c(a)}),t(),n(6,"po-input",8),h("ngModelChange",function(a){return s(p),f(i.action.label,a)||(i.action.label=a),c(a)}),t(),n(7,"po-input",9),h("ngModelChange",function(a){return s(p),f(i.action.url,a)||(i.action.url=a),c(a)}),t(),n(8,"po-select",10),h("ngModelChange",function(a){return s(p),f(i.action.type,a)||(i.action.type=a),c(a)}),t(),n(9,"po-select",11),h("ngModelChange",function(a){return s(p),f(i.action.icon,a)||(i.action.icon=a),c(a)}),t(),n(10,"po-checkbox-group",12),h("ngModelChange",function(a){return s(p),f(i.action,a)||(i.action=a),c(a)}),t()(),n(11,"div",6)(12,"po-button",13),E("p-click",function(){return s(p),c(i.addAction(i.action))}),t()()(),r(13,"po-divider"),n(14,"form",null,1)(16,"div",6)(17,"po-input",14),h("ngModelChange",function(a){return s(p),f(i.breadcrumb.favorite,a)||(i.breadcrumb.favorite=a),c(a)}),t()()(),n(18,"form",null,2)(20,"div",6)(21,"po-input",15),h("ngModelChange",function(a){return s(p),f(i.breadcrumbItem.label,a)||(i.breadcrumbItem.label=a),c(a)}),t(),n(22,"po-input",16),h("ngModelChange",function(a){return s(p),f(i.breadcrumbItem.link,a)||(i.breadcrumbItem.link=a),c(a)}),t()(),n(23,"div",6)(24,"po-button",17),E("p-click",function(){return s(p),c(i.addBreadcrumbItem())}),t()()(),r(25,"po-divider"),n(26,"form",null,3)(28,"div",6)(29,"po-input",18),h("ngModelChange",function(a){return s(p),f(i.breadcrumbParams.property,a)||(i.breadcrumbParams.property=a),c(a)}),t(),n(30,"po-input",19),h("ngModelChange",function(a){return s(p),f(i.breadcrumbParams.value,a)||(i.breadcrumbParams.value=a),c(a)}),t()(),n(31,"div",6)(32,"po-button",20),E("p-click",function(){return s(p),c(i.addBreadcrumbParam())}),t()()(),r(33,"po-divider"),n(34,"form",null,4)(36,"div",6)(37,"po-input",21),h("ngModelChange",function(a){return s(p),f(i.title,a)||(i.title=a),c(a)}),t(),n(38,"po-input",22),h("ngModelChange",function(a){return s(p),f(i.subtitle,a)||(i.subtitle=a),c(a)}),t(),n(39,"po-input",23),h("ngModelChange",function(a){return s(p),f(i.literals,a)||(i.literals=a),c(a)}),E("p-change",function(){return s(p),c(i.changeLiterals())}),t(),n(40,"po-radio-group",24),h("ngModelChange",function(a){return s(p),f(i.componentsSize,a)||(i.componentsSize=a),c(a)}),t()(),n(41,"div",6)(42,"po-button",25),E("p-click",function(){return s(p),c(i.restore())}),t()()()}if(l&2){let p=I(3),b=I(19),a=I(27);u("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-literals",i.customLiterals)("p-title",i.title)("p-subtitle",i.subtitle),m(5),g("ngModel",i.action.action),m(),g("ngModel",i.action.label),m(),g("ngModel",i.action.url),m(),g("ngModel",i.action.type),u("p-options",i.typeOptions),m(),g("ngModel",i.action.icon),u("p-options",i.iconOptions),m(),g("ngModel",i.action),u("p-options",i.actionOptions),m(2),u("p-disabled",p.form.invalid),m(5),g("ngModel",i.breadcrumb.favorite),m(4),g("ngModel",i.breadcrumbItem.label),m(),g("ngModel",i.breadcrumbItem.link),m(2),u("p-disabled",b.invalid),m(5),g("ngModel",i.breadcrumbParams.property),m(),g("ngModel",i.breadcrumbParams.value),m(2),u("p-disabled",a.invalid),m(5),g("ngModel",i.title),m(),g("ngModel",i.subtitle),m(),g("ngModel",i.literals),m(),g("ngModel",i.componentsSize),u("p-options",i.componentsSizeOptions)}},dependencies:[N,F,O,q,V,ee,W,te,ne,oe,le,P],encapsulation:2})}return o})();var we=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Default Labs"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-default-labs/sample-po-page-default-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-literals]="customLiterals"
  [p-title]="title"
  [p-subtitle]="subtitle"
>
</po-page-default>

<po-divider />

<form #formAction="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-lg-3 po-md-6" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-lg-3 po-md-6" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
    </po-select>

    <po-checkbox-group
      class="po-md-12"
      name="action"
      [(ngModel)]="action"
      p-columns="4"
      p-indeterminate
      p-label="Action properties"
      [p-options]="actionOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-2 po-md-4"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #formBreadcrumbFavorite="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbFavorite"
      [(ngModel)]="breadcrumb.favorite"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/favorite"
      p-label="Breadcrumb favorite"
    >
    </po-input>
  </div>
</form>

<form #formBreadcrumbItems="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbItemLabel"
      [(ngModel)]="breadcrumbItem.label"
      p-clean
      p-label="Breadcrumb item label"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbItemLink"
      [(ngModel)]="breadcrumbItem.link"
      p-clean
      p-label="Breadcrumb item link"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb item"
      [p-disabled]="formBreadcrumbItems.invalid"
      (p-click)="addBreadcrumbItem()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #formBreadcrumbParams="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbParamsProperty"
      [(ngModel)]="breadcrumbParams.property"
      p-clean
      p-label="Breadcrumb params property"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbParamsValue"
      [(ngModel)]="breadcrumbParams.value"
      p-clean
      p-label="Breadcrumb params value"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb params"
      [p-disabled]="formBreadcrumbParams.invalid"
      (p-click)="addBreadcrumbParam()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #formPage="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>
    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

    <po-input
      class="po-md-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"otherActions": "Mais a\xE7\xF5es"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-default-labs/sample-po-page-default-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

import { PoNotificationService, PoPageAction, PoPageDefaultLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-default-labs',
  templateUrl: './sample-po-page-default-labs.component.html',
  standalone: false
})
export class SamplePoPageDefaultLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoPageAction;
  actions: Array<PoPageAction>;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageDefaultLiterals;
  literals: string;
  title: string;
  subtitle: string;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoPageAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions = [...this.actions, newAction];

    this.restoreActionForm();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: undefined, link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = { [this.breadcrumbParams.property]: this.breadcrumbParams.value };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.literals = '';
    this.title = 'PO Page Default';
    this.subtitle = '';
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null
    };
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),t()()()()(),n(21,"div",10),r(22,"sample-po-page-default-labs"),t(),r(23,"hr")),l&2&&(m(5),y("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),u("ngClass",_(4,we,i.hideSampleCodeTabs)))},dependencies:[M,w,x,C,ce],encapsulation:2})}return o})();var K=(()=>{class o{getColumns(){return[{property:"cities",label:"Cities that most downloaded PO"},{property:"package",label:"Package version"},{property:"downloads",label:"Downloads"}]}getItems(){return[{cities:"S\xE3o Paulo",package:"2.0.0-beta.2",downloads:"2000"},{cities:"Joinville",package:"1.9.1",downloads:"1000"},{cities:"Rio de Janeiro",package:"2.0.0-beta.2",downloads:"250"},{cities:"Santa Catarina",package:"1.9.1",downloads:"100"},{cities:"Curitiba",package:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",package:"1.9.1",downloads:"250"},{cities:"Londrina",package:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",package:"1.9.1",downloads:"1100"}]}static \u0275fac=function(l){return new(l||o)};static \u0275prov=X({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var De=["formShare"],be=(()=>{class o{poNotification=T(j);sampleDashboardService=T(K);formShare;poModal;columns;email=void 0;isSubscribed=!1;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"GitHub",url:"https://github.com/po-ui/po-angular"},{label:"More info",subItems:[{label:"po-dropdown documentation",url:"https://po-ui.io/documentation/po-dropdown"}]},{label:"Components",url:"/documentation"},{label:"Disable notification",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};cancelAction={action:()=>{this.modalClose()},label:"Cancel"};shareAction={action:()=>{this.share()},label:"Share"};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Email invalid."),this.modalClose()}disableNotification(){this.isSubscribed=!0}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-dashboard"]],viewQuery:function(l,i){if(l&1&&(H(De,7),H(z,7)),l&2){let p;G(p=U())&&(i.formShare=p.first),G(p=U())&&(i.poModal=p.first)}},standalone:!1,features:[Y([K])],decls:38,vars:8,consts:[["formShare","ngForm"],["p-title","Dashboard",3,"p-actions","p-breadcrumb"],[1,"po-row"],["p-title","Daily visitors",1,"po-md-6","po-lg-4","po-mb-2"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-widget-text-subtitle"],["p-title","Most viewed page",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Website status",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","NPM downloads",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Devforum PO questions",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Angular versions supported",1,"po-md-6","po-lg-4","po-mb-2"],[3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(l,i){if(l&1){let p=B();n(0,"po-page-default",1)(1,"div",2)(2,"po-widget",3)(3,"div",4),e(4,"540"),t(),n(5,"div",5),e(6,"www.po.com.br"),t()(),n(7,"po-widget",6)(8,"div",4),e(9,"300 views"),t(),n(10,"div",5),e(11,"https://po-ui.io"),t()(),n(12,"po-widget",7)(13,"div",4),e(14,"Online"),t(),n(15,"div",5),e(16,"28 days"),t()(),n(17,"po-widget",8)(18,"div",4),e(19,"266"),t(),n(20,"div",5),e(21,"@po-ui/ng-components - 1.10.1"),t()(),n(22,"po-widget",9)(23,"div",4),e(24,"800 questions"),t(),n(25,"div",5),e(26,"https://devforum.po.com.br"),t()(),n(27,"po-widget",10)(28,"div",4),e(29,"AngularJS - Angular 6"),t(),n(30,"div",5),e(31,"Angular 6 most downloaded"),t()()(),r(32,"po-divider")(33,"po-table",11),t(),n(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),h("ngModelChange",function(a){return s(p),f(i.email,a)||(i.email=a),c(a)}),t()()()}l&2&&(u("p-actions",i.actions)("p-breadcrumb",i.breadcrumb),m(33),u("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",!1),m(),u("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),m(3),g("ngModel",i.email))},dependencies:[N,F,O,q,V,W,ae,z,P,ie,re],styles:[".sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}"]})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-dashboard-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(r(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Default - Dashboard"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
  <div class="po-row">
    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Daily visitors">
      <div class="po-font-subtitle po-text-center">540</div>
      <div class="po-text-center sample-widget-text-subtitle">www.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Most viewed page">
      <div class="po-font-subtitle po-text-center">300 views</div>
      <div class="po-text-center sample-widget-text-subtitle">https://po-ui.io</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Website status">
      <div class="po-font-subtitle po-text-center">Online</div>
      <div class="po-text-center sample-widget-text-subtitle">28 days</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="NPM downloads">
      <div class="po-font-subtitle po-text-center">266</div>
      <div class="po-text-center sample-widget-text-subtitle">&#64;po-ui/ng-components - 1.10.1</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Devforum PO questions">
      <div class="po-font-subtitle po-text-center">800 questions</div>
      <div class="po-text-center sample-widget-text-subtitle">https://devforum.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Angular versions supported">
      <div class="po-font-subtitle po-text-center">AngularJS - Angular 6</div>
      <div class="po-text-center sample-widget-text-subtitle">Angular 6 most downloaded</div>
    </po-widget>
  </div>

  <po-divider />

  <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>
</po-page-default>

<po-modal p-title="Share webpage" [p-primary-action]="shareAction" [p-secondary-action]="cancelAction">
  <form #formShare="ngForm">
    <po-email
      class="po-lg-12"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Type an e-mail for sharing webpage: http://www.po.com.br"
      p-required
    >
    </po-email>
  </form>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';

import { SampleDashboardService } from './sample-po-page-default-dashboard.service';

@Component({
  selector: 'sample-po-page-default-dashboard',
  templateUrl: './sample-po-page-default-dashboard.component.html',
  styles: [
    \`
      .sample-widget-text-subtitle {
        font-family: NunitoSans;
        font-size: 14px;
        text-align: center;
        color: #9da7a9;
      }
    \`
  ],
  providers: [SampleDashboardService],
  standalone: false
})
export class SamplePoPageDefaultDashboardComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private sampleDashboardService = inject(SampleDashboardService);

  @ViewChild('formShare', { static: true }) formShare: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  columns: Array<PoTableColumn>;
  email: string = undefined;
  isSubscribed: boolean = false;
  items: Array<object>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Share', action: this.modalOpen.bind(this), icon: 'an an-share' },
    { label: 'GitHub', url: 'https://github.com/po-ui/po-angular' },
    {
      label: 'More info',
      subItems: [
        {
          label: 'po-dropdown documentation',
          url: 'https://po-ui.io/documentation/po-dropdown'
        }
      ]
    },
    { label: 'Components', url: '/documentation' },
    { label: 'Disable notification', action: this.disableNotification.bind(this), disabled: () => this.isSubscribed }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }]
  };

  public readonly cancelAction: PoModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Cancel'
  };

  public readonly shareAction: PoModalAction = {
    action: () => {
      this.share();
    },
    label: 'Share'
  };

  ngOnInit(): void {
    this.columns = this.sampleDashboardService.getColumns();
    this.items = this.sampleDashboardService.getItems();
  }

  modalClose() {
    this.poModal.close();
    this.formShare.reset();
  }

  modalOpen() {
    this.poModal.open();
  }

  share() {
    if (this.formShare.valid) {
      this.poNotification.success(\`Webpage shared successfully to: \${this.email}.\`);
    } else {
      this.poNotification.error(\`Email invalid.\`);
    }
    this.modalClose();
  }

  private disableNotification() {
    this.isSubscribed = true;
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SampleDashboardService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'cities', label: 'Cities that most downloaded PO' },
      { property: 'package', label: 'Package version' },
      { property: 'downloads', label: 'Downloads' }
    ];
  }

  getItems() {
    return [
      { cities: 'S\xE3o Paulo', package: '2.0.0-beta.2', downloads: '2000' },
      { cities: 'Joinville', package: '1.9.1', downloads: '1000' },
      { cities: 'Rio de Janeiro', package: '2.0.0-beta.2', downloads: '250' },
      { cities: 'Santa Catarina', package: '1.9.1', downloads: '100' },
      { cities: 'Curitiba', package: '2.0.0-beta.2', downloads: '1040' },
      { cities: 'Goiania', package: '1.9.1', downloads: '250' },
      { cities: 'Londrina', package: '1.9.1', downloads: '35' },
      { cities: 'Belo Horizonte', package: '1.9.1', downloads: '1100' }
    ];
  }
}
`),t()()()()(),n(25,"div",10),r(26,"sample-po-page-default-dashboard"),t(),r(27,"hr")),l&2&&(m(5),y("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel,""),m(),u("ngClass",_(4,Me,i.hideSampleCodeTabs)))},dependencies:[M,w,x,C,be],encapsulation:2})}return o})();var fe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-default-doc"]],standalone:!1,decls:744,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageDefaultLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoDropdownAction>"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes po-page-default, po-page-detail, po-page-edit,
po-page-list e po-page-slide.`),t()(),n(7,"h3",3),e(8,"Componente"),t(),n(9,"h4",4)(10,"code",5),e(11,"PoPageDefaultComponent"),t()(),n(12,"div",2)(13,"p"),e(14,"O componente "),n(15,"code"),e(16,"po-page-default"),t(),e(17," \xE9 utilizado como o container principal para as telas sem um template definido."),t(),n(18,"h4"),e(19,"Tokens customiz\xE1veis"),t(),n(20,"blockquote")(21,"p"),e(22,"Para maiores informa\xE7\xF5es, acesse o guia "),n(23,"a",6),e(24,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(25,"."),t()(),n(26,"table")(27,"thead")(28,"tr")(29,"th"),e(30,"Propriedade"),t(),n(31,"th"),e(32,"Descri\xE7\xE3o"),t(),n(33,"th"),e(34,"Valor Padr\xE3o"),t()()(),n(35,"tbody")(36,"tr")(37,"td")(38,"strong"),e(39,"Header"),t()(),r(40,"td")(41,"td"),t(),n(42,"tr")(43,"td")(44,"code"),e(45,"--padding"),t()(),n(46,"td"),e(47,"Espa\xE7amento do header"),t(),n(48,"td")(49,"code"),e(50,"var(--spacing-xs) var(--spacing-md)"),t()()(),n(51,"tr")(52,"td")(53,"code"),e(54,"--gap"),t()(),n(55,"td"),e(56,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),t(),n(57,"td")(58,"code"),e(59,"var(--spacing-md)"),t()()(),n(60,"tr")(61,"td")(62,"code"),e(63,"--gap-actions"),t()(),n(64,"td"),e(65,"Espa\xE7amento entre as a\xE7\xF5es"),t(),n(66,"td")(67,"code"),e(68,"var(--spacing-xs)"),t()()(),n(69,"tr")(70,"td")(71,"code"),e(72,"--font-family"),t()(),n(73,"td"),e(74,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),t(),n(75,"td")(76,"code"),e(77,"var(--font-family-theme)"),t()()(),n(78,"tr")(79,"td")(80,"strong"),e(81,"Content"),t()(),r(82,"td")(83,"td"),t(),n(84,"tr")(85,"td")(86,"code"),e(87,"--padding-content"),t()(),n(88,"td"),e(89,"Espa\xE7amento do conte\xFAdo"),t(),n(90,"td")(91,"code"),e(92,"var(--spacing-xs) var(--spacing-sm)"),t()()()()()(),n(93,"div",7)(94,"h4",8),e(95,"Seletor"),t(),n(96,"pre",9),e(97,`<po-page-default
    p-actions="Array<PoPageAction>"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-literals="PoPageDefaultLiterals"
    p-subtitle="string"
    p-title="string" >
</po-page-default>
`),t()(),n(98,"h4",10),e(99,"Propriedades"),t(),n(100,"table",11)(101,"tr",12)(102,"th",13),e(103,"Nome"),t(),n(104,"th",13),e(105,"Tipo"),t(),n(106,"th",13),e(107,"Padr\xE3o"),t(),n(108,"th",13),e(109,"Descri\xE7\xE3o"),t()(),n(110,"tr",14)(111,"td",15)(112,"div",16)(113,"span",17),e(114," p-actions"),r(115,"br"),t()()(),n(116,"td",18)(117,"code",19),e(118,"Array<PoPageAction>"),t()(),n(119,"td",20),e(120,"-"),t(),n(121,"td",21)(122,"em")(123,"strong"),e(124,"(opcional)"),t()(),n(125,"p"),e(126,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),n(127,"code"),e(128,"PoPageAction"),t(),e(129,"."),t()()(),n(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),e(134," p-breadcrumb"),r(135,"br"),t()()(),n(136,"td",18)(137,"code",22),e(138,"PoBreadcrumb"),t()(),n(139,"td",20),e(140,"-"),t(),n(141,"td",21)(142,"em")(143,"strong"),e(144,"(opcional)"),t()(),n(145,"p"),e(146,"Objeto com propriedades do breadcrumb."),t()()(),n(147,"tr",14)(148,"td",15)(149,"div",16)(150,"span",17),e(151," p-components-size"),r(152,"br"),t()()(),n(153,"td",18)(154,"code",23),e(155,"string"),t()(),n(156,"td",20)(157,"p")(158,"code"),e(159,"medium"),t()()(),n(160,"td",21)(161,"em")(162,"strong"),e(163,"(opcional)"),t()(),n(164,"p"),e(165,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),n(166,"ul")(167,"li")(168,"code"),e(169,"small"),t(),e(170,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(171,"li")(172,"code"),e(173,"medium"),t(),e(174,": aplica a medida medium de cada componente."),t()(),n(175,"blockquote")(176,"p"),e(177,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(178,"code"),e(179,"medium"),t(),e(180,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(181,"a",24),e(182,"po-theme"),t(),e(183,"."),t()()()(),n(184,"tr",14)(185,"td",15)(186,"div",16)(187,"span",17),e(188," p-literals"),r(189,"br"),t()()(),n(190,"td",18)(191,"code",25),e(192,"PoPageDefaultLiterals"),t()(),n(193,"td",20),e(194,"-"),t(),n(195,"td",21)(196,"em")(197,"strong"),e(198,"(opcional)"),t()(),n(199,"p"),e(200,"Objeto com as literais usadas no "),n(201,"code"),e(202,"po-page-default"),t(),e(203,"."),t(),n(204,"p"),e(205,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),n(206,"pre")(207,"code"),e(208,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),t()(),n(209,"p"),e(210,"Ou passando apenas as literais que deseja customizar:"),t(),n(211,"pre")(212,"code"),e(213,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),t()(),n(214,"p"),e(215,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),n(216,"pre")(217,"code"),e(218,`<po-page-default
  [p-literals]="customLiterals">
</po-page-default>
`),t()(),n(219,"blockquote")(220,"p"),e(221,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),n(222,"a",26)(223,"code"),e(224,"PoI18nService"),t()(),e(225," ou "),n(226,"em"),e(227,"browser"),t(),e(228,"."),t()()()(),n(229,"tr",14)(230,"td",15)(231,"div",16)(232,"span",17),e(233," p-subtitle"),r(234,"br"),t()()(),n(235,"td",18)(236,"code",23),e(237,"string"),t()(),n(238,"td",20),e(239,"-"),t(),n(240,"td",21)(241,"em")(242,"strong"),e(243,"(opcional)"),t()(),n(244,"p"),e(245,"Subtitulo do Header da p\xE1gina"),t()()(),n(246,"tr",14)(247,"td",15)(248,"div",16)(249,"span",17),e(250," p-title"),r(251,"br"),t()()(),n(252,"td",18)(253,"code",23),e(254,"string"),t()(),n(255,"td",20),e(256,"-"),t(),n(257,"td",21)(258,"p"),e(259,"T\xEDtulo da p\xE1gina."),t()()()(),n(260,"h3"),e(261,"Interfaces"),t(),n(262,"h4",27)(263,"code",5),e(264,"PoBreadcrumbItem"),t()(),n(265,"div",2)(266,"p"),e(267,"Interface que define cada item do componente "),n(268,"strong"),e(269,"po-breadcrumb"),t(),e(270,"."),t()(),n(271,"h4",10),e(272,"Propriedades"),t(),n(273,"table",11)(274,"tr",12)(275,"th",13),e(276,"Nome"),t(),n(277,"th",13),e(278,"Tipo"),t(),n(279,"th",13),e(280,"Descri\xE7\xE3o"),t()(),n(281,"tr",14)(282,"td",15)(283,"div",16)(284,"span",17),e(285," action"),r(286,"br"),t()()(),n(287,"td",18)(288,"code",28),e(289,"Function"),t()(),n(290,"td",21)(291,"em")(292,"strong"),e(293,"(opcional)"),t()(),n(294,"p"),e(295,"A\xE7\xE3o executada ao clicar no item."),t(),n(296,"blockquote")(297,"p"),e(298,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),n(299,"em"),e(300,"label"),t(),e(301," do item como par\xE2metro para execu\xE7\xE3o."),t()()()(),n(302,"tr",14)(303,"td",15)(304,"div",16)(305,"span",17),e(306," label"),r(307,"br"),t()()(),n(308,"td",18)(309,"code",23),e(310,"string"),t()(),n(311,"td",21)(312,"p"),e(313,"R\xF3tulo do item."),t()()(),n(314,"tr",14)(315,"td",15)(316,"div",16)(317,"span",17),e(318," link"),r(319,"br"),t()()(),n(320,"td",18)(321,"code",23),e(322,"string"),t()(),n(323,"td",21)(324,"em")(325,"strong"),e(326,"(opcional)"),t()(),n(327,"p"),e(328,"Url do item."),t(),n(329,"blockquote")(330,"p"),e(331,"Caso o item tamb\xE9m contenha uma "),n(332,"em"),e(333,"action"),t(),e(334," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),n(335,"em"),e(336,"link"),t(),e(337,"."),t()(),n(338,"blockquote")(339,"p"),e(340,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),n(341,"strong")(342,"a",29),e(343,"Veja um exemplo de como criar rotas aqui"),t()(),e(344,"."),t()(),n(345,"blockquote")(346,"p"),e(347,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),n(348,"code"),e(349,"p-favorite-service"),t(),e(350," consiga favoritar ou desfavoritar."),t()()()()(),n(351,"h4",27)(352,"code",5),e(353,"PoBreadcrumb"),t()(),n(354,"div",2)(355,"p"),e(356,"Interface que define o "),n(357,"code"),e(358,"po-breadcrumb"),t(),e(359,"."),t()(),n(360,"h4",10),e(361,"Propriedades"),t(),n(362,"table",11)(363,"tr",12)(364,"th",13),e(365,"Nome"),t(),n(366,"th",13),e(367,"Tipo"),t(),n(368,"th",13),e(369,"Descri\xE7\xE3o"),t()(),n(370,"tr",14)(371,"td",15)(372,"div",16)(373,"span",17),e(374," favorite"),r(375,"br"),t()()(),n(376,"td",18)(377,"code",23),e(378,"string"),t()(),n(379,"td",21)(380,"em")(381,"strong"),e(382,"(opcional)"),t()(),n(383,"p"),e(384,"Permite definir uma URL para favoritar ou desfavoritar."),t(),n(385,"blockquote")(386,"p"),e(387,"Para maiores informa\xE7\xF5es verificar a propriedade "),n(388,"code"),e(389,"p-favorite-service"),t(),e(390," do componente "),n(391,"code"),e(392,"po-breadcrumb"),t(),e(393,"."),t()()()(),n(394,"tr",14)(395,"td",15)(396,"div",16)(397,"span",17),e(398," items"),r(399,"br"),t()()(),n(400,"td",18)(401,"code",30),e(402,"Array<PoBreadcrumbItem>"),t()(),n(403,"td",21)(404,"p"),e(405,"Lista de itens do "),n(406,"em"),e(407,"breadcrumb"),t(),e(408,"."),t(),n(409,"p")(410,"strong"),e(411,"Exemplo:"),t()(),n(412,"pre")(413,"code"),e(414,`{ label: 'Po Portal', link: 'portal' }
`),t()()()(),n(415,"tr",14)(416,"td",15)(417,"div",16)(418,"span",17),e(419," params"),r(420,"br"),t()()(),n(421,"td",18)(422,"code",31),e(423,"object"),t()(),n(424,"td",21)(425,"em")(426,"strong"),e(427,"(opcional)"),t()(),n(428,"p"),e(429,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),t()()()(),n(430,"h4",27)(431,"code",5),e(432,"PoPageAction"),t()(),n(433,"div",2)(434,"p"),e(435,"Interface para as a\xE7\xF5es dos componentes po-page-default e po-page-list."),t(),n(436,"blockquote")(437,"p"),e(438,`Quando o array de actions possui quatro ou mais registros, os dois \xFAltimos e os seguintes s\xE3o automaticamente agrupados no po-dropdown.
A partir desse ponto, as propriedades `),n(439,"code"),e(440,"selected"),t(),e(441,", "),n(442,"code"),e(443,"separator"),t(),e(444,", "),n(445,"code"),e(446,"type"),t(),e(447," e "),n(448,"code"),e(449,"subItems"),t(),e(450,` passam a ter efeito apenas nas a\xE7\xF5es exibidas dentro do dropdown, ou seja, a partir da terceira a\xE7\xE3o.
Dessa forma, o uso de subItems (agrupadores dentro do dropdown) s\xF3 ter\xE1 efeito quando houver pelo menos quatro a\xE7\xF5es definidas.`),t()()(),n(451,"h4",10),e(452,"Propriedades"),t(),n(453,"table",11)(454,"tr",12)(455,"th",13),e(456,"Nome"),t(),n(457,"th",13),e(458,"Tipo"),t(),n(459,"th",13),e(460,"Descri\xE7\xE3o"),t()(),n(461,"tr",14)(462,"td",15)(463,"div",16)(464,"span",17),e(465," action"),r(466,"br"),t()()(),n(467,"td",18)(468,"code",28),e(469,"Function"),t()(),n(470,"td",21)(471,"em")(472,"strong"),e(473,"(opcional)"),t()(),n(474,"p"),e(475,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),n(476,"p"),e(477,"No componente "),n(478,"code"),e(479,"po-dropdown"),t(),e(480,", a action tamb\xE9m pode ser executada para o agrupador de subitens."),t(),n(481,"blockquote")(482,"p"),e(483,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),n(484,"em"),e(485,"bind"),t(),e(486,"."),t()(),n(487,"p"),e(488,"Exemplo: "),n(489,"code"),e(490,"action: this.myFunction.bind(this)"),t()()()(),n(491,"tr",14)(492,"td",15)(493,"div",16)(494,"span",17),e(495," disabled"),r(496,"br"),t()()(),n(497,"td",18)(498,"code",32),e(499,"boolean "),t(),n(500,"code",28),e(501," Function"),t()(),n(502,"td",21)(503,"em")(504,"strong"),e(505,"(opcional)"),t()(),n(506,"p"),e(507,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),n(508,"p"),e(509,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),n(510,"tr",14)(511,"td",15)(512,"div",16)(513,"span",17),e(514," icon"),r(515,"br"),t()()(),n(516,"td",18)(517,"code",23),e(518,"string "),t(),n(519,"code",33),e(520," TemplateRef<void>"),t()(),n(521,"td",21)(522,"em")(523,"strong"),e(524,"(opcional)"),t()(),n(525,"p"),e(526,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),n(527,"p"),e(528,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(529,"a",34),e(530,"Biblioteca de \xEDcones"),t(),e(531,". conforme exemplo abaixo:"),t(),n(532,"pre")(533,"code"),e(534,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),t()(),n(535,"p"),e(536,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),n(537,"pre")(538,"code"),e(539,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),t()(),n(540,"p"),e(541,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(542,"code"),e(543,"TemplateRef"),t(),e(544,`, conforme exemplo abaixo:
component.html:`),t(),n(545,"pre")(546,"code"),e(547,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),t()(),n(548,"p"),e(549,"component.ts:"),t(),n(550,"pre")(551,"code"),e(552,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),t()()()(),n(553,"tr",14)(554,"td",15)(555,"div",16)(556,"span",17),e(557," label"),r(558,"br"),t()()(),n(559,"td",18)(560,"code",23),e(561,"string"),t()(),n(562,"td",21)(563,"p"),e(564,"R\xF3tulo da a\xE7\xE3o."),t(),n(565,"p"),e(566,"No componente "),n(567,"code"),e(568,"po-dropdown"),t(),e(569,", a label tamb\xE9m pode representar o agrupador de subitens."),t()()(),n(570,"tr",14)(571,"td",15)(572,"div",16)(573,"span",17),e(574," selected"),r(575,"br"),t()()(),n(576,"td",18)(577,"code",32),e(578,"boolean"),t()(),n(579,"td",21)(580,"em")(581,"strong"),e(582,"(opcional)"),t()(),n(583,"p"),e(584,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),n(585,"tr",14)(586,"td",15)(587,"div",16)(588,"span",17),e(589," separator"),r(590,"br"),t()()(),n(591,"td",18)(592,"code",32),e(593,"boolean"),t()(),n(594,"td",21)(595,"em")(596,"strong"),e(597,"(opcional)"),t()(),n(598,"p"),e(599,"Atribui uma linha separadora acima do item."),t()()(),n(600,"tr",14)(601,"td",15)(602,"div",16)(603,"span",17),e(604," subItems"),r(605,"br"),t()()(),n(606,"td",18)(607,"code",35),e(608,"Array<PoDropdownAction>"),t()(),n(609,"td",21)(610,"em")(611,"strong"),e(612,"(opcional)"),t()(),n(613,"p"),e(614,"Array de a\xE7\xF5es ("),n(615,"code"),e(616,"PoDropdownAction"),t(),e(617,") usado para criar agrupadores de subitens."),t(),n(618,"ul")(619,"li"),e(620,"Permite a cria\xE7\xE3o de menus aninhados (submenus)."),t()(),n(621,"blockquote")(622,"p"),e(623,`Boas pr\xE1ticas de desenvolvimento:
Recomenda-se limitar a navega\xE7\xE3o a, no m\xE1ximo, tr\xEAs n\xEDveis hier\xE1rquicos.
Isso evita sobrecarga cognitiva, facilita a memoriza\xE7\xE3o da estrutura e garante uma melhor experi\xEAncia de uso.`),t()()()(),n(624,"tr",14)(625,"td",15)(626,"div",16)(627,"span",17),e(628," type"),r(629,"br"),t()()(),n(630,"td",18)(631,"code",23),e(632,"string"),t()(),n(633,"td",21)(634,"em")(635,"strong"),e(636,"(opcional)"),t()(),n(637,"p"),e(638,"Define a cor do item, sendo "),n(639,"code"),e(640,"default"),t(),e(641," o padr\xE3o."),t(),n(642,"p"),e(643,"Valores v\xE1lidos:"),t(),n(644,"ul")(645,"li")(646,"code"),e(647,"default"),t()(),n(648,"li")(649,"code"),e(650,"danger"),t(),e(651," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),n(652,"tr",14)(653,"td",15)(654,"div",16)(655,"span",17),e(656," url"),r(657,"br"),t()()(),n(658,"td",18)(659,"code",23),e(660,"string"),t()(),n(661,"td",21)(662,"em")(663,"strong"),e(664,"(opcional)"),t()(),n(665,"p"),e(666,"URL utilizada para redirecionamento das p\xE1ginas."),t(),n(667,"p"),e(668,"No componente "),n(669,"code"),e(670,"po-dropdown"),t(),e(671,`, a url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),n(672,"code"),e(673,"url"),t(),e(674," \xE9 informada em um agrupador, o clique "),n(675,"strong"),e(676,"n\xE3o abrir\xE1 os subitens"),t(),e(677,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),t()()(),n(678,"tr",14)(679,"td",15)(680,"div",16)(681,"span",17),e(682," visible"),r(683,"br"),t()()(),n(684,"td",18)(685,"code",32),e(686,"boolean "),t(),n(687,"code",28),e(688," Function"),t()(),n(689,"td",21)(690,"em")(691,"strong"),e(692,"(opcional)"),t()(),n(693,"p"),e(694,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),n(695,"blockquote")(696,"p"),e(697,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),n(698,"p"),e(699,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),n(700,"ul")(701,"li")(702,"p"),e(703,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),n(704,"li")(705,"p"),e(706,"Informar diretamente um valor booleano."),t()()()()()(),n(707,"h4",27)(708,"code",5),e(709,"PoPageDefaultLiterals"),t()(),n(710,"div",2)(711,"p"),e(712,"Interface para defini\xE7\xE3o das literais usadas no "),n(713,"code"),e(714,"po-page-default"),t(),e(715,"."),t()(),n(716,"h4",10),e(717,"Propriedades"),t(),n(718,"table",11)(719,"tr",12)(720,"th",13),e(721,"Nome"),t(),n(722,"th",13),e(723,"Tipo"),t(),n(724,"th",13),e(725,"Descri\xE7\xE3o"),t()(),n(726,"tr",14)(727,"td",15)(728,"div",16)(729,"span",17),e(730," otherActions"),r(731,"br"),t()()(),n(732,"td",18)(733,"code",23),e(734,"string"),t()(),n(735,"td",21)(736,"em")(737,"strong"),e(738,"(opcional)"),t()(),n(739,"p"),e(740,"Legenda do "),n(741,"code"),e(742,"po-dropdown"),t(),e(743," de a\xE7\xF5es."),t()()()()())},dependencies:[w],encapsulation:2})}return o})();var he=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(R(Z),R($))};static \u0275cmp=S({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Default",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return i.changeTab("doc")}),r(3,"sample-po-page-default-doc"),t(),n(4,"po-tab",3),E("p-click",function(){return i.changeTab("web")}),r(5,"sample-po-page-default-basic-view")(6,"sample-po-page-default-labs-view")(7,"sample-po-page-default-dashboard-view"),t()()()),l&2&&(u("p-actions",i.actions),m(2),u("p-active",i.activeTab==="doc"),m(2),u("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[P,x,C,se,ue,ge,fe],encapsulation:2})}return o})();var ke=[{path:"",component:he}],Se=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=L({type:o});static \u0275inj=k({imports:[J.forChild(ke),J]})}return o})();var st=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=L({type:o});static \u0275inj=k({imports:[me,Se]})}return o})();export{st as DocPoPageDefaultModule};
