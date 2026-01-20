import{o as y,p as Fe}from"./chunk-WKH4H3SL.js";import{Ab as k,Fa as ye,J as X,Ja as q,O as Ce,Q as Y,Sa as H,Ta as Pe,Xa as B,a as O,nb as Le,sa as Z,v as N,va as ke,za as ee,zb as C}from"./chunk-DGWQGSAF.js";import"./chunk-ZXY2ZB5H.js";import{Aa as u,Cc as ae,Da as P,E as de,Eb as w,Fc as T,Gc as I,Ha as se,Hc as K,Ic as A,Jc as z,La as n,M as V,Ma as t,Mc as be,N as Q,Na as i,Nc as ge,Pb as Se,Q as h,Ra as $,Rc as ve,Sa as x,Ta as ue,U as c,V as E,Wc as he,Xa as oe,Yc as fe,_c as le,a as G,ac as j,bb as ce,c as me,cb as e,eb as L,gb as b,hb as g,ib as v,ja as d,ka as ie,mb as _,nb as U,ob as F,p as ne,qa as S,ra as J,ub as Ee,vb as xe,wa as pe}from"./chunk-GP3Z6ZCX.js";var we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&i(0,"po-lookup",0)},dependencies:[q],encapsulation:2})}return a})();var Ue=a=>({"docs-sample-code-tabs":a}),qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Basic"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-lookup-basic"),t(),i(23,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Ue,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,we],encapsulation:2})}return a})();var D=(()=>{class a{httpClient=h(j);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,p=me(m,["filterParams","advancedFilters"]),s=G(G(G({},p),l),o);return this.httpClient.get(this.url,{params:s})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=V({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Me=(()=>{class a{sampleFilterService=h(D);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=ke.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch{this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch{this.customAdvancedFilters=void 0}}restore(){this.helperText="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium"}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs"]],standalone:!1,features:[_([D])],decls:26,vars:52,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-helper","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-label-text-wrap","p-virtual-scroll","p-error-limit"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let p=$();n(0,"po-lookup",1),v("ngModelChange",function(m){return c(p),g(o.lookup,m)||(o.lookup=m),E(m)}),x("p-change",function(){return c(p),E(o.changeEvent("p-change"))})("p-error",function(){return c(p),E(o.changeEvent("p-error"))})("p-keydown",function(){return c(p),E(o.changeEvent("p-keydown"))})("p-selected",function(){return c(p),E(o.changeEvent("p-selected"))}),t(),i(1,"po-divider"),n(2,"po-container",2)(3,"div",3),i(4,"po-info",4)(5,"po-info",5),t()(),i(6,"po-divider"),n(7,"form",null,0)(9,"po-input",6),v("ngModelChange",function(m){return c(p),g(o.label,m)||(o.label=m),E(m)}),t(),n(10,"po-checkbox-group",7),v("ngModelChange",function(m){return c(p),g(o.columnsName,m)||(o.columnsName=m),E(m)}),x("p-change",function(){return c(p),E(o.updateColumns())}),t(),n(11,"po-select",8),v("ngModelChange",function(m){return c(p),g(o.fieldLabel,m)||(o.fieldLabel=m),E(m)}),t(),n(12,"po-select",9),v("ngModelChange",function(m){return c(p),g(o.fieldValue,m)||(o.fieldValue=m),E(m)}),t(),n(13,"po-input",10),v("ngModelChange",function(m){return c(p),g(o.filterService,m)||(o.filterService=m),E(m)}),t(),n(14,"po-input",11),v("ngModelChange",function(m){return c(p),g(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),E(m)}),t(),n(15,"po-input",12),v("ngModelChange",function(m){return c(p),g(o.help,m)||(o.help=m),E(m)}),t(),n(16,"po-input",13),v("ngModelChange",function(m){return c(p),g(o.helperText,m)||(o.helperText=m),E(m)}),t(),n(17,"po-input",14),v("ngModelChange",function(m){return c(p),g(o.placeholder,m)||(o.placeholder=m),E(m)}),t(),n(18,"po-input",15),v("ngModelChange",function(m){return c(p),g(o.literals,m)||(o.literals=m),E(m)}),x("p-change",function(){return c(p),E(o.changeLiterals())}),t(),n(19,"po-input",16),v("ngModelChange",function(m){return c(p),g(o.formatField,m)||(o.formatField=m),E(m)}),x("p-change",function(m){return c(p),E(o.onFieldFormatChange(m))}),t(),n(20,"po-checkbox-group",17),v("ngModelChange",function(m){return c(p),g(o.properties,m)||(o.properties=m),E(m)}),t(),n(21,"po-radio-group",18),v("ngModelChange",function(m){return c(p),g(o.spacing,m)||(o.spacing=m),E(m)}),t(),n(22,"po-radio-group",19),v("ngModelChange",function(m){return c(p),g(o.size,m)||(o.size=m),E(m)}),t(),n(23,"po-textarea",20),v("ngModelChange",function(m){return c(p),g(o.advancedFilters,m)||(o.advancedFilters=m),E(m)}),x("p-change",function(){return c(p),E(o.changeAdvancedFilters())}),t(),n(24,"div",3)(25,"po-button",21),x("p-click",function(){return c(p),E(o.restore())}),t()()()}l&2&&(b("ngModel",o.lookup),u("p-helper",o.helperText)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-label-text-wrap",o.properties==null?null:o.properties.includes("labelTextWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit")),d(4),u("p-value",o.lookup),d(),u("p-value",o.event),d(4),b("ngModel",o.label),d(),b("ngModel",o.columnsName),u("p-options",o.columnsOptions),d(),b("ngModel",o.fieldLabel),u("p-options",o.fieldLabelOptions),d(),b("ngModel",o.fieldValue),u("p-options",o.fieldValueOptions),d(),b("ngModel",o.filterService),d(),b("ngModel",o.fieldErrorMessage),d(),b("ngModel",o.help),d(),b("ngModel",o.helperText),d(),b("ngModel",o.placeholder),d(),b("ngModel",o.literals),d(),b("ngModel",o.formatField),d(),b("ngModel",o.properties),u("p-options",o.propertiesOptions),d(),b("ngModel",o.spacing),u("p-options",o.typeSpacing),d(),b("ngModel",o.size),u("p-options",o.sizeOptions),d(),b("ngModel",o.advancedFilters))},dependencies:[z,T,I,A,K,N,X,O,Ce,Y,ye,q,H,Pe,B],encapsulation:2})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),Te=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Labs"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  [(ngModel)]="lookup"
  [p-helper]="helperText"
  [p-advanced-filters]="customAdvancedFilters"
  [p-auto-height]="properties.includes('autoHeight')"
  [p-clean]="properties.includes('clean')"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-field-format]="fieldFormat"
  [p-field-label]="fieldLabel"
  [p-filter-service]="filterService || sampleFilterService"
  [p-field-value]="fieldValue"
  [p-help]="help"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-infinite-scroll]="properties.includes('infiniteScroll')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-multiple]="properties.includes('multiple')"
  [p-no-autocomplete]="properties.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-spacing]="spacing"
  [p-text-wrap]="properties.includes('textWrap')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-change)="changeEvent('p-change')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-selected)="changeEvent('p-selected')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-lookup>

<po-divider />

<po-container p-no-border="true" p-no-padding="true">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Model" [p-value]="lookup"> </po-info>

    <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
  </div>
</po-container>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-checkbox-group
    class="po-md-12 po-lg-6"
    name="columnsName"
    [(ngModel)]="columnsName"
    p-columns="3"
    p-label="Columns"
    [p-options]="columnsOptions"
    (p-change)="updateColumns()"
  >
  </po-checkbox-group>

  <po-select
    class="po-md-6 po-lg-12"
    name="fieldLabel"
    [(ngModel)]="fieldLabel"
    p-label="Field Label"
    p-required
    [p-options]="fieldLabelOptions"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="fieldValue"
    [(ngModel)]="fieldValue"
    p-label="Field Value"
    p-required
    [p-options]="fieldValueOptions"
  >
  </po-select>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/people"
    p-label="Filter Service"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    name="formatField"
    [(ngModel)]="formatField"
    class="po-lg-6"
    p-label="Field Format"
    p-help='Ex.: ["id", "name"]'
    (p-change)="onFieldFormatChange($event)"
  >
  </po-input>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="spacing"
    [(ngModel)]="spacing"
    p-columns="4"
    p-help="Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    p-label="Spacing"
    [p-options]="typeSpacing"
  >
  </po-radio-group>

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

  <po-textarea
    class="po-md-12 po-lg-12"
    name="advancedFilters"
    [(ngModel)]="advancedFilters"
    (p-change)="changeAdvancedFilters()"
    p-help='Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]'
    p-label="Advanced Filters"
    p-rows="4"
  >
  </po-textarea>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoLookupColumn,
  PoLookupFilter,
  PoLookupLiterals,
  PoDynamicFormField,
  PoSelectOption,
  PoTableColumnSpacing,
  PoRadioGroupOption
} from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-labs',
  templateUrl: './sample-po-lookup-labs.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupLabsComponent implements OnInit {
  sampleFilterService = inject(SamplePoLookupService);

  helperText: string;
  columns: Array<PoLookupColumn>;
  columnsName: Array<string>;
  customLiterals: PoLookupLiterals;
  event: string;
  fieldFormat: Array<string>;
  formatField: string;
  fieldLabel: string;
  fieldValue: string;
  filterService: PoLookupFilter | string;
  help: string;
  label: string;
  literals: string;
  lookup: any;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  advancedFilters: string;
  customAdvancedFilters: Array<PoDynamicFormField>;
  size: string;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Name' },
    { value: 'email', label: 'Email' }
  ];

  public readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'label', label: 'Label' },
    ...this.columnsOptions
  ];

  public readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'infiniteScroll', label: 'Infinite Scroll' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'hideColumnsManager', label: 'Hide Columns Manager' },
    { value: 'textWrap', label: 'Text Wrap' },
    { value: 'virtualScroll', label: 'Virtual Sroll' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' }
  ];

  private readonly columnsDefinition = {
    id: <PoLookupColumn>{ property: 'id', label: 'Id' },
    name: <PoLookupColumn>{ property: 'name', label: 'Name' },
    email: <PoLookupColumn>{ property: 'email', label: 'Email' }
  };

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'ExtraSmall', value: 'extraSmall' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit(): void {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onFieldFormatChange(event) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  changeAdvancedFilters() {
    try {
      this.customAdvancedFilters = JSON.parse(this.advancedFilters);
    } catch {
      this.customAdvancedFilters = undefined;
    }
  }

  restore() {
    this.helperText = '';
    this.columnsName = ['id', 'name'];
    this.customLiterals = undefined;
    this.updateColumns();

    this.fieldLabel = 'name';
    this.fieldValue = 'id';
    this.fieldFormat = undefined;
    this.formatField = undefined;
    this.event = undefined;
    this.filterService = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.help = undefined;
    this.lookup = undefined;
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.customAdvancedFilters = [];
    this.size = 'medium';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach(column => this.columns.push(this.columnsDefinition[column]));
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-labs"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Je,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Me],encapsulation:2})}return a})();var Ke=()=>({modalTitle:"Heroes available for mission"}),De=(()=>{class a{service=h(D);notification=h(Z);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:!0,gridColumns:6,label:"Hero"},{property:"name",optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero"]],standalone:!1,features:[_([D])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let p=$();n(0,"div",1),i(1,"po-info",2),t(),i(2,"po-divider"),n(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),v("ngModelChange",function(m){return c(p),g(o.hero,m)||(o.hero=m),E(m)}),t(),n(7,"po-select",4),v("ngModelChange",function(m){return c(p),g(o.vehicle,m)||(o.vehicle=m),E(m)}),t()(),n(8,"div",1)(9,"po-button",5),x("p-click",function(){return c(p),E(o.startMission())}),t()()()}if(l&2){let p=ce(4);d(6),b("ngModel",o.hero),u("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",!0)("p-advanced-filters",o.advancedFilters)("p-literals",U(10,Ke)),d(),b("ngModel",o.vehicle),u("p-options",o.vehicles),d(2),u("p-disabled",p.form.invalid||p.form.pending)}},dependencies:[z,T,I,A,K,N,O,q,H,B],encapsulation:2})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      [(ngModel)]="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="fieldFormat"
      [p-filter-service]="service"
      [p-hide-columns-manager]="true"
      [p-advanced-filters]="advancedFilters"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      [(ngModel)]="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="f.form.invalid || f.form.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService, PoDynamicFormField } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero',
  templateUrl: './sample-po-lookup-hero.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupHeroComponent {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);

  hero: string;
  vehicle: string;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  advancedFilters: Array<PoDynamicFormField> = [
    { property: 'nickname', divider: 'Hero Informations', optional: true, gridColumns: 6, label: 'Hero' },
    { property: 'name', optional: true, gridColumns: 6 }
  ];

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    if (this.hero.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${this.hero} \${this.vehicle ? 'with vehicle: ' + this.vehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${this.hero} is in other mission.\`);
    }

    this.hero = undefined;
    this.vehicle = undefined;
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-hero"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,Ye,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,De],encapsulation:2})}return a})();var et=()=>["nickname","label"],tt=()=>({modalTitle:"Heroes available for mission"}),Ae=(()=>{class a{service=h(D);notification=h(Z);formBuilder=h(ve);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,ae.required],vehicle:[null,ae.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:!1,features:[_([D])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(n(0,"div",0),i(1,"po-info",1),t(),i(2,"po-divider"),n(3,"form",2)(4,"div",0),i(5,"po-lookup",3)(6,"po-select",4),t(),n(7,"div",0)(8,"po-button",5),x("p-click",function(){return o.startMission()}),t()()()),l&2&&(d(3),u("formGroup",o.formMission),d(2),u("p-columns",o.columns)("p-field-format",U(7,et))("p-filter-service",o.service)("p-literals",U(8,tt)),d(),u("p-options",o.vehicles),d(2),u("p-disabled",o.formMission.invalid||o.formMission.pending))},dependencies:[z,T,I,be,ge,N,O,q,H,B],encapsulation:2})}return a})();var it=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero Reactive Form"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<po-divider />

<form [formGroup]="formMission">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      formControlName="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="['nickname', 'label']"
      [p-filter-service]="service"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      formControlName="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="formMission.invalid || formMission.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero-reactive-form',
  templateUrl: './sample-po-lookup-hero-reactive-form.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupHeroReactiveFormComponent implements OnInit {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);
  private formBuilder = inject(UntypedFormBuilder);

  formMission: UntypedFormGroup;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  ngOnInit(): void {
    this.formMission = this.formBuilder.group({
      hero: [null, Validators.required],
      vehicle: [null, Validators.required]
    });
  }

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    const heroName = this.formMission.get('hero').value;
    const heroVehicle = this.formMission.get('vehicle').value;

    if (heroName.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${heroName} \${heroVehicle ? 'with vehicle: ' + heroVehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${heroName} is in other mission.\`);
    }

    this.formMission.reset();
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-hero-reactive-form"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,it,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Ae],encapsulation:2})}return a})();var re=(()=>{class a{http=h(j);baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let p={page:l.toString()};return r&&(p.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:p}).pipe(ne(s=>({items:s.results,hasNext:!!s.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(ne(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=V({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function at(a,Et){if(a&1&&(n(0,"div",0),i(1,"po-table",3),t()),a&2){let r=ue();d(),u("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",!0)("p-hide-table-search",!1)}}var Ve=(()=>{class a{filterService=h(re);entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case"people":return this.characterColumns;case"planets":return this.planetsColumns;case"starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case"people":return"character";case"planets":return"planet";case"starships":return"starship"}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:!1,features:[_([re])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"po-radio-group",1),v("ngModelChange",function(s){return g(o.filterParams,s)||(o.filterParams=s),s}),t()(),i(2,"po-divider"),n(3,"div",0)(4,"po-lookup",2),Ee(5,"titlecase"),v("ngModelChange",function(s){return g(o.entity,s)||(o.entity=s),s}),x("p-selected",function(s){return o.onSelected(s)}),t()(),pe(6,at,2,4,"div",0)),l&2&&(d(),b("ngModel",o.filterParams),u("p-options",o.entities),d(3),oe("p-help","Select a ",o.entityLabel," to see the list of movies in which it participated"),oe("p-label","",xe(5,12,o.entityLabel)," of Star Wars"),b("ngModel",o.entity),u("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",!0),d(2),se(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[T,A,O,Y,q,ee,Se],encapsulation:2})}return a})();var rt=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Star Wars films"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-radio-group
    class="po-md-12"
    name="filterParams"
    [(ngModel)]="filterParams"
    p-label="Choose the entity of SW to search"
    [p-options]="entities"
  >
  </po-radio-group>
</div>

<po-divider />

<div class="po-row">
  <po-lookup
    class="po-md-12"
    name="entity"
    [(ngModel)]="entity"
    p-field-label="name"
    p-field-value="name"
    p-help="Select a { { entityLabel }} to see the list of movies in which it participated"
    p-label="{ { entityLabel | titlecase }} of Star Wars"
    [p-columns]="entityColumns"
    [p-filter-params]="filterParams"
    [p-filter-service]="filterService"
    [p-infinite-scroll]="true"
    (p-selected)="onSelected($event)"
  >
  </po-lookup>
</div>

@if (filmItemsFiltered && entity) {
  <div class="po-row">
    <po-table
      class="po-sm-12"
      [p-columns]="filmColumns"
      [p-items]="filmItemsFiltered"
      [p-sort]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </div>
}
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
import { SamplePoLookupSwFilmsService } from './sample-po-lookup-sw-films.service';

@Component({
  selector: 'sample-po-lookup-sw-films',
  templateUrl: './sample-po-lookup-sw-films.component.html',
  providers: [SamplePoLookupSwFilmsService],
  standalone: false
})
export class SamplePoLookupSwFilmsComponent implements OnInit {
  filterService = inject(SamplePoLookupSwFilmsService);

  entity;
  filmItemsFiltered;
  filterParams = 'people';

  readonly characterColumns = [
    { property: 'name', label: 'Name' },
    { property: 'gender', label: 'Gender' },
    { property: 'height', label: 'Height' },
    { property: 'mass', label: 'Mass' }
  ];

  readonly entities: Array<PoRadioGroupOption> = [
    { label: 'Character', value: 'people' },
    { label: 'Planet', value: 'planets' },
    { label: 'Starship', value: 'starships' }
  ];

  readonly filmColumns = [
    { property: 'episode_id', label: 'Episode id' },
    { property: 'title', label: 'Title' },
    { property: 'director', label: 'Director' },
    { property: 'producer', label: 'Producer' },
    { property: 'release_date', label: 'Release date', type: 'date' }
  ];

  readonly planetsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'diameter', label: 'Diameter' },
    { property: 'population', label: 'Population' },
    { property: 'climate', label: 'Climate' }
  ];

  readonly starshipsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'passengers', label: 'Passengers' },
    { property: 'max_atmosphering_speed', label: 'Max Speed' },
    { property: 'consumables', label: 'Consumables' }
  ];

  private filmItems;

  get entityColumns() {
    return this.getEntityColumns(this.filterParams);
  }

  get entityLabel() {
    return this.getLabelOfEntity(this.filterParams);
  }

  ngOnInit() {
    this.filterService.getFilms().subscribe((films: { results: Array<any> }) => {
      this.filmItems = films.results;
    });
  }

  onSelected(entity) {
    this.filterService.getObjectByValue(entity.name, this.filterParams).subscribe(
      result => {
        this.filmItemsFiltered = this.filmItems.filter(film => result?.films.includes(film.url));
      },
      err => console.error(err)
    );
  }

  private getEntityColumns(entity) {
    switch (entity) {
      case 'people':
        return this.characterColumns;
      case 'planets':
        return this.planetsColumns;
      case 'starships':
        return this.starshipsColumns;
    }
  }

  private getLabelOfEntity(entity): string {
    switch (entity) {
      case 'people':
        return 'character';
      case 'planets':
        return 'planet';
      case 'starships':
        return 'starship';
    }
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupResponseApi, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupSwFilmsService implements PoLookupFilter {
  private http = inject(HttpClient);

  private baseUrl = 'https://swapi.dev/api';
  private filmsUrl = 'https://swapi.dev/api/films/';

  getFilms() {
    return this.http.get(this.filmsUrl);
  }

  getFilteredItems({ filter, page, filterParams }: PoLookupFilteredItemsParams): Observable<PoLookupResponseApi> {
    const params = { page: page.toString() };

    if (filter) {
      params['search'] = filter;
    }

    return this.http.get(\`\${this.baseUrl}/\${filterParams}\`, { params }).pipe(
      map((response: { results: Array<any>; next: string }) => ({
        items: response.results,
        hasNext: !!response.next
      }))
    );
  }

  getObjectByValue(value: string, filterParams: any): Observable<any> {
    return this.http
      .get(\`\${this.baseUrl}/\${filterParams}/?search=\${value}\`)
      .pipe(map((response: { results: Array<any> }) => response.results[0]));
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-sw-films"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,rt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,Ve],encapsulation:2})}return a})();var Ie=(()=>{class a{http=h(j);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(de("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=V({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ze=(()=>{class a{service=h(Ie);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank")}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:!1,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"po-lookup",1),v("ngModelChange",function(s){return g(o.multiLookup,s)||(o.multiLookup=s),s}),x("p-change",function(s){return o.changeOptions(s)}),t(),n(2,"po-container",2),i(3,"po-table",3),t()()),l&2&&(d(),b("ngModel",o.multiLookup),u("p-multiple",!0),d(2),u("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-loading",o.loading))},dependencies:[T,A,X,q,ee],encapsulation:2})}return a})();var pt=a=>({"docs-sample-code-tabs":a}),Ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Multiple"),t(),n(4,"a",2),x("click",function(){return o.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-lookup
    class="po-md-6"
    name="lookup"
    [(ngModel)]="multiLookup"
    p-field-label="label"
    p-field-value="value"
    p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Search a Hero"
    [p-multiple]="true"
    (p-change)="changeOptions($event)"
  ></po-lookup>
  <po-container class="po-md-6 po-mt-4">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-loading]="loading"
    ></po-table>
  </po-container>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoLookupMultipleService } from './sample-po-lookup-multiple.service';

@Component({
  selector: 'sample-po-lookup-multiple',
  templateUrl: './sample-po-lookup-multiple.component.html',
  styles: [],
  standalone: false
})
export class SamplePoLookupMultipleComponent {
  service = inject(SamplePoLookupMultipleService);

  loading: boolean = false;
  heroes: Array<any>;
  multiLookup: Array<any> = [1495831666871, 1405833068599];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name'
    }
  ];

  changeOptions(event): void {
    this.loading = true;
    this.service.getHeroes(event).subscribe(
      result => {
        this.heroes = result;
      },
      err => console.error(err),
      () => (this.loading = false)
    );
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupMultipleService {
  http = inject(HttpClient);

  getHeroes(data): Observable<any> {
    const values = data?.length ? data.toString() : data;
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes?value=\${values}\`).pipe(pluck('items'));
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-lookup-multiple"),t(),i(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel,""),d(),u("ngClass",F(4,pt,o.hideSampleCodeTabs)))},dependencies:[w,y,C,k,ze],encapsulation:2})}return a})();var He=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-lookup-doc"]],standalone:!1,decls:5469,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoLookupComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),n(24,"code"),e(25,"po-lookup"),t(),e(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),n(27,"em"),e(28,"TAB"),t(),e(29,` para
buscar um registro.`),t(),n(30,"blockquote")(31,"p"),e(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),t()(),n(33,"blockquote")(34,"p"),e(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),n(36,"a",6),e(37,"modelo"),t(),e(38," como "),n(39,"code"),e(40,"pending"),t(),e(41,"."),t()(),n(42,"p"),e(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),n(44,"code"),e(45,"po-select"),t(),e(46," ou o "),n(47,"code"),e(48,"po-combo"),t(),e(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),n(50,"a",7),e(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),t(),e(52,"."),t(),n(53,"p"),e(54,"Importante:"),t(),n(55,"ul")(56,"li"),e(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),n(58,"pre")(59,"code"),e(60,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),t()()()(),n(61,"h4"),e(62,"Tokens customiz\xE1veis"),t(),n(63,"p"),e(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(65,"blockquote")(66,"p"),e(67,"Para maiores informa\xE7\xF5es, acesse o guia "),n(68,"a",8),e(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(70,"."),t()(),n(71,"table")(72,"thead")(73,"tr")(74,"th"),e(75,"Propriedade"),t(),n(76,"th"),e(77,"Descri\xE7\xE3o"),t(),n(78,"th"),e(79,"Valor Padr\xE3o"),t()()(),n(80,"tbody")(81,"tr")(82,"td")(83,"strong"),e(84,"Default Values"),t()(),i(85,"td")(86,"td"),t(),n(87,"tr")(88,"td")(89,"code"),e(90,"--font-family"),t()(),n(91,"td"),e(92,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(93,"td")(94,"code"),e(95,"var(--font-family-theme)"),t()()(),n(96,"tr")(97,"td")(98,"code"),e(99,"--font-size"),t()(),n(100,"td"),e(101,"Tamanho da fonte"),t(),n(102,"td")(103,"code"),e(104,"var(--font-size-default)"),t()()(),n(105,"tr")(106,"td")(107,"code"),e(108,"--text-color-placeholder"),t()(),n(109,"td"),e(110,"Cor do texto no placeholder"),t(),n(111,"td")(112,"code"),e(113,"var(--color-neutral-light-30)"),t()()(),n(114,"tr")(115,"td")(116,"code"),e(117,"--color"),t()(),n(118,"td"),e(119,"Cor principal do lookup"),t(),n(120,"td")(121,"code"),e(122,"var(--color-neutral-dark-70)"),t()()(),n(123,"tr")(124,"td")(125,"code"),e(126,"--border-radius"),t()(),n(127,"td"),e(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),n(129,"td")(130,"code"),e(131,"var(--border-radius-md)"),t()()(),n(132,"tr")(133,"td")(134,"code"),e(135,"--background"),t()(),n(136,"td"),e(137,"Cor de background"),t(),n(138,"td")(139,"code"),e(140,"var(--color-neutral-light-05)"),t()()(),n(141,"tr")(142,"td")(143,"code"),e(144,"--text-color"),t()(),n(145,"td"),e(146,"Cor do texto"),t(),n(147,"td")(148,"code"),e(149,"var(--color-neutral-dark-90)"),t()()(),n(150,"tr")(151,"td")(152,"code"),e(153,"--color-clear"),t()(),n(154,"td"),e(155,"Cor principal do icone clear"),t(),n(156,"td")(157,"code"),e(158,"var(--color-action-default)"),t()()(),n(159,"tr")(160,"td")(161,"strong"),e(162,"Icon"),t()(),i(163,"td")(164,"td"),t(),n(165,"tr")(166,"td")(167,"code"),e(168,"--color-icon"),t()(),n(169,"td"),e(170,"Cor principal do icone pesquisar"),t(),n(171,"td")(172,"code"),e(173,"var(--color-action-default)"),t()()(),n(174,"tr")(175,"td")(176,"strong"),e(177,"Hover"),t()(),i(178,"td")(179,"td"),t(),n(180,"tr")(181,"td")(182,"code"),e(183,"--color-hover"),t()(),n(184,"td"),e(185,"Cor principal no estado hover"),t(),n(186,"td")(187,"code"),e(188,"var(--color-hover)"),t()()(),n(189,"tr")(190,"td")(191,"code"),e(192,"--background-hover"),t()(),n(193,"td"),e(194,"Cor de background no estado hover"),t(),n(195,"td")(196,"code"),e(197,"var(--color-brand-01-lightest)"),t()()(),n(198,"tr")(199,"td")(200,"strong"),e(201,"Focused"),t()(),i(202,"td")(203,"td"),t(),n(204,"tr")(205,"td")(206,"code"),e(207,"--color-focused"),t()(),n(208,"td"),e(209,"Cor principal no estado de focus"),t(),n(210,"td")(211,"code"),e(212,"var(--color-action-default)"),t()()(),n(213,"tr")(214,"td")(215,"code"),e(216,"--outline-color-focused"),t()(),n(217,"td"),e(218,"Cor do outline do estado de focus"),t(),n(219,"td")(220,"code"),e(221,"var(--color-action-focus)"),t()()(),n(222,"tr")(223,"td")(224,"strong"),e(225,"Disabled"),t()(),i(226,"td")(227,"td"),t(),n(228,"tr")(229,"td")(230,"code"),e(231,"--color-disabled"),t()(),n(232,"td"),e(233,"Cor principal no estado disabled"),t(),n(234,"td")(235,"code"),e(236,"var(--color-action-disabled)"),t()()(),n(237,"tr")(238,"td")(239,"code"),e(240,"--background-disabled"),t()(),n(241,"td"),e(242,"Cor de background no estado disabled"),t(),n(243,"td")(244,"code"),e(245,"var(--color-neutral-light-20)"),t()()(),n(246,"tr")(247,"td")(248,"code"),e(249,"--text-color-disabled"),t()(),n(250,"td"),e(251,"Cor do texto quando campo est\xE1 desabilitado"),t(),n(252,"td")(253,"code"),e(254,"var(--color-action-disabled)"),t()()(),n(255,"tr")(256,"td")(257,"strong"),e(258,"Error"),t()(),i(259,"td")(260,"td"),t(),n(261,"tr")(262,"td")(263,"code"),e(264,"--color-error"),t()(),n(265,"td"),e(266,"Cor de background no estado de requerido"),t(),n(267,"td")(268,"code"),e(269,"var(--color-feedback-negative-base)"),t()()()()()(),n(270,"div",9)(271,"h4",10),e(272,"Seletor"),t(),n(273,"pre",11),e(274,`<po-lookup
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-advanced-filters="Array<PoLookupAdvancedFilter>"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-change)="EventEmitter"
    (p-change-visible-columns)="EventEmitter"
    p-clean="boolean"
    (p-restore-column-manager)="EventEmitter"
    p-columns="Array<PoLookupColumn>"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-format="((value) => string) | Array<string>"
    p-field-label="string"
    p-field-value="string"
    p-filter-params="any"
    p-filter-service="string | PoLookupFilter"
    p-help="string"
    p-hide-columns-manager="boolean"
    p-infinite-scroll="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoLookupLiterals"
    p-multiple="boolean"
    name="string"
    p-no-autocomplete="boolean"
    (p-error)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    (p-selected)="EventEmitter"
    p-show-required="boolean"
    p-size="string"
    p-spacing="string"
    p-text-wrap="boolean"
    p-virtual-scroll="boolean" >
</po-lookup>
`),t()(),n(275,"h4",12),e(276,"Propriedades"),t(),n(277,"table",13)(278,"tr",14)(279,"th",15),e(280,"Nome"),t(),n(281,"th",15),e(282,"Tipo"),t(),n(283,"th",15),e(284,"Padr\xE3o"),t(),n(285,"th",15),e(286,"Descri\xE7\xE3o"),t()(),n(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),e(291," (p-additional-help)"),i(292,"br"),t()(),n(293,"div",20),e(294,"Deprecated"),t()(),n(295,"td",21)(296,"code",22),e(297,"EventEmitter"),t()(),n(298,"td",23),e(299,"-"),t(),n(300,"td",24)(301,"em")(302,"strong"),e(303,"(opcional)"),t()(),n(304,"p"),e(305,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(306,"blockquote")(307,"p"),e(308,"Essa propriedade est\xE1 "),n(309,"strong"),e(310,"depreciada"),t(),e(311," e ser\xE1 removida na vers\xE3o "),n(312,"code"),e(313,"23.x.x"),t(),e(314,". Recomendamos utilizar a propriedade "),n(315,"code"),e(316,"p-helper"),t(),e(317," que oferece mais recursos e flexibilidade."),t()()()(),n(318,"tr",16)(319,"td",17)(320,"div",25)(321,"span",26),e(322," p-additional-help-tooltip"),i(323,"br"),t()(),n(324,"div",20),e(325,"Deprecated"),t()(),n(326,"td",21)(327,"code",27),e(328,"string"),t()(),n(329,"td",23),e(330,"-"),t(),n(331,"td",24)(332,"em")(333,"strong"),e(334,"(opcional)"),t()(),n(335,"p"),e(336,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(337,"code"),e(338,"po-helper"),t(),e(339,`.
`),n(340,"strong"),e(341,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(342,"blockquote")(343,"p"),e(344,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(345,"blockquote")(346,"p"),e(347,"Essa propriedade est\xE1 "),n(348,"strong"),e(349,"depreciada"),t(),e(350," e ser\xE1 removida na vers\xE3o "),n(351,"code"),e(352,"23.x.x"),t(),e(353,". Recomendamos utilizar a propriedade "),n(354,"code"),e(355,"p-helper"),t(),e(356," que oferece mais recursos e flexibilidade."),t()()()(),n(357,"tr",16)(358,"td",17)(359,"div",25)(360,"span",26),e(361," p-advanced-filters"),i(362,"br"),t()()(),n(363,"td",21)(364,"code",28),e(365,"Array<PoLookupAdvancedFilter>"),t()(),n(366,"td",23),e(367,"-"),t(),n(368,"td",24)(369,"em")(370,"strong"),e(371,"(opcional)"),t()(),n(372,"p"),e(373,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),n(374,"blockquote")(375,"p"),e(376,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),n(377,"p"),e(378,"Exemplo de URL com busca avan\xE7ada:"),t(),n(379,"pre")(380,"code"),e(381,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),t()(),n(382,"p"),e(383,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),t(),n(384,"pre")(385,"code"),e(386,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),t()()()(),n(387,"tr",16)(388,"td",17)(389,"div",25)(390,"span",26),e(391," p-append-in-body"),i(392,"br"),t()()(),n(393,"td",21)(394,"code",29),e(395,"boolean"),t()(),n(396,"td",23)(397,"p")(398,"code"),e(399,"false"),t()()(),n(400,"td",24)(401,"em")(402,"strong"),e(403,"(opcional)"),t()(),n(404,"p"),e(405,"Define que o popover ("),n(406,"code"),e(407,"p-helper"),t(),e(408," e/ou "),n(409,"code"),e(410,"p-error-limit"),t(),e(411,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(412,"blockquote")(413,"p"),e(414,"Quando utilizado com "),n(415,"code"),e(416,"p-helper"),t(),e(417,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(418,"tr",16)(419,"td",17)(420,"div",25)(421,"span",26),e(422," p-auto-focus"),i(423,"br"),t()()(),n(424,"td",21)(425,"code",29),e(426,"boolean"),t()(),n(427,"td",23)(428,"p")(429,"code"),e(430,"false"),t()()(),n(431,"td",24)(432,"em")(433,"strong"),e(434,"(opcional)"),t()(),n(435,"p"),e(436,"Aplica foco no elemento ao ser iniciado."),t(),n(437,"blockquote")(438,"p"),e(439,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(440,"tr",16)(441,"td",17)(442,"div",25)(443,"span",26),e(444," p-auto-height"),i(445,"br"),t()()(),n(446,"td",21)(447,"code",29),e(448,"boolean"),t()(),n(449,"td",23)(450,"p")(451,"code"),e(452,"false"),t()()(),n(453,"td",24)(454,"em")(455,"strong"),e(456,"(opcional)"),t()(),n(457,"p"),e(458,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),t()()(),n(459,"tr",16)(460,"td",17)(461,"div",18)(462,"span",19),e(463," (p-change)"),i(464,"br"),t()()(),n(465,"td",21)(466,"code",22),e(467,"EventEmitter"),t()(),n(468,"td",23),e(469,"-"),t(),n(470,"td",24)(471,"em")(472,"strong"),e(473,"(opcional)"),t()(),n(474,"p"),e(475,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),t()()(),n(476,"tr",16)(477,"td",17)(478,"div",18)(479,"span",19),e(480," (p-change-visible-columns)"),i(481,"br"),t()()(),n(482,"td",21)(483,"code",22),e(484,"EventEmitter"),t()(),n(485,"td",23),e(486,"-"),t(),n(487,"td",24)(488,"em")(489,"strong"),e(490,"(opcional)"),t()(),n(491,"p"),e(492,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),n(493,"p"),e(494,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),n(495,"tr",16)(496,"td",17)(497,"div",25)(498,"span",26),e(499," p-clean"),i(500,"br"),t()()(),n(501,"td",21)(502,"code",29),e(503,"boolean"),t()(),n(504,"td",23),e(505,"-"),t(),n(506,"td",24)(507,"p"),e(508,"Exibe um \xEDcone que permite limpar o campo."),t()()(),n(509,"tr",16)(510,"td",17)(511,"div",18)(512,"span",19),e(513," (p-restore-column-manager)"),i(514,"br"),t()()(),n(515,"td",21)(516,"code",22),e(517,"EventEmitter"),t()(),n(518,"td",23),e(519,"-"),t(),n(520,"td",24)(521,"em")(522,"strong"),e(523,"(opcional)"),t()(),n(524,"p"),e(525,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),n(526,"p"),e(527,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),n(528,"tr",16)(529,"td",17)(530,"div",25)(531,"span",26),e(532," p-columns"),i(533,"br"),t()()(),n(534,"td",21)(535,"code",30),e(536,"Array<PoLookupColumn>"),t()(),n(537,"td",23),e(538,"-"),t(),n(539,"td",24)(540,"em")(541,"strong"),e(542,"(opcional)"),t()(),n(543,"p"),e(544,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),t()()(),n(545,"tr",16)(546,"td",17)(547,"div",25)(548,"span",26),e(549," p-disabled"),i(550,"br"),t()()(),n(551,"td",21)(552,"code",29),e(553,"boolean"),t()(),n(554,"td",23)(555,"p"),e(556,"false"),t()(),n(557,"td",24)(558,"em")(559,"strong"),e(560,"(opcional)"),t()(),n(561,"p"),e(562,"Indica que o campo ser\xE1 desabilitado."),t()()(),n(563,"tr",16)(564,"td",17)(565,"div",25)(566,"span",26),e(567," p-error-limit"),i(568,"br"),t()()(),n(569,"td",21)(570,"code",29),e(571,"boolean"),t()(),n(572,"td",23)(573,"p")(574,"code"),e(575,"false"),t()()(),n(576,"td",24)(577,"em")(578,"strong"),e(579,"(opcional)"),t()(),n(580,"p"),e(581,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(582,"blockquote")(583,"p"),e(584,"Caso essa propriedade seja definida como "),n(585,"code"),e(586,"true"),t(),e(587,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(588,"tr",16)(589,"td",17)(590,"div",25)(591,"span",26),e(592," p-field-error-message"),i(593,"br"),t()()(),n(594,"td",21)(595,"code",27),e(596,"string"),t()(),n(597,"td",23),e(598,"-"),t(),n(599,"td",24)(600,"em")(601,"strong"),e(602,"(opcional)"),t()(),n(603,"p"),e(604,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),n(605,"blockquote")(606,"p"),e(607,"Necess\xE1rio que a propriedade "),n(608,"code"),e(609,"p-required"),t(),e(610," esteja habilitada."),t()()()(),n(611,"tr",16)(612,"td",17)(613,"div",25)(614,"span",26),e(615," p-field-format"),i(616,"br"),t()()(),n(617,"td",21)(618,"code",31),e(619,"((value) => string) "),t(),n(620,"code",32),e(621," Array<string>"),t()(),n(622,"td",23),e(623,"-"),t(),n(624,"td",24)(625,"em")(626,"strong"),e(627,"(opcional)"),t()(),n(628,"p"),e(629,"Formato de exibi\xE7\xE3o do campo."),t(),n(630,"p"),e(631,"Recebe uma fun\xE7\xE3o que deve retornar uma "),n(632,"em"),e(633,"string"),t(),e(634," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),n(635,"pre")(636,"code"),e(637,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),t()(),n(638,"blockquote")(639,"p"),e(640,"Esta propriedade sobrep\xF5e o valor da propriedade "),n(641,"code"),e(642,"p-field-label"),t(),e(643," na descri\xE7\xE3o do campo."),t()(),n(644,"p"),e(645,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),t(),n(646,"pre")(647,"code"),e(648,`<po-lookup
 ...
 [p-field-format]="['id','nickname']"
 ...
>

Objeto retornado:
  {
     id:123,
     name: 'Kakaroto',
     nickname: 'Goku',
  }
Apresenta\xE7\xE3o no campo: 123 - Goku
`),t()(),n(649,"blockquote")(650,"p"),e(651,"Ser\xE1 utilizado "),n(652,"code"),e(653,"-"),t(),e(654," como separador."),t()()()(),n(655,"tr",16)(656,"td",17)(657,"div",25)(658,"span",26),e(659," p-field-label"),i(660,"br"),t()()(),n(661,"td",21)(662,"code",27),e(663,"string"),t()(),n(664,"td",23),e(665,"-"),t(),n(666,"td",24)(667,"p"),e(668,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),t()()(),n(669,"tr",16)(670,"td",17)(671,"div",25)(672,"span",26),e(673," p-field-value"),i(674,"br"),t()()(),n(675,"td",21)(676,"code",27),e(677,"string"),t()(),n(678,"td",23),e(679,"-"),t(),n(680,"td",24)(681,"p"),e(682,"Indica a coluna que ser\xE1 utilizada como valor do campo."),t(),n(683,"blockquote")(684,"p"),e(685,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),n(686,"tr",16)(687,"td",17)(688,"div",25)(689,"span",26),e(690," p-filter-params"),i(691,"br"),t()()(),n(692,"td",21)(693,"code",33),e(694,"any"),t()(),n(695,"td",23),e(696,"-"),t(),n(697,"td",24)(698,"em")(699,"strong"),e(700,"(opcional)"),t()(),n(701,"p"),e(702,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),n(703,"code"),e(704,"PoLookupFilter"),t(),e(705,"."),t()()(),n(706,"tr",16)(707,"td",17)(708,"div",25)(709,"span",26),e(710," p-filter-service"),i(711,"br"),t()()(),n(712,"td",21)(713,"code",27),e(714,"string "),t(),n(715,"code",34),e(716," PoLookupFilter"),t()(),n(717,"td",23),e(718,"-"),t(),n(719,"td",24)(720,"p"),e(721,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),n(722,"code"),e(723,"PoLookupFilter"),t(),e(724," ou uma URL."),t(),n(725,"p"),e(726,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),t(),n(727,"pre")(728,"code"),e(729,`url + ?page=1&pageSize=20&filter=Peter
`),t()(),n(730,"p"),e(731,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),n(732,"code"),e(733,"order"),t(),e(734,", por exemplo:"),t(),n(735,"ul")(736,"li")(737,"p"),e(738,"Coluna decrescente:"),t(),n(739,"pre")(740,"code"),e(741,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),t()()(),n(742,"li")(743,"p"),e(744,"Coluna ascendente:"),t(),n(745,"pre")(746,"code"),e(747,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),t()()()(),n(748,"p"),e(749,"Se for definido a propriedade "),n(750,"code"),e(751,"p-filter-params"),t(),e(752,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),n(753,"code"),e(754,"{ age: 23 }"),t(),e(755," a URL ficaria:"),t(),n(756,"pre")(757,"code"),e(758,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),t()(),n(759,"p"),e(760,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),t(),n(761,"pre")(762,"code"),e(763,`model = 1234;

GET url/1234
`),t()(),n(764,"p"),e(765,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),t(),n(766,"pre")(767,"code"),e(768,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),t()(),n(769,"blockquote")(770,"p"),e(771,"Esta URL deve retornar e receber os dados no padr\xE3o de "),n(772,"a",7),e(773,"API do PO UI"),t(),e(774,` e utiliza os valores
definidos nas propriedades `),n(775,"code"),e(776,"p-field-label"),t(),e(777," e "),n(778,"code"),e(779,"p-field-value"),t(),e(780," para a constru\xE7\xE3o do "),n(781,"code"),e(782,"po-lookup"),t(),e(783,"."),t()(),n(784,"p"),e(785,"Caso o usu\xE1rio digite um valor e pressione a tecla "),n(786,"em"),e(787,"TAB"),t(),e(788,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),n(789,"a",35),e(790,"encodeURIComponent"),t(),e(791,`
e concatenado na URL da seguinte forma:`),t(),n(792,"pre")(793,"code"),e(794,`url/valor%20que%20se%20deseja%20filtrar
`),t()(),n(795,"blockquote")(796,"p"),e(797,"Quando informado um servi\xE7o que implemente a interface "),n(798,"code"),e(799,"PoLookupFilter"),t(),e(800," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),t()()()(),n(801,"tr",16)(802,"td",17)(803,"div",25)(804,"span",26),e(805," p-help"),i(806,"br"),t()()(),n(807,"td",21)(808,"code",27),e(809,"string"),t()(),n(810,"td",23),e(811,"-"),t(),n(812,"td",24)(813,"em")(814,"strong"),e(815,"(opcional)"),t()(),n(816,"p"),e(817,"Texto de apoio do campo."),t()()(),n(818,"tr",16)(819,"td",17)(820,"div",25)(821,"span",26),e(822," p-hide-columns-manager"),i(823,"br"),t()()(),n(824,"td",21)(825,"code",29),e(826,"boolean"),t()(),n(827,"td",23)(828,"p")(829,"code"),e(830,"false"),t()()(),n(831,"td",24)(832,"em")(833,"strong"),e(834,"(opcional)"),t()(),n(835,"p"),e(836,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),t()()(),n(837,"tr",16)(838,"td",17)(839,"div",25)(840,"span",26),e(841," p-infinite-scroll"),i(842,"br"),t()()(),n(843,"td",21)(844,"code",29),e(845,"boolean"),t()(),n(846,"td",23)(847,"p")(848,"code"),e(849,"false"),t()()(),n(850,"td",24)(851,"em")(852,"strong"),e(853,"(opcional)"),t()(),n(854,"p"),e(855,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),t()()(),n(856,"tr",16)(857,"td",17)(858,"div",18)(859,"span",19),e(860," (p-keydown)"),i(861,"br"),t()()(),n(862,"td",21)(863,"code",22),e(864,"EventEmitter"),t()(),n(865,"td",23),e(866,"-"),t(),n(867,"td",24)(868,"em")(869,"strong"),e(870,"(opcional)"),t()(),n(871,"p"),e(872,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(873,"code"),e(874,"KeyboardEvent"),t(),e(875," com informa\xE7\xF5es sobre a tecla."),t()()(),n(876,"tr",16)(877,"td",17)(878,"div",25)(879,"span",26),e(880," p-label"),i(881,"br"),t()()(),n(882,"td",21)(883,"code",27),e(884,"string"),t()(),n(885,"td",23),e(886,"-"),t(),n(887,"td",24)(888,"em")(889,"strong"),e(890,"(opcional)"),t()(),n(891,"p"),e(892,"Label do campo."),t(),n(893,"blockquote")(894,"p"),e(895,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),n(896,"code"),e(897,"modalTitle"),t(),e(898," na propriedade "),n(899,"code"),e(900,"p-literals"),t(),e(901,"."),t()()()(),n(902,"tr",16)(903,"td",17)(904,"div",25)(905,"span",26),e(906," p-label-text-wrap"),i(907,"br"),t()()(),n(908,"td",21)(909,"code",29),e(910,"boolean"),t()(),n(911,"td",23)(912,"p")(913,"code"),e(914,"false"),t()()(),n(915,"td",24)(916,"em")(917,"strong"),e(918,"(opcional)"),t()(),n(919,"p"),e(920,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(921,"code"),e(922,"p-label"),t(),e(923,". Quando "),n(924,"code"),e(925,"p-label-text-wrap"),t(),e(926,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(927,"tr",16)(928,"td",17)(929,"div",25)(930,"span",26),e(931," p-literals"),i(932,"br"),t()()(),n(933,"td",21)(934,"code",36),e(935,"PoLookupLiterals"),t()(),n(936,"td",23),e(937,"-"),t(),n(938,"td",24)(939,"p"),e(940,"Objeto com as literais usadas no "),n(941,"code"),e(942,"po-lookup"),t(),e(943,"."),t(),n(944,"p"),e(945,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),n(946,"pre")(947,"code"),e(948,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select',
  modalSecondaryActionLabel: 'Cancel',
  modalPlaceholder: 'Search Value',
  modalTableNoColumns: 'No columns',
  modalTableNoData: 'No data',
  modalTableLoadingData: 'Loading data',
  modalTableLoadMoreData: 'Load more',
  modalTitle: 'Select a user',
  modalAdvancedSearch: 'Advanced search',
  modalAdvancedSearchTitle: 'Advanced search',
  modalAdvancedSearchPrimaryActionLabel: 'Filter',
  modalAdvancedSearchSecondaryActionLabel: 'Return',
  modalDisclaimerGroupTitle: 'Presenting results filtered by:'
};
`),t()(),n(949,"p"),e(950,"Ou passando apenas as literais que deseja customizar:"),t(),n(951,"pre")(952,"code"),e(953,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),t()(),n(954,"p"),e(955,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),n(956,"pre")(957,"code"),e(958,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),t()(),n(959,"blockquote")(960,"p"),e(961,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),n(962,"a",37)(963,"code"),e(964,"PoI18nService"),t()(),e(965," ou do browser."),t()()()(),n(966,"tr",16)(967,"td",17)(968,"div",25)(969,"span",26),e(970," p-multiple"),i(971,"br"),t()()(),n(972,"td",21)(973,"code",29),e(974,"boolean"),t()(),n(975,"td",23)(976,"p")(977,"code"),e(978,"false"),t()()(),n(979,"td",24)(980,"em")(981,"strong"),e(982,"(opcional)"),t()(),n(983,"p"),e(984,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),n(985,"blockquote")(986,"p"),e(987,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),n(988,"code"),e(989,"[ 12345, 67890 ]"),t()()()()(),n(990,"tr",16)(991,"td",17)(992,"div",25)(993,"span",26),e(994," name"),i(995,"br"),t()()(),n(996,"td",21)(997,"code",27),e(998,"string"),t()(),n(999,"td",23),e(1e3,"-"),t(),n(1001,"td",24)(1002,"p"),e(1003,"Nome e Id do componente."),t()()(),n(1004,"tr",16)(1005,"td",17)(1006,"div",25)(1007,"span",26),e(1008," p-no-autocomplete"),i(1009,"br"),t()()(),n(1010,"td",21)(1011,"code",29),e(1012,"boolean"),t()(),n(1013,"td",23)(1014,"p")(1015,"code"),e(1016,"false"),t()()(),n(1017,"td",24)(1018,"em")(1019,"strong"),e(1020,"(opcional)"),t()(),n(1021,"p"),e(1022,"Define a propriedade nativa "),n(1023,"code"),e(1024,"autocomplete"),t(),e(1025," do campo como "),n(1026,"code"),e(1027,"off"),t(),e(1028,"."),t()()(),n(1029,"tr",16)(1030,"td",17)(1031,"div",18)(1032,"span",19),e(1033," (p-error)"),i(1034,"br"),t()()(),n(1035,"td",21)(1036,"code",22),e(1037,"EventEmitter"),t()(),n(1038,"td",23),e(1039,"-"),t(),n(1040,"td",24)(1041,"p"),e(1042,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),n(1043,"tr",16)(1044,"td",17)(1045,"div",25)(1046,"span",26),e(1047," p-optional"),i(1048,"br"),t()()(),n(1049,"td",21)(1050,"code",29),e(1051,"boolean"),t()(),n(1052,"td",23)(1053,"p")(1054,"code"),e(1055,"false"),t()()(),n(1056,"td",24)(1057,"em")(1058,"strong"),e(1059,"(opcional)"),t()(),n(1060,"p"),e(1061,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(1062,"blockquote")(1063,"p"),e(1064,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1065,"ul")(1066,"li"),e(1067,"O campo conter "),n(1068,"code"),e(1069,"p-required"),t(),e(1070,";"),t(),n(1071,"li"),e(1072,"N\xE3o possuir "),n(1073,"code"),e(1074,"p-help"),t(),e(1075," e/ou "),n(1076,"code"),e(1077,"p-label"),t(),e(1078,"."),t()()()(),n(1079,"tr",16)(1080,"td",17)(1081,"div",25)(1082,"span",26),e(1083," p-placeholder"),i(1084,"br"),t()()(),n(1085,"td",21)(1086,"code",27),e(1087,"string"),t()(),n(1088,"td",23),e(1089,"-"),t(),n(1090,"td",24)(1091,"p"),e(1092,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(1093,"tr",16)(1094,"td",17)(1095,"div",25)(1096,"span",26),e(1097," p-helper"),i(1098,"br"),t()()(),n(1099,"td",21)(1100,"code",38),e(1101,"PoHelperOptions "),t(),n(1102,"code",27),e(1103," string"),t()(),n(1104,"td",23),e(1105,"-"),t(),n(1106,"td",24)(1107,"em")(1108,"strong"),e(1109,"(opcional)"),t()(),n(1110,"p"),e(1111,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(1112,"code"),e(1113,"p-label"),t(),e(1114," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(1115,"code"),e(1116,"p-label"),t(),e(1117,"."),t(),n(1118,"blockquote")(1119,"p"),e(1120,"Para mais informa\xE7\xF5es acesse: "),n(1121,"a",39),e(1122,"https://po-ui.io/documentation/po-helper"),t(),e(1123,"."),t()(),n(1124,"blockquote")(1125,"p"),e(1126,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(1127,"code"),e(1128,"p-additional-help-tooltip"),t(),e(1129," e "),n(1130,"code"),e(1131,"p-additional-help"),t(),e(1132,") ser\xE1 ignorado."),t()()()(),n(1133,"tr",16)(1134,"td",17)(1135,"div",25)(1136,"span",26),e(1137," p-required"),i(1138,"br"),t()()(),n(1139,"td",21)(1140,"code",29),e(1141,"boolean"),t()(),n(1142,"td",23)(1143,"p")(1144,"code"),e(1145,"false"),t()()(),n(1146,"td",24)(1147,"em")(1148,"strong"),e(1149,"(opcional)"),t()(),n(1150,"p"),e(1151,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1152,"blockquote")(1153,"p"),e(1154,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1155,"code"),e(1156,"(p-disabled)"),t(),e(1157,"."),t()()()(),n(1158,"tr",16)(1159,"td",17)(1160,"div",18)(1161,"span",19),e(1162," (p-selected)"),i(1163,"br"),t()()(),n(1164,"td",21)(1165,"code",22),e(1166,"EventEmitter"),t()(),n(1167,"td",23),e(1168,"-"),t(),n(1169,"td",24)(1170,"em")(1171,"strong"),e(1172,"(opcional)"),t()(),n(1173,"p"),e(1174,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),t()()(),n(1175,"tr",16)(1176,"td",17)(1177,"div",25)(1178,"span",26),e(1179," p-show-required"),i(1180,"br"),t()()(),n(1181,"td",21)(1182,"code",29),e(1183,"boolean"),t()(),n(1184,"td",23),e(1185,"-"),t(),n(1186,"td",24)(1187,"p"),e(1188,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),t(),n(1189,"blockquote")(1190,"p"),e(1191,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1192,"ul")(1193,"li"),e(1194,"N\xE3o possuir "),n(1195,"code"),e(1196,"p-help"),t(),e(1197," e/ou "),n(1198,"code"),e(1199,"p-label"),t(),e(1200,"."),t()()()(),n(1201,"tr",16)(1202,"td",17)(1203,"div",25)(1204,"span",26),e(1205," p-size"),i(1206,"br"),t()()(),n(1207,"td",21)(1208,"code",27),e(1209,"string"),t()(),n(1210,"td",23)(1211,"p")(1212,"code"),e(1213,"medium"),t()()(),n(1214,"td",24)(1215,"em")(1216,"strong"),e(1217,"(opcional)"),t()(),n(1218,"p"),e(1219,"Define o tamanho do componente:"),t(),n(1220,"ul")(1221,"li")(1222,"code"),e(1223,"small"),t(),e(1224,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1225,"li")(1226,"code"),e(1227,"medium"),t(),e(1228,": altura do input como 44px."),t()(),n(1229,"blockquote")(1230,"p"),e(1231,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1232,"code"),e(1233,"medium"),t(),e(1234,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1235,"a",40),e(1236,"po-theme"),t(),e(1237,"."),t()()()(),n(1238,"tr",16)(1239,"td",17)(1240,"div",25)(1241,"span",26),e(1242," p-spacing"),i(1243,"br"),t()()(),n(1244,"td",21)(1245,"code",27),e(1246,"string"),t()(),n(1247,"td",23)(1248,"p")(1249,"code"),e(1250,"medium"),t()()(),n(1251,"td",24)(1252,"em")(1253,"strong"),e(1254,"(opcional)"),t()(),n(1255,"p"),e(1256,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),n(1257,"strong"),e(1258,"PoTableColumnSpacing"),t(),e(1259,"."),t(),n(1260,"blockquote")(1261,"p"),e(1262,"Em n\xEDvel de acessibilidade "),n(1263,"strong"),e(1264,"AA"),t(),e(1265,", caso o valor de "),n(1266,"code"),e(1267,"p-spacing"),t(),e(1268," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),n(1269,"code"),e(1270,"extraSmall"),t(),e(1271,`
nos seguintes cen\xE1rios:`),t(),n(1272,"ul")(1273,"li"),e(1274,"Quando o valor de "),n(1275,"code"),e(1276,"p-size"),t(),e(1277," for "),n(1278,"code"),e(1279,"small"),t(),e(1280,";"),t(),n(1281,"li"),e(1282,"Quando o valor padr\xE3o dos componentes for configurado como "),n(1283,"code"),e(1284,"small"),t(),e(1285,` no
`),n(1286,"a",40),e(1287,"servi\xE7o de tema"),t(),e(1288,"."),t()()()()(),n(1289,"tr",16)(1290,"td",17)(1291,"div",25)(1292,"span",26),e(1293," p-text-wrap"),i(1294,"br"),t()()(),n(1295,"td",21)(1296,"code",29),e(1297,"boolean"),t()(),n(1298,"td",23)(1299,"p")(1300,"code"),e(1301,"false"),t()()(),n(1302,"td",24)(1303,"em")(1304,"strong"),e(1305,"(opcional)"),t()(),n(1306,"p"),e(1307,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t(),n(1308,"p"),e(1309,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),t(),n(1310,"blockquote")(1311,"p"),e(1312,"Incompat\xEDvel com "),n(1313,"code"),e(1314,"virtual-scroll"),t(),e(1315,", que requer altura fixa nas linhas."),t()()()(),n(1316,"tr",16)(1317,"td",17)(1318,"div",25)(1319,"span",26),e(1320," p-virtual-scroll"),i(1321,"br"),t()()(),n(1322,"td",21)(1323,"code",29),e(1324,"boolean"),t()(),n(1325,"td",23)(1326,"p")(1327,"code"),e(1328,"true"),t()()(),n(1329,"td",24)(1330,"em")(1331,"strong"),e(1332,"(opcional)"),t()(),n(1333,"p"),e(1334,"Habilita o "),n(1335,"code"),e(1336,"virtual-scroll"),t(),e(1337,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),n(1338,"code"),e(1339,"virtual-scroll"),t(),e(1340," ser\xE1 ativado automaticamente."),t(),n(1341,"blockquote")(1342,"p"),e(1343,"Incompat\xEDvel com "),n(1344,"code"),e(1345,"p-text-wrap"),t(),e(1346," e "),n(1347,"code"),e(1348,"master-detail"),t(),e(1349,", pois o "),n(1350,"code"),e(1351,"virtual-scroll"),t(),e(1352," exige altura fixa nas linhas."),t()()()()(),n(1353,"h3",12),e(1354,"M\xE9todos"),t(),n(1355,"table",41)(1356,"tr",16)(1357,"th",42)(1358,"div",25)(1359,"h4")(1360,"span",26),e(1361," focus "),t()()()()(),n(1362,"tr",24)(1363,"td",24)(1364,"p"),e(1365,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1366,"p"),e(1367,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1368,"pre")(1369,"code"),e(1370,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),t()()()()(),i(1371,"br"),n(1372,"table",41)(1373,"tr",16)(1374,"th",42)(1375,"div",25)(1376,"h4")(1377,"span",26),e(1378," showAdditionalHelp "),t()()()()(),n(1379,"tr",24)(1380,"td",24)(1381,"p"),e(1382,"M\xE9todo que exibe "),n(1383,"code"),e(1384,"p-helper"),t(),e(1385," ou executa a a\xE7\xE3o definida em "),n(1386,"code"),e(1387,"p-helper{eventOnClick}"),t(),e(1388," ou em "),n(1389,"code"),e(1390,"p-additionalHelp"),t(),e(1391,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1392,"code"),e(1393,"p-keydown"),t(),e(1394,"."),t(),n(1395,"blockquote")(1396,"p"),e(1397,"Exibe ou oculta o conte\xFAdo do componente "),n(1398,"code"),e(1399,"po-helper"),t(),e(1400," quando o componente estiver com foco."),t()(),n(1401,"pre")(1402,"code"),e(1403,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),t()(),n(1404,"pre")(1405,"code"),e(1406,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),i(1407,"br"),n(1408,"h3"),e(1409,"Interfaces"),t(),n(1410,"h4",43)(1411,"code",5),e(1412,"PoLookupAdvancedFilter"),t()(),n(1413,"div",2)(1414,"p"),e(1415," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),t()(),n(1416,"h4",12),e(1417,"Propriedades"),t(),n(1418,"table",13)(1419,"tr",14)(1420,"th",15),e(1421,"Nome"),t(),n(1422,"th",15),e(1423,"Tipo"),t(),n(1424,"th",15),e(1425,"Descri\xE7\xE3o"),t()(),n(1426,"tr",16)(1427,"td",17)(1428,"div",25)(1429,"span",26),e(1430," additionalHelp"),i(1431,"br"),t()()(),n(1432,"td",21)(1433,"code",44),e(1434,"Function"),t()(),n(1435,"td",24)(1436,"em")(1437,"strong"),e(1438,"(opcional)"),t()(),n(1439,"p"),e(1440,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(1441,"blockquote")(1442,"p"),e(1443,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),n(1444,"tr",16)(1445,"td",17)(1446,"div",25)(1447,"span",26),e(1448," additionalHelpTooltip"),i(1449,"br"),t()()(),n(1450,"td",21)(1451,"code",27),e(1452,"string"),t()(),n(1453,"td",24)(1454,"em")(1455,"strong"),e(1456,"(opcional)"),t()(),n(1457,"p"),e(1458,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(1459,"code"),e(1460,"po-helper"),t(),e(1461,`.
`),n(1462,"strong"),e(1463,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(1464,"blockquote")(1465,"p"),e(1466,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),n(1467,"tr",16)(1468,"td",17)(1469,"div",25)(1470,"span",26),e(1471," advancedFilters"),i(1472,"br"),t()()(),n(1473,"td",21)(1474,"code",28),e(1475,"Array<PoLookupAdvancedFilter>"),t()(),n(1476,"td",24)(1477,"em")(1478,"strong"),e(1479,"(opcional)"),t()(),n(1480,"p"),e(1481,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),n(1482,"blockquote")(1483,"p"),e(1484,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),n(1485,"p"),e(1486,"Exemplo de URL com busca avan\xE7ada:"),t(),n(1487,"p")(1488,"code"),e(1489,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),n(1490,"p"),e(1491,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),n(1492,"p")(1493,"code"),e(1494,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),n(1495,"tr",16)(1496,"td",17)(1497,"div",25)(1498,"span",26),e(1499," appendBox"),i(1500,"br"),t()()(),n(1501,"td",21)(1502,"code",29),e(1503,"boolean"),t()(),n(1504,"td",24)(1505,"em")(1506,"strong"),e(1507,"(opcional)"),t()(),n(1508,"p"),e(1509,"Define que o "),n(1510,"code"),e(1511,"listbox"),t(),e(1512," e/ou popover ("),n(1513,"code"),e(1514,"p-helper"),t(),e(1515," e/ou "),n(1516,"code"),e(1517,"p-error-limit"),t(),e(1518,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),n(1519,"blockquote")(1520,"p"),e(1521,"Quando utilizado com "),n(1522,"code"),e(1523,"p-helper"),t(),e(1524,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(1525,"tr",16)(1526,"td",17)(1527,"div",25)(1528,"span",26),e(1529," autoHeight"),i(1530,"br"),t()()(),n(1531,"td",21)(1532,"code",29),e(1533,"boolean"),t()(),n(1534,"td",24)(1535,"em")(1536,"strong"),e(1537,"(opcional)"),t()(),n(1538,"p"),e(1539,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),n(1540,"p")(1541,"strong"),e(1542,"Componentes compat\xEDveis:"),t(),n(1543,"code"),e(1544,"po-multiselect"),t(),e(1545,", "),n(1546,"code"),e(1547,"po-lookup"),t(),e(1548,"."),t()()(),n(1549,"tr",16)(1550,"td",17)(1551,"div",25)(1552,"span",26),e(1553," autoUpload"),i(1554,"br"),t()()(),n(1555,"td",21)(1556,"code",29),e(1557,"boolean"),t()(),n(1558,"td",24)(1559,"em")(1560,"strong"),e(1561,"(opcional)"),t()(),n(1562,"p"),e(1563,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(1564,"p")(1565,"strong"),e(1566,"Componente compat\xEDvel"),t(),e(1567,": "),n(1568,"code"),e(1569,"po-upload"),t()()()(),n(1570,"tr",16)(1571,"td",17)(1572,"div",25)(1573,"span",26),e(1574," booleanFalse"),i(1575,"br"),t()()(),n(1576,"td",21)(1577,"code",27),e(1578,"string"),t()(),n(1579,"td",24)(1580,"em")(1581,"strong"),e(1582,"(opcional)"),t()(),n(1583,"p"),e(1584,"Texto exibido quando o valor do componente for "),n(1585,"em"),e(1586,"false"),t(),e(1587,"."),t()()(),n(1588,"tr",16)(1589,"td",17)(1590,"div",25)(1591,"span",26),e(1592," booleanTrue"),i(1593,"br"),t()()(),n(1594,"td",21)(1595,"code",27),e(1596,"string"),t()(),n(1597,"td",24)(1598,"em")(1599,"strong"),e(1600,"(opcional)"),t()(),n(1601,"p"),e(1602,"Texto exibido quando o valor do componente for "),n(1603,"em"),e(1604,"true"),t(),e(1605,"."),t()()(),n(1606,"tr",16)(1607,"td",17)(1608,"div",25)(1609,"span",26),e(1610," changeOnEnter"),i(1611,"br"),t()()(),n(1612,"td",21)(1613,"code",29),e(1614,"boolean"),t()(),n(1615,"td",24)(1616,"em")(1617,"strong"),e(1618,"(opcional)"),t()(),n(1619,"p"),e(1620,"Indica que o evento "),n(1621,"code"),e(1622,"p-change"),t(),e(1623,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),n(1624,"code"),e(1625,"po-combo"),t(),e(1626,"."),t()()(),n(1627,"tr",16)(1628,"td",17)(1629,"div",25)(1630,"span",26),e(1631," changeVisibleColumns"),i(1632,"br"),t()()(),n(1633,"td",21)(1634,"code",44),e(1635,"Function"),t()(),n(1636,"td",24)(1637,"em")(1638,"strong"),e(1639,"(opcional)"),t()(),n(1640,"p"),e(1641,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),n(1642,"p"),e(1643,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(1644,"p")(1645,"strong"),e(1646,"Componente compat\xEDvel"),t(),e(1647,": "),n(1648,"code"),e(1649,"po-lookup"),t()()()(),n(1650,"tr",16)(1651,"td",17)(1652,"div",25)(1653,"span",26),e(1654," clean"),i(1655,"br"),t()()(),n(1656,"td",21)(1657,"code",29),e(1658,"boolean"),t()(),n(1659,"td",24)(1660,"em")(1661,"strong"),e(1662,"(opcional)"),t()(),n(1663,"p"),e(1664,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),n(1665,"p")(1666,"strong"),e(1667,"Componentes compat\xEDveis:"),t(),n(1668,"code"),e(1669,"po-datepicker"),t(),e(1670,", "),n(1671,"code"),e(1672,"po-datepicker-range"),t(),e(1673,", "),n(1674,"code"),e(1675,"po-input"),t(),e(1676,", "),n(1677,"code"),e(1678,"po-number"),t(),e(1679,", "),n(1680,"code"),e(1681,"po-decimal"),t(),e(1682,", "),n(1683,"code"),e(1684,"po-combo"),t(),e(1685,", "),n(1686,"code"),e(1687,"po-lookup"),t(),e(1688,", "),n(1689,"code"),e(1690,"po-password"),t()()()(),n(1691,"tr",16)(1692,"td",17)(1693,"div",25)(1694,"span",26),e(1695," columnRestoreManager"),i(1696,"br"),t()()(),n(1697,"td",21)(1698,"code",44),e(1699,"Function"),t()(),n(1700,"td",24)(1701,"em")(1702,"strong"),e(1703,"(opcional)"),t()(),n(1704,"p"),e(1705,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),n(1706,"p"),e(1707,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(1708,"p")(1709,"strong"),e(1710,"Componente compat\xEDvel"),t(),e(1711,": "),n(1712,"code"),e(1713,"po-lookup"),t()()()(),n(1714,"tr",16)(1715,"td",17)(1716,"div",25)(1717,"span",26),e(1718," columns"),i(1719,"br"),t()()(),n(1720,"td",21)(1721,"code",30),e(1722,"Array<PoLookupColumn> "),t(),n(1723,"code",45),e(1724," number"),t()(),n(1725,"td",24)(1726,"em")(1727,"strong"),e(1728,"(opcional)"),t()(),n(1729,"p"),e(1730,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),n(1731,"code"),e(1732,"searchService"),t(),e(1733,`,
essa propriedade deve receber um array de objetos que implementam a interface `),n(1734,"a",46)(1735,"code"),e(1736,"PoLookupColumn"),t()(),e(1737,"."),t(),n(1738,"blockquote")(1739,"p"),e(1740,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),n(1741,"em"),e(1742,"label"),t(),e(1743," e "),n(1744,"em"),e(1745,"value"),t(),e(1746,` para valores
de tela e do model respectivamente.`),t()(),n(1747,"p")(1748,"strong"),e(1749,"Componentes compat\xEDveis:"),t(),n(1750,"code"),e(1751,"po-radio-group"),t(),e(1752,", "),n(1753,"code"),e(1754,"po-lookup"),t(),e(1755,", "),n(1756,"code"),e(1757,"po-checkbox-group"),t(),e(1758,"."),t()()(),n(1759,"tr",16)(1760,"td",17)(1761,"div",25)(1762,"span",26),e(1763," container"),i(1764,"br"),t()()(),n(1765,"td",21)(1766,"code",27),e(1767,"string"),t()(),n(1768,"td",24)(1769,"em")(1770,"strong"),e(1771,"(opcional)"),t()(),n(1772,"p"),e(1773,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),n(1774,"p"),e(1775,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),n(1776,"tr",16)(1777,"td",17)(1778,"div",25)(1779,"span",26),e(1780," customAction"),i(1781,"br"),t()()(),n(1782,"td",21)(1783,"code",47),e(1784,"PoProgressAction"),t()(),n(1785,"td",24)(1786,"em")(1787,"strong"),e(1788,"(opcional)"),t()(),n(1789,"p"),e(1790,"Define uma a\xE7\xE3o personalizada no componente "),n(1791,"code"),e(1792,"po-upload"),t(),e(1793,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(1794,"p")(1795,"strong"),e(1796,"Componente compat\xEDvel"),t(),e(1797,": "),n(1798,"code"),e(1799,"po-upload"),t(),e(1800,","),t(),n(1801,"p")(1802,"strong"),e(1803,"Exemplo de configura\xE7\xE3o"),t(),e(1804,":"),t(),n(1805,"pre")(1806,"code",48),e(1807,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),n(1808,"tr",16)(1809,"td",17)(1810,"div",25)(1811,"span",26),e(1812," customActionClick"),i(1813,"br"),t()()(),n(1814,"td",21)(1815,"code",49),e(1816,"(file: PoUploadFile) => void"),t()(),n(1817,"td",24)(1818,"em")(1819,"strong"),e(1820,"(opcional)"),t()(),n(1821,"p"),e(1822,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(1823,"code"),e(1824,"p-custom-action"),t(),e(1825,"."),t(),n(1826,"p")(1827,"strong"),e(1828,"Componente compat\xEDvel"),t(),e(1829,": "),n(1830,"code"),e(1831,"po-upload"),t(),e(1832,","),t(),n(1833,"p"),e(1834,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(1835,"p")(1836,"strong"),e(1837,"Par\xE2metro do evento"),t(),e(1838,":"),t(),n(1839,"ul")(1840,"li")(1841,"code"),e(1842,"file"),t(),e(1843,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),n(1844,"code"),e(1845,"PoUploadFile"),t(),e(1846," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),n(1847,"p")(1848,"strong"),e(1849,"Exemplo de uso"),t(),e(1850,":"),t(),n(1851,"pre")(1852,"code",48),e(1853,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),n(1854,"tr",16)(1855,"td",17)(1856,"div",25)(1857,"span",26),e(1858," debounceTime"),i(1859,"br"),t()()(),n(1860,"td",21)(1861,"code",45),e(1862,"number"),t()(),n(1863,"td",24)(1864,"em")(1865,"strong"),e(1866,"(opcional)"),t()(),n(1867,"p"),e(1868,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),n(1869,"code"),e(1870,"p-filter-service"),t(),e(1871,")."),t(),n(1872,"p")(1873,"strong"),e(1874,"Componentes compat\xEDveis:"),t(),n(1875,"code"),e(1876,"po-combo"),t(),e(1877,", "),n(1878,"code"),e(1879,"po-multiselect"),t(),e(1880,"."),t()()(),n(1881,"tr",16)(1882,"td",17)(1883,"div",25)(1884,"span",26),e(1885," decimalsLength"),i(1886,"br"),t()()(),n(1887,"td",21)(1888,"code",45),e(1889,"number"),t()(),n(1890,"td",24)(1891,"em")(1892,"strong"),e(1893,"(opcional)"),t()(),n(1894,"p"),e(1895,"Quantidade m\xE1xima de casas decimais."),t(),n(1896,"blockquote")(1897,"p"),e(1898,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(1899,"code"),e(1900,"type"),t(),e(1901," for "),n(1902,"em"),e(1903,"currency"),t(),e(1904," ou "),n(1905,"em"),e(1906,"decimal"),t(),e(1907,"."),t()()()(),n(1908,"tr",16)(1909,"td",17)(1910,"div",25)(1911,"span",26),e(1912," directory"),i(1913,"br"),t()()(),n(1914,"td",21)(1915,"code",29),e(1916,"boolean"),t()(),n(1917,"td",24)(1918,"em")(1919,"strong"),e(1920,"(opcional)"),t()(),n(1921,"p"),e(1922,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(1923,"blockquote")(1924,"p"),e(1925,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(1926,"blockquote")(1927,"p"),e(1928,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(1929,"strong"),e(1930,"Internet Explorer"),t(),e(1931,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),n(1932,"p")(1933,"strong"),e(1934,"Componente compat\xEDvel"),t(),e(1935,": "),n(1936,"code"),e(1937,"po-upload"),t()()()(),n(1938,"tr",16)(1939,"td",17)(1940,"div",25)(1941,"span",26),e(1942," disabled"),i(1943,"br"),t()()(),n(1944,"td",21)(1945,"code",29),e(1946,"boolean"),t()(),n(1947,"td",24)(1948,"em")(1949,"strong"),e(1950,"(opcional)"),t()(),n(1951,"p"),e(1952,"Desabilita o campo caso informar o valor "),n(1953,"em"),e(1954,"true"),t(),e(1955,"."),t()()(),n(1956,"tr",16)(1957,"td",17)(1958,"div",25)(1959,"span",26),e(1960," disabledInitFilter"),i(1961,"br"),t()()(),n(1962,"td",21)(1963,"code",29),e(1964,"boolean"),t()(),n(1965,"td",24)(1966,"em")(1967,"strong"),e(1968,"(opcional)"),t()(),n(1969,"p"),e(1970,"Desabilita o filtro inicial no servi\xE7o do "),n(1971,"code"),e(1972,"po-combo"),t(),e(1973,", que \xE9 executado no primeiro clique no campo."),t()()(),n(1974,"tr",16)(1975,"td",17)(1976,"div",25)(1977,"span",26),e(1978," disabledTabFilter"),i(1979,"br"),t()()(),n(1980,"td",21)(1981,"code",29),e(1982,"boolean"),t()(),n(1983,"td",24)(1984,"em")(1985,"strong"),e(1986,"(opcional)"),t()(),n(1987,"p"),e(1988,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),n(1989,"code"),e(1990,"po-combo"),t(),e(1991,"."),t()()(),n(1992,"tr",16)(1993,"td",17)(1994,"div",25)(1995,"span",26),e(1996," divider"),i(1997,"br"),t()()(),n(1998,"td",21)(1999,"code",27),e(2e3,"string"),t()(),n(2001,"td",24)(2002,"em")(2003,"strong"),e(2004,"(opcional)"),t()(),n(2005,"p"),e(2006,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),n(2007,"tr",16)(2008,"td",17)(2009,"div",25)(2010,"span",26),e(2011," dragDrop"),i(2012,"br"),t()()(),n(2013,"td",21)(2014,"code",29),e(2015,"boolean"),t()(),n(2016,"td",24)(2017,"em")(2018,"strong"),e(2019,"(opcional)"),t()(),n(2020,"p"),e(2021,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(2022,"blockquote")(2023,"p"),e(2024,"Recomendamos utilizar apenas um "),n(2025,"code"),e(2026,"po-upload"),t(),e(2027," com esta funcionalidade por tela."),t()(),n(2028,"p")(2029,"strong"),e(2030,"Componente compat\xEDvel"),t(),e(2031,": "),n(2032,"code"),e(2033,"po-upload"),t()()()(),n(2034,"tr",16)(2035,"td",17)(2036,"div",25)(2037,"span",26),e(2038," dragDropHeight"),i(2039,"br"),t()()(),n(2040,"td",21)(2041,"code",45),e(2042,"number"),t()(),n(2043,"td",24)(2044,"em")(2045,"strong"),e(2046,"(opcional)"),t()(),n(2047,"p"),e(2048,"Define em "),n(2049,"em"),e(2050,"pixels"),t(),e(2051," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(2052,"code"),e(2053,"160px"),t(),e(2054,"."),t(),n(2055,"blockquote")(2056,"p"),e(2057,"Esta propriedade funciona somente se a propriedade "),n(2058,"code"),e(2059,"p-drag-drop"),t(),e(2060," estiver habilitada."),t()(),n(2061,"p")(2062,"strong"),e(2063,"Componente compat\xEDvel"),t(),e(2064,": "),n(2065,"code"),e(2066,"po-upload"),t()()()(),n(2067,"tr",16)(2068,"td",17)(2069,"div",25)(2070,"span",26),e(2071," errorAsyncFunction"),i(2072,"br"),t()()(),n(2073,"td",21)(2074,"code",50),e(2075,"(value) => Observable<boolean>"),t()(),n(2076,"td",24)(2077,"em")(2078,"strong"),e(2079,"(opcional)"),t()(),n(2080,"p"),e(2081,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(2082,"code"),e(2083,"change"),t(),e(2084," ou "),n(2085,"code"),e(2086,"change-model"),t(),e(2087,", dependendo do valor da propriedade "),n(2088,"code"),e(2089,"triggerMode"),t(),e(2090,"."),t(),n(2091,"blockquote")(2092,"p"),e(2093,"Retorna "),n(2094,"code"),e(2095,"Observable com o valor true"),t(),e(2096," para sinalizar o erro "),n(2097,"code"),e(2098,"false"),t(),e(2099," para indicar que n\xE3o h\xE1 erro."),t()(),n(2100,"p")(2101,"strong"),e(2102,"Componente compat\xEDvel"),t(),e(2103,": "),n(2104,"code"),e(2105,"po-datepicker"),t()()()(),n(2106,"tr",16)(2107,"td",17)(2108,"div",25)(2109,"span",26),e(2110," errorAsyncProperties"),i(2111,"br"),t()()(),n(2112,"td",21)(2113,"code",51),e(2114,"ErrorAsyncProperties"),t()(),n(2115,"td",24)(2116,"em")(2117,"strong"),e(2118,"(opcional)"),t()(),n(2119,"p"),e(2120,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),n(2121,"p")(2122,"strong"),e(2123,"Componentes compat\xEDveis:"),t(),n(2124,"code"),e(2125,"po-input"),t(),e(2126,", "),n(2127,"code"),e(2128,"po-number"),t(),e(2129,", "),n(2130,"code"),e(2131,"po-decimal"),t(),e(2132,", "),n(2133,"code"),e(2134,"po-password"),t(),e(2135,"."),t()()(),n(2136,"tr",16)(2137,"td",17)(2138,"div",25)(2139,"span",26),e(2140," errorLimit"),i(2141,"br"),t()()(),n(2142,"td",21)(2143,"code",29),e(2144,"boolean"),t()(),n(2145,"td",24)(2146,"em")(2147,"strong"),e(2148,"(opcional)"),t()(),n(2149,"p"),e(2150,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(2151,"blockquote")(2152,"p"),e(2153,"Caso essa propriedade seja definida como "),n(2154,"code"),e(2155,"true"),t(),e(2156,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),n(2157,"p")(2158,"strong"),e(2159,"Componentes compat\xEDveis:"),t(),n(2160,"code"),e(2161,"po-checkbox-group"),t(),e(2162,", "),n(2163,"code"),e(2164,"po-combo"),t(),e(2165,", "),n(2166,"code"),e(2167,"po-datepicker"),t(),e(2168,", "),n(2169,"code"),e(2170,"po-datepicker-range"),t(),e(2171,", "),n(2172,"code"),e(2173,"po-decimal"),t(),e(2174,", "),n(2175,"code"),e(2176,"po-input"),t(),e(2177,", "),n(2178,"code"),e(2179,"po-lookup"),t(),e(2180,", "),n(2181,"code"),e(2182,"po-multiselect"),t(),e(2183,", "),n(2184,"code"),e(2185,"po-number"),t(),e(2186,", "),n(2187,"code"),e(2188,"po-password"),t(),e(2189,", "),n(2190,"code"),e(2191,"po-radio-group"),t(),e(2192,", "),n(2193,"code"),e(2194,"po-select"),t(),e(2195,", "),n(2196,"code"),e(2197,"po-switch"),t(),e(2198,", "),n(2199,"code"),e(2200,"po-textarea"),t(),e(2201,"."),t()()(),n(2202,"tr",16)(2203,"td",17)(2204,"div",25)(2205,"span",26),e(2206," errorMessage"),i(2207,"br"),t()()(),n(2208,"td",21)(2209,"code",27),e(2210,"string"),t()(),n(2211,"td",24)(2212,"em")(2213,"strong"),e(2214,"(opcional)"),t()(),n(2215,"p"),e(2216,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),n(2217,"p"),e(2218,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),n(2219,"ul")(2220,"li"),e(2221,"pattern;"),t(),n(2222,"li"),e(2223,"minValue;"),t(),n(2224,"li"),e(2225,"maxValue;"),t(),n(2226,"li"),e(2227,"required;"),t()(),n(2228,"blockquote")(2229,"p"),e(2230,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),n(2231,"code"),e(2232,"po-datepicker"),t(),e(2233,", "),n(2234,"code"),e(2235,"po-input"),t(),e(2236,", "),n(2237,"code"),e(2238,"po-number"),t(),e(2239,", "),n(2240,"code"),e(2241,"po-decimal"),t(),e(2242,", "),n(2243,"code"),e(2244,"po-password"),t(),e(2245,`, \xE9 necess\xE1rio que a propriedade
`),n(2246,"code"),e(2247,"requiredFieldErrorMessage"),t(),e(2248," esteja como "),n(2249,"code"),e(2250,"true"),t(),e(2251,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),n(2252,"code"),e(2253,"po-datepicker-range"),t(),e(2254,", "),n(2255,"code"),e(2256,"po-select"),t(),e(2257,", "),n(2258,"code"),e(2259,"po-checkbox-group"),t(),e(2260,", "),n(2261,"code"),e(2262,"po-radio-group"),t(),e(2263,", "),n(2264,"code"),e(2265,"po-multiselect"),t(),e(2266,", "),n(2267,"code"),e(2268,"po-combo"),t(),e(2269,`,
`),n(2270,"code"),e(2271,"po-lookup"),t(),e(2272," e "),n(2273,"code"),e(2274,"po-textarea"),t(),e(2275," n\xE3o \xE9 necess\xE1rio passar a propriedade "),n(2276,"code"),e(2277,"requiredFieldErrorMessage"),t(),e(2278,"."),t()(),n(2279,"p")(2280,"strong"),e(2281,"Componentes compat\xEDveis:"),t(),n(2282,"code"),e(2283,"po-checkbox-group"),t(),e(2284,", "),n(2285,"code"),e(2286,"po-combo"),t(),e(2287,", "),n(2288,"code"),e(2289,"po-datepicker"),t(),e(2290,", "),n(2291,"code"),e(2292,"po-datepicker-range"),t(),e(2293,", "),n(2294,"code"),e(2295,"po-decimal"),t(),e(2296,", "),n(2297,"code"),e(2298,"po-input"),t(),e(2299,", "),n(2300,"code"),e(2301,"po-lookup"),t(),e(2302,", "),n(2303,"code"),e(2304,"po-multiselect"),t(),e(2305,", "),n(2306,"code"),e(2307,"po-number"),t(),e(2308,", "),n(2309,"code"),e(2310,"po-password"),t(),e(2311,", "),n(2312,"code"),e(2313,"po-radio-group"),t(),e(2314,", "),n(2315,"code"),e(2316,"po-select"),t(),e(2317,", "),n(2318,"code"),e(2319,"po-switch"),t(),e(2320,", "),n(2321,"code"),e(2322,"po-textarea"),t(),e(2323,"."),t()()(),n(2324,"tr",16)(2325,"td",17)(2326,"div",25)(2327,"span",26),e(2328," fieldLabel"),i(2329,"br"),t()()(),n(2330,"td",21)(2331,"code",27),e(2332,"string"),t()(),n(2333,"td",24)(2334,"em")(2335,"strong"),e(2336,"(opcional)"),t()(),n(2337,"p"),e(2338,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),n(2339,"p"),e(2340,"O valor padr\xE3o \xE9: "),n(2341,"code"),e(2342,"label"),t(),e(2343,"."),t(),n(2344,"blockquote")(2345,"p"),e(2346,"Esta propriedade pode ser utilizada em conjunto com: "),n(2347,"code"),e(2348,"options"),t(),e(2349,", "),n(2350,"code"),e(2351,"optionsService"),t(),e(2352," e "),n(2353,"code"),e(2354,"searchService"),t(),e(2355,"."),t()()()(),n(2356,"tr",16)(2357,"td",17)(2358,"div",25)(2359,"span",26),e(2360," fieldValue"),i(2361,"br"),t()()(),n(2362,"td",21)(2363,"code",27),e(2364,"string"),t()(),n(2365,"td",24)(2366,"em")(2367,"strong"),e(2368,"(opcional)"),t()(),n(2369,"p"),e(2370,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),n(2371,"p"),e(2372,"O valor padr\xE3o \xE9: "),n(2373,"code"),e(2374,"value"),t(),e(2375,"."),t(),n(2376,"blockquote")(2377,"p"),e(2378,"Esta propriedade pode ser utilizada em conjunto com: "),n(2379,"code"),e(2380,"options"),t(),e(2381,", "),n(2382,"code"),e(2383,"optionsService"),t(),e(2384," e "),n(2385,"code"),e(2386,"searchService"),t(),e(2387,"."),t()()()(),n(2388,"tr",16)(2389,"td",17)(2390,"div",25)(2391,"span",26),e(2392," filterMinlength"),i(2393,"br"),t()()(),n(2394,"td",21)(2395,"code",45),e(2396,"number"),t()(),n(2397,"td",24)(2398,"em")(2399,"strong"),e(2400,"(opcional)"),t()(),n(2401,"p"),e(2402,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),n(2403,"code"),e(2404,"po-combo"),t(),e(2405,"."),t()()(),n(2406,"tr",16)(2407,"td",17)(2408,"div",25)(2409,"span",26),e(2410," filterMode"),i(2411,"br"),t()()(),n(2412,"td",21)(2413,"code",52),e(2414,"PoMultiselectFilterMode"),t()(),n(2415,"td",24)(2416,"em")(2417,"strong"),e(2418,"(opcional)"),t()(),n(2419,"p"),e(2420,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),n(2421,"code"),e(2422,"startsWith"),t(),e(2423,", "),n(2424,"code"),e(2425,"contains"),t(),e(2426," ou "),n(2427,"code"),e(2428,"endsWith"),t(),e(2429,"."),t(),n(2430,"blockquote")(2431,"p"),e(2432,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),n(2433,"p")(2434,"strong"),e(2435,"Componente compat\xEDvel:"),t(),n(2436,"code"),e(2437,"po-multiselect"),t(),e(2438,"."),t()()(),n(2439,"tr",16)(2440,"td",17)(2441,"div",25)(2442,"span",26),e(2443," forceBooleanComponentType"),i(2444,"br"),t()()(),n(2445,"td",21)(2446,"code",53),e(2447,"ForceBooleanComponentEnum"),t()(),n(2448,"td",24)(2449,"em")(2450,"strong"),e(2451,"(opcional)"),t()(),n(2452,"p"),e(2453,"Valores aceitos:"),t(),n(2454,"ul")(2455,"li"),e(2456,"ForceBooleanComponentEnum.switch"),t(),n(2457,"li"),e(2458,"ForceBooleanComponentEnum.checkbox"),t()()()(),n(2459,"tr",16)(2460,"td",17)(2461,"div",25)(2462,"span",26),e(2463," forceOptionsComponentType"),i(2464,"br"),t()()(),n(2465,"td",21)(2466,"code",54),e(2467,"ForceOptionComponentEnum"),t()(),n(2468,"td",24)(2469,"em")(2470,"strong"),e(2471,"(opcional)"),t()(),n(2472,"p"),e(2473,"pode ser utilizada em conjunto com a propriedade "),n(2474,"code"),e(2475,"options"),t(),e(2476," for\xE7ando o componente a renderizar um "),n(2477,"code"),e(2478,"po-select"),t(),e(2479," ou "),n(2480,"code"),e(2481,"po-radio-group"),t(),e(2482,"."),t(),n(2483,"p"),e(2484,"Valores aceitos:"),t(),n(2485,"ul")(2486,"li"),e(2487,"ForceOptionComponentEnum.radioGroup"),t(),n(2488,"li"),e(2489,"ForceOptionComponentEnum.select"),t()(),n(2490,"blockquote")(2491,"p"),e(2492,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),n(2493,"code"),e(2494,"optionsMulti"),t(),e(2495," e "),n(2496,"code"),e(2497,"optionsService"),t(),e(2498,"."),t()()()(),n(2499,"tr",16)(2500,"td",17)(2501,"div",25)(2502,"span",26),e(2503," formField"),i(2504,"br"),t()()(),n(2505,"td",21)(2506,"code",27),e(2507,"string"),t()(),n(2508,"td",24)(2509,"em")(2510,"strong"),e(2511,"(opcional)"),t()(),n(2512,"p"),e(2513,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(2514,"code"),e(2515,"url"),t(),e(2516,"."),t(),n(2517,"blockquote")(2518,"p"),e(2519,"O valor default \xE9 "),n(2520,"code"),e(2521,"files"),t()()(),n(2522,"p")(2523,"strong"),e(2524,"Componente compat\xEDvel"),t(),e(2525,": "),n(2526,"code"),e(2527,"po-upload"),t()()()(),n(2528,"tr",16)(2529,"td",17)(2530,"div",25)(2531,"span",26),e(2532," format"),i(2533,"br"),t()()(),n(2534,"td",21)(2535,"code",27),e(2536,"string "),t(),n(2537,"code",32),e(2538," Array<string>"),t()(),n(2539,"td",24)(2540,"em")(2541,"strong"),e(2542,"(opcional)"),t()(),n(2543,"p"),e(2544,"Formato de exibi\xE7\xE3o no campo."),t(),n(2545,"p"),e(2546,"Ao utilizar esta propriedade com o "),n(2547,"code"),e(2548,"type"),t(),n(2549,"em"),e(2550,"PoDynamicFieldType.Date"),t(),e(2551," ou "),n(2552,"em"),e(2553,"PoDynamicFieldType.DateTime"),t(),e(2554,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),n(2555,"p"),e(2556,"Valores v\xE1lidos:"),t(),n(2557,"ul")(2558,"li"),e(2559,"dd/mm/yyyy"),t(),n(2560,"li"),e(2561,"mm/dd/yyyy"),t(),n(2562,"li"),e(2563,"yyyy/mm/dd"),t()(),n(2564,"p"),e(2565,"Tamb\xE9m pode-se utilizar em conjunto com "),n(2566,"code"),e(2567,"searchService"),t(),e(2568,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),n(2569,"tr",16)(2570,"td",17)(2571,"div",25)(2572,"span",26),e(2573," formatModel"),i(2574,"br"),t()()(),n(2575,"td",21)(2576,"code",29),e(2577,"boolean"),t()(),n(2578,"td",24)(2579,"em")(2580,"strong"),e(2581,"(opcional)"),t()(),n(2582,"p"),e(2583,"Indica se o "),n(2584,"code"),e(2585,"model"),t(),e(2586," receber\xE1 o valor formatado pelas propriedades "),n(2587,"code"),e(2588,"p-label-on"),t(),e(2589," e "),n(2590,"code"),e(2591,"p-label-off"),t(),e(2592,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),n(2593,"p"),e(2594,"O valor padr\xE3o \xE9: "),n(2595,"code"),e(2596,"false"),t(),e(2597,"."),t(),n(2598,"blockquote")(2599,"p"),e(2600,"Esta propriedade est\xE1 disponivel apenas para o "),n(2601,"code"),e(2602,"swicth"),t(),e(2603,"."),t()()()(),n(2604,"tr",16)(2605,"td",17)(2606,"div",25)(2607,"span",26),e(2608," gridColumns"),i(2609,"br"),t()()(),n(2610,"td",21)(2611,"code",45),e(2612,"number"),t()(),n(2613,"td",24)(2614,"em")(2615,"strong"),e(2616,"(opcional)"),t()(),n(2617,"p"),e(2618,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),n(2619,"p"),e(2620,"Deve ser usado o sistema de "),n(2621,"strong"),e(2622,"grid"),t(),e(2623," do PO (1 ... 12 colunas)."),t(),n(2624,"blockquote")(2625,"p"),e(2626,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(2627,"tr",16)(2628,"td",17)(2629,"div",25)(2630,"span",26),e(2631," gridLgColumns"),i(2632,"br"),t()()(),n(2633,"td",21)(2634,"code",45),e(2635,"number"),t()(),n(2636,"td",24)(2637,"em")(2638,"strong"),e(2639,"(opcional)"),t()(),n(2640,"p"),e(2641,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(2642,"p"),e(2643,"Deve ser usado o sistema de "),n(2644,"strong"),e(2645,"grid"),t(),e(2646," do PO (1 ... 12 colunas)."),t(),n(2647,"blockquote")(2648,"p"),e(2649,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2650,"code"),e(2651,"gridColumns"),t(),e(2652,"."),t()()()(),n(2653,"tr",16)(2654,"td",17)(2655,"div",25)(2656,"span",26),e(2657," gridLgPull"),i(2658,"br"),t()()(),n(2659,"td",21)(2660,"code",45),e(2661,"number"),t()(),n(2662,"td",24)(2663,"em")(2664,"strong"),e(2665,"(opcional)"),t()(),n(2666,"p"),e(2667,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),n(2668,"p"),e(2669,"Deve ser usado o sistema de "),n(2670,"strong"),e(2671,"grid"),t(),e(2672," do PO (1 ... 11 colunas)."),t(),n(2673,"blockquote")(2674,"p"),e(2675,"Esta propriedade n\xE3o funciona com a propriedade "),n(2676,"code"),e(2677,"gridColumns"),t(),e(2678,". Deve-se especificar o tamanho da tela."),t()()()(),n(2679,"tr",16)(2680,"td",17)(2681,"div",25)(2682,"span",26),e(2683," gridMdColumns"),i(2684,"br"),t()()(),n(2685,"td",21)(2686,"code",45),e(2687,"number"),t()(),n(2688,"td",24)(2689,"em")(2690,"strong"),e(2691,"(opcional)"),t()(),n(2692,"p"),e(2693,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(2694,"p"),e(2695,"Deve ser usado o sistema de "),n(2696,"strong"),e(2697,"grid"),t(),e(2698," do PO (1 ... 12 colunas)."),t(),n(2699,"blockquote")(2700,"p"),e(2701,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2702,"code"),e(2703,"gridColumns"),t(),e(2704,"."),t()()()(),n(2705,"tr",16)(2706,"td",17)(2707,"div",25)(2708,"span",26),e(2709," gridMdPull"),i(2710,"br"),t()()(),n(2711,"td",21)(2712,"code",45),e(2713,"number"),t()(),n(2714,"td",24)(2715,"em")(2716,"strong"),e(2717,"(opcional)"),t()(),n(2718,"p"),e(2719,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),n(2720,"p"),e(2721,"Deve ser usado o sistema de "),n(2722,"strong"),e(2723,"grid"),t(),e(2724," do PO (1 ... 11 colunas)."),t(),n(2725,"blockquote")(2726,"p"),e(2727,"Esta propriedade n\xE3o funciona com a propriedade "),n(2728,"code"),e(2729,"gridColumns"),t(),e(2730,". Deve-se especificar o tamanho da tela."),t()()()(),n(2731,"tr",16)(2732,"td",17)(2733,"div",25)(2734,"span",26),e(2735," gridSmColumns"),i(2736,"br"),t()()(),n(2737,"td",21)(2738,"code",45),e(2739,"number"),t()(),n(2740,"td",24)(2741,"em")(2742,"strong"),e(2743,"(opcional)"),t()(),n(2744,"p"),e(2745,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(2746,"p"),e(2747,"Deve ser usado o sistema de "),n(2748,"strong"),e(2749,"grid"),t(),e(2750," do PO (1 ... 12 colunas)."),t(),n(2751,"blockquote")(2752,"p"),e(2753,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2754,"code"),e(2755,"gridColumns"),t(),e(2756,"."),t()()()(),n(2757,"tr",16)(2758,"td",17)(2759,"div",25)(2760,"span",26),e(2761," gridSmPull"),i(2762,"br"),t()()(),n(2763,"td",21)(2764,"code",45),e(2765,"number"),t()(),n(2766,"td",24)(2767,"em")(2768,"strong"),e(2769,"(opcional)"),t()(),n(2770,"p"),e(2771,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),n(2772,"p"),e(2773,"Deve ser usado o sistema de "),n(2774,"strong"),e(2775,"grid"),t(),e(2776," do PO (1 ... 11 colunas)."),t(),n(2777,"blockquote")(2778,"p"),e(2779,"Esta propriedade n\xE3o funciona com a propriedade "),n(2780,"code"),e(2781,"gridColumns"),t(),e(2782,". Deve-se especificar o tamanho da tela."),t()()()(),n(2783,"tr",16)(2784,"td",17)(2785,"div",25)(2786,"span",26),e(2787," gridXlColumns"),i(2788,"br"),t()()(),n(2789,"td",21)(2790,"code",45),e(2791,"number"),t()(),n(2792,"td",24)(2793,"em")(2794,"strong"),e(2795,"(opcional)"),t()(),n(2796,"p"),e(2797,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(2798,"p"),e(2799,"Deve ser usado o sistema de "),n(2800,"strong"),e(2801,"grid"),t(),e(2802," do PO (1 ... 12 colunas)."),t(),n(2803,"blockquote")(2804,"p"),e(2805,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2806,"code"),e(2807,"gridColumns"),t(),e(2808,"."),t()()()(),n(2809,"tr",16)(2810,"td",17)(2811,"div",25)(2812,"span",26),e(2813," gridXlPull"),i(2814,"br"),t()()(),n(2815,"td",21)(2816,"code",45),e(2817,"number"),t()(),n(2818,"td",24)(2819,"em")(2820,"strong"),e(2821,"(opcional)"),t()(),n(2822,"p"),e(2823,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),n(2824,"p"),e(2825,"Deve ser usado o sistema de "),n(2826,"strong"),e(2827,"grid"),t(),e(2828," do PO (1 ... 11 colunas)."),t(),n(2829,"blockquote")(2830,"p"),e(2831,"Esta propriedade n\xE3o funciona com a propriedade "),n(2832,"code"),e(2833,"gridColumns"),t(),e(2834,". Deve-se especificar o tamanho da tela."),t()()()(),n(2835,"tr",16)(2836,"td",17)(2837,"div",25)(2838,"span",26),e(2839," headers"),i(2840,"br"),t()()(),n(2841,"td",21)(2842,"code",55),e(2843,"{ [name: string]: string "),t(),n(2844,"code",56),e(2845,` Array<string>;
}`),t()(),n(2846,"td",24)(2847,"em")(2848,"strong"),e(2849,"(opcional)"),t()(),n(2850,"p"),e(2851,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),n(2852,"p")(2853,"strong"),e(2854,"Componente compat\xEDvel"),t(),e(2855,": "),n(2856,"code"),e(2857,"po-upload"),t()()()(),n(2858,"tr",16)(2859,"td",17)(2860,"div",25)(2861,"span",26),e(2862," help"),i(2863,"br"),t()()(),n(2864,"td",21)(2865,"code",27),e(2866,"string"),t()(),n(2867,"td",24)(2868,"em")(2869,"strong"),e(2870,"(opcional)"),t()(),n(2871,"p"),e(2872,"Texto de ajuda."),t()()(),n(2873,"tr",16)(2874,"td",17)(2875,"div",25)(2876,"span",26),e(2877," helper"),i(2878,"br"),t()()(),n(2879,"td",21)(2880,"code",27),e(2881,"string "),t(),n(2882,"code",38),e(2883," PoHelperOptions"),t()(),n(2884,"td",24)(2885,"em")(2886,"strong"),e(2887,"(opcional)"),t()(),n(2888,"p"),e(2889,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),t()()(),n(2890,"tr",16)(2891,"td",17)(2892,"div",25)(2893,"span",26),e(2894," hideLabelStatus"),i(2895,"br"),t()()(),n(2896,"td",21)(2897,"code",29),e(2898,"boolean"),t()(),n(2899,"td",24)(2900,"em")(2901,"strong"),e(2902,"(opcional)"),t()(),n(2903,"p"),e(2904,"Indica se o status do "),n(2905,"code"),e(2906,"model"),t(),e(2907," ser\xE1 escondido visualmente ao lado do switch"),t()()(),n(2908,"tr",16)(2909,"td",17)(2910,"div",25)(2911,"span",26),e(2912," hidePasswordPeek"),i(2913,"br"),t()()(),n(2914,"td",21)(2915,"code",29),e(2916,"boolean"),t()(),n(2917,"td",24)(2918,"em")(2919,"strong"),e(2920,"(opcional)"),t()(),n(2921,"p"),e(2922,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),n(2923,"code"),e(2924,"po-password"),t(),e(2925,"."),t()()(),n(2926,"tr",16)(2927,"td",17)(2928,"div",25)(2929,"span",26),e(2930," hideRestrictionsInfo"),i(2931,"br"),t()()(),n(2932,"td",21)(2933,"code",29),e(2934,"boolean"),t()(),n(2935,"td",24)(2936,"em")(2937,"strong"),e(2938,"(opcional)"),t()(),n(2939,"p"),e(2940,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),n(2941,"p")(2942,"strong"),e(2943,"Componente compat\xEDvel"),t(),e(2944,": "),n(2945,"code"),e(2946,"po-upload"),t()()()(),n(2947,"tr",16)(2948,"td",17)(2949,"div",25)(2950,"span",26),e(2951," hideSearch"),i(2952,"br"),t()()(),n(2953,"td",21)(2954,"code",29),e(2955,"boolean"),t()(),n(2956,"td",24)(2957,"em")(2958,"strong"),e(2959,"(opcional)"),t()(),n(2960,"p"),e(2961,"Esconde o campo de pesquisa existente dentro do dropdown do "),n(2962,"code"),e(2963,"po-multiselect"),t(),e(2964,"."),t()()(),n(2965,"tr",16)(2966,"td",17)(2967,"div",25)(2968,"span",26),e(2969," hideSelectAll"),i(2970,"br"),t()()(),n(2971,"td",21)(2972,"code",29),e(2973,"boolean"),t()(),n(2974,"td",24)(2975,"em")(2976,"strong"),e(2977,"(opcional)"),t()(),n(2978,"p"),e(2979,'Indica se o campo "Selecionar todos" do '),n(2980,"code"),e(2981,"po-multiselect"),t(),e(2982," ser\xE1 escondido."),t()()(),n(2983,"tr",16)(2984,"td",17)(2985,"div",25)(2986,"span",26),e(2987," hideSelectButton"),i(2988,"br"),t()()(),n(2989,"td",21)(2990,"code",29),e(2991,"boolean"),t()(),n(2992,"td",24)(2993,"em")(2994,"strong"),e(2995,"(opcional)"),t()(),n(2996,"p"),e(2997,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(2998,"blockquote")(2999,"p"),e(3e3,"Caso o valor definido seja "),n(3001,"code"),e(3002,"true"),t(),e(3003,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(3004,"code"),e(3005,"selectFiles()"),t(),e(3006," para sele\xE7\xE3o de arquivos."),t()(),n(3007,"p")(3008,"strong"),e(3009,"Componente compat\xEDvel"),t(),e(3010,": "),n(3011,"code"),e(3012,"po-upload"),t()()()(),n(3013,"tr",16)(3014,"td",17)(3015,"div",25)(3016,"span",26),e(3017," hideSendButton"),i(3018,"br"),t()()(),n(3019,"td",21)(3020,"code",29),e(3021,"boolean"),t()(),n(3022,"td",24)(3023,"em")(3024,"strong"),e(3025,"(opcional)"),t()(),n(3026,"p"),e(3027,"Omite o bot\xE3o de envio de arquivos."),t(),n(3028,"blockquote")(3029,"p"),e(3030,"Caso o valor definido seja "),n(3031,"code"),e(3032,"true"),t(),e(3033,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(3034,"code"),e(3035,"sendFiles()"),t(),e(3036," para envio do(s) arquivo(s) selecionado(s)."),t()(),n(3037,"p")(3038,"strong"),e(3039,"Componente compat\xEDvel"),t(),e(3040,": "),n(3041,"code"),e(3042,"po-upload"),t()()()(),n(3043,"tr",16)(3044,"td",17)(3045,"div",25)(3046,"span",26),e(3047," icon"),i(3048,"br"),t()()(),n(3049,"td",21)(3050,"code",27),e(3051,"string "),t(),n(3052,"code",57),e(3053," TemplateRef<void>"),t()(),n(3054,"td",24)(3055,"em")(3056,"strong"),e(3057,"(opcional)"),t()(),n(3058,"p"),e(3059,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(3060,"blockquote")(3061,"p"),e(3062,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),n(3063,"ul")(3064,"li"),e(3065,"Input;"),t(),n(3066,"li"),e(3067,"Number;"),t(),n(3068,"li"),e(3069,"Decimal;"),t(),n(3070,"li"),e(3071,"Combo;"),t(),n(3072,"li"),e(3073,"Password;"),t()(),n(3074,"blockquote")(3075,"p"),e(3076,"Veja a disponibilidade de \xEDcones em "),n(3077,"a",58),e(3078,"biblioteca de \xEDcones"),t(),e(3079,"."),t()()()(),n(3080,"tr",16)(3081,"td",17)(3082,"div",25)(3083,"span",26),e(3084," infiniteScroll"),i(3085,"br"),t()()(),n(3086,"td",21)(3087,"code",29),e(3088,"boolean"),t()(),n(3089,"td",24)(3090,"em")(3091,"strong"),e(3092,"(opcional)"),t()(),n(3093,"p"),e(3094,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),n(3095,"p")(3096,"strong"),e(3097,"Componentes compat\xEDveis:"),t(),n(3098,"code"),e(3099,"po-combo"),t(),e(3100,", "),n(3101,"code"),e(3102,"po-lookup"),t(),e(3103,"."),t()()(),n(3104,"tr",16)(3105,"td",17)(3106,"div",25)(3107,"span",26),e(3108," infiniteScrollDistance"),i(3109,"br"),t()()(),n(3110,"td",21)(3111,"code",45),e(3112,"number"),t()(),n(3113,"td",24)(3114,"em")(3115,"strong"),e(3116,"(opcional)"),t()(),n(3117,"p"),e(3118,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),n(3119,"strong"),e(3120,"Exemplos"),t(),n(3121,"code"),e(3122,"{ infiniteScrollDistance: 80 }"),t(),e(3123,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),n(3124,"p")(3125,"strong"),e(3126,"Componente compat\xEDvel:"),t(),n(3127,"code"),e(3128,"po-combo"),t(),e(3129,"."),t()()(),n(3130,"tr",16)(3131,"td",17)(3132,"div",25)(3133,"span",26),e(3134," invalidValue"),i(3135,"br"),t()()(),n(3136,"td",21)(3137,"code",29),e(3138,"boolean"),t()(),n(3139,"td",24)(3140,"em")(3141,"strong"),e(3142,"(opcional)"),t()(),n(3143,"p"),e(3144,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),n(3145,"code"),e(3146,"p-field-error-message"),t(),e(3147,"."),t(),n(3148,"blockquote")(3149,"p"),e(3150,"Caso essa propriedade seja definida como "),n(3151,"code"),e(3152,"true"),t(),e(3153,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()(),n(3154,"p")(3155,"strong"),e(3156,"Componente compat\xEDvel"),t(),e(3157,": "),n(3158,"code"),e(3159,"po-switch"),t()()()(),n(3160,"tr",16)(3161,"td",17)(3162,"div",25)(3163,"span",26),e(3164," isoFormat"),i(3165,"br"),t()()(),n(3166,"td",21)(3167,"code",59),e(3168,"PoDatepickerIsoFormat"),t()(),n(3169,"td",24)(3170,"em")(3171,"strong"),e(3172,"(opcional)"),t()(),n(3173,"p"),e(3174,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),n(3175,"blockquote")(3176,"p"),e(3177,"Veja os valores v\xE1lidos no "),n(3178,"code"),e(3179,"enumPoDatepickerIsoFormat"),t(),e(3180,"."),t()(),n(3181,"p")(3182,"strong"),e(3183,"Componente compat\xEDvel:"),t(),e(3184," po-datepicker"),t()()(),n(3185,"tr",16)(3186,"td",17)(3187,"div",25)(3188,"span",26),e(3189," key"),i(3190,"br"),t()()(),n(3191,"td",21)(3192,"code",29),e(3193,"boolean"),t()(),n(3194,"td",24)(3195,"em")(3196,"strong"),e(3197,"(opcional)"),t()(),n(3198,"p"),e(3199,"Identificador"),t()()(),n(3200,"tr",16)(3201,"td",17)(3202,"div",25)(3203,"span",26),e(3204," keydown"),i(3205,"br"),t()()(),n(3206,"td",21)(3207,"code",44),e(3208,"Function"),t()(),n(3209,"td",24)(3210,"em")(3211,"strong"),e(3212,"(opcional)"),t()(),n(3213,"p"),e(3214,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(3215,"code"),e(3216,"KeyboardEvent"),t(),e(3217," com informa\xE7\xF5es sobre a tecla."),t()()(),n(3218,"tr",16)(3219,"td",17)(3220,"div",25)(3221,"span",26),e(3222," label"),i(3223,"br"),t()()(),n(3224,"td",21)(3225,"code",27),e(3226,"string"),t()(),n(3227,"td",24)(3228,"em")(3229,"strong"),e(3230,"(opcional)"),t()(),n(3231,"p"),e(3232,"R\xF3tulo do campo exibido."),t(),n(3233,"p"),e(3234,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),n(3235,"code"),e(3236,"label"),t(),e(3237," o valor da propriedade "),n(3238,"code"),e(3239,"property"),t(),e(3240," com a primeira letra em mai\xFAsculo."),t()()(),n(3241,"tr",16)(3242,"td",17)(3243,"div",25)(3244,"span",26),e(3245," labelPosition"),i(3246,"br"),t()()(),n(3247,"td",21)(3248,"code",60),e(3249,"PoSwitchLabelPosition"),t()(),n(3250,"td",24)(3251,"em")(3252,"strong"),e(3253,"(opcional)"),t()(),n(3254,"p"),e(3255,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),n(3256,"blockquote")(3257,"p"),e(3258,"Por padr\xE3o exibe \xE0 direita."),t()()()(),n(3259,"tr",16)(3260,"td",17)(3261,"div",25)(3262,"span",26),e(3263," listboxControlPosition"),i(3264,"br"),t()()(),n(3265,"td",21)(3266,"code",61),e(3267,"'top' "),t(),n(3268,"code",62),e(3269," 'bottom'"),t()(),n(3270,"td",24)(3271,"em")(3272,"strong"),e(3273,"(opcional)"),t()(),n(3274,"p"),e(3275,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),n(3276,"code"),e(3277,"listbox"),t(),e(3278," em rela\xE7\xE3o ao campo ("),n(3279,"code"),e(3280,"top"),t(),e(3281," ou "),n(3282,"code"),e(3283,"bottom"),t(),e(3284,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t(),n(3285,"p")(3286,"strong"),e(3287,"Componentes compat\xEDveis:"),t(),n(3288,"code"),e(3289,"po-multiselect"),t(),e(3290,", "),n(3291,"code"),e(3292,"po-combo"),t(),e(3293,"."),t()()(),n(3294,"tr",16)(3295,"td",17)(3296,"div",25)(3297,"span",26),e(3298," literals"),i(3299,"br"),t()()(),n(3300,"td",21)(3301,"code",36),e(3302,"PoLookupLiterals "),t(),n(3303,"code",63),e(3304," PoMultiselectLiterals "),t(),n(3305,"code",64),e(3306," PoComboLiterals "),t(),n(3307,"code",65),e(3308," PoDatepickerRangeLiterals "),t(),n(3309,"code",66),e(3310," PoUploadLiterals"),t()(),n(3311,"td",24)(3312,"em")(3313,"strong"),e(3314,"(opcional)"),t()(),n(3315,"p"),e(3316,"Objeto com as literais usadas para os seguintes componentes: "),n(3317,"code"),e(3318,"po-lookup"),t(),e(3319,", "),n(3320,"code"),e(3321,"po-multiselect"),t(),e(3322,", "),n(3323,"code"),e(3324,"po-combo"),t(),e(3325," e "),n(3326,"code"),e(3327,"po-datepicker-range"),t(),e(3328,"."),t(),n(3329,"blockquote")(3330,"p"),e(3331,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),n(3332,"p")(3333,"strong"),e(3334,"Componentes compat\xEDveis:"),t(),n(3335,"code"),e(3336,"po-lookup"),t(),e(3337,", "),n(3338,"code"),e(3339,"po-multiselect"),t(),e(3340,", "),n(3341,"code"),e(3342,"po-combo"),t(),e(3343,", "),n(3344,"code"),e(3345,"po-datepicker-range"),t()()()(),n(3346,"tr",16)(3347,"td",17)(3348,"div",25)(3349,"span",26),e(3350," locale"),i(3351,"br"),t()()(),n(3352,"td",21)(3353,"code",27),e(3354,"string"),t()(),n(3355,"td",24)(3356,"em")(3357,"strong"),e(3358,"(opcional)"),t()(),n(3359,"p"),e(3360,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),n(3361,"a",67)(3362,"code"),e(3363,"I18n"),t()()(),n(3364,"p"),e(3365,"Exemplo de utiliza\xE7\xE3o:"),t(),n(3366,"pre")(3367,"code"),e(3368,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),t()(),n(3369,"blockquote")(3370,"p"),e(3371,"Para ver quais linguagens suportadas acesse "),n(3372,"a",67)(3373,"code"),e(3374,"I18n"),t()(),e(3375,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),n(3376,"tr",16)(3377,"td",17)(3378,"div",25)(3379,"span",26),e(3380," mask"),i(3381,"br"),t()()(),n(3382,"td",21)(3383,"code",27),e(3384,"string"),t()(),n(3385,"td",24)(3386,"em")(3387,"strong"),e(3388,"(opcional)"),t()(),n(3389,"p"),e(3390,"M\xE1scara para o campo."),t(),n(3391,"p")(3392,"strong"),e(3393,"Componente compat\xEDvel:"),t(),n(3394,"code"),e(3395,"po-input"),t(),e(3396,"."),t(),n(3397,"blockquote")(3398,"p"),e(3399,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(3400,"code"),e(3401,"type: time"),t(),e(3402,"."),t()()()(),n(3403,"tr",16)(3404,"td",17)(3405,"div",25)(3406,"span",26),e(3407," maskFormatModel"),i(3408,"br"),t()()(),n(3409,"td",21)(3410,"code",29),e(3411,"boolean"),t()(),n(3412,"td",24)(3413,"em")(3414,"strong"),e(3415,"(opcional)"),t()(),n(3416,"p"),e(3417,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),n(3418,"code"),e(3419,"false"),t(),e(3420,"."),t(),n(3421,"p")(3422,"strong"),e(3423,"Componente compat\xEDvel:"),t(),n(3424,"code"),e(3425,"po-input"),t(),e(3426,"."),t(),n(3427,"blockquote")(3428,"p"),e(3429,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(3430,"code"),e(3431,"type: time"),t(),e(3432,"."),t()()()(),n(3433,"tr",16)(3434,"td",17)(3435,"div",25)(3436,"span",26),e(3437," maskNoLengthValidation"),i(3438,"br"),t()()(),n(3439,"td",21)(3440,"code",29),e(3441,"boolean"),t()(),n(3442,"td",24)(3443,"em")(3444,"strong"),e(3445,"(opcional)"),t()(),n(3446,"p"),e(3447,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),n(3448,"code"),e(3449,"minLength"),t(),e(3450,") e m\xE1ximo ("),n(3451,"code"),e(3452,"maxLength"),t(),e(3453,") quando h\xE1 uma m\xE1scara ("),n(3454,"code"),e(3455,"p-mask"),t(),e(3456,") definida."),t(),n(3457,"ul")(3458,"li"),e(3459,"Quando "),n(3460,"code"),e(3461,"true"),t(),e(3462,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(3463,"li"),e(3464,"Quando "),n(3465,"code"),e(3466,"false"),t(),e(3467,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(3468,"p")(3469,"strong"),e(3470,"Componentes compat\xEDveis:"),t(),n(3471,"code"),e(3472,"po-input"),t(),e(3473,", "),n(3474,"code"),e(3475,"po-decimal"),t(),e(3476,"."),t(),n(3477,"blockquote")(3478,"p"),e(3479,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),n(3480,"code"),e(3481,"p-mask-format-model"),t(),e(3482,"."),t()(),n(3483,"p"),e(3484,"Exemplo:"),t(),n(3485,"pre")(3486,"code"),e(3487,`fields:Array<PoDynamicFormField> = [
{
  property: 'CNPJ maskNoLengthValidation TRUE',
  required: true,
  showRequired: true,
  mask: '99.999.999/9999-99',
  pattern: '([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])',
  maskNoLengthValidation: true,
  maxLength: 14,
  minLength: 0
}
`),t()(),n(3488,"ul")(3489,"li"),e(3490,"Entrada: "),n(3491,"code"),e(3492,"11.111.111/1111-11"),t(),e(3493," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),t()()()(),n(3494,"tr",16)(3495,"td",17)(3496,"div",25)(3497,"span",26),e(3498," maxLength"),i(3499,"br"),t()()(),n(3500,"td",21)(3501,"code",45),e(3502,"number"),t()(),n(3503,"td",24)(3504,"em")(3505,"strong"),e(3506,"(opcional)"),t()(),n(3507,"p"),e(3508,"Tamanho m\xE1ximo de caracteres."),t(),n(3509,"p")(3510,"strong"),e(3511,"Componentes compat\xEDveis:"),t(),n(3512,"code"),e(3513,"po-input"),t(),e(3514,", "),n(3515,"code"),e(3516,"po-number"),t(),e(3517,", "),n(3518,"code"),e(3519,"po-decimal"),t(),e(3520,", "),n(3521,"code"),e(3522,"po-textarea"),t(),e(3523,", "),n(3524,"code"),e(3525,"po-password"),t(),e(3526,"."),t()()(),n(3527,"tr",16)(3528,"td",17)(3529,"div",25)(3530,"span",26),e(3531," maxValue"),i(3532,"br"),t()()(),n(3533,"td",21)(3534,"code",27),e(3535,"string "),t(),n(3536,"code",45),e(3537," number"),t()(),n(3538,"td",24)(3539,"em")(3540,"strong"),e(3541,"(opcional)"),t()(),n(3542,"p"),e(3543,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(3544,"em"),e(3545,"number"),t(),e(3546,", "),n(3547,"em"),e(3548,"date"),t(),e(3549," ou "),n(3550,"em"),e(3551,"dateTime"),t(),e(3552,"."),t(),n(3553,"p")(3554,"strong"),e(3555,"Componentes compat\xEDveis:"),t(),n(3556,"code"),e(3557,"po-datepicker"),t(),e(3558,", "),n(3559,"code"),e(3560,"po-datepicker-range"),t(),e(3561,", "),n(3562,"code"),e(3563,"po-number"),t(),e(3564,", "),n(3565,"code"),e(3566,"po-decimal"),t()()()(),n(3567,"tr",16)(3568,"td",17)(3569,"div",25)(3570,"span",26),e(3571," minLength"),i(3572,"br"),t()()(),n(3573,"td",21)(3574,"code",45),e(3575,"number"),t()(),n(3576,"td",24)(3577,"em")(3578,"strong"),e(3579,"(opcional)"),t()(),n(3580,"p"),e(3581,"Tamanho m\xEDnimo de caracteres."),t(),n(3582,"p")(3583,"strong"),e(3584,"Componentes compat\xEDveis:"),t(),n(3585,"code"),e(3586,"po-input"),t(),e(3587,", "),n(3588,"code"),e(3589,"po-number"),t(),e(3590,", "),n(3591,"code"),e(3592,"po-decimal"),t(),e(3593,", "),n(3594,"code"),e(3595,"po-textarea"),t(),e(3596,", "),n(3597,"code"),e(3598,"po-password"),t(),e(3599,"."),t()()(),n(3600,"tr",16)(3601,"td",17)(3602,"div",25)(3603,"span",26),e(3604," minValue"),i(3605,"br"),t()()(),n(3606,"td",21)(3607,"code",27),e(3608,"string "),t(),n(3609,"code",45),e(3610," number"),t()(),n(3611,"td",24)(3612,"em")(3613,"strong"),e(3614,"(opcional)"),t()(),n(3615,"p"),e(3616,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(3617,"em"),e(3618,"number"),t(),e(3619,", "),n(3620,"em"),e(3621,"date"),t(),e(3622," ou "),n(3623,"em"),e(3624,"dateTime"),t(),e(3625,"."),t(),n(3626,"p")(3627,"strong"),e(3628,"Componentes compat\xEDveis:"),t(),n(3629,"code"),e(3630,"po-datepicker"),t(),e(3631,", "),n(3632,"code"),e(3633,"po-datepicker-range"),t(),e(3634,", "),n(3635,"code"),e(3636,"po-number"),t(),e(3637,", "),n(3638,"code"),e(3639,"po-decimal"),t()()()(),n(3640,"tr",16)(3641,"td",17)(3642,"div",25)(3643,"span",26),e(3644," multiple"),i(3645,"br"),t()()(),n(3646,"td",21)(3647,"code",29),e(3648,"boolean"),t()(),n(3649,"td",24)(3650,"em")(3651,"strong"),e(3652,"(opcional)"),t()(),n(3653,"p"),e(3654,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),n(3655,"p")(3656,"strong"),e(3657,"Componentes compat\xEDveis:"),t(),n(3658,"code"),e(3659,"po-lookup"),t(),e(3660,", "),n(3661,"code"),e(3662,"po-upload"),t()()()(),n(3663,"tr",16)(3664,"td",17)(3665,"div",25)(3666,"span",26),e(3667," noAutocomplete"),i(3668,"br"),t()()(),n(3669,"td",21)(3670,"code",29),e(3671,"boolean"),t()(),n(3672,"td",24)(3673,"em")(3674,"strong"),e(3675,"(opcional)"),t()(),n(3676,"p"),e(3677,"Define a propriedade nativa "),n(3678,"code"),e(3679,"autocomplete"),t(),e(3680," do campo como off."),t(),n(3681,"p")(3682,"strong"),e(3683,"Componentes compat\xEDveis:"),t(),n(3684,"code"),e(3685,"po-datepicker"),t(),e(3686,", "),n(3687,"code"),e(3688,"po-datepicker-range"),t(),e(3689,", "),n(3690,"code"),e(3691,"po-input"),t(),e(3692,", "),n(3693,"code"),e(3694,"po-number"),t(),e(3695,", "),n(3696,"code"),e(3697,"po-decimal"),t(),e(3698,", "),n(3699,"code"),e(3700,"po-lookup"),t(),e(3701,", "),n(3702,"code"),e(3703,"po-password"),t()()()(),n(3704,"tr",16)(3705,"td",17)(3706,"div",25)(3707,"span",26),e(3708," offsetColumns"),i(3709,"br"),t()()(),n(3710,"td",21)(3711,"code",45),e(3712,"number"),t()(),n(3713,"td",24)(3714,"em")(3715,"strong"),e(3716,"(opcional)"),t()(),n(3717,"p"),e(3718,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),n(3719,"p"),e(3720,"Deve ser usado o sistema de "),n(3721,"strong"),e(3722,"grid"),t(),e(3723," do PO (1 ... 12 colunas)."),t(),n(3724,"blockquote")(3725,"p"),e(3726,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(3727,"tr",16)(3728,"td",17)(3729,"div",25)(3730,"span",26),e(3731," offsetLgColumns"),i(3732,"br"),t()()(),n(3733,"td",21)(3734,"code",45),e(3735,"number"),t()(),n(3736,"td",24)(3737,"em")(3738,"strong"),e(3739,"(opcional)"),t()(),n(3740,"p"),e(3741,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(3742,"p"),e(3743,"Deve ser usado o sistema de "),n(3744,"strong"),e(3745,"grid"),t(),e(3746," do PO (1 ... 12 colunas)."),t(),n(3747,"blockquote")(3748,"p"),e(3749,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3750,"code"),e(3751,"offsetColumns"),t(),e(3752,"."),t()()()(),n(3753,"tr",16)(3754,"td",17)(3755,"div",25)(3756,"span",26),e(3757," offsetMdColumns"),i(3758,"br"),t()()(),n(3759,"td",21)(3760,"code",45),e(3761,"number"),t()(),n(3762,"td",24)(3763,"em")(3764,"strong"),e(3765,"(opcional)"),t()(),n(3766,"p"),e(3767,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(3768,"p"),e(3769,"Deve ser usado o sistema de "),n(3770,"strong"),e(3771,"grid"),t(),e(3772," do PO (1 ... 12 colunas)."),t(),n(3773,"blockquote")(3774,"p"),e(3775,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3776,"code"),e(3777,"offsetColumns"),t(),e(3778,"."),t()()()(),n(3779,"tr",16)(3780,"td",17)(3781,"div",25)(3782,"span",26),e(3783," offsetSmColumns"),i(3784,"br"),t()()(),n(3785,"td",21)(3786,"code",45),e(3787,"number"),t()(),n(3788,"td",24)(3789,"em")(3790,"strong"),e(3791,"(opcional)"),t()(),n(3792,"p"),e(3793,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(3794,"p"),e(3795,"Deve ser usado o sistema de "),n(3796,"strong"),e(3797,"grid"),t(),e(3798," do PO (1 ... 12 colunas)."),t(),n(3799,"blockquote")(3800,"p"),e(3801,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3802,"code"),e(3803,"offsetColumns"),t(),e(3804,"."),t()()()(),n(3805,"tr",16)(3806,"td",17)(3807,"div",25)(3808,"span",26),e(3809," offsetXlColumns"),i(3810,"br"),t()()(),n(3811,"td",21)(3812,"code",45),e(3813,"number"),t()(),n(3814,"td",24)(3815,"em")(3816,"strong"),e(3817,"(opcional)"),t()(),n(3818,"p"),e(3819,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(3820,"p"),e(3821,"Deve ser usado o sistema de "),n(3822,"strong"),e(3823,"grid"),t(),e(3824," do PO (1 ... 12 colunas)."),t(),n(3825,"blockquote")(3826,"p"),e(3827,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3828,"code"),e(3829,"offsetColumns"),t(),e(3830,"."),t()()()(),n(3831,"tr",16)(3832,"td",17)(3833,"div",25)(3834,"span",26),e(3835," onError"),i(3836,"br"),t()()(),n(3837,"td",21)(3838,"code",44),e(3839,"Function"),t()(),n(3840,"td",24)(3841,"em")(3842,"strong"),e(3843,"(opcional)"),t()(),n(3844,"p"),e(3845,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(3846,"blockquote")(3847,"p"),e(3848,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3849,"code"),e(3850,"HttpErrorResponse"),t(),e(3851,"."),t()(),n(3852,"p")(3853,"strong"),e(3854,"Componente compat\xEDvel"),t(),e(3855,": "),n(3856,"code"),e(3857,"po-upload"),t()()()(),n(3858,"tr",16)(3859,"td",17)(3860,"div",25)(3861,"span",26),e(3862," onSuccess"),i(3863,"br"),t()()(),n(3864,"td",21)(3865,"code",44),e(3866,"Function"),t()(),n(3867,"td",24)(3868,"em")(3869,"strong"),e(3870,"(opcional)"),t()(),n(3871,"p"),e(3872,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(3873,"blockquote")(3874,"p"),e(3875,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3876,"code"),e(3877,"HttpResponse"),t(),e(3878,"."),t()(),n(3879,"p")(3880,"strong"),e(3881,"Componente compat\xEDvel"),t(),e(3882,": "),n(3883,"code"),e(3884,"po-upload"),t()()()(),n(3885,"tr",16)(3886,"td",17)(3887,"div",25)(3888,"span",26),e(3889," onUpload"),i(3890,"br"),t()()(),n(3891,"td",21)(3892,"code",44),e(3893,"Function"),t()(),n(3894,"td",24)(3895,"em")(3896,"strong"),e(3897,"(opcional)"),t()(),n(3898,"p"),e(3899,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(3900,"pre")(3901,"code"),e(3902,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),n(3903,"p")(3904,"strong"),e(3905,"Componente compat\xEDvel"),t(),e(3906,": "),n(3907,"code"),e(3908,"po-upload"),t()()()(),n(3909,"tr",16)(3910,"td",17)(3911,"div",25)(3912,"span",26),e(3913," optional"),i(3914,"br"),t()()(),n(3915,"td",21)(3916,"code",29),e(3917,"boolean"),t()(),n(3918,"td",24)(3919,"em")(3920,"strong"),e(3921,"(opcional)"),t()(),n(3922,"p"),e(3923,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(3924,"blockquote")(3925,"p"),e(3926,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),n(3927,"ul")(3928,"li"),e(3929,"O campo for "),n(3930,"code"),e(3931,"required"),t(),e(3932,", ou;"),t(),n(3933,"li"),e(3934,"N\xE3o possuir "),n(3935,"code"),e(3936,"help"),t(),e(3937," e "),n(3938,"code"),e(3939,"label"),t(),e(3940,"."),t()()()(),n(3941,"tr",16)(3942,"td",17)(3943,"div",25)(3944,"span",26),e(3945," options"),i(3946,"br"),t()()(),n(3947,"td",21)(3948,"code",32),e(3949,"Array<string> "),t(),n(3950,"code",68),e(3951," Array<PoSelectOption> "),t(),n(3952,"code",69),e(3953," Array<PoMultiselectOption> "),t(),n(3954,"code",70),e(3955," Array<PoCheckboxGroupOption> "),t(),n(3956,"code",71),e(3957," Array<any>"),t()(),n(3958,"td",24)(3959,"em")(3960,"strong"),e(3961,"(opcional)"),t()(),n(3962,"p"),e(3963,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),n(3964,"p")(3965,"strong"),e(3966,"Componentes compat\xEDveis:"),t(),n(3967,"code"),e(3968,"po-select"),t(),e(3969,", "),n(3970,"code"),e(3971,"po-radio-group"),t(),e(3972,", "),n(3973,"code"),e(3974,"po-checkbox-group"),t(),e(3975,", "),n(3976,"code"),e(3977,"po-multiselect"),t(),e(3978,"."),t()()(),n(3979,"tr",16)(3980,"td",17)(3981,"div",25)(3982,"span",26),e(3983," optionsMulti"),i(3984,"br"),t()()(),n(3985,"td",21)(3986,"code",29),e(3987,"boolean"),t()(),n(3988,"td",24)(3989,"em")(3990,"strong"),e(3991,"(opcional)"),t()(),n(3992,"p"),e(3993,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),n(3994,"tr",16)(3995,"td",17)(3996,"div",25)(3997,"span",26),e(3998," optionsService"),i(3999,"br"),t()()(),n(4e3,"td",21)(4001,"code",27),e(4002,"string "),t(),n(4003,"code",72),e(4004," PoComboFilter "),t(),n(4005,"code",73),e(4006," PoMultiselectFilter"),t()(),n(4007,"td",24)(4008,"em")(4009,"strong"),e(4010,"(opcional)"),t()(),n(4011,"p"),e(4012,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),n(4013,"strong"),e(4014,"Importante"),t()(),n(4015,"blockquote")(4016,"p"),e(4017,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),n(4018,"a",7),e(4019,"guia de API do PO UI"),t(),e(4020,"."),t()()()(),n(4021,"tr",16)(4022,"td",17)(4023,"div",25)(4024,"span",26),e(4025," order"),i(4026,"br"),t()()(),n(4027,"td",21)(4028,"code",45),e(4029,"number"),t()(),n(4030,"td",24)(4031,"em")(4032,"strong"),e(4033,"(opcional)"),t()(),n(4034,"p"),e(4035,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),n(4036,"p"),e(4037,"Exemplo de utiliza\xE7\xE3o:"),t(),n(4038,"p")(4039,"code"),e(4040,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),n(4041,"p"),e(4042,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),n(4043,"code"),e(4044,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),n(4045,"p"),e(4046,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),n(4047,"p"),e(4048,"Campos sem "),n(4049,"code"),e(4050,"order"),t(),e(4051,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),n(4052,"tr",16)(4053,"td",17)(4054,"div",25)(4055,"span",26),e(4056," params"),i(4057,"br"),t()()(),n(4058,"td",21)(4059,"code",33),e(4060,"any"),t()(),n(4061,"td",24)(4062,"em")(4063,"strong"),e(4064,"(opcional)"),t()(),n(4065,"p"),e(4066,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),n(4067,"code"),e(4068,"po-lookup"),t(),e(4069,` e
`),n(4070,"code"),e(4071,"po-combo"),t(),e(4072,"."),t(),n(4073,"p"),e(4074,"Por exemplo, para o par\xE2metro "),n(4075,"code"),e(4076,"{ age: 23 }"),t(),e(4077," a URL da requisi\xE7\xE3o ficaria:"),t(),n(4078,"p")(4079,"code"),e(4080,"url + ?age=23&filter=Peter"),t()()()(),n(4081,"tr",16)(4082,"td",17)(4083,"div",25)(4084,"span",26),e(4085," pattern"),i(4086,"br"),t()()(),n(4087,"td",21)(4088,"code",27),e(4089,"string"),t()(),n(4090,"td",24)(4091,"em")(4092,"strong"),e(4093,"(opcional)"),t()(),n(4094,"p"),e(4095,"Regex para valida\xE7\xE3o do campo."),t(),n(4096,"p")(4097,"strong"),e(4098,"Componentes compat\xEDveis:"),t(),n(4099,"code"),e(4100,"po-input"),t(),e(4101,", "),n(4102,"code"),e(4103,"po-password"),t(),e(4104,"."),t()()(),n(4105,"tr",16)(4106,"td",17)(4107,"div",25)(4108,"span",26),e(4109," placeholder"),i(4110,"br"),t()()(),n(4111,"td",21)(4112,"code",27),e(4113,"string"),t()(),n(4114,"td",24)(4115,"em")(4116,"strong"),e(4117,"(opcional)"),t()(),n(4118,"p"),e(4119,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),n(4120,"tr",16)(4121,"td",17)(4122,"div",25)(4123,"span",26),e(4124," placeholderSearch"),i(4125,"br"),t()()(),n(4126,"td",21)(4127,"code",27),e(4128,"string"),t()(),n(4129,"td",24)(4130,"em")(4131,"strong"),e(4132,"(opcional)"),t()(),n(4133,"p"),e(4134,"Placeholder do campo de pesquisa do "),n(4135,"code"),e(4136,"po-multiselect"),t(),e(4137,"."),t(),n(4138,"blockquote")(4139,"p"),e(4140,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),n(4141,"tr",16)(4142,"td",17)(4143,"div",25)(4144,"span",26),e(4145," property"),i(4146,"br"),t()()(),n(4147,"td",21)(4148,"code",27),e(4149,"string"),t()(),n(4150,"td",24)(4151,"p"),e(4152,"Nome de refer\xEAncia do campo."),t()()(),n(4153,"tr",16)(4154,"td",17)(4155,"div",25)(4156,"span",26),e(4157," range"),i(4158,"br"),t()()(),n(4159,"td",21)(4160,"code",29),e(4161,"boolean"),t()(),n(4162,"td",24)(4163,"em")(4164,"strong"),e(4165,"(opcional)"),t()(),n(4166,"p"),e(4167,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),n(4168,"blockquote")(4169,"p"),e(4170,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),n(4171,"tr",16)(4172,"td",17)(4173,"div",25)(4174,"span",26),e(4175," readonly"),i(4176,"br"),t()()(),n(4177,"td",21)(4178,"code",29),e(4179,"boolean"),t()(),n(4180,"td",24)(4181,"em")(4182,"strong"),e(4183,"(opcional)"),t()(),n(4184,"p"),e(4185,"Indica que o campo ser\xE1 somente leitura."),t(),n(4186,"p")(4187,"strong"),e(4188,"Componentes compat\xEDveis:"),t(),n(4189,"code"),e(4190,"po-datepicker"),t(),e(4191,", "),n(4192,"code"),e(4193,"po-datepicker-range"),t(),e(4194,", "),n(4195,"code"),e(4196,"po-input"),t(),e(4197,", "),n(4198,"code"),e(4199,"po-number"),t(),e(4200,", "),n(4201,"code"),e(4202,"po-decimal"),t(),e(4203,", "),n(4204,"code"),e(4205,"po-select"),t(),e(4206,", "),n(4207,"code"),e(4208,"po-textarea"),t(),e(4209,", "),n(4210,"code"),e(4211,"po-password"),t()()()(),n(4212,"tr",16)(4213,"td",17)(4214,"div",25)(4215,"span",26),e(4216," removeInitialFilter"),i(4217,"br"),t()()(),n(4218,"td",21)(4219,"code",29),e(4220,"boolean"),t()(),n(4221,"td",24)(4222,"em")(4223,"strong"),e(4224,"(opcional)"),t()(),n(4225,"p"),e(4226,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),n(4227,"blockquote")(4228,"p"),e(4229,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),n(4230,"p")(4231,"strong"),e(4232,"Componente compat\xEDvel"),t(),e(4233,": "),n(4234,"code"),e(4235,"po-combo"),t()()()(),n(4236,"tr",16)(4237,"td",17)(4238,"div",25)(4239,"span",26),e(4240," required"),i(4241,"br"),t()()(),n(4242,"td",21)(4243,"code",29),e(4244,"boolean"),t()(),n(4245,"td",24)(4246,"em")(4247,"strong"),e(4248,"(opcional)"),t()(),n(4249,"p"),e(4250,"Define a obrigatoriedade do campo."),t()()(),n(4251,"tr",16)(4252,"td",17)(4253,"div",25)(4254,"span",26),e(4255," requiredFieldErrorMessage"),i(4256,"br"),t()()(),n(4257,"td",21)(4258,"code",29),e(4259,"boolean"),t()(),n(4260,"td",24)(4261,"em")(4262,"strong"),e(4263,"(opcional)"),t()(),n(4264,"p"),e(4265,"Exibe a mensagem setada na propriedade "),n(4266,"code"),e(4267,"errorMessage"),t(),e(4268," se o campo estiver vazio e for requerido."),t(),n(4269,"blockquote")(4270,"p"),e(4271,"Necess\xE1rio que a propriedade "),n(4272,"code"),e(4273,"required"),t(),e(4274," esteja habilitada."),t()(),n(4275,"p")(4276,"strong"),e(4277,"Componentes compat\xEDveis:"),t(),n(4278,"code"),e(4279,"po-datepicker"),t(),e(4280,", "),n(4281,"code"),e(4282,"po-input"),t(),e(4283,", "),n(4284,"code"),e(4285,"po-number"),t(),e(4286,", "),n(4287,"code"),e(4288,"po-decimal"),t(),e(4289,", "),n(4290,"code"),e(4291,"po-password"),t(),e(4292,"."),t()()(),n(4293,"tr",16)(4294,"td",17)(4295,"div",25)(4296,"span",26),e(4297," restrictions"),i(4298,"br"),t()()(),n(4299,"td",21)(4300,"code",74),e(4301,"PoUploadFileRestrictions"),t()(),n(4302,"td",24)(4303,"em")(4304,"strong"),e(4305,"(opcional)"),t()(),n(4306,"p"),e(4307,"Objeto que segue a defini\xE7\xE3o da interface "),n(4308,"code"),e(4309,"PoUploadFileRestrictions"),t(),e(4310,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),n(4311,"p")(4312,"strong"),e(4313,"Componente compat\xEDvel"),t(),e(4314,": "),n(4315,"code"),e(4316,"po-upload"),t()()()(),n(4317,"tr",16)(4318,"td",17)(4319,"div",25)(4320,"span",26),e(4321," rows"),i(4322,"br"),t()()(),n(4323,"td",21)(4324,"code",45),e(4325,"number"),t()(),n(4326,"td",24)(4327,"em")(4328,"strong"),e(4329,"(opcional)"),t()(),n(4330,"p"),e(4331,"Quantidade de linhas exibidas no "),n(4332,"code"),e(4333,"po-textarea"),t(),e(4334,"."),t()()(),n(4335,"tr",16)(4336,"td",17)(4337,"div",25)(4338,"span",26),e(4339," searchService"),i(4340,"br"),t()()(),n(4341,"td",21)(4342,"code",27),e(4343,"string "),t(),n(4344,"code",34),e(4345," PoLookupFilter"),t()(),n(4346,"td",24)(4347,"em")(4348,"strong"),e(4349,"(opcional)"),t()(),n(4350,"p"),e(4351,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),n(4352,"code"),e(4353,"columns"),t(),e(4354,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),n(4355,"strong"),e(4356,"Importante:"),t()(),n(4357,"blockquote")(4358,"p"),e(4359,"Caso utilizar a propriedade "),n(4360,"code"),e(4361,"optionsService"),t(),e(4362,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),n(4363,"a",7),e(4364,"guia de API do PO UI"),t(),e(4365,"."),t()()()(),n(4366,"tr",16)(4367,"td",17)(4368,"div",25)(4369,"span",26),e(4370," secret"),i(4371,"br"),t()()(),n(4372,"td",21)(4373,"code",29),e(4374,"boolean"),t()(),n(4375,"td",24)(4376,"em")(4377,"strong"),e(4378,"(opcional)"),t()(),n(4379,"p"),e(4380,"Esconde a informa\xE7\xE3o estilo "),n(4381,"em"),e(4382,"password"),t(),e(4383,", pode ser utilizado quando o tipo de dado for "),n(4384,"em"),e(4385,"string"),t(),e(4386,"."),t()()(),n(4387,"tr",16)(4388,"td",17)(4389,"div",25)(4390,"span",26),e(4391," showRequired"),i(4392,"br"),t()()(),n(4393,"td",21)(4394,"code",29),e(4395,"boolean"),t()(),n(4396,"td",24)(4397,"em")(4398,"strong"),e(4399,"(opcional)"),t()(),n(4400,"p"),e(4401,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(4402,"blockquote")(4403,"p"),e(4404,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(4405,"ul")(4406,"li"),e(4407,"N\xE3o possuir "),n(4408,"code"),e(4409,"p-help"),t(),e(4410," e/ou "),n(4411,"code"),e(4412,"p-label"),t(),e(4413,"."),t()()()(),n(4414,"tr",16)(4415,"td",17)(4416,"div",25)(4417,"span",26),e(4418," showThumbnail"),i(4419,"br"),t()()(),n(4420,"td",21)(4421,"code",29),e(4422,"boolean"),t()(),n(4423,"td",24)(4424,"em")(4425,"strong"),e(4426,"(opcional)"),t()(),n(4427,"p"),e(4428,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),t(),n(4429,"blockquote")(4430,"p"),e(4431,"Propriedade funciona apenas em arquivos de formato de imagem ("),n(4432,"code"),e(4433,".png"),t(),e(4434,", "),n(4435,"code"),e(4436,".jpg"),t(),e(4437,", "),n(4438,"code"),e(4439,".jpeg"),t(),e(4440," e "),n(4441,"code"),e(4442,".gif"),t(),e(4443,")."),t()(),n(4444,"p")(4445,"strong"),e(4446,"Componente compat\xEDvel"),t(),e(4447,": "),n(4448,"code"),e(4449,"po-upload"),t()()()(),n(4450,"tr",16)(4451,"td",17)(4452,"div",25)(4453,"span",26),e(4454," size"),i(4455,"br"),t()()(),n(4456,"td",21)(4457,"code",27),e(4458,"string"),t()(),n(4459,"td",24)(4460,"em")(4461,"strong"),e(4462,"(opcional)"),t()(),n(4463,"p"),e(4464,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),n(4465,"ul")(4466,"li")(4467,"code"),e(4468,"small"),t(),e(4469,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(4470,"li")(4471,"code"),e(4472,"medium"),t(),e(4473,": aplica a medida medium de cada componente."),t(),n(4474,"li")(4475,"code"),e(4476,"large"),t(),e(4477,": aplica a medida large de cada componente (dispon\xEDvel para "),n(4478,"code"),e(4479,"po-checkbox"),t(),e(4480," e "),n(4481,"code"),e(4482,"po-radio-group"),t(),e(4483,")."),n(4484,"blockquote")(4485,"p"),e(4486,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(4487,"code"),e(4488,"medium"),t(),e(4489,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(4490,"a",40),e(4491,"po-theme"),t(),e(4492,"."),t()()()()()(),n(4493,"tr",16)(4494,"td",17)(4495,"div",25)(4496,"span",26),e(4497," sort"),i(4498,"br"),t()()(),n(4499,"td",21)(4500,"code",29),e(4501,"boolean"),t()(),n(4502,"td",24)(4503,"em")(4504,"strong"),e(4505,"(opcional)"),t()(),n(4506,"p"),e(4507,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),n(4508,"p")(4509,"strong"),e(4510,"Componentes compat\xEDveis:"),t(),n(4511,"code"),e(4512,"po-combo"),t(),e(4513,", po-multiselect"),t()()(),n(4514,"tr",16)(4515,"td",17)(4516,"div",25)(4517,"span",26),e(4518," step"),i(4519,"br"),t()()(),n(4520,"td",21)(4521,"code",45),e(4522,"number"),t()(),n(4523,"td",24)(4524,"em")(4525,"strong"),e(4526,"(opcional)"),t()(),n(4527,"p"),e(4528,"Intervalo utilizado no "),n(4529,"code"),e(4530,"po-number"),t(),e(4531,"."),t()()(),n(4532,"tr",16)(4533,"td",17)(4534,"div",25)(4535,"span",26),e(4536," thousandMaxlength"),i(4537,"br"),t()()(),n(4538,"td",21)(4539,"code",45),e(4540,"number"),t()(),n(4541,"td",24)(4542,"em")(4543,"strong"),e(4544,"(opcional)"),t()(),n(4545,"p"),e(4546,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),n(4547,"blockquote")(4548,"p"),e(4549,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(4550,"code"),e(4551,"type"),t(),e(4552," for "),n(4553,"em"),e(4554,"currency"),t(),e(4555," ou "),n(4556,"em"),e(4557,"decimal"),t(),e(4558,"."),t()()()(),n(4559,"tr",16)(4560,"td",17)(4561,"div",25)(4562,"span",26),e(4563," type"),i(4564,"br"),t()()(),n(4565,"td",21)(4566,"code",27),e(4567,"string "),t(),n(4568,"code",75),e(4569," PoDynamicFieldType"),t()(),n(4570,"td",24)(4571,"em")(4572,"strong"),e(4573,"(opcional)"),t()(),n(4574,"p"),e(4575,"Tipo do valor campo."),t(),n(4576,"p"),e(4577,"Valores v\xE1lidos:"),t(),n(4578,"ul")(4579,"li")(4580,"code"),e(4581,"boolean"),t(),e(4582,": Valores "),n(4583,"em"),e(4584,"booleanos"),t(),e(4585,"."),t(),n(4586,"li")(4587,"code"),e(4588,"currency"),t(),e(4589,": Valores monet\xE1rios."),t(),n(4590,"li")(4591,"code"),e(4592,"decimal"),t(),e(4593,": Valores decimais."),t(),n(4594,"li")(4595,"code"),e(4596,"date"),t(),e(4597,": Valores de datas."),n(4598,"ul")(4599,"li"),e(4600,"Aceita os tipos "),n(4601,"strong"),e(4602,"string"),t(),e(4603," e "),n(4604,"strong"),e(4605,"Date"),t(),e(4606,` padr\xE3o do Javascript,
por exemplo: `),n(4607,"code"),e(4608,"'2017-11-28'"),t(),e(4609," ou "),n(4610,"code"),e(4611,"new Date(2017, 10, 28)"),t(),e(4612,"."),t()()(),n(4613,"li")(4614,"code"),e(4615,"dateTime"),t(),e(4616,": Valor de data com hor\xE1rio."),n(4617,"ul")(4618,"li"),e(4619,"Aceita o tipo "),n(4620,"em"),e(4621,"string"),t(),e(4622," no formato "),n(4623,"strong"),e(4624,"ISO-8601"),t(),e(4625," extendido "),n(4626,"strong"),e(4627,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4628,`
e o tipo `),n(4629,"strong"),e(4630,"Date"),t(),e(4631," padr\xE3o do Javascript, por exemplo: "),n(4632,"code"),e(4633,"'2017-11-28T00:00:00-02:00'"),t(),e(4634," ou "),n(4635,"code"),e(4636,"new Date(2017, 10, 28)"),t(),e(4637,"."),t()()(),n(4638,"li")(4639,"code"),e(4640,"number"),t(),e(4641,": Valores num\xE9ricos."),t(),n(4642,"li")(4643,"code"),e(4644,"string"),t(),e(4645,": Textos."),t(),n(4646,"li")(4647,"code"),e(4648,"time"),t(),e(4649,": Valor do hor\xE1rio."),n(4650,"ul")(4651,"li"),e(4652,"Aceita o tipo "),n(4653,"strong"),e(4654,"string"),t(),e(4655," nos formatos "),n(4656,"strong"),e(4657,"'HH:mm:ss'"),t(),e(4658," ou "),n(4659,"strong"),e(4660,"'HH:mm:ss.ffffff'"),t(),e(4661,", por exemplo: "),n(4662,"code"),e(4663,"'23:12:45'"),t(),e(4664,"."),t()()()()()(),n(4665,"tr",16)(4666,"td",17)(4667,"div",25)(4668,"span",26),e(4669," url"),i(4670,"br"),t()()(),n(4671,"td",21)(4672,"code",27),e(4673,"string"),t()(),n(4674,"td",24)(4675,"em")(4676,"strong"),e(4677,"(opcional)"),t()(),n(4678,"p"),e(4679,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),n(4680,"p")(4681,"strong"),e(4682,"Componente compat\xEDvel"),t(),e(4683,": "),n(4684,"code"),e(4685,"po-upload"),t()()()(),n(4686,"tr",16)(4687,"td",17)(4688,"div",25)(4689,"span",26),e(4690," validate"),i(4691,"br"),t()()(),n(4692,"td",21)(4693,"code",27),e(4694,"string "),t(),n(4695,"code",44),e(4696," Function"),t()(),n(4697,"td",24)(4698,"em")(4699,"strong"),e(4700,"(opcional)"),t()(),n(4701,"p"),e(4702,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(4703,"strong"),e(4704,"mudan\xE7as do campo"),t(),e(4705,"."),t(),n(4706,"ul")(4707,"li"),e(4708,"A propriedade aceita os seguintes tipos:"),t()(),n(4709,"ul")(4710,"li")(4711,"strong"),e(4712,"String"),t(),e(4713,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),n(4714,"code"),e(4715,"POST"),t(),e(4716,"."),t(),n(4717,"li")(4718,"strong"),e(4719,"Function"),t(),e(4720,": M\xE9todo que ser\xE1 executado."),t()(),n(4721,"p"),e(4722,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),n(4723,"code"),e(4724,"PoDynamicFormFieldChanged"),t(),e(4725,":"),t(),n(4726,"p")(4727,"code"),e(4728,"{ property: 'property name', value: 'new value' }"),t()(),n(4729,"p"),e(4730,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(4731,"a",76),e(4732,"PoDynamicFormFieldValidation"),t(),e(4733,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),n(4734,"pre")(4735,"code"),e(4736,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),n(4737,"p"),e(4738,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(4739,"code"),e(4740,"bind"),t(),e(4741,`, por exemplo:
`),n(4742,"code"),e(4743,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),n(4744,"tr",16)(4745,"td",17)(4746,"div",25)(4747,"span",26),e(4748," visible"),i(4749,"br"),t()()(),n(4750,"td",21)(4751,"code",29),e(4752,"boolean"),t()(),n(4753,"td",24)(4754,"em")(4755,"strong"),e(4756,"(opcional)"),t()(),n(4757,"p"),e(4758,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),n(4759,"h4",43)(4760,"code",5),e(4761,"PoLookupColumn"),t()(),n(4762,"div",2)(4763,"p"),e(4764,"Interface para configura\xE7\xE3o das colunas do po-lookup."),t()(),n(4765,"h4",12),e(4766,"Propriedades"),t(),n(4767,"table",13)(4768,"tr",14)(4769,"th",15),e(4770,"Nome"),t(),n(4771,"th",15),e(4772,"Tipo"),t(),n(4773,"th",15),e(4774,"Descri\xE7\xE3o"),t()(),n(4775,"tr",16)(4776,"td",17)(4777,"div",25)(4778,"span",26),e(4779," fieldLabel"),i(4780,"br"),t()()(),n(4781,"td",21)(4782,"code",29),e(4783,"boolean"),t()(),n(4784,"td",24)(4785,"em")(4786,"strong"),e(4787,"(opcional)"),t()(),n(4788,"p"),e(4789,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),t(),n(4790,"p"),e(4791,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),t(),n(4792,"p"),e(4793,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),n(4794,"code"),e(4795,"p-field-format"),t(),e(4796," ou "),n(4797,"code"),e(4798,"p-field-label"),t(),e(4799," forem configurados no componente."),t()()(),n(4800,"tr",16)(4801,"td",17)(4802,"div",25)(4803,"span",26),e(4804," format"),i(4805,"br"),t()()(),n(4806,"td",21)(4807,"code",27),e(4808,"string"),t()(),n(4809,"td",24)(4810,"em")(4811,"strong"),e(4812,"(opcional)"),t()(),n(4813,"p"),e(4814,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),n(4815,"ul")(4816,"li"),e(4817,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),n(4818,"li"),e(4819,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),n(4820,"tr",16)(4821,"td",17)(4822,"div",25)(4823,"span",26),e(4824," label"),i(4825,"br"),t()()(),n(4826,"td",21)(4827,"code",27),e(4828,"string"),t()(),n(4829,"td",24)(4830,"em")(4831,"strong"),e(4832,"(opcional)"),t()(),n(4833,"p"),e(4834,"Texto para t\xEDtulo da coluna."),t(),n(4835,"p"),e(4836,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),n(4837,"em"),e(4838,"label"),t(),e(4839," o valor da propriedade "),n(4840,"em"),e(4841,"property"),t(),e(4842," com a primeira letra em mai\xFAsculo."),t()()(),n(4843,"tr",16)(4844,"td",17)(4845,"div",25)(4846,"span",26),e(4847," property"),i(4848,"br"),t()()(),n(4849,"td",21)(4850,"code",27),e(4851,"string"),t()(),n(4852,"td",24)(4853,"em")(4854,"strong"),e(4855,"(opcional)"),t()(),n(4856,"p"),e(4857,"Nome identificador da coluna."),t()()(),n(4858,"tr",16)(4859,"td",17)(4860,"div",25)(4861,"span",26),e(4862," type"),i(4863,"br"),t()()(),n(4864,"td",21)(4865,"code",27),e(4866,"string"),t()(),n(4867,"td",24)(4868,"em")(4869,"strong"),e(4870,"(opcional)"),t()(),n(4871,"p"),e(4872,"Tipo da coluna:"),t(),n(4873,"ul")(4874,"li"),e(4875,"string (padr\xE3o): textos"),t(),n(4876,"li"),e(4877,"number: valores num\xE9ricos"),t(),n(4878,"li"),e(4879,"date: data"),t(),n(4880,"li"),e(4881,"currency: valores monet\xE1rios"),t(),n(4882,"li"),e(4883,"dateTime: data e hora"),t()()()(),n(4884,"tr",16)(4885,"td",17)(4886,"div",25)(4887,"span",26),e(4888," width"),i(4889,"br"),t()()(),n(4890,"td",21)(4891,"code",27),e(4892,"string"),t()(),n(4893,"td",24)(4894,"em")(4895,"strong"),e(4896,"(opcional)"),t()(),n(4897,"p"),e(4898,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()(),n(4899,"h4",43)(4900,"code",5),e(4901,"PoLookupFilter"),t()(),n(4902,"div",2)(4903,"p"),e(4904,"Define o tipo de busca utilizado no po-lookup."),t()(),n(4905,"h4",12),e(4906,"M\xE9todos"),t(),n(4907,"table",41)(4908,"tr",16)(4909,"th",42)(4910,"div",25)(4911,"h4")(4912,"span",26),e(4913," getFilteredItems "),t()()()()(),n(4914,"tr",24)(4915,"td",24)(4916,"p"),e(4917,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),n(4918,"em"),e(4919,"Observable"),t(),e(4920," com a resposta da API no formato da interface "),n(4921,"code"),e(4922,"PoLookupResponseApi"),t(),e(4923,"."),t()()()(),n(4924,"h5")(4925,"b"),e(4926,"Par\xE2metros"),t()(),n(4927,"table",13)(4928,"tr",14)(4929,"th",15),e(4930,"Nome"),t(),n(4931,"th",15),e(4932,"Tipo"),t(),n(4933,"th",15),e(4934,"Descri\xE7\xE3o"),t()(),n(4935,"tr",16)(4936,"td",17),e(4937," params"),t(),n(4938,"td",21)(4939,"code",77),e(4940," PoLookupFilteredItemsParams "),t()(),n(4941,"td",24)(4942,"p"),e(4943,"Objeto enviado por par\xE2metro que implementa a interface "),n(4944,"code"),e(4945,"PoLookupFilteredItemsParams"),t(),e(4946,"."),t()()()(),i(4947,"br"),n(4948,"table",41)(4949,"tr",16)(4950,"th",42)(4951,"div",25)(4952,"h4")(4953,"span",26),e(4954," getObjectByValue "),t()()()()(),n(4955,"tr",24)(4956,"td",24)(4957,"p"),e(4958,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),n(4959,"p"),e(4960,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),t()()()(),n(4961,"h5")(4962,"b"),e(4963,"Par\xE2metros"),t()(),n(4964,"table",13)(4965,"tr",14)(4966,"th",15),e(4967,"Nome"),t(),n(4968,"th",15),e(4969,"Tipo"),t(),n(4970,"th",15),e(4971,"Descri\xE7\xE3o"),t()(),n(4972,"tr",16)(4973,"td",17),e(4974," value"),t(),n(4975,"td",21)(4976,"code",27),e(4977," string "),t(),n(4978,"code",71),e(4979," Array<any> "),t()(),n(4980,"td",24)(4981,"p"),e(4982,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),n(4983,"tr",16)(4984,"td",17),e(4985," filterParams"),t(),n(4986,"td",21)(4987,"code",77),e(4988," any "),t()(),n(4989,"td",24)(4990,"p"),e(4991,"Valor informado atrav\xE9s da propriedade "),n(4992,"code"),e(4993,"p-filter-params"),t(),e(4994,"."),t()()()(),i(4995,"br"),n(4996,"h4",43)(4997,"code",5),e(4998,"PoLookupFilteredItemsParams"),t()(),n(4999,"div",2)(5e3,"p"),e(5001,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),n(5002,"code"),e(5003,"getFilteredItems"),t(),e(5004,"."),t()(),n(5005,"h4",12),e(5006,"Propriedades"),t(),n(5007,"table",13)(5008,"tr",14)(5009,"th",15),e(5010,"Nome"),t(),n(5011,"th",15),e(5012,"Tipo"),t(),n(5013,"th",15),e(5014,"Descri\xE7\xE3o"),t()(),n(5015,"tr",16)(5016,"td",17)(5017,"div",25)(5018,"span",26),e(5019," advancedFilters"),i(5020,"br"),t()()(),n(5021,"td",21)(5022,"code",78),e(5023,`{ [key: string]: any;
}`),t()(),n(5024,"td",24)(5025,"em")(5026,"strong"),e(5027,"(opcional)"),t()(),n(5028,"p"),e(5029,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),t()()(),n(5030,"tr",16)(5031,"td",17)(5032,"div",25)(5033,"span",26),e(5034," filter"),i(5035,"br"),t()()(),n(5036,"td",21)(5037,"code",27),e(5038,"string"),t()(),n(5039,"td",24)(5040,"em")(5041,"strong"),e(5042,"(opcional)"),t()(),n(5043,"p"),e(5044,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),n(5045,"tr",16)(5046,"td",17)(5047,"div",25)(5048,"span",26),e(5049," filterParams"),i(5050,"br"),t()()(),n(5051,"td",21)(5052,"code",33),e(5053,"any"),t()(),n(5054,"td",24)(5055,"em")(5056,"strong"),e(5057,"(opcional)"),t()(),n(5058,"p"),e(5059,"Valor informado atrav\xE9s da propriedade "),n(5060,"code"),e(5061,"p-filter-params"),t(),e(5062,"."),t()()(),n(5063,"tr",16)(5064,"td",17)(5065,"div",25)(5066,"span",26),e(5067," order"),i(5068,"br"),t()()(),n(5069,"td",21)(5070,"code",27),e(5071,"string"),t()(),n(5072,"td",24)(5073,"em")(5074,"strong"),e(5075,"(opcional)"),t()(),n(5076,"p"),e(5077,"Coluna que est\xE1 sendo ordenada na tabela."),t(),n(5078,"ul")(5079,"li"),e(5080,"Coluna decrescente ser\xE1 informada da seguinte forma: "),n(5081,"code"),e(5082,"-<colunaOrdenada>"),t(),e(5083,", por exemplo "),n(5084,"code"),e(5085,"-name"),t(),e(5086,"."),t(),n(5087,"li"),e(5088,"Coluna ascendente ser\xE1 informada da seguinte forma: "),n(5089,"code"),e(5090,"<colunaOrdenada>"),t(),e(5091,", por exemplo "),n(5092,"code"),e(5093,"name"),t(),e(5094,"."),t()()()(),n(5095,"tr",16)(5096,"td",17)(5097,"div",25)(5098,"span",26),e(5099," page"),i(5100,"br"),t()()(),n(5101,"td",21)(5102,"code",45),e(5103,"number"),t()(),n(5104,"td",24)(5105,"em")(5106,"strong"),e(5107,"(opcional)"),t()(),n(5108,"p"),e(5109,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),n(5110,"tr",16)(5111,"td",17)(5112,"div",25)(5113,"span",26),e(5114," pageSize"),i(5115,"br"),t()()(),n(5116,"td",21)(5117,"code",45),e(5118,"number"),t()(),n(5119,"td",24)(5120,"em")(5121,"strong"),e(5122,"(opcional)"),t()(),n(5123,"p"),e(5124,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()(),n(5125,"h4",43)(5126,"code",5),e(5127,"PoLookupLiterals"),t()(),n(5128,"div",2)(5129,"p"),e(5130,"Interface para defini\xE7\xE3o das literais usadas no "),n(5131,"code"),e(5132,"po-lookup"),t(),e(5133,"."),t()(),n(5134,"h4",12),e(5135,"Propriedades"),t(),n(5136,"table",13)(5137,"tr",14)(5138,"th",15),e(5139,"Nome"),t(),n(5140,"th",15),e(5141,"Tipo"),t(),n(5142,"th",15),e(5143,"Descri\xE7\xE3o"),t()(),n(5144,"tr",16)(5145,"td",17)(5146,"div",25)(5147,"span",26),e(5148," clean"),i(5149,"br"),t()()(),n(5150,"td",21)(5151,"code",27),e(5152,"string"),t()(),n(5153,"td",24)(5154,"em")(5155,"strong"),e(5156,"(opcional)"),t()(),n(5157,"p"),e(5158,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),t()()(),n(5159,"tr",16)(5160,"td",17)(5161,"div",25)(5162,"span",26),e(5163," modalAdvancedSearch"),i(5164,"br"),t()()(),n(5165,"td",21)(5166,"code",27),e(5167,"string"),t()(),n(5168,"td",24)(5169,"em")(5170,"strong"),e(5171,"(opcional)"),t()(),n(5172,"p"),e(5173,"Texto do link de busca avan\xE7ada."),t(),n(5174,"p"),e(5175,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),t()()(),n(5176,"tr",16)(5177,"td",17)(5178,"div",25)(5179,"span",26),e(5180," modalAdvancedSearchPrimaryActionLabel"),i(5181,"br"),t()()(),n(5182,"td",21)(5183,"code",27),e(5184,"string"),t()(),n(5185,"td",24)(5186,"em")(5187,"strong"),e(5188,"(opcional)"),t()(),n(5189,"p"),e(5190,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),t()()(),n(5191,"tr",16)(5192,"td",17)(5193,"div",25)(5194,"span",26),e(5195," modalAdvancedSearchSecondaryActionLabel"),i(5196,"br"),t()()(),n(5197,"td",21)(5198,"code",27),e(5199,"string"),t()(),n(5200,"td",24)(5201,"em")(5202,"strong"),e(5203,"(opcional)"),t()(),n(5204,"p"),e(5205,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),t()()(),n(5206,"tr",16)(5207,"td",17)(5208,"div",25)(5209,"span",26),e(5210," modalAdvancedSearchTitle"),i(5211,"br"),t()()(),n(5212,"td",21)(5213,"code",27),e(5214,"string"),t()(),n(5215,"td",24)(5216,"em")(5217,"strong"),e(5218,"(opcional)"),t()(),n(5219,"p"),e(5220,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),t()()(),n(5221,"tr",16)(5222,"td",17)(5223,"div",25)(5224,"span",26),e(5225," modalDisclaimerGroupTitle"),i(5226,"br"),t()()(),n(5227,"td",21)(5228,"code",27),e(5229,"string"),t()(),n(5230,"td",24)(5231,"em")(5232,"strong"),e(5233,"(opcional)"),t()(),n(5234,"p"),e(5235,"Texto exibido no t\xEDtulo do disclaimer."),t()()(),n(5236,"tr",16)(5237,"td",17)(5238,"div",25)(5239,"span",26),e(5240," modalPlaceholder"),i(5241,"br"),t()()(),n(5242,"td",21)(5243,"code",27),e(5244,"string"),t()(),n(5245,"td",24)(5246,"em")(5247,"strong"),e(5248,"(opcional)"),t()(),n(5249,"p"),e(5250,"Texto exibido no placeholder do input da modal."),t()()(),n(5251,"tr",16)(5252,"td",17)(5253,"div",25)(5254,"span",26),e(5255," modalPrimaryActionLabel"),i(5256,"br"),t()()(),n(5257,"td",21)(5258,"code",27),e(5259,"string"),t()(),n(5260,"td",24)(5261,"em")(5262,"strong"),e(5263,"(opcional)"),t()(),n(5264,"p"),e(5265,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),n(5266,"tr",16)(5267,"td",17)(5268,"div",25)(5269,"span",26),e(5270," modalSecondaryActionLabel"),i(5271,"br"),t()()(),n(5272,"td",21)(5273,"code",27),e(5274,"string"),t()(),n(5275,"td",24)(5276,"em")(5277,"strong"),e(5278,"(opcional)"),t()(),n(5279,"p"),e(5280,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),n(5281,"tr",16)(5282,"td",17)(5283,"div",25)(5284,"span",26),e(5285," modalTableLoadMoreData"),i(5286,"br"),t()()(),n(5287,"td",21)(5288,"code",27),e(5289,"string"),t()(),n(5290,"td",24)(5291,"em")(5292,"strong"),e(5293,"(opcional)"),t()(),n(5294,"p"),e(5295,"Label do "),n(5296,"code"),e(5297,"button"),t(),e(5298," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),t()()(),n(5299,"tr",16)(5300,"td",17)(5301,"div",25)(5302,"span",26),e(5303," modalTableLoadingData"),i(5304,"br"),t()()(),n(5305,"td",21)(5306,"code",27),e(5307,"string"),t()(),n(5308,"td",24)(5309,"em")(5310,"strong"),e(5311,"(opcional)"),t()(),n(5312,"p"),e(5313,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),t()()(),n(5314,"tr",16)(5315,"td",17)(5316,"div",25)(5317,"span",26),e(5318," modalTableNoColumns"),i(5319,"br"),t()()(),n(5320,"td",21)(5321,"code",27),e(5322,"string"),t()(),n(5323,"td",24)(5324,"em")(5325,"strong"),e(5326,"(opcional)"),t()(),n(5327,"p"),e(5328,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),t()()(),n(5329,"tr",16)(5330,"td",17)(5331,"div",25)(5332,"span",26),e(5333," modalTableNoData"),i(5334,"br"),t()()(),n(5335,"td",21)(5336,"code",27),e(5337,"string"),t()(),n(5338,"td",24)(5339,"em")(5340,"strong"),e(5341,"(opcional)"),t()(),n(5342,"p"),e(5343,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),t()()(),n(5344,"tr",16)(5345,"td",17)(5346,"div",25)(5347,"span",26),e(5348," modalTitle"),i(5349,"br"),t()()(),n(5350,"td",21)(5351,"code",27),e(5352,"string"),t()(),n(5353,"td",24)(5354,"em")(5355,"strong"),e(5356,"(opcional)"),t()(),n(5357,"p"),e(5358,"Texto exibido no t\xEDtulo da modal."),t()()(),n(5359,"tr",16)(5360,"td",17)(5361,"div",25)(5362,"span",26),e(5363," search"),i(5364,"br"),t()()(),n(5365,"td",21)(5366,"code",27),e(5367,"string"),t()(),n(5368,"td",24)(5369,"em")(5370,"strong"),e(5371,"(opcional)"),t()(),n(5372,"p"),e(5373,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),t()()()(),n(5374,"h4",43)(5375,"code",5),e(5376,"PoLookupResponseApi"),t()(),n(5377,"div",2)(5378,"p"),e(5379,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),t()(),n(5380,"h4",12),e(5381,"Propriedades"),t(),n(5382,"table",13)(5383,"tr",14)(5384,"th",15),e(5385,"Nome"),t(),n(5386,"th",15),e(5387,"Tipo"),t(),n(5388,"th",15),e(5389,"Descri\xE7\xE3o"),t()(),n(5390,"tr",16)(5391,"td",17)(5392,"div",25)(5393,"span",26),e(5394," hasNext"),i(5395,"br"),t()()(),n(5396,"td",21)(5397,"code",29),e(5398,"boolean"),t()(),n(5399,"td",24)(5400,"p"),e(5401,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),n(5402,"tr",16)(5403,"td",17)(5404,"div",25)(5405,"span",26),e(5406," items"),i(5407,"br"),t()()(),n(5408,"td",21)(5409,"code",79),e(5410,"Array<object>"),t()(),n(5411,"td",24)(5412,"p"),e(5413,"Lista de itens retornados."),t()()()(),n(5414,"h3"),e(5415,"Enums"),t(),n(5416,"h4",4)(5417,"code",5),e(5418,"PoTableColumnSpacing"),t()(),n(5419,"div",2)(5420,"p"),e(5421,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),n(5422,"strong"),e(5423,"p-spacing"),t(),e(5424,") do po-table."),t()(),n(5425,"h4",12),e(5426,"Propriedades"),t(),n(5427,"table",13)(5428,"tr",14)(5429,"th",15),e(5430,"Nome"),t(),n(5431,"th",15),e(5432,"Descri\xE7\xE3o"),t()(),n(5433,"tr",16)(5434,"td",17)(5435,"div",25)(5436,"span",26),e(5437," ExtraSmall"),i(5438,"br"),t()()(),n(5439,"td",24)(5440,"p"),e(5441,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),t()()(),n(5442,"tr",16)(5443,"td",17)(5444,"div",25)(5445,"span",26),e(5446," Small"),i(5447,"br"),t()()(),n(5448,"td",24)(5449,"p"),e(5450,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()(),n(5451,"tr",16)(5452,"td",17)(5453,"div",25)(5454,"span",26),e(5455," Medium"),i(5456,"br"),t()()(),n(5457,"td",24)(5458,"p"),e(5459,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),n(5460,"tr",16)(5461,"td",17)(5462,"div",25)(5463,"span",26),e(5464," Large"),i(5465,"br"),t()()(),n(5466,"td",24)(5467,"p"),e(5468,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var Be=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(ie(he),ie(fe))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),x("p-click",function(){return o.changeTab("doc")}),i(3,"sample-po-lookup-doc"),t(),n(4,"po-tab",3),x("p-click",function(){return o.changeTab("web")}),i(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),t()()()),l&2&&(u("p-actions",o.actions),d(2),u("p-active",o.activeTab==="doc"),d(2),u("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[Le,C,k,qe,Te,_e,Oe,je,Ne,He],encapsulation:2})}return a})();var ct=[{path:"",component:Be}],Re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=J({type:a});static \u0275inj=Q({imports:[le.forChild(ct),le]})}return a})();var Tn=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=J({type:a});static \u0275inj=Q({imports:[Fe,Re]})}return a})();export{Tn as DocPoLookupModule};
