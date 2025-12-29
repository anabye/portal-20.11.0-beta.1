import{o as x,p as xe}from"./chunk-XTKMJXR5.js";import{Ab as y,Fa as ve,Ma as we,O as be,Q as Se,Sa as fe,U as Ee,Xa as A,a as ce,fb as D,gb as j,hb as T,m as ue,nb as Ce,q as he,qb as ye,sa as B,v as ge,zb as C}from"./chunk-PZXWGKHI.js";import"./chunk-ZXY2ZB5H.js";import{$a as K,Aa as m,Da as L,Eb as M,Fc as ae,Gc as le,Hc as re,Ic as se,Jc as pe,La as t,M as Q,Ma as e,N as O,Na as r,Q as F,Qb as oe,Ra as H,Sa as g,U as c,V as u,Wa as Y,Wc as me,Yc as de,_a as Z,_c as W,a as J,ab as X,b as $,bb as q,cb as i,eb as _,gb as S,hb as E,ib as v,ja as s,ka as N,mb as ee,nb as z,ob as V,pb as te,qa as b,ra as I,ub as ie,vb as ne,wa as P}from"./chunk-GP3Z6ZCX.js";var Fe=()=>({name:"Registro 1",email:"register@po-ui.com"}),Oe=()=>({name:"Registro 2",email:"register2@po-ui.com"}),Ie=(a,w)=>[a,w];function He(a,w){if(a&1&&(t(0,"div",2),r(1,"po-info",3),e()),a&2){let o=w.$implicit;s(),m("p-value",o.email)}}var Pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-list-view-basic"]],standalone:!1,decls:2,vars:6,consts:[["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],[1,"po-row"],["p-label","Email",1,"po-md-12",3,"p-value"]],template:function(l,n){l&1&&(t(0,"po-list-view",0),P(1,He,2,1,"ng-template",1),e()),l&2&&m("p-items",te(3,Ie,z(1,Fe),z(2,Oe)))},dependencies:[A,T,D],encapsulation:2})}return a})();var je=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-list-view-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO List View Basic"),e(),t(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-list-view-basic/sample-po-list-view-basic.component.html"),e(),t(13,"pre",7),i(14,`<po-list-view
  p-property-title="name"
  [p-items]="[
    { name: 'Registro 1', email: 'register@po-ui.com' },
    { name: 'Registro 2', email: 'register2@po-ui.com' }
  ]"
>
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>
</po-list-view>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-list-view-basic/sample-po-list-view-basic.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-list-view-basic',
  templateUrl: './sample-po-list-view-basic.component.html',
  standalone: false
})
export class SamplePoListViewBasicComponent {}
`),e()()()()(),t(21,"div",10),r(22,"sample-po-list-view-basic"),e(),r(23,"hr")),l&2&&(s(5),L("po-icon "+n.sampleCodeButtonIcon),s(),_(" ",n.sampleCodeButtonLabel,""),s(),m("ngClass",V(4,je,n.hideSampleCodeTabs)))},dependencies:[M,x,C,y,Pe],encapsulation:2})}return a})();function qe(a,w){if(a&1&&(t(0,"div",5),r(1,"po-info",22)(2,"po-info",23)(3,"po-info",24)(4,"po-info",25),e()),a&2){let o=w.$implicit;s(),m("p-value",o.name),s(),m("p-value",o.email),s(),m("p-value",o.location),s(),m("p-value",o.phone)}}function ze(a,w){if(a&1&&(t(0,"div",5),r(1,"po-info",26)(2,"po-info",27),e()),a&2){let o=w.$implicit;s(),m("p-value",o.company),s(),m("p-value",o.zipCode)}}var _e=(()=>{class a{poNotification=F(B);action;actions;componentsSize="medium";customLiterals;height;items;literals;properties;propertyLink;propertyLinkValue;propertyTitle;titleAction;propertiesOptions=[{value:"select",label:"Select"},{value:"hideSelectAll",label:"Hide Select All",disabled:!0},{value:"showMoreDisabled",label:"Show More Disabled"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertyTitleOptions=[{value:"name",label:"name"},{value:"email",label:"email"},{value:"phone",label:"phone"},{value:"location",label:"location"}];typeOptions=[{label:"Default",value:"default"},{label:"Danger",value:"danger"}];ngOnInit(){this.restore()}addAction(o){let l=Object.assign({},o);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.actions.push(l),this.restoreActionForm()}addItem(){this.items.push(this.generateNewItem(this.items.length+1))}changeAction(o){this.titleAction=o}changeActionOptions(){this.propertiesOptions=this.propertiesOptions.map(o=>o.value==="hideSelectAll"?$(J({},o),{disabled:!this.properties.includes("select")}):o)}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}restore(){this.actions=[],this.componentsSize="medium",this.items=[],this.height=void 0,this.literals="",this.properties=[],this.propertyLink="url",this.propertyLinkValue="",this.propertyTitle="",this.titleAction="",this.restoreActionForm()}showMore(){this.addItem()}generateNewItem(o){return{name:`Register ${o}`,email:`register${o}@po-ui.com`,phone:`(55) ${o}234567`,location:"Brazil",company:`Company ${o}`,url:this.propertyLinkValue,zipCode:`${o}221`}}restoreActionForm(){this.action={label:"",visible:null}}showAction(o){this.poNotification.success(`Action clicked: ${o}`)}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-list-view-labs"]],standalone:!1,decls:35,vars:30,consts:[["propertiesForm","ngForm"],["actionForm","ngForm"],[3,"p-show-more","p-title-action","p-actions","p-components-size","p-height","p-hide-select-all","p-items","p-literals","p-property-link","p-property-title","p-select","p-show-more-disabled"],["p-list-view-content-template",""],["p-list-view-detail-template",""],[1,"po-row"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","propertyTitle","p-help","Ex.: email","p-label","Property title",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","height","p-help","Ex.: 200","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","propertyLinkValue","p-help",'Ex.: "http://po.com.br"',"p-label","Title Link",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties","p-help",'To enable the "Hide Select All" option, you must select the "Select" option first.',1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-4","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-label","Name",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Email",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Location",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Phone",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Company",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Zip Code",1,"po-md-6","po-lg-3",3,"p-value"]],template:function(l,n){if(l&1){let d=H();t(0,"po-list-view",2),g("p-show-more",function(){return c(d),u(n.showMore())})("p-title-action",function(){return c(d),u(n.changeAction("p-title-action"))}),P(1,qe,5,4,"ng-template",3)(2,ze,3,2,"ng-template",4),e(),r(3,"po-divider"),t(4,"div",5)(5,"po-button",6),g("p-click",function(){return c(d),u(n.addItem())}),e()(),r(6,"po-divider"),t(7,"div",5),r(8,"po-info",7),e(),r(9,"po-divider"),t(10,"form",null,0)(12,"div",5)(13,"po-select",8),v("ngModelChange",function(p){return c(d),E(n.propertyTitle,p)||(n.propertyTitle=p),u(p)}),e(),t(14,"po-number",9),v("ngModelChange",function(p){return c(d),E(n.height,p)||(n.height=p),u(p)}),g("p-change",function(){return c(d),u(n.changeLiterals())}),e(),t(15,"po-input",10),v("ngModelChange",function(p){return c(d),E(n.propertyLinkValue,p)||(n.propertyLinkValue=p),u(p)}),e(),t(16,"po-input",11),v("ngModelChange",function(p){return c(d),E(n.literals,p)||(n.literals=p),u(p)}),g("p-change",function(){return c(d),u(n.changeLiterals())}),e(),t(17,"po-radio-group",12),v("ngModelChange",function(p){return c(d),E(n.componentsSize,p)||(n.componentsSize=p),u(p)}),e()(),t(18,"div",5)(19,"po-checkbox-group",13),v("ngModelChange",function(p){return c(d),E(n.properties,p)||(n.properties=p),u(p)}),g("p-change",function(){return c(d),u(n.changeActionOptions())}),e()()(),r(20,"po-divider"),t(21,"form",null,1)(23,"div",5)(24,"po-input",14),v("ngModelChange",function(p){return c(d),E(n.action.action,p)||(n.action.action=p),u(p)}),e(),t(25,"po-input",15),v("ngModelChange",function(p){return c(d),E(n.action.label,p)||(n.action.label=p),u(p)}),e(),t(26,"po-input",16),v("ngModelChange",function(p){return c(d),E(n.action.url,p)||(n.action.url=p),u(p)}),e(),t(27,"po-select",17),v("ngModelChange",function(p){return c(d),E(n.action.type,p)||(n.action.type=p),u(p)}),e(),t(28,"po-select",18),v("ngModelChange",function(p){return c(d),E(n.action.icon,p)||(n.action.icon=p),u(p)}),e(),t(29,"po-checkbox-group",19),v("ngModelChange",function(p){return c(d),E(n.action,p)||(n.action=p),u(p)}),e()(),t(30,"div",5)(31,"po-button",20),g("p-click",function(){return c(d),u(n.addAction(n.action))}),e()()(),r(32,"po-divider"),t(33,"div",5)(34,"po-button",21),g("p-click",function(){return c(d),q(22).reset(),u(n.restore())}),e()()}if(l&2){let d=q(22);m("p-actions",n.actions)("p-components-size",n.componentsSize)("p-height",n.height)("p-hide-select-all",n.properties.includes("hideSelectAll"))("p-items",n.items)("p-literals",n.customLiterals)("p-property-link",n.propertyLink)("p-property-title",n.propertyTitle)("p-select",n.properties.includes("select"))("p-show-more-disabled",n.properties.includes("showMoreDisabled")),s(8),m("p-value",n.titleAction),s(5),S("ngModel",n.propertyTitle),m("p-options",n.propertyTitleOptions),s(),S("ngModel",n.height),s(),S("ngModel",n.propertyLinkValue),s(),S("ngModel",n.literals),s(),S("ngModel",n.componentsSize),m("p-options",n.componentsSizeOptions),s(2),S("ngModel",n.properties),m("p-options",n.propertiesOptions),s(5),S("ngModel",n.action.action),s(),S("ngModel",n.action.label),s(),S("ngModel",n.action.url),s(),S("ngModel",n.action.type),m("p-options",n.typeOptions),s(),S("ngModel",n.action.icon),m("p-options",n.iconOptions),s(),S("ngModel",n.action),m("p-options",n.actionOptions),s(2),m("p-disabled",d.invalid)}},dependencies:[pe,ae,le,se,re,ge,ce,be,Se,ve,we,fe,A,T,D,j],encapsulation:2})}return a})();var Re=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-list-view-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO List View Labs"),e(),t(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-list-view-labs/sample-po-list-view-labs.component.html"),e(),t(13,"pre",7),i(14,`<po-list-view
  [p-actions]="actions"
  [p-components-size]="componentsSize"
  [p-height]="height"
  [p-hide-select-all]="properties.includes('hideSelectAll')"
  [p-items]="items"
  [p-literals]="customLiterals"
  [p-property-link]="propertyLink"
  [p-property-title]="propertyTitle"
  [p-select]="properties.includes('select')"
  [p-show-more-disabled]="properties.includes('showMoreDisabled')"
  (p-show-more)="showMore()"
  (p-title-action)="changeAction('p-title-action')"
>
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <po-info class="po-md-6 po-lg-3" p-label="Name" [p-value]="item.name"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Email" [p-value]="item.email"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Location" [p-value]="item.location"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Phone" [p-value]="item.phone"> </po-info>
    </div>
  </ng-template>

  <ng-template p-list-view-detail-template let-item>
    <div class="po-row">
      <po-info class="po-md-6 po-lg-3" p-label="Company" [p-value]="item.company"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Zip Code" [p-value]="item.zipCode"> </po-info>
    </div>
  </ng-template>
</po-list-view>

<po-divider />

<div class="po-row">
  <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()"> </po-button>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Action" [p-value]="titleAction"> </po-info>
</div>

<po-divider />

<form #propertiesForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6 po-lg-3"
      name="propertyTitle"
      [(ngModel)]="propertyTitle"
      p-help="Ex.: email"
      p-label="Property title"
      [p-options]="propertyTitleOptions"
    >
    </po-select>

    <po-number
      class="po-md-6 po-lg-3"
      name="height"
      [(ngModel)]="height"
      p-help="Ex.: 200"
      p-label="Height"
      (p-change)="changeLiterals()"
    >
    </po-number>

    <po-input
      class="po-md-6"
      name="propertyLinkValue"
      [(ngModel)]="propertyLinkValue"
      p-help='Ex.: "http://po.com.br"'
      p-label="Title Link"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-radio-group
      class="po-lg-6"
      name="size"
      [(ngModel)]="componentsSize"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-label="Properties"
      p-help='To enable the "Hide Select All" option, you must select the "Select" option first.'
      [p-options]="propertiesOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>
</form>

<po-divider />

<form #actionForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-md-6 po-lg-3" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
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
      class="po-md-4 po-lg-3"
      p-label="Add Action"
      [p-disabled]="actionForm.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="actionForm.reset(); restore()"> </po-button>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-list-view-labs/sample-po-list-view-labs.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoListViewAction,
  PoListViewLiterals,
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-list-view-labs',
  templateUrl: './sample-po-list-view-labs.component.html',
  standalone: false
})
export class SamplePoListViewLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoListViewAction;
  actions: Array<PoListViewAction>;
  componentsSize: string = 'medium';
  customLiterals: PoListViewLiterals;
  height: number;
  items: Array<any>;
  literals: string;
  properties: Array<string>;
  propertyLink: string;
  propertyLinkValue: string;
  propertyTitle: string;
  titleAction: string;

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'select', label: 'Select' },
    { value: 'hideSelectAll', label: 'Hide Select All', disabled: true },
    { value: 'showMoreDisabled', label: 'Show More Disabled' }
  ];

  readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  readonly propertyTitleOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'name' },
    { value: 'email', label: 'email' },
    { value: 'phone', label: 'phone' },
    { value: 'location', label: 'location' }
  ];

  readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Default', value: 'default' },
    { label: 'Danger', value: 'danger' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoListViewAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    this.actions.push(newAction);
    this.restoreActionForm();
  }

  addItem() {
    this.items.push(this.generateNewItem(this.items.length + 1));
  }

  changeAction(action) {
    this.titleAction = action;
  }

  changeActionOptions() {
    this.propertiesOptions = this.propertiesOptions.map(propertyOption => {
      if (propertyOption.value === 'hideSelectAll') {
        return { ...propertyOption, disabled: !this.properties.includes('select') };
      } else {
        return propertyOption;
      }
    });
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
    this.componentsSize = 'medium';
    this.items = [];
    this.height = undefined;
    this.literals = '';
    this.properties = [];
    this.propertyLink = 'url';
    this.propertyLinkValue = '';
    this.propertyTitle = '';
    this.titleAction = '';
    this.restoreActionForm();
  }

  showMore() {
    this.addItem();
  }

  private generateNewItem(index) {
    return {
      name: \`Register \${index}\`,
      email: \`register\${index}@po-ui.com\`,
      phone: \`(55) \${index}234567\`,
      location: 'Brazil',
      company: \`Company \${index}\`,
      url: this.propertyLinkValue,
      zipCode: \`\${index}221\`
    };
  }

  private restoreActionForm() {
    this.action = {
      label: '',
      visible: null
    };
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),e()()()()(),t(21,"div",10),r(22,"sample-po-list-view-labs"),e(),r(23,"hr")),l&2&&(s(5),L("po-icon "+n.sampleCodeButtonIcon),s(),_(" ",n.sampleCodeButtonLabel,""),s(),m("ngClass",V(4,Re,n.hideSampleCodeTabs)))},dependencies:[M,x,C,y,_e],encapsulation:2})}return a})();var U=(()=>{class a{getItems(){return[{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",email:"james@johnson.com",telephone:"1-541-754-3010",jobDescription:"Systems Analyst",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",email:"brian@brown.com",telephone:"1-543-456-9876",jobDescription:"Trainee",url:"https://po-ui.io/"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",email:"mary@davis.com",telephone:"1-521-223-3232",jobDescription:"Programmer"},{hireStatus:"progress",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",email:"margaret@garcia.com",telephone:"1-541-344-2211",jobDescription:"Web developer",url:"https://po-ui.io/"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",email:"emma@hall.com",telephone:"1-555-321-3234",jobDescription:"Recruiter",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",email:"lucas@clark.com",telephone:"1-541-322-4343",jobDescription:"Consultant"},{hireStatus:"progress",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",email:"ella@scott.com",telephone:"1-229-324-3434",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",email:"chloe@walker.com",telephone:"1-518-222-1212",jobDescription:"Programmer"}]}static \u0275fac=function(l){return new(l||a)};static \u0275prov=Q({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Ue=["detailsModal"];function Je(a,w){if(a&1&&(t(0,"div",6),r(1,"po-info",14)(2,"po-info",15)(3,"po-info",16),ie(4,"uppercase"),e()),a&2){let o=w.$implicit;s(),m("p-value",o.idCard),s(),m("p-value",o.jobDescription),s(),Y("p-value",ne(4,3,o.hireStatus))}}function $e(a,w){if(a&1&&(t(0,"div",6),r(1,"po-info",17)(2,"po-info",18),e()),a&2){let o=w.$implicit;s(),m("p-value",o.age),s(),m("p-value",o.city)}}var Me=(()=>{class a{poNotification=F(B);hiringProcessesService=F(U);detailsModalElement;hiringProcesses;hiringProcessesFiltered;labelFilter="";modalDetail=!1;selectedActionItem={};titleDetailsModal="User Detail";actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),icon:"an an-check"},{label:"Cancel",action:this.cancelCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),type:"danger",icon:"an an-x"}];pageActions=[{label:"Hire selected",action:this.updateCandidates.bind(this,this.hireCandidate),disabled:this.disableHireButton.bind(this),icon:"an an-check"},{label:"Cancel selected",action:this.updateCandidates.bind(this,this.cancelCandidate),disabled:this.disableHireButton.bind(this),icon:"an an-x"}];filterSettings={action:this.hiringProcessesFilter.bind(this),placeholder:"Search"};ngOnInit(){this.hiringProcesses=this.hiringProcessesService.getItems(),this.hiringProcessesFiltered=[...this.hiringProcesses]}formatTitle(o){return`${o.idCard} - ${o.name}`}showDetail(o){return o.url}showDetailModal(o){this.setModalItem(o),this.detailsModalElement.open()}cancelCandidate(o){o.hireStatus="canceled",this.poNotification.error("Canceled candidate!")}disableHireButton(){return!this.hiringProcesses.find(o=>o.$selected)}hireCandidate(o){o.hireStatus="hired",this.poNotification.success("Hired candidate!")}hiringProcessesFilter(o){let l=typeof o=="string"?[o]:[...o];this.hiringProcessesFiltered=this.hiringProcesses.filter(n=>Object.keys(n).some(d=>!(n[d]instanceof Object)&&this.includeFilter(n[d],l)))}includeFilter(o,l){return l.some(n=>String(o).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}isHiredOrCanceled(o){return o.hireStatus==="hired"||o.hireStatus==="canceled"}setModalItem(o){this.selectedActionItem=o,this.titleDetailsModal=`Get in touch with ${this.selectedActionItem.name}`}updateCandidates(o){this.hiringProcesses.forEach(l=>{if(l.$selected){switch(l.hireStatus){case"progress":o.call(this,l);break;case"hired":this.poNotification.warning("This candidate has already been hired.");break;case"canceled":this.poNotification.error("This candidate has already been disqualified.");break}l.$selected=!1}})}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-list-view-hiring-processes"]],viewQuery:function(l,n){if(l&1&&Z(Ue,7),l&2){let d;K(d=X())&&(n.detailsModalElement=d.first)}},standalone:!1,features:[ee([U])],decls:16,vars:11,consts:[["detailsModal",""],["p-title","Hiring processes",3,"p-actions","p-filter"],["p-hide-select-all","","p-property-link","url","p-property-title","name","p-select","",3,"p-title-action","p-actions","p-items"],["p-list-view-content-template","",3,"p-title"],["p-list-view-detail-template","",3,"p-show-detail"],[3,"p-title"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl","p-src","assets/graphics/avatar2.png"],[1,"po-md-7","po-lg-8"],[1,"po-mb-1"],[3,"p-value","p-type"],["p-label","Email",3,"p-value"],["p-label","Telephone",3,"p-value"],["p-label","Id Card",1,"po-lg-4",3,"p-value"],["p-label","Job description",1,"po-lg-4",3,"p-value"],["p-label","Hire status",1,"po-lg-4",3,"p-value"],["p-label","Age",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"]],template:function(l,n){if(l&1){let d=H();t(0,"po-page-list",1)(1,"po-list-view",2),g("p-title-action",function(p){return c(d),u(n.showDetailModal(p))}),P(2,Je,5,5,"ng-template",3)(3,$e,3,2,"ng-template",4),e(),t(4,"po-modal",5,0)(6,"div",6)(7,"div",7),r(8,"po-avatar",8),e(),t(9,"div",9)(10,"div",10),r(11,"po-tag",11),e(),t(12,"div",10),r(13,"po-info",12),e(),t(14,"div",10),r(15,"po-info",13),e()()()()()}l&2&&(m("p-actions",n.pageActions)("p-filter",n.filterSettings),s(),m("p-actions",n.actions)("p-items",n.hiringProcessesFiltered),s(),m("p-title",n.formatTitle),s(),m("p-show-detail",n.showDetail),s(),m("p-title",n.titleDetailsModal),s(7),m("p-value",n.selectedActionItem.hireStatus)("p-type",n.selectedActionItem.hireStatus==="hired"?"success":"info"),s(2),m("p-value",n.selectedActionItem.email),s(2),m("p-value",n.selectedActionItem.telephone))},dependencies:[he,ue,A,T,D,j,Ee,ye,oe],encapsulation:2})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-list-view-hiring-processes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO List View - Hiring Processes"),e(),t(4,"a",2),g("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.html"),e(),t(13,"pre",7),i(14,`<po-page-list p-title="Hiring processes" [p-actions]="pageActions" [p-filter]="filterSettings">
  <po-list-view
    p-hide-select-all
    p-property-link="url"
    p-property-title="name"
    p-select
    [p-actions]="actions"
    [p-items]="hiringProcessesFiltered"
    (p-title-action)="showDetailModal($event)"
  >
    <ng-template p-list-view-content-template let-item [p-title]="formatTitle">
      <div class="po-row">
        <po-info class="po-lg-4" p-label="Id Card" [p-value]="item.idCard"></po-info>

        <po-info class="po-lg-4" p-label="Job description" [p-value]="item.jobDescription"></po-info>

        <po-info class="po-lg-4" p-label="Hire status" p-value="{ { item.hireStatus | uppercase }}"></po-info>
      </div>
    </ng-template>

    <ng-template p-list-view-detail-template let-item [p-show-detail]="showDetail">
      <div class="po-row">
        <po-info class="po-md-6" p-label="Age" [p-value]="item.age"></po-info>

        <po-info class="po-md-6" p-label="City" [p-value]="item.city"></po-info>
      </div>
    </ng-template>
  </po-list-view>

  <po-modal #detailsModal [p-title]="titleDetailsModal">
    <div class="po-row">
      <div class="po-md-5 po-lg-4">
        <po-avatar p-size="xl" p-src="assets/graphics/avatar2.png"></po-avatar>
      </div>
      <div class="po-md-7 po-lg-8">
        <div class="po-mb-1">
          <po-tag
            [p-value]="selectedActionItem['hireStatus']"
            [p-type]="selectedActionItem['hireStatus'] === 'hired' ? 'success' : 'info'"
          >
          </po-tag>
        </div>
        <div class="po-mb-1">
          <po-info p-label="Email" [p-value]="selectedActionItem['email']"> </po-info>
        </div>
        <div class="po-mb-1">
          <po-info p-label="Telephone" [p-value]="selectedActionItem['telephone']"> </po-info>
        </div>
      </div>
    </div>
  </po-modal>
</po-page-list>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';

import {
  PoListViewAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoPageFilter
} from '@po-ui/ng-components';

import { SamplePoListViewHiringProcessesService } from './sample-po-list-view-hiring-processes.service';

@Component({
  selector: 'sample-po-list-view-hiring-processes',
  templateUrl: 'sample-po-list-view-hiring-processes.component.html',
  providers: [SamplePoListViewHiringProcessesService],
  standalone: false
})
export class SamplePoListViewHiringProcessesComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private hiringProcessesService = inject(SamplePoListViewHiringProcessesService);

  @ViewChild('detailsModal', { static: true }) detailsModalElement: PoModalComponent;

  hiringProcesses: Array<any>;
  hiringProcessesFiltered: Array<object>;
  labelFilter: string = '';
  modalDetail: boolean = false;
  selectedActionItem = {};
  titleDetailsModal: string = 'User Detail';

  readonly actions: Array<PoListViewAction> = [
    {
      label: 'Hire',
      action: this.hireCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      icon: 'an an-check'
    },
    {
      label: 'Cancel',
      action: this.cancelCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      type: 'danger',
      icon: 'an an-x'
    }
  ];

  readonly pageActions: Array<PoPageAction> = [
    {
      label: 'Hire selected',
      action: this.updateCandidates.bind(this, this.hireCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'an an-check'
    },
    {
      label: 'Cancel selected',
      action: this.updateCandidates.bind(this, this.cancelCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'an an-x'
    }
  ];

  readonly filterSettings: PoPageFilter = {
    action: this.hiringProcessesFilter.bind(this),
    placeholder: 'Search'
  };

  ngOnInit() {
    this.hiringProcesses = this.hiringProcessesService.getItems();
    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  formatTitle(item) {
    return \`\${item.idCard} - \${item.name}\`;
  }

  showDetail(item) {
    return item.url;
  }

  showDetailModal(item) {
    this.setModalItem(item);
    this.detailsModalElement.open();
  }

  private cancelCandidate(selectedCandidate) {
    selectedCandidate['hireStatus'] = 'canceled';
    this.poNotification.error('Canceled candidate!');
  }

  private disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  private hireCandidate(selectedCandidate) {
    selectedCandidate['hireStatus'] = 'hired';
    this.poNotification.success('Hired candidate!');
  }

  private hiringProcessesFilter(labelFilter: string | Array<string>) {
    const filters = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];

    this.hiringProcessesFiltered = this.hiringProcesses.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  private includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  private isHiredOrCanceled(candidate): boolean {
    return candidate['hireStatus'] === 'hired' || candidate['hireStatus'] === 'canceled';
  }

  private setModalItem(listItem) {
    this.selectedActionItem = listItem;
    this.titleDetailsModal = \`Get in touch with \${this.selectedActionItem['name']}\`;
  }

  private updateCandidates(action: Function) {
    this.hiringProcesses.forEach(candidate => {
      if (candidate['$selected']) {
        switch (candidate['hireStatus']) {
          case 'progress':
            action.call(this, candidate);
            break;

          case 'hired':
            this.poNotification.warning('This candidate has already been hired.');
            break;

          case 'canceled':
            this.poNotification.error('This candidate has already been disqualified.');
            break;
        }

        candidate['$selected'] = false;
      }
    });
  }
}
`),e(),t(21,"label",6),i(22,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.service.ts"),e(),t(23,"pre",9),i(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoListViewHiringProcessesService {
  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        email: 'james@johnson.com',
        telephone: '1-541-754-3010',
        jobDescription: 'Systems Analyst',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        email: 'brian@brown.com',
        telephone: '1-543-456-9876',
        jobDescription: 'Trainee',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        email: 'mary@davis.com',
        telephone: '1-521-223-3232',
        jobDescription: 'Programmer'
      },
      {
        hireStatus: 'progress',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        email: 'margaret@garcia.com',
        telephone: '1-541-344-2211',
        jobDescription: 'Web developer',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        email: 'emma@hall.com',
        telephone: '1-555-321-3234',
        jobDescription: 'Recruiter',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        email: 'lucas@clark.com',
        telephone: '1-541-322-4343',
        jobDescription: 'Consultant'
      },
      {
        hireStatus: 'progress',
        name: 'Ella Scott',
        city: 'Ontario',
        age: 24,
        idCard: 'UL78flg68',
        email: 'ella@scott.com',
        telephone: '1-229-324-3434',
        jobDescription: 'DBA'
      },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        email: 'chloe@walker.com',
        telephone: '1-518-222-1212',
        jobDescription: 'Programmer'
      }
    ];
  }
}
`),e()()()()(),t(25,"div",10),r(26,"sample-po-list-view-hiring-processes"),e(),r(27,"hr")),l&2&&(s(5),L("po-icon "+n.sampleCodeButtonIcon),s(),_(" ",n.sampleCodeButtonLabel,""),s(),m("ngClass",V(4,Ye,n.hideSampleCodeTabs)))},dependencies:[M,x,C,y,Me],encapsulation:2})}return a})();var De=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-list-view-doc"]],standalone:!1,decls:714,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-list-view-content-template"],["href","/documentation/po-list-view-detail-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoListViewAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoListViewLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(l,n){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoListViewModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),i(6,"M\xF3dulo do componente "),t(7,"code"),i(8,"po-list-view"),e(),i(9,"."),e(),t(10,"blockquote")(11,"p"),i(12,"Para o correto funcionamento do componente "),t(13,"code"),i(14,"po-list-view"),e(),i(15,", deve ser importado o m\xF3dulo "),t(16,"code"),i(17,"BrowserAnimationsModule"),e(),i(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),e()(),t(19,"p"),i(20,"M\xF3dulo da aplica\xE7\xE3o:"),e(),t(21,"pre")(22,"code"),i(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),e()(),t(24,"p"),i(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),e(),t(26,"pre")(27,"code"),i(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),e()()(),t(29,"h3",3),i(30,"Componente"),e(),t(31,"h4",4)(32,"code",5),i(33,"PoListViewComponent"),e()(),t(34,"div",2)(35,"p"),i(36,`Componente de lista que recebe um array de objetos e renderiza de forma din\xE2mica os dados de
acordo com a necessidade de cada tela e deve ser utilizado em conjunto com as diretivas de `),t(37,"em"),i(38,"templates"),e(),t(39,"strong")(40,"a",6),i(41,"p-list-view-content-template"),e()(),i(42,` e
`),t(43,"strong")(44,"a",7),i(45,"p-list-view-detail-template"),e()(),i(46,"."),e(),t(47,"p"),i(48,`O componente disponibiliza uma \xE1rea espec\xEDfica para exibi\xE7\xE3o informa\xE7\xF5es adicionais,
atrav\xE9s da diretiva `),t(49,"strong")(50,"a",7),i(51,"p-list-view-detail-template"),e()(),i(52,". "),e()(),t(53,"div",8)(54,"h4",9),i(55,"Seletor"),e(),t(56,"pre",10),i(57,`<po-list-view
    p-actions="PoListViewAction[]"
    p-components-size="string"
    p-height="number"
    p-hide-select-all="boolean"
    p-items="any[]"
    p-literals="PoListViewLiterals"
    p-property-link="string"
    p-property-title="string"
    p-select="boolean"
    (p-show-detail)="EventEmitter"
    (p-show-more)="EventEmitter"
    p-show-more-disabled="boolean"
    (p-title-action)="EventEmitter" >
</po-list-view>
`),e()(),t(58,"h4",11),i(59,"Propriedades"),e(),t(60,"table",12)(61,"tr",13)(62,"th",14),i(63,"Nome"),e(),t(64,"th",14),i(65,"Tipo"),e(),t(66,"th",14),i(67,"Padr\xE3o"),e(),t(68,"th",14),i(69,"Descri\xE7\xE3o"),e()(),t(70,"tr",15)(71,"td",16)(72,"div",17)(73,"span",18),i(74," p-actions"),r(75,"br"),e()()(),t(76,"td",19)(77,"code",20),i(78,"PoListViewAction[]"),e()(),t(79,"td",21),i(80,"-"),e(),t(81,"td",22)(82,"em")(83,"strong"),i(84,"(opcional)"),e()(),t(85,"p"),i(86,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),e()()(),t(87,"tr",15)(88,"td",16)(89,"div",17)(90,"span",18),i(91," p-components-size"),r(92,"br"),e()()(),t(93,"td",19)(94,"code",23),i(95,"string"),e()(),t(96,"td",21)(97,"p")(98,"code"),i(99,"medium"),e()()(),t(100,"td",22)(101,"em")(102,"strong"),i(103,"(opcional)"),e()(),t(104,"p"),i(105,"Define o tamanho dos componentes de formul\xE1rio no template:"),e(),t(106,"ul")(107,"li")(108,"code"),i(109,"small"),e(),i(110,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(111,"li")(112,"code"),i(113,"medium"),e(),i(114,": aplica a medida medium de cada componente."),e()(),t(115,"blockquote")(116,"p"),i(117,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(118,"code"),i(119,"medium"),e(),i(120,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(121,"a",24),i(122,"po-theme"),e(),i(123,"."),e()()()(),t(124,"tr",15)(125,"td",16)(126,"div",17)(127,"span",18),i(128," p-height"),r(129,"br"),e()()(),t(130,"td",19)(131,"code",25),i(132,"number"),e()(),t(133,"td",21),i(134,"-"),e(),t(135,"td",22)(136,"em")(137,"strong"),i(138,"(opcional)"),e()(),t(139,"p"),i(140,"Define a altura do "),t(141,"code"),i(142,"po-list-view"),e(),i(143," em "),t(144,"em"),i(145,"pixels"),e(),i(146,"."),e()()(),t(147,"tr",15)(148,"td",16)(149,"div",17)(150,"span",18),i(151," p-hide-select-all"),r(152,"br"),e()()(),t(153,"td",19)(154,"code",26),i(155,"boolean"),e()(),t(156,"td",21)(157,"p")(158,"code"),i(159,"false"),e()()(),t(160,"td",22)(161,"p"),i(162,"Esconde o "),t(163,"em"),i(164,"checkbox"),e(),i(165," para sele\xE7\xE3o de todos os itens."),e()()(),t(166,"tr",15)(167,"td",16)(168,"div",17)(169,"span",18),i(170," p-items"),r(171,"br"),e()()(),t(172,"td",19)(173,"code",27),i(174,"any[]"),e()(),t(175,"td",21),i(176,"-"),e(),t(177,"td",22)(178,"p"),i(179,"Lista de itens que ser\xE3o exibidos no componente."),e()()(),t(180,"tr",15)(181,"td",16)(182,"div",17)(183,"span",18),i(184," p-literals"),r(185,"br"),e()()(),t(186,"td",19)(187,"code",28),i(188,"PoListViewLiterals"),e()(),t(189,"td",21),i(190,"-"),e(),t(191,"td",22)(192,"em")(193,"strong"),i(194,"(opcional)"),e()(),t(195,"p"),i(196,"Objeto com as literais usadas no "),t(197,"code"),i(198,"po-list-view"),e(),i(199,"."),e(),t(200,"p"),i(201,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),t(202,"pre")(203,"code"),i(204,`const customLiterals: PoListViewLiterals = {
  hideDetail: 'Ocultar detalhes completamente',
  loadMoreData: 'Mais dados',
  showDetail: 'Mostrar mais detalhes',
  selectAll: 'Selecionar todos os itens'
};
`),e()(),t(205,"p"),i(206,"Ou passando apenas as literais que deseja customizar:"),e(),t(207,"pre")(208,"code"),i(209,`const customLiterals: PoListViewLiterals = {
  showDetail: 'Mostrar mais detalhes'
};
`),e()(),t(210,"p"),i(211,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),e(),t(212,"pre")(213,"code"),i(214,`<po-list-view
  [p-literals]="customLiterals">
</po-list-view>
`),e()(),t(215,"blockquote")(216,"p"),i(217,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(218,"a",29)(219,"code"),i(220,"PoI18nService"),e()(),i(221," ou do browser."),e()()()(),t(222,"tr",15)(223,"td",16)(224,"div",17)(225,"span",18),i(226," p-property-link"),r(227,"br"),e()()(),t(228,"td",19)(229,"code",23),i(230,"string"),e()(),t(231,"td",21),i(232,"-"),e(),t(233,"td",22)(234,"em")(235,"strong"),i(236,"(opcional)"),e()(),t(237,"p"),i(238,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 usado como link para o t\xEDtulo."),e()()(),t(239,"tr",15)(240,"td",16)(241,"div",17)(242,"span",18),i(243," p-property-title"),r(244,"br"),e()()(),t(245,"td",19)(246,"code",23),i(247,"string"),e()(),t(248,"td",21),i(249,"-"),e(),t(250,"td",22)(251,"em")(252,"strong"),i(253,"(opcional)"),e()(),t(254,"p"),i(255,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 exibido como o t\xEDtulo de cada item."),e()()(),t(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),i(260," p-select"),r(261,"br"),e()()(),t(262,"td",19)(263,"code",26),i(264,"boolean"),e()(),t(265,"td",21)(266,"p")(267,"code"),i(268,"false"),e()()(),t(269,"td",22)(270,"em")(271,"strong"),i(272,"(opcional)"),e()(),t(273,"p"),i(274,"Habilita um "),t(275,"em"),i(276,"checkbox"),e(),i(277," para cada item da lista. Todos os items possuem a propriedade din\xE2mica "),t(278,"code"),i(279,"$selected"),e(),i(280,` para identificar se o
item est\xE1 selecionado, por exemplo:`),e(),t(281,"pre")(282,"code"),i(283,`item.$selected

// ou

item['$selected']
`),e()()()(),t(284,"tr",15)(285,"td",16)(286,"div",30)(287,"span",31),i(288," (p-show-detail)"),r(289,"br"),e()()(),t(290,"td",19)(291,"code",32),i(292,"EventEmitter"),e()(),t(293,"td",21),i(294,"-"),e(),t(295,"td",22)(296,"em")(297,"strong"),i(298,"(opcional)"),e()(),t(299,"p"),i(300,"A\xE7\xE3o que ser\xE1 executada ao clicar no bot\xE3o exibir detalhes."),e(),t(301,"p"),i(302,"Ao ser disparado, o m\xE9todo passa como par\xE2metros os detalhes que ser\xE3o exibidos."),e()()(),t(303,"tr",15)(304,"td",16)(305,"div",30)(306,"span",31),i(307," (p-show-more)"),r(308,"br"),e()()(),t(309,"td",19)(310,"code",32),i(311,"EventEmitter"),e()(),t(312,"td",21),i(313,"-"),e(),t(314,"td",22)(315,"em")(316,"strong"),i(317,"(opcional)"),e()(),t(318,"p"),i(319,'Recebe uma a\xE7\xE3o, que ser\xE1 executada quando clicar no bot\xE3o "Carregar mais resultados".'),e(),t(320,"blockquote")(321,"p"),i(322,"Caso nenhuma a\xE7\xE3o for definida o mesmo n\xE3o ficar\xE1 vis\xEDvel."),e()()()(),t(323,"tr",15)(324,"td",16)(325,"div",17)(326,"span",18),i(327," p-show-more-disabled"),r(328,"br"),e()()(),t(329,"td",19)(330,"code",26),i(331,"boolean"),e()(),t(332,"td",21),i(333,"-"),e(),t(334,"td",22)(335,"em")(336,"strong"),i(337,"(opcional)"),e()(),t(338,"p"),i(339,"Indica que o bot\xE3o "),t(340,"code"),i(341,"Carregar Mais Resultados"),e(),i(342," ser\xE1 desabilitado."),e()()(),t(343,"tr",15)(344,"td",16)(345,"div",30)(346,"span",31),i(347," (p-title-action)"),r(348,"br"),e()()(),t(349,"td",19)(350,"code",32),i(351,"EventEmitter"),e()(),t(352,"td",21),i(353,"-"),e(),t(354,"td",22)(355,"em")(356,"strong"),i(357,"(opcional)"),e()(),t(358,"p"),i(359,"A\xE7\xE3o que ser\xE1 executada ao clicar no t\xEDtulo."),e(),t(360,"p"),i(361,"Ao ser disparado, o m\xE9todo inserido na a\xE7\xE3o ir\xE1 receber como par\xE2metro o item da lista clicado."),e()()()(),t(362,"h3"),i(363,"Interfaces"),e(),t(364,"h4",33)(365,"code",5),i(366,"PoListViewAction"),e()(),t(367,"div",2)(368,"p"),i(369,"Interface para lista de a\xE7\xF5es do componente. Interface que define as a\xE7\xF5es do componente "),t(370,"code"),i(371,"po-list-view"),e(),i(372,"."),e(),t(373,"blockquote")(374,"p"),i(375,"As propriedades "),t(376,"code"),i(377,"separator"),e(),i(378,", "),t(379,"code"),i(380,"url"),e(),i(381," e "),t(382,"code"),i(383,"selected"),e(),i(384,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),e()()(),t(385,"h4",11),i(386,"Propriedades"),e(),t(387,"table",12)(388,"tr",13)(389,"th",14),i(390,"Nome"),e(),t(391,"th",14),i(392,"Tipo"),e(),t(393,"th",14),i(394,"Descri\xE7\xE3o"),e()(),t(395,"tr",15)(396,"td",16)(397,"div",17)(398,"span",18),i(399," action"),r(400,"br"),e()()(),t(401,"td",19)(402,"code",34),i(403,"Function"),e()(),t(404,"td",22)(405,"em")(406,"strong"),i(407,"(opcional)"),e()(),t(408,"p"),i(409,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),e(),t(410,"p"),i(411,"No componente "),t(412,"code"),i(413,"po-dropdown"),e(),i(414,", a action tamb\xE9m pode ser executada para o agrupador de subitens."),e(),t(415,"blockquote")(416,"p"),i(417,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),t(418,"em"),i(419,"bind"),e(),i(420,"."),e()(),t(421,"p"),i(422,"Exemplo: "),t(423,"code"),i(424,"action: this.myFunction.bind(this)"),e()()()(),t(425,"tr",15)(426,"td",16)(427,"div",17)(428,"span",18),i(429," disabled"),r(430,"br"),e()()(),t(431,"td",19)(432,"code",26),i(433,"boolean "),e(),t(434,"code",34),i(435," Function"),e()(),t(436,"td",22)(437,"em")(438,"strong"),i(439,"(opcional)"),e()(),t(440,"p"),i(441,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),e(),t(442,"p"),i(443,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),e()()(),t(444,"tr",15)(445,"td",16)(446,"div",17)(447,"span",18),i(448," icon"),r(449,"br"),e()()(),t(450,"td",19)(451,"code",23),i(452,"string "),e(),t(453,"code",35),i(454," TemplateRef<void>"),e()(),t(455,"td",22)(456,"em")(457,"strong"),i(458,"(opcional)"),e()(),t(459,"p"),i(460,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),e(),t(461,"p"),i(462,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(463,"a",36),i(464,"Biblioteca de \xEDcones"),e(),i(465,". conforme exemplo abaixo:"),e(),t(466,"pre")(467,"code"),i(468,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),e()(),t(469,"p"),i(470,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),e(),t(471,"pre")(472,"code"),i(473,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),e()(),t(474,"p"),i(475,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(476,"code"),i(477,"TemplateRef"),e(),i(478,`, conforme exemplo abaixo:
component.html:`),e(),t(479,"pre")(480,"code"),i(481,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),e()(),t(482,"p"),i(483,"component.ts:"),e(),t(484,"pre")(485,"code"),i(486,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),e()()()(),t(487,"tr",15)(488,"td",16)(489,"div",17)(490,"span",18),i(491," label"),r(492,"br"),e()()(),t(493,"td",19)(494,"code",23),i(495,"string"),e()(),t(496,"td",22)(497,"p"),i(498,"R\xF3tulo da a\xE7\xE3o."),e(),t(499,"p"),i(500,"No componente "),t(501,"code"),i(502,"po-dropdown"),e(),i(503,", a label tamb\xE9m pode representar o agrupador de subitens."),e()()(),t(504,"tr",15)(505,"td",16)(506,"div",17)(507,"span",18),i(508," selected"),r(509,"br"),e()()(),t(510,"td",19)(511,"code",26),i(512,"boolean"),e()(),t(513,"td",22)(514,"em")(515,"strong"),i(516,"(opcional)"),e()(),t(517,"p"),i(518,"Define se a a\xE7\xE3o est\xE1 selecionada."),e()()(),t(519,"tr",15)(520,"td",16)(521,"div",17)(522,"span",18),i(523," separator"),r(524,"br"),e()()(),t(525,"td",19)(526,"code",26),i(527,"boolean"),e()(),t(528,"td",22)(529,"em")(530,"strong"),i(531,"(opcional)"),e()(),t(532,"p"),i(533,"Atribui uma linha separadora acima do item."),e()()(),t(534,"tr",15)(535,"td",16)(536,"div",17)(537,"span",18),i(538," type"),r(539,"br"),e()()(),t(540,"td",19)(541,"code",23),i(542,"string"),e()(),t(543,"td",22)(544,"em")(545,"strong"),i(546,"(opcional)"),e()(),t(547,"p"),i(548,"Define a cor do item, sendo "),t(549,"code"),i(550,"default"),e(),i(551," o padr\xE3o."),e(),t(552,"p"),i(553,"Valores v\xE1lidos:"),e(),t(554,"ul")(555,"li")(556,"code"),i(557,"default"),e()(),t(558,"li")(559,"code"),i(560,"danger"),e(),i(561," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),e()()()(),t(562,"tr",15)(563,"td",16)(564,"div",17)(565,"span",18),i(566," url"),r(567,"br"),e()()(),t(568,"td",19)(569,"code",23),i(570,"string"),e()(),t(571,"td",22)(572,"em")(573,"strong"),i(574,"(opcional)"),e()(),t(575,"p"),i(576,"URL utilizada para redirecionamento das p\xE1ginas."),e(),t(577,"p"),i(578,"No componente "),t(579,"code"),i(580,"po-dropdown"),e(),i(581,`, a url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),t(582,"code"),i(583,"url"),e(),i(584," \xE9 informada em um agrupador, o clique "),t(585,"strong"),i(586,"n\xE3o abrir\xE1 os subitens"),e(),i(587,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),e()()(),t(588,"tr",15)(589,"td",16)(590,"div",17)(591,"span",18),i(592," visible"),r(593,"br"),e()()(),t(594,"td",19)(595,"code",26),i(596,"boolean "),e(),t(597,"code",34),i(598," Function"),e()(),t(599,"td",22)(600,"em")(601,"strong"),i(602,"(opcional)"),e()(),t(603,"p"),i(604,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),e(),t(605,"blockquote")(606,"p"),i(607,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),e()(),t(608,"p"),i(609,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),e(),t(610,"ul")(611,"li")(612,"p"),i(613,"Fun\xE7\xE3o que deve retornar um booleano."),e()(),t(614,"li")(615,"p"),i(616,"Informar diretamente um valor booleano."),e()()()()()(),t(617,"h4",33)(618,"code",5),i(619,"PoListViewLiterals"),e()(),t(620,"div",2)(621,"p"),i(622,"Interface para defini\xE7\xE3o das literais usadas no "),t(623,"code"),i(624,"po-list-view"),e(),i(625,"."),e()(),t(626,"h4",11),i(627,"Propriedades"),e(),t(628,"table",12)(629,"tr",13)(630,"th",14),i(631,"Nome"),e(),t(632,"th",14),i(633,"Tipo"),e(),t(634,"th",14),i(635,"Descri\xE7\xE3o"),e()(),t(636,"tr",15)(637,"td",16)(638,"div",17)(639,"span",18),i(640," hideDetails"),r(641,"br"),e()()(),t(642,"td",19)(643,"code",23),i(644,"string"),e()(),t(645,"td",22)(646,"em")(647,"strong"),i(648,"(opcional)"),e()(),t(649,"p"),i(650,"R\xF3tulo do bot\xE3o que oculta os detalhes do item."),e()()(),t(651,"tr",15)(652,"td",16)(653,"div",17)(654,"span",18),i(655," loadMoreData"),r(656,"br"),e()()(),t(657,"td",19)(658,"code",23),i(659,"string"),e()(),t(660,"td",22)(661,"em")(662,"strong"),i(663,"(opcional)"),e()(),t(664,"p"),i(665,"R\xF3tulo do bot\xE3o que deve carregar mais resultados."),e()()(),t(666,"tr",15)(667,"td",16)(668,"div",17)(669,"span",18),i(670," noData"),r(671,"br"),e()()(),t(672,"td",19)(673,"code",23),i(674,"string"),e()(),t(675,"td",22)(676,"em")(677,"strong"),i(678,"(opcional)"),e()(),t(679,"p"),i(680,"R\xF3tulo exibido quando n\xE3o existem itens para serem exibidos na lista."),e()()(),t(681,"tr",15)(682,"td",16)(683,"div",17)(684,"span",18),i(685," selectAll"),r(686,"br"),e()()(),t(687,"td",19)(688,"code",23),i(689,"string"),e()(),t(690,"td",22)(691,"em")(692,"strong"),i(693,"(opcional)"),e()(),t(694,"p"),i(695,"R\xF3tulo do "),t(696,"code"),i(697,"checkbox"),e(),i(698," da op\xE7\xE3o de selecionar todos."),e()()(),t(699,"tr",15)(700,"td",16)(701,"div",17)(702,"span",18),i(703," showDetails"),r(704,"br"),e()()(),t(705,"td",19)(706,"code",23),i(707,"string"),e()(),t(708,"td",22)(709,"em")(710,"strong"),i(711,"(opcional)"),e()(),t(712,"p"),i(713,"R\xF3tulo do bot\xE3o que exibe os detalhes do item."),e()()()()())},dependencies:[x],encapsulation:2})}return a})();var Te=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(N(me),N(de))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","List View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return n.changeTab("doc")}),r(3,"sample-po-list-view-doc"),e(),t(4,"po-tab",3),g("p-click",function(){return n.changeTab("web")}),r(5,"sample-po-list-view-basic-view")(6,"sample-po-list-view-labs-view")(7,"sample-po-list-view-hiring-processes-view"),e()()()),l&2&&(m("p-actions",n.actions),s(2),m("p-active",n.activeTab==="doc"),s(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[Ce,C,y,Le,Ve,Ae,De],encapsulation:2})}return a})();var Xe=[{path:"",component:Te}],ke=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=I({type:a});static \u0275inj=O({imports:[W.forChild(Xe),W]})}return a})();var Ft=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=I({type:a});static \u0275inj=O({imports:[xe,ke]})}return a})();export{Ft as DocPoListViewModule};
