import{o as b,p as W}from"./chunk-WKH4H3SL.js";import{Ab as S,Jb as z,_a as C,nb as J,sa as j,v as M,zb as x}from"./chunk-DGWQGSAF.js";import"./chunk-ZXY2ZB5H.js";import{$a as U,Aa as p,Da as y,Eb as h,La as n,M as D,Ma as t,N as P,Na as i,Q as g,Ra as w,Sa as c,U as q,V as k,Wc as K,Yc as X,_a as R,_c as O,ab as H,bb as v,cb as e,eb as f,ja as d,ka as N,mb as A,nb as _,ob as E,qa as s,ra as T}from"./chunk-GP3Z6ZCX.js";var re=()=>({property:"name",required:!0,showRequired:!0}),me=o=>[o],G=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,m){a&1&&i(0,"po-dynamic-form",0),a&2&&p("p-fields",E(2,me,_(1,re)))},dependencies:[C],encapsulation:2})}return o})();var de=o=>({"docs-sample-code-tabs":o}),Y=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,m){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form Basic"),t(),n(4,"a",2),c("click",function(){return m.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),t()()()()(),n(21,"div",10),i(22,"sample-po-dynamic-form-basic"),t(),i(23,"hr")),a&2&&(d(5),y("po-icon "+m.sampleCodeButtonIcon),d(),f(" ",m.sampleCodeButtonLabel,""),d(),p("ngClass",E(4,de,m.hideSampleCodeTabs)))},dependencies:[h,b,x,S,G],encapsulation:2})}return o})();var I=(()=>{class o{getCity(r){switch(r){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(r){let a={property:"cpf",visible:!0},m={property:"cnpj",visible:!0};return{fields:[r.isJuridicPerson?m:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Z=(()=>{class o{poNotification=g(j);registerService=g(I);person={};validateFields=["state"];fields=[{property:"name",divider:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",divider:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",divider:"Work data",range:!0,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",divider:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:z.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(r){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onLoadFields(r){return this.registerService.getUserDocument(r)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-register"]],standalone:!1,features:[A([I])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,m){if(a&1){let l=w();i(0,"po-dynamic-form",1,0)(2,"br"),n(3,"div",2)(4,"po-button",3),c("p-click",function(){q(l);let L=v(1);return m.poNotification.success("Data saved successfully!"),k(L.form.reset())}),t()()}if(a&2){let l=v(1);p("p-fields",m.fields)("p-load",m.onLoadFields.bind(m))("p-validate",m.onChangeFields.bind(m))("p-validate-fields",m.validateFields)("p-value",m.person),d(4),p("p-disabled",l==null?null:l.form.invalid)}},dependencies:[M,C],encapsulation:2})}return o})();var ce=o=>({"docs-sample-code-tabs":o}),$=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-register-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,m){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Register"),t(),n(4,"a",2),c("click",function(){return m.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  ForceBooleanComponentEnum
} from '@po-ui/ng-components';
import { PoDynamicFormRegisterService } from './sample-po-dynamic-form-register.service';

@Component({
  selector: 'sample-po-dynamic-form-register',
  templateUrl: './sample-po-dynamic-form-register.component.html',
  providers: [PoDynamicFormRegisterService],
  standalone: false
})
export class SamplePoDynamicFormRegisterComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormRegisterService);

  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      divider: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password'
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', divider: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      divider: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      divider: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile'
    }
  ];

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormRegisterService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-dynamic-form-register"),t(),i(27,"hr")),a&2&&(d(5),y("po-icon "+m.sampleCodeButtonIcon),d(),f(" ",m.sampleCodeButtonLabel,""),d(),p("ngClass",E(4,ce,m.hideSampleCodeTabs)))},dependencies:[h,b,x,S,Z],encapsulation:2})}return o})();var B=(()=>{class o{getCity(r){switch(r){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(r){let a={property:"cpf",visible:!0},m={property:"cnpj",visible:!0};return{fields:[r.isJuridicPerson?m:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Ee=["dynamicForm"],ee=(()=>{class o{poNotification=g(j);registerService=g(B);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",container:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthday")},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required.",keydown:this.onKeyDown.bind(this,"secretKey")},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",container:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",container:"Work data",range:!0,gridColumns:5,gridSmColumns:12,help:"Enter or select a valid date range.",additionalHelpTooltip:"Ensure the start date is earlier than or equal to the end date.",keydown:this.onKeyDown.bind(this,"vacation")},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",container:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0,listboxControlPosition:"top"},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0,listboxControlPosition:"top"},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0,listboxControlPosition:"top"},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:z.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile",customAction:{icon:"an an-download",visible:!0},customActionClick:r=>{console.log("Iniciar download para o arquivo:",r.name)}}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(r){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(r.value.state),disabled:!1}]}}onKeyDown(r,a){a.code==="F9"&&this.dynamicForm.showAdditionalHelp(r)}onLoadFields(r){return this.registerService.getUserDocument(r)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-container"]],viewQuery:function(a,m){if(a&1&&R(Ee,7),a&2){let l;U(l=H())&&(m.dynamicForm=l.first)}},standalone:!1,features:[A([B])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,m){if(a&1){let l=w();i(0,"po-dynamic-form",1,0)(2,"br"),n(3,"div",2)(4,"po-button",3),c("p-click",function(){q(l);let L=v(1);return m.poNotification.success("Data saved successfully!"),k(L.form.reset())}),t()()}if(a&2){let l=v(1);p("p-fields",m.fields)("p-load",m.onLoadFields.bind(m))("p-validate",m.onChangeFields.bind(m))("p-validate-fields",m.validateFields)("p-value",m.person),d(4),p("p-disabled",l==null?null:l.form.invalid)}},dependencies:[M,C],encapsulation:2})}return o})();var Se=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-container-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,m){a&1&&(i(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Container"),t(),n(4,"a",2),c("click",function(){return m.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html"),t(),n(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';

import {
  ForceBooleanComponentEnum,
  PoDynamicFormComponent,
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  PoUploadFile
} from '@po-ui/ng-components';
import { PoDynamicFormContainerService } from './sample-po-dynamic-form-container.service';

@Component({
  selector: 'sample-po-dynamic-form-container',
  templateUrl: './sample-po-dynamic-form-container.component.html',
  providers: [PoDynamicFormContainerService],
  standalone: false
})
export class SamplePoDynamicFormContainerComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormContainerService);

  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      container: 'PERSONAL DATA',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1,
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthday')
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password',
      help: 'Password must include a combination of letters and numbers.',
      additionalHelpTooltip: 'At least 5 alphabetic and 3 numeric characters are required.',
      keydown: this.onKeyDown.bind(this, 'secretKey')
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', container: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      container: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12,
      help: 'Enter or select a valid date range.',
      additionalHelpTooltip: 'Ensure the start date is earlier than or equal to the end date.',
      keydown: this.onKeyDown.bind(this, 'vacation')
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      container: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile',
      customAction: { icon: 'an an-download', visible: true },
      customActionClick: (file: PoUploadFile) => {
        console.log('Iniciar download para o arquivo:', file.name);
      }
    }
  ];

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicForm.showAdditionalHelp(property);
    }
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormContainerService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),n(25,"div",10),i(26,"sample-po-dynamic-form-container"),t(),i(27,"hr")),a&2&&(d(5),y("po-icon "+m.sampleCodeButtonIcon),d(),f(" ",m.sampleCodeButtonLabel,""),d(),p("ngClass",E(4,Se,m.hideSampleCodeTabs)))},dependencies:[h,b,x,S,ee],encapsulation:2})}return o})();var ne=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:!1,decls:4493,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,m){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2),n(5,"h3",3),e(6,"Componente"),t(),n(7,"h4",4)(8,"code",5),e(9,"PoDynamicFormComponent"),t()(),n(10,"div",2)(11,"p"),e(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),t(),n(13,"p"),e(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),t()(),n(15,"div",6)(16,"h4",7),e(17,"Seletor"),t(),n(18,"pre",8),e(19,`<po-dynamic-form
    p-auto-focus="string"
    p-components-size="string"
    p-fields="Array<PoDynamicFormField>"
    (p-form)="EventEmitter"
    p-group-form="boolean"
    p-load="string | Function"
    p-validate="string | Function"
    p-validate-fields="Array<string>"
    p-validate-on-input="boolean"
    p-value="any" >
</po-dynamic-form>
`),t()(),n(20,"h4",9),e(21,"Propriedades"),t(),n(22,"table",10)(23,"tr",11)(24,"th",12),e(25,"Nome"),t(),n(26,"th",12),e(27,"Tipo"),t(),n(28,"th",12),e(29,"Padr\xE3o"),t(),n(30,"th",12),e(31,"Descri\xE7\xE3o"),t()(),n(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),e(36," p-auto-focus"),i(37,"br"),t()()(),n(38,"td",17)(39,"code",18),e(40,"string"),t()(),n(41,"td",19),e(42,"-"),t(),n(43,"td",20)(44,"em")(45,"strong"),e(46,"(opcional)"),t()(),n(47,"p"),e(48,"Nome da propriedade, atribu\xEDda ao "),n(49,"code"),e(50,"PoDynamicFormField.property"),t(),e(51,", que iniciar\xE1 o campo com foco."),t()()(),n(52,"tr",13)(53,"td",14)(54,"div",15)(55,"span",16),e(56," p-components-size"),i(57,"br"),t()()(),n(58,"td",17)(59,"code",18),e(60,"string"),t()(),n(61,"td",19)(62,"p")(63,"code"),e(64,"medium"),t()()(),n(65,"td",20)(66,"em")(67,"strong"),e(68,"(opcional)"),t()(),n(69,"p"),e(70,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),n(71,"ul")(72,"li")(73,"code"),e(74,"small"),t(),e(75,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(76,"li")(77,"code"),e(78,"medium"),t(),e(79,": aplica a medida medium de cada componente."),t()(),n(80,"blockquote")(81,"p"),e(82,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(83,"code"),e(84,"medium"),t(),e(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(86,"a",21),e(87,"po-theme"),t(),e(88,"."),t()()()(),n(89,"tr",13)(90,"td",14)(91,"div",15)(92,"span",16),e(93," p-fields"),i(94,"br"),t()()(),n(95,"td",17)(96,"code",22),e(97,"Array<PoDynamicFormField>"),t()(),n(98,"td",19)(99,"p")(100,"code"),e(101,"[]"),t()()(),n(102,"td",20)(103,"p"),e(104,"Cole\xE7\xE3o de objetos que implementam a interface "),n(105,"code"),e(106,"PoDynamicFormField"),t(),e(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),t(),n(108,"blockquote")(109,"p"),e(110,"Ex: "),n(111,"code"),e(112,"[ { property: 'name' } ]"),t()()(),n(113,"p"),e(114,"Regras de tipagem e cria\xE7\xE3o dos componentes:"),t(),n(115,"ul")(116,"li"),e(117,"Caso o "),n(118,"em"),e(119,"type"),t(),e(120," informado seja "),n(121,"em"),e(122,"boolean"),t(),e(123," o componente criado ser\xE1 o "),n(124,"code"),e(125,"po-switch"),t(),e(126,"."),t(),n(127,"li"),e(128,"Caso o "),n(129,"em"),e(130,"type"),t(),e(131," informado seja "),n(132,"em"),e(133,"currency"),t(),e(134," e n\xE3o seja informado um "),n(135,"em"),e(136,"mask"),t(),e(137," ou "),n(138,"em"),e(139,"pattern"),t(),e(140," o componente criado ser\xE1 o "),n(141,"code"),e(142,"po-decimal"),t(),e(143,`,
caso seja informado um `),n(144,"em"),e(145,"mask"),t(),e(146," ou "),n(147,"em"),e(148,"pattern"),t(),e(149," o componente criado ser\xE1 o "),n(150,"code"),e(151,"po-input"),t(),e(152,"."),t(),n(153,"li"),e(154,"Caso o "),n(155,"em"),e(156,"type"),t(),e(157," informado seja "),n(158,"em"),e(159,"number"),t(),e(160," e n\xE3o seja informado um "),n(161,"em"),e(162,"mask"),t(),e(163," ou "),n(164,"em"),e(165,"pattern"),t(),e(166," o componente criado ser\xE1 o "),n(167,"code"),e(168,"po-number"),t(),e(169,`, caso seja
informado um `),n(170,"em"),e(171,"mask"),t(),e(172," ou "),n(173,"em"),e(174,"pattern"),t(),e(175," o componente criado ser\xE1 o "),n(176,"code"),e(177,"po-input"),t(),e(178,"."),t(),n(179,"li"),e(180,"Caso a lista possua a propriedade "),n(181,"code"),e(182,"options"),t(),e(183," e a mesma possua at\xE9 3 itens o componente criado ser\xE1 o "),n(184,"code"),e(185,"po-radio-group"),t(),e(186,`
ou `),n(187,"code"),e(188,"po-checkbox-group"),t(),e(189," se informar a propriedade "),n(190,"code"),e(191,"optionsMulti"),t(),e(192,"."),t(),n(193,"li"),e(194,"Caso a mesma possua 3 ou mais itens, ser\xE1 criado o componente "),n(195,"code"),e(196,"po-select"),t(),e(197," ou, "),n(198,"code"),e(199,"po-multiselect"),t(),e(200," se a propriedade "),n(201,"code"),e(202,"optionsMulti"),t(),e(203,`
for verdadeira.`),t(),n(204,"li"),e(205,"Caso o "),n(206,"em"),e(207,"type"),t(),e(208," informado seja "),n(209,"em"),e(210,"date"),t(),e(211," ou "),n(212,"em"),e(213,"datetime"),t(),e(214," o componente criado ser\xE1 o "),n(215,"code"),e(216,"po-datepicker"),t(),e(217,"."),t(),n(218,"li"),e(219,"Caso seja informado a propriedade "),n(220,"code"),e(221,"optionsService"),t(),e(222," o componente criado ser\xE1 o "),n(223,"code"),e(224,"po-combo"),t(),e(225,"."),t(),n(226,"li"),e(227,"Caso o "),n(228,"em"),e(229,"type"),t(),e(230," informado seja "),n(231,"em"),e(232,"time"),t(),e(233," o componente criado ser\xE1 um "),n(234,"code"),e(235,"po-input"),t(),e(236," podendo receber um "),n(237,"em"),e(238,"mask"),t(),e(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),n(240,"em"),e(241,"mask"),t(),e(242," o componente ser\xE1 criado com a m\xE1scara '99:99' por padr\xE3o."),t(),n(243,"li"),e(244,"Caso a lista possua a propriedade "),n(245,"code"),e(246,"rows"),t(),e(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),n(248,"code"),e(249,"po-textarea"),t(),e(250,", caso o valor da propriedade "),n(251,"code"),e(252,"rows"),t(),e(253," seja menor que 3 o componente criado ser\xE1 o "),n(254,"code"),e(255,"po-input"),t(),e(256,"."),t(),n(257,"li"),e(258,"Caso seja informada a propriedade "),n(259,"code"),e(260,"secret"),t(),e(261," o componente criado ser\xE1 o "),n(262,"code"),e(263,"po-password"),t(),e(264,"."),t(),n(265,"li"),e(266,"Caso o "),n(267,"em"),e(268,"type"),t(),e(269," informado seja "),n(270,"em"),e(271,"string"),t(),e(272," o componente criado ser\xE1 o "),n(273,"code"),e(274,"po-input"),t(),e(275,"."),n(276,"blockquote")(277,"p"),e(278,"Ao alterar o valor das "),n(279,"code"),e(280,"properties"),t(),e(281,", visibilidade e/ou agrupamentos via container, os "),n(282,"code"),e(283,"fields"),t(),e(284," que utilizam servi\xE7o podem refazer as chamadas para as API's."),t()()()()()(),n(285,"tr",13)(286,"td",14)(287,"div",23)(288,"span",24),e(289," (p-form)"),i(290,"br"),t()()(),n(291,"td",17)(292,"code",25),e(293,"EventEmitter"),t()(),n(294,"td",19),e(295,"-"),t(),n(296,"td",20)(297,"em")(298,"strong"),e(299,"(opcional)"),t()(),n(300,"p"),e(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),t(),n(302,"p"),e(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),n(304,"em"),e(305,"template reference"),t(),e(306," e atrav\xE9s do "),n(307,"em"),e(308,"output"),t(),e(309,", veja os exemplos abaixo:"),t(),n(310,"blockquote")(311,"p")(312,"em"),e(313,"template reference"),t()()(),n(314,"pre")(315,"code",26),e(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),t()(),n(317,"blockquote")(318,"p")(319,"em"),e(320,"Output"),t()()(),n(321,"pre")(322,"code",26),e(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),t()(),n(324,"pre")(325,"code",27),e(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),t()(),n(327,"blockquote")(328,"p"),e(329,"Caso a propriedade "),n(330,"code"),e(331,"p-group-form"),t(),e(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),t()()()(),n(333,"tr",13)(334,"td",14)(335,"div",15)(336,"span",16),e(337," p-group-form"),i(338,"br"),t()()(),n(339,"td",17)(340,"code",28),e(341,"boolean"),t()(),n(342,"td",19),e(343,"-"),t(),n(344,"td",20)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),n(348,"p"),e(349,"Ao informar esta propriedade, o componente passar\xE1 a utilizar o formul\xE1rio pai para criar os "),n(350,"code"),e(351,"FormControl"),t(),e(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),t(),n(353,"pre")(354,"code",26),e(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),t()()()(),n(356,"tr",13)(357,"td",14)(358,"div",15)(359,"span",16),e(360," p-load"),i(361,"br"),t()()(),n(362,"td",17)(363,"code",18),e(364,"string "),t(),n(365,"code",29),e(366," Function"),t()(),n(367,"td",19),e(368,"-"),t(),n(369,"td",20)(370,"em")(371,"strong"),e(372,"(opcional)"),t()(),n(373,"p"),e(374,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),t(),n(375,"p"),e(376,"A propriedade aceita os seguintes tipos:"),t(),n(377,"ul")(378,"li")(379,"code"),e(380,"string"),t(),e(381,": "),n(382,"em"),e(383,"Endpoint"),t(),e(384," usado pelo componente para requisi\xE7\xE3o via "),n(385,"code"),e(386,"POST"),t(),e(387,"."),t(),n(388,"li")(389,"code"),e(390,"function"),t(),e(391,": M\xE9todo que ser\xE1 executado."),t()(),n(392,"p"),e(393,"Ao ser executado, ir\xE1 receber como par\xE2metro o objeto informado no "),n(394,"code"),e(395,"p-value"),t(),e(396,"."),t(),n(397,"p"),e(398,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(399,"a",30),e(400,"PoDynamicFormLoad"),t(),e(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),t(),n(402,"p"),e(403,"Por exemplo:"),t(),n(404,"pre")(405,"code"),e(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),t()(),n(407,"p"),e(408,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(409,"code"),e(410,"bind"),t(),e(411,", por exemplo:"),t(),n(412,"pre")(413,"code"),e(414,`[p-load]="onLoadFields.bind(this)"
`),t()()()(),n(415,"tr",13)(416,"td",14)(417,"div",15)(418,"span",16),e(419," p-validate"),i(420,"br"),t()()(),n(421,"td",17)(422,"code",18),e(423,"string "),t(),n(424,"code",29),e(425," Function"),t()(),n(426,"td",19),e(427,"-"),t(),n(428,"td",20)(429,"em")(430,"strong"),e(431,"(opcional)"),t()(),n(432,"p"),e(433,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(434,"strong"),e(435,"mudan\xE7as do formul\xE1rio"),t(),e(436,"."),t(),n(437,"p"),e(438,"A propriedade aceita os seguintes tipos:"),t(),n(439,"ul")(440,"li")(441,"code"),e(442,"string"),t(),e(443,": "),n(444,"em"),e(445,"Endpoint"),t(),e(446," usado pelo componente para requisi\xE7\xE3o via "),n(447,"code"),e(448,"POST"),t(),e(449,"."),t(),n(450,"li")(451,"code"),e(452,"function"),t(),e(453,": M\xE9todo que ser\xE1 executado."),t()(),n(454,"p"),e(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),n(456,"code"),e(457,"PoDynamicFormFieldChanged"),t()(),n(458,"p"),e(459,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(460,"a",31),e(461,"PoDynamicFormValidation"),t(),e(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),t(),n(463,"pre")(464,"code"),e(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),t()(),n(466,"p"),e(467,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(468,"code"),e(469,"bind"),t(),e(470,", por exemplo:"),t(),n(471,"pre")(472,"code"),e(473,`[p-validate]="this.myFunction.bind(this)"
`),t()(),n(474,"blockquote")(475,"p"),e(476,"Se houver uma lista de campos para valida\xE7\xE3o definida em "),n(477,"code"),e(478,"p-validate-fields"),t(),e(479,", a propriedade "),n(480,"code"),e(481,"validate"),t(),e(482," s\xF3 receber\xE1 o disparo para os campos equivalentes."),t()()()(),n(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),e(487," p-validate-fields"),i(488,"br"),t()()(),n(489,"td",17)(490,"code",32),e(491,"Array<string>"),t()(),n(492,"td",19),e(493,"-"),t(),n(494,"td",20)(495,"em")(496,"strong"),e(497,"(opcional)"),t()(),n(498,"p"),e(499,"Lista que define os campos que ir\xE3o disparar o validate do form."),t()()(),n(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),e(504," p-validate-on-input"),i(505,"br"),t()()(),n(506,"td",17)(507,"code",28),e(508,"boolean"),t()(),n(509,"td",19),e(510,"-"),t(),n(511,"td",20)(512,"em")(513,"strong"),e(514,"(opcional)"),t()(),n(515,"p"),e(516,"Ao informar esta propriedade, o componente passar\xE1 a emitir o valor a cada caractere digitado."),t(),n(517,"p"),e(518,"Pode ser aplicado nos seguintes componentes:"),t(),n(519,"ul")(520,"li"),e(521,"po-input"),t(),n(522,"li"),e(523,"po-number"),t(),n(524,"li"),e(525,"po-decimal"),t(),n(526,"li"),e(527,"po-textarea"),t(),n(528,"li"),e(529,"po-password"),t()(),n(530,"p"),e(531,"Deve informar os campos que deseja receber as emiss\xF5es na propriedade "),n(532,"code"),e(533,"p-validate-fields"),t(),e(534,"."),t()()(),n(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),e(539," p-value"),i(540,"br"),t()()(),n(541,"td",17)(542,"code",33),e(543,"any"),t()(),n(544,"td",19),e(545,"-"),t(),n(546,"td",20)(547,"p"),e(548,"Objeto que ser\xE1 utilizado como valor para exibir as informa\xE7\xF5es, ser\xE1 recuperado e preenchido atrav\xE9s do atributo "),n(549,"em"),e(550,"property"),t(),e(551,`
dos objetos contidos na propridade `),n(552,"code"),e(553,"p-fields"),t(),e(554,"."),t(),n(555,"p"),e(556,"Pode iniciar com valor ou apenas com um objeto vazio que ser\xE1 preenchido conforme descrito acima."),t(),n(557,"blockquote")(558,"p"),e(559,"Ex: "),n(560,"code"),e(561,"{ name: 'po' }"),t()()()()()(),n(562,"h3",9),e(563,"M\xE9todos"),t(),n(564,"table",34)(565,"tr",13)(566,"th",35)(567,"div",15)(568,"h4")(569,"span",16),e(570," focus "),t()()()()(),n(571,"tr",20)(572,"td",20)(573,"p"),e(574,"Fun\xE7\xE3o que atribui foco ao campo desejado."),t(),n(575,"p"),e(576,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a inst\xE2ncia do "),n(577,"code"),e(578,"dynamic form"),t(),e(579,", como por exemplo:"),t(),n(580,"pre")(581,"code",26),e(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),t()(),n(583,"pre")(584,"code",36),e(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),t()()()()(),n(586,"h5")(587,"b"),e(588,"Par\xE2metros"),t()(),n(589,"table",10)(590,"tr",11)(591,"th",12),e(592,"Nome"),t(),n(593,"th",12),e(594,"Tipo"),t(),n(595,"th",12),e(596,"Descri\xE7\xE3o"),t()(),n(597,"tr",13)(598,"td",14),e(599," property"),t(),n(600,"td",17)(601,"code",37),e(602," string "),t()(),n(603,"td",20)(604,"p"),e(605,"Nome da propriedade atribu\xEDda ao "),n(606,"code"),e(607,"PoDynamicFormField.property"),t(),e(608,"."),t()()()(),i(609,"br"),n(610,"table",34)(611,"tr",13)(612,"th",35)(613,"div",15)(614,"h4")(615,"span",16),e(616," showAdditionalHelp "),t()()()()(),n(617,"tr",20)(618,"td",20)(619,"p"),e(620,"M\xE9todo que exibe "),n(621,"code"),e(622,"p-helper"),t(),e(623," ou executa a a\xE7\xE3o definida em "),n(624,"code"),e(625,"p-helper{eventOnClick}"),t(),e(626," ou em "),n(627,"code"),e(628,"p-additionalHelp"),t(),e(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(630,"code"),e(631,"keydown"),t(),e(632,"."),t(),n(633,"pre")(634,"code"),e(635,`import { PoDynamicModule } from '@po-ui/ng-components';
...
@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   helper: 'Mensagem de ajuda complementar com o componente po-helper implementado.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicForm.showAdditionalHelp(property);
 }
}
`),t()()()()(),n(636,"h5")(637,"b"),e(638,"Par\xE2metros"),t()(),n(639,"table",10)(640,"tr",11)(641,"th",12),e(642,"Nome"),t(),n(643,"th",12),e(644,"Tipo"),t(),n(645,"th",12),e(646,"Descri\xE7\xE3o"),t()(),n(647,"tr",13)(648,"td",14),e(649," property"),t(),n(650,"td",17)(651,"code",37),e(652," string "),t()(),n(653,"td",20)(654,"p"),e(655,"Identificador da coluna."),t()()()(),i(656,"br"),n(657,"h3"),e(658,"Interfaces"),t(),n(659,"h4",38)(660,"code",5),e(661,"PoDynamicFormField"),t()(),n(662,"div",2)(663,"p"),e(664," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente."),t()(),n(665,"h4",9),e(666,"Propriedades"),t(),n(667,"table",10)(668,"tr",11)(669,"th",12),e(670,"Nome"),t(),n(671,"th",12),e(672,"Tipo"),t(),n(673,"th",12),e(674,"Descri\xE7\xE3o"),t()(),n(675,"tr",13)(676,"td",14)(677,"div",15)(678,"span",16),e(679," additionalHelp"),i(680,"br"),t()()(),n(681,"td",17)(682,"code",29),e(683,"Function"),t()(),n(684,"td",20)(685,"em")(686,"strong"),e(687,"(opcional)"),t()(),n(688,"p"),e(689,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(690,"blockquote")(691,"p"),e(692,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),n(693,"tr",13)(694,"td",14)(695,"div",15)(696,"span",16),e(697," additionalHelpTooltip"),i(698,"br"),t()()(),n(699,"td",17)(700,"code",18),e(701,"string"),t()(),n(702,"td",20)(703,"em")(704,"strong"),e(705,"(opcional)"),t()(),n(706,"p"),e(707,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(708,"code"),e(709,"po-helper"),t(),e(710,`.
`),n(711,"strong"),e(712,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(713,"blockquote")(714,"p"),e(715,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),n(716,"tr",13)(717,"td",14)(718,"div",15)(719,"span",16),e(720," advancedFilters"),i(721,"br"),t()()(),n(722,"td",17)(723,"code",39),e(724,"Array<PoLookupAdvancedFilter>"),t()(),n(725,"td",20)(726,"em")(727,"strong"),e(728,"(opcional)"),t()(),n(729,"p"),e(730,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),n(731,"blockquote")(732,"p"),e(733,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),n(734,"p"),e(735,"Exemplo de URL com busca avan\xE7ada:"),t(),n(736,"p")(737,"code"),e(738,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),n(739,"p"),e(740,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),n(741,"p")(742,"code"),e(743,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),n(744,"tr",13)(745,"td",14)(746,"div",15)(747,"span",16),e(748," appendBox"),i(749,"br"),t()()(),n(750,"td",17)(751,"code",28),e(752,"boolean"),t()(),n(753,"td",20)(754,"em")(755,"strong"),e(756,"(opcional)"),t()(),n(757,"p"),e(758,"Define que o "),n(759,"code"),e(760,"listbox"),t(),e(761," e/ou popover ("),n(762,"code"),e(763,"p-helper"),t(),e(764," e/ou "),n(765,"code"),e(766,"p-error-limit"),t(),e(767,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),n(768,"blockquote")(769,"p"),e(770,"Quando utilizado com "),n(771,"code"),e(772,"p-helper"),t(),e(773,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(774,"tr",13)(775,"td",14)(776,"div",15)(777,"span",16),e(778," autoHeight"),i(779,"br"),t()()(),n(780,"td",17)(781,"code",28),e(782,"boolean"),t()(),n(783,"td",20)(784,"em")(785,"strong"),e(786,"(opcional)"),t()(),n(787,"p"),e(788,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),n(789,"p")(790,"strong"),e(791,"Componentes compat\xEDveis:"),t(),n(792,"code"),e(793,"po-multiselect"),t(),e(794,", "),n(795,"code"),e(796,"po-lookup"),t(),e(797,"."),t()()(),n(798,"tr",13)(799,"td",14)(800,"div",15)(801,"span",16),e(802," autoUpload"),i(803,"br"),t()()(),n(804,"td",17)(805,"code",28),e(806,"boolean"),t()(),n(807,"td",20)(808,"em")(809,"strong"),e(810,"(opcional)"),t()(),n(811,"p"),e(812,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(813,"p")(814,"strong"),e(815,"Componente compat\xEDvel"),t(),e(816,": "),n(817,"code"),e(818,"po-upload"),t()()()(),n(819,"tr",13)(820,"td",14)(821,"div",15)(822,"span",16),e(823," booleanFalse"),i(824,"br"),t()()(),n(825,"td",17)(826,"code",18),e(827,"string"),t()(),n(828,"td",20)(829,"em")(830,"strong"),e(831,"(opcional)"),t()(),n(832,"p"),e(833,"Texto exibido quando o valor do componente for "),n(834,"em"),e(835,"false"),t(),e(836,"."),t()()(),n(837,"tr",13)(838,"td",14)(839,"div",15)(840,"span",16),e(841," booleanTrue"),i(842,"br"),t()()(),n(843,"td",17)(844,"code",18),e(845,"string"),t()(),n(846,"td",20)(847,"em")(848,"strong"),e(849,"(opcional)"),t()(),n(850,"p"),e(851,"Texto exibido quando o valor do componente for "),n(852,"em"),e(853,"true"),t(),e(854,"."),t()()(),n(855,"tr",13)(856,"td",14)(857,"div",15)(858,"span",16),e(859," changeOnEnter"),i(860,"br"),t()()(),n(861,"td",17)(862,"code",28),e(863,"boolean"),t()(),n(864,"td",20)(865,"em")(866,"strong"),e(867,"(opcional)"),t()(),n(868,"p"),e(869,"Indica que o evento "),n(870,"code"),e(871,"p-change"),t(),e(872,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),n(873,"code"),e(874,"po-combo"),t(),e(875,"."),t()()(),n(876,"tr",13)(877,"td",14)(878,"div",15)(879,"span",16),e(880," changeVisibleColumns"),i(881,"br"),t()()(),n(882,"td",17)(883,"code",29),e(884,"Function"),t()(),n(885,"td",20)(886,"em")(887,"strong"),e(888,"(opcional)"),t()(),n(889,"p"),e(890,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),n(891,"p"),e(892,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(893,"p")(894,"strong"),e(895,"Componente compat\xEDvel"),t(),e(896,": "),n(897,"code"),e(898,"po-lookup"),t()()()(),n(899,"tr",13)(900,"td",14)(901,"div",15)(902,"span",16),e(903," clean"),i(904,"br"),t()()(),n(905,"td",17)(906,"code",28),e(907,"boolean"),t()(),n(908,"td",20)(909,"em")(910,"strong"),e(911,"(opcional)"),t()(),n(912,"p"),e(913,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),n(914,"p")(915,"strong"),e(916,"Componentes compat\xEDveis:"),t(),n(917,"code"),e(918,"po-datepicker"),t(),e(919,", "),n(920,"code"),e(921,"po-datepicker-range"),t(),e(922,", "),n(923,"code"),e(924,"po-input"),t(),e(925,", "),n(926,"code"),e(927,"po-number"),t(),e(928,", "),n(929,"code"),e(930,"po-decimal"),t(),e(931,", "),n(932,"code"),e(933,"po-combo"),t(),e(934,", "),n(935,"code"),e(936,"po-lookup"),t(),e(937,", "),n(938,"code"),e(939,"po-password"),t()()()(),n(940,"tr",13)(941,"td",14)(942,"div",15)(943,"span",16),e(944," columnRestoreManager"),i(945,"br"),t()()(),n(946,"td",17)(947,"code",29),e(948,"Function"),t()(),n(949,"td",20)(950,"em")(951,"strong"),e(952,"(opcional)"),t()(),n(953,"p"),e(954,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),n(955,"p"),e(956,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),n(957,"p")(958,"strong"),e(959,"Componente compat\xEDvel"),t(),e(960,": "),n(961,"code"),e(962,"po-lookup"),t()()()(),n(963,"tr",13)(964,"td",14)(965,"div",15)(966,"span",16),e(967," columns"),i(968,"br"),t()()(),n(969,"td",17)(970,"code",40),e(971,"Array<PoLookupColumn> "),t(),n(972,"code",41),e(973," number"),t()(),n(974,"td",20)(975,"em")(976,"strong"),e(977,"(opcional)"),t()(),n(978,"p"),e(979,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),n(980,"code"),e(981,"searchService"),t(),e(982,`,
essa propriedade deve receber um array de objetos que implementam a interface `),n(983,"a",42)(984,"code"),e(985,"PoLookupColumn"),t()(),e(986,"."),t(),n(987,"blockquote")(988,"p"),e(989,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),n(990,"em"),e(991,"label"),t(),e(992," e "),n(993,"em"),e(994,"value"),t(),e(995,` para valores
de tela e do model respectivamente.`),t()(),n(996,"p")(997,"strong"),e(998,"Componentes compat\xEDveis:"),t(),n(999,"code"),e(1e3,"po-radio-group"),t(),e(1001,", "),n(1002,"code"),e(1003,"po-lookup"),t(),e(1004,", "),n(1005,"code"),e(1006,"po-checkbox-group"),t(),e(1007,"."),t()()(),n(1008,"tr",13)(1009,"td",14)(1010,"div",15)(1011,"span",16),e(1012," container"),i(1013,"br"),t()()(),n(1014,"td",17)(1015,"code",18),e(1016,"string"),t()(),n(1017,"td",20)(1018,"em")(1019,"strong"),e(1020,"(opcional)"),t()(),n(1021,"p"),e(1022,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),n(1023,"p"),e(1024,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),n(1025,"tr",13)(1026,"td",14)(1027,"div",15)(1028,"span",16),e(1029," customAction"),i(1030,"br"),t()()(),n(1031,"td",17)(1032,"code",43),e(1033,"PoProgressAction"),t()(),n(1034,"td",20)(1035,"em")(1036,"strong"),e(1037,"(opcional)"),t()(),n(1038,"p"),e(1039,"Define uma a\xE7\xE3o personalizada no componente "),n(1040,"code"),e(1041,"po-upload"),t(),e(1042,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(1043,"p")(1044,"strong"),e(1045,"Componente compat\xEDvel"),t(),e(1046,": "),n(1047,"code"),e(1048,"po-upload"),t(),e(1049,","),t(),n(1050,"p")(1051,"strong"),e(1052,"Exemplo de configura\xE7\xE3o"),t(),e(1053,":"),t(),n(1054,"pre")(1055,"code",44),e(1056,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),n(1057,"tr",13)(1058,"td",14)(1059,"div",15)(1060,"span",16),e(1061," customActionClick"),i(1062,"br"),t()()(),n(1063,"td",17)(1064,"code",45),e(1065,"(file: PoUploadFile) => void"),t()(),n(1066,"td",20)(1067,"em")(1068,"strong"),e(1069,"(opcional)"),t()(),n(1070,"p"),e(1071,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(1072,"code"),e(1073,"p-custom-action"),t(),e(1074,"."),t(),n(1075,"p")(1076,"strong"),e(1077,"Componente compat\xEDvel"),t(),e(1078,": "),n(1079,"code"),e(1080,"po-upload"),t(),e(1081,","),t(),n(1082,"p"),e(1083,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(1084,"p")(1085,"strong"),e(1086,"Par\xE2metro do evento"),t(),e(1087,":"),t(),n(1088,"ul")(1089,"li")(1090,"code"),e(1091,"file"),t(),e(1092,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),n(1093,"code"),e(1094,"PoUploadFile"),t(),e(1095," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),n(1096,"p")(1097,"strong"),e(1098,"Exemplo de uso"),t(),e(1099,":"),t(),n(1100,"pre")(1101,"code",44),e(1102,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),n(1103,"tr",13)(1104,"td",14)(1105,"div",15)(1106,"span",16),e(1107," debounceTime"),i(1108,"br"),t()()(),n(1109,"td",17)(1110,"code",41),e(1111,"number"),t()(),n(1112,"td",20)(1113,"em")(1114,"strong"),e(1115,"(opcional)"),t()(),n(1116,"p"),e(1117,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),n(1118,"code"),e(1119,"p-filter-service"),t(),e(1120,")."),t(),n(1121,"p")(1122,"strong"),e(1123,"Componentes compat\xEDveis:"),t(),n(1124,"code"),e(1125,"po-combo"),t(),e(1126,", "),n(1127,"code"),e(1128,"po-multiselect"),t(),e(1129,"."),t()()(),n(1130,"tr",13)(1131,"td",14)(1132,"div",15)(1133,"span",16),e(1134," decimalsLength"),i(1135,"br"),t()()(),n(1136,"td",17)(1137,"code",41),e(1138,"number"),t()(),n(1139,"td",20)(1140,"em")(1141,"strong"),e(1142,"(opcional)"),t()(),n(1143,"p"),e(1144,"Quantidade m\xE1xima de casas decimais."),t(),n(1145,"blockquote")(1146,"p"),e(1147,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(1148,"code"),e(1149,"type"),t(),e(1150," for "),n(1151,"em"),e(1152,"currency"),t(),e(1153," ou "),n(1154,"em"),e(1155,"decimal"),t(),e(1156,"."),t()()()(),n(1157,"tr",13)(1158,"td",14)(1159,"div",15)(1160,"span",16),e(1161," directory"),i(1162,"br"),t()()(),n(1163,"td",17)(1164,"code",28),e(1165,"boolean"),t()(),n(1166,"td",20)(1167,"em")(1168,"strong"),e(1169,"(opcional)"),t()(),n(1170,"p"),e(1171,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(1172,"blockquote")(1173,"p"),e(1174,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(1175,"blockquote")(1176,"p"),e(1177,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(1178,"strong"),e(1179,"Internet Explorer"),t(),e(1180,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),n(1181,"p")(1182,"strong"),e(1183,"Componente compat\xEDvel"),t(),e(1184,": "),n(1185,"code"),e(1186,"po-upload"),t()()()(),n(1187,"tr",13)(1188,"td",14)(1189,"div",15)(1190,"span",16),e(1191," disabled"),i(1192,"br"),t()()(),n(1193,"td",17)(1194,"code",28),e(1195,"boolean"),t()(),n(1196,"td",20)(1197,"em")(1198,"strong"),e(1199,"(opcional)"),t()(),n(1200,"p"),e(1201,"Desabilita o campo caso informar o valor "),n(1202,"em"),e(1203,"true"),t(),e(1204,"."),t()()(),n(1205,"tr",13)(1206,"td",14)(1207,"div",15)(1208,"span",16),e(1209," disabledInitFilter"),i(1210,"br"),t()()(),n(1211,"td",17)(1212,"code",28),e(1213,"boolean"),t()(),n(1214,"td",20)(1215,"em")(1216,"strong"),e(1217,"(opcional)"),t()(),n(1218,"p"),e(1219,"Desabilita o filtro inicial no servi\xE7o do "),n(1220,"code"),e(1221,"po-combo"),t(),e(1222,", que \xE9 executado no primeiro clique no campo."),t()()(),n(1223,"tr",13)(1224,"td",14)(1225,"div",15)(1226,"span",16),e(1227," disabledTabFilter"),i(1228,"br"),t()()(),n(1229,"td",17)(1230,"code",28),e(1231,"boolean"),t()(),n(1232,"td",20)(1233,"em")(1234,"strong"),e(1235,"(opcional)"),t()(),n(1236,"p"),e(1237,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),n(1238,"code"),e(1239,"po-combo"),t(),e(1240,"."),t()()(),n(1241,"tr",13)(1242,"td",14)(1243,"div",15)(1244,"span",16),e(1245," divider"),i(1246,"br"),t()()(),n(1247,"td",17)(1248,"code",18),e(1249,"string"),t()(),n(1250,"td",20)(1251,"em")(1252,"strong"),e(1253,"(opcional)"),t()(),n(1254,"p"),e(1255,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),n(1256,"tr",13)(1257,"td",14)(1258,"div",15)(1259,"span",16),e(1260," dragDrop"),i(1261,"br"),t()()(),n(1262,"td",17)(1263,"code",28),e(1264,"boolean"),t()(),n(1265,"td",20)(1266,"em")(1267,"strong"),e(1268,"(opcional)"),t()(),n(1269,"p"),e(1270,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(1271,"blockquote")(1272,"p"),e(1273,"Recomendamos utilizar apenas um "),n(1274,"code"),e(1275,"po-upload"),t(),e(1276," com esta funcionalidade por tela."),t()(),n(1277,"p")(1278,"strong"),e(1279,"Componente compat\xEDvel"),t(),e(1280,": "),n(1281,"code"),e(1282,"po-upload"),t()()()(),n(1283,"tr",13)(1284,"td",14)(1285,"div",15)(1286,"span",16),e(1287," dragDropHeight"),i(1288,"br"),t()()(),n(1289,"td",17)(1290,"code",41),e(1291,"number"),t()(),n(1292,"td",20)(1293,"em")(1294,"strong"),e(1295,"(opcional)"),t()(),n(1296,"p"),e(1297,"Define em "),n(1298,"em"),e(1299,"pixels"),t(),e(1300," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(1301,"code"),e(1302,"160px"),t(),e(1303,"."),t(),n(1304,"blockquote")(1305,"p"),e(1306,"Esta propriedade funciona somente se a propriedade "),n(1307,"code"),e(1308,"p-drag-drop"),t(),e(1309," estiver habilitada."),t()(),n(1310,"p")(1311,"strong"),e(1312,"Componente compat\xEDvel"),t(),e(1313,": "),n(1314,"code"),e(1315,"po-upload"),t()()()(),n(1316,"tr",13)(1317,"td",14)(1318,"div",15)(1319,"span",16),e(1320," errorAsyncFunction"),i(1321,"br"),t()()(),n(1322,"td",17)(1323,"code",46),e(1324,"(value) => Observable<boolean>"),t()(),n(1325,"td",20)(1326,"em")(1327,"strong"),e(1328,"(opcional)"),t()(),n(1329,"p"),e(1330,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1331,"code"),e(1332,"change"),t(),e(1333," ou "),n(1334,"code"),e(1335,"change-model"),t(),e(1336,", dependendo do valor da propriedade "),n(1337,"code"),e(1338,"triggerMode"),t(),e(1339,"."),t(),n(1340,"blockquote")(1341,"p"),e(1342,"Retorna "),n(1343,"code"),e(1344,"Observable com o valor true"),t(),e(1345," para sinalizar o erro "),n(1346,"code"),e(1347,"false"),t(),e(1348," para indicar que n\xE3o h\xE1 erro."),t()(),n(1349,"p")(1350,"strong"),e(1351,"Componente compat\xEDvel"),t(),e(1352,": "),n(1353,"code"),e(1354,"po-datepicker"),t()()()(),n(1355,"tr",13)(1356,"td",14)(1357,"div",15)(1358,"span",16),e(1359," errorAsyncProperties"),i(1360,"br"),t()()(),n(1361,"td",17)(1362,"code",47),e(1363,"ErrorAsyncProperties"),t()(),n(1364,"td",20)(1365,"em")(1366,"strong"),e(1367,"(opcional)"),t()(),n(1368,"p"),e(1369,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),n(1370,"p")(1371,"strong"),e(1372,"Componentes compat\xEDveis:"),t(),n(1373,"code"),e(1374,"po-input"),t(),e(1375,", "),n(1376,"code"),e(1377,"po-number"),t(),e(1378,", "),n(1379,"code"),e(1380,"po-decimal"),t(),e(1381,", "),n(1382,"code"),e(1383,"po-password"),t(),e(1384,"."),t()()(),n(1385,"tr",13)(1386,"td",14)(1387,"div",15)(1388,"span",16),e(1389," errorLimit"),i(1390,"br"),t()()(),n(1391,"td",17)(1392,"code",28),e(1393,"boolean"),t()(),n(1394,"td",20)(1395,"em")(1396,"strong"),e(1397,"(opcional)"),t()(),n(1398,"p"),e(1399,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(1400,"blockquote")(1401,"p"),e(1402,"Caso essa propriedade seja definida como "),n(1403,"code"),e(1404,"true"),t(),e(1405,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),n(1406,"p")(1407,"strong"),e(1408,"Componentes compat\xEDveis:"),t(),n(1409,"code"),e(1410,"po-checkbox-group"),t(),e(1411,", "),n(1412,"code"),e(1413,"po-combo"),t(),e(1414,", "),n(1415,"code"),e(1416,"po-datepicker"),t(),e(1417,", "),n(1418,"code"),e(1419,"po-datepicker-range"),t(),e(1420,", "),n(1421,"code"),e(1422,"po-decimal"),t(),e(1423,", "),n(1424,"code"),e(1425,"po-input"),t(),e(1426,", "),n(1427,"code"),e(1428,"po-lookup"),t(),e(1429,", "),n(1430,"code"),e(1431,"po-multiselect"),t(),e(1432,", "),n(1433,"code"),e(1434,"po-number"),t(),e(1435,", "),n(1436,"code"),e(1437,"po-password"),t(),e(1438,", "),n(1439,"code"),e(1440,"po-radio-group"),t(),e(1441,", "),n(1442,"code"),e(1443,"po-select"),t(),e(1444,", "),n(1445,"code"),e(1446,"po-switch"),t(),e(1447,", "),n(1448,"code"),e(1449,"po-textarea"),t(),e(1450,"."),t()()(),n(1451,"tr",13)(1452,"td",14)(1453,"div",15)(1454,"span",16),e(1455," errorMessage"),i(1456,"br"),t()()(),n(1457,"td",17)(1458,"code",18),e(1459,"string"),t()(),n(1460,"td",20)(1461,"em")(1462,"strong"),e(1463,"(opcional)"),t()(),n(1464,"p"),e(1465,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),n(1466,"p"),e(1467,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),n(1468,"ul")(1469,"li"),e(1470,"pattern;"),t(),n(1471,"li"),e(1472,"minValue;"),t(),n(1473,"li"),e(1474,"maxValue;"),t(),n(1475,"li"),e(1476,"required;"),t()(),n(1477,"blockquote")(1478,"p"),e(1479,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),n(1480,"code"),e(1481,"po-datepicker"),t(),e(1482,", "),n(1483,"code"),e(1484,"po-input"),t(),e(1485,", "),n(1486,"code"),e(1487,"po-number"),t(),e(1488,", "),n(1489,"code"),e(1490,"po-decimal"),t(),e(1491,", "),n(1492,"code"),e(1493,"po-password"),t(),e(1494,`, \xE9 necess\xE1rio que a propriedade
`),n(1495,"code"),e(1496,"requiredFieldErrorMessage"),t(),e(1497," esteja como "),n(1498,"code"),e(1499,"true"),t(),e(1500,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),n(1501,"code"),e(1502,"po-datepicker-range"),t(),e(1503,", "),n(1504,"code"),e(1505,"po-select"),t(),e(1506,", "),n(1507,"code"),e(1508,"po-checkbox-group"),t(),e(1509,", "),n(1510,"code"),e(1511,"po-radio-group"),t(),e(1512,", "),n(1513,"code"),e(1514,"po-multiselect"),t(),e(1515,", "),n(1516,"code"),e(1517,"po-combo"),t(),e(1518,`,
`),n(1519,"code"),e(1520,"po-lookup"),t(),e(1521," e "),n(1522,"code"),e(1523,"po-textarea"),t(),e(1524," n\xE3o \xE9 necess\xE1rio passar a propriedade "),n(1525,"code"),e(1526,"requiredFieldErrorMessage"),t(),e(1527,"."),t()(),n(1528,"p")(1529,"strong"),e(1530,"Componentes compat\xEDveis:"),t(),n(1531,"code"),e(1532,"po-checkbox-group"),t(),e(1533,", "),n(1534,"code"),e(1535,"po-combo"),t(),e(1536,", "),n(1537,"code"),e(1538,"po-datepicker"),t(),e(1539,", "),n(1540,"code"),e(1541,"po-datepicker-range"),t(),e(1542,", "),n(1543,"code"),e(1544,"po-decimal"),t(),e(1545,", "),n(1546,"code"),e(1547,"po-input"),t(),e(1548,", "),n(1549,"code"),e(1550,"po-lookup"),t(),e(1551,", "),n(1552,"code"),e(1553,"po-multiselect"),t(),e(1554,", "),n(1555,"code"),e(1556,"po-number"),t(),e(1557,", "),n(1558,"code"),e(1559,"po-password"),t(),e(1560,", "),n(1561,"code"),e(1562,"po-radio-group"),t(),e(1563,", "),n(1564,"code"),e(1565,"po-select"),t(),e(1566,", "),n(1567,"code"),e(1568,"po-switch"),t(),e(1569,", "),n(1570,"code"),e(1571,"po-textarea"),t(),e(1572,"."),t()()(),n(1573,"tr",13)(1574,"td",14)(1575,"div",15)(1576,"span",16),e(1577," fieldLabel"),i(1578,"br"),t()()(),n(1579,"td",17)(1580,"code",18),e(1581,"string"),t()(),n(1582,"td",20)(1583,"em")(1584,"strong"),e(1585,"(opcional)"),t()(),n(1586,"p"),e(1587,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),n(1588,"p"),e(1589,"O valor padr\xE3o \xE9: "),n(1590,"code"),e(1591,"label"),t(),e(1592,"."),t(),n(1593,"blockquote")(1594,"p"),e(1595,"Esta propriedade pode ser utilizada em conjunto com: "),n(1596,"code"),e(1597,"options"),t(),e(1598,", "),n(1599,"code"),e(1600,"optionsService"),t(),e(1601," e "),n(1602,"code"),e(1603,"searchService"),t(),e(1604,"."),t()()()(),n(1605,"tr",13)(1606,"td",14)(1607,"div",15)(1608,"span",16),e(1609," fieldValue"),i(1610,"br"),t()()(),n(1611,"td",17)(1612,"code",18),e(1613,"string"),t()(),n(1614,"td",20)(1615,"em")(1616,"strong"),e(1617,"(opcional)"),t()(),n(1618,"p"),e(1619,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),n(1620,"p"),e(1621,"O valor padr\xE3o \xE9: "),n(1622,"code"),e(1623,"value"),t(),e(1624,"."),t(),n(1625,"blockquote")(1626,"p"),e(1627,"Esta propriedade pode ser utilizada em conjunto com: "),n(1628,"code"),e(1629,"options"),t(),e(1630,", "),n(1631,"code"),e(1632,"optionsService"),t(),e(1633," e "),n(1634,"code"),e(1635,"searchService"),t(),e(1636,"."),t()()()(),n(1637,"tr",13)(1638,"td",14)(1639,"div",15)(1640,"span",16),e(1641," filterMinlength"),i(1642,"br"),t()()(),n(1643,"td",17)(1644,"code",41),e(1645,"number"),t()(),n(1646,"td",20)(1647,"em")(1648,"strong"),e(1649,"(opcional)"),t()(),n(1650,"p"),e(1651,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),n(1652,"code"),e(1653,"po-combo"),t(),e(1654,"."),t()()(),n(1655,"tr",13)(1656,"td",14)(1657,"div",15)(1658,"span",16),e(1659," filterMode"),i(1660,"br"),t()()(),n(1661,"td",17)(1662,"code",48),e(1663,"PoMultiselectFilterMode"),t()(),n(1664,"td",20)(1665,"em")(1666,"strong"),e(1667,"(opcional)"),t()(),n(1668,"p"),e(1669,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),n(1670,"code"),e(1671,"startsWith"),t(),e(1672,", "),n(1673,"code"),e(1674,"contains"),t(),e(1675," ou "),n(1676,"code"),e(1677,"endsWith"),t(),e(1678,"."),t(),n(1679,"blockquote")(1680,"p"),e(1681,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),n(1682,"p")(1683,"strong"),e(1684,"Componente compat\xEDvel:"),t(),n(1685,"code"),e(1686,"po-multiselect"),t(),e(1687,"."),t()()(),n(1688,"tr",13)(1689,"td",14)(1690,"div",15)(1691,"span",16),e(1692," forceBooleanComponentType"),i(1693,"br"),t()()(),n(1694,"td",17)(1695,"code",49),e(1696,"ForceBooleanComponentEnum"),t()(),n(1697,"td",20)(1698,"em")(1699,"strong"),e(1700,"(opcional)"),t()(),n(1701,"p"),e(1702,"Valores aceitos:"),t(),n(1703,"ul")(1704,"li"),e(1705,"ForceBooleanComponentEnum.switch"),t(),n(1706,"li"),e(1707,"ForceBooleanComponentEnum.checkbox"),t()()()(),n(1708,"tr",13)(1709,"td",14)(1710,"div",15)(1711,"span",16),e(1712," forceOptionsComponentType"),i(1713,"br"),t()()(),n(1714,"td",17)(1715,"code",50),e(1716,"ForceOptionComponentEnum"),t()(),n(1717,"td",20)(1718,"em")(1719,"strong"),e(1720,"(opcional)"),t()(),n(1721,"p"),e(1722,"pode ser utilizada em conjunto com a propriedade "),n(1723,"code"),e(1724,"options"),t(),e(1725," for\xE7ando o componente a renderizar um "),n(1726,"code"),e(1727,"po-select"),t(),e(1728," ou "),n(1729,"code"),e(1730,"po-radio-group"),t(),e(1731,"."),t(),n(1732,"p"),e(1733,"Valores aceitos:"),t(),n(1734,"ul")(1735,"li"),e(1736,"ForceOptionComponentEnum.radioGroup"),t(),n(1737,"li"),e(1738,"ForceOptionComponentEnum.select"),t()(),n(1739,"blockquote")(1740,"p"),e(1741,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),n(1742,"code"),e(1743,"optionsMulti"),t(),e(1744," e "),n(1745,"code"),e(1746,"optionsService"),t(),e(1747,"."),t()()()(),n(1748,"tr",13)(1749,"td",14)(1750,"div",15)(1751,"span",16),e(1752," formField"),i(1753,"br"),t()()(),n(1754,"td",17)(1755,"code",18),e(1756,"string"),t()(),n(1757,"td",20)(1758,"em")(1759,"strong"),e(1760,"(opcional)"),t()(),n(1761,"p"),e(1762,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(1763,"code"),e(1764,"url"),t(),e(1765,"."),t(),n(1766,"blockquote")(1767,"p"),e(1768,"O valor default \xE9 "),n(1769,"code"),e(1770,"files"),t()()(),n(1771,"p")(1772,"strong"),e(1773,"Componente compat\xEDvel"),t(),e(1774,": "),n(1775,"code"),e(1776,"po-upload"),t()()()(),n(1777,"tr",13)(1778,"td",14)(1779,"div",15)(1780,"span",16),e(1781," format"),i(1782,"br"),t()()(),n(1783,"td",17)(1784,"code",18),e(1785,"string "),t(),n(1786,"code",32),e(1787," Array<string>"),t()(),n(1788,"td",20)(1789,"em")(1790,"strong"),e(1791,"(opcional)"),t()(),n(1792,"p"),e(1793,"Formato de exibi\xE7\xE3o no campo."),t(),n(1794,"p"),e(1795,"Ao utilizar esta propriedade com o "),n(1796,"code"),e(1797,"type"),t(),n(1798,"em"),e(1799,"PoDynamicFieldType.Date"),t(),e(1800," ou "),n(1801,"em"),e(1802,"PoDynamicFieldType.DateTime"),t(),e(1803,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),n(1804,"p"),e(1805,"Valores v\xE1lidos:"),t(),n(1806,"ul")(1807,"li"),e(1808,"dd/mm/yyyy"),t(),n(1809,"li"),e(1810,"mm/dd/yyyy"),t(),n(1811,"li"),e(1812,"yyyy/mm/dd"),t()(),n(1813,"p"),e(1814,"Tamb\xE9m pode-se utilizar em conjunto com "),n(1815,"code"),e(1816,"searchService"),t(),e(1817,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t()()(),n(1818,"tr",13)(1819,"td",14)(1820,"div",15)(1821,"span",16),e(1822," formatModel"),i(1823,"br"),t()()(),n(1824,"td",17)(1825,"code",28),e(1826,"boolean"),t()(),n(1827,"td",20)(1828,"em")(1829,"strong"),e(1830,"(opcional)"),t()(),n(1831,"p"),e(1832,"Indica se o "),n(1833,"code"),e(1834,"model"),t(),e(1835," receber\xE1 o valor formatado pelas propriedades "),n(1836,"code"),e(1837,"p-label-on"),t(),e(1838," e "),n(1839,"code"),e(1840,"p-label-off"),t(),e(1841,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),n(1842,"p"),e(1843,"O valor padr\xE3o \xE9: "),n(1844,"code"),e(1845,"false"),t(),e(1846,"."),t(),n(1847,"blockquote")(1848,"p"),e(1849,"Esta propriedade est\xE1 disponivel apenas para o "),n(1850,"code"),e(1851,"swicth"),t(),e(1852,"."),t()()()(),n(1853,"tr",13)(1854,"td",14)(1855,"div",15)(1856,"span",16),e(1857," gridColumns"),i(1858,"br"),t()()(),n(1859,"td",17)(1860,"code",41),e(1861,"number"),t()(),n(1862,"td",20)(1863,"em")(1864,"strong"),e(1865,"(opcional)"),t()(),n(1866,"p"),e(1867,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),n(1868,"p"),e(1869,"Deve ser usado o sistema de "),n(1870,"strong"),e(1871,"grid"),t(),e(1872," do PO (1 ... 12 colunas)."),t(),n(1873,"blockquote")(1874,"p"),e(1875,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(1876,"tr",13)(1877,"td",14)(1878,"div",15)(1879,"span",16),e(1880," gridLgColumns"),i(1881,"br"),t()()(),n(1882,"td",17)(1883,"code",41),e(1884,"number"),t()(),n(1885,"td",20)(1886,"em")(1887,"strong"),e(1888,"(opcional)"),t()(),n(1889,"p"),e(1890,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(1891,"p"),e(1892,"Deve ser usado o sistema de "),n(1893,"strong"),e(1894,"grid"),t(),e(1895," do PO (1 ... 12 colunas)."),t(),n(1896,"blockquote")(1897,"p"),e(1898,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1899,"code"),e(1900,"gridColumns"),t(),e(1901,"."),t()()()(),n(1902,"tr",13)(1903,"td",14)(1904,"div",15)(1905,"span",16),e(1906," gridLgPull"),i(1907,"br"),t()()(),n(1908,"td",17)(1909,"code",41),e(1910,"number"),t()(),n(1911,"td",20)(1912,"em")(1913,"strong"),e(1914,"(opcional)"),t()(),n(1915,"p"),e(1916,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),n(1917,"p"),e(1918,"Deve ser usado o sistema de "),n(1919,"strong"),e(1920,"grid"),t(),e(1921," do PO (1 ... 11 colunas)."),t(),n(1922,"blockquote")(1923,"p"),e(1924,"Esta propriedade n\xE3o funciona com a propriedade "),n(1925,"code"),e(1926,"gridColumns"),t(),e(1927,". Deve-se especificar o tamanho da tela."),t()()()(),n(1928,"tr",13)(1929,"td",14)(1930,"div",15)(1931,"span",16),e(1932," gridMdColumns"),i(1933,"br"),t()()(),n(1934,"td",17)(1935,"code",41),e(1936,"number"),t()(),n(1937,"td",20)(1938,"em")(1939,"strong"),e(1940,"(opcional)"),t()(),n(1941,"p"),e(1942,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(1943,"p"),e(1944,"Deve ser usado o sistema de "),n(1945,"strong"),e(1946,"grid"),t(),e(1947," do PO (1 ... 12 colunas)."),t(),n(1948,"blockquote")(1949,"p"),e(1950,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(1951,"code"),e(1952,"gridColumns"),t(),e(1953,"."),t()()()(),n(1954,"tr",13)(1955,"td",14)(1956,"div",15)(1957,"span",16),e(1958," gridMdPull"),i(1959,"br"),t()()(),n(1960,"td",17)(1961,"code",41),e(1962,"number"),t()(),n(1963,"td",20)(1964,"em")(1965,"strong"),e(1966,"(opcional)"),t()(),n(1967,"p"),e(1968,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),n(1969,"p"),e(1970,"Deve ser usado o sistema de "),n(1971,"strong"),e(1972,"grid"),t(),e(1973," do PO (1 ... 11 colunas)."),t(),n(1974,"blockquote")(1975,"p"),e(1976,"Esta propriedade n\xE3o funciona com a propriedade "),n(1977,"code"),e(1978,"gridColumns"),t(),e(1979,". Deve-se especificar o tamanho da tela."),t()()()(),n(1980,"tr",13)(1981,"td",14)(1982,"div",15)(1983,"span",16),e(1984," gridSmColumns"),i(1985,"br"),t()()(),n(1986,"td",17)(1987,"code",41),e(1988,"number"),t()(),n(1989,"td",20)(1990,"em")(1991,"strong"),e(1992,"(opcional)"),t()(),n(1993,"p"),e(1994,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(1995,"p"),e(1996,"Deve ser usado o sistema de "),n(1997,"strong"),e(1998,"grid"),t(),e(1999," do PO (1 ... 12 colunas)."),t(),n(2e3,"blockquote")(2001,"p"),e(2002,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2003,"code"),e(2004,"gridColumns"),t(),e(2005,"."),t()()()(),n(2006,"tr",13)(2007,"td",14)(2008,"div",15)(2009,"span",16),e(2010," gridSmPull"),i(2011,"br"),t()()(),n(2012,"td",17)(2013,"code",41),e(2014,"number"),t()(),n(2015,"td",20)(2016,"em")(2017,"strong"),e(2018,"(opcional)"),t()(),n(2019,"p"),e(2020,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),n(2021,"p"),e(2022,"Deve ser usado o sistema de "),n(2023,"strong"),e(2024,"grid"),t(),e(2025," do PO (1 ... 11 colunas)."),t(),n(2026,"blockquote")(2027,"p"),e(2028,"Esta propriedade n\xE3o funciona com a propriedade "),n(2029,"code"),e(2030,"gridColumns"),t(),e(2031,". Deve-se especificar o tamanho da tela."),t()()()(),n(2032,"tr",13)(2033,"td",14)(2034,"div",15)(2035,"span",16),e(2036," gridXlColumns"),i(2037,"br"),t()()(),n(2038,"td",17)(2039,"code",41),e(2040,"number"),t()(),n(2041,"td",20)(2042,"em")(2043,"strong"),e(2044,"(opcional)"),t()(),n(2045,"p"),e(2046,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(2047,"p"),e(2048,"Deve ser usado o sistema de "),n(2049,"strong"),e(2050,"grid"),t(),e(2051," do PO (1 ... 12 colunas)."),t(),n(2052,"blockquote")(2053,"p"),e(2054,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2055,"code"),e(2056,"gridColumns"),t(),e(2057,"."),t()()()(),n(2058,"tr",13)(2059,"td",14)(2060,"div",15)(2061,"span",16),e(2062," gridXlPull"),i(2063,"br"),t()()(),n(2064,"td",17)(2065,"code",41),e(2066,"number"),t()(),n(2067,"td",20)(2068,"em")(2069,"strong"),e(2070,"(opcional)"),t()(),n(2071,"p"),e(2072,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),n(2073,"p"),e(2074,"Deve ser usado o sistema de "),n(2075,"strong"),e(2076,"grid"),t(),e(2077," do PO (1 ... 11 colunas)."),t(),n(2078,"blockquote")(2079,"p"),e(2080,"Esta propriedade n\xE3o funciona com a propriedade "),n(2081,"code"),e(2082,"gridColumns"),t(),e(2083,". Deve-se especificar o tamanho da tela."),t()()()(),n(2084,"tr",13)(2085,"td",14)(2086,"div",15)(2087,"span",16),e(2088," headers"),i(2089,"br"),t()()(),n(2090,"td",17)(2091,"code",51),e(2092,"{ [name: string]: string "),t(),n(2093,"code",52),e(2094,` Array<string>;
}`),t()(),n(2095,"td",20)(2096,"em")(2097,"strong"),e(2098,"(opcional)"),t()(),n(2099,"p"),e(2100,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),n(2101,"p")(2102,"strong"),e(2103,"Componente compat\xEDvel"),t(),e(2104,": "),n(2105,"code"),e(2106,"po-upload"),t()()()(),n(2107,"tr",13)(2108,"td",14)(2109,"div",15)(2110,"span",16),e(2111," help"),i(2112,"br"),t()()(),n(2113,"td",17)(2114,"code",18),e(2115,"string"),t()(),n(2116,"td",20)(2117,"em")(2118,"strong"),e(2119,"(opcional)"),t()(),n(2120,"p"),e(2121,"Texto de ajuda."),t()()(),n(2122,"tr",13)(2123,"td",14)(2124,"div",15)(2125,"span",16),e(2126," helper"),i(2127,"br"),t()()(),n(2128,"td",17)(2129,"code",18),e(2130,"string "),t(),n(2131,"code",53),e(2132," PoHelperOptions"),t()(),n(2133,"td",20)(2134,"em")(2135,"strong"),e(2136,"(opcional)"),t()(),n(2137,"p"),e(2138,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),t()()(),n(2139,"tr",13)(2140,"td",14)(2141,"div",15)(2142,"span",16),e(2143," hideLabelStatus"),i(2144,"br"),t()()(),n(2145,"td",17)(2146,"code",28),e(2147,"boolean"),t()(),n(2148,"td",20)(2149,"em")(2150,"strong"),e(2151,"(opcional)"),t()(),n(2152,"p"),e(2153,"Indica se o status do "),n(2154,"code"),e(2155,"model"),t(),e(2156," ser\xE1 escondido visualmente ao lado do switch"),t()()(),n(2157,"tr",13)(2158,"td",14)(2159,"div",15)(2160,"span",16),e(2161," hidePasswordPeek"),i(2162,"br"),t()()(),n(2163,"td",17)(2164,"code",28),e(2165,"boolean"),t()(),n(2166,"td",20)(2167,"em")(2168,"strong"),e(2169,"(opcional)"),t()(),n(2170,"p"),e(2171,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),n(2172,"code"),e(2173,"po-password"),t(),e(2174,"."),t()()(),n(2175,"tr",13)(2176,"td",14)(2177,"div",15)(2178,"span",16),e(2179," hideRestrictionsInfo"),i(2180,"br"),t()()(),n(2181,"td",17)(2182,"code",28),e(2183,"boolean"),t()(),n(2184,"td",20)(2185,"em")(2186,"strong"),e(2187,"(opcional)"),t()(),n(2188,"p"),e(2189,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),n(2190,"p")(2191,"strong"),e(2192,"Componente compat\xEDvel"),t(),e(2193,": "),n(2194,"code"),e(2195,"po-upload"),t()()()(),n(2196,"tr",13)(2197,"td",14)(2198,"div",15)(2199,"span",16),e(2200," hideSearch"),i(2201,"br"),t()()(),n(2202,"td",17)(2203,"code",28),e(2204,"boolean"),t()(),n(2205,"td",20)(2206,"em")(2207,"strong"),e(2208,"(opcional)"),t()(),n(2209,"p"),e(2210,"Esconde o campo de pesquisa existente dentro do dropdown do "),n(2211,"code"),e(2212,"po-multiselect"),t(),e(2213,"."),t()()(),n(2214,"tr",13)(2215,"td",14)(2216,"div",15)(2217,"span",16),e(2218," hideSelectAll"),i(2219,"br"),t()()(),n(2220,"td",17)(2221,"code",28),e(2222,"boolean"),t()(),n(2223,"td",20)(2224,"em")(2225,"strong"),e(2226,"(opcional)"),t()(),n(2227,"p"),e(2228,'Indica se o campo "Selecionar todos" do '),n(2229,"code"),e(2230,"po-multiselect"),t(),e(2231," ser\xE1 escondido."),t()()(),n(2232,"tr",13)(2233,"td",14)(2234,"div",15)(2235,"span",16),e(2236," hideSelectButton"),i(2237,"br"),t()()(),n(2238,"td",17)(2239,"code",28),e(2240,"boolean"),t()(),n(2241,"td",20)(2242,"em")(2243,"strong"),e(2244,"(opcional)"),t()(),n(2245,"p"),e(2246,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(2247,"blockquote")(2248,"p"),e(2249,"Caso o valor definido seja "),n(2250,"code"),e(2251,"true"),t(),e(2252,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2253,"code"),e(2254,"selectFiles()"),t(),e(2255," para sele\xE7\xE3o de arquivos."),t()(),n(2256,"p")(2257,"strong"),e(2258,"Componente compat\xEDvel"),t(),e(2259,": "),n(2260,"code"),e(2261,"po-upload"),t()()()(),n(2262,"tr",13)(2263,"td",14)(2264,"div",15)(2265,"span",16),e(2266," hideSendButton"),i(2267,"br"),t()()(),n(2268,"td",17)(2269,"code",28),e(2270,"boolean"),t()(),n(2271,"td",20)(2272,"em")(2273,"strong"),e(2274,"(opcional)"),t()(),n(2275,"p"),e(2276,"Omite o bot\xE3o de envio de arquivos."),t(),n(2277,"blockquote")(2278,"p"),e(2279,"Caso o valor definido seja "),n(2280,"code"),e(2281,"true"),t(),e(2282,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(2283,"code"),e(2284,"sendFiles()"),t(),e(2285," para envio do(s) arquivo(s) selecionado(s)."),t()(),n(2286,"p")(2287,"strong"),e(2288,"Componente compat\xEDvel"),t(),e(2289,": "),n(2290,"code"),e(2291,"po-upload"),t()()()(),n(2292,"tr",13)(2293,"td",14)(2294,"div",15)(2295,"span",16),e(2296," icon"),i(2297,"br"),t()()(),n(2298,"td",17)(2299,"code",18),e(2300,"string "),t(),n(2301,"code",54),e(2302," TemplateRef<void>"),t()(),n(2303,"td",20)(2304,"em")(2305,"strong"),e(2306,"(opcional)"),t()(),n(2307,"p"),e(2308,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(2309,"blockquote")(2310,"p"),e(2311,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),n(2312,"ul")(2313,"li"),e(2314,"Input;"),t(),n(2315,"li"),e(2316,"Number;"),t(),n(2317,"li"),e(2318,"Decimal;"),t(),n(2319,"li"),e(2320,"Combo;"),t(),n(2321,"li"),e(2322,"Password;"),t()(),n(2323,"blockquote")(2324,"p"),e(2325,"Veja a disponibilidade de \xEDcones em "),n(2326,"a",55),e(2327,"biblioteca de \xEDcones"),t(),e(2328,"."),t()()()(),n(2329,"tr",13)(2330,"td",14)(2331,"div",15)(2332,"span",16),e(2333," infiniteScroll"),i(2334,"br"),t()()(),n(2335,"td",17)(2336,"code",28),e(2337,"boolean"),t()(),n(2338,"td",20)(2339,"em")(2340,"strong"),e(2341,"(opcional)"),t()(),n(2342,"p"),e(2343,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),n(2344,"p")(2345,"strong"),e(2346,"Componentes compat\xEDveis:"),t(),n(2347,"code"),e(2348,"po-combo"),t(),e(2349,", "),n(2350,"code"),e(2351,"po-lookup"),t(),e(2352,"."),t()()(),n(2353,"tr",13)(2354,"td",14)(2355,"div",15)(2356,"span",16),e(2357," infiniteScrollDistance"),i(2358,"br"),t()()(),n(2359,"td",17)(2360,"code",41),e(2361,"number"),t()(),n(2362,"td",20)(2363,"em")(2364,"strong"),e(2365,"(opcional)"),t()(),n(2366,"p"),e(2367,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),n(2368,"strong"),e(2369,"Exemplos"),t(),n(2370,"code"),e(2371,"{ infiniteScrollDistance: 80 }"),t(),e(2372,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),n(2373,"p")(2374,"strong"),e(2375,"Componente compat\xEDvel:"),t(),n(2376,"code"),e(2377,"po-combo"),t(),e(2378,"."),t()()(),n(2379,"tr",13)(2380,"td",14)(2381,"div",15)(2382,"span",16),e(2383," invalidValue"),i(2384,"br"),t()()(),n(2385,"td",17)(2386,"code",28),e(2387,"boolean"),t()(),n(2388,"td",20)(2389,"em")(2390,"strong"),e(2391,"(opcional)"),t()(),n(2392,"p"),e(2393,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),n(2394,"code"),e(2395,"p-field-error-message"),t(),e(2396,"."),t(),n(2397,"blockquote")(2398,"p"),e(2399,"Caso essa propriedade seja definida como "),n(2400,"code"),e(2401,"true"),t(),e(2402,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()(),n(2403,"p")(2404,"strong"),e(2405,"Componente compat\xEDvel"),t(),e(2406,": "),n(2407,"code"),e(2408,"po-switch"),t()()()(),n(2409,"tr",13)(2410,"td",14)(2411,"div",15)(2412,"span",16),e(2413," isoFormat"),i(2414,"br"),t()()(),n(2415,"td",17)(2416,"code",56),e(2417,"PoDatepickerIsoFormat"),t()(),n(2418,"td",20)(2419,"em")(2420,"strong"),e(2421,"(opcional)"),t()(),n(2422,"p"),e(2423,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),n(2424,"blockquote")(2425,"p"),e(2426,"Veja os valores v\xE1lidos no "),n(2427,"code"),e(2428,"enumPoDatepickerIsoFormat"),t(),e(2429,"."),t()(),n(2430,"p")(2431,"strong"),e(2432,"Componente compat\xEDvel:"),t(),e(2433," po-datepicker"),t()()(),n(2434,"tr",13)(2435,"td",14)(2436,"div",15)(2437,"span",16),e(2438," key"),i(2439,"br"),t()()(),n(2440,"td",17)(2441,"code",28),e(2442,"boolean"),t()(),n(2443,"td",20)(2444,"em")(2445,"strong"),e(2446,"(opcional)"),t()(),n(2447,"p"),e(2448,"Identificador"),t()()(),n(2449,"tr",13)(2450,"td",14)(2451,"div",15)(2452,"span",16),e(2453," keydown"),i(2454,"br"),t()()(),n(2455,"td",17)(2456,"code",29),e(2457,"Function"),t()(),n(2458,"td",20)(2459,"em")(2460,"strong"),e(2461,"(opcional)"),t()(),n(2462,"p"),e(2463,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(2464,"code"),e(2465,"KeyboardEvent"),t(),e(2466," com informa\xE7\xF5es sobre a tecla."),t()()(),n(2467,"tr",13)(2468,"td",14)(2469,"div",15)(2470,"span",16),e(2471," label"),i(2472,"br"),t()()(),n(2473,"td",17)(2474,"code",18),e(2475,"string"),t()(),n(2476,"td",20)(2477,"em")(2478,"strong"),e(2479,"(opcional)"),t()(),n(2480,"p"),e(2481,"R\xF3tulo do campo exibido."),t(),n(2482,"p"),e(2483,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),n(2484,"code"),e(2485,"label"),t(),e(2486," o valor da propriedade "),n(2487,"code"),e(2488,"property"),t(),e(2489," com a primeira letra em mai\xFAsculo."),t()()(),n(2490,"tr",13)(2491,"td",14)(2492,"div",15)(2493,"span",16),e(2494," labelPosition"),i(2495,"br"),t()()(),n(2496,"td",17)(2497,"code",57),e(2498,"PoSwitchLabelPosition"),t()(),n(2499,"td",20)(2500,"em")(2501,"strong"),e(2502,"(opcional)"),t()(),n(2503,"p"),e(2504,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),n(2505,"blockquote")(2506,"p"),e(2507,"Por padr\xE3o exibe \xE0 direita."),t()()()(),n(2508,"tr",13)(2509,"td",14)(2510,"div",15)(2511,"span",16),e(2512," listboxControlPosition"),i(2513,"br"),t()()(),n(2514,"td",17)(2515,"code",58),e(2516,"'top' "),t(),n(2517,"code",59),e(2518," 'bottom'"),t()(),n(2519,"td",20)(2520,"em")(2521,"strong"),e(2522,"(opcional)"),t()(),n(2523,"p"),e(2524,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),n(2525,"code"),e(2526,"listbox"),t(),e(2527," em rela\xE7\xE3o ao campo ("),n(2528,"code"),e(2529,"top"),t(),e(2530," ou "),n(2531,"code"),e(2532,"bottom"),t(),e(2533,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t(),n(2534,"p")(2535,"strong"),e(2536,"Componentes compat\xEDveis:"),t(),n(2537,"code"),e(2538,"po-multiselect"),t(),e(2539,", "),n(2540,"code"),e(2541,"po-combo"),t(),e(2542,"."),t()()(),n(2543,"tr",13)(2544,"td",14)(2545,"div",15)(2546,"span",16),e(2547," literals"),i(2548,"br"),t()()(),n(2549,"td",17)(2550,"code",60),e(2551,"PoLookupLiterals "),t(),n(2552,"code",61),e(2553," PoMultiselectLiterals "),t(),n(2554,"code",62),e(2555," PoComboLiterals "),t(),n(2556,"code",63),e(2557," PoDatepickerRangeLiterals "),t(),n(2558,"code",64),e(2559," PoUploadLiterals"),t()(),n(2560,"td",20)(2561,"em")(2562,"strong"),e(2563,"(opcional)"),t()(),n(2564,"p"),e(2565,"Objeto com as literais usadas para os seguintes componentes: "),n(2566,"code"),e(2567,"po-lookup"),t(),e(2568,", "),n(2569,"code"),e(2570,"po-multiselect"),t(),e(2571,", "),n(2572,"code"),e(2573,"po-combo"),t(),e(2574," e "),n(2575,"code"),e(2576,"po-datepicker-range"),t(),e(2577,"."),t(),n(2578,"blockquote")(2579,"p"),e(2580,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),n(2581,"p")(2582,"strong"),e(2583,"Componentes compat\xEDveis:"),t(),n(2584,"code"),e(2585,"po-lookup"),t(),e(2586,", "),n(2587,"code"),e(2588,"po-multiselect"),t(),e(2589,", "),n(2590,"code"),e(2591,"po-combo"),t(),e(2592,", "),n(2593,"code"),e(2594,"po-datepicker-range"),t()()()(),n(2595,"tr",13)(2596,"td",14)(2597,"div",15)(2598,"span",16),e(2599," locale"),i(2600,"br"),t()()(),n(2601,"td",17)(2602,"code",18),e(2603,"string"),t()(),n(2604,"td",20)(2605,"em")(2606,"strong"),e(2607,"(opcional)"),t()(),n(2608,"p"),e(2609,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),n(2610,"a",65)(2611,"code"),e(2612,"I18n"),t()()(),n(2613,"p"),e(2614,"Exemplo de utiliza\xE7\xE3o:"),t(),n(2615,"pre")(2616,"code"),e(2617,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),t()(),n(2618,"blockquote")(2619,"p"),e(2620,"Para ver quais linguagens suportadas acesse "),n(2621,"a",65)(2622,"code"),e(2623,"I18n"),t()(),e(2624,`
A propriedade ser\xE1 repassada para os componentes que suportam a mesma.`),t()()()(),n(2625,"tr",13)(2626,"td",14)(2627,"div",15)(2628,"span",16),e(2629," mask"),i(2630,"br"),t()()(),n(2631,"td",17)(2632,"code",18),e(2633,"string"),t()(),n(2634,"td",20)(2635,"em")(2636,"strong"),e(2637,"(opcional)"),t()(),n(2638,"p"),e(2639,"M\xE1scara para o campo."),t(),n(2640,"p")(2641,"strong"),e(2642,"Componente compat\xEDvel:"),t(),n(2643,"code"),e(2644,"po-input"),t(),e(2645,"."),t(),n(2646,"blockquote")(2647,"p"),e(2648,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2649,"code"),e(2650,"type: time"),t(),e(2651,"."),t()()()(),n(2652,"tr",13)(2653,"td",14)(2654,"div",15)(2655,"span",16),e(2656," maskFormatModel"),i(2657,"br"),t()()(),n(2658,"td",17)(2659,"code",28),e(2660,"boolean"),t()(),n(2661,"td",20)(2662,"em")(2663,"strong"),e(2664,"(opcional)"),t()(),n(2665,"p"),e(2666,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),n(2667,"code"),e(2668,"false"),t(),e(2669,"."),t(),n(2670,"p")(2671,"strong"),e(2672,"Componente compat\xEDvel:"),t(),n(2673,"code"),e(2674,"po-input"),t(),e(2675,"."),t(),n(2676,"blockquote")(2677,"p"),e(2678,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),n(2679,"code"),e(2680,"type: time"),t(),e(2681,"."),t()()()(),n(2682,"tr",13)(2683,"td",14)(2684,"div",15)(2685,"span",16),e(2686," maskNoLengthValidation"),i(2687,"br"),t()()(),n(2688,"td",17)(2689,"code",28),e(2690,"boolean"),t()(),n(2691,"td",20)(2692,"em")(2693,"strong"),e(2694,"(opcional)"),t()(),n(2695,"p"),e(2696,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),n(2697,"code"),e(2698,"minLength"),t(),e(2699,") e m\xE1ximo ("),n(2700,"code"),e(2701,"maxLength"),t(),e(2702,") quando h\xE1 uma m\xE1scara ("),n(2703,"code"),e(2704,"p-mask"),t(),e(2705,") definida."),t(),n(2706,"ul")(2707,"li"),e(2708,"Quando "),n(2709,"code"),e(2710,"true"),t(),e(2711,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(2712,"li"),e(2713,"Quando "),n(2714,"code"),e(2715,"false"),t(),e(2716,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(2717,"p")(2718,"strong"),e(2719,"Componentes compat\xEDveis:"),t(),n(2720,"code"),e(2721,"po-input"),t(),e(2722,", "),n(2723,"code"),e(2724,"po-decimal"),t(),e(2725,"."),t(),n(2726,"blockquote")(2727,"p"),e(2728,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),n(2729,"code"),e(2730,"p-mask-format-model"),t(),e(2731,"."),t()(),n(2732,"p"),e(2733,"Exemplo:"),t(),n(2734,"pre")(2735,"code"),e(2736,`fields:Array<PoDynamicFormField> = [
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
`),t()(),n(2737,"ul")(2738,"li"),e(2739,"Entrada: "),n(2740,"code"),e(2741,"11.111.111/1111-11"),t(),e(2742," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),t()()()(),n(2743,"tr",13)(2744,"td",14)(2745,"div",15)(2746,"span",16),e(2747," maxLength"),i(2748,"br"),t()()(),n(2749,"td",17)(2750,"code",41),e(2751,"number"),t()(),n(2752,"td",20)(2753,"em")(2754,"strong"),e(2755,"(opcional)"),t()(),n(2756,"p"),e(2757,"Tamanho m\xE1ximo de caracteres."),t(),n(2758,"p")(2759,"strong"),e(2760,"Componentes compat\xEDveis:"),t(),n(2761,"code"),e(2762,"po-input"),t(),e(2763,", "),n(2764,"code"),e(2765,"po-number"),t(),e(2766,", "),n(2767,"code"),e(2768,"po-decimal"),t(),e(2769,", "),n(2770,"code"),e(2771,"po-textarea"),t(),e(2772,", "),n(2773,"code"),e(2774,"po-password"),t(),e(2775,"."),t()()(),n(2776,"tr",13)(2777,"td",14)(2778,"div",15)(2779,"span",16),e(2780," maxValue"),i(2781,"br"),t()()(),n(2782,"td",17)(2783,"code",18),e(2784,"string "),t(),n(2785,"code",41),e(2786," number"),t()(),n(2787,"td",20)(2788,"em")(2789,"strong"),e(2790,"(opcional)"),t()(),n(2791,"p"),e(2792,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2793,"em"),e(2794,"number"),t(),e(2795,", "),n(2796,"em"),e(2797,"date"),t(),e(2798," ou "),n(2799,"em"),e(2800,"dateTime"),t(),e(2801,"."),t(),n(2802,"p")(2803,"strong"),e(2804,"Componentes compat\xEDveis:"),t(),n(2805,"code"),e(2806,"po-datepicker"),t(),e(2807,", "),n(2808,"code"),e(2809,"po-datepicker-range"),t(),e(2810,", "),n(2811,"code"),e(2812,"po-number"),t(),e(2813,", "),n(2814,"code"),e(2815,"po-decimal"),t()()()(),n(2816,"tr",13)(2817,"td",14)(2818,"div",15)(2819,"span",16),e(2820," minLength"),i(2821,"br"),t()()(),n(2822,"td",17)(2823,"code",41),e(2824,"number"),t()(),n(2825,"td",20)(2826,"em")(2827,"strong"),e(2828,"(opcional)"),t()(),n(2829,"p"),e(2830,"Tamanho m\xEDnimo de caracteres."),t(),n(2831,"p")(2832,"strong"),e(2833,"Componentes compat\xEDveis:"),t(),n(2834,"code"),e(2835,"po-input"),t(),e(2836,", "),n(2837,"code"),e(2838,"po-number"),t(),e(2839,", "),n(2840,"code"),e(2841,"po-decimal"),t(),e(2842,", "),n(2843,"code"),e(2844,"po-textarea"),t(),e(2845,", "),n(2846,"code"),e(2847,"po-password"),t(),e(2848,"."),t()()(),n(2849,"tr",13)(2850,"td",14)(2851,"div",15)(2852,"span",16),e(2853," minValue"),i(2854,"br"),t()()(),n(2855,"td",17)(2856,"code",18),e(2857,"string "),t(),n(2858,"code",41),e(2859," number"),t()(),n(2860,"td",20)(2861,"em")(2862,"strong"),e(2863,"(opcional)"),t()(),n(2864,"p"),e(2865,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),n(2866,"em"),e(2867,"number"),t(),e(2868,", "),n(2869,"em"),e(2870,"date"),t(),e(2871," ou "),n(2872,"em"),e(2873,"dateTime"),t(),e(2874,"."),t(),n(2875,"p")(2876,"strong"),e(2877,"Componentes compat\xEDveis:"),t(),n(2878,"code"),e(2879,"po-datepicker"),t(),e(2880,", "),n(2881,"code"),e(2882,"po-datepicker-range"),t(),e(2883,", "),n(2884,"code"),e(2885,"po-number"),t(),e(2886,", "),n(2887,"code"),e(2888,"po-decimal"),t()()()(),n(2889,"tr",13)(2890,"td",14)(2891,"div",15)(2892,"span",16),e(2893," multiple"),i(2894,"br"),t()()(),n(2895,"td",17)(2896,"code",28),e(2897,"boolean"),t()(),n(2898,"td",20)(2899,"em")(2900,"strong"),e(2901,"(opcional)"),t()(),n(2902,"p"),e(2903,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),n(2904,"p")(2905,"strong"),e(2906,"Componentes compat\xEDveis:"),t(),n(2907,"code"),e(2908,"po-lookup"),t(),e(2909,", "),n(2910,"code"),e(2911,"po-upload"),t()()()(),n(2912,"tr",13)(2913,"td",14)(2914,"div",15)(2915,"span",16),e(2916," noAutocomplete"),i(2917,"br"),t()()(),n(2918,"td",17)(2919,"code",28),e(2920,"boolean"),t()(),n(2921,"td",20)(2922,"em")(2923,"strong"),e(2924,"(opcional)"),t()(),n(2925,"p"),e(2926,"Define a propriedade nativa "),n(2927,"code"),e(2928,"autocomplete"),t(),e(2929," do campo como off."),t(),n(2930,"p")(2931,"strong"),e(2932,"Componentes compat\xEDveis:"),t(),n(2933,"code"),e(2934,"po-datepicker"),t(),e(2935,", "),n(2936,"code"),e(2937,"po-datepicker-range"),t(),e(2938,", "),n(2939,"code"),e(2940,"po-input"),t(),e(2941,", "),n(2942,"code"),e(2943,"po-number"),t(),e(2944,", "),n(2945,"code"),e(2946,"po-decimal"),t(),e(2947,", "),n(2948,"code"),e(2949,"po-lookup"),t(),e(2950,", "),n(2951,"code"),e(2952,"po-password"),t()()()(),n(2953,"tr",13)(2954,"td",14)(2955,"div",15)(2956,"span",16),e(2957," offsetColumns"),i(2958,"br"),t()()(),n(2959,"td",17)(2960,"code",41),e(2961,"number"),t()(),n(2962,"td",20)(2963,"em")(2964,"strong"),e(2965,"(opcional)"),t()(),n(2966,"p"),e(2967,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),n(2968,"p"),e(2969,"Deve ser usado o sistema de "),n(2970,"strong"),e(2971,"grid"),t(),e(2972," do PO (1 ... 12 colunas)."),t(),n(2973,"blockquote")(2974,"p"),e(2975,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),n(2976,"tr",13)(2977,"td",14)(2978,"div",15)(2979,"span",16),e(2980," offsetLgColumns"),i(2981,"br"),t()()(),n(2982,"td",17)(2983,"code",41),e(2984,"number"),t()(),n(2985,"td",20)(2986,"em")(2987,"strong"),e(2988,"(opcional)"),t()(),n(2989,"p"),e(2990,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),n(2991,"p"),e(2992,"Deve ser usado o sistema de "),n(2993,"strong"),e(2994,"grid"),t(),e(2995," do PO (1 ... 12 colunas)."),t(),n(2996,"blockquote")(2997,"p"),e(2998,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(2999,"code"),e(3e3,"offsetColumns"),t(),e(3001,"."),t()()()(),n(3002,"tr",13)(3003,"td",14)(3004,"div",15)(3005,"span",16),e(3006," offsetMdColumns"),i(3007,"br"),t()()(),n(3008,"td",17)(3009,"code",41),e(3010,"number"),t()(),n(3011,"td",20)(3012,"em")(3013,"strong"),e(3014,"(opcional)"),t()(),n(3015,"p"),e(3016,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),n(3017,"p"),e(3018,"Deve ser usado o sistema de "),n(3019,"strong"),e(3020,"grid"),t(),e(3021," do PO (1 ... 12 colunas)."),t(),n(3022,"blockquote")(3023,"p"),e(3024,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3025,"code"),e(3026,"offsetColumns"),t(),e(3027,"."),t()()()(),n(3028,"tr",13)(3029,"td",14)(3030,"div",15)(3031,"span",16),e(3032," offsetSmColumns"),i(3033,"br"),t()()(),n(3034,"td",17)(3035,"code",41),e(3036,"number"),t()(),n(3037,"td",20)(3038,"em")(3039,"strong"),e(3040,"(opcional)"),t()(),n(3041,"p"),e(3042,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),n(3043,"p"),e(3044,"Deve ser usado o sistema de "),n(3045,"strong"),e(3046,"grid"),t(),e(3047," do PO (1 ... 12 colunas)."),t(),n(3048,"blockquote")(3049,"p"),e(3050,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3051,"code"),e(3052,"offsetColumns"),t(),e(3053,"."),t()()()(),n(3054,"tr",13)(3055,"td",14)(3056,"div",15)(3057,"span",16),e(3058," offsetXlColumns"),i(3059,"br"),t()()(),n(3060,"td",17)(3061,"code",41),e(3062,"number"),t()(),n(3063,"td",20)(3064,"em")(3065,"strong"),e(3066,"(opcional)"),t()(),n(3067,"p"),e(3068,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),n(3069,"p"),e(3070,"Deve ser usado o sistema de "),n(3071,"strong"),e(3072,"grid"),t(),e(3073," do PO (1 ... 12 colunas)."),t(),n(3074,"blockquote")(3075,"p"),e(3076,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),n(3077,"code"),e(3078,"offsetColumns"),t(),e(3079,"."),t()()()(),n(3080,"tr",13)(3081,"td",14)(3082,"div",15)(3083,"span",16),e(3084," onError"),i(3085,"br"),t()()(),n(3086,"td",17)(3087,"code",29),e(3088,"Function"),t()(),n(3089,"td",20)(3090,"em")(3091,"strong"),e(3092,"(opcional)"),t()(),n(3093,"p"),e(3094,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(3095,"blockquote")(3096,"p"),e(3097,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3098,"code"),e(3099,"HttpErrorResponse"),t(),e(3100,"."),t()(),n(3101,"p")(3102,"strong"),e(3103,"Componente compat\xEDvel"),t(),e(3104,": "),n(3105,"code"),e(3106,"po-upload"),t()()()(),n(3107,"tr",13)(3108,"td",14)(3109,"div",15)(3110,"span",16),e(3111," onSuccess"),i(3112,"br"),t()()(),n(3113,"td",17)(3114,"code",29),e(3115,"Function"),t()(),n(3116,"td",20)(3117,"em")(3118,"strong"),e(3119,"(opcional)"),t()(),n(3120,"p"),e(3121,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(3122,"blockquote")(3123,"p"),e(3124,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(3125,"code"),e(3126,"HttpResponse"),t(),e(3127,"."),t()(),n(3128,"p")(3129,"strong"),e(3130,"Componente compat\xEDvel"),t(),e(3131,": "),n(3132,"code"),e(3133,"po-upload"),t()()()(),n(3134,"tr",13)(3135,"td",14)(3136,"div",15)(3137,"span",16),e(3138," onUpload"),i(3139,"br"),t()()(),n(3140,"td",17)(3141,"code",29),e(3142,"Function"),t()(),n(3143,"td",20)(3144,"em")(3145,"strong"),e(3146,"(opcional)"),t()(),n(3147,"p"),e(3148,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(3149,"pre")(3150,"code"),e(3151,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),n(3152,"p")(3153,"strong"),e(3154,"Componente compat\xEDvel"),t(),e(3155,": "),n(3156,"code"),e(3157,"po-upload"),t()()()(),n(3158,"tr",13)(3159,"td",14)(3160,"div",15)(3161,"span",16),e(3162," optional"),i(3163,"br"),t()()(),n(3164,"td",17)(3165,"code",28),e(3166,"boolean"),t()(),n(3167,"td",20)(3168,"em")(3169,"strong"),e(3170,"(opcional)"),t()(),n(3171,"p"),e(3172,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(3173,"blockquote")(3174,"p"),e(3175,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),n(3176,"ul")(3177,"li"),e(3178,"O campo for "),n(3179,"code"),e(3180,"required"),t(),e(3181,", ou;"),t(),n(3182,"li"),e(3183,"N\xE3o possuir "),n(3184,"code"),e(3185,"help"),t(),e(3186," e "),n(3187,"code"),e(3188,"label"),t(),e(3189,"."),t()()()(),n(3190,"tr",13)(3191,"td",14)(3192,"div",15)(3193,"span",16),e(3194," options"),i(3195,"br"),t()()(),n(3196,"td",17)(3197,"code",32),e(3198,"Array<string> "),t(),n(3199,"code",66),e(3200," Array<PoSelectOption> "),t(),n(3201,"code",67),e(3202," Array<PoMultiselectOption> "),t(),n(3203,"code",68),e(3204," Array<PoCheckboxGroupOption> "),t(),n(3205,"code",69),e(3206," Array<any>"),t()(),n(3207,"td",20)(3208,"em")(3209,"strong"),e(3210,"(opcional)"),t()(),n(3211,"p"),e(3212,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),n(3213,"p")(3214,"strong"),e(3215,"Componentes compat\xEDveis:"),t(),n(3216,"code"),e(3217,"po-select"),t(),e(3218,", "),n(3219,"code"),e(3220,"po-radio-group"),t(),e(3221,", "),n(3222,"code"),e(3223,"po-checkbox-group"),t(),e(3224,", "),n(3225,"code"),e(3226,"po-multiselect"),t(),e(3227,"."),t()()(),n(3228,"tr",13)(3229,"td",14)(3230,"div",15)(3231,"span",16),e(3232," optionsMulti"),i(3233,"br"),t()()(),n(3234,"td",17)(3235,"code",28),e(3236,"boolean"),t()(),n(3237,"td",20)(3238,"em")(3239,"strong"),e(3240,"(opcional)"),t()(),n(3241,"p"),e(3242,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),n(3243,"tr",13)(3244,"td",14)(3245,"div",15)(3246,"span",16),e(3247," optionsService"),i(3248,"br"),t()()(),n(3249,"td",17)(3250,"code",18),e(3251,"string "),t(),n(3252,"code",70),e(3253," PoComboFilter "),t(),n(3254,"code",71),e(3255," PoMultiselectFilter"),t()(),n(3256,"td",20)(3257,"em")(3258,"strong"),e(3259,"(opcional)"),t()(),n(3260,"p"),e(3261,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),n(3262,"strong"),e(3263,"Importante"),t()(),n(3264,"blockquote")(3265,"p"),e(3266,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),n(3267,"a",72),e(3268,"guia de API do PO UI"),t(),e(3269,"."),t()()()(),n(3270,"tr",13)(3271,"td",14)(3272,"div",15)(3273,"span",16),e(3274," order"),i(3275,"br"),t()()(),n(3276,"td",17)(3277,"code",41),e(3278,"number"),t()(),n(3279,"td",20)(3280,"em")(3281,"strong"),e(3282,"(opcional)"),t()(),n(3283,"p"),e(3284,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),n(3285,"p"),e(3286,"Exemplo de utiliza\xE7\xE3o:"),t(),n(3287,"p")(3288,"code"),e(3289,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),n(3290,"p"),e(3291,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),n(3292,"code"),e(3293,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),n(3294,"p"),e(3295,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),n(3296,"p"),e(3297,"Campos sem "),n(3298,"code"),e(3299,"order"),t(),e(3300,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),n(3301,"tr",13)(3302,"td",14)(3303,"div",15)(3304,"span",16),e(3305," params"),i(3306,"br"),t()()(),n(3307,"td",17)(3308,"code",33),e(3309,"any"),t()(),n(3310,"td",20)(3311,"em")(3312,"strong"),e(3313,"(opcional)"),t()(),n(3314,"p"),e(3315,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),n(3316,"code"),e(3317,"po-lookup"),t(),e(3318,` e
`),n(3319,"code"),e(3320,"po-combo"),t(),e(3321,"."),t(),n(3322,"p"),e(3323,"Por exemplo, para o par\xE2metro "),n(3324,"code"),e(3325,"{ age: 23 }"),t(),e(3326," a URL da requisi\xE7\xE3o ficaria:"),t(),n(3327,"p")(3328,"code"),e(3329,"url + ?age=23&filter=Peter"),t()()()(),n(3330,"tr",13)(3331,"td",14)(3332,"div",15)(3333,"span",16),e(3334," pattern"),i(3335,"br"),t()()(),n(3336,"td",17)(3337,"code",18),e(3338,"string"),t()(),n(3339,"td",20)(3340,"em")(3341,"strong"),e(3342,"(opcional)"),t()(),n(3343,"p"),e(3344,"Regex para valida\xE7\xE3o do campo."),t(),n(3345,"p")(3346,"strong"),e(3347,"Componentes compat\xEDveis:"),t(),n(3348,"code"),e(3349,"po-input"),t(),e(3350,", "),n(3351,"code"),e(3352,"po-password"),t(),e(3353,"."),t()()(),n(3354,"tr",13)(3355,"td",14)(3356,"div",15)(3357,"span",16),e(3358," placeholder"),i(3359,"br"),t()()(),n(3360,"td",17)(3361,"code",18),e(3362,"string"),t()(),n(3363,"td",20)(3364,"em")(3365,"strong"),e(3366,"(opcional)"),t()(),n(3367,"p"),e(3368,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t()()(),n(3369,"tr",13)(3370,"td",14)(3371,"div",15)(3372,"span",16),e(3373," placeholderSearch"),i(3374,"br"),t()()(),n(3375,"td",17)(3376,"code",18),e(3377,"string"),t()(),n(3378,"td",20)(3379,"em")(3380,"strong"),e(3381,"(opcional)"),t()(),n(3382,"p"),e(3383,"Placeholder do campo de pesquisa do "),n(3384,"code"),e(3385,"po-multiselect"),t(),e(3386,"."),t(),n(3387,"blockquote")(3388,"p"),e(3389,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),n(3390,"tr",13)(3391,"td",14)(3392,"div",15)(3393,"span",16),e(3394," property"),i(3395,"br"),t()()(),n(3396,"td",17)(3397,"code",18),e(3398,"string"),t()(),n(3399,"td",20)(3400,"p"),e(3401,"Nome de refer\xEAncia do campo."),t()()(),n(3402,"tr",13)(3403,"td",14)(3404,"div",15)(3405,"span",16),e(3406," range"),i(3407,"br"),t()()(),n(3408,"td",17)(3409,"code",28),e(3410,"boolean"),t()(),n(3411,"td",20)(3412,"em")(3413,"strong"),e(3414,"(opcional)"),t()(),n(3415,"p"),e(3416,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),n(3417,"blockquote")(3418,"p"),e(3419,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),n(3420,"tr",13)(3421,"td",14)(3422,"div",15)(3423,"span",16),e(3424," readonly"),i(3425,"br"),t()()(),n(3426,"td",17)(3427,"code",28),e(3428,"boolean"),t()(),n(3429,"td",20)(3430,"em")(3431,"strong"),e(3432,"(opcional)"),t()(),n(3433,"p"),e(3434,"Indica que o campo ser\xE1 somente leitura."),t(),n(3435,"p")(3436,"strong"),e(3437,"Componentes compat\xEDveis:"),t(),n(3438,"code"),e(3439,"po-datepicker"),t(),e(3440,", "),n(3441,"code"),e(3442,"po-datepicker-range"),t(),e(3443,", "),n(3444,"code"),e(3445,"po-input"),t(),e(3446,", "),n(3447,"code"),e(3448,"po-number"),t(),e(3449,", "),n(3450,"code"),e(3451,"po-decimal"),t(),e(3452,", "),n(3453,"code"),e(3454,"po-select"),t(),e(3455,", "),n(3456,"code"),e(3457,"po-textarea"),t(),e(3458,", "),n(3459,"code"),e(3460,"po-password"),t()()()(),n(3461,"tr",13)(3462,"td",14)(3463,"div",15)(3464,"span",16),e(3465," removeInitialFilter"),i(3466,"br"),t()()(),n(3467,"td",17)(3468,"code",28),e(3469,"boolean"),t()(),n(3470,"td",20)(3471,"em")(3472,"strong"),e(3473,"(opcional)"),t()(),n(3474,"p"),e(3475,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),n(3476,"blockquote")(3477,"p"),e(3478,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),n(3479,"p")(3480,"strong"),e(3481,"Componente compat\xEDvel"),t(),e(3482,": "),n(3483,"code"),e(3484,"po-combo"),t()()()(),n(3485,"tr",13)(3486,"td",14)(3487,"div",15)(3488,"span",16),e(3489," required"),i(3490,"br"),t()()(),n(3491,"td",17)(3492,"code",28),e(3493,"boolean"),t()(),n(3494,"td",20)(3495,"em")(3496,"strong"),e(3497,"(opcional)"),t()(),n(3498,"p"),e(3499,"Define a obrigatoriedade do campo."),t()()(),n(3500,"tr",13)(3501,"td",14)(3502,"div",15)(3503,"span",16),e(3504," requiredFieldErrorMessage"),i(3505,"br"),t()()(),n(3506,"td",17)(3507,"code",28),e(3508,"boolean"),t()(),n(3509,"td",20)(3510,"em")(3511,"strong"),e(3512,"(opcional)"),t()(),n(3513,"p"),e(3514,"Exibe a mensagem setada na propriedade "),n(3515,"code"),e(3516,"errorMessage"),t(),e(3517," se o campo estiver vazio e for requerido."),t(),n(3518,"blockquote")(3519,"p"),e(3520,"Necess\xE1rio que a propriedade "),n(3521,"code"),e(3522,"required"),t(),e(3523," esteja habilitada."),t()(),n(3524,"p")(3525,"strong"),e(3526,"Componentes compat\xEDveis:"),t(),n(3527,"code"),e(3528,"po-datepicker"),t(),e(3529,", "),n(3530,"code"),e(3531,"po-input"),t(),e(3532,", "),n(3533,"code"),e(3534,"po-number"),t(),e(3535,", "),n(3536,"code"),e(3537,"po-decimal"),t(),e(3538,", "),n(3539,"code"),e(3540,"po-password"),t(),e(3541,"."),t()()(),n(3542,"tr",13)(3543,"td",14)(3544,"div",15)(3545,"span",16),e(3546," restrictions"),i(3547,"br"),t()()(),n(3548,"td",17)(3549,"code",73),e(3550,"PoUploadFileRestrictions"),t()(),n(3551,"td",20)(3552,"em")(3553,"strong"),e(3554,"(opcional)"),t()(),n(3555,"p"),e(3556,"Objeto que segue a defini\xE7\xE3o da interface "),n(3557,"code"),e(3558,"PoUploadFileRestrictions"),t(),e(3559,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),n(3560,"p")(3561,"strong"),e(3562,"Componente compat\xEDvel"),t(),e(3563,": "),n(3564,"code"),e(3565,"po-upload"),t()()()(),n(3566,"tr",13)(3567,"td",14)(3568,"div",15)(3569,"span",16),e(3570," rows"),i(3571,"br"),t()()(),n(3572,"td",17)(3573,"code",41),e(3574,"number"),t()(),n(3575,"td",20)(3576,"em")(3577,"strong"),e(3578,"(opcional)"),t()(),n(3579,"p"),e(3580,"Quantidade de linhas exibidas no "),n(3581,"code"),e(3582,"po-textarea"),t(),e(3583,"."),t()()(),n(3584,"tr",13)(3585,"td",14)(3586,"div",15)(3587,"span",16),e(3588," searchService"),i(3589,"br"),t()()(),n(3590,"td",17)(3591,"code",18),e(3592,"string "),t(),n(3593,"code",74),e(3594," PoLookupFilter"),t()(),n(3595,"td",20)(3596,"em")(3597,"strong"),e(3598,"(opcional)"),t()(),n(3599,"p"),e(3600,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),n(3601,"code"),e(3602,"columns"),t(),e(3603,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),n(3604,"strong"),e(3605,"Importante:"),t()(),n(3606,"blockquote")(3607,"p"),e(3608,"Caso utilizar a propriedade "),n(3609,"code"),e(3610,"optionsService"),t(),e(3611,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),n(3612,"a",72),e(3613,"guia de API do PO UI"),t(),e(3614,"."),t()()()(),n(3615,"tr",13)(3616,"td",14)(3617,"div",15)(3618,"span",16),e(3619," secret"),i(3620,"br"),t()()(),n(3621,"td",17)(3622,"code",28),e(3623,"boolean"),t()(),n(3624,"td",20)(3625,"em")(3626,"strong"),e(3627,"(opcional)"),t()(),n(3628,"p"),e(3629,"Esconde a informa\xE7\xE3o estilo "),n(3630,"em"),e(3631,"password"),t(),e(3632,", pode ser utilizado quando o tipo de dado for "),n(3633,"em"),e(3634,"string"),t(),e(3635,"."),t()()(),n(3636,"tr",13)(3637,"td",14)(3638,"div",15)(3639,"span",16),e(3640," showRequired"),i(3641,"br"),t()()(),n(3642,"td",17)(3643,"code",28),e(3644,"boolean"),t()(),n(3645,"td",20)(3646,"em")(3647,"strong"),e(3648,"(opcional)"),t()(),n(3649,"p"),e(3650,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(3651,"blockquote")(3652,"p"),e(3653,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(3654,"ul")(3655,"li"),e(3656,"N\xE3o possuir "),n(3657,"code"),e(3658,"p-help"),t(),e(3659," e/ou "),n(3660,"code"),e(3661,"p-label"),t(),e(3662,"."),t()()()(),n(3663,"tr",13)(3664,"td",14)(3665,"div",15)(3666,"span",16),e(3667," showThumbnail"),i(3668,"br"),t()()(),n(3669,"td",17)(3670,"code",28),e(3671,"boolean"),t()(),n(3672,"td",20)(3673,"em")(3674,"strong"),e(3675,"(opcional)"),t()(),n(3676,"p"),e(3677,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),t(),n(3678,"blockquote")(3679,"p"),e(3680,"Propriedade funciona apenas em arquivos de formato de imagem ("),n(3681,"code"),e(3682,".png"),t(),e(3683,", "),n(3684,"code"),e(3685,".jpg"),t(),e(3686,", "),n(3687,"code"),e(3688,".jpeg"),t(),e(3689," e "),n(3690,"code"),e(3691,".gif"),t(),e(3692,")."),t()(),n(3693,"p")(3694,"strong"),e(3695,"Componente compat\xEDvel"),t(),e(3696,": "),n(3697,"code"),e(3698,"po-upload"),t()()()(),n(3699,"tr",13)(3700,"td",14)(3701,"div",15)(3702,"span",16),e(3703," size"),i(3704,"br"),t()()(),n(3705,"td",17)(3706,"code",18),e(3707,"string"),t()(),n(3708,"td",20)(3709,"em")(3710,"strong"),e(3711,"(opcional)"),t()(),n(3712,"p"),e(3713,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),n(3714,"ul")(3715,"li")(3716,"code"),e(3717,"small"),t(),e(3718,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(3719,"li")(3720,"code"),e(3721,"medium"),t(),e(3722,": aplica a medida medium de cada componente."),t(),n(3723,"li")(3724,"code"),e(3725,"large"),t(),e(3726,": aplica a medida large de cada componente (dispon\xEDvel para "),n(3727,"code"),e(3728,"po-checkbox"),t(),e(3729," e "),n(3730,"code"),e(3731,"po-radio-group"),t(),e(3732,")."),n(3733,"blockquote")(3734,"p"),e(3735,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(3736,"code"),e(3737,"medium"),t(),e(3738,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(3739,"a",21),e(3740,"po-theme"),t(),e(3741,"."),t()()()()()(),n(3742,"tr",13)(3743,"td",14)(3744,"div",15)(3745,"span",16),e(3746," sort"),i(3747,"br"),t()()(),n(3748,"td",17)(3749,"code",28),e(3750,"boolean"),t()(),n(3751,"td",20)(3752,"em")(3753,"strong"),e(3754,"(opcional)"),t()(),n(3755,"p"),e(3756,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),n(3757,"p")(3758,"strong"),e(3759,"Componentes compat\xEDveis:"),t(),n(3760,"code"),e(3761,"po-combo"),t(),e(3762,", po-multiselect"),t()()(),n(3763,"tr",13)(3764,"td",14)(3765,"div",15)(3766,"span",16),e(3767," step"),i(3768,"br"),t()()(),n(3769,"td",17)(3770,"code",41),e(3771,"number"),t()(),n(3772,"td",20)(3773,"em")(3774,"strong"),e(3775,"(opcional)"),t()(),n(3776,"p"),e(3777,"Intervalo utilizado no "),n(3778,"code"),e(3779,"po-number"),t(),e(3780,"."),t()()(),n(3781,"tr",13)(3782,"td",14)(3783,"div",15)(3784,"span",16),e(3785," thousandMaxlength"),i(3786,"br"),t()()(),n(3787,"td",17)(3788,"code",41),e(3789,"number"),t()(),n(3790,"td",20)(3791,"em")(3792,"strong"),e(3793,"(opcional)"),t()(),n(3794,"p"),e(3795,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),n(3796,"blockquote")(3797,"p"),e(3798,"Esta propriedade s\xF3 pode ser utilizada quando o "),n(3799,"code"),e(3800,"type"),t(),e(3801," for "),n(3802,"em"),e(3803,"currency"),t(),e(3804," ou "),n(3805,"em"),e(3806,"decimal"),t(),e(3807,"."),t()()()(),n(3808,"tr",13)(3809,"td",14)(3810,"div",15)(3811,"span",16),e(3812," type"),i(3813,"br"),t()()(),n(3814,"td",17)(3815,"code",18),e(3816,"string "),t(),n(3817,"code",75),e(3818," PoDynamicFieldType"),t()(),n(3819,"td",20)(3820,"em")(3821,"strong"),e(3822,"(opcional)"),t()(),n(3823,"p"),e(3824,"Tipo do valor campo."),t(),n(3825,"p"),e(3826,"Valores v\xE1lidos:"),t(),n(3827,"ul")(3828,"li")(3829,"code"),e(3830,"boolean"),t(),e(3831,": Valores "),n(3832,"em"),e(3833,"booleanos"),t(),e(3834,"."),t(),n(3835,"li")(3836,"code"),e(3837,"currency"),t(),e(3838,": Valores monet\xE1rios."),t(),n(3839,"li")(3840,"code"),e(3841,"decimal"),t(),e(3842,": Valores decimais."),t(),n(3843,"li")(3844,"code"),e(3845,"date"),t(),e(3846,": Valores de datas."),n(3847,"ul")(3848,"li"),e(3849,"Aceita os tipos "),n(3850,"strong"),e(3851,"string"),t(),e(3852," e "),n(3853,"strong"),e(3854,"Date"),t(),e(3855,` padr\xE3o do Javascript,
por exemplo: `),n(3856,"code"),e(3857,"'2017-11-28'"),t(),e(3858," ou "),n(3859,"code"),e(3860,"new Date(2017, 10, 28)"),t(),e(3861,"."),t()()(),n(3862,"li")(3863,"code"),e(3864,"dateTime"),t(),e(3865,": Valor de data com hor\xE1rio."),n(3866,"ul")(3867,"li"),e(3868,"Aceita o tipo "),n(3869,"em"),e(3870,"string"),t(),e(3871," no formato "),n(3872,"strong"),e(3873,"ISO-8601"),t(),e(3874," extendido "),n(3875,"strong"),e(3876,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(3877,`
e o tipo `),n(3878,"strong"),e(3879,"Date"),t(),e(3880," padr\xE3o do Javascript, por exemplo: "),n(3881,"code"),e(3882,"'2017-11-28T00:00:00-02:00'"),t(),e(3883," ou "),n(3884,"code"),e(3885,"new Date(2017, 10, 28)"),t(),e(3886,"."),t()()(),n(3887,"li")(3888,"code"),e(3889,"number"),t(),e(3890,": Valores num\xE9ricos."),t(),n(3891,"li")(3892,"code"),e(3893,"string"),t(),e(3894,": Textos."),t(),n(3895,"li")(3896,"code"),e(3897,"time"),t(),e(3898,": Valor do hor\xE1rio."),n(3899,"ul")(3900,"li"),e(3901,"Aceita o tipo "),n(3902,"strong"),e(3903,"string"),t(),e(3904," nos formatos "),n(3905,"strong"),e(3906,"'HH:mm:ss'"),t(),e(3907," ou "),n(3908,"strong"),e(3909,"'HH:mm:ss.ffffff'"),t(),e(3910,", por exemplo: "),n(3911,"code"),e(3912,"'23:12:45'"),t(),e(3913,"."),t()()()()()(),n(3914,"tr",13)(3915,"td",14)(3916,"div",15)(3917,"span",16),e(3918," url"),i(3919,"br"),t()()(),n(3920,"td",17)(3921,"code",18),e(3922,"string"),t()(),n(3923,"td",20)(3924,"em")(3925,"strong"),e(3926,"(opcional)"),t()(),n(3927,"p"),e(3928,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),n(3929,"p")(3930,"strong"),e(3931,"Componente compat\xEDvel"),t(),e(3932,": "),n(3933,"code"),e(3934,"po-upload"),t()()()(),n(3935,"tr",13)(3936,"td",14)(3937,"div",15)(3938,"span",16),e(3939," validate"),i(3940,"br"),t()()(),n(3941,"td",17)(3942,"code",18),e(3943,"string "),t(),n(3944,"code",29),e(3945," Function"),t()(),n(3946,"td",20)(3947,"em")(3948,"strong"),e(3949,"(opcional)"),t()(),n(3950,"p"),e(3951,"Fun\xE7\xE3o ou servi\xE7o para validar as "),n(3952,"strong"),e(3953,"mudan\xE7as do campo"),t(),e(3954,"."),t(),n(3955,"ul")(3956,"li"),e(3957,"A propriedade aceita os seguintes tipos:"),t()(),n(3958,"ul")(3959,"li")(3960,"strong"),e(3961,"String"),t(),e(3962,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),n(3963,"code"),e(3964,"POST"),t(),e(3965,"."),t(),n(3966,"li")(3967,"strong"),e(3968,"Function"),t(),e(3969,": M\xE9todo que ser\xE1 executado."),t()(),n(3970,"p"),e(3971,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),n(3972,"code"),e(3973,"PoDynamicFormFieldChanged"),t(),e(3974,":"),t(),n(3975,"p")(3976,"code"),e(3977,"{ property: 'property name', value: 'new value' }"),t()(),n(3978,"p"),e(3979,"O retorno desta fun\xE7\xE3o deve ser do tipo "),n(3980,"a",76),e(3981,"PoDynamicFormFieldValidation"),t(),e(3982,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),n(3983,"pre")(3984,"code"),e(3985,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),n(3986,"p"),e(3987,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),n(3988,"code"),e(3989,"bind"),t(),e(3990,`, por exemplo:
`),n(3991,"code"),e(3992,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),n(3993,"tr",13)(3994,"td",14)(3995,"div",15)(3996,"span",16),e(3997," visible"),i(3998,"br"),t()()(),n(3999,"td",17)(4e3,"code",28),e(4001,"boolean"),t()(),n(4002,"td",20)(4003,"em")(4004,"strong"),e(4005,"(opcional)"),t()(),n(4006,"p"),e(4007,"Indica se o campo ser\xE1 vis\xEDvel."),t()()()(),n(4008,"h4",38)(4009,"code",5),e(4010,"PoDynamicFormLoad"),t()(),n(4011,"div",2)(4012,"p"),i(4013,"a",77),t(),n(4014,"p"),e(4015,"Estrutura de retorno no carregamento do formul\xE1rio."),t()(),n(4016,"h4",9),e(4017,"Propriedades"),t(),n(4018,"table",10)(4019,"tr",11)(4020,"th",12),e(4021,"Nome"),t(),n(4022,"th",12),e(4023,"Tipo"),t(),n(4024,"th",12),e(4025,"Descri\xE7\xE3o"),t()(),n(4026,"tr",13)(4027,"td",14)(4028,"div",15)(4029,"span",16),e(4030," fields"),i(4031,"br"),t()()(),n(4032,"td",17)(4033,"code",22),e(4034,"Array<PoDynamicFormField>"),t()(),n(4035,"td",20)(4036,"em")(4037,"strong"),e(4038,"(opcional)"),t()(),n(4039,"p"),e(4040,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(4041,"blockquote")(4042,"p"),e(4043,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),t()()()(),n(4044,"tr",13)(4045,"td",14)(4046,"div",15)(4047,"span",16),e(4048," focus"),i(4049,"br"),t()()(),n(4050,"td",17)(4051,"code",18),e(4052,"string"),t()(),n(4053,"td",20)(4054,"em")(4055,"strong"),e(4056,"(opcional)"),t()(),n(4057,"p"),e(4058,"Nome do campo que receber\xE1 o foco."),t(),n(4059,"p"),e(4060,"Exemplo:"),t(),n(4061,"pre")(4062,"code"),e(4063,`focus: 'name'
`),t()()()(),n(4064,"tr",13)(4065,"td",14)(4066,"div",15)(4067,"span",16),e(4068," value"),i(4069,"br"),t()()(),n(4070,"td",17)(4071,"code",33),e(4072,"any"),t()(),n(4073,"td",20)(4074,"em")(4075,"strong"),e(4076,"(opcional)"),t()(),n(4077,"p"),e(4078,"Objeto contendo os novos valores."),t(),n(4079,"p"),e(4080,"Exemplo:"),t(),n(4081,"pre")(4082,"code"),e(4083,`{
  name: 'new name',
  age: 10
}
`),t()(),n(4084,"blockquote")(4085,"p"),e(4086,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(4087,"h4",38)(4088,"code",5),e(4089,"PoDynamicFormFieldChanged"),t()(),n(4090,"div",2)(4091,"p"),e(4092,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),t()(),n(4093,"h4",9),e(4094,"Propriedades"),t(),n(4095,"table",10)(4096,"tr",11)(4097,"th",12),e(4098,"Nome"),t(),n(4099,"th",12),e(4100,"Tipo"),t(),n(4101,"th",12),e(4102,"Descri\xE7\xE3o"),t()(),n(4103,"tr",13)(4104,"td",14)(4105,"div",15)(4106,"span",16),e(4107," property"),i(4108,"br"),t()()(),n(4109,"td",17)(4110,"code",18),e(4111,"string"),t()(),n(4112,"td",20)(4113,"p"),e(4114,"Valor da propriedade do campo."),t()()(),n(4115,"tr",13)(4116,"td",14)(4117,"div",15)(4118,"span",16),e(4119," value"),i(4120,"br"),t()()(),n(4121,"td",17)(4122,"code",33),e(4123,"any"),t()(),n(4124,"td",20)(4125,"p"),e(4126,"Novo valor do campo."),t()()()(),n(4127,"h4",38)(4128,"code",5),e(4129,"PoDynamicFormFieldValidation"),t()(),n(4130,"div",2)(4131,"p"),i(4132,"a",78),t(),n(4133,"p"),e(4134,"Estrutura de retorno da valida\xE7\xE3o de um campo."),t()(),n(4135,"h4",9),e(4136,"Propriedades"),t(),n(4137,"table",10)(4138,"tr",11)(4139,"th",12),e(4140,"Nome"),t(),n(4141,"th",12),e(4142,"Tipo"),t(),n(4143,"th",12),e(4144,"Descri\xE7\xE3o"),t()(),n(4145,"tr",13)(4146,"td",14)(4147,"div",15)(4148,"span",16),e(4149," field"),i(4150,"br"),t()()(),n(4151,"td",17)(4152,"code",79),e(4153,"PoDynamicFormField"),t()(),n(4154,"td",20)(4155,"em")(4156,"strong"),e(4157,"(opcional)"),t()(),n(4158,"p"),e(4159,"Novas defini\xE7\xF5es das propriedades do campo."),t(),n(4160,"blockquote")(4161,"p"),e(4162,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),t()()()(),n(4163,"tr",13)(4164,"td",14)(4165,"div",15)(4166,"span",16),e(4167," focus"),i(4168,"br"),t()()(),n(4169,"td",17)(4170,"code",28),e(4171,"boolean"),t()(),n(4172,"td",20)(4173,"em")(4174,"strong"),e(4175,"(opcional)"),t()(),n(4176,"p"),e(4177,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),t()()(),n(4178,"tr",13)(4179,"td",14)(4180,"div",15)(4181,"span",16),e(4182," value"),i(4183,"br"),t()()(),n(4184,"td",17)(4185,"code",33),e(4186,"any"),t()(),n(4187,"td",20)(4188,"em")(4189,"strong"),e(4190,"(opcional)"),t()(),n(4191,"p"),e(4192,"Novo valor do campo"),t()()()(),n(4193,"h4",38)(4194,"code",5),e(4195,"PoDynamicFormValidation"),t()(),n(4196,"div",2)(4197,"p"),i(4198,"a",80),t(),n(4199,"p"),e(4200,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),t()(),n(4201,"h4",9),e(4202,"Propriedades"),t(),n(4203,"table",10)(4204,"tr",11)(4205,"th",12),e(4206,"Nome"),t(),n(4207,"th",12),e(4208,"Tipo"),t(),n(4209,"th",12),e(4210,"Descri\xE7\xE3o"),t()(),n(4211,"tr",13)(4212,"td",14)(4213,"div",15)(4214,"span",16),e(4215," fields"),i(4216,"br"),t()()(),n(4217,"td",17)(4218,"code",22),e(4219,"Array<PoDynamicFormField>"),t()(),n(4220,"td",20)(4221,"em")(4222,"strong"),e(4223,"(opcional)"),t()(),n(4224,"p"),e(4225,"Lista com as novas defini\xE7\xF5es dos campos."),t(),n(4226,"blockquote")(4227,"p"),e(4228,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),t()()()(),n(4229,"tr",13)(4230,"td",14)(4231,"div",15)(4232,"span",16),e(4233," focus"),i(4234,"br"),t()()(),n(4235,"td",17)(4236,"code",18),e(4237,"string"),t()(),n(4238,"td",20)(4239,"em")(4240,"strong"),e(4241,"(opcional)"),t()(),n(4242,"p"),e(4243,"Nome do campo que receber\xE1 o foco."),t(),n(4244,"p"),e(4245,"Exemplo:"),t(),n(4246,"pre")(4247,"code"),e(4248,`focus: 'name'
`),t()()()(),n(4249,"tr",13)(4250,"td",14)(4251,"div",15)(4252,"span",16),e(4253," value"),i(4254,"br"),t()()(),n(4255,"td",17)(4256,"code",33),e(4257,"any"),t()(),n(4258,"td",20)(4259,"em")(4260,"strong"),e(4261,"(opcional)"),t()(),n(4262,"p"),e(4263,"Objeto contendo os novos valores."),t(),n(4264,"p"),e(4265,"Exemplo:"),t(),n(4266,"pre")(4267,"code"),e(4268,`{
  name: 'new name',
  age: 10
}
`),t()(),n(4269,"blockquote")(4270,"p"),e(4271,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),n(4272,"h4",38)(4273,"code",5),e(4274,"ErrorAsyncProperties"),t()(),n(4275,"div",2)(4276,"p"),e(4277,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(4278,"h4",9),e(4279,"Propriedades"),t(),n(4280,"table",10)(4281,"tr",11)(4282,"th",12),e(4283,"Nome"),t(),n(4284,"th",12),e(4285,"Tipo"),t(),n(4286,"th",12),e(4287,"Descri\xE7\xE3o"),t()(),n(4288,"tr",13)(4289,"td",14)(4290,"div",15)(4291,"span",16),e(4292," errorAsync"),i(4293,"br"),t()()(),n(4294,"td",17)(4295,"code",46),e(4296,"(value) => Observable<boolean>"),t()(),n(4297,"td",20)(4298,"p"),e(4299,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(4300,"code"),e(4301,"change"),t(),e(4302," ou "),n(4303,"code"),e(4304,"change-model"),t(),e(4305,", dependendo do valor da propriedade "),n(4306,"code"),e(4307,"triggerMode"),t(),e(4308,"."),t()()(),n(4309,"tr",13)(4310,"td",14)(4311,"div",15)(4312,"span",16),e(4313," triggerMode"),i(4314,"br"),t()()(),n(4315,"td",17)(4316,"code",81),e(4317,"'change' "),t(),n(4318,"code",82),e(4319," 'changeModel'"),t()(),n(4320,"td",20)(4321,"em")(4322,"strong"),e(4323,"(opcional)"),t()(),n(4324,"p"),e(4325,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(4326,"code"),e(4327,"change"),t(),e(4328," ou "),n(4329,"code"),e(4330,"change-model"),t(),e(4331,"."),t()()()(),n(4332,"h3"),e(4333,"Enums"),t(),n(4334,"h4",4)(4335,"code",5),e(4336,"ForceBooleanComponentEnum"),t()(),n(4337,"div",2)(4338,"p"),e(4339,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(4340,"h4",9),e(4341,"Propriedades"),t(),n(4342,"table",10)(4343,"tr",11)(4344,"th",12),e(4345,"Nome"),t(),n(4346,"th",12),e(4347,"Descri\xE7\xE3o"),t()(),n(4348,"tr",13)(4349,"td",14)(4350,"div",15)(4351,"span",16),e(4352," switch"),i(4353,"br"),t()()(),n(4354,"td",20)(4355,"p"),e(4356,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),t()()(),n(4357,"tr",13)(4358,"td",14)(4359,"div",15)(4360,"span",16),e(4361," checkbox"),i(4362,"br"),t()()(),n(4363,"td",20)(4364,"p"),e(4365,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),t()()()(),n(4366,"h4",4)(4367,"code",5),e(4368,"ForceOptionComponentEnum"),t()(),n(4369,"div",2)(4370,"p"),e(4371,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),n(4372,"h4",9),e(4373,"Propriedades"),t(),n(4374,"table",10)(4375,"tr",11)(4376,"th",12),e(4377,"Nome"),t(),n(4378,"th",12),e(4379,"Descri\xE7\xE3o"),t()(),n(4380,"tr",13)(4381,"td",14)(4382,"div",15)(4383,"span",16),e(4384," radioGroup"),i(4385,"br"),t()()(),n(4386,"td",20)(4387,"p"),e(4388,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),t()()(),n(4389,"tr",13)(4390,"td",14)(4391,"div",15)(4392,"span",16),e(4393," select"),i(4394,"br"),t()()(),n(4395,"td",20)(4396,"p"),e(4397,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),t()()()(),n(4398,"h4",4)(4399,"code",5),e(4400,"PoDynamicFieldType"),t()(),n(4401,"div",2)(4402,"p"),e(4403,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),t()(),n(4404,"h4",9),e(4405,"Propriedades"),t(),n(4406,"table",10)(4407,"tr",11)(4408,"th",12),e(4409,"Nome"),t(),n(4410,"th",12),e(4411,"Descri\xE7\xE3o"),t()(),n(4412,"tr",13)(4413,"td",14)(4414,"div",15)(4415,"span",16),e(4416," Boolean"),i(4417,"br"),t()()(),n(4418,"td",20)(4419,"p"),e(4420,"Valor booleano."),t()()(),n(4421,"tr",13)(4422,"td",14)(4423,"div",15)(4424,"span",16),e(4425," Currency"),i(4426,"br"),t()()(),n(4427,"td",20)(4428,"p"),e(4429,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(4430,"tr",13)(4431,"td",14)(4432,"div",15)(4433,"span",16),e(4434," Decimal"),i(4435,"br"),t()()(),n(4436,"td",20)(4437,"p"),e(4438,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),n(4439,"tr",13)(4440,"td",14)(4441,"div",15)(4442,"span",16),e(4443," Date"),i(4444,"br"),t()()(),n(4445,"td",20)(4446,"p"),e(4447,"Valor para data."),t()()(),n(4448,"tr",13)(4449,"td",14)(4450,"div",15)(4451,"span",16),e(4452," DateTime"),i(4453,"br"),t()()(),n(4454,"td",20)(4455,"p"),e(4456,"Valor para data e hora."),t()()(),n(4457,"tr",13)(4458,"td",14)(4459,"div",15)(4460,"span",16),e(4461," Time"),i(4462,"br"),t()()(),n(4463,"td",20)(4464,"p"),e(4465,"Utilizado para informar/exibir hora."),t()()(),n(4466,"tr",13)(4467,"td",14)(4468,"div",15)(4469,"span",16),e(4470," Number"),i(4471,"br"),t()()(),n(4472,"td",20)(4473,"p"),e(4474,"Valor num\xE9rico."),t()()(),n(4475,"tr",13)(4476,"td",14)(4477,"div",15)(4478,"span",16),e(4479," String"),i(4480,"br"),t()()(),n(4481,"td",20)(4482,"p"),e(4483,"Texto."),t()()(),n(4484,"tr",13)(4485,"td",14)(4486,"div",15)(4487,"span",16),e(4488," Upload"),i(4489,"br"),t()()(),n(4490,"td",20)(4491,"p"),e(4492,"Utilizado para fazer uploads de arquivos."),t()()()()())},dependencies:[b],encapsulation:2})}return o})();var ie=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(N(K),N(X))};static \u0275cmp=s({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,m){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return m.changeTab("doc")}),i(3,"sample-po-dynamic-form-doc"),t(),n(4,"po-tab",3),c("p-click",function(){return m.changeTab("web")}),i(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),t()()()),a&2&&(p("p-actions",m.actions),d(2),p("p-active",m.activeTab==="doc"),d(2),p("p-hide",m.hidePoWebSample)("p-active",m.activeTab==="web"))},dependencies:[J,x,S,Y,$,te,ne],encapsulation:2})}return o})();var ye=[{path:"",component:ie}],oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[O.forChild(ye),O]})}return o})();var et=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[W,oe]})}return o})();export{et as DocPoDynamicFormModule};
