import{o as y,p as se}from"./chunk-XTKMJXR5.js";import{Ab as f,Eb as de,Fa as me,O as ae,Q as le,Sa as pe,Xa as F,a as ne,e as $,f as D,m as M,nb as W,q as ie,ra as re,v as oe,zb as v}from"./chunk-PZXWGKHI.js";import"./chunk-ZXY2ZB5H.js";import{Aa as d,Da as P,Eb as k,Fc as Q,Gc as Y,Ha as H,Hc as K,Ia as A,Ic as X,Ja as V,Jc as Z,Ka as z,La as e,Ma as n,N as O,Na as i,Ra as q,Sa as b,Ta as L,U as u,V as g,Wa as U,Wc as ee,Xa as J,Yc as te,_c as j,cb as t,eb as w,gb as E,hb as S,ib as x,ja as m,ka as N,ob as _,qa as c,ra as I,wa as R}from"./chunk-GP3Z6ZCX.js";var ce=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-value","PO Tag"]],template:function(l,o){l&1&&i(0,"po-tag",0)},dependencies:[M],encapsulation:2})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Tag Basic"),n(),e(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-tag-basic/sample-po-tag-basic.component.html"),n(),e(13,"pre",7),t(14,`<po-tag p-value="PO Tag"> </po-tag>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-tag-basic/sample-po-tag-basic.component.ts"),n(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-tag-basic',
  templateUrl: './sample-po-tag-basic.component.html',
  standalone: false
})
export class SamplePoTagBasicComponent {}
`),n()()()()(),e(21,"div",10),i(22,"sample-po-tag-basic"),n(),i(23,"hr")),l&2&&(m(5),P("po-icon "+o.sampleCodeButtonIcon),m(),w(" ",o.sampleCodeButtonLabel,""),m(),d("ngClass",_(4,ye,o.hideSampleCodeTabs)))},dependencies:[k,y,v,f,ce],encapsulation:2})}return a})();function Pe(a,T){if(a&1){let r=q();e(0,"po-select",14),x("ngModelChange",function(o){u(r);let s=L();return S(s.icon,o)||(s.icon=o),g(o)}),n()}if(a&2){let r=L();E("ngModel",r.icon),d("p-options",r.iconList)}}function we(a,T){if(a&1){let r=q();e(0,"po-switch",15),x("ngModelChange",function(o){u(r);let s=L();return S(s.icon,o)||(s.icon=o),g(o)}),n()}if(a&2){let r=L();E("ngModel",r.icon)}}var be=(()=>{class a{color;event;icon;textColor;label;orientation;type;value;properties;propertiesOptions=[{value:"removable",label:"Removable"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];orientationOptions=[{label:"Horizontal",value:$.Horizontal},{label:"Vertical",value:$.Vertical}];typeOptions=[{label:"None",value:void 0},{label:"Info",value:D.Info},{label:"Danger",value:D.Danger},{label:"Success",value:D.Success},{label:"Warning",value:D.Warning},{label:"Neutral",value:D.Neutral}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}propertiesChange(r){let l=[...this.propertiesOptions];r.includes("removable")?(l[1]={value:"disabled",label:"Disabled",disabled:!1},this.propertiesOptions=l):this.propertiesOptions=l.filter(o=>o.value!=="disabled")}restore(){this.color=void 0,this.icon=void 0,this.label=void 0,this.orientation=void 0,this.value="PO Tag",this.type=void 0,this.event="",this.textColor=void 0,this.properties=[]}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-labs"]],standalone:!1,decls:21,vars:22,consts:[["f","ngForm"],[3,"p-click","p-color","p-disabled","p-removable","p-icon","p-text-color","p-label","p-orientation","p-type","p-value"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","color","p-clean","","p-label","Color","p-help","color-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","textColor","p-clean","","p-label","Text color","p-help","color-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-6","po-mt-2",3,"ngModelChange","p-change","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModel"],["name","orientation","p-columns","1","p-label","Orientation",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","type","p-columns","3","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,o){if(l&1){let s=q();e(0,"po-tag",1),b("p-click",function(){return u(s),g(o.changeEvent("p-click"))}),n(),i(1,"po-divider"),e(2,"div",2),i(3,"po-info",3),n(),i(4,"po-divider"),e(5,"form",null,0)(7,"div",2)(8,"po-input",4),x("ngModelChange",function(p){return u(s),S(o.label,p)||(o.label=p),g(p)}),n(),e(9,"po-input",5),x("ngModelChange",function(p){return u(s),S(o.value,p)||(o.value=p),g(p)}),n()(),e(10,"div",2)(11,"po-input",6),x("ngModelChange",function(p){return u(s),S(o.color,p)||(o.color=p),g(p)}),n(),e(12,"po-input",7),x("ngModelChange",function(p){return u(s),S(o.textColor,p)||(o.textColor=p),g(p)}),n(),R(13,Pe,1,2,"po-select",8),e(14,"po-checkbox-group",9),x("ngModelChange",function(p){return u(s),S(o.properties,p)||(o.properties=p),g(p)}),b("p-change",function(p){return u(s),g(o.propertiesChange(p))}),n(),R(15,we,1,1,"po-switch",10),n(),e(16,"div",2)(17,"po-radio-group",11),x("ngModelChange",function(p){return u(s),S(o.orientation,p)||(o.orientation=p),g(p)}),n(),e(18,"po-radio-group",12),x("ngModelChange",function(p){return u(s),S(o.type,p)||(o.type=p),g(p)}),n()(),e(19,"div",2)(20,"po-button",13),b("p-click",function(){return u(s),g(o.restore())}),n()()()}l&2&&(d("p-color",o.color)("p-disabled",o.properties.includes("disabled"))("p-removable",o.properties.includes("removable"))("p-icon",o.icon)("p-text-color",o.textColor)("p-label",o.label)("p-orientation",o.orientation)("p-type",o.type)("p-value",o.value),m(3),d("p-value",o.event),m(5),E("ngModel",o.label),m(),E("ngModel",o.value),m(2),E("ngModel",o.color),m(),E("ngModel",o.textColor),m(),H(o.type?-1:13),m(),E("ngModel",o.properties),d("p-options",o.propertiesOptions),m(),H(o.type?15:-1),m(2),E("ngModel",o.orientation),d("p-options",o.orientationOptions),m(),E("ngModel",o.type),d("p-options",o.typeOptions))},dependencies:[Z,Q,Y,X,K,oe,ne,ae,le,me,pe,re,M,F],styles:[".sample-tag-color-circle[_ngcontent-%COMP%]{border-radius:10px;display:inline-block;height:16px;margin-right:4px;vertical-align:middle;width:16px}"]})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Tag Labs"),n(),e(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-tag-labs/sample-po-tag-labs.component.html"),n(),e(13,"pre",7),t(14,`<po-tag
  [p-color]="color"
  [p-disabled]="properties.includes('disabled')"
  [p-removable]="properties.includes('removable')"
  [p-icon]="icon"
  [p-text-color]="textColor"
  [p-label]="label"
  [p-orientation]="orientation"
  [p-type]="type"
  [p-value]="value"
  (p-click)="changeEvent('p-click')"
