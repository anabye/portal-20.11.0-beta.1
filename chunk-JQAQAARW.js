import{o as P,p as re}from"./chunk-F4JLAWPH.js";import{Ab as y,Eb as le,Fa as oe,N as _,O as te,Q as ne,Sa as ie,a as Z,nb as ae,q as $,sa as L,v as ee,zb as x}from"./chunk-LS5JYUA4.js";import"./chunk-ZXY2ZB5H.js";import{Aa as m,Da as D,Eb as A,Fc as U,Gc as G,Ha as q,Hc as Y,Ic as X,Jc as J,La as t,Ma as e,N as M,Na as l,Q as k,Ra as W,Sa as b,Ta as R,U as g,V as S,Wc as K,Yc as Q,_c as I,a as V,bb as H,cb as n,eb as f,gb as h,hb as w,ib as E,ja as d,ka as O,nb as j,ob as C,qa as c,ra as F,wa as z}from"./chunk-GP3Z6ZCX.js";var Ee=()=>({label:"How to install PO",url:"/guides/how-install"}),ve=i=>[i],pe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-dropdown-basic"]],standalone:!1,decls:1,vars:4,consts:[["p-label","PO Dropdown",3,"p-actions"]],template:function(a,o){a&1&&l(0,"po-dropdown",0),a&2&&m("p-actions",C(2,ve,j(1,Ee)))},dependencies:[_],encapsulation:2})}return i})();var xe=i=>({"docs-sample-code-tabs":i}),de=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-dropdown-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Dropdown Basic"),e(),t(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="[{ label: 'How to install PO', url: '/guides/how-install' }]">
</po-dropdown>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-dropdown-basic/sample-po-dropdown-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-dropdown-basic',
  templateUrl: './sample-po-dropdown-basic.component.html',
  standalone: false
})
export class SamplePoDropdownBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-dropdown-basic"),e(),l(23,"hr")),a&2&&(d(5),D("po-icon "+o.sampleCodeButtonIcon),d(),f(" ",o.sampleCodeButtonLabel,""),d(),m("ngClass",C(4,xe,o.hideSampleCodeTabs)))},dependencies:[A,P,x,y,pe],encapsulation:2})}return i})();var se=(()=>{class i{actions=[{label:"New Sale",action:()=>console.log("New Sale")},{label:"New Cancellation",action:()=>console.log("New Cancellation"),type:"danger"},{label:"Reports",subItems:[{label:"Monthly Sales",action:()=>console.log("Monthly Sales"),icon:"an an-chart-line-up"},{label:"Annual Sales",action:()=>console.log("Annual Sales"),icon:"an an-chart-line-up"}]},{label:"Settings",subItems:[{label:"Users",action:()=>console.log("Users")},{label:"System",subItems:[{label:"Backup",action:()=>console.log("Backup")},{label:"Logs",action:()=>console.log("Logs")}]}]}];static \u0275fac=function(a){return new(a||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-dropdown-subitems"]],standalone:!1,decls:1,vars:1,consts:[["p-label","PO Dropdown",3,"p-actions"]],template:function(a,o){a&1&&l(0,"po-dropdown",0),a&2&&m("p-actions",o.actions)},dependencies:[_],encapsulation:2})}return i})();var De=i=>({"docs-sample-code-tabs":i}),me=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-dropdown-subitems-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Dropdown Subitems"),e(),t(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.html"),e(),t(13,"pre",7),n(14,`<po-dropdown p-label="PO Dropdown" [p-actions]="actions"> </po-dropdown>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-dropdown-subitems/sample-po-dropdown-subitems.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';
import { PoDropdownAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-subitems',
  templateUrl: './sample-po-dropdown-subitems.component.html',
  standalone: false
})
export class SamplePoDropdownSubitemsComponent {
  actions: Array<PoDropdownAction> = [
    { label: 'New Sale', action: () => console.log('New Sale') },
    { label: 'New Cancellation', action: () => console.log('New Cancellation'), type: 'danger' },
    {
      label: 'Reports',
      subItems: [
        { label: 'Monthly Sales', action: () => console.log('Monthly Sales'), icon: 'an an-chart-line-up' },
        { label: 'Annual Sales', action: () => console.log('Annual Sales'), icon: 'an an-chart-line-up' }
      ]
    },
    {
      label: 'Settings',
      subItems: [
        { label: 'Users', action: () => console.log('Users') },
        {
          label: 'System',
          subItems: [
            { label: 'Backup', action: () => console.log('Backup') },
            { label: 'Logs', action: () => console.log('Logs') }
          ]
        }
      ]
    }
  ];
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-dropdown-subitems"),e(),l(23,"hr")),a&2&&(d(5),D("po-icon "+o.sampleCodeButtonIcon),d(),f(" ",o.sampleCodeButtonLabel,""),d(),m("ngClass",C(4,De,o.hideSampleCodeTabs)))},dependencies:[A,P,x,y,se],encapsulation:2})}return i})();var ce=(()=>{class i{poNotification=k(L);action;actions;parentList;label;properties;size;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertiesOptions=[{value:"disabled",label:"Disabled"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore()}addAction(r){let a=V({},r);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!r.parent)this.actions=[...this.actions,a];else{let o=this.getActionNode(this.actions,r.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a]}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm()}getActionNode(r,a){if(!(!r||!Array.isArray(r)||!a))for(let o of r){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let s=this.getActionNode(o.subItems,a);if(s)return s}}}updateParentList(r,a=0,o=[]){return!r||!Array.isArray(r)||r.forEach(s=>{let{label:u}=s;o.push({label:`${"-".repeat(a)} ${u}`,value:u}),s.subItems&&Array.isArray(s.subItems)&&this.updateParentList(s.subItems,a+1,o)}),o}restore(){this.actions=[],this.parentList=[],this.label="PO Dropdown",this.size="medium",this.properties=[],this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0}}showAction(r){this.poNotification.success(`Action clicked: ${r}`)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-dropdown-labs"]],standalone:!1,decls:23,vars:21,consts:[["formAction","ngForm"],["f","ngForm"],[1,"po-row"],[1,"po-offset-xl-5","po-offset-lg-5",3,"p-actions","p-disabled","p-label","p-size"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","parent","p-label","Subitems","p-placeholder","Add subitems",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let s=W();t(0,"div",2),l(1,"po-dropdown",3),e(),l(2,"po-divider"),t(3,"form",null,0)(5,"po-input",4),E("ngModelChange",function(p){return g(s),w(o.action.label,p)||(o.action.label=p),S(p)}),e(),t(6,"po-input",5),E("ngModelChange",function(p){return g(s),w(o.action.action,p)||(o.action.action=p),S(p)}),e(),t(7,"po-input",6),E("ngModelChange",function(p){return g(s),w(o.action.url,p)||(o.action.url=p),S(p)}),e(),t(8,"po-select",7),E("ngModelChange",function(p){return g(s),w(o.action.type,p)||(o.action.type=p),S(p)}),e(),t(9,"po-select",8),E("ngModelChange",function(p){return g(s),w(o.action.icon,p)||(o.action.icon=p),S(p)}),e(),t(10,"po-select",9),E("ngModelChange",function(p){return g(s),w(o.action.parent,p)||(o.action.parent=p),S(p)}),e(),t(11,"po-checkbox-group",10),E("ngModelChange",function(p){return g(s),w(o.action,p)||(o.action=p),S(p)}),e(),t(12,"div",2)(13,"po-button",11),b("p-click",function(){return g(s),S(o.addAction(o.action))}),e()()(),l(14,"po-divider"),t(15,"form",null,1)(17,"div",2)(18,"po-input",12),E("ngModelChange",function(p){return g(s),w(o.label,p)||(o.label=p),S(p)}),e()(),t(19,"po-checkbox-group",13),E("ngModelChange",function(p){return g(s),w(o.properties,p)||(o.properties=p),S(p)}),e(),t(20,"po-radio-group",14),E("ngModelChange",function(p){return g(s),w(o.size,p)||(o.size=p),S(p)}),e(),t(21,"div",2)(22,"po-button",15),b("p-click",function(){return g(s),S(o.restore())}),e()()()}if(a&2){let s=H(4);d(),m("p-actions",o.actions)("p-disabled",o.properties.includes("disabled"))("p-label",o.label)("p-size",o.size),d(4),h("ngModel",o.action.label),d(),h("ngModel",o.action.action),d(),h("ngModel",o.action.url),d(),h("ngModel",o.action.type),m("p-options",o.typeOptions),d(),h("ngModel",o.action.icon),m("p-options",o.iconOptions),d(),h("ngModel",o.action.parent),m("p-options",o.parentList),d(),h("ngModel",o.action),m("p-options",o.actionOptions),d(2),m("p-disabled",s.form.invalid),d(5),h("ngModel",o.label),d(),h("ngModel",o.properties),m("p-options",o.propertiesOptions),d(),h("ngModel",o.size),m("p-options",o.sizeOptions)}},dependencies:[J,U,G,X,Y,ee,Z,_,te,ne,oe,ie],encapsulation:2})}return i})();var Te=i=>({"docs-sample-code-tabs":i}),ue=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-dropdown-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Dropdown Labs"),e(),t(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-dropdown
    class="po-offset-xl-5 po-offset-lg-5"
    [p-actions]="actions"
    [p-disabled]="properties.includes('disabled')"
    [p-label]="label"
    [p-size]="size"
  >
  </po-dropdown>
</div>

<po-divider />

<form #formAction="ngForm">
  <po-input class="po-md-6 po-lg-4" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required>
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action">
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

  <po-select class="po-md-6 po-lg-4" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
  </po-select>

  <po-select class="po-md-6 po-lg-4" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
  </po-select>

  <po-select
    class="po-md-6 po-lg-4"
    name="parent"
    [(ngModel)]="action.parent"
    p-label="Subitems"
    p-placeholder="Add subitems"
    [p-options]="parentList"
  >
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

  <div class="po-row">
    <po-button
      class="po-md-4 po-lg-2"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label" p-required> </po-input>
  </div>
  <po-checkbox-group
    class="po-md-6"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-md-12 po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-dropdown-labs/sample-po-dropdown-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoSelectOption,
  PoDropdownAction,
  PoRadioGroupOption,
  PoNotificationService
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-labs',
  templateUrl: './sample-po-dropdown-labs.component.html',
  standalone: false
})
export class SamplePoDropdownLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoDropdownAction & { parent?: string };
  actions: Array<PoDropdownAction>;
  parentList: Array<PoSelectOption>;
  label: string;
  properties: Array<string>;
  size: string;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'disabled', label: 'Disabled' }];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoDropdownAction & { parent?: string }) {
    const newAction: PoDropdownAction = { ...action };
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    if (!action.parent) {
      this.actions = [...this.actions, newAction];
    } else {
      const parentNode = this.getActionNode(this.actions, action.parent);
      if (parentNode) {
        parentNode.subItems = [...(parentNode.subItems || []), newAction];
      } else {
        this.actions = [...this.actions, newAction];
      }
    }

    this.actions = [].concat(this.actions);
    this.parentList = this.updateParentList(this.actions);

    this.restoreActionForm();
  }

  private getActionNode(items: Array<PoDropdownAction>, value: string): PoDropdownAction | undefined {
    if (!items || !Array.isArray(items) || !value) {
      return undefined;
    }

    for (const item of items) {
      if (item.label === value || (item as any).value === value) {
        return item;
      }

      if (item.subItems && Array.isArray(item.subItems)) {
        const found = this.getActionNode(item.subItems, value);
        if (found) {
          return found;
        }
      }
    }

    return undefined;
  }

  private updateParentList(
    items: Array<PoDropdownAction>,
    level = 0,
    parentList: Array<PoSelectOption> = []
  ): Array<PoSelectOption> {
    if (!items || !Array.isArray(items)) {
      return parentList;
    }

    items.forEach(item => {
      const { label } = item;
      parentList.push({ label: \`\${'-'.repeat(level)} \${label}\`, value: label });

      if (item.subItems && Array.isArray(item.subItems)) {
        this.updateParentList(item.subItems, level + 1, parentList);
      }
    });

    return parentList;
  }

  restore() {
    this.actions = [];
    this.parentList = [];
    this.label = 'PO Dropdown';
    this.size = 'medium';
    this.properties = [];
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null,
      parent: undefined
    } as any;
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-dropdown-labs"),e(),l(23,"hr")),a&2&&(d(5),D("po-icon "+o.sampleCodeButtonIcon),d(),f(" ",o.sampleCodeButtonLabel,""),d(),m("ngClass",C(4,Te,o.hideSampleCodeTabs)))},dependencies:[A,P,x,y,ce],encapsulation:2})}return i})();function ke(i,we){if(i&1&&(t(0,"div",0),l(1,"po-avatar",2),t(2,"div",3)(3,"span",4),n(4),e(),t(5,"span",5),n(6),e(),t(7,"span",5),n(8),e()()(),t(9,"div",0),l(10,"po-dropdown",6),e()),i&2){let r=R();d(),m("p-src",r.userAvatar),d(3),f(" ",r.currentFriend.name," "),d(2),f(" ",r.currentFriend.mutualFriends," mutual friends "),d(2),f(" Resides in ",r.currentFriend.reside," "),d(2),m("p-actions",r.answers)}}function Fe(i,we){i&1&&(t(0,"div",0)(1,"span",7),n(2,"Congratulations TOTVS, no more requests!"),e()())}var be=(()=>{class i{poNotification=k(L);currentFriend;userAvatar="https://lorempixel.com/144/144/";answers=[{label:"Confirm",action:this.notification.bind(this,"added","success")},{label:"Ignore",action:this.notification.bind(this,"ignored","warning")},{label:"Block",action:this.notification.bind(this,"blocked","information")}];newFriends=[{name:"Mr. Dev PO",mutualFriends:"7",reside:"Mountain View, CA"},{name:"Mr. AI PO",mutualFriends:"99+",reside:"New York City, NY"},{name:"Mr. UX PO",mutualFriends:"14",reside:"Los Angeles, CA"}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0)}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(r){this.currentFriend=this.newFriends[r]}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-dropdown-social-network"]],standalone:!1,decls:4,vars:1,consts:[[1,"po-row"],["p-title","Friend Request",1,"po-lg-6"],["p-size","lg",1,"po-md-4",3,"p-src"],[1,"po-md-8"],[1,"po-sm-12","po-font-subtitle"],[1,"po-sm-12","po-font-text"],["p-label","Add as friend?",1,"po-lg-8","po-offset-md-4","po-offset-lg-4","po-offset-xl-4",3,"p-actions"],[1,"po-lg-8","po-font-subtitle"]],template:function(a,o){a&1&&(t(0,"div",0)(1,"po-widget",1),z(2,ke,11,5)(3,Fe,3,0,"div",0),e()()),a&2&&(d(2),q(o.currentFriend?2:3))},dependencies:[$,_,le],encapsulation:2})}return i})();var Ne=i=>({"docs-sample-code-tabs":i}),ge=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-dropdown-social-network-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Dropdown - Social Network"),e(),t(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-widget class="po-lg-6" p-title="Friend Request">
    @if (currentFriend) {
      <div class="po-row">
        <po-avatar class="po-md-4" p-size="lg" [p-src]="userAvatar"> </po-avatar>
        <div class="po-md-8">
          <span class="po-sm-12 po-font-subtitle">
            { { currentFriend.name }}
          </span>
          <span class="po-sm-12 po-font-text"> { { currentFriend.mutualFriends }} mutual friends </span>
          <span class="po-sm-12 po-font-text"> Resides in { { currentFriend.reside }} </span>
        </div>
      </div>
      <div class="po-row">
        <po-dropdown
          class="po-lg-8 po-offset-md-4 po-offset-lg-4 po-offset-xl-4"
          p-label="Add as friend?"
          [p-actions]="answers"
        >
        </po-dropdown>
      </div>
    } @else {
      <div class="po-row">
        <span class="po-lg-8 po-font-subtitle">Congratulations TOTVS, no more requests!</span>
      </div>
    }
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-dropdown-social-network/sample-po-dropdown-social-network.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit, inject } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-dropdown-social-network',
  templateUrl: './sample-po-dropdown-social-network.component.html',
  standalone: false
})
export class SamplePoDropdownSocialNetworkComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  currentFriend: object;
  userAvatar: string = 'https://lorempixel.com/144/144/';

  public readonly answers: Array<object> = [
    { label: 'Confirm', action: this.notification.bind(this, 'added', 'success') },
    { label: 'Ignore', action: this.notification.bind(this, 'ignored', 'warning') },
    { label: 'Block', action: this.notification.bind(this, 'blocked', 'information') }
  ];

  public readonly newFriends: Array<object> = [
    { name: 'Mr. Dev PO', mutualFriends: '7', reside: 'Mountain View, CA' },
    { name: 'Mr. AI PO', mutualFriends: '99+', reside: 'New York City, NY' },
    { name: 'Mr. UX PO', mutualFriends: '14', reside: 'Los Angeles, CA' }
  ];

  private indexFriend: number = 0;

  ngOnInit() {
    this.setCurrentFriend(0);
  }

  private notification(action: string, notificationType: string) {
    this.poNotification[notificationType](\`User \${action} successfully!\`);

    this.indexFriend++;
    this.setCurrentFriend(this.indexFriend);
  }

  private setCurrentFriend(index: number) {
    this.currentFriend = this.newFriends[index];
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-dropdown-social-network"),e(),l(23,"hr")),a&2&&(d(5),D("po-icon "+o.sampleCodeButtonIcon),d(),f(" ",o.sampleCodeButtonLabel,""),d(),m("ngClass",C(4,Ne,o.hideSampleCodeTabs)))},dependencies:[A,P,x,y,be],encapsulation:2})}return i})();var Se=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-dropdown-doc"]],standalone:!1,decls:570,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/getting-started"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoDropdownAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoDropdownAction>"]],template:function(a,o){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoDropdownModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente po-dropdown."),e()(),t(7,"h3",3),n(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),n(11,"PoDropdownComponent"),e()(),t(12,"div",2)(13,"p"),n(14,"O componente "),t(15,"code"),n(16,"po-dropdown"),e(),n(17," pode ser utilizado como um agrupador de a\xE7\xF5es e / ou op\xE7\xF5es."),e(),t(18,"blockquote")(19,"p"),n(20,"Caso n\xE3o haja configura\xE7\xE3o de rotas em sua aplica\xE7\xE3o, se faz necess\xE1rio importar o "),t(21,"code"),n(22,"RouterModule"),e(),n(23,`
no m\xF3dulo principal para o correto funcionamento deste componente:`),e()(),t(24,"pre")(25,"code"),n(26,`import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ...
    RouterModule.forRoot([]),
    PoModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
`),e()(),t(27,"blockquote")(28,"p"),n(29,`Para maiores d\xFAvidas referente \xE0 configura\xE7\xE3o de rotas, acesse em nosso portal /Guias /Come\xE7ando
`),t(30,"a",6),n(31,"/Configurando as rotas do po-menu"),e(),n(32,"."),e()(),t(33,"h4"),n(34,"Tokens customiz\xE1veis"),e(),t(35,"p"),n(36,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(37,"blockquote")(38,"p"),n(39,"Para maiores informa\xE7\xF5es, acesse o guia "),t(40,"a",7),n(41,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(42,"."),e()(),t(43,"table")(44,"thead")(45,"tr")(46,"th"),n(47,"Propriedade"),e(),t(48,"th"),n(49,"Descri\xE7\xE3o"),e(),t(50,"th"),n(51,"Valor Padr\xE3o"),e()()(),t(52,"tbody")(53,"tr")(54,"td")(55,"strong"),n(56,"Default Values"),e()(),l(57,"td")(58,"td"),e(),t(59,"tr")(60,"td")(61,"code"),n(62,"--font-family"),e()(),t(63,"td"),n(64,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(65,"td")(66,"code"),n(67,"var(--font-family-theme)"),e()()(),t(68,"tr")(69,"td")(70,"code"),n(71,"--font-size"),e()(),t(72,"td"),n(73,"Tamanho da fonte"),e(),t(74,"td")(75,"code"),n(76,"var(--font-size-default)"),e()()(),t(77,"tr")(78,"td")(79,"code"),n(80,"--font-weight"),e()(),t(81,"td"),n(82,"Peso da fonte"),e(),t(83,"td")(84,"code"),n(85,"var(--font-weight-bold)"),e()()(),t(86,"tr")(87,"td")(88,"code"),n(89,"--line-height"),e()(),t(90,"td"),n(91,"Tamanho da label"),e(),t(92,"td")(93,"code"),n(94,"var(--line-height-none)"),e()()(),t(95,"tr")(96,"td")(97,"code"),n(98,"--color"),e()(),t(99,"td"),n(100,"Cor principal do dropdown"),e(),t(101,"td")(102,"code"),n(103,"var(--color-action-default)"),e()()(),t(104,"tr")(105,"td")(106,"code"),n(107,"--border-radius"),e()(),t(108,"td"),n(109,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),t(110,"td")(111,"code"),n(112,"var(--border-radius-md)"),e()()(),t(113,"tr")(114,"td")(115,"code"),n(116,"--border-width"),e()(),t(117,"td"),n(118,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),e(),t(119,"td")(120,"code"),n(121,"var(--border-width-md)"),e()()(),t(122,"tr")(123,"td")(124,"code"),n(125,"--padding"),e()(),t(126,"td"),n(127,"Preenchimento"),e(),t(128,"td")(129,"code"),n(130,"0 1em"),e()()(),t(131,"tr")(132,"td")(133,"strong"),n(134,"Hover"),e()(),l(135,"td")(136,"td"),e(),t(137,"tr")(138,"td")(139,"code"),n(140,"--color-hover"),e()(),t(141,"td"),n(142,"Cor principal no estado hover"),e(),t(143,"td")(144,"code"),n(145,"var(--color-brand-01-darkest)"),e()()(),t(146,"tr")(147,"td")(148,"code"),n(149,"--background-hover"),e()(),t(150,"td"),n(151,"Cor de background no estado hover"),e(),t(152,"td")(153,"code"),n(154,"var(--color-brand-01-lighter)"),e()()(),t(155,"tr")(156,"td")(157,"strong"),n(158,"Focused"),e()(),l(159,"td")(160,"td"),e(),t(161,"tr")(162,"td")(163,"code"),n(164,"--outline-color-focused"),e(),n(165," \xA0"),e(),t(166,"td"),n(167,"Cor do outline do estado de focus"),e(),t(168,"td")(169,"code"),n(170,"var(--color-action-focus)"),e()()(),t(171,"tr")(172,"td")(173,"strong"),n(174,"Pressed"),e()(),l(175,"td")(176,"td"),e(),t(177,"tr")(178,"td")(179,"code"),n(180,"--background-pressed"),e(),n(181," \xA0"),e(),t(182,"td"),n(183,"Cor de background no estado de pressionado\xA0"),e(),t(184,"td")(185,"code"),n(186,"var(--color-brand-01-light)"),e()()(),t(187,"tr")(188,"td")(189,"strong"),n(190,"Disabled"),e()(),l(191,"td")(192,"td"),e(),t(193,"tr")(194,"td")(195,"code"),n(196,"--color-disabled"),e()(),t(197,"td"),n(198,"Cor principal no estado disabled"),e(),t(199,"td")(200,"code"),n(201,"var(--color-action-disabled)"),e()()()()()(),t(202,"div",8)(203,"h4",9),n(204,"Seletor"),e(),t(205,"pre",10),n(206,`<po-dropdown
    p-actions="PoDropdownAction[]"
    p-disabled="boolean"
    p-label="string"
    p-size="string" >
</po-dropdown>
`),e()(),t(207,"h4",11),n(208,"Propriedades"),e(),t(209,"table",12)(210,"tr",13)(211,"th",14),n(212,"Nome"),e(),t(213,"th",14),n(214,"Tipo"),e(),t(215,"th",14),n(216,"Padr\xE3o"),e(),t(217,"th",14),n(218,"Descri\xE7\xE3o"),e()(),t(219,"tr",15)(220,"td",16)(221,"div",17)(222,"span",18),n(223," p-actions"),l(224,"br"),e()()(),t(225,"td",19)(226,"code",20),n(227,"PoDropdownAction[]"),e()(),t(228,"td",21),n(229,"-"),e(),t(230,"td",22)(231,"p"),n(232,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),e()()(),t(233,"tr",15)(234,"td",16)(235,"div",17)(236,"span",18),n(237," p-disabled"),l(238,"br"),e()()(),t(239,"td",19)(240,"code",23),n(241,"boolean"),e()(),t(242,"td",21)(243,"p")(244,"code"),n(245,"false"),e()()(),t(246,"td",22)(247,"em")(248,"strong"),n(249,"(opcional)"),e()(),t(250,"p"),n(251,"Desabilita o campo."),e()()(),t(252,"tr",15)(253,"td",16)(254,"div",17)(255,"span",18),n(256," p-label"),l(257,"br"),e()()(),t(258,"td",19)(259,"code",24),n(260,"string"),e()(),t(261,"td",21),n(262,"-"),e(),t(263,"td",22)(264,"p"),n(265,"Adiciona um r\xF3tulo ao "),t(266,"code"),n(267,"dropdown"),e(),n(268,"."),e()()(),t(269,"tr",15)(270,"td",16)(271,"div",17)(272,"span",18),n(273," p-size"),l(274,"br"),e()()(),t(275,"td",19)(276,"code",24),n(277,"string"),e()(),t(278,"td",21)(279,"p")(280,"code"),n(281,"medium"),e()()(),t(282,"td",22)(283,"em")(284,"strong"),n(285,"(opcional)"),e()(),t(286,"p"),n(287,"Define o tamanho do componente:"),e(),t(288,"ul")(289,"li")(290,"code"),n(291,"small"),e(),n(292,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(293,"li")(294,"code"),n(295,"medium"),e(),n(296,": altura do button como 44px."),e()(),t(297,"blockquote")(298,"p"),n(299,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(300,"code"),n(301,"medium"),e(),n(302,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(303,"a",25),n(304,"po-theme"),e(),n(305,"."),e()()()()(),t(306,"h3"),n(307,"Interfaces"),e(),t(308,"h4",26)(309,"code",5),n(310,"PoDropdownAction"),e()(),t(311,"div",2)(312,"p"),n(313,"Interface para lista de a\xE7\xF5es do componente. Interface do componente po-dropdown"),e()(),t(314,"h4",11),n(315,"Propriedades"),e(),t(316,"table",12)(317,"tr",13)(318,"th",14),n(319,"Nome"),e(),t(320,"th",14),n(321,"Tipo"),e(),t(322,"th",14),n(323,"Descri\xE7\xE3o"),e()(),t(324,"tr",15)(325,"td",16)(326,"div",17)(327,"span",18),n(328," action"),l(329,"br"),e()()(),t(330,"td",19)(331,"code",27),n(332,"Function"),e()(),t(333,"td",22)(334,"em")(335,"strong"),n(336,"(opcional)"),e()(),t(337,"p"),n(338,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),e(),t(339,"p"),n(340,"No componente "),t(341,"code"),n(342,"po-dropdown"),e(),n(343,", a action tamb\xE9m pode ser executada para o agrupador de subitens."),e(),t(344,"blockquote")(345,"p"),n(346,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),t(347,"em"),n(348,"bind"),e(),n(349,"."),e()(),t(350,"p"),n(351,"Exemplo: "),t(352,"code"),n(353,"action: this.myFunction.bind(this)"),e()()()(),t(354,"tr",15)(355,"td",16)(356,"div",17)(357,"span",18),n(358," disabled"),l(359,"br"),e()()(),t(360,"td",19)(361,"code",23),n(362,"boolean "),e(),t(363,"code",27),n(364," Function"),e()(),t(365,"td",22)(366,"em")(367,"strong"),n(368,"(opcional)"),e()(),t(369,"p"),n(370,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),e(),t(371,"p"),n(372,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),e()()(),t(373,"tr",15)(374,"td",16)(375,"div",17)(376,"span",18),n(377," icon"),l(378,"br"),e()()(),t(379,"td",19)(380,"code",24),n(381,"string "),e(),t(382,"code",28),n(383," TemplateRef<void>"),e()(),t(384,"td",22)(385,"em")(386,"strong"),n(387,"(opcional)"),e()(),t(388,"p"),n(389,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),e(),t(390,"p"),n(391,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(392,"a",29),n(393,"Biblioteca de \xEDcones"),e(),n(394,". conforme exemplo abaixo:"),e(),t(395,"pre")(396,"code"),n(397,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),e()(),t(398,"p"),n(399,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),e(),t(400,"pre")(401,"code"),n(402,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),e()(),t(403,"p"),n(404,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(405,"code"),n(406,"TemplateRef"),e(),n(407,`, conforme exemplo abaixo:
component.html:`),e(),t(408,"pre")(409,"code"),n(410,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),e()(),t(411,"p"),n(412,"component.ts:"),e(),t(413,"pre")(414,"code"),n(415,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),e()()()(),t(416,"tr",15)(417,"td",16)(418,"div",17)(419,"span",18),n(420," label"),l(421,"br"),e()()(),t(422,"td",19)(423,"code",24),n(424,"string"),e()(),t(425,"td",22)(426,"p"),n(427,"R\xF3tulo da a\xE7\xE3o."),e(),t(428,"p"),n(429,"No componente "),t(430,"code"),n(431,"po-dropdown"),e(),n(432,", a label tamb\xE9m pode representar o agrupador de subitens."),e()()(),t(433,"tr",15)(434,"td",16)(435,"div",17)(436,"span",18),n(437," selected"),l(438,"br"),e()()(),t(439,"td",19)(440,"code",23),n(441,"boolean"),e()(),t(442,"td",22)(443,"em")(444,"strong"),n(445,"(opcional)"),e()(),t(446,"p"),n(447,"Define se a a\xE7\xE3o est\xE1 selecionada."),e()()(),t(448,"tr",15)(449,"td",16)(450,"div",17)(451,"span",18),n(452," separator"),l(453,"br"),e()()(),t(454,"td",19)(455,"code",23),n(456,"boolean"),e()(),t(457,"td",22)(458,"em")(459,"strong"),n(460,"(opcional)"),e()(),t(461,"p"),n(462,"Atribui uma linha separadora acima do item."),e()()(),t(463,"tr",15)(464,"td",16)(465,"div",17)(466,"span",18),n(467," subItems"),l(468,"br"),e()()(),t(469,"td",19)(470,"code",30),n(471,"Array<PoDropdownAction>"),e()(),t(472,"td",22)(473,"em")(474,"strong"),n(475,"(opcional)"),e()(),t(476,"p"),n(477,"Array de a\xE7\xF5es ("),t(478,"code"),n(479,"PoDropdownAction"),e(),n(480,") usado para criar agrupadores de subitens."),e(),t(481,"ul")(482,"li"),n(483,"Permite a cria\xE7\xE3o de menus aninhados (submenus)."),e()(),t(484,"blockquote")(485,"p"),n(486,`Boas pr\xE1ticas de desenvolvimento:
Recomenda-se limitar a navega\xE7\xE3o a, no m\xE1ximo, tr\xEAs n\xEDveis hier\xE1rquicos.
Isso evita sobrecarga cognitiva, facilita a memoriza\xE7\xE3o da estrutura e garante uma melhor experi\xEAncia de uso.`),e()()()(),t(487,"tr",15)(488,"td",16)(489,"div",17)(490,"span",18),n(491," type"),l(492,"br"),e()()(),t(493,"td",19)(494,"code",24),n(495,"string"),e()(),t(496,"td",22)(497,"em")(498,"strong"),n(499,"(opcional)"),e()(),t(500,"p"),n(501,"Define a cor do item, sendo "),t(502,"code"),n(503,"default"),e(),n(504," o padr\xE3o."),e(),t(505,"p"),n(506,"Valores v\xE1lidos:"),e(),t(507,"ul")(508,"li")(509,"code"),n(510,"default"),e()(),t(511,"li")(512,"code"),n(513,"danger"),e(),n(514," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),e()()()(),t(515,"tr",15)(516,"td",16)(517,"div",17)(518,"span",18),n(519," url"),l(520,"br"),e()()(),t(521,"td",19)(522,"code",24),n(523,"string"),e()(),t(524,"td",22)(525,"em")(526,"strong"),n(527,"(opcional)"),e()(),t(528,"p"),n(529,"URL utilizada para redirecionamento das p\xE1ginas."),e(),t(530,"p"),n(531,"No componente "),t(532,"code"),n(533,"po-dropdown"),e(),n(534,`, a url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),t(535,"code"),n(536,"url"),e(),n(537," \xE9 informada em um agrupador, o clique "),t(538,"strong"),n(539,"n\xE3o abrir\xE1 os subitens"),e(),n(540,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),e()()(),t(541,"tr",15)(542,"td",16)(543,"div",17)(544,"span",18),n(545," visible"),l(546,"br"),e()()(),t(547,"td",19)(548,"code",23),n(549,"boolean "),e(),t(550,"code",27),n(551," Function"),e()(),t(552,"td",22)(553,"em")(554,"strong"),n(555,"(opcional)"),e()(),t(556,"p"),n(557,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),e(),t(558,"blockquote")(559,"p"),n(560,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),e()(),t(561,"p"),n(562,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),e(),t(563,"ul")(564,"li")(565,"p"),n(566,"Fun\xE7\xE3o que deve retornar um booleano."),e()(),t(567,"li")(568,"p"),n(569,"Informar diretamente um valor booleano."),e()()()()()()())},dependencies:[P],encapsulation:2})}return i})();var fe=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||i)(O(K),O(Q))};static \u0275cmp=c({type:i,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Dropdown",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),b("p-click",function(){return o.changeTab("doc")}),l(3,"sample-po-dropdown-doc"),e(),t(4,"po-tab",3),b("p-click",function(){return o.changeTab("web")}),l(5,"sample-po-dropdown-basic-view")(6,"sample-po-dropdown-subitems-view")(7,"sample-po-dropdown-labs-view")(8,"sample-po-dropdown-social-network-view"),e()()()),a&2&&(m("p-actions",o.actions),d(2),m("p-active",o.activeTab==="doc"),d(2),m("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[ae,x,y,de,me,ue,ge,Se],encapsulation:2})}return i})();var Be=[{path:"",component:fe}],he=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=F({type:i});static \u0275inj=M({imports:[I.forChild(Be),I]})}return i})();var wt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=F({type:i});static \u0275inj=M({imports:[re,he]})}return i})();export{wt as DocPoDropdownModule};