>
</po-tag>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="value" [(ngModel)]="value" p-clean p-label="Value" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="color"
      [(ngModel)]="color"
      p-clean
      p-label="Color"
      p-help="color-01, red, rgb(201, 53, 125), #753399"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="textColor"
      [(ngModel)]="textColor"
      p-clean
      p-label="Text color"
      p-help="color-01, red, rgb(201, 53, 125), #753399"
    >
    </po-input>

    @if (!type) {
      <po-select class="po-md-6 po-mt-2" name="icon" [(ngModel)]="icon" p-label="Icon" [p-options]="iconList">
      </po-select>
    }

    <po-checkbox-group
      class="po-md-6 po-mt-2"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="propertiesChange($event)"
    >
    </po-checkbox-group>

    @if (type) {
      <po-switch class="po-md-6" name="icon" [(ngModel)]="icon" p-label="Icon"> </po-switch>
    }
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-4"
      name="orientation"
      [(ngModel)]="orientation"
      p-columns="1"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="type"
      [(ngModel)]="type"
      p-columns="3"
      p-label="Type"
      [p-options]="typeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-tag-labs/sample-po-tag-labs.component.ts"),n(),e(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import {
  PoRadioGroupOption,
  PoSelectOption,
  PoTagOrientation,
  PoTagType,
  PoCheckboxGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tag-labs',
  templateUrl: './sample-po-tag-labs.component.html',
  styles: [
    \`
      .sample-tag-color-circle {
        border-radius: 10px;
        display: inline-block;
        height: 16px;
        margin-right: 4px;
        vertical-align: middle;
        width: 16px;
      }
    \`
  ],
  standalone: false
})
export class SamplePoTagLabsComponent implements OnInit {
  color: string;
  event: string;
  icon: boolean | string;
  textColor: string;
  label: string;
  orientation: PoTagOrientation;
  type: PoTagType;
  value: string;
  properties: Array<string>;

  propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'removable', label: 'Removable' }];

  public readonly iconList: Array<PoSelectOption> = [
    { label: 'an an-bluetooth', value: 'an an-bluetooth' },
    { label: 'an an-heart', value: 'an an-heart' },
    { label: 'an an-lightbulb', value: 'an an-lightbulb' },
    { label: 'an an-star', value: 'an an-star' },
    { label: 'an an-gear', value: 'an an-gear' },
    { label: 'an an-globe', value: 'an an-globe' },
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Horizontal', value: PoTagOrientation.Horizontal },
    { label: 'Vertical', value: PoTagOrientation.Vertical }
  ];

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'None', value: undefined },
    { label: 'Info', value: PoTagType.Info },
    { label: 'Danger', value: PoTagType.Danger },
    { label: 'Success', value: PoTagType.Success },
    { label: 'Warning', value: PoTagType.Warning },
    { label: 'Neutral', value: PoTagType.Neutral }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  propertiesChange(event) {
    const value = [...this.propertiesOptions];

    if (event.includes('removable')) {
      value[1] = { value: 'disabled', label: 'Disabled', disabled: false };
      this.propertiesOptions = value;
    } else {
      this.propertiesOptions = value.filter(option => option.value !== 'disabled');
    }
  }

  restore() {
    this.color = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.orientation = undefined;
    this.value = 'PO Tag';
    this.type = undefined;
    this.event = '';
    this.textColor = undefined;
    this.properties = [];
  }
}
`),n()()()()(),e(21,"div",10),i(22,"sample-po-tag-labs"),n(),i(23,"hr")),l&2&&(m(5),P("po-icon "+o.sampleCodeButtonIcon),m(),w(" ",o.sampleCodeButtonLabel,""),m(),d("ngClass",_(4,ke,o.hideSampleCodeTabs)))},dependencies:[k,y,v,f,be],encapsulation:2})}return a})();function Me(a,T){if(a&1&&i(0,"po-tag",12),a&2){let r=T.$implicit;d("p-label",r.label)("p-type",r.type)("p-value",r.value)}}function Be(a,T){if(a&1&&(e(0,"po-widget",15)(1,"div",3),i(2,"po-info",16)(3,"po-tag",17),n()()),a&2){let r=T.$implicit;m(2),d("p-label",r.label)("p-value",r.value),m(),d("p-type",r.type)("p-value",r.text)}}function Le(a,T){if(a&1&&(e(0,"po-tab",14),V(1,Be,4,4,"po-widget",15,A),n()),a&2){let r=T.$implicit;U("p-label",r.month),m(),z(r.details)}}var Se=(()=>{class a{investiments=[{label:"Stocks",type:"danger",value:"Low -3.50%"},{label:"Treasury bills",type:"success",value:"Growing +2.25%"},{label:"Real estate",type:"warning",value:"Risk -0.02%"},{label:"Mutual fund",type:"success",value:"Growing +3.00%"}];items=[{month:"June",details:[{label:"Automatic Payment",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Credit Card",value:"$ 230",type:"danger",text:"Expense"},{label:"Personal Loan",value:"$ 150",type:"warning",text:"Future"}]},{month:"July",details:[{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Car insurance",value:"$ 40",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 200",type:"success",text:"Income"},{label:"Bank statement",value:"$ 5",type:"info",text:"Document"},{label:"Deposit",value:"$ 70",type:"success",text:"Income"}]},{month:"August",details:[{label:"Student Loan",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 50",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Automatic Payment",value:"$ 230",type:"warning",text:"Future"},{label:"Credit Card",value:"$ 150",type:"warning",text:"Future"}]}];advantages=[{title:"Platinum Card:",description:"best card in the market. You earn points and have concierge service and cultural advice."},{title:"Exclusive agencies:",description:"environments designed to offer comfort and privacy."},{title:"Unique experience",description:"with exclusivity background in travel, culture, entertainment and much more."},{title:"Progressive discounts",description:"on service packages, according to the volume of investments."},{title:"Free tax:",description:"withdrawals and Transfers Between Unlimited Accounts."}];userData={name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png"};static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-bank-account"]],standalone:!1,decls:20,vars:4,consts:[["p-title","Bank Statement"],[1,"po-mt-1","po-lg-7"],["p-title","User information",1,"po-md-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Name",3,"p-value"],["p-value","Premium Account"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-title","My Investiments",1,"po-md-12","po-sm-mt-1","po-mt-1","po-lg-mt-1"],[1,"po-md-6","po-lg-3",3,"p-label","p-type","p-value"],["p-title","Last three month operations",1,"po-mt-1","po-lg-5"],["p-active","",3,"p-label"],[1,"po-lg-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],["p-label-size","6","p-orientation","horizontal",1,"po-lg-9","po-md-8",3,"p-label","p-value"],["p-icon","","p-orientation","horizontal",1,"po-lg-3","po-md-4",3,"p-type","p-value"]],template:function(l,o){l&1&&(e(0,"po-page-default",0)(1,"div",1)(2,"po-widget",2)(3,"div",3)(4,"div",4),i(5,"po-avatar",5),n(),e(6,"div",6)(7,"div",7),i(8,"po-info",8)(9,"po-tag",9),n(),e(10,"div",7),i(11,"po-info",10),n()()()(),e(12,"po-widget",11)(13,"div",3),V(14,Me,1,3,"po-tag",12,A),n()()(),e(16,"po-widget",13)(17,"po-tabs"),V(18,Le,3,1,"po-tab",14,A),n()()()),l&2&&(m(5),J("p-src","assets/graphics/",o.userData.photo,""),m(3),d("p-value",o.userData.name),m(3),d("p-value",o.userData.email),m(3),z(o.investiments),m(4),z(o.items))},dependencies:[ie,M,F,W,v,f,de],encapsulation:2})}return a})();var Ie=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-bank-account-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Tag - Bank Account"),n(),e(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.html"),n(),e(13,"pre",7),t(14,`<po-page-default p-title="Bank Statement">
  <div class="po-mt-1 po-lg-7">
    <po-widget class="po-md-12 po-sm-mb-1 po-mb-1 po-lg-mb-1" p-title="User information">
      <div class="po-row">
        <div class="po-md-5 po-lg-4">
          <po-avatar p-size="xl" p-src="assets/graphics/{ { userData.photo }}"></po-avatar>
        </div>
        <div class="po-md-7 po-lg-8">
          <div class="po-mb-2">
            <po-info p-label="Name" [p-value]="userData.name"> </po-info>
            <po-tag p-value="Premium Account"> </po-tag>
          </div>
          <div class="po-mb-2">
            <po-info class="po-mt-5" p-label="Email" [p-value]="userData.email"> </po-info>
          </div>
        </div>
      </div>
    </po-widget>

    <po-widget class="po-md-12 po-sm-mt-1 po-mt-1 po-lg-mt-1" p-title="My Investiments">
      <div class="po-row">
        @for (investiment of investiments; track investiment) {
          <po-tag
            class="po-md-6 po-lg-3"
            [p-label]="investiment.label"
            [p-type]="investiment.type"
            [p-value]="investiment.value"
          >
          </po-tag>
        }
      </div>
    </po-widget>
  </div>
  <po-widget p-title="Last three month operations" class="po-mt-1 po-lg-5">
    <po-tabs>
      @for (item of items; track item) {
        <po-tab p-active p-label="{ { item.month }}">
          @for (item of item.details; track item) {
            <po-widget class="po-lg-12 po-sm-mb-1 po-mb-1 po-lg-mb-1">
              <div class="po-row">
                <po-info
                  class="po-lg-9 po-md-8"
                  p-label-size="6"
                  p-orientation="horizontal"
                  [p-label]="item.label"
                  [p-value]="item.value"
                >
                </po-info>
                <po-tag
                  class="po-lg-3 po-md-4"
                  p-icon
                  p-orientation="horizontal"
                  [p-type]="item.type"
                  [p-value]="item.text"
                >
                </po-tag>
              </div>
            </po-widget>
          }
        </po-tab>
      }
    </po-tabs>
  </po-widget>
</po-page-default>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts"),n(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-tag-bank-account',
  templateUrl: './sample-po-tag-bank-account.component.html',
  standalone: false
})
export class SamplePoTagBankAccountComponent {
  investiments = [
    { label: 'Stocks', type: 'danger', value: 'Low -3.50%' },
    { label: 'Treasury bills', type: 'success', value: 'Growing +2.25%' },
    { label: 'Real estate', type: 'warning', value: 'Risk -0.02%' },
    { label: 'Mutual fund', type: 'success', value: 'Growing +3.00%' }
  ];

  items = [
    {
      month: 'June',
      details: [
        { label: 'Automatic Payment', value: '$ 250', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 500', type: 'success', text: 'Income' },
        { label: 'Bank receipt', value: '$ 10', type: 'info', text: 'Document' },
        { label: 'Credit Card', value: '$ 230', type: 'danger', text: 'Expense' },
        { label: 'Personal Loan', value: '$ 150', type: 'warning', text: 'Future' }
      ]
    },
    {
      month: 'July',
      details: [
        { label: 'Deposit', value: '$ 500', type: 'success', text: 'Income' },
        { label: 'Car insurance', value: '$ 40', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 200', type: 'success', text: 'Income' },
        { label: 'Bank statement', value: '$ 5', type: 'info', text: 'Document' },
        { label: 'Deposit', value: '$ 70', type: 'success', text: 'Income' }
      ]
    },
    {
      month: 'August',
      details: [
        { label: 'Student Loan', value: '$ 250', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 50', type: 'success', text: 'Income' },
        { label: 'Bank receipt', value: '$ 10', type: 'info', text: 'Document' },
        { label: 'Automatic Payment', value: '$ 230', type: 'warning', text: 'Future' },
        { label: 'Credit Card', value: '$ 150', type: 'warning', text: 'Future' }
      ]
    }
  ];

  advantages = [
    {
      title: 'Platinum Card:',
      description: 'best card in the market. You earn points and have concierge service and cultural advice.'
    },
    { title: 'Exclusive agencies:', description: 'environments designed to offer comfort and privacy.' },
    {
      title: 'Unique experience',
      description: 'with exclusivity background in travel, culture, entertainment and much more.'
    },
    { title: 'Progressive discounts', description: 'on service packages, according to the volume of investments.' },
    { title: 'Free tax:', description: 'withdrawals and Transfers Between Unlimited Accounts.' }
  ];

  userData = {
    'name': 'Natasha Romanova',
    'email': 'natasha.romanova@po-ui.com.br',
    'photo': 'avatar2.png'
  };
}
`),n()()()()(),e(21,"div",10),i(22,"sample-po-tag-bank-account"),n(),i(23,"hr")),l&2&&(m(5),P("po-icon "+o.sampleCodeButtonIcon),m(),w(" ",o.sampleCodeButtonLabel,""),m(),d("ngClass",_(4,Ie,o.hideSampleCodeTabs)))},dependencies:[k,y,v,f,Se],encapsulation:2})}return a})();var ve=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=c({type:a,selectors:[["sample-po-tag-doc"]],standalone:!1,decls:1015,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoTagOrientation"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"]],template:function(l,o){l&1&&(e(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoTagModule } from '@po-ui/ng-components';"),n()(),e(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente "),e(7,"code"),t(8,"po-tag"),n(),t(9,"."),n()(),e(10,"h3",3),t(11,"Componente"),n(),e(12,"h4",4)(13,"code",5),t(14,"PoTagComponent"),n()(),e(15,"div",2)(16,"p"),t(17,`Este componente permite exibir um valor em forma de um marcador colorido, sendo poss\xEDvel definir uma legenda e realizar customiza\xE7\xF5es
na cor, iconografia e tipo.`),n(),e(18,"p"),t(19,"Al\xE9m disso, \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada tanto ao "),e(20,"em"),t(21,"click"),n(),t(22," quanto atrav\xE9s das teclas "),e(23,"em"),t(24,"enter/space"),n(),t(25,` enquanto navega
utilizando a tecla `),e(26,"em"),t(27,"tab"),n(),t(28,"."),n(),e(29,"p"),t(30,"Seu uso \xE9 recomendado para informa\xE7\xF5es que necessitem de destaque em forma de marca\xE7\xE3o."),n(),e(31,"h4"),t(32,"Tokens customiz\xE1veis"),n(),e(33,"p"),t(34,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),n(),e(35,"blockquote")(36,"p"),t(37,"Para maiores informa\xE7\xF5es, acesse o guia "),e(38,"a",6),t(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),n(),t(40,"."),n()(),e(41,"table")(42,"thead")(43,"tr")(44,"th"),t(45,"Propriedade"),n(),e(46,"th"),t(47,"Descri\xE7\xE3o"),n(),e(48,"th"),t(49,"Valor Padr\xE3o"),n()()(),e(50,"tbody")(51,"tr")(52,"td")(53,"strong"),t(54,"Default Values"),n()(),i(55,"td")(56,"td"),n(),e(57,"tr")(58,"td")(59,"code"),t(60,"--font-family"),n()(),e(61,"td"),t(62,"Fam\xEDlia tipogr\xE1fica usada"),n(),e(63,"td")(64,"code"),t(65,"var(--font-family-theme)"),n()()(),e(66,"tr")(67,"td")(68,"code"),t(69,"--font-size"),n()(),e(70,"td"),t(71,"Tamanho da fonte"),n(),e(72,"td")(73,"code"),t(74,"var(--font-size-sm)"),n()()(),e(75,"tr")(76,"td")(77,"code"),t(78,"--line-height"),n()(),e(79,"td"),t(80,"Tamanho da label"),n(),e(81,"td")(82,"code"),t(83,"var(---line-height-sm)"),n()()(),e(84,"tr")(85,"td")(86,"code"),t(87,"--border-radius"),n()(),e(88,"td"),t(89,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),n(),e(90,"td")(91,"code"),t(92,"var(--border-radius-pill)"),n()()(),e(93,"tr")(94,"td")(95,"code"),t(96,"--gap"),n()(),e(97,"td"),t(98,"Espa\xE7amento entre o label e o value"),n(),e(99,"td")(100,"code"),t(101,"var(--spacing-xs)"),n()()(),e(102,"tr")(103,"td")(104,"strong"),t(105,"Neutral"),n()(),i(106,"td")(107,"td"),n(),e(108,"tr")(109,"td")(110,"code"),t(111,"--color-neutral"),n()(),e(112,"td"),t(113,"Cor principal no estado neutral"),n(),e(114,"td")(115,"code"),t(116,"var(--color-neutral-light-10)"),n()()(),e(117,"tr")(118,"td")(119,"code"),t(120,"--text-color-positive"),n()(),e(121,"td"),t(122,"Cor do texto no estado neutral"),n(),e(123,"td")(124,"code"),t(125,"var(--color-neutral-dark-80)"),n()()(),e(126,"tr")(127,"td")(128,"strong"),t(129,"Positive"),n()(),i(130,"td")(131,"td"),n(),e(132,"tr")(133,"td")(134,"code"),t(135,"--color-positive"),n()(),e(136,"td"),t(137,"Cor principal no estado positive"),n(),e(138,"td")(139,"code"),t(140,"var(--color-feedback-positive-lightest)"),n()()(),e(141,"tr")(142,"td")(143,"code"),t(144,"--text-color-positive"),n()(),e(145,"td"),t(146,"Cor do texto no estado positive"),n(),e(147,"td")(148,"code"),t(149,"var(--color-feedback-positive-dark)"),n()()(),e(150,"tr")(151,"td")(152,"strong"),t(153,"Negative"),n()(),i(154,"td")(155,"td"),n(),e(156,"tr")(157,"td")(158,"code"),t(159,"--color-negative"),n()(),e(160,"td"),t(161,"Cor principal no estado danger"),n(),e(162,"td")(163,"code"),t(164,"var(--color-feedback-negative-lightest)"),n()()(),e(165,"tr")(166,"td")(167,"code"),t(168,"--text-color-negative"),n()(),e(169,"td"),t(170,"Cor do texto no estado danger"),n(),e(171,"td")(172,"code"),t(173,"var(--color-feedback-negative-darker)"),n()()(),e(174,"tr")(175,"td")(176,"strong"),t(177,"Warning"),n()(),i(178,"td")(179,"td"),n(),e(180,"tr")(181,"td")(182,"code"),t(183,"--color-tag-warning"),n()(),e(184,"td"),t(185,"Cor principal no estado warning"),n(),e(186,"td")(187,"code"),t(188,"var(--color-feedback-warning-lightest)"),n()()(),e(189,"tr")(190,"td")(191,"code"),t(192,"--text-color-warning"),n()(),e(193,"td"),t(194,"Cor do texto no estado warning"),n(),e(195,"td")(196,"code"),t(197,"var(--color-feedback-warning-darkest)"),n()()(),e(198,"tr")(199,"td")(200,"strong"),t(201,"Info"),n()(),i(202,"td")(203,"td"),n(),e(204,"tr")(205,"td")(206,"code"),t(207,"--color-info"),n()(),e(208,"td"),t(209,"Cor principal no estado info"),n(),e(210,"td")(211,"code"),t(212,"var(--color-feedback-info-lightest)"),n()()(),e(213,"tr")(214,"td")(215,"code"),t(216,"--text-color-info"),n()(),e(217,"td"),t(218,"Cor do texto no estado info"),n(),e(219,"td")(220,"code"),t(221,"var(--color-feedback-info-dark)"),n()()(),e(222,"tr")(223,"td")(224,"strong"),t(225,"Removable"),n()(),i(226,"td")(227,"td"),n(),e(228,"tr")(229,"td")(230,"code"),t(231,"--color"),n()(),e(232,"td"),t(233,"Cor principal quando removable"),n(),e(234,"td")(235,"code"),t(236,"var(--color-brand-01-lightest)"),n()()(),e(237,"tr")(238,"td")(239,"code"),t(240,"--border-color"),n()(),e(241,"td"),t(242,"Cor de borda quando removable \xA0"),n(),e(243,"td")(244,"code"),t(245,"var(--color-brand-01-lighter)"),n()()(),e(246,"tr")(247,"td")(248,"code"),t(249,"--color-icon"),n()(),e(250,"td"),t(251,"Cor do \xEDcone quando removable \xA0"),n(),e(252,"td")(253,"code"),t(254,"var(--color-action-default)"),n()()(),e(255,"tr")(256,"td")(257,"code"),t(258,"--text-color"),n()(),e(259,"td"),t(260,"Cor do texto quando removable \xA0"),n(),e(261,"td")(262,"code"),t(263,"var(--color-neutral-dark-80)"),n()()(),e(264,"tr")(265,"td")(266,"code"),t(267,"--color-hover"),n()(),e(268,"td"),t(269,"Cor do hover no estado removable \xA0"),n(),e(270,"td")(271,"code"),t(272,"var(--color-brand-01-lighter)"),n()()(),e(273,"tr")(274,"td")(275,"strong"),t(276,"Focused"),n()(),i(277,"td")(278,"td"),n(),e(279,"tr")(280,"td")(281,"code"),t(282,"--outline-color-focused"),n()(),e(283,"td"),t(284,"Cor do outline do estado de focus"),n(),e(285,"td")(286,"code"),t(287,"var(--color-action-focus)"),n()()(),e(288,"tr")(289,"td")(290,"strong"),t(291,"Disabled"),n()(),i(292,"td")(293,"td"),n(),e(294,"tr")(295,"td")(296,"code"),t(297,"--color-disabled"),n()(),e(298,"td"),t(299,"Cor principal no estado disabled"),n(),e(300,"td")(301,"code"),t(302,"var(--color-neutral-light-20)"),n()()(),e(303,"tr")(304,"td")(305,"code"),t(306,"--border-color-disabled"),n()(),e(307,"td"),t(308,"Cor da borda no estado disabled \xA0"),n(),e(309,"td")(310,"code"),t(311,"var(--color-action-disabled)"),n()()(),e(312,"tr")(313,"td")(314,"code"),t(315,"--color-icon-disabled"),n()(),e(316,"td"),t(317,"Cor do icone no estado disabled \xA0"),n(),e(318,"td")(319,"code"),t(320,"var(--color-action-disabled)"),n()()(),e(321,"tr")(322,"td")(323,"code"),t(324,"--text-color-disabled"),n()(),e(325,"td"),t(326,"Cor do texto no estado disabled \xA0"),n(),e(327,"td")(328,"code"),t(329,"var(--color-neutral-mid-60)"),n()()()()()(),e(330,"div",7)(331,"h4",8),t(332,"Seletor"),n(),e(333,"pre",9),t(334,`<po-tag
    (p-click)="EventEmitter"
    p-color="string"
    p-disabled="boolean"
    p-icon="string | boolean | TemplateRef<void>"
    p-label="string"
    p-literals="PoTagLiterals"
    p-orientation="PoTagOrientation"
    p-removable="boolean"
    (p-close)="EventEmitter"
    p-text-color="string"
    p-type="PoTagType"
    p-value="string" >
</po-tag>
`),n()(),e(335,"h4",10),t(336,"Propriedades"),n(),e(337,"table",11)(338,"tr",12)(339,"th",13),t(340,"Nome"),n(),e(341,"th",13),t(342,"Tipo"),n(),e(343,"th",13),t(344,"Padr\xE3o"),n(),e(345,"th",13),t(346,"Descri\xE7\xE3o"),n()(),e(347,"tr",14)(348,"td",15)(349,"div",16)(350,"span",17),t(351," (p-click)"),i(352,"br"),n()()(),e(353,"td",18)(354,"code",19),t(355,"EventEmitter"),n()(),e(356,"td",20),t(357,"-"),n(),e(358,"td",21)(359,"em")(360,"strong"),t(361,"(opcional)"),n()(),e(362,"p"),t(363,"A\xE7\xE3o que ser\xE1 executada ao clicar sobre o "),e(364,"code"),t(365,"po-tag"),n(),t(366," e que receber\xE1 como par\xE2metro um objeto contendo o seu valor e tipo."),n(),e(367,"p"),t(368,"O evento de click s\xF3 funciona se a tag n\xE3o for remov\xEDvel."),n()()(),e(369,"tr",14)(370,"td",15)(371,"div",22)(372,"span",23),t(373," p-color"),i(374,"br"),n()()(),e(375,"td",18)(376,"code",24),t(377,"string"),n()(),e(378,"td",20),t(379,"-"),n(),e(380,"td",21)(381,"em")(382,"strong"),t(383,"(opcional)"),n()(),e(384,"p"),t(385,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),n(),e(386,"ul")(387,"li")(388,"p"),t(389,"Hexadeximal, por exemplo "),e(390,"code"),t(391,"#c64840"),n(),t(392,";"),n()(),e(393,"li")(394,"p"),t(395,"RGB, como "),e(396,"code"),t(397,"rgb(0, 0, 165)"),n(),t(398,";"),n()(),e(399,"li")(400,"p"),t(401,"O nome da cor, por exemplo "),e(402,"code"),t(403,"blue"),n(),t(404,";"),n()(),e(405,"li")(406,"p"),t(407,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),n(),e(408,"ul")(409,"li"),i(410,"span",25),e(411,"code"),t(412,"color-01"),n()(),e(413,"li"),i(414,"span",26),e(415,"code"),t(416,"color-02"),n()(),e(417,"li"),i(418,"span",27),e(419,"code"),t(420,"color-03"),n()(),e(421,"li"),i(422,"span",28),e(423,"code"),t(424,"color-04"),n()(),e(425,"li"),i(426,"span",29),e(427,"code"),t(428,"color-05"),n()(),e(429,"li"),i(430,"span",30),e(431,"code"),t(432,"color-06"),n()(),e(433,"li"),i(434,"span",31),e(435,"code"),t(436,"color-07"),n()(),e(437,"li"),i(438,"span",32),e(439,"code"),t(440,"color-08"),n()(),e(441,"li"),i(442,"span",33),e(443,"code"),t(444,"color-09"),n()(),e(445,"li"),i(446,"span",34),e(447,"code"),t(448,"color-10"),n()(),e(449,"li"),i(450,"span",35),e(451,"code"),t(452,"color-11"),n()(),e(453,"li"),i(454,"span",36),e(455,"code"),t(456,"color-12"),n()()()(),e(457,"li")(458,"p"),t(459,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background;"),n()(),e(460,"li")(461,"p"),t(462,"O componente ajusta automaticamente a cor do texto para garantir legibilidade, escolhendo dinamicamente entre texto claro ou escuro conforme o contraste necess\xE1rio."),n()()(),e(463,"blockquote")(464,"p")(465,"strong"),t(466,"Aten\xE7\xE3o:"),n(),t(467," A propriedade "),e(468,"code"),t(469,"p-type"),n(),t(470," sobrep\xF5e esta defini\xE7\xE3o."),n()()()(),e(471,"tr",14)(472,"td",15)(473,"div",22)(474,"span",23),t(475," p-disabled"),i(476,"br"),n()()(),e(477,"td",18)(478,"code",37),t(479,"boolean"),n()(),e(480,"td",20)(481,"p")(482,"code"),t(483,"false"),n()()(),e(484,"td",21)(485,"em")(486,"strong"),t(487,"(opcional)"),n()(),e(488,"p"),t(489,"Desabilita o "),e(490,"code"),t(491,"po-tag"),n(),t(492," e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),n(),e(493,"blockquote")(494,"p"),t(495,"A propriedade "),e(496,"code"),t(497,"p-disabled"),n(),t(498," somente ter\xE1 efeito caso a propriedade "),e(499,"code"),t(500,"p-removable"),n(),t(501," esteja definida como "),e(502,"code"),t(503,"true"),n(),t(504,"."),n()()()(),e(505,"tr",14)(506,"td",15)(507,"div",22)(508,"span",23),t(509," p-icon"),i(510,"br"),n()()(),e(511,"td",18)(512,"code",24),t(513,"string "),n(),e(514,"code",37),t(515," boolean "),n(),e(516,"code",38),t(517," TemplateRef<void>"),n()(),e(518,"td",20)(519,"p")(520,"code"),t(521,"false"),n()()(),e(522,"td",21)(523,"em")(524,"strong"),t(525,"(opcional)"),n()(),e(526,"p"),t(527,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),e(528,"em"),t(529,"tag"),n(),t(530,"."),n(),e(531,"p"),t(532,"Quando "),e(533,"code"),t(534,"p-type"),n(),t(535," estiver definida, basta informar um valor igual a "),e(536,"code"),t(537,"true"),n(),t(538," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),n(),e(539,"ul")(540,"li"),i(541,"span",39),t(542," - "),e(543,"code"),t(544,"success"),n()(),e(545,"li"),i(546,"span",40),t(547," - "),e(548,"code"),t(549,"warning"),n()(),e(550,"li"),i(551,"span",41),t(552," - "),e(553,"code"),t(554,"danger"),n()(),e(555,"li"),i(556,"span",42),t(557," - "),e(558,"code"),t(559,"info"),n()()(),e(560,"p"),t(561,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),e(562,"a",43),t(563,"Biblioteca de \xEDcones"),n(),t(564,". conforme exemplo abaixo:"),n(),e(565,"pre")(566,"code"),t(567,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),n()(),e(568,"p"),t(569,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),e(570,"em"),t(571,"Font Awesome"),n(),t(572,", da seguinte forma:"),n(),e(573,"pre")(574,"code"),t(575,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),n()(),e(576,"p"),t(577,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),e(578,"code"),t(579,"TemplateRef"),n(),t(580,", conforme exemplo abaixo:"),n(),e(581,"pre")(582,"code"),t(583,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),n()(),e(584,"blockquote")(585,"p"),t(586,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),e(587,"code"),t(588,"font-size: inherit"),n(),t(589," caso o \xEDcone utilizado n\xE3o aplique-o."),n()()()(),e(590,"tr",14)(591,"td",15)(592,"div",22)(593,"span",23),t(594," p-label"),i(595,"br"),n()()(),e(596,"td",18)(597,"code",24),t(598,"string"),n()(),e(599,"td",20),t(600,"-"),n(),e(601,"td",21)(602,"em")(603,"strong"),t(604,"(opcional)"),n()(),e(605,"p"),t(606,"Define uma legenda que ser\xE1 exibida acima ou ao lado da "),e(607,"em"),t(608,"tag"),n(),t(609,", de acordo com a "),e(610,"code"),t(611,"p-orientation"),n(),t(612,"."),n()()(),e(613,"tr",14)(614,"td",15)(615,"div",22)(616,"span",23),t(617," p-literals"),i(618,"br"),n()()(),e(619,"td",18)(620,"code",44),t(621,"PoTagLiterals"),n()(),e(622,"td",20),t(623,"-"),n(),e(624,"td",21)(625,"em")(626,"strong"),t(627,"(opcional)"),n()(),e(628,"p"),t(629,"Objeto com as literais usadas no "),e(630,"code"),t(631,"po-tag"),n(),t(632,"."),n(),e(633,"p"),t(634,"Para utilizar, basta passar a literal customizada:"),n(),e(635,"pre")(636,"code"),t(637,`const customLiterals: PoTagLiterals = {
  remove: 'Remover itens'
};
`),n()(),e(638,"p"),t(639,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),n(),e(640,"pre")(641,"code"),t(642,`<po-tag
  [p-literals]="customLiterals">
</po-tag>
`),n()(),e(643,"blockquote")(644,"p"),t(645,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),e(646,"a",45)(647,"code"),t(648,"PoI18nService"),n()(),t(649," ou do browser."),n()()()(),e(650,"tr",14)(651,"td",15)(652,"div",22)(653,"span",23),t(654," p-orientation"),i(655,"br"),n()()(),e(656,"td",18)(657,"code",46),t(658,"PoTagOrientation"),n()(),e(659,"td",20)(660,"p")(661,"code"),t(662,"vertical"),n()()(),e(663,"td",21)(664,"em")(665,"strong"),t(666,"(opcional)"),n()(),e(667,"p"),t(668,"Define o "),e(669,"em"),t(670,"layout"),n(),t(671," de exibi\xE7\xE3o."),n()()(),e(672,"tr",14)(673,"td",15)(674,"div",22)(675,"span",23),t(676," p-removable"),i(677,"br"),n()()(),e(678,"td",18)(679,"code",37),t(680,"boolean"),n()(),e(681,"td",20)(682,"p")(683,"code"),t(684,"false"),n()()(),e(685,"td",21)(686,"em")(687,"strong"),t(688,"(opcional)"),n()(),e(689,"p"),t(690,"Habilita a op\xE7\xE3o de remover a tag"),n()()(),e(691,"tr",14)(692,"td",15)(693,"div",16)(694,"span",17),t(695," (p-close)"),i(696,"br"),n()()(),e(697,"td",18)(698,"code",19),t(699,"EventEmitter"),n()(),e(700,"td",20),t(701,"-"),n(),e(702,"td",21)(703,"em")(704,"strong"),t(705,"(opcional)"),n()(),e(706,"p"),t(707,"A\xE7\xE3o que sera executada quando clicar sobre o \xEDcone de remover no "),e(708,"code"),t(709,"po-tag"),n()()()(),e(710,"tr",14)(711,"td",15)(712,"div",22)(713,"span",23),t(714," p-text-color"),i(715,"br"),n()()(),e(716,"td",18)(717,"code",24),t(718,"string"),n()(),e(719,"td",20),t(720,"-"),n(),e(721,"td",21)(722,"em")(723,"strong"),t(724,"(opcional)"),n()(),e(725,"p"),t(726,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),n(),e(727,"ul")(728,"li")(729,"p"),t(730,"Hexadeximal, por exemplo "),e(731,"code"),t(732,"#c64840"),n(),t(733,";"),n()(),e(734,"li")(735,"p"),t(736,"RGB, como "),e(737,"code"),t(738,"rgb(0, 0, 165)"),n(),t(739,";"),n()(),e(740,"li")(741,"p"),t(742,"O nome da cor, por exemplo "),e(743,"code"),t(744,"blue"),n(),t(745,";"),n()(),e(746,"li")(747,"p"),t(748,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),n(),e(749,"ul")(750,"li"),i(751,"span",25),e(752,"code"),t(753,"color-01"),n()(),e(754,"li"),i(755,"span",26),e(756,"code"),t(757,"color-02"),n()(),e(758,"li"),i(759,"span",27),e(760,"code"),t(761,"color-03"),n()(),e(762,"li"),i(763,"span",28),e(764,"code"),t(765,"color-04"),n()(),e(766,"li"),i(767,"span",29),e(768,"code"),t(769,"color-05"),n()(),e(770,"li"),i(771,"span",30),e(772,"code"),t(773,"color-06"),n()(),e(774,"li"),i(775,"span",31),e(776,"code"),t(777,"color-07"),n()(),e(778,"li"),i(779,"span",32),e(780,"code"),t(781,"color-08"),n()(),e(782,"li"),i(783,"span",33),e(784,"code"),t(785,"color-09"),n()(),e(786,"li"),i(787,"span",34),e(788,"code"),t(789,"color-10"),n()(),e(790,"li"),i(791,"span",35),e(792,"code"),t(793,"color-11"),n()(),e(794,"li"),i(795,"span",36),e(796,"code"),t(797,"color-12"),n()()()(),e(798,"li")(799,"p"),t(800,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),n()()(),e(801,"blockquote")(802,"p")(803,"strong"),t(804,"Aten\xE7\xE3o:"),n(),t(805," A propriedade "),e(806,"code"),t(807,"p-type"),n(),t(808," sobrep\xF5e esta defini\xE7\xE3o."),n()()()(),e(809,"tr",14)(810,"td",15)(811,"div",22)(812,"span",23),t(813," p-type"),i(814,"br"),n()()(),e(815,"td",18)(816,"code",47),t(817,"PoTagType"),n()(),e(818,"td",20)(819,"p")(820,"code"),t(821,"info"),n()()(),e(822,"td",21)(823,"em")(824,"strong"),t(825,"(opcional)"),n()(),e(826,"p"),t(827,"Define o tipo da "),e(828,"em"),t(829,"tag"),n(),t(830,"."),n(),e(831,"p"),t(832,"Valores v\xE1lidos:"),n(),e(833,"ul")(834,"li")(835,"code"),t(836,"success"),n(),t(837,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),n(),e(838,"li")(839,"code"),t(840,"warning"),n(),t(841,": cor amarela que representa aviso ou advert\xEAncia."),n(),e(842,"li")(843,"code"),t(844,"danger"),n(),t(845,": cor vermelha para erro ou aviso cr\xEDtico."),n(),e(846,"li")(847,"code"),t(848,"info"),n(),t(849,": cor azul claro que caracteriza conte\xFAdo informativo."),n(),e(850,"li")(851,"code"),t(852,"neutral"),n(),t(853,": cor cinza claro para uso geral."),n()(),e(854,"blockquote")(855,"p"),t(856,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),e(857,"code"),t(858,"p-color"),n(),t(859," e "),e(860,"code"),t(861,"p-icon"),n(),t(862," somente ser\xE1 exibido caso seja "),e(863,"code"),t(864,"true"),n(),t(865,"."),n()()()(),e(866,"tr",14)(867,"td",15)(868,"div",22)(869,"span",23),t(870," p-value"),i(871,"br"),n()()(),e(872,"td",18)(873,"code",24),t(874,"string"),n()(),e(875,"td",20),t(876,"-"),n(),e(877,"td",21)(878,"p"),t(879,"Texto da tag."),n()()()(),e(880,"h3"),t(881,"Interfaces"),n(),e(882,"h4",48)(883,"code",5),t(884,"PoTagLiterals"),n()(),e(885,"div",2)(886,"p"),t(887,"Interface para defini\xE7\xE3o das literais usadas no "),e(888,"code"),t(889,"po-tag"),n(),t(890,"."),n()(),e(891,"h4",10),t(892,"Propriedades"),n(),e(893,"table",11)(894,"tr",12)(895,"th",13),t(896,"Nome"),n(),e(897,"th",13),t(898,"Tipo"),n(),e(899,"th",13),t(900,"Descri\xE7\xE3o"),n()(),e(901,"tr",14)(902,"td",15)(903,"div",22)(904,"span",23),t(905," remove"),i(906,"br"),n()()(),e(907,"td",18)(908,"code",24),t(909,"string"),n()(),e(910,"td",21)(911,"em")(912,"strong"),t(913,"(opcional)"),n()(),e(914,"p"),t(915,"Texto exibido no tooltip indicando remo\xE7\xE3o da tag."),n()()()(),e(916,"h3"),t(917,"Enums"),n(),e(918,"h4",4)(919,"code",5),t(920,"PoTagOrientation"),n()(),e(921,"div",2)(922,"p"),t(923,"Define os tipos de orienta\xE7\xF5es dispon\xEDveis para o "),e(924,"code"),t(925,"po-tag"),n(),t(926,"."),n()(),e(927,"h4",10),t(928,"Propriedades"),n(),e(929,"table",11)(930,"tr",12)(931,"th",13),t(932,"Nome"),n(),e(933,"th",13),t(934,"Descri\xE7\xE3o"),n()(),e(935,"tr",14)(936,"td",15)(937,"div",22)(938,"span",23),t(939," Horizontal"),i(940,"br"),n()()(),e(941,"td",21)(942,"p"),t(943,"A tag ser\xE1 exibida na horizontal, ao lado direito em rela\xE7\xE3o ao label."),n()()(),e(944,"tr",14)(945,"td",15)(946,"div",22)(947,"span",23),t(948," Vertical"),i(949,"br"),n()()(),e(950,"td",21)(951,"p"),t(952,"Exibe a tag na vertical, ou seja, abaixo do label."),n()()()(),e(953,"h4",4)(954,"code",5),t(955,"PoTagType"),n()(),e(956,"div",2)(957,"p"),t(958,"Define os tipos dispon\xEDveis para o "),e(959,"code"),t(960,"po-tag"),n(),t(961,"."),n()(),e(962,"h4",10),t(963,"Propriedades"),n(),e(964,"table",11)(965,"tr",12)(966,"th",13),t(967,"Nome"),n(),e(968,"th",13),t(969,"Descri\xE7\xE3o"),n()(),e(970,"tr",14)(971,"td",15)(972,"div",22)(973,"span",23),t(974," Danger"),i(975,"br"),n()()(),e(976,"td",21)(977,"p"),t(978,"Erro, perigo, problema ou aviso cr\xEDtico."),n()()(),e(979,"tr",14)(980,"td",15)(981,"div",22)(982,"span",23),t(983," Info"),i(984,"br"),n()()(),e(985,"td",21)(986,"p"),t(987,"Informativo ou explicativo."),n()()(),e(988,"tr",14)(989,"td",15)(990,"div",22)(991,"span",23),t(992," Success"),i(993,"br"),n()()(),e(994,"td",21)(995,"p"),t(996,"Confirma\xE7\xE3o, resultados positivos ou \xEAxito."),n()()(),e(997,"tr",14)(998,"td",15)(999,"div",22)(1e3,"span",23),t(1001," Warning"),i(1002,"br"),n()()(),e(1003,"td",21)(1004,"p"),t(1005,"Aviso ou advert\xEAncia."),n()()(),e(1006,"tr",14)(1007,"td",15)(1008,"div",22)(1009,"span",23),t(1010," Neutral"),i(1011,"br"),n()()(),e(1012,"td",21)(1013,"p"),t(1014,"De uso geral, quando os tipos Info, Warning, Success e Danger n\xE3o atendem a necessidade."),n()()()()())},dependencies:[y],encapsulation:2})}return a})();var fe=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(N(ee),N(te))};static \u0275cmp=c({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Tag",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),b("p-click",function(){return o.changeTab("doc")}),i(3,"sample-po-tag-doc"),n(),e(4,"po-tab",3),b("p-click",function(){return o.changeTab("web")}),i(5,"sample-po-tag-basic-view")(6,"sample-po-tag-labs-view")(7,"sample-po-tag-bank-account-view"),n()()()),l&2&&(d("p-actions",o.actions),m(2),d("p-active",o.activeTab==="doc"),m(2),d("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[W,v,f,ge,Ee,xe,ve],encapsulation:2})}return a})();var ze=[{path:"",component:fe}],he=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=I({type:a});static \u0275inj=O({imports:[j.forChild(ze),j]})}return a})();var pt=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=I({type:a});static \u0275inj=O({imports:[se,he]})}return a})();export{pt as DocPoTagModule};
