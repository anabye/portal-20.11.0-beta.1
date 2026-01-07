import{o as M,p as Se}from"./chunk-F4JLAWPH.js";import{Ab as L,Eb as Ee,Fa as me,G as I,H as b,I as D,J as q,Ma as ce,O as le,Q as de,Sa as ue,Xa as he,_ as U,a as ae,nb as ge,ra as se,v as re,za as pe,zb as w}from"./chunk-LS5JYUA4.js";import"./chunk-ZXY2ZB5H.js";import{Aa as h,Da as T,Eb as V,Fc as K,Gc as $,Ha as B,Hc as ee,Ic as te,Jc as ne,La as n,Ma as t,N as H,Na as o,Q as J,Ra as R,Sa as g,Ta as C,U as m,V as c,Wc as ie,Yc as oe,_c as j,a as v,b as P,cb as e,eb as k,gb as E,hb as S,ib as x,ja as p,ka as Y,mb as X,nb as O,ob as y,pb as Q,qa as f,ra as Z,wa as N}from"./chunk-GP3Z6ZCX.js";var Oe=()=>({label:"Angular",data:100}),Ge=()=>({label:"React",data:10}),Be=(r,G)=>[r,G],xe=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-basic"]],standalone:!1,decls:1,vars:6,consts:[[3,"p-series"]],template:function(s,i){s&1&&o(0,"po-chart",0),s&2&&h("p-series",Q(3,Be,O(1,Oe),O(2,Ge)))},dependencies:[D],encapsulation:2})}return r})();var Fe=r=>({"docs-sample-code-tabs":r}),be=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(s,i){s&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Chart Basic"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-basic/sample-po-chart-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-chart
  [p-series]="[
    { label: 'Angular', data: 100 },
    { label: 'React', data: 10 }
  ]"
>
</po-chart>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-basic/sample-po-chart-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-chart-basic"),t(),o(23,"hr")),s&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),k(" ",i.sampleCodeButtonLabel,""),p(),h("ngClass",y(4,Fe,i.hideSampleCodeTabs)))},dependencies:[V,M,w,L,xe],encapsulation:2})}return r})();var Ie=()=>({value:"fillPoints",label:"fillPoints"}),F=r=>[r],qe=()=>({label:"legend",value:"legend"}),ze=()=>({label:"roseType",value:"roseType"}),He=()=>({label:"showFromToLegend",value:"showFromToLegend"}),Ze=()=>({label:"pointer",value:"pointer"}),Ye=()=>({label:"stacked",value:"stacked"}),je=()=>({value:"fixed",label:"Fixed"});function Ue(r,G){if(r&1){let l=R();n(0,"po-checkbox-group",53),x("ngModelChange",function(i){m(l);let d=C();return S(d.selectedValuesDataLabel,i)||(d.selectedValuesDataLabel=i),c(i)}),g("p-change",function(){m(l);let i=C();return c(i.changeDataLabelOptions())}),t()}if(r&2){let l=C();h("p-options",y(3,F,O(2,je))),E("ngModel",l.selectedValuesDataLabel)}}function Je(r,G){if(r&1){let l=R();n(0,"po-number",54),x("ngModelChange",function(i){m(l);let d=C();return S(d.valueGauge,i)||(d.valueGauge=i),c(i)}),g("p-change",function(i){m(l);let d=C();return c(d.changeValueGauge(i))}),t()}if(r&2){let l=C();E("ngModel",l.valueGauge)}}function Xe(r,G){if(r&1){let l=R();n(0,"po-radio-group",55),x("ngModelChange",function(i){m(l);let d=C();return S(d.selectedShapeOption,i)||(d.selectedShapeOption=i),c(i)}),t(),n(1,"po-switch",56),x("ngModelChange",function(i){m(l);let d=C();return S(d.selectedSplitArea,i)||(d.selectedSplitArea=i),c(i)}),t(),n(2,"po-switch",57),x("ngModelChange",function(i){m(l);let d=C();return S(d.selectedAreaStyle,i)||(d.selectedAreaStyle=i),c(i)}),t()}if(r&2){let l=C();h("p-options",l.optionsShapeOption),E("ngModel",l.selectedShapeOption),p(),E("ngModel",l.selectedSplitArea),p(),E("ngModel",l.selectedAreaStyle)}}function Qe(r,G){if(r&1){let l=R();n(0,"po-input",58),x("ngModelChange",function(i){m(l);let d=C();return S(d.data,i)||(d.data=i),c(i)}),t()}if(r&2){let l=C();E("ngModel",l.data)}}function Ke(r,G){if(r&1){let l=R();n(0,"po-input",59),x("ngModelChange",function(i){m(l);let d=C();return S(d.stackGroupName,i)||(d.stackGroupName=i),c(i)}),t()}if(r&2){let l=C();E("ngModel",l.stackGroupName)}}function $e(r,G){if(r&1){let l=R();n(0,"po-number",60),x("ngModelChange",function(i){m(l);let d=C();return S(d.fromGauge,i)||(d.fromGauge=i),c(i)}),t()}if(r&2){let l=C();E("ngModel",l.fromGauge)}}function et(r,G){if(r&1){let l=R();n(0,"po-number",61),x("ngModelChange",function(i){m(l);let d=C();return S(d.toGauge,i)||(d.toGauge=i),c(i)}),t()}if(r&2){let l=C();E("ngModel",l.toGauge)}}function tt(r,G){if(r&1){let l=R();n(0,"div",3)(1,"po-button",62),g("p-click",function(){m(l);let i=C();return c(i.addData())}),t()()}}function nt(r,G){if(r&1){let l=R();n(0,"po-number",63),x("ngModelChange",function(i){m(l);let d=C();return S(d.min,i)||(d.min=i),c(i)}),t(),n(1,"po-number",64),x("ngModelChange",function(i){m(l);let d=C();return S(d.max,i)||(d.max=i),c(i)}),t(),n(2,"po-input",65),x("ngModelChange",function(i){m(l);let d=C();return S(d.colorIndicator,i)||(d.colorIndicator=i),c(i)}),t(),n(3,"div",3)(4,"po-button",66),g("p-click",function(){m(l);let i=C();return c(i.addData())}),t()()}if(r&2){let l=C();E("ngModel",l.min),p(),E("ngModel",l.max),p(),E("ngModel",l.colorIndicator),p(2),h("p-disabled",l.isTypeRadar&&!l.categories)}}var fe=(()=>{class r{color;stackGroupName;data;label;tooltip;type;serieType;valueGauge;fromGauge;toGauge;allCategories=[];radarConfig={indicator:[]};categories;min;max;colorIndicator;event;height;series;title;dataLabel;isTypeGauge=!1;isTypeRadar=!1;disabledTooltip=!1;disabledType=!1;selectedSplitArea=!1;selectedAreaStyle=!1;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0};selectedValuesDataLabel=[];selectedValuesAxis=[];selectedValuesHeader=[];selectedValuesDataZoom=[];selectedValuesFillPoints=[];selectedRoseType=[];selectedFromToLegend=[];selectedPointer=[];selectedStacked=[];selectedValuesLegend=["legend"];selectedLegendVerticalPosition="bottom";selectedLegendPosition="center";selectedRendererOption="canvas";selectedShapeOption="polygon";helpRadar='Example: ["Bold", "Keen", "Calm", "Wise"]';helpGeneric='Example: ["Jan", "Feb", "Mar", "Apr"]';optionsAxis=[{value:"showXAxis",label:"showXAxis"},{value:"showYAxis",label:"showYAxis"},{value:"showAxisDetails",label:"showAxisDetails"}];optionsHeader=[{value:"hideTableDetails",label:"hideTableDetails"},{value:"hideExpand",label:"hideExpand"},{value:"hideExportCsv",label:"hideExportCsv"},{value:"hideExportImage",label:"hideExportImage"}];optionsDataZoom=[{value:"dataZoom",label:"dataZoom"},{value:"bottomDataZoom",label:"bottomDataZoom"}];optionsLegendVerticalPosition=[{value:"top",label:"top"},{value:"bottom",label:"bottom"}];optionsLegendPosition=[{value:"left",label:"left"},{value:"center",label:"center"},{value:"right",label:"right"}];optionsRendererOption=[{value:"canvas",label:"canvas"},{value:"svg",label:"svg"}];optionsShapeOption=[{value:"polygon",label:"polygon"},{value:"circle",label:"circle"}];typeOptions=[{label:"Line",value:b.Line},{label:"Area",value:b.Area},{label:"Bar",value:b.Bar},{label:"Column",value:b.Column},{label:"Donut",value:b.Donut},{label:"Pie",value:b.Pie},{label:"Gauge",value:b.Gauge},{label:"Radar",value:b.Radar}];labelTypeOptions=[{label:"Number",value:I.Number},{label:"Currency",value:I.Currency}];changeDataLabelOptions(){this.dataLabel=P(v({},this.dataLabel),{fixed:this.selectedValuesDataLabel.includes("fixed")})}changeAxisOptions(){let l={showXAxis:this.selectedValuesAxis.includes("showXAxis"),showYAxis:this.selectedValuesAxis.includes("showYAxis"),showAxisDetails:this.selectedValuesAxis.includes("showAxisDetails")};this.options=P(v({},this.options),{axis:l})}changeHeaderOptions(){let l={hideExpand:this.selectedValuesHeader.includes("hideExpand"),hideExportCsv:this.selectedValuesHeader.includes("hideExportCsv"),hideExportImage:this.selectedValuesHeader.includes("hideExportImage"),hideTableDetails:this.selectedValuesHeader.includes("hideTableDetails")};this.options=P(v({},this.options),{header:l})}changeDataZoomOptions(){this.options=P(v({},this.options),{dataZoom:this.selectedValuesDataZoom.includes("dataZoom"),bottomDataZoom:this.selectedValuesDataZoom.includes("bottomDataZoom")}),this.options=v({},this.options)}changeFillPointsOptions(){this.options=P(v({},this.options),{fillPoints:this.selectedValuesFillPoints.includes("fillPoints")})}changeLegendOptions(){this.options=P(v({},this.options),{legend:this.selectedValuesLegend.includes("legend")})}changeRoseTypeOptions(){this.options=P(v({},this.options),{roseType:this.selectedRoseType.includes("roseType")})}changeShowFromToLegend(){this.options=P(v({},this.options),{showFromToLegend:this.selectedFromToLegend.includes("showFromToLegend")})}changePointer(){this.options=P(v({},this.options),{pointer:this.selectedPointer.includes("pointer")})}changeStacked(){this.options=P(v({},this.options),{stacked:this.selectedStacked.includes("stacked")})}changeLegendVerticalPosition(){this.options=P(v({},this.options),{legendVerticalPosition:this.selectedLegendVerticalPosition})}changeLegendPosition(){this.options=P(v({},this.options),{legendPosition:this.selectedLegendPosition})}changeRendererOption(){this.options=P(v({},this.options),{rendererOption:this.selectedRendererOption})}changeType(l){l===b.Gauge&&(this.isTypeGauge=!0,this.changeSwitchGauge(!0)),l===b.Radar&&(this.isTypeRadar=!0,this.changeSwitchRadar(!0))}changeSwitchGauge(l){this.restore(!0),this.disabledTooltip=l,this.disabledType=l,l?(this.serieType=b.Gauge,this.type=b.Gauge,this.isTypeRadar=!1):(this.serieType=void 0,this.type=void 0)}changeSwitchRadar(l){this.restore(!0,!0),this.disabledType=l,l?(this.serieType=b.Radar,this.type=b.Radar,this.isTypeGauge=!1):(this.serieType=void 0,this.type=void 0)}changeValueGauge(l){this.series?.length===1&&!this.toGauge&&(this.series[0].data=l,this.series=[...this.series])}ngOnInit(){this.restore()}addOptions(l){this.options=v(v({},this.options),l?v({},l):{})}addCategories(){this.allCategories=this.convertToArray(this.categories)}addIndicators(){if(!this.categories){this.radarConfig={indicator:[]};return}let l=this.convertToArray(this.categories);this.radarConfig={indicator:l.map(s=>({name:s,min:this.min,max:this.max,color:this.colorIndicator})),shape:this.selectedShapeOption,splitArea:this.selectedSplitArea}}addData(){let l=this.serieType??this.type,s;l==="radar"?(s=this.convertToArray(this.data).map(u=>Number(u)),this.addIndicators()):s=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data);let i=P(v({label:this.label,data:s,tooltip:this.tooltip},this.color?{color:this.color}:{}),{type:l,stackGroupName:this.stackGroupName,from:this.fromGauge,to:this.toGauge,areaStyle:this.selectedAreaStyle??void 0});this.series=[...this.series,i],this.label=void 0,this.color=void 0,this.data=void 0,this.tooltip=void 0,this.stackGroupName=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.isTypeGauge||(this.type=void 0)}isTypeGrid(){return this.type===b.Line||this.type===b.Area||this.type===b.Column||this.type===b.Bar||this.type===b.Radar}changeEvent(l,s){this.event=`${l}: ${JSON.stringify(s)}`}restore(l=!1,s=!1){this.color=void 0,this.data=void 0,this.label=void 0,this.tooltip=void 0,this.type=void 0,this.serieType=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.valueGauge=void 0,this.allCategories=[],this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.disabledTooltip=!1,this.disabledType=!1,this.dataLabel={fixed:!1},this.options=P(v({},this.options),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0}),this.selectedValuesDataLabel=[],this.selectedValuesAxis=[],this.selectedValuesHeader=[],this.selectedValuesDataZoom=[],this.selectedValuesFillPoints=[],this.selectedValuesLegend=[],this.selectedRoseType=[],l||(this.selectedFromToLegend=[],this.selectedPointer=[],this.isTypeGauge=!1),s||(this.isTypeRadar=!1,this.categories=void 0,this.radarConfig=[])}convertToArray(l){try{return JSON.parse(l)}catch{return}}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-labs"]],standalone:!1,decls:65,vars:98,consts:[["chartSeries","ngForm"],[3,"p-series-click","p-series-hover","p-categories","p-height","p-data-label","p-options","p-series","p-title","p-type","p-value-gauge-multiple"],["p-label","Events",1,"po-md-12"],[1,"po-row"],["p-label","Event",3,"p-value"],["p-label","Properties",1,"po-md-12"],["name","type","p-columns","3","p-label","Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","height","p-label","Height",1,"po-md-3",3,"ngModelChange","ngModel"],["name","title","p-label","Title",1,"po-md-3",3,"ngModelChange","ngModel"],["name","dataLabel","p-label","DataLabel",1,"po-md-3",3,"p-options","ngModel"],["p-label","Chart series",1,"po-md-12"],["name","switch","p-label","Gauge Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel"],["name","radar","p-label","Radar Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel"],["p-label","Value Gauge","name","valueGauge",1,"po-md-4",3,"ngModel"],["name","label","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25",1,"po-md-4",3,"ngModel"],["name","serieType","p-help","Serie Type","p-label","Type",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","tooltip","p-label","Tooltip","p-help","Custom Tooltip",1,"po-md-4",3,"ngModelChange","p-disabled","ngModel"],["name","color","p-label","Color","p-help","Custom Color",1,"po-md-4",3,"ngModelChange","ngModel"],["name","stackGroupName","p-label","Stack Group Name","p-help","Custom Group Name",1,"po-md-4",3,"ngModel"],["p-label","From","name","from",1,"po-md-4",3,"ngModel"],["p-label","To","name","from",1,"po-md-4",3,"ngModel"],["p-label","Chart categories",1,"po-md-12"],["name","categories",3,"ngModelChange","p-blur","p-label","p-help","ngModel"],["p-label","Chart options",1,"po-md-12"],["name","minRange","p-label","minRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","maxRange","p-label","maxRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","gridLines","p-label","gridLines",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","labelType","p-label","labelType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","paddingBottom","p-label","paddingBottom",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","paddingLeft","p-label","paddingLeft",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","paddingRight","p-label","paddingRight",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","rotateLegend","p-label","rotateLegend",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","innerRadius","p-label","innerRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","borderRadius","p-label","borderRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","firstColumnName","p-label","firstColumnName",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","textCenterGraph","p-label","textCenterGraph",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","descriptionChart","p-label","descriptionChart",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","subtitleGauge","p-label","subtitleGauge",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","headerGroup","p-label","Header",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","axisGroup","p-label","Axis",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","dataZoomGroup","p-label","DataZoom",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","fillPoints","p-label","FillPoints",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","legend","p-label","Legend",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","roseType","p-label","RoseType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","showFromToLegend","p-label","ShowFromToLegend",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","pointer","p-label","Pointer",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","stacked","p-label","Stacked",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendVerticalPosition","p-label","LegendVerticalPosition",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendPosition","p-label","LegendPosition",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioRendererOption","p-label","RendererOption",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],[1,"po-md-12"],["p-label","Sample Restore",1,"po-md-4",3,"p-click"],["name","dataLabel","p-label","DataLabel",1,"po-md-3",3,"ngModelChange","p-change","p-options","ngModel"],["p-label","Value Gauge","name","valueGauge",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","radioShapeOption","p-label","ShapeOption",1,"po-md-3",3,"ngModelChange","p-options","ngModel"],["name","splitArea","p-label","splitArea",1,"po-md-1",3,"ngModelChange","ngModel"],["name","areaStyle","p-label","areaStyle",1,"po-md-1",3,"ngModelChange","ngModel"],["name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25",1,"po-md-4",3,"ngModelChange","ngModel"],["name","stackGroupName","p-label","Stack Group Name","p-help","Custom Group Name",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","From","name","from",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","To","name","from",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add Serie",1,"po-md-4",3,"p-click"],["name","min","p-label","Min",1,"po-md-3",3,"ngModelChange","ngModel"],["name","max","p-label","Max",1,"po-md-3",3,"ngModelChange","ngModel"],["name","colorIndicator","p-label","Color",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Add Serie",1,"po-md-4",3,"p-click","p-disabled"]],template:function(s,i){if(s&1){let d=R();n(0,"po-chart",1),g("p-series-click",function(a){return m(d),c(i.changeEvent("p-series-click",a))})("p-series-hover",function(a){return m(d),c(i.changeEvent("p-series-hover",a))}),t(),o(1,"po-divider",2),n(2,"div",3),o(3,"po-info",4),t(),o(4,"po-divider",5),n(5,"form")(6,"po-select",6),x("ngModelChange",function(a){return m(d),S(i.type,a)||(i.type=a),c(a)}),g("p-change",function(a){return m(d),c(i.changeType(a))}),t(),n(7,"po-number",7),x("ngModelChange",function(a){return m(d),S(i.height,a)||(i.height=a),c(a)}),t(),n(8,"po-input",8),x("ngModelChange",function(a){return m(d),S(i.title,a)||(i.title=a),c(a)}),t(),N(9,Ue,1,5,"po-checkbox-group",9),t(),o(10,"po-divider",10),n(11,"form",null,0)(13,"div",3)(14,"po-switch",11),x("ngModelChange",function(a){return m(d),S(i.isTypeGauge,a)||(i.isTypeGauge=a),c(a)}),g("p-change",function(a){return m(d),c(i.changeSwitchGauge(a))}),t(),n(15,"po-switch",12),x("ngModelChange",function(a){return m(d),S(i.isTypeRadar,a)||(i.isTypeRadar=a),c(a)}),g("p-change",function(a){return m(d),c(i.changeSwitchRadar(a))}),t(),N(16,Je,1,1,"po-number",13)(17,Xe,3,4),t(),n(18,"div",3)(19,"po-input",14),x("ngModelChange",function(a){return m(d),S(i.label,a)||(i.label=a),c(a)}),t(),N(20,Qe,1,1,"po-input",15),n(21,"po-select",16),x("ngModelChange",function(a){return m(d),S(i.serieType,a)||(i.serieType=a),c(a)}),g("p-change",function(a){return m(d),c(i.changeType(a))}),t(),n(22,"po-input",17),x("ngModelChange",function(a){return m(d),S(i.tooltip,a)||(i.tooltip=a),c(a)}),t(),n(23,"po-input",18),x("ngModelChange",function(a){return m(d),S(i.color,a)||(i.color=a),c(a)}),t(),N(24,Ke,1,1,"po-input",19)(25,$e,1,1,"po-number",20)(26,et,1,1,"po-number",21)(27,tt,2,0,"div",3),t()(),n(28,"div",3),o(29,"po-divider",22),n(30,"po-input",23),x("ngModelChange",function(a){return m(d),S(i.categories,a)||(i.categories=a),c(a)}),g("p-blur",function(){return m(d),c(i.addCategories())}),t(),N(31,nt,5,4),t(),n(32,"form")(33,"div",3),o(34,"po-divider",24),n(35,"po-number",25),x("ngModelChange",function(a){return m(d),S(i.options.axis.minRange,a)||(i.options.axis.minRange=a),c(a)}),g("p-blur",function(){return m(d),c(i.addOptions())}),t(),n(36,"po-number",26),x("ngModelChange",function(a){return m(d),S(i.options.axis.maxRange,a)||(i.options.axis.maxRange=a),c(a)}),g("p-blur",function(){return m(d),c(i.addOptions())}),t(),n(37,"po-number",27),x("ngModelChange",function(a){return m(d),S(i.options.axis.gridLines,a)||(i.options.axis.gridLines=a),c(a)}),g("p-blur",function(){return m(d),c(i.addOptions())}),t(),n(38,"po-select",28),x("ngModelChange",function(a){return m(d),S(i.options.axis.labelType,a)||(i.options.axis.labelType=a),c(a)}),g("p-change",function(){return m(d),c(i.addOptions())}),t(),n(39,"po-number",29),x("ngModelChange",function(a){return m(d),S(i.options.axis.paddingBottom,a)||(i.options.axis.paddingBottom=a),c(a)}),g("p-blur",function(){return m(d),c(i.addOptions())}),t(),n(40,"po-number",30),x("ngModelChange",function(a){return m(d),S(i.options.axis.paddingLeft,a)||(i.options.axis.paddingLeft=a),c(a)}),g("p-blur",function(){return m(d),c(i.addOptions())}),t(),n(41,"po-number",31),x("ngModelChange",function(a){return m(d),S(i.options.axis.paddingRight,a)||(i.options.axis.paddingRight=a),c(a)}),g("p-blur",function(){return m(d),c(i.addOptions())}),t(),n(42,"po-number",32),x("ngModelChange",function(a){return m(d),S(i.options.axis.rotateLegend,a)||(i.options.axis.rotateLegend=a),c(a)}),g("p-blur",function(){return m(d),c(i.addOptions())}),t(),n(43,"po-number",33),x("ngModelChange",function(a){return m(d),S(i.options.innerRadius,a)||(i.options.innerRadius=a),c(a)}),g("p-blur",function(){return m(d),c(i.addOptions())}),t(),n(44,"po-number",34),x("ngModelChange",function(a){return m(d),S(i.options.borderRadius,a)||(i.options.borderRadius=a),c(a)}),g("p-blur",function(){return m(d),c(i.addOptions())}),t(),n(45,"po-input",35),x("ngModelChange",function(a){return m(d),S(i.options.firstColumnName,a)||(i.options.firstColumnName=a),c(a)}),g("p-blur",function(){return m(d),c(i.addOptions())}),t(),n(46,"po-input",36),x("ngModelChange",function(a){return m(d),S(i.options.textCenterGraph,a)||(i.options.textCenterGraph=a),c(a)}),g("p-blur",function(){return m(d),c(i.addOptions())}),t(),n(47,"po-input",37),x("ngModelChange",function(a){return m(d),S(i.options.descriptionChart,a)||(i.options.descriptionChart=a),c(a)}),g("p-blur",function(){return m(d),c(i.addOptions())}),t(),n(48,"po-input",38),x("ngModelChange",function(a){return m(d),S(i.options.subtitleGauge,a)||(i.options.subtitleGauge=a),c(a)}),g("p-blur",function(){return m(d),c(i.addOptions())}),t()(),n(49,"div",3)(50,"po-checkbox-group",39),x("ngModelChange",function(a){return m(d),S(i.selectedValuesHeader,a)||(i.selectedValuesHeader=a),c(a)}),g("p-change",function(){return m(d),c(i.changeHeaderOptions())}),t(),n(51,"po-checkbox-group",40),x("ngModelChange",function(a){return m(d),S(i.selectedValuesAxis,a)||(i.selectedValuesAxis=a),c(a)}),g("p-change",function(){return m(d),c(i.changeAxisOptions())}),t(),n(52,"po-checkbox-group",41),x("ngModelChange",function(a){return m(d),S(i.selectedValuesDataZoom,a)||(i.selectedValuesDataZoom=a),c(a)}),g("p-change",function(){return m(d),c(i.changeDataZoomOptions())}),t(),n(53,"po-checkbox-group",42),x("ngModelChange",function(a){return m(d),S(i.selectedValuesFillPoints,a)||(i.selectedValuesFillPoints=a),c(a)}),g("p-change",function(){return m(d),c(i.changeFillPointsOptions())}),t(),n(54,"po-checkbox-group",43),x("ngModelChange",function(a){return m(d),S(i.selectedValuesLegend,a)||(i.selectedValuesLegend=a),c(a)}),g("p-change",function(){return m(d),c(i.changeLegendOptions())}),t(),n(55,"po-checkbox-group",44),x("ngModelChange",function(a){return m(d),S(i.selectedRoseType,a)||(i.selectedRoseType=a),c(a)}),g("p-change",function(){return m(d),c(i.changeRoseTypeOptions())}),t(),n(56,"po-checkbox-group",45),x("ngModelChange",function(a){return m(d),S(i.selectedFromToLegend,a)||(i.selectedFromToLegend=a),c(a)}),g("p-change",function(){return m(d),c(i.changeShowFromToLegend())}),t(),n(57,"po-checkbox-group",46),x("ngModelChange",function(a){return m(d),S(i.selectedPointer,a)||(i.selectedPointer=a),c(a)}),g("p-change",function(){return m(d),c(i.changePointer())}),t(),n(58,"po-checkbox-group",47),x("ngModelChange",function(a){return m(d),S(i.selectedStacked,a)||(i.selectedStacked=a),c(a)}),g("p-change",function(){return m(d),c(i.changeStacked())}),t(),n(59,"po-radio-group",48),x("ngModelChange",function(a){return m(d),S(i.selectedLegendVerticalPosition,a)||(i.selectedLegendVerticalPosition=a),c(a)}),g("p-change",function(){return m(d),c(i.changeLegendVerticalPosition())}),t(),n(60,"po-radio-group",49),x("ngModelChange",function(a){return m(d),S(i.selectedLegendPosition,a)||(i.selectedLegendPosition=a),c(a)}),g("p-change",function(){return m(d),c(i.changeLegendPosition())}),t(),n(61,"po-radio-group",50),x("ngModelChange",function(a){return m(d),S(i.selectedRendererOption,a)||(i.selectedRendererOption=a),c(a)}),g("p-change",function(){return m(d),c(i.changeRendererOption())}),t()(),o(62,"po-divider",51),n(63,"div",3)(64,"po-button",52),g("p-click",function(){return m(d),c(i.restore())}),t()()()}s&2&&(h("p-categories",i.isTypeRadar?i.radarConfig:i.allCategories)("p-height",i.height)("p-data-label",i.dataLabel)("p-options",i.options)("p-series",i.series)("p-title",i.title)("p-type",i.type)("p-value-gauge-multiple",i.valueGauge),p(3),h("p-value",i.event),p(3),E("ngModel",i.type),h("p-disabled",i.disabledType)("p-options",i.typeOptions),p(),E("ngModel",i.height),p(),E("ngModel",i.title),p(),B(i.isTypeGrid()?9:-1),p(5),E("ngModel",i.isTypeGauge),p(),E("ngModel",i.isTypeRadar),p(),B(i.isTypeGauge?16:-1),p(),B(i.isTypeRadar?17:-1),p(2),E("ngModel",i.label),p(),B(i.isTypeGauge?-1:20),p(),E("ngModel",i.serieType),h("p-disabled",i.disabledType)("p-options",i.typeOptions),p(),h("p-disabled",i.disabledTooltip),E("ngModel",i.tooltip),p(),E("ngModel",i.color),p(),B(i.type==="bar"||i.serieType==="bar"||i.type==="column"||i.serieType==="column"?24:-1),p(),B(i.isTypeGauge?25:-1),p(),B(i.isTypeGauge?26:-1),p(),B(i.isTypeRadar?-1:27),p(3),T(i.isTypeRadar?"po-md-3":"po-md-4"),h("p-label",i.isTypeRadar?"Indicators":"Categories")("p-help",i.isTypeRadar?i.helpRadar:i.helpGeneric),E("ngModel",i.categories),p(),B(i.isTypeRadar?31:-1),p(4),E("ngModel",i.options.axis.minRange),p(),E("ngModel",i.options.axis.maxRange),p(),E("ngModel",i.options.axis.gridLines),p(),h("p-options",i.labelTypeOptions),E("ngModel",i.options.axis.labelType),p(),E("ngModel",i.options.axis.paddingBottom),p(),E("ngModel",i.options.axis.paddingLeft),p(),E("ngModel",i.options.axis.paddingRight),p(),E("ngModel",i.options.axis.rotateLegend),p(),E("ngModel",i.options.innerRadius),p(),E("ngModel",i.options.borderRadius),p(),E("ngModel",i.options.firstColumnName),p(),E("ngModel",i.options.textCenterGraph),p(),E("ngModel",i.options.descriptionChart),p(),E("ngModel",i.options.subtitleGauge),p(2),h("p-columns",2)("p-options",i.optionsHeader),E("ngModel",i.selectedValuesHeader),p(),h("p-columns",2)("p-options",i.optionsAxis),E("ngModel",i.selectedValuesAxis),p(),h("p-columns",2)("p-options",i.optionsDataZoom),E("ngModel",i.selectedValuesDataZoom),p(),h("p-columns",1)("p-options",y(81,F,O(80,Ie))),E("ngModel",i.selectedValuesFillPoints),p(),h("p-options",y(84,F,O(83,qe))),E("ngModel",i.selectedValuesLegend),p(),h("p-options",y(87,F,O(86,ze))),E("ngModel",i.selectedRoseType),p(),h("p-options",y(90,F,O(89,He))),E("ngModel",i.selectedFromToLegend),p(),h("p-options",y(93,F,O(92,Ze))),E("ngModel",i.selectedPointer),p(),h("p-options",y(96,F,O(95,Ye))),E("ngModel",i.selectedStacked),p(),h("p-options",i.optionsLegendVerticalPosition),E("ngModel",i.selectedLegendVerticalPosition),p(),h("p-options",i.optionsLegendPosition),E("ngModel",i.selectedLegendPosition),p(),h("p-options",i.optionsRendererOption),E("ngModel",i.selectedRendererOption))},dependencies:[ne,K,$,te,ee,re,D,ae,le,de,me,ce,ue,se,he],encapsulation:2})}return r})();var ot=r=>({"docs-sample-code-tabs":r}),Ce=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(s,i){s&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Chart Labs"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-labs/sample-po-chart-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-chart
  [p-categories]="isTypeRadar ? radarConfig : allCategories"
  [p-height]="height"
  [p-data-label]="dataLabel"
  [p-options]="options"
  [p-series]="series"
  [p-title]="title"
  [p-type]="type"
  [p-value-gauge-multiple]="valueGauge"
  (p-series-click)="changeEvent('p-series-click', $event)"
  (p-series-hover)="changeEvent('p-series-hover', $event)"
>
</po-chart>

<po-divider class="po-md-12" p-label="Events"></po-divider>

<div class="po-row">
  <po-info p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider class="po-md-12" p-label="Properties"></po-divider>

<form>
  <po-select
    class="po-md-3"
    name="type"
    [(ngModel)]="type"
    p-columns="3"
    p-label="Type"
    [p-disabled]="disabledType"
    [p-options]="typeOptions"
    (p-change)="changeType($event)"
  >
  </po-select>

  <po-number class="po-md-3" name="height" p-label="Height" [(ngModel)]="height"> </po-number>

  <po-input class="po-md-3" name="title" p-label="Title" [(ngModel)]="title"> </po-input>

  @if (isTypeGrid()) {
    <po-checkbox-group
      class="po-md-3"
      name="dataLabel"
      p-label="DataLabel"
      [p-options]="[{ value: 'fixed', label: 'Fixed' }]"
      [(ngModel)]="selectedValuesDataLabel"
      (p-change)="changeDataLabelOptions()"
    >
    </po-checkbox-group>
  }
</form>

<po-divider class="po-md-12" p-label="Chart series"></po-divider>

<form #chartSeries="ngForm">
  <div class="po-row">
    <po-switch
      class="po-md-3"
      name="switch"
      p-label="Gauge Type"
      [(ngModel)]="isTypeGauge"
      (p-change)="changeSwitchGauge($event)"
    >
    </po-switch>

    <po-switch
      class="po-md-3"
      name="radar"
      p-label="Radar Type"
      [(ngModel)]="isTypeRadar"
      (p-change)="changeSwitchRadar($event)"
    >
    </po-switch>

    @if (isTypeGauge) {
      <po-number
        class="po-md-4"
        p-label="Value Gauge"
        name="valueGauge"
        [(ngModel)]="valueGauge"
        (p-change)="changeValueGauge($event)"
      ></po-number>
    }

    @if (isTypeRadar) {
      <po-radio-group
        class="po-md-3"
        name="radioShapeOption"
        p-label="ShapeOption"
        [p-options]="optionsShapeOption"
        [(ngModel)]="selectedShapeOption"
      >
      </po-radio-group>

      <po-switch name="splitArea" class="po-md-1" p-label="splitArea" [(ngModel)]="selectedSplitArea"> </po-switch>

      <po-switch name="areaStyle" class="po-md-1" p-label="areaStyle" [(ngModel)]="selectedAreaStyle"> </po-switch>
    }
  </div>

  <div class="po-row">
    <po-input class="po-md-4" name="label" p-label="Label" [(ngModel)]="label"></po-input>

    @if (!isTypeGauge) {
      <po-input class="po-md-4" name="data" p-label="Data" p-help="Example: [25, 58, 83, 66] or 25" [(ngModel)]="data">
      </po-input>
    }

    <po-select
      class="po-md-4"
      name="serieType"
      [(ngModel)]="serieType"
      p-help="Serie Type"
      p-label="Type"
      [p-disabled]="disabledType"
      [p-options]="typeOptions"
      (p-change)="changeType($event)"
    >
    </po-select>

    <po-input
      class="po-md-4"
      name="tooltip"
      p-label="Tooltip"
      p-help="Custom Tooltip"
      [p-disabled]="disabledTooltip"
      [(ngModel)]="tooltip"
    ></po-input>

    <po-input class="po-md-4" name="color" p-label="Color" p-help="Custom Color" [(ngModel)]="color"></po-input>

    @if (type === 'bar' || serieType === 'bar' || type === 'column' || serieType === 'column') {
      <po-input
        class="po-md-4"
        name="stackGroupName"
        p-label="Stack Group Name"
        p-help="Custom Group Name"
        [(ngModel)]="stackGroupName"
      ></po-input>
    }

    @if (isTypeGauge) {
      <po-number class="po-md-4" p-label="From" name="from" [(ngModel)]="fromGauge"></po-number>
    }

    @if (isTypeGauge) {
      <po-number class="po-md-4" p-label="To" name="from" [(ngModel)]="toGauge"></po-number>
    }

    @if (!isTypeRadar) {
      <div class="po-row">
        <po-button class="po-md-4" p-label="Add Serie" (p-click)="addData()"> </po-button>
      </div>
    }
  </div>
</form>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Chart categories"></po-divider>
  <po-input
    name="categories"
    [class]="isTypeRadar ? 'po-md-3' : 'po-md-4'"
    [p-label]="isTypeRadar ? 'Indicators' : 'Categories'"
    [p-help]="isTypeRadar ? helpRadar : helpGeneric"
    [(ngModel)]="categories"
    (p-blur)="addCategories()"
  >
  </po-input>

  @if (isTypeRadar) {
    <po-number name="min" class="po-md-3" p-label="Min" [(ngModel)]="min"> </po-number>

    <po-number name="max" class="po-md-3" p-label="Max" [(ngModel)]="max"> </po-number>

    <po-input name="colorIndicator" class="po-md-3" p-label="Color" [(ngModel)]="colorIndicator"> </po-input>

    <div class="po-row">
      <po-button class="po-md-4" p-label="Add Serie" (p-click)="addData()" [p-disabled]="isTypeRadar && !categories">
      </po-button>
    </div>
  }
</div>
<form>
  <div class="po-row">
    <po-divider class="po-md-12" p-label="Chart options"></po-divider>

    <po-number
      class="po-md-4"
      name="minRange"
      p-label="minRange"
      [(ngModel)]="options.axis.minRange"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="maxRange"
      p-label="maxRange"
      [(ngModel)]="options.axis.maxRange"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="gridLines"
      p-label="gridLines"
      [(ngModel)]="options.axis.gridLines"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-select
      class="po-md-4"
      name="labelType"
      p-label="labelType"
      [p-options]="labelTypeOptions"
      [(ngModel)]="options.axis.labelType"
      (p-change)="addOptions()"
    >
    </po-select>

    <po-number
      class="po-md-4"
      name="paddingBottom"
      p-label="paddingBottom"
      [(ngModel)]="options.axis.paddingBottom"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="paddingLeft"
      p-label="paddingLeft"
      [(ngModel)]="options.axis.paddingLeft"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="paddingRight"
      p-label="paddingRight"
      [(ngModel)]="options.axis.paddingRight"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="rotateLegend"
      p-label="rotateLegend"
      [(ngModel)]="options.axis.rotateLegend"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="innerRadius"
      p-label="innerRadius"
      [(ngModel)]="options.innerRadius"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="borderRadius"
      p-label="borderRadius"
      [(ngModel)]="options.borderRadius"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-input
      class="po-md-4"
      name="firstColumnName"
      p-label="firstColumnName"
      [(ngModel)]="options.firstColumnName"
      (p-blur)="addOptions()"
    >
    </po-input>

    <po-input
      class="po-md-4"
      name="textCenterGraph"
      p-label="textCenterGraph"
      [(ngModel)]="options.textCenterGraph"
      (p-blur)="addOptions()"
    >
    </po-input>

    <po-input
      class="po-md-4"
      name="descriptionChart"
      p-label="descriptionChart"
      [(ngModel)]="options.descriptionChart"
      (p-blur)="addOptions()"
    ></po-input>

    <po-input
      class="po-md-4"
      name="subtitleGauge"
      p-label="subtitleGauge"
      [(ngModel)]="options.subtitleGauge"
      (p-blur)="addOptions()"
    >
    </po-input>
  </div>
  <div class="po-row">
    <po-checkbox-group
      class="po-md-4"
      name="headerGroup"
      p-label="Header"
      [p-columns]="2"
      [p-options]="optionsHeader"
      [(ngModel)]="selectedValuesHeader"
      (p-change)="changeHeaderOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="axisGroup"
      p-label="Axis"
      [p-columns]="2"
      [p-options]="optionsAxis"
      [(ngModel)]="selectedValuesAxis"
      (p-change)="changeAxisOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="dataZoomGroup"
      p-label="DataZoom"
      [p-columns]="2"
      [p-options]="optionsDataZoom"
      [(ngModel)]="selectedValuesDataZoom"
      (p-change)="changeDataZoomOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="fillPoints"
      p-label="FillPoints"
      [p-columns]="1"
      [p-options]="[{ value: 'fillPoints', label: 'fillPoints' }]"
      [(ngModel)]="selectedValuesFillPoints"
      (p-change)="changeFillPointsOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="legend"
      p-label="Legend"
      [p-options]="[{ label: 'legend', value: 'legend' }]"
      [(ngModel)]="selectedValuesLegend"
      (p-change)="changeLegendOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="roseType"
      p-label="RoseType"
      [p-options]="[{ label: 'roseType', value: 'roseType' }]"
      [(ngModel)]="selectedRoseType"
      (p-change)="changeRoseTypeOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="showFromToLegend"
      p-label="ShowFromToLegend"
      [p-options]="[{ label: 'showFromToLegend', value: 'showFromToLegend' }]"
      [(ngModel)]="selectedFromToLegend"
      (p-change)="changeShowFromToLegend()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="pointer"
      p-label="Pointer"
      [p-options]="[{ label: 'pointer', value: 'pointer' }]"
      [(ngModel)]="selectedPointer"
      (p-change)="changePointer()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="stacked"
      p-label="Stacked"
      [p-options]="[{ label: 'stacked', value: 'stacked' }]"
      [(ngModel)]="selectedStacked"
      (p-change)="changeStacked()"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-4"
      name="radioLegendVerticalPosition"
      p-label="LegendVerticalPosition"
      [p-options]="optionsLegendVerticalPosition"
      [(ngModel)]="selectedLegendVerticalPosition"
      (p-change)="changeLegendVerticalPosition()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="radioLegendPosition"
      p-label="LegendPosition"
      [p-options]="optionsLegendPosition"
      [(ngModel)]="selectedLegendPosition"
      (p-change)="changeLegendPosition()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="radioRendererOption"
      p-label="RendererOption"
      [p-options]="optionsRendererOption"
      [(ngModel)]="selectedRendererOption"
      (p-change)="changeRendererOption()"
    >
    </po-radio-group>
  </div>

  <po-divider class="po-md-12"></po-divider>
  <div class="po-row">
    <po-button class="po-md-4" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-labs/sample-po-chart-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoChartSerie,
  PoChartType,
  PoSelectOption,
  PoChartOptions,
  PoChartDataLabel,
  PoChartLabelFormat
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-labs',
  templateUrl: './sample-po-chart-labs.component.html',
  standalone: false
})
export class SamplePoChartLabsComponent implements OnInit {
  color: string;
  stackGroupName: string;
  data;
  label: string;
  tooltip: string;
  type: PoChartType;
  serieType: PoChartType;
  valueGauge: number;
  fromGauge: number;
  toGauge: number;
  allCategories: Array<string> = [];
  radarConfig: any = {
    indicator: []
  };

  categories: string;
  min: number;
  max: number;
  colorIndicator: string;
  event: string;
  height: number;
  series: Array<PoChartSerie>;
  title: string;
  dataLabel: PoChartDataLabel;
  isTypeGauge = false;
  isTypeRadar = false;
  disabledTooltip = false;
  disabledType = false;
  selectedSplitArea = false;
  selectedAreaStyle = false;
  options: PoChartOptions = {
    axis: {
      minRange: undefined,
      maxRange: undefined,
      gridLines: undefined,
      labelType: undefined,
      paddingBottom: undefined,
      paddingLeft: undefined,
      paddingRight: undefined,
      rotateLegend: undefined,
      showXAxis: undefined,
      showYAxis: undefined,
      showAxisDetails: undefined
    },
    header: {
      hideExpand: undefined,
      hideExportCsv: undefined,
      hideExportImage: undefined,
      hideTableDetails: undefined
    },
    dataZoom: undefined,
    fillPoints: undefined,
    firstColumnName: undefined,
    innerRadius: undefined,
    borderRadius: undefined,
    textCenterGraph: undefined,
    descriptionChart: undefined,
    subtitleGauge: undefined,
    legend: undefined,
    legendPosition: undefined,
    legendVerticalPosition: undefined,
    bottomDataZoom: undefined,
    rendererOption: undefined,
    pointer: undefined,
    stacked: undefined,
    roseType: undefined,
    showFromToLegend: undefined
  };

  selectedValuesDataLabel: Array<string> = [];
  selectedValuesAxis: Array<string> = [];
  selectedValuesHeader: Array<string> = [];
  selectedValuesDataZoom: Array<string> = [];
  selectedValuesFillPoints: Array<string> = [];
  selectedRoseType: Array<string> = [];
  selectedFromToLegend: Array<string> = [];
  selectedPointer: Array<string> = [];
  selectedStacked: Array<string> = [];
  selectedValuesLegend: Array<string> = ['legend'];
  selectedLegendVerticalPosition: PoChartOptions['legendVerticalPosition'] = 'bottom';
  selectedLegendPosition: PoChartOptions['legendPosition'] = 'center';
  selectedRendererOption: PoChartOptions['rendererOption'] = 'canvas';
  selectedShapeOption = 'polygon';
  helpRadar = 'Example: ["Bold", "Keen", "Calm", "Wise"]';
  helpGeneric = 'Example: ["Jan", "Feb", "Mar", "Apr"]';

  optionsAxis = [
    { value: 'showXAxis', label: 'showXAxis' },
    { value: 'showYAxis', label: 'showYAxis' },
    { value: 'showAxisDetails', label: 'showAxisDetails' }
  ];

  optionsHeader = [
    { value: 'hideTableDetails', label: 'hideTableDetails' },
    { value: 'hideExpand', label: 'hideExpand' },
    { value: 'hideExportCsv', label: 'hideExportCsv' },
    { value: 'hideExportImage', label: 'hideExportImage' }
  ];

  optionsDataZoom = [
    { value: 'dataZoom', label: 'dataZoom' },
    { value: 'bottomDataZoom', label: 'bottomDataZoom' }
  ];

  optionsLegendVerticalPosition = [
    { value: 'top', label: 'top' },
    { value: 'bottom', label: 'bottom' }
  ];

  optionsLegendPosition = [
    { value: 'left', label: 'left' },
    { value: 'center', label: 'center' },
    { value: 'right', label: 'right' }
  ];

  optionsRendererOption = [
    { value: 'canvas', label: 'canvas' },
    { value: 'svg', label: 'svg' }
  ];

  optionsShapeOption = [
    { value: 'polygon', label: 'polygon' },
    { value: 'circle', label: 'circle' }
  ];

  readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Line', value: PoChartType.Line },
    { label: 'Area', value: PoChartType.Area },
    { label: 'Bar', value: PoChartType.Bar },
    { label: 'Column', value: PoChartType.Column },
    { label: 'Donut', value: PoChartType.Donut },
    { label: 'Pie', value: PoChartType.Pie },
    { label: 'Gauge', value: PoChartType.Gauge },
    { label: 'Radar', value: PoChartType.Radar }
  ];

  readonly labelTypeOptions: Array<PoSelectOption> = [
    { label: 'Number', value: PoChartLabelFormat.Number },
    { label: 'Currency', value: PoChartLabelFormat.Currency }
  ];

  changeDataLabelOptions() {
    this.dataLabel = {
      ...this.dataLabel,
      fixed: this.selectedValuesDataLabel.includes('fixed')
    };
  }

  changeAxisOptions() {
    const newAxis = {
      showXAxis: this.selectedValuesAxis.includes('showXAxis'),
      showYAxis: this.selectedValuesAxis.includes('showYAxis'),
      showAxisDetails: this.selectedValuesAxis.includes('showAxisDetails')
    };

    this.options = {
      ...this.options,
      axis: newAxis
    };
  }

  changeHeaderOptions() {
    const newHeader = {
      hideExpand: this.selectedValuesHeader.includes('hideExpand'),
      hideExportCsv: this.selectedValuesHeader.includes('hideExportCsv'),
      hideExportImage: this.selectedValuesHeader.includes('hideExportImage'),
      hideTableDetails: this.selectedValuesHeader.includes('hideTableDetails')
    };

    this.options = {
      ...this.options,
      header: newHeader
    };
  }

  changeDataZoomOptions() {
    this.options = {
      ...this.options,
      dataZoom: this.selectedValuesDataZoom.includes('dataZoom'),
      bottomDataZoom: this.selectedValuesDataZoom.includes('bottomDataZoom')
    };

    this.options = { ...this.options };
  }

  changeFillPointsOptions() {
    this.options = {
      ...this.options,
      fillPoints: this.selectedValuesFillPoints.includes('fillPoints')
    };
  }

  changeLegendOptions() {
    this.options = {
      ...this.options,
      legend: this.selectedValuesLegend.includes('legend')
    };
  }

  changeRoseTypeOptions() {
    this.options = {
      ...this.options,
      roseType: this.selectedRoseType.includes('roseType')
    };
  }

  changeShowFromToLegend() {
    this.options = {
      ...this.options,
      showFromToLegend: this.selectedFromToLegend.includes('showFromToLegend')
    };
  }

  changePointer() {
    this.options = {
      ...this.options,
      pointer: this.selectedPointer.includes('pointer')
    };
  }

  changeStacked() {
    this.options = {
      ...this.options,
      stacked: this.selectedStacked.includes('stacked')
    };
  }

  changeLegendVerticalPosition() {
    this.options = {
      ...this.options,
      legendVerticalPosition: this.selectedLegendVerticalPosition
    };
  }

  changeLegendPosition() {
    this.options = {
      ...this.options,
      legendPosition: this.selectedLegendPosition
    };
  }

  changeRendererOption() {
    this.options = {
      ...this.options,
      rendererOption: this.selectedRendererOption
    };
  }

  changeType(event) {
    if (event === PoChartType.Gauge) {
      this.isTypeGauge = true;
      this.changeSwitchGauge(true);
    }
    if (event === PoChartType.Radar) {
      this.isTypeRadar = true;
      this.changeSwitchRadar(true);
    }
  }

  changeSwitchGauge(event) {
    this.restore(true);
    this.disabledTooltip = event;
    this.disabledType = event;
    if (event) {
      this.serieType = PoChartType.Gauge;
      this.type = PoChartType.Gauge;
      this.isTypeRadar = false;
    } else {
      this.serieType = undefined;
      this.type = undefined;
    }
  }

  changeSwitchRadar(event) {
    this.restore(true, true);
    this.disabledType = event;
    if (event) {
      this.serieType = PoChartType.Radar;
      this.type = PoChartType.Radar;
      this.isTypeGauge = false;
    } else {
      this.serieType = undefined;
      this.type = undefined;
    }
  }

  changeValueGauge(event) {
    if (this.series?.length === 1 && !this.toGauge) {
      this.series[0].data = event;
      this.series = [...this.series];
    }
  }

  ngOnInit() {
    this.restore();
  }

  addOptions(actionOptions?: PoChartOptions) {
    this.options = { ...this.options, ...(actionOptions ? { ...actionOptions } : {}) };
  }

  addCategories() {
    this.allCategories = this.convertToArray(this.categories);
  }

  addIndicators() {
    if (!this.categories) {
      this.radarConfig = { indicator: [] };
      return;
    }

    const arr = this.convertToArray(this.categories);

    this.radarConfig = {
      indicator: arr.map(item => ({ name: item, min: this.min, max: this.max, color: this.colorIndicator })),
      shape: this.selectedShapeOption,
      splitArea: this.selectedSplitArea
    };
  }

  addData() {
    const type = this.serieType ?? this.type;

    let data;

    if (type === 'radar') {
      const arr = this.convertToArray(this.data);
      data = arr.map(v => Number(v));
      this.addIndicators();
    } else {
      data = isNaN(this.data) ? this.convertToArray(this.data) : Math.floor(this.data);
    }

    const serie = {
      label: this.label,
      data,
      tooltip: this.tooltip,
      ...(this.color ? { color: this.color } : {}),
      type,
      stackGroupName: this.stackGroupName,
      from: this.fromGauge,
      to: this.toGauge,
      areaStyle: this.selectedAreaStyle ?? undefined
    };

    this.series = [...this.series, serie];

    this.label = undefined;
    this.color = undefined;
    this.data = undefined;
    this.tooltip = undefined;
    this.stackGroupName = undefined;
    this.fromGauge = undefined;
    this.toGauge = undefined;

    if (!this.isTypeGauge) {
      this.type = undefined;
    }
  }

  isTypeGrid(): boolean {
    return (
      this.type === PoChartType.Line ||
      this.type === PoChartType.Area ||
      this.type === PoChartType.Column ||
      this.type === PoChartType.Bar ||
      this.type === PoChartType.Radar
    );
  }

  changeEvent(eventName: string, serieEvent: PoChartSerie): void {
    this.event = \`\${eventName}: \${JSON.stringify(serieEvent)}\`;
  }

  restore(fromGauge = false, keepRadar = false) {
    this.color = undefined;
    this.data = undefined;
    this.label = undefined;
    this.tooltip = undefined;
    this.type = undefined;
    this.serieType = undefined;
    this.fromGauge = undefined;
    this.toGauge = undefined;
    this.valueGauge = undefined;
    this.allCategories = [];
    this.categories = undefined;
    this.event = undefined;
    this.height = undefined;
    this.series = [];
    this.title = undefined;
    this.disabledTooltip = false;
    this.disabledType = false;

    this.dataLabel = { fixed: false };

    this.options = {
      ...this.options,
      axis: {
        minRange: undefined,
        maxRange: undefined,
        gridLines: undefined,
        labelType: undefined,
        paddingBottom: undefined,
        paddingLeft: undefined,
        paddingRight: undefined,
        rotateLegend: undefined,
        showXAxis: undefined,
        showYAxis: undefined,
        showAxisDetails: undefined
      },
      header: {
        hideExpand: undefined,
        hideExportCsv: undefined,
        hideExportImage: undefined,
        hideTableDetails: undefined
      },
      dataZoom: undefined,
      fillPoints: undefined,
      firstColumnName: undefined,
      innerRadius: undefined,
      borderRadius: undefined,
      textCenterGraph: undefined,
      descriptionChart: undefined,
      subtitleGauge: undefined,
      legend: undefined,
      legendPosition: undefined,
      legendVerticalPosition: undefined,
      bottomDataZoom: undefined,
      rendererOption: undefined,
      pointer: undefined,
      stacked: undefined,
      roseType: undefined,
      showFromToLegend: undefined
    };

    this.selectedValuesDataLabel = [];
    this.selectedValuesAxis = [];
    this.selectedValuesHeader = [];
    this.selectedValuesDataZoom = [];
    this.selectedValuesFillPoints = [];
    this.selectedValuesLegend = [];
    this.selectedRoseType = [];

    if (!fromGauge) {
      this.selectedFromToLegend = [];
      this.selectedPointer = [];
      this.isTypeGauge = false;
    }

    if (!keepRadar) {
      this.isTypeRadar = false;
      this.categories = undefined;
      this.radarConfig = [];
    }
  }

  private convertToArray(value: string): Array<any> {
    try {
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-chart-labs"),t(),o(23,"hr")),s&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),k(" ",i.sampleCodeButtonLabel,""),p(),h("ngClass",y(4,ot,i.hideSampleCodeTabs)))},dependencies:[V,M,w,L,fe],encapsulation:2})}return r})();var ye=(()=>{class r{poAlert=J(U);participationByCountryInWorldExportsType=b.Line;evolutionOfCoffeeAndSomeCompetitorsType=b.Column;coffeConsumingChartType=b.Donut;consumptionPerCapitaType=b.Bar;categories=["2010","2011","2012","2013","2014","2015"];chartAreaCategories=["Jan-18","Jul-18","Jan-19","Jul-19","Jan-20","Jul-20","Jan-21"];categoriesColumn=["coffee","chocolate","tea"];consumptionPerCapitaItems=["Water","Fruit Juice","Coffee","Cola drinks","Pils","Tea","Red Wine","Prosecco","Sodas","Beer 0% A.","Wheat Beer","Milk Shakes"];chartAreaSeries=[{label:"Starbucks",data:[550,497,532,550,530,565,572],type:b.Area},{label:"Green Mntn Coffee Roaster",data:[420,511,493,525,522,510,567],type:b.Area},{label:"Dunkin Brands Group",data:[312,542,497,610,542,661,674],type:b.Area},{label:"Coffee Arabica Price",data:[550,612,525,373,342,297,282],type:b.Line}];coffeeConsumption=[{label:"Finland",data:9.6,tooltip:"Finland (Europe)"},{label:"Norway",data:7.2,tooltip:"Norway (Europe)"},{label:"Netherlands",data:6.7,tooltip:"Netherlands (Europe)"},{label:"Slovenia",data:6.1,tooltip:"Slovenia (Europe)"},{label:"Austria",data:5.5,tooltip:"Austria (Europe)"}];consumptionPerCapita=[{label:"2018",data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:"2020",data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,25,29,33,33],color:"color-10",tooltip:l=>`Pa\xEDs: ${l.seriesName}<br><b>Ano:</b> ${l.name}<br><b>Exporta\xE7\xF5es:</b> ${l.value}%`},{label:"Vietnam",data:[15,17,23,19,22,18],tooltip:"Exporta\xE7\xF5es de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participa\xE7\xE3o: {value}%"},{label:"Colombia",data:[8,7,6,9,10,11],tooltip:`Pa\xEDs: {seriesName}
Ano: {name}
Participa\xE7\xE3o: {value}%`},{label:"India",data:[5,6,5,4,5,5]},{label:"Indonesia",data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:b.Column},{label:"2017",data:[93,52,18],type:b.Column},{label:"2020",data:[95,21,-17],type:b.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:b.Line,color:"color-10"}];coffeeProduction=[{label:"Brazil",data:1796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}];items=[{position:"1",company:"Tim Hortons",location:"Hamilton, Ontario, Canada",foundation:"1964"},{position:"2",company:"Bewley\u2019s",location:"Dublin, Ireland",foundation:"1840"},{position:"3",company:"Lavazza Coffee",location:"Italy",foundation:"1895"},{position:"4",company:"Peet\u2019s Tea and Coffee",location:"Emeryville, California, US",foundation:"1966"},{position:"5",company:"Tully\u2019s Coffee",location:"Seattle, Washington, US",foundation:"1992"},{position:"6",company:"Costa Coffee",location:"Dunstable, England",foundation:"1971"},{position:"7",company:"McCafe",location:"Oak Brook, Illinois, United States",foundation:"1993"},{position:"8",company:"Starbucks Coffee",location:"Seattle, Washington, US",foundation:"1971"},{position:"9",company:"Dunkin\u2019 Donuts",location:"Quincy, Massachusetts, US",foundation:"1950"},{position:"10",company:"Coffee Beanery",location:"Flushing, Michigan, US",foundation:"1976"}];coffeeProductionOptions={roseType:!0,borderRadius:8};consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2,labelType:I.Number,rotateLegend:45},legendVerticalPosition:"top"};chartAreaOptions={axis:{maxRange:700,gridLines:8},fillPoints:!0};options={axis:{minRange:0,maxRange:40,gridLines:5,labelType:I.Number},dataZoom:!0};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7,showXAxis:!0}};searchMore(l){window.open(`http://google.com/search?q=coffee+producing+${l.label}`,"_blank")}showMeTheDates(l){this.poAlert.alert({title:"Statistic",message:`${l.label} consuming ${l.data}kg per capita!`,ok:()=>{}})}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-coffee-ranking"]],standalone:!1,features:[X([U])],decls:28,vars:21,consts:[[1,"po-row"],[1,"po-md-12","po-lg-6"],["p-title","Participation by country in world exports - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series","p-type"],["p-title","Evolution of coffee and some competitors - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series"],["p-title","Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %",1,"po-md-12","po-mt-2",3,"p-height","p-categories","p-series","p-type","p-options"],[1,"po-md-12"],["p-title","Top 5 coffee producing countries (in tons)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-options","p-series"],["p-title","Top 5 Coffee Consuming Countries (in kg per capita)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-series","p-type"],["p-title","While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)",1,"po-md-6","po-mt-2",3,"p-options","p-categories","p-series"],[1,"po-md-6","po-mt-2"],["p-height","198"],[1,"po-font-title","po-text-center","po-pt-5"],[1,"po-text-center"],[1,"po-lg-12","po-mt-2"],[1,"po-font-text-bold"],["p-container","shadow",3,"p-items","p-hide-table-search"]],template:function(s,i){s&1&&(n(0,"div",0)(1,"div",1)(2,"div",0),o(3,"po-chart",2)(4,"po-chart",3),t()(),n(5,"div",1),o(6,"po-chart",4),t(),n(7,"div",5)(8,"po-chart",6),g("p-series-click",function(u){return i.searchMore(u)}),t(),n(9,"po-chart",7),g("p-series-click",function(u){return i.showMeTheDates(u)}),t()(),n(10,"div",0),o(11,"po-chart",8),n(12,"div",9)(13,"po-widget",10)(14,"div",11),e(15,"66 billion"),t(),n(16,"div",12),e(17,"cups of coffee are consumed per year in U.S."),t()(),n(18,"po-widget",10)(19,"div",11),e(20,"2nd most"),t(),n(21,"div",12),e(22,"traded commodity in the world second to Oil."),t()()()()(),n(23,"div",0)(24,"po-container",13)(25,"div",14),e(26,"Top 10 Largest Coffee Chains in the World"),t(),o(27,"po-table",15),t()()),s&2&&(p(3),h("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType),p(),h("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.evolutionOfCoffeeAndSomeCompetitors),p(2),h("p-height",816)("p-categories",i.consumptionPerCapitaItems)("p-series",i.consumptionPerCapita)("p-type",i.consumptionPerCapitaType)("p-options",i.consumptionPerCapitaOptions),p(2),h("p-options",i.coffeeProductionOptions)("p-series",i.coffeeProduction),p(),h("p-series",i.coffeeConsumption)("p-type",i.coffeConsumingChartType),p(2),h("p-options",i.chartAreaOptions)("p-categories",i.chartAreaCategories)("p-series",i.chartAreaSeries),p(16),h("p-items",i.items)("p-hide-table-search",!1))},dependencies:[D,q,pe,Ee],encapsulation:2})}return r})();var lt=r=>({"docs-sample-code-tabs":r}),ve=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-coffee-ranking-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(s,i){s&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - Coffee Ranking"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <div class="po-md-12 po-lg-6">
    <div class="po-row">
      <po-chart
        class="po-md-12 po-mt-2"
        p-title="Participation by country in world exports - %"
        [p-options]="options"
        [p-categories]="categories"
        [p-series]="participationByCountryInWorldExports"
        [p-type]="participationByCountryInWorldExportsType"
      >
      </po-chart>

      <po-chart
        class="po-md-12 po-mt-2"
        p-title="Evolution of coffee and some competitors - %"
        [p-options]="optionsColumn"
        [p-categories]="categoriesColumn"
        [p-series]="evolutionOfCoffeeAndSomeCompetitors"
      >
      </po-chart>
    </div>
  </div>

  <div class="po-md-12 po-lg-6">
    <po-chart
      class="po-md-12 po-mt-2"
      p-title="Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %"
      [p-height]="816"
      [p-categories]="consumptionPerCapitaItems"
      [p-series]="consumptionPerCapita"
      [p-type]="consumptionPerCapitaType"
      [p-options]="consumptionPerCapitaOptions"
    >
    </po-chart>
  </div>

  <div class="po-md-12">
    <po-chart
      class="po-lg-6 po-mt-2"
      p-title="Top 5 coffee producing countries (in tons)"
      [p-options]="coffeeProductionOptions"
      [p-series]="coffeeProduction"
      (p-series-click)="searchMore($event)"
    >
    </po-chart>

    <po-chart
      class="po-lg-6 po-mt-2"
      p-title="Top 5 Coffee Consuming Countries (in kg per capita)"
      [p-series]="coffeeConsumption"
      [p-type]="coffeConsumingChartType"
      (p-series-click)="showMeTheDates($event)"
    >
    </po-chart>
  </div>

  <div class="po-row">
    <po-chart
      class="po-md-6 po-mt-2"
      p-title="While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)"
      [p-options]="chartAreaOptions"
      [p-categories]="chartAreaCategories"
      [p-series]="chartAreaSeries"
    >
    </po-chart>

    <div class="po-md-6 po-mt-2">
      <po-widget p-height="198">
        <div class="po-font-title po-text-center po-pt-5">66 billion</div>
        <div class="po-text-center">cups of coffee are consumed per year in U.S.</div>
      </po-widget>

      <po-widget p-height="198">
        <div class="po-font-title po-text-center po-pt-5">2nd most</div>
        <div class="po-text-center">traded commodity in the world second to Oil.</div>
      </po-widget>
    </div>
  </div>
</div>

<div class="po-row">
  <po-container class="po-lg-12 po-mt-2">
    <div class="po-font-text-bold">Top 10 Largest Coffee Chains in the World</div>

    <po-table p-container="shadow" [p-items]="items" [p-hide-table-search]="false"> </po-table>
  </po-container>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoChartType, PoChartOptions, PoChartSerie, PoDialogService, PoChartLabelFormat } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-coffee-ranking',
  templateUrl: './sample-po-chart-coffee-ranking.component.html',
  providers: [PoDialogService],
  standalone: false
})
export class SamplePoChartCoffeeRankingComponent {
  private poAlert = inject(PoDialogService);

  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  evolutionOfCoffeeAndSomeCompetitorsType: PoChartType = PoChartType.Column;
  coffeConsumingChartType: PoChartType = PoChartType.Donut;
  consumptionPerCapitaType: PoChartType = PoChartType.Bar;

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];

  chartAreaCategories: Array<string> = ['Jan-18', 'Jul-18', 'Jan-19', 'Jul-19', 'Jan-20', 'Jul-20', 'Jan-21'];

  categoriesColumn: Array<string> = ['coffee', 'chocolate', 'tea'];

  consumptionPerCapitaItems: Array<string> = [
    'Water',
    'Fruit Juice',
    'Coffee',
    'Cola drinks',
    'Pils',
    'Tea',
    'Red Wine',
    'Prosecco',
    'Sodas',
    'Beer 0% A.',
    'Wheat Beer',
    'Milk Shakes'
  ];

  chartAreaSeries: Array<PoChartSerie> = [
    { label: 'Starbucks', data: [550, 497, 532, 550, 530, 565, 572], type: PoChartType.Area },
    { label: 'Green Mntn Coffee Roaster', data: [420, 511, 493, 525, 522, 510, 567], type: PoChartType.Area },
    { label: 'Dunkin Brands Group', data: [312, 542, 497, 610, 542, 661, 674], type: PoChartType.Area },
    {
      label: 'Coffee Arabica Price',
      data: [550, 612, 525, 373, 342, 297, 282],
      type: PoChartType.Line
    }
  ];

  coffeeConsumption: Array<PoChartSerie> = [
    { label: 'Finland', data: 9.6, tooltip: 'Finland (Europe)' },
    { label: 'Norway', data: 7.2, tooltip: 'Norway (Europe)' },
    { label: 'Netherlands', data: 6.7, tooltip: 'Netherlands (Europe)' },
    { label: 'Slovenia', data: 6.1, tooltip: 'Slovenia (Europe)' },
    { label: 'Austria', data: 5.5, tooltip: 'Austria (Europe)' }
  ];

  consumptionPerCapita: Array<PoChartSerie> = [
    { label: '2018', data: [86.5, 51.3, 44.6, 39.5, 27.6, 27.3, 25.4, 21.5, 20.8, 15.9, 15.4, 14.4] },
    { label: '2020', data: [86.1, 52.1, 47.3, 37.8, 29.8, 28.5, 24.9, 22.5, 21.1, 14.5, 15.5, 15.5] }
  ];

  participationByCountryInWorldExports: Array<PoChartSerie> = [
    {
      label: 'Brazil',
      data: [35, 32, 25, 29, 33, 33],
      color: 'color-10',
      tooltip: params =>
        \`Pa\xEDs: \${params.seriesName}<br><b>Ano:</b> \${params.name}<br><b>Exporta\xE7\xF5es:</b> \${params.value}%\`
    },
    {
      label: 'Vietnam',
      data: [15, 17, 23, 19, 22, 18],
      tooltip: 'Exporta\xE7\xF5es de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participa\xE7\xE3o: {value}%'
    },
    {
      label: 'Colombia',
      data: [8, 7, 6, 9, 10, 11],
      tooltip: 'Pa\xEDs: {seriesName}\\nAno: {name}\\nParticipa\xE7\xE3o: {value}%'
    },
    { label: 'India', data: [5, 6, 5, 4, 5, 5] },
    { label: 'Indonesia', data: [7, 6, 10, 10, 4, 6] }
  ];

  evolutionOfCoffeeAndSomeCompetitors: Array<PoChartSerie> = [
    { label: '2014', data: [91, 40, 42], type: PoChartType.Column },
    { label: '2017', data: [93, 52, 18], type: PoChartType.Column },
    { label: '2020', data: [95, 21, -17], type: PoChartType.Column },
    { label: 'Coffee consumption in Brazil', data: [34, 27, 79], type: PoChartType.Line, color: 'color-10' }
  ];

  coffeeProduction: Array<PoChartSerie> = [
    { label: 'Brazil', data: 1796, tooltip: 'Brazil (South America)', color: 'color-10' },
    { label: 'Vietnam', data: 1076, tooltip: 'Vietnam (Asia)' },
    { label: 'Colombia', data: 688, tooltip: 'Colombia (South America)' },
    { label: 'Indonesia', data: 682, tooltip: 'Indonesia (Asia/Oceania)' },
    { label: 'Peru', data: 273, tooltip: 'Peru (South America)' }
  ];

  items: Array<any> = [
    { position: '1', company: 'Tim Hortons', location: 'Hamilton, Ontario, Canada', foundation: '1964' },
    { position: '2', company: 'Bewley\u2019s', location: 'Dublin, Ireland', foundation: '1840' },
    { position: '3', company: 'Lavazza Coffee', location: 'Italy', foundation: '1895' },
    { position: '4', company: 'Peet\u2019s Tea and Coffee', location: 'Emeryville, California, US', foundation: '1966' },
    { position: '5', company: 'Tully\u2019s Coffee', location: 'Seattle, Washington, US', foundation: '1992' },
    { position: '6', company: 'Costa Coffee', location: 'Dunstable, England', foundation: '1971' },
    { position: '7', company: 'McCafe', location: 'Oak Brook, Illinois, United States', foundation: '1993' },
    { position: '8', company: 'Starbucks Coffee', location: 'Seattle, Washington, US', foundation: '1971' },
    { position: '9', company: 'Dunkin\u2019 Donuts', location: 'Quincy, Massachusetts, US', foundation: '1950' },
    { position: '10', company: 'Coffee Beanery', location: 'Flushing, Michigan, US', foundation: '1976' }
  ];

  coffeeProductionOptions: PoChartOptions = {
    roseType: true,
    borderRadius: 8
  };

  consumptionPerCapitaOptions: PoChartOptions = {
    axis: {
      maxRange: 100,
      gridLines: 2,
      labelType: PoChartLabelFormat.Number,
      rotateLegend: 45
    },
    legendVerticalPosition: 'top'
  };

  chartAreaOptions: PoChartOptions = {
    axis: {
      maxRange: 700,
      gridLines: 8
    },
    fillPoints: true
  };

  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5,
      labelType: PoChartLabelFormat.Number
    },
    dataZoom: true
  };

  optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7,
      showXAxis: true
    }
  };

  searchMore(event: any) {
    window.open(\`http://google.com/search?q=coffee+producing+\${event.label}\`, '_blank');
  }

  showMeTheDates(event: any) {
    this.poAlert.alert({
      title: 'Statistic',
      message: \`\${event.label} consuming \${event.data}kg per capita!\`,
      ok: () => {}
    });
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-chart-coffee-ranking"),t(),o(23,"hr")),s&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),k(" ",i.sampleCodeButtonLabel,""),p(),h("ngClass",y(4,lt,i.hideSampleCodeTabs)))},dependencies:[V,M,w,L,ye],encapsulation:2})}return r})();var _e=(()=>{class r{typeBar=b.Bar;optionsColumn={axis:{minRange:-20,gridLines:7}};categoriesColumn=["North Region","Central Region","South Region"];seriesColumn=[{label:"Year 2014",data:[51,40,42],stackGroupName:"group1"},{label:"Year 2017",data:[53,52,18]},{label:"Year 2020",data:[55,21,-17],stackGroupName:"group1"},{label:"Year 2023",data:[35,27,23],stackGroupName:"group2"},{label:"Year 2026",data:[45,34,17],stackGroupName:"group2"},{label:"Year 2029",data:[23,63,56],stackGroupName:"group1"}];optionsBar={stacked:!0};categoriesBar=["North Region","Central Region","South Region","Southeast Region","Northeast Region"];seriesBar=[{label:"Year 2014",data:[199,340,247,236,222]},{label:"Year 2017",data:[221,252,225,241,225]},{label:"Year 2020",data:[229,213,196,212,237]},{label:"Year 2023",data:[240,237,230,223,231]},{label:"Year 2026",data:[235,270,239,255,242]}];static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-stacked"]],standalone:!1,decls:6,vars:9,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],["p-title","Average Temperature by Region",1,"po-lg-6",3,"p-height","p-options","p-categories","p-series"],["p-title","Energy Consumption by Region",1,"po-lg-6",3,"p-type","p-height","p-options","p-categories","p-series"]],template:function(s,i){s&1&&(n(0,"po-container")(1,"div",0),e(2,"Energy and Climate Analysis"),t(),n(3,"div",1),o(4,"po-chart",2)(5,"po-chart",3),t()()),s&2&&(p(4),h("p-height",500)("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.seriesColumn),p(),h("p-type",i.typeBar)("p-height",500)("p-options",i.optionsBar)("p-categories",i.categoriesBar)("p-series",i.seriesBar))},dependencies:[D,q],encapsulation:2})}return r})();var pt=r=>({"docs-sample-code-tabs":r}),Pe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-stacked-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(s,i){s&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - Stacked"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-stacked/sample-po-chart-stacked.component.html"),t(),n(13,"pre",7),e(14,`<po-container>
  <div class="po-font-title po-mb-3">Energy and Climate Analysis</div>
  <div class="po-row">
    <po-chart
      class="po-lg-6"
      p-title="Average Temperature by Region"
      [p-height]="500"
      [p-options]="optionsColumn"
      [p-categories]="categoriesColumn"
      [p-series]="seriesColumn"
    >
    </po-chart>

    <po-chart
      class="po-lg-6"
      p-title="Energy Consumption by Region"
      [p-type]="typeBar"
      [p-height]="500"
      [p-options]="optionsBar"
      [p-categories]="categoriesBar"
      [p-series]="seriesBar"
    >
    </po-chart>
  </div>
</po-container>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-stacked/sample-po-chart-stacked.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-stacked',
  templateUrl: './sample-po-chart-stacked.component.html',
  standalone: false
})
export class SamplePoChartStackedComponent {
  typeBar = PoChartType.Bar;

  optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      gridLines: 7
    }
  };

  categoriesColumn: Array<string> = ['North Region', 'Central Region', 'South Region'];

  seriesColumn: Array<PoChartSerie> = [
    { label: 'Year 2014', data: [51, 40, 42], stackGroupName: 'group1' },
    { label: 'Year 2017', data: [53, 52, 18] },
    { label: 'Year 2020', data: [55, 21, -17], stackGroupName: 'group1' },
    { label: 'Year 2023', data: [35, 27, 23], stackGroupName: 'group2' },
    { label: 'Year 2026', data: [45, 34, 17], stackGroupName: 'group2' },
    { label: 'Year 2029', data: [23, 63, 56], stackGroupName: 'group1' }
  ];

  optionsBar: PoChartOptions = {
    stacked: true
  };

  categoriesBar: Array<string> = [
    'North Region',
    'Central Region',
    'South Region',
    'Southeast Region',
    'Northeast Region'
  ];

  seriesBar: Array<PoChartSerie> = [
    { label: 'Year 2014', data: [199, 340, 247, 236, 222] },
    { label: 'Year 2017', data: [221, 252, 225, 241, 225] },
    { label: 'Year 2020', data: [229, 213, 196, 212, 237] },
    { label: 'Year 2023', data: [240, 237, 230, 223, 231] },
    { label: 'Year 2026', data: [235, 270, 239, 255, 242] }
  ];
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-chart-stacked"),t(),o(23,"hr")),s&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),k(" ",i.sampleCodeButtonLabel,""),p(),h("ngClass",y(4,pt,i.hideSampleCodeTabs)))},dependencies:[V,M,w,L,_e],encapsulation:2})}return r})();var Te=(()=>{class r{type=b.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:!0};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-summary"]],standalone:!1,decls:8,vars:7,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],[1,"po-lg-6"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"],["p-title","Sales performance",3,"p-type","p-options","p-value-gauge-multiple","p-series"]],template:function(s,i){s&1&&(n(0,"po-container")(1,"div",0),e(2,"Sales Performance"),t(),n(3,"div",1)(4,"div",2),o(5,"po-chart",3),t(),n(6,"div",2),o(7,"po-chart",4),t()()()),s&2&&(p(5),h("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover),p(2),h("p-type",i.type)("p-options",i.optionsRange)("p-value-gauge-multiple",50)("p-series",i.salesRanges))},dependencies:[D,q],encapsulation:2})}return r})();var ut=r=>({"docs-sample-code-tabs":r}),we=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-summary-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(s,i){s&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - Summary"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-summary/sample-po-chart-summary.component.html"),t(),n(13,"pre",7),e(14,`<po-container>
  <div class="po-font-title po-mb-3">Sales Performance</div>
  <div class="po-row">
    <div class="po-lg-6">
      <po-chart
        p-title="Employee turnover rate"
        p-value="25"
        [p-type]="type"
        [p-options]="optionsSingle"
        [p-series]="turnover"
      ></po-chart>
    </div>
    <div class="po-lg-6">
      <po-chart
        p-title="Sales performance"
        [p-type]="type"
        [p-options]="optionsRange"
        [p-value-gauge-multiple]="50"
        [p-series]="salesRanges"
      ></po-chart>
    </div>
  </div>
</po-container>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-summary/sample-po-chart-summary.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-summary',
  templateUrl: './sample-po-chart-summary.component.html',
  standalone: false
})
export class SamplePoChartSummaryComponent {
  type = PoChartType.Gauge;
  optionsSingle: PoChartOptions = {
    descriptionChart: '25% of turnover'
  };

  optionsRange: PoChartOptions = {
    descriptionChart: 'The sales increased in 82% in the first bimester of 2020',
    showFromToLegend: true
  };

  turnover: Array<PoChartSerie> = [{ data: 25, label: 'Low rate' }];

  salesRanges: Array<PoChartSerie> = [
    { from: 0, to: 50, label: 'Sales reduction' },
    { from: 50, to: 75, label: 'Average sales' },
    { from: 75, to: 100, label: 'Sales soared' }
  ];
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-chart-summary"),t(),o(23,"hr")),s&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),k(" ",i.sampleCodeButtonLabel,""),p(),h("ngClass",y(4,ut,i.hideSampleCodeTabs)))},dependencies:[V,M,w,L,Te],encapsulation:2})}return r})();var Le=(()=>{class r{participationByCountryInWorldExportsType=b.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:!0};categories=["2010","2011","2012","2013","2014","2015"];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,27,29,33,33]},{label:"Vietnam",data:[15,17,18,19,22,18]},{label:"Colombia",data:[8,7,6,9,10,11]}];static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-world-exports"]],standalone:!1,decls:2,vars:5,consts:[[1,"po-row"],["p-title","Participation by country in world exports - %",1,"po-md-12",3,"p-options","p-categories","p-series","p-type","p-data-label"]],template:function(s,i){s&1&&(n(0,"div",0),o(1,"po-chart",1),t()),s&2&&(p(),h("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType)("p-data-label",i.dataLabel))},dependencies:[D],encapsulation:2})}return r})();var Et=r=>({"docs-sample-code-tabs":r}),Me=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-world-exports-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(s,i){s&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - World Exports"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-chart
    class="po-md-12"
    p-title="Participation by country in world exports - %"
    [p-options]="options"
    [p-categories]="categories"
    [p-series]="participationByCountryInWorldExports"
    [p-type]="participationByCountryInWorldExportsType"
    [p-data-label]="dataLabel"
  >
  </po-chart>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-world-exports',
  templateUrl: './sample-po-chart-world-exports.component.html',
  standalone: false
})
export class SamplePoChartWorldExportsComponent {
  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5
    }
  };
  dataLabel = { fixed: true };

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];

  participationByCountryInWorldExports: Array<PoChartSerie> = [
    { label: 'Brazil', data: [35, 32, 27, 29, 33, 33] },
    { label: 'Vietnam', data: [15, 17, 18, 19, 22, 18] },
    { label: 'Colombia', data: [8, 7, 6, 9, 10, 11] }
  ];
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-chart-world-exports"),t(),o(23,"hr")),s&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),k(" ",i.sampleCodeButtonLabel,""),p(),h("ngClass",y(4,Et,i.hideSampleCodeTabs)))},dependencies:[V,M,w,L,Le],encapsulation:2})}return r})();var ke=(()=>{class r{radarConfig={indicator:[{name:"Frontend Development",max:100},{name:"Backend Development",max:100},{name:"Database Design",max:100},{name:"Cloud & DevOps",max:100},{name:"Testing & Quality",max:100},{name:"System Architecture",max:100}],splitArea:!0,shape:"circle"};radarConfigMovies={indicator:[{name:"Storytelling",max:100},{name:"Characters",max:100},{name:"Visual Effects",max:100},{name:"Soundtrack",max:100},{name:"Pacing",max:100},{name:"Rewatchability",max:100}],splitArea:!0};type=b.Radar;series=[{label:"Team Alpha",data:[82,50,78,70,88,81]},{label:"Team Beta",data:[65,83,72,89,60,74]},{label:"Team Delta",data:[45,21,33,65,24,58]},{label:"Team Omega",data:[60,49,19,58,94,59]}];seriesMovies=[{label:"Sci-Fi",data:[60,53,45,58,42,55]},{label:"Fantasy",data:[53,80,66,71,75,88]},{label:"Drama",data:[92,31,98,60,88,72]},{label:"Thriller",data:[44,56,75,84,90,80]}];radarOptions={areaStyle:!0};static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-technology-skill"]],standalone:!1,decls:3,vars:6,consts:[[1,"po-row"],["p-title","Technology Skill Assessment",1,"po-md-6",3,"p-categories","p-type","p-series"],["p-title","Genre Popularity","p-type","radar",1,"po-md-6",3,"p-categories","p-series","p-options"]],template:function(s,i){s&1&&(n(0,"div",0),o(1,"po-chart",1)(2,"po-chart",2),t()),s&2&&(p(),h("p-categories",i.radarConfig)("p-type",i.type)("p-series",i.series),p(),h("p-categories",i.radarConfigMovies)("p-series",i.seriesMovies)("p-options",i.radarOptions))},dependencies:[D],encapsulation:2})}return r})();var bt=r=>({"docs-sample-code-tabs":r}),Ve=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-technology-skill-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(s,i){s&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - Radar"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-chart
    class="po-md-6"
    p-title="Technology Skill Assessment"
    [p-categories]="radarConfig"
    [p-type]="type"
    [p-series]="series"
  >
  </po-chart>

  <po-chart
    class="po-md-6"
    p-title="Genre Popularity"
    p-type="radar"
    [p-categories]="radarConfigMovies"
    [p-series]="seriesMovies"
    [p-options]="radarOptions"
  >
  </po-chart>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoChartOptions, PoChartType } from '@po-ui/ng-components';
import { PoChartRadarOptions } from '@po-ui/ng-components/lib/components/po-chart/interfaces/po-chart-radar-options.interface';

@Component({
  selector: 'sample-po-chart-technology-skill',
  templateUrl: './sample-po-chart-technology-skill.component.html',
  standalone: false
})
export class SamplePoChartTechnologySkillComponent {
  radarConfig: PoChartRadarOptions = {
    indicator: [
      { name: 'Frontend Development', max: 100 },
      { name: 'Backend Development', max: 100 },
      { name: 'Database Design', max: 100 },
      { name: 'Cloud & DevOps', max: 100 },
      { name: 'Testing & Quality', max: 100 },
      { name: 'System Architecture', max: 100 }
    ],
    splitArea: true,
    shape: 'circle'
  };

  radarConfigMovies: PoChartRadarOptions = {
    indicator: [
      { name: 'Storytelling', max: 100 },
      { name: 'Characters', max: 100 },
      { name: 'Visual Effects', max: 100 },
      { name: 'Soundtrack', max: 100 },
      { name: 'Pacing', max: 100 },
      { name: 'Rewatchability', max: 100 }
    ],
    splitArea: true
  };

  type = PoChartType.Radar;

  series = [
    {
      label: 'Team Alpha',
      data: [82, 50, 78, 70, 88, 81]
    },
    {
      label: 'Team Beta',
      data: [65, 83, 72, 89, 60, 74]
    },
    {
      label: 'Team Delta',
      data: [45, 21, 33, 65, 24, 58]
    },
    {
      label: 'Team Omega',
      data: [60, 49, 19, 58, 94, 59]
    }
  ];

  seriesMovies = [
    {
      label: 'Sci-Fi',
      data: [60, 53, 45, 58, 42, 55]
    },
    {
      label: 'Fantasy',
      data: [53, 80, 66, 71, 75, 88]
    },
    {
      label: 'Drama',
      data: [92, 31, 98, 60, 88, 72]
    },
    {
      label: 'Thriller',
      data: [44, 56, 75, 84, 90, 80]
    }
  ];

  radarOptions: PoChartOptions = {
    areaStyle: true
  };
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-chart-technology-skill"),t(),o(23,"hr")),s&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),k(" ",i.sampleCodeButtonLabel,""),p(),h("ngClass",y(4,bt,i.hideSampleCodeTabs)))},dependencies:[V,M,w,L,ke],encapsulation:2})}return r})();var De=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275cmp=f({type:r,selectors:[["sample-po-chart-doc"]],standalone:!1,decls:2779,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/guide-charts"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","PoChartRadarOptions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoChartDataLabel"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoChartLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoChartOptions"],["pan","",1,"docs-api-property-type","Array<PoChartSerie>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoChartType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoChartLabelFormat"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoChartAxisOptions"],["pan","",1,"docs-api-property-type","PoChartHeaderOptions"],["pan","",1,"docs-api-property-type","'left'"],["pan","",1,"docs-api-property-type","'center'"],["pan","",1,"docs-api-property-type","'right'"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","'canvas'"],["pan","",1,"docs-api-property-type","'svg'"],["pan","",1,"docs-api-property-type","Array<PoChartIndicatorOptions>"],["pan","",1,"docs-api-property-type","'polygon'"],["pan","",1,"docs-api-property-type","'circle'"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<number>"],["pan","",1,"docs-api-property-type","((params:","any)","=>","string)"],[1,"language-ts"],["href","https://angular.io/api/common/DecimalPipe"],["href","https://angular.dev/api/core/DEFAULT_CURRENCY_CODE"],["href","https://angular.dev/api/core/LOCALE_ID"]],template:function(s,i){s&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoChartModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente "),n(7,"code"),e(8,"po-chart"),t(),e(9,"."),t()(),n(10,"h3",3),e(11,"Componente"),t(),n(12,"h4",4)(13,"code",5),e(14,"PoChartComponent"),t()(),n(15,"div",2)(16,"p"),e(17,"O "),n(18,"code"),e(19,"po-chart"),t(),e(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),t(),n(21,"p"),e(22,"Atrav\xE9s de suas principais propriedades \xE9 poss\xEDvel definir atributos, tais como tipo de gr\xE1fico, altura, t\xEDtulo, cores customizadas, op\xE7\xF5es para os eixos, entre outros."),t(),n(23,"p"),e(24,"O componente permite utilizar em conjunto s\xE9ries do tipo linha e coluna."),t(),n(25,"p"),e(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),n(27,"em"),e(28,"mouse"),t(),e(29," sobre o elemento."),t(),n(30,"h4"),e(31,"Guia de uso para Gr\xE1ficos"),t(),n(32,"blockquote")(33,"p"),e(34,"Veja nosso "),n(35,"a",6),e(36,"guia de uso para gr\xE1ficos"),t(),e(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores.`),t()(),n(38,"h4"),e(39,"Tokens customiz\xE1veis"),t(),n(40,"p"),e(41,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(42,"blockquote")(43,"p"),e(44,"Para maiores informa\xE7\xF5es, acesse o guia "),n(45,"a",7),e(46,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(47,"."),t()(),n(48,"table")(49,"thead")(50,"tr")(51,"th"),e(52,"Propriedade"),t(),n(53,"th"),e(54,"Descri\xE7\xE3o"),t(),n(55,"th"),e(56,"Valor Padr\xE3o"),t()()(),n(57,"tbody")(58,"tr")(59,"td")(60,"strong"),e(61,"Chart (po-chart)"),t()(),o(62,"td")(63,"td"),t(),n(64,"tr")(65,"td")(66,"code"),e(67,"--background-color-grid"),t()(),n(68,"td"),e(69,"Cor de background dos gr\xE1ficos"),t(),n(70,"td")(71,"code"),e(72,"var(--color-neutral-light-00)"),t()()(),n(73,"tr")(74,"td")(75,"code"),e(76,"--color-description-chart"),t()(),n(77,"td"),e(78,"Cor da descri\xE7\xE3o dos gr\xE1ficos"),t(),n(79,"td")(80,"code"),e(81,"var(--color-neutral-dark-70)"),t()()(),n(82,"tr")(83,"td")(84,"code"),e(85,"--font-family-description-chart"),t()(),n(86,"td"),e(87,"Fonte da descri\xE7\xE3o dos gr\xE1ficos"),t(),n(88,"td")(89,"code"),e(90,"var(--font-family-theme)"),t()()(),n(91,"tr")(92,"td")(93,"code"),e(94,"--font-size-description-chart"),t()(),n(95,"td"),e(96,"Tamanho da fonte da descri\xE7\xE3o dos gr\xE1ficos"),t(),n(97,"td")(98,"code"),e(99,"var(--font-size-sm)"),t()()(),n(100,"tr")(101,"td")(102,"code"),e(103,"--font-weight-description-chart"),t()(),n(104,"td"),e(105,"Peso da fonte da descri\xE7\xE3o dos gr\xE1ficos"),t(),n(106,"td")(107,"code"),e(108,"var(--font-weight-normal)"),t()()(),n(109,"tr")(110,"td")(111,"strong"),e(112,"Header (po-chart .po-chart-header )"),t()(),o(113,"td")(114,"td"),t(),n(115,"tr")(116,"td")(117,"code"),e(118,"--background-color"),t()(),n(119,"td"),e(120,"Cor de background do cabe\xE7alho"),t(),n(121,"td")(122,"code"),e(123,"var(--color-neutral-light-00)"),t()()(),n(124,"tr")(125,"td")(126,"code"),e(127,"--color"),t()(),n(128,"td"),e(129,"Cor da fonte do cabe\xE7alho"),t(),n(130,"td")(131,"code"),e(132,"var(--color-neutral-dark-70)"),t()()(),n(133,"tr")(134,"td")(135,"code"),e(136,"--font-family"),t()(),n(137,"td"),e(138,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(139,"td")(140,"code"),e(141,"var(--font-family-theme)"),t()()(),n(142,"tr")(143,"td")(144,"code"),e(145,"--font-size-title"),t()(),n(146,"td"),e(147,"Tamanho da fonte"),t(),n(148,"td")(149,"code"),e(150,"var(--font-size-default)"),t()()(),n(151,"tr")(152,"td")(153,"code"),e(154,"--font-size-icons"),t()(),n(155,"td"),e(156,"Tamanho dos \xEDcones"),t(),n(157,"td")(158,"code"),e(159,"var(--font-size-md)"),t()()(),n(160,"tr")(161,"td")(162,"code"),e(163,"--font-weight"),t()(),n(164,"td"),e(165,"Peso da fonte"),t(),n(166,"td")(167,"code"),e(168,"var(--font-weight-bold)"),t()()(),n(169,"tr")(170,"td")(171,"strong"),e(172,"Chart (po-chart .po-chart)"),t()(),o(173,"td")(174,"td"),t(),n(175,"tr")(176,"td")(177,"code"),e(178,"--color-grid"),t()(),n(179,"td"),e(180,"Cor da linha dos gr\xE1ficos que possuem eixo"),t(),n(181,"td")(182,"code"),e(183,"var(--color-neutral-light-20)"),t()()(),n(184,"tr")(185,"td")(186,"code"),e(187,"--font-family-grid"),t()(),n(188,"td"),e(189,"Fam\xEDlia tipogr\xE1fica usada nos valores dos eixos"),t(),n(190,"td")(191,"code"),e(192,"var(--font-family-theme)"),t()()(),n(193,"tr")(194,"td")(195,"code"),e(196,"--font-size-grid"),t()(),n(197,"td"),e(198,"Tamanho da fonte usada nos valores dos eixos"),t(),n(199,"td")(200,"code"),e(201,"var(--font-size-xs)"),t()()(),n(202,"tr")(203,"td")(204,"code"),e(205,"--font-weight-grid"),t()(),n(206,"td"),e(207,"Peso da fonte usada nos valores dos eixos"),t(),n(208,"td")(209,"code"),e(210,"var(--font-weight-normal)"),t()()(),n(211,"tr")(212,"td")(213,"code"),e(214,"--color-legend"),t()(),n(215,"td"),e(216,"Cor da fonte da legenda"),t(),n(217,"td")(218,"code"),e(219,"var(--color-neutral-dark-70)"),t()()(),n(220,"tr")(221,"td")(222,"code"),e(223,"--border-radius-bar"),t()(),n(224,"td"),e(225,"Tamanho da borda nos graficos "),n(226,"code"),e(227,"Bar"),t(),e(228," e "),n(229,"code"),e(230,"Column"),t()(),n(231,"td")(232,"code"),e(233,"var(--border-radius-none)"),t()()(),n(234,"tr")(235,"td")(236,"code"),e(237,"--border-color"),t()(),n(238,"td"),e(239,"Cor da borda do gr\xE1fico nos Gr\xE1ficos "),n(240,"code"),e(241,"Donut"),t(),e(242," e "),n(243,"code"),e(244,"Pie"),t()(),n(245,"td")(246,"code"),e(247,"var(--color-neutral-light-00)"),t()()(),n(248,"tr")(249,"td")(250,"code"),e(251,"--color-hightlight-value"),t()(),n(252,"td"),e(253,"Cor do valor de destaque nos Gr\xE1ficos "),n(254,"code"),e(255,"Donut"),t(),e(256," e "),n(257,"code"),e(258,"Gauge"),t()(),n(259,"td")(260,"code"),e(261,"var(--color-neutral-dark-70)"),t()()(),n(262,"tr")(263,"td")(264,"code"),e(265,"--font-family-hightlight-value"),t()(),n(266,"td"),e(267,"Fam\xEDlia tipogr\xE1fica do valor de destaque nos Gr\xE1ficos "),n(268,"code"),e(269,"Donut"),t(),e(270," e "),n(271,"code"),e(272,"Gauge"),t()(),n(273,"td")(274,"code"),e(275,"var(--font-family-theme)"),t()()(),n(276,"tr")(277,"td")(278,"code"),e(279,"--font-weight-hightlight-value"),t()(),n(280,"td"),e(281,"Peso da fonte do valor de destaque nos Gr\xE1ficos "),n(282,"code"),e(283,"Donut"),t(),e(284," e "),n(285,"code"),e(286,"Gauge"),t()(),n(287,"td")(288,"code"),e(289,"var(--font-weight-bold)"),t()()(),n(290,"tr")(291,"td")(292,"code"),e(293,"--color-base-gauge"),t()(),n(294,"td"),e(295,"Cor da base do gr\xE1fico "),n(296,"code"),e(297,"Gauge"),t()(),n(298,"td")(299,"code"),e(300,"var(--color-neutral-light-20)"),t()()(),n(301,"tr")(302,"td")(303,"code"),e(304,"--color-gauge-pointer-color"),t()(),n(305,"td"),e(306,"Cor do ponteiro do gr\xE1fico "),n(307,"code"),e(308,"Gauge"),t()(),n(309,"td")(310,"code"),e(311,"var(--color-neutral-dark-70)"),t()()(),n(312,"tr")(313,"td")(314,"code"),e(315,"--color-chart-line-point-fill"),t()(),n(316,"td"),e(317,"Cor de dentro do c\xEDrculo dos gr\xE1ficos "),n(318,"code"),e(319,"Line"),t(),e(320," e "),n(321,"code"),e(322,"Area"),t()(),n(323,"td")(324,"code"),e(325,"var(--color-neutral-light-00)"),t()()(),n(326,"tr")(327,"td")(328,"code"),e(329,"--border-color-radar"),t()(),n(330,"td"),e(331,"Cor do eixo da grid do gr\xE1fico "),n(332,"code"),e(333,"Radar"),t()(),n(334,"td")(335,"code"),e(336,"var(--color-neutral-light-30)"),t()()(),n(337,"tr")(338,"td")(339,"code"),e(340,"--color-background-zebra"),t()(),n(341,"td"),e(342,"Cor das \xE1reas alternadas (efeito zebrado) da grid do gr\xE1fico "),n(343,"code"),e(344,"Radar"),t()(),n(345,"td")(346,"code"),e(347,"var(--color-neutral-light-10)"),t()()(),n(348,"tr")(349,"td")(350,"code"),e(351,"--color-background-line"),t()(),n(352,"td"),e(353,"Cor das \xE1reas entre as faixas zebradas da grade do "),n(354,"code"),e(355,"Radar"),t()(),n(356,"td")(357,"code"),e(358,"none"),t()()(),n(359,"tr")(360,"td")(361,"strong"),e(362,"Wrapper (.po-chart-container-gauge)"),t()(),o(363,"td")(364,"td"),t(),n(365,"tr")(366,"td")(367,"code"),e(368,"--background-color-container-gauge"),t()(),n(369,"td"),e(370,"Cor de background do container do gauge"),t(),n(371,"td")(372,"code"),e(373,"var(--color-neutral-light-00)"),t()()()()()(),n(374,"div",8)(375,"h4",9),e(376,"Seletor"),t(),n(377,"pre",10),e(378,`<po-chart
    p-categories="Array<string> | PoChartRadarOptions"
    p-custom-actions="Array<PoPopupAction>"
    p-data-label="PoChartDataLabel"
    p-height="number"
    p-literals="PoChartLiterals"
    p-options="PoChartOptions"
    p-series="Array<PoChartSerie>"
    (p-series-click)="EventEmitter"
    (p-series-hover)="EventEmitter"
    p-title="string"
    p-type="PoChartType"
    p-value-gauge-multiple="number" >
</po-chart>
`),t()(),n(379,"h4",11),e(380,"Propriedades"),t(),n(381,"table",12)(382,"tr",13)(383,"th",14),e(384,"Nome"),t(),n(385,"th",14),e(386,"Tipo"),t(),n(387,"th",14),e(388,"Padr\xE3o"),t(),n(389,"th",14),e(390,"Descri\xE7\xE3o"),t()(),n(391,"tr",15)(392,"td",16)(393,"div",17)(394,"span",18),e(395," p-categories"),o(396,"br"),t()()(),n(397,"td",19)(398,"code",20),e(399,"Array<string> "),t(),n(400,"code",21),e(401," PoChartRadarOptions"),t()(),n(402,"td",22),e(403,"-"),t(),n(404,"td",23)(405,"em")(406,"strong"),e(407,"(opcional)"),t()(),n(408,"p"),e(409,"Define os valores utilizados na constru\xE7\xE3o das categorias do gr\xE1fico."),t(),n(410,"p"),e(411,"Para gr\xE1ficos dos tipos "),n(412,"em"),e(413,"bar"),t(),e(414,", "),n(415,"em"),e(416,"area"),t(),e(417,", "),n(418,"em"),e(419,"column"),t(),e(420," e "),n(421,"em"),e(422,"line"),t(),e(423,", representa os nomes das categorias exibidas no eixo."),t(),n(424,"p"),e(425,"Para gr\xE1ficos do tipo "),n(426,"em"),e(427,"radar"),t(),e(428,`, representa a configura\xE7\xE3o dos indicadores, formato (shape), \xE1reas de divis\xE3o (splitArea)
e demais op\xE7\xF5es espec\xEDficas do gr\xE1fico `),n(429,"code"),e(430,"Radar"),t(),e(431,"."),t(),n(432,"blockquote")(433,"p"),e(434,"Caso nenhum valor seja informado, ser\xE1 utilizado um h\xEDfen como categoria correspondente para cada s\xE9rie."),t()(),n(435,"blockquote")(436,"p"),e(437,"Gr\xE1ficos do tipo bar dimensionam sua \xE1rea considerando a largura do maior texto da categoria, sendo recomend\xE1vel utilizar r\xF3tulos curtos para facilitar a leitura."),t()()()(),n(438,"tr",15)(439,"td",16)(440,"div",17)(441,"span",18),e(442," p-custom-actions"),o(443,"br"),t()()(),n(444,"td",19)(445,"code",24),e(446,"Array<PoPopupAction>"),t()(),n(447,"td",22),e(448,"-"),t(),n(449,"td",23)(450,"em")(451,"strong"),e(452,"(opcional)"),t()(),n(453,"p"),e(454,"Essa propriedade permite que o desenvolvedor adicione a\xE7\xF5es customizadas no popup do header, oferecendo mais flexibilidade e controle sobre as intera\xE7\xF5es do componente."),t()()(),n(455,"tr",15)(456,"td",16)(457,"div",17)(458,"span",18),e(459," p-data-label"),o(460,"br"),t()()(),n(461,"td",19)(462,"code",25),e(463,"PoChartDataLabel"),t()(),n(464,"td",22),e(465,"-"),t(),n(466,"td",23)(467,"em")(468,"strong"),e(469,"(opcional)"),t()(),n(470,"p"),e(471,"Permite configurar as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no gr\xE1fico."),t(),n(472,"p"),e(473,"Essa configura\xE7\xE3o possibilita fixar os valores das s\xE9ries diretamente no gr\xE1fico, alterando o comportamento visual:"),t(),n(474,"ul")(475,"li"),e(476,"Os valores das s\xE9ries permanecem vis\xEDveis, sem a necessidade de hover."),t(),n(477,"li"),e(478,"O "),n(479,"em"),e(480,"tooltip"),t(),e(481," n\xE3o ser\xE1 exibido."),t(),n(482,"li"),e(483,"Os marcadores ("),n(484,"em"),e(485,"bullets"),t(),e(486,") ter\xE3o seu estilo ajustado."),t(),n(487,"li"),e(488,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),t()(),n(489,"blockquote")(490,"p"),e(491,"Dispon\xEDvel para gr\xE1ficos do tipo "),n(492,"code"),e(493,"line"),t(),e(494," e "),n(495,"code"),e(496,"radar"),t(),e(497,"."),t()(),n(498,"h4"),e(499,"Exemplo de utiliza\xE7\xE3o:"),t(),n(500,"pre")(501,"code",26),e(502,`dataLabel: PoChartDataLabel = {
  fixed: true,
};
`),t()()()(),n(503,"tr",15)(504,"td",16)(505,"div",17)(506,"span",18),e(507," p-height"),o(508,"br"),t()()(),n(509,"td",19)(510,"code",27),e(511,"number"),t()(),n(512,"td",22)(513,"p")(514,"code"),e(515,"400"),t()()(),n(516,"td",23)(517,"em")(518,"strong"),e(519,"(opcional)"),t()(),n(520,"p"),e(521,"Define a altura do gr\xE1fico em px."),t(),n(522,"blockquote")(523,"p"),e(524,"No caso do tipo "),n(525,"code"),e(526,"Gauge"),t(),e(527,", o valor padr\xE3o \xE9 "),n(528,"code"),e(529,"300"),t(),e(530," e esse \xE9 seu valor minimo aceito. Nos outros tipos, o valor m\xEDnimo aceito nesta propriedade \xE9 200."),t()()()(),n(531,"tr",15)(532,"td",16)(533,"div",17)(534,"span",18),e(535," p-literals"),o(536,"br"),t()()(),n(537,"td",19)(538,"code",28),e(539,"PoChartLiterals"),t()(),n(540,"td",22),e(541,"-"),t(),n(542,"td",23)(543,"em")(544,"strong"),e(545,"(opcional)"),t()(),n(546,"p"),e(547,"Objeto com as literais usadas no "),n(548,"code"),e(549,"po-chart"),t(),e(550,"."),t(),n(551,"p"),e(552,"Para utilizar basta passar a literal que deseja customizar:"),t(),n(553,"pre")(554,"code"),e(555,`const customLiterals: PoChartLiterals = {
  downloadCSV: 'Obter CSV',
};
`),t()(),n(556,"p"),e(557,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),t(),n(558,"pre")(559,"code"),e(560,`<po-chart
  [p-literals]="customLiterals">
</po-chart>
`),t()(),n(561,"blockquote")(562,"p"),e(563,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),n(564,"a",29)(565,"code"),e(566,"PoI18nService"),t()(),e(567," ou do browser."),t()()()(),n(568,"tr",15)(569,"td",16)(570,"div",17)(571,"span",18),e(572," p-options"),o(573,"br"),t()()(),n(574,"td",19)(575,"code",30),e(576,"PoChartOptions"),t()(),n(577,"td",22),e(578,"-"),t(),n(579,"td",23)(580,"em")(581,"strong"),e(582,"(opcional)"),t()(),n(583,"p"),e(584,"Objeto com as configura\xE7\xF5es usadas no "),n(585,"code"),e(586,"po-chart"),t(),e(587,"."),t(),n(588,"p"),e(589,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),n(590,"em"),e(591,"axis"),t(),e(592,") para os gr\xE1ficos dos tipos "),n(593,"code"),e(594,"area"),t(),e(595,", "),n(596,"code"),e(597,"line"),t(),e(598,", "),n(599,"code"),e(600,"column"),t(),e(601,", "),n(602,"code"),e(603,"bar"),t(),e(604," e "),n(605,"code"),e(606,"radar"),t(),e(607," da seguinte forma:"),t(),n(608,"pre")(609,"code"),e(610,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};
`),t()()()(),n(611,"tr",15)(612,"td",16)(613,"div",17)(614,"span",18),e(615," p-series"),o(616,"br"),t()()(),n(617,"td",19)(618,"code",31),e(619,"Array<PoChartSerie>"),t()(),n(620,"td",22),e(621,"-"),t(),n(622,"td",23)(623,"p"),e(624,"Define os elementos do gr\xE1fico que ser\xE3o criados dinamicamente."),t()()(),n(625,"tr",15)(626,"td",16)(627,"div",32)(628,"span",33),e(629," (p-series-click)"),o(630,"br"),t()()(),n(631,"td",19)(632,"code",34),e(633,"EventEmitter"),t()(),n(634,"td",22),e(635,"-"),t(),n(636,"td",23)(637,"em")(638,"strong"),e(639,"(opcional)"),t()(),n(640,"p"),e(641,"Evento executado quando o usu\xE1rio clicar sobre um elemento do gr\xE1fico."),t(),n(642,"p"),e(643,"O evento emitir\xE1 o seguinte par\xE2metro:"),t(),n(644,"ul")(645,"li")(646,"em"),e(647,"donut"),t(),e(648," e "),n(649,"em"),e(650,"pie"),t(),e(651,": um objeto contendo a categoria e valor da s\xE9rie."),t(),n(652,"li")(653,"em"),e(654,"radar"),t(),e(655,": um objeto contendo o nome da s\xE9rie e os valores."),t(),n(656,"li")(657,"em"),e(658,"area"),t(),e(659,", "),n(660,"em"),e(661,"line"),t(),e(662,", "),n(663,"em"),e(664,"column"),t(),e(665," e "),n(666,"em"),e(667,"bar"),t(),e(668,": um objeto contendo o nome da s\xE9rie, valor e categoria do eixo do gr\xE1fico."),t()()()(),n(669,"tr",15)(670,"td",16)(671,"div",32)(672,"span",33),e(673," (p-series-hover)"),o(674,"br"),t()()(),n(675,"td",19)(676,"code",34),e(677,"EventEmitter"),t()(),n(678,"td",22),e(679,"-"),t(),n(680,"td",23)(681,"em")(682,"strong"),e(683,"(opcional)"),t()(),n(684,"p"),e(685,"Evento executado quando o usu\xE1rio passar o "),n(686,"em"),e(687,"mouse"),t(),e(688," sobre um elemento do gr\xE1fico."),t(),n(689,"p"),e(690,"O evento emitir\xE1 o seguinte par\xE2metro de acordo com o tipo de gr\xE1fico:"),t(),n(691,"ul")(692,"li")(693,"em"),e(694,"donut"),t(),e(695," e "),n(696,"em"),e(697,"pie"),t(),e(698,": um objeto contendo a categoria e valor da s\xE9rie."),t(),n(699,"li")(700,"em"),e(701,"radar"),t(),e(702,": um objeto contendo o nome da s\xE9rie e os valores."),t(),n(703,"li")(704,"em"),e(705,"area"),t(),e(706,", "),n(707,"em"),e(708,"line"),t(),e(709,", "),n(710,"em"),e(711,"column"),t(),e(712," e "),n(713,"em"),e(714,"bar"),t(),e(715,": um objeto contendo a categoria, valor da s\xE9rie e categoria do eixo do gr\xE1fico."),t()()()(),n(716,"tr",15)(717,"td",16)(718,"div",17)(719,"span",18),e(720," p-title"),o(721,"br"),t()()(),n(722,"td",19)(723,"code",35),e(724,"string"),t()(),n(725,"td",22),e(726,"-"),t(),n(727,"td",23)(728,"em")(729,"strong"),e(730,"(opcional)"),t()(),n(731,"p"),e(732,"Define o t\xEDtulo do gr\xE1fico."),t()()(),n(733,"tr",15)(734,"td",16)(735,"div",17)(736,"span",18),e(737," p-type"),o(738,"br"),t()()(),n(739,"td",19)(740,"code",36),e(741,"PoChartType"),t()(),n(742,"td",22),e(743,"-"),t(),n(744,"td",23)(745,"em")(746,"strong"),e(747,"(opcional)"),t()(),n(748,"p"),e(749,"Define o tipo de gr\xE1fico."),t(),n(750,"p"),e(751,"\xC9 poss\xEDvel tamb\xE9m combinar gr\xE1ficos dos tipos linha e coluna. Para isso, opte pela declara\xE7\xE3o de "),n(752,"code"),e(753,"type"),t(),e(754," conforme a interface "),n(755,"code"),e(756,"PoChartSerie"),t(),e(757,"."),t(),n(758,"blockquote")(759,"p"),e(760,"Note que, se houver declara\xE7\xE3o de tipo de gr\xE1fico tanto em "),n(761,"code"),e(762,"p-type"),t(),e(763," quanto em "),n(764,"code"),e(765,"PochartSerie.type"),t(),e(766,", o valor "),n(767,"code"),e(768,"{ type }"),t(),e(769," da primeira s\xE9rie anular\xE1 o valor definido em "),n(770,"code"),e(771,"p-type"),t(),e(772,"."),t()(),n(773,"p"),e(774,"Se n\xE3o passado valor, o padr\xE3o ser\xE1 relativo \xE0 primeira s\xE9rie passada em "),n(775,"code"),e(776,"p-series"),t(),e(777,":"),t(),n(778,"ul")(779,"li"),e(780,"Se "),n(781,"code"),e(782,"p-series = [{ data: [1,2,3] }]"),t(),e(783,": ser\xE1 "),n(784,"code"),e(785,"PoChartType.Column"),t(),e(786,"."),t(),n(787,"li"),e(788,"Se "),n(789,"code"),e(790,"p-series = [{ data: 1 }]"),t(),e(791,": ser\xE1 "),n(792,"code"),e(793,"PoChartType.Pie"),t(),e(794,"."),t()(),n(795,"blockquote")(796,"p"),e(797,"Veja os valores v\xE1lidos no "),n(798,"em"),e(799,"enum"),t(),n(800,"code"),e(801,"PoChartType"),t(),e(802,"."),t()()()(),n(803,"tr",15)(804,"td",16)(805,"div",17)(806,"span",18),e(807," p-value-gauge-multiple"),o(808,"br"),t()()(),n(809,"td",19)(810,"code",27),e(811,"number"),t()(),n(812,"td",22),e(813,"-"),t(),n(814,"td",23)(815,"em")(816,"strong"),e(817,"(opcional)"),t()(),n(818,"p"),e(819,"Define o valor do gr\xE1fico do tipo "),n(820,"code"),e(821,"Gauge"),t(),e(822," quando utliza as propriedades "),n(823,"code"),e(824,"From"),t(),n(825,"code"),e(826,"To"),t(),e(827,"."),t()()()(),n(828,"h3"),e(829,"Interfaces"),t(),n(830,"h4",37)(831,"code",5),e(832,"PoChartAxisOptions"),t()(),n(833,"div",2)(834,"p")(835,"em"),e(836,"Interface"),t(),e(837," que define os eixos do grid."),t()(),n(838,"h4",11),e(839,"Propriedades"),t(),n(840,"table",12)(841,"tr",13)(842,"th",14),e(843,"Nome"),t(),n(844,"th",14),e(845,"Tipo"),t(),n(846,"th",14),e(847,"Descri\xE7\xE3o"),t()(),n(848,"tr",15)(849,"td",16)(850,"div",17)(851,"span",18),e(852," gridLines"),o(853,"br"),t()()(),n(854,"td",19)(855,"code",27),e(856,"number"),t()(),n(857,"td",23)(858,"em")(859,"strong"),e(860,"(opcional)"),t()(),n(861,"p"),e(862,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),n(863,"code"),e(864,"Area"),t(),e(865,", "),n(866,"code"),e(867,"Line"),t(),e(868," e "),n(869,"code"),e(870,"Column"),t(),e(871,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),n(872,"code"),e(873,"Bar"),t(),e(874,", tratar\xE1 as linhas verticais (eixo Y)."),t(),n(875,"p"),e(876,"A propriedade cont\xE9m as seguintes diretrizes para seu correto funcionamento:"),t(),n(877,"ul")(878,"li"),e(879,"Quantidade padr\xE3o de linhas: '5';"),t(),n(880,"li"),e(881,"Quantidade m\xEDnima permitida: '2';"),t()()()(),n(882,"tr",15)(883,"td",16)(884,"div",17)(885,"span",18),e(886," labelType"),o(887,"br"),t()()(),n(888,"td",19)(889,"code",38),e(890,"PoChartLabelFormat"),t()(),n(891,"td",23)(892,"em")(893,"strong"),e(894,"(opcional)"),t()(),n(895,"p"),e(896,"Define o tipo do label e a formata\xE7\xE3o exibida no eixo de valor."),t()()(),n(897,"tr",15)(898,"td",16)(899,"div",17)(900,"span",18),e(901," maxRange"),o(902,"br"),t()()(),n(903,"td",19)(904,"code",27),e(905,"number"),t()(),n(906,"td",23)(907,"em")(908,"strong"),e(909,"(opcional)"),t()(),n(910,"p"),e(911,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.`),t(),n(912,"blockquote")(913,"p"),e(914,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),t()()()(),n(915,"tr",15)(916,"td",16)(917,"div",17)(918,"span",18),e(919," minRange"),o(920,"br"),t()()(),n(921,"td",19)(922,"code",27),e(923,"number"),t()(),n(924,"td",23)(925,"em")(926,"strong"),e(927,"(opcional)"),t()(),n(928,"p"),e(929,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.`),t(),n(930,"blockquote")(931,"p"),e(932,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),t()()()(),n(933,"tr",15)(934,"td",16)(935,"div",17)(936,"span",18),e(937," paddingBottom"),o(938,"br"),t()()(),n(939,"td",19)(940,"code",27),e(941,"number"),t()(),n(942,"td",23)(943,"em")(944,"strong"),e(945,"(opcional)"),t()(),n(946,"p"),e(947,"Permite aumentar ou diminuir o espa\xE7o inferior do gr\xE1fico."),t()()(),n(948,"tr",15)(949,"td",16)(950,"div",17)(951,"span",18),e(952," paddingLeft"),o(953,"br"),t()()(),n(954,"td",19)(955,"code",27),e(956,"number"),t()(),n(957,"td",23)(958,"em")(959,"strong"),e(960,"(opcional)"),t()(),n(961,"p"),e(962,"Permite aumentar ou diminuir o espa\xE7o esquerdo do gr\xE1fico."),t()()(),n(963,"tr",15)(964,"td",16)(965,"div",17)(966,"span",18),e(967," paddingRight"),o(968,"br"),t()()(),n(969,"td",19)(970,"code",27),e(971,"number"),t()(),n(972,"td",23)(973,"em")(974,"strong"),e(975,"(opcional)"),t()(),n(976,"p"),e(977,"Permite aumentar ou diminuir o espa\xE7o direito do gr\xE1fico."),t()()(),n(978,"tr",15)(979,"td",16)(980,"div",17)(981,"span",18),e(982," rotateLegend"),o(983,"br"),t()()(),n(984,"td",19)(985,"code",27),e(986,"number"),t()(),n(987,"td",23)(988,"em")(989,"strong"),e(990,"(opcional)"),t()(),n(991,"p"),e(992,`Define o \xE2ngulo de rota\xE7\xE3o da legenda do gr\xE1fico.
Aceita valores entre -90 e 90 graus, onde:`),t(),n(993,"ul")(994,"li"),e(995,"Valores negativos giram a legenda para a esquerda."),t(),n(996,"li"),e(997,"Valores positivos giram a legenda para a direita."),t()(),n(998,"p"),e(999,"Se n\xE3o for definido, a legenda ser\xE1 exibida sem rota\xE7\xE3o."),t()()(),n(1e3,"tr",15)(1001,"td",16)(1002,"div",17)(1003,"span",18),e(1004," showAxisDetails"),o(1005,"br"),t()()(),n(1006,"td",19)(1007,"code",39),e(1008,"boolean"),t()(),n(1009,"td",23)(1010,"em")(1011,"strong"),e(1012,"(opcional)"),t()(),n(1013,"p"),e(1014,"Exibe a linha de detalhes que acompanha o mouse"),t()()(),n(1015,"tr",15)(1016,"td",16)(1017,"div",17)(1018,"span",18),e(1019," showXAxis"),o(1020,"br"),t()()(),n(1021,"td",19)(1022,"code",39),e(1023,"boolean"),t()(),n(1024,"td",23)(1025,"em")(1026,"strong"),e(1027,"(opcional)"),t()(),n(1028,"p"),e(1029,"Exibe a linha do eixo X"),t()()(),n(1030,"tr",15)(1031,"td",16)(1032,"div",17)(1033,"span",18),e(1034," showYAxis"),o(1035,"br"),t()()(),n(1036,"td",19)(1037,"code",39),e(1038,"boolean"),t()(),n(1039,"td",23)(1040,"em")(1041,"strong"),e(1042,"(opcional)"),t()(),n(1043,"p"),e(1044,"Exibe a linha do eixo Y"),t()()()(),n(1045,"h4",37)(1046,"code",5),e(1047,"PoChartHeaderOptions"),t()(),n(1048,"div",2)(1049,"p")(1050,"em"),e(1051,"Interface"),t(),e(1052," para configura\xE7\xE3o das a\xE7\xF5es dispon\xEDveis no cabe\xE7alho."),t()(),n(1053,"h4",11),e(1054,"Propriedades"),t(),n(1055,"table",12)(1056,"tr",13)(1057,"th",14),e(1058,"Nome"),t(),n(1059,"th",14),e(1060,"Tipo"),t(),n(1061,"th",14),e(1062,"Descri\xE7\xE3o"),t()(),n(1063,"tr",15)(1064,"td",16)(1065,"div",17)(1066,"span",18),e(1067," hideExpand"),o(1068,"br"),t()()(),n(1069,"td",19)(1070,"code",39),e(1071,"boolean"),t()(),n(1072,"td",23)(1073,"em")(1074,"strong"),e(1075,"(opcional)"),t()(),n(1076,"p"),e(1077,"Define se o bot\xE3o respons\xE1vel por expandir o gr\xE1fico deve ser ocultado."),t()()(),n(1078,"tr",15)(1079,"td",16)(1080,"div",17)(1081,"span",18),e(1082," hideExportCsv"),o(1083,"br"),t()()(),n(1084,"td",19)(1085,"code",39),e(1086,"boolean"),t()(),n(1087,"td",23)(1088,"em")(1089,"strong"),e(1090,"(opcional)"),t()(),n(1091,"p"),e(1092,"Define se a op\xE7\xE3o de exporta\xE7\xE3o do gr\xE1fico em formato CSV deve ser ocultada."),t()()(),n(1093,"tr",15)(1094,"td",16)(1095,"div",17)(1096,"span",18),e(1097," hideExportImage"),o(1098,"br"),t()()(),n(1099,"td",19)(1100,"code",39),e(1101,"boolean"),t()(),n(1102,"td",23)(1103,"em")(1104,"strong"),e(1105,"(opcional)"),t()(),n(1106,"p"),e(1107,"Define se a op\xE7\xE3o de exporta\xE7\xE3o do gr\xE1fico nos formatos JPG e PNG deve ser ocultada."),t()()(),n(1108,"tr",15)(1109,"td",16)(1110,"div",17)(1111,"span",18),e(1112," hideTableDetails"),o(1113,"br"),t()()(),n(1114,"td",19)(1115,"code",39),e(1116,"boolean"),t()(),n(1117,"td",23)(1118,"em")(1119,"strong"),e(1120,"(opcional)"),t()(),n(1121,"p"),e(1122,"Define se o bot\xE3o respons\xE1vel por exibir os detalhes do gr\xE1fico em formato de tabela deve ser ocultado."),t()()()(),n(1123,"h4",37)(1124,"code",5),e(1125,"PoChartIndicatorOptions"),t()(),n(1126,"div",2)(1127,"p"),e(1128,"Interface para configura\xE7\xF5es dos indicadores do gr\xE1fico "),n(1129,"code"),e(1130,"radar"),t(),e(1131,"."),t()(),n(1132,"h4",11),e(1133,"Propriedades"),t(),n(1134,"table",12)(1135,"tr",13)(1136,"th",14),e(1137,"Nome"),t(),n(1138,"th",14),e(1139,"Tipo"),t(),n(1140,"th",14),e(1141,"Descri\xE7\xE3o"),t()(),n(1142,"tr",15)(1143,"td",16)(1144,"div",17)(1145,"span",18),e(1146," color"),o(1147,"br"),t()()(),n(1148,"td",19)(1149,"code",35),e(1150,"string"),t()(),n(1151,"td",23)(1152,"em")(1153,"strong"),e(1154,"(opcional)"),t()(),n(1155,"p"),e(1156,`Cor do texto do indicator.
Recomendamos avaliar o contraste da cor definida para garantir melhor acessibilidade.`),t(),n(1157,"blockquote")(1158,"p"),e(1159,"Nome da cor, hexadecimal ou RGB."),t()()()(),n(1160,"tr",15)(1161,"td",16)(1162,"div",17)(1163,"span",18),e(1164," max"),o(1165,"br"),t()()(),n(1166,"td",19)(1167,"code",27),e(1168,"number"),t()(),n(1169,"td",23)(1170,"em")(1171,"strong"),e(1172,"(opcional)"),t()(),n(1173,"p"),e(1174,"Valor m\xE1ximo do indicator."),t(),n(1175,"p"),e(1176,"A propriedade "),n(1177,"code"),e(1178,"max"),t(),e(1179,` n\xE3o impede que a s\xE9rie contenha valores superiores ao m\xE1ximo definido.
Caso isso ocorra, os valores poder\xE3o extrapolar os limites do gr\xE1fico.`),t()()(),n(1180,"tr",15)(1181,"td",16)(1182,"div",17)(1183,"span",18),e(1184," min"),o(1185,"br"),t()()(),n(1186,"td",19)(1187,"code",27),e(1188,"number"),t()(),n(1189,"td",23)(1190,"em")(1191,"strong"),e(1192,"(opcional)"),t()(),n(1193,"p"),e(1194,"Valor m\xEDnimo do indicator, com valor padr\xE3o de 0."),t(),n(1195,"p"),e(1196,"A propriedade "),n(1197,"code"),e(1198,"min"),t(),e(1199,` n\xE3o impede que a s\xE9rie contenha valores inferiores ao m\xEDnimo definido.
Caso isso ocorra, os valores ser\xE3o apresentados ao centro do gr\xE1fico.`),t()()(),n(1200,"tr",15)(1201,"td",16)(1202,"div",17)(1203,"span",18),e(1204," name"),o(1205,"br"),t()()(),n(1206,"td",19)(1207,"code",35),e(1208,"string"),t()(),n(1209,"td",23)(1210,"em")(1211,"strong"),e(1212,"(opcional)"),t()(),n(1213,"p"),e(1214,"Nome do indicator."),t()()()(),n(1215,"h4",37)(1216,"code",5),e(1217,"PoChartLiterals"),t()(),n(1218,"div",2)(1219,"p"),e(1220,"Interface para defini\xE7\xE3o dos literais usadas no "),n(1221,"code"),e(1222,"po-chart"),t(),e(1223,"."),t()(),n(1224,"h4",11),e(1225,"Propriedades"),t(),n(1226,"table",12)(1227,"tr",13)(1228,"th",14),e(1229,"Nome"),t(),n(1230,"th",14),e(1231,"Tipo"),t(),n(1232,"th",14),e(1233,"Descri\xE7\xE3o"),t()(),n(1234,"tr",15)(1235,"td",16)(1236,"div",17)(1237,"span",18),e(1238," category"),o(1239,"br"),t()()(),n(1240,"td",19)(1241,"code",35),e(1242,"string"),t()(),n(1243,"td",23)(1244,"em")(1245,"strong"),e(1246,"(opcional)"),t()(),n(1247,"p"),e(1248,"Texto da primeira coluna da tabela no gr\xE1fico do tipo "),n(1249,"code"),e(1250,"Bar"),t(),e(1251,"."),t()()(),n(1252,"tr",15)(1253,"td",16)(1254,"div",17)(1255,"span",18),e(1256," downloadCSV"),o(1257,"br"),t()()(),n(1258,"td",19)(1259,"code",35),e(1260,"string"),t()(),n(1261,"td",23)(1262,"em")(1263,"strong"),e(1264,"(opcional)"),t()(),n(1265,"p"),e(1266,"Texto exibido para a a\xE7\xE3o de download de dados em formato CSV."),t()()(),n(1267,"tr",15)(1268,"td",16)(1269,"div",17)(1270,"span",18),e(1271," exportCSV"),o(1272,"br"),t()()(),n(1273,"td",19)(1274,"code",35),e(1275,"string"),t()(),n(1276,"td",23)(1277,"em")(1278,"strong"),e(1279,"(opcional)"),t()(),n(1280,"p"),e(1281,"Texto do bot\xE3o para exportar o gr\xE1fico em CSV."),t()()(),n(1282,"tr",15)(1283,"td",16)(1284,"div",17)(1285,"span",18),e(1286," exportJPG"),o(1287,"br"),t()()(),n(1288,"td",19)(1289,"code",35),e(1290,"string"),t()(),n(1291,"td",23)(1292,"em")(1293,"strong"),e(1294,"(opcional)"),t()(),n(1295,"p"),e(1296,"Texto do bot\xE3o para exportar o gr\xE1fico como imagem JPG."),t()()(),n(1297,"tr",15)(1298,"td",16)(1299,"div",17)(1300,"span",18),e(1301," exportPNG"),o(1302,"br"),t()()(),n(1303,"td",19)(1304,"code",35),e(1305,"string"),t()(),n(1306,"td",23)(1307,"em")(1308,"strong"),e(1309,"(opcional)"),t()(),n(1310,"p"),e(1311,"Texto do bot\xE3o para exportar o gr\xE1fico como imagem PNG."),t()()(),n(1312,"tr",15)(1313,"td",16)(1314,"div",17)(1315,"span",18),e(1316," item"),o(1317,"br"),t()()(),n(1318,"td",19)(1319,"code",35),e(1320,"string"),t()(),n(1321,"td",23)(1322,"em")(1323,"strong"),e(1324,"(opcional)"),t()(),n(1325,"p"),e(1326,"Texto dos t\xEDtulos das colunas "),n(1327,"code"),e(1328,"Gauge"),t(),e(1329," e n\xE3o possui label."),t()()(),n(1330,"tr",15)(1331,"td",16)(1332,"div",17)(1333,"span",18),e(1334," serie"),o(1335,"br"),t()()(),n(1336,"td",19)(1337,"code",35),e(1338,"string"),t()(),n(1339,"td",23)(1340,"em")(1341,"strong"),e(1342,"(opcional)"),t()(),n(1343,"p"),e(1344,"Texto da primeira coluna da tabela em todos os gr\xE1ficos com exce\xE7\xE3o do "),n(1345,"code"),e(1346,"Bar"),t(),e(1347," e "),n(1348,"code"),e(1349,"Gauge"),t(),e(1350,"."),t()()(),n(1351,"tr",15)(1352,"td",16)(1353,"div",17)(1354,"span",18),e(1355," value"),o(1356,"br"),t()()(),n(1357,"td",19)(1358,"code",35),e(1359,"string"),t()(),n(1360,"td",23)(1361,"em")(1362,"strong"),e(1363,"(opcional)"),t()(),n(1364,"p"),e(1365,"Texto da primeira coluna da tabela quando o gr\xE1fico \xE9 do tipo "),n(1366,"code"),e(1367,"Gauge"),t(),e(1368,"."),t()()()(),n(1369,"h4",37)(1370,"code",5),e(1371,"PoChartOptions"),t()(),n(1372,"div",2)(1373,"p")(1374,"em"),e(1375,"Interface"),t(),e(1376," para configura\xE7\xF5es dos elementos do gr\xE1fico."),t()(),n(1377,"h4",11),e(1378,"Propriedades"),t(),n(1379,"table",12)(1380,"tr",13)(1381,"th",14),e(1382,"Nome"),t(),n(1383,"th",14),e(1384,"Tipo"),t(),n(1385,"th",14),e(1386,"Descri\xE7\xE3o"),t()(),n(1387,"tr",15)(1388,"td",16)(1389,"div",17)(1390,"span",18),e(1391," areaStyle"),o(1392,"br"),t()()(),n(1393,"td",19)(1394,"code",39),e(1395,"boolean"),t()(),n(1396,"td",23)(1397,"em")(1398,"strong"),e(1399,"(opcional)"),t()(),n(1400,"p"),e(1401,"Define se as s\xE9ries ter\xE3o sua \xE1rea preenchida."),t(),n(1402,"blockquote")(1403,"p"),e(1404,"Esta propriedade tem preced\xEAncia sobre a defini\xE7\xE3o de "),n(1405,"code"),e(1406,"areaStyle"),t(),e(1407," em cada s\xE9rie, "),n(1408,"code"),e(1409,"fillpoints"),t(),e(1410," n\xE3o funciona quando "),n(1411,"code"),e(1412,"areaStyle"),t(),e(1413," est\xE1 definido como "),n(1414,"code"),e(1415,"true"),t(),e(1416,"."),t()()()(),n(1417,"tr",15)(1418,"td",16)(1419,"div",17)(1420,"span",18),e(1421," axis"),o(1422,"br"),t()()(),n(1423,"td",19)(1424,"code",40),e(1425,"PoChartAxisOptions"),t()(),n(1426,"td",23)(1427,"em")(1428,"strong"),e(1429,"(opcional)"),t()(),n(1430,"p"),e(1431,"Define um objeto do tipo "),n(1432,"code"),e(1433,"PoChartAxisOptions"),t(),e(1434," para configura\xE7\xE3o dos eixos."),t()()(),n(1435,"tr",15)(1436,"td",16)(1437,"div",17)(1438,"span",18),e(1439," borderRadius"),o(1440,"br"),t()()(),n(1441,"td",19)(1442,"code",27),e(1443,"number"),t()(),n(1444,"td",23)(1445,"em")(1446,"strong"),e(1447,"(opcional)"),t()(),n(1448,"p"),e(1449,"Define borda entre os itens do gr\xE1fico. V\xE1lido para os gr\xE1ficos "),n(1450,"code"),e(1451,"Donut"),t(),e(1452,", "),n(1453,"code"),e(1454,"Pie"),t(),e(1455,"."),t(),n(1456,"blockquote")(1457,"p"),e(1458,"Valores v\xE1lidos entre 0 e 100,"),t()()()(),n(1459,"tr",15)(1460,"td",16)(1461,"div",17)(1462,"span",18),e(1463," bottomDataZoom"),o(1464,"br"),t()()(),n(1465,"td",19)(1466,"code",39),e(1467,"boolean "),t(),n(1468,"code",27),e(1469," number"),t()(),n(1470,"td",23)(1471,"em")(1472,"strong"),e(1473,"(opcional)"),t()(),n(1474,"p"),e(1475,"Define a dist\xE2ncia inferior do componente DataZoom."),t(),n(1476,"p"),e(1477,"Esta propriedade aceita os seguintes valores:"),t(),n(1478,"ul")(1479,"li")(1480,"p")(1481,"code"),e(1482,"false"),t(),e(1483," (padr\xE3o): n\xE3o aplica ajustes."),t()(),n(1484,"li")(1485,"p")(1486,"code"),e(1487,"true"),t(),e(1488,": aplica um valor autom\xE1tico com base no posicionamento da legenda:"),t(),n(1489,"ul")(1490,"li")(1491,"code"),e(1492,"8"),t(),e(1493," pixels quando o DataZoom estiver habilitado e n\xE3o houver legenda, ou quando a legenda estiver posicionada no topo."),t(),n(1494,"li")(1495,"code"),e(1496,"32"),t(),e(1497," pixels quando o DataZoom estiver habilitado e a legenda estiver posicionada na parte inferior."),t()()(),n(1498,"li")(1499,"p")(1500,"code"),e(1501,"number"),t(),e(1502,": aplica o valor num\xE9rico informado como dist\xE2ncia inferior. Este valor tem prioridade sobre a configura\xE7\xE3o booleana."),t()()(),n(1503,"blockquote")(1504,"p"),e(1505,"Esta configura\xE7\xE3o \xE9 considerada apenas quando o DataZoom estiver habilitado ("),n(1506,"code"),e(1507,"dataZoom: true"),t(),e(1508,")."),t()()()(),n(1509,"tr",15)(1510,"td",16)(1511,"div",17)(1512,"span",18),e(1513," dataZoom"),o(1514,"br"),t()()(),n(1515,"td",19)(1516,"code",39),e(1517,"boolean"),t()(),n(1518,"td",23)(1519,"em")(1520,"strong"),e(1521,"(opcional)"),t()(),n(1522,"p"),e(1523,"Permite aplicar zoom ao gr\xE1fico com o scroll do mouse;"),t()()(),n(1524,"tr",15)(1525,"td",16)(1526,"div",17)(1527,"span",18),e(1528," descriptionChart"),o(1529,"br"),t()()(),n(1530,"td",19)(1531,"code",35),e(1532,"string"),t()(),n(1533,"td",23)(1534,"em")(1535,"strong"),e(1536,"(opcional)"),t()(),n(1537,"p"),e(1538,"Define a descri\xE7\xE3o do gr\xE1fico exibido acima do gr\xE1fico."),t()()(),n(1539,"tr",15)(1540,"td",16)(1541,"div",17)(1542,"span",18),e(1543," fillPoints"),o(1544,"br"),t()()(),n(1545,"td",19)(1546,"code",39),e(1547,"boolean"),t()(),n(1548,"td",23)(1549,"em")(1550,"strong"),e(1551,"(opcional)"),t()(),n(1552,"p"),e(1553,`Define se os pontos do gr\xE1fico ser\xE3o preenchidos.
Quando true, os pontos s\xE3o totalmente coloridos. Quando false, apenas a borda dos pontos ser\xE1 exibida, mantendo o interior transparente.`),t(),n(1554,"blockquote")(1555,"p"),e(1556,"Esta propriedade \xE9 utiliz\xE1vel para os gr\xE1ficos dos tipos "),n(1557,"code"),e(1558,"Area"),t(),e(1559,", "),n(1560,"code"),e(1561,"Line"),t(),e(1562," e "),n(1563,"code"),e(1564,"Radar"),t(),e(1565,`.
Para o tipo `),n(1566,"code"),e(1567,"Radar"),t(),e(1568,", o valor padr\xE3o \xE9 "),n(1569,"code"),e(1570,"true"),t(),e(1571,"."),t()()()(),n(1572,"tr",15)(1573,"td",16)(1574,"div",17)(1575,"span",18),e(1576," firstColumnName"),o(1577,"br"),t()()(),n(1578,"td",19)(1579,"code",35),e(1580,"string"),t()(),n(1581,"td",23)(1582,"em")(1583,"strong"),e(1584,"(opcional)"),t()(),n(1585,"p"),e(1586,"Valor que permite customizar o nome da "),n(1587,"code"),e(1588,"TH"),t(),e(1589," da primeira coluna da tabela descritiva."),t()()(),n(1590,"tr",15)(1591,"td",16)(1592,"div",17)(1593,"span",18),e(1594," header"),o(1595,"br"),t()()(),n(1596,"td",19)(1597,"code",41),e(1598,"PoChartHeaderOptions"),t()(),n(1599,"td",23)(1600,"em")(1601,"strong"),e(1602,"(opcional)"),t()(),n(1603,"p"),e(1604,"Define um objeto do tipo "),n(1605,"code"),e(1606,"PoChartHeaderOptions"),t(),e(1607," para configurar a exibi\xE7\xE3o de bot\xF5es no cabe\xE7alho do gr\xE1fico."),t()()(),n(1608,"tr",15)(1609,"td",16)(1610,"div",17)(1611,"span",18),e(1612," innerRadius"),o(1613,"br"),t()()(),n(1614,"td",19)(1615,"code",27),e(1616,"number"),t()(),n(1617,"td",23)(1618,"em")(1619,"strong"),e(1620,"(opcional)"),t()(),n(1621,"p"),e(1622,"Define o di\xE2metro, em valor percentual entre "),n(1623,"code"),e(1624,"0"),t(),e(1625," e "),n(1626,"code"),e(1627,"100"),t(),e(1628,", da \xE1rea central para gr\xE1ficos do tipo "),n(1629,"code"),e(1630,"donut"),t(),e(1631,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),n(1632,"code"),e(1633,"40px"),t(),e(1634,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),t()()(),n(1635,"tr",15)(1636,"td",16)(1637,"div",17)(1638,"span",18),e(1639," legend"),o(1640,"br"),t()()(),n(1641,"td",19)(1642,"code",39),e(1643,"boolean"),t()(),n(1644,"td",23)(1645,"em")(1646,"strong"),e(1647,"(opcional)"),t()(),n(1648,"p"),e(1649,"Define a exibi\xE7\xE3o da legenda do gr\xE1fico. Valor padr\xE3o \xE9 "),n(1650,"code"),e(1651,"true"),t()()()(),n(1652,"tr",15)(1653,"td",16)(1654,"div",17)(1655,"span",18),e(1656," legendPosition"),o(1657,"br"),t()()(),n(1658,"td",19)(1659,"code",42),e(1660,"'left' "),t(),n(1661,"code",43),e(1662," 'center' "),t(),n(1663,"code",44),e(1664," 'right'"),t()(),n(1665,"td",23)(1666,"em")(1667,"strong"),e(1668,"(opcional)"),t()(),n(1669,"p"),e(1670,"Define o alinhamento horizontal da legenda."),t(),n(1671,"blockquote")(1672,"p"),e(1673,"Propriedade inv\xE1lida para o gr\xE1fico do tipo "),n(1674,"code"),e(1675,"Gauge"),t(),e(1676,"."),t()()()(),n(1677,"tr",15)(1678,"td",16)(1679,"div",17)(1680,"span",18),e(1681," legendVerticalPosition"),o(1682,"br"),t()()(),n(1683,"td",19)(1684,"code",45),e(1685,"'top' "),t(),n(1686,"code",46),e(1687," 'bottom'"),t()(),n(1688,"td",23)(1689,"em")(1690,"strong"),e(1691,"(opcional)"),t()(),n(1692,"p"),e(1693,"Define a posi\xE7\xE3o vertical da legenda no gr\xE1fico."),t(),n(1694,"blockquote")(1695,"p"),e(1696,"Quando utilizada com o valor "),n(1697,"code"),e(1698,"top"),t(),e(1699,", recomenda-se configurar tamb\xE9m a propriedade "),n(1700,"code"),e(1701,"bottomDataZoom"),t(),e(1702," caso o "),n(1703,"code"),e(1704,"dataZoom"),t(),e(1705,` esteja habilitado, para evitar sobreposi\xE7\xE3o entre os elementos.
Propriedade inv\xE1lida para o gr\xE1fico do tipo `),n(1706,"code"),e(1707,"Gauge"),t(),e(1708,"."),t()()()(),n(1709,"tr",15)(1710,"td",16)(1711,"div",17)(1712,"span",18),e(1713," pointer"),o(1714,"br"),t()()(),n(1715,"td",19)(1716,"code",39),e(1717,"boolean"),t()(),n(1718,"td",23)(1719,"em")(1720,"strong"),e(1721,"(opcional)"),t()(),n(1722,"p"),e(1723,"Define a exibi\xE7\xE3o do ponteiro."),t(),n(1724,"blockquote")(1725,"p"),e(1726,"V\xE1lido para gr\xE1fico do tipo "),n(1727,"code"),e(1728,"Gauge"),t(),e(1729,"."),t()()()(),n(1730,"tr",15)(1731,"td",16)(1732,"div",17)(1733,"span",18),e(1734," rendererOption"),o(1735,"br"),t()()(),n(1736,"td",19)(1737,"code",47),e(1738,"'canvas' "),t(),n(1739,"code",48),e(1740," 'svg'"),t()(),n(1741,"td",23)(1742,"em")(1743,"strong"),e(1744,"(opcional)"),t()(),n(1745,"p"),e(1746,"Define como o gr\xE1fico ser\xE1 renderizado."),t(),n(1747,"blockquote")(1748,"p"),e(1749,"Recomenda-se n\xE3o modificar o valor da propriedade "),n(1750,"code"),e(1751,"rendererOption"),t(),e(1752," ap\xF3s a inicializa\xE7\xE3o da aplica\xE7\xE3o, uma vez que tal altera\xE7\xE3o pode ocasionar comportamentos inconsistentes na renderiza\xE7\xE3o do gr\xE1fico."),t()()()(),n(1753,"tr",15)(1754,"td",16)(1755,"div",17)(1756,"span",18),e(1757," roseType"),o(1758,"br"),t()()(),n(1759,"td",19)(1760,"code",39),e(1761,"boolean"),t()(),n(1762,"td",23)(1763,"em")(1764,"strong"),e(1765,"(opcional)"),t()(),n(1766,"p"),e(1767,"Transforma os gr\xE1ficos do tipo "),n(1768,"code"),e(1769,"Donut"),t(),e(1770," ou "),n(1771,"code"),e(1772,"Pie"),t(),e(1773," num gr\xE1fico de \xE1rea polar."),t(),n(1774,"blockquote")(1775,"p"),e(1776,"V\xE1lido para os gr\xE1ficos "),n(1777,"code"),e(1778,"Donut"),t(),e(1779," e "),n(1780,"code"),e(1781,"Pie"),t(),e(1782,"."),t()()()(),n(1783,"tr",15)(1784,"td",16)(1785,"div",17)(1786,"span",18),e(1787," showContainerGauge"),o(1788,"br"),t()()(),n(1789,"td",19)(1790,"code",39),e(1791,"boolean"),t()(),n(1792,"td",23)(1793,"em")(1794,"strong"),e(1795,"(opcional)"),t()(),n(1796,"p"),e(1797,"Esconde a estiliza\xE7\xE3o do container em volta do gr\xE1fico."),t(),n(1798,"blockquote")(1799,"p"),e(1800,"V\xE1lido para gr\xE1fico do tipo "),n(1801,"code"),e(1802,"Gauge"),t(),e(1803,"."),t()()()(),n(1804,"tr",15)(1805,"td",16)(1806,"div",17)(1807,"span",18),e(1808," showFromToLegend"),o(1809,"br"),t()()(),n(1810,"td",19)(1811,"code",39),e(1812,"boolean"),t()(),n(1813,"td",23)(1814,"em")(1815,"strong"),e(1816,"(opcional)"),t()(),n(1817,"p"),e(1818,"Exibe os valores das propriedades "),n(1819,"code"),e(1820,"from"),t(),e(1821," e "),n(1822,"code"),e(1823,"to"),t(),e(1824," no gr\xE1fico do no texto da legenda entre par\xEAnteses."),t(),n(1825,"blockquote")(1826,"p"),e(1827,"V\xE1lido para gr\xE1fico do tipo "),n(1828,"code"),e(1829,"Gauge"),t(),e(1830,"."),t()()()(),n(1831,"tr",15)(1832,"td",16)(1833,"div",17)(1834,"span",18),e(1835," stacked"),o(1836,"br"),t()()(),n(1837,"td",19)(1838,"code",39),e(1839,"boolean"),t()(),n(1840,"td",23)(1841,"em")(1842,"strong"),e(1843,"(opcional)"),t()(),n(1844,"p"),e(1845,"Agrupa todas as s\xE9ries numa \xFAnica coluna ou barra por categoria. Essa propriedade sobrescreve a propriedade "),n(1846,"code"),e(1847,"stackGroupName"),t(),e(1848," da interface "),n(1849,"code"),e(1850,"PoChartSerie"),t()(),n(1851,"blockquote")(1852,"p"),e(1853,"V\xE1lido para gr\xE1fico do tipo "),n(1854,"code"),e(1855,"Column"),t(),e(1856," e "),n(1857,"code"),e(1858,"Bar"),t(),e(1859,"."),t()(),n(1860,"blockquote")(1861,"p"),e(1862,"Essa propriedade habilita a propriedade "),n(1863,"code"),e(1864,"p-data-label"),t(),e(1865," por padr\xE3o, podendo ser desabilitada passando "),n(1866,"code"),e(1867,"[p-data-label]={ fixed: false }"),t(),e(1868,"."),t()()()(),n(1869,"tr",15)(1870,"td",16)(1871,"div",17)(1872,"span",18),e(1873," subtitleGauge"),o(1874,"br"),t()()(),n(1875,"td",19)(1876,"code",35),e(1877,"string"),t()(),n(1878,"td",23)(1879,"em")(1880,"strong"),e(1881,"(opcional)"),t()(),n(1882,"p"),e(1883,"Define um subt\xEDtulo para o Gauge. Indicamos um subt\xEDtulo pequeno, com uma quantidade m\xE1xima de 32 caracteres na altura padr\xE3o."),t(),n(1884,"blockquote")(1885,"p"),e(1886,"V\xE1lido para gr\xE1fico do tipo "),n(1887,"code"),e(1888,"Gauge"),t(),e(1889,"."),t()()()(),n(1890,"tr",15)(1891,"td",16)(1892,"div",17)(1893,"span",18),e(1894," textCenterGraph"),o(1895,"br"),t()()(),n(1896,"td",19)(1897,"code",35),e(1898,"string"),t()(),n(1899,"td",23)(1900,"em")(1901,"strong"),e(1902,"(opcional)"),t()(),n(1903,"p"),e(1904,"Aplica texto centralizado customizado nos gr\xE1ficos de "),n(1905,"code"),e(1906,"Donut"),t(),e(1907,"."),t()()()(),n(1908,"h4",37)(1909,"code",5),e(1910,"PoChartRadarOptions"),t()(),n(1911,"div",2)(1912,"p")(1913,"em"),e(1914,"Interface"),t(),e(1915," para configura\xE7\xF5es do gr\xE1fico "),n(1916,"code"),e(1917,"radar"),t(),e(1918,"."),t()(),n(1919,"h4",11),e(1920,"Propriedades"),t(),n(1921,"table",12)(1922,"tr",13)(1923,"th",14),e(1924,"Nome"),t(),n(1925,"th",14),e(1926,"Tipo"),t(),n(1927,"th",14),e(1928,"Descri\xE7\xE3o"),t()(),n(1929,"tr",15)(1930,"td",16)(1931,"div",17)(1932,"span",18),e(1933," indicator"),o(1934,"br"),t()()(),n(1935,"td",19)(1936,"code",49),e(1937,"Array<PoChartIndicatorOptions>"),t()(),n(1938,"td",23)(1939,"em")(1940,"strong"),e(1941,"(opcional)"),t()(),n(1942,"p"),e(1943,"Define as configura\xE7\xF5es dos indicadores do gr\xE1fico, como nome, cor, valor m\xEDnimo e valor m\xE1ximo."),t()()(),n(1944,"tr",15)(1945,"td",16)(1946,"div",17)(1947,"span",18),e(1948," shape"),o(1949,"br"),t()()(),n(1950,"td",19)(1951,"code",50),e(1952,"'polygon' "),t(),n(1953,"code",51),e(1954," 'circle'"),t()(),n(1955,"td",23)(1956,"em")(1957,"strong"),e(1958,"(opcional)"),t()(),n(1959,"p"),e(1960,"Define o formato da grid, podendo ser exibida como pol\xEDgono ou c\xEDrculo."),t()()(),n(1961,"tr",15)(1962,"td",16)(1963,"div",17)(1964,"span",18),e(1965," splitArea"),o(1966,"br"),t()()(),n(1967,"td",19)(1968,"code",39),e(1969,"boolean"),t()(),n(1970,"td",23)(1971,"em")(1972,"strong"),e(1973,"(opcional)"),t()(),n(1974,"p"),e(1975,"Define o efeito zebrado na grid."),t()()()(),n(1976,"h4",37)(1977,"code",5),e(1978,"PoChartDataLabel"),t()(),n(1979,"div",2)(1980,"p"),e(1981,"Interface que define as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no "),n(1982,"code"),e(1983,"po-chart"),t(),e(1984,"."),t()(),n(1985,"h4",11),e(1986,"Propriedades"),t(),n(1987,"table",12)(1988,"tr",13)(1989,"th",14),e(1990,"Nome"),t(),n(1991,"th",14),e(1992,"Tipo"),t(),n(1993,"th",14),e(1994,"Descri\xE7\xE3o"),t()(),n(1995,"tr",15)(1996,"td",16)(1997,"div",17)(1998,"span",18),e(1999," fixed"),o(2e3,"br"),t()()(),n(2001,"td",19)(2002,"code",39),e(2003,"boolean"),t()(),n(2004,"td",23)(2005,"em")(2006,"strong"),e(2007,"(opcional)"),t()(),n(2008,"p"),e(2009,"Indica se o texto associado aos pontos da s\xE9rie deve permanecer fixo na exibi\xE7\xE3o do gr\xE1fico."),t(),n(2010,"ul")(2011,"li"),e(2012,"Quando definido como "),n(2013,"code"),e(2014,"true"),t(),e(2015,":"),n(2016,"ul")(2017,"li"),e(2018,"O "),n(2019,"em"),e(2020,"tooltip"),t(),e(2021," n\xE3o ser\xE1 exibido."),t(),n(2022,"li"),e(2023,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),t()()()(),n(2024,"blockquote")(2025,"p"),e(2026,"Dispon\xEDvel para os tipo de gr\xE1fico "),n(2027,"code"),e(2028,"PoChartType.Line"),t(),e(2029,", "),n(2030,"code"),e(2031,"PoChartType.Area"),t(),e(2032,", "),n(2033,"code"),e(2034,"PoChartType.Column"),t(),e(2035,", "),n(2036,"code"),e(2037,"PoChartType.Bar e PoChartType.Radar"),t(),e(2038,"."),t()()()()(),n(2039,"h4",37)(2040,"code",5),e(2041,"PoChartSerie"),t()(),n(2042,"div",2)(2043,"p"),e(2044,"Interface das series din\xE2micas do "),n(2045,"code"),e(2046,"po-chart"),t(),e(2047," que possibilita desenhar gr\xE1ficos dos tipos "),n(2048,"code"),e(2049,"area"),t(),e(2050,", "),n(2051,"code"),e(2052,"bar"),t(),e(2053,", "),n(2054,"code"),e(2055,"column"),t(),e(2056,", "),n(2057,"code"),e(2058,"line"),t(),e(2059,", "),n(2060,"code"),e(2061,"donut"),t(),e(2062,", "),n(2063,"code"),e(2064,"pie"),t(),e(2065," e "),n(2066,"code"),e(2067,"radar"),t()()(),n(2068,"h4",11),e(2069,"Propriedades"),t(),n(2070,"table",12)(2071,"tr",13)(2072,"th",14),e(2073,"Nome"),t(),n(2074,"th",14),e(2075,"Tipo"),t(),n(2076,"th",14),e(2077,"Descri\xE7\xE3o"),t()(),n(2078,"tr",15)(2079,"td",16)(2080,"div",17)(2081,"span",18),e(2082," areaStyle"),o(2083,"br"),t()()(),n(2084,"td",19)(2085,"code",39),e(2086,"boolean"),t()(),n(2087,"td",23)(2088,"em")(2089,"strong"),e(2090,"(opcional)"),t()(),n(2091,"p"),e(2092,"Define se a s\xE9rie ter\xE1 sua \xE1rea preenchida."),t(),n(2093,"blockquote")(2094,"p"),e(2095,"Propriedade v\xE1lida para gr\xE1ficos do tipo "),n(2096,"code"),e(2097,"Radar"),t(),e(2098,", "),n(2099,"code"),e(2100,"fillpoints"),t(),e(2101," n\xE3o funciona quando "),n(2102,"code"),e(2103,"areaStyle"),t(),e(2104," est\xE1 definido como "),n(2105,"code"),e(2106,"true"),t(),e(2107,"."),t()()()(),n(2108,"tr",15)(2109,"td",16)(2110,"div",17)(2111,"span",18),e(2112," color"),o(2113,"br"),t()()(),n(2114,"td",19)(2115,"code",35),e(2116,"string"),t()(),n(2117,"td",23)(2118,"em")(2119,"strong"),e(2120,"(opcional)"),t()(),n(2121,"p"),e(2122,"Determina a cor da s\xE9rie. As maneiras de customizar o "),n(2123,"em"),e(2124,"preset"),t(),e(2125," padr\xE3o de cores s\xE3o:"),t(),n(2126,"ul")(2127,"li"),e(2128,"Hexadecimal, por exemplo "),n(2129,"code"),e(2130,"#c64840"),t(),e(2131,";"),t(),n(2132,"li"),e(2133,"RGB, por exemplo "),n(2134,"code"),e(2135,"rgb(0, 0, 165)"),t()(),n(2136,"li"),e(2137,"O nome da cor, por exemplo "),n(2138,"code"),e(2139,"blue"),t(),e(2140,";"),t(),n(2141,"li"),e(2142,"Vari\xE1veis CSS, por exemplo "),n(2143,"code"),e(2144,"var(--color-01)"),t(),e(2145,";"),t(),n(2146,"li"),e(2147,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),n(2148,"ul")(2149,"li"),o(2150,"span",52),n(2151,"code"),e(2152,"color-01"),t()(),n(2153,"li"),o(2154,"span",53),n(2155,"code"),e(2156,"color-02"),t()(),n(2157,"li"),o(2158,"span",54),n(2159,"code"),e(2160,"color-03"),t()(),n(2161,"li"),o(2162,"span",55),n(2163,"code"),e(2164,"color-04"),t()(),n(2165,"li"),o(2166,"span",56),n(2167,"code"),e(2168,"color-05"),t()(),n(2169,"li"),o(2170,"span",57),n(2171,"code"),e(2172,"color-06"),t()(),n(2173,"li"),o(2174,"span",58),n(2175,"code"),e(2176,"color-07"),t()(),n(2177,"li"),o(2178,"span",59),n(2179,"code"),e(2180,"color-08"),t()(),n(2181,"li"),o(2182,"span",60),n(2183,"code"),e(2184,"color-09"),t()(),n(2185,"li"),o(2186,"span",61),n(2187,"code"),e(2188,"color-10"),t()(),n(2189,"li"),o(2190,"span",62),n(2191,"code"),e(2192,"color-11"),t()(),n(2193,"li"),o(2194,"span",63),n(2195,"code"),e(2196,"color-12"),t()()()()(),n(2197,"ul")(2198,"li"),e(2199,"A partir da 13\xB0 s\xE9rie o valor da cor ser\xE1 preta caso n\xE3o seja enviada uma cor customizada."),t()()()(),n(2200,"tr",15)(2201,"td",16)(2202,"div",17)(2203,"span",18),e(2204," data"),o(2205,"br"),t()()(),n(2206,"td",19)(2207,"code",27),e(2208,"number "),t(),n(2209,"code",64),e(2210," Array<number>"),t()(),n(2211,"td",23)(2212,"em")(2213,"strong"),e(2214,"(opcional)"),t()(),n(2215,"p"),e(2216,"Define a lista de valores para a s\xE9rie. Os tipos esperados s\xE3o de acordo com o tipo de gr\xE1fico:"),t(),n(2217,"ul")(2218,"li"),e(2219,"Para gr\xE1ficos dos tipos "),n(2220,"code"),e(2221,"donut"),t(),e(2222," e "),n(2223,"code"),e(2224,"pie"),t(),e(2225,", espera-se "),n(2226,"em"),e(2227,"number"),t(),e(2228,";"),t(),n(2229,"li"),e(2230,"Para gr\xE1ficos dos tipos "),n(2231,"code"),e(2232,"area"),t(),e(2233,", "),n(2234,"code"),e(2235,"bar"),t(),e(2236,", "),n(2237,"code"),e(2238,"column"),t(),e(2239,", "),n(2240,"code"),e(2241,"line"),t(),e(2242," e "),n(2243,"code"),e(2244,"radar"),t(),e(2245,", espera-se um "),n(2246,"em"),e(2247,"array"),t(),e(2248," de "),n(2249,"code"),e(2250,"data"),t(),e(2251,"."),t()(),n(2252,"blockquote")(2253,"p"),e(2254,"Se passado valor "),n(2255,"code"),e(2256,"null"),t(),e(2257," em determinado item da lista, a itera\xE7\xE3o ir\xE1 ignor\xE1-lo."),t()()()(),n(2258,"tr",15)(2259,"td",16)(2260,"div",17)(2261,"span",18),e(2262," from"),o(2263,"br"),t()()(),n(2264,"td",19)(2265,"code",27),e(2266,"number"),t()(),n(2267,"td",23)(2268,"em")(2269,"strong"),e(2270,"(opcional)"),t()(),n(2271,"p"),e(2272,"Alcance inicial da cor."),t(),n(2273,"blockquote")(2274,"p"),e(2275,"Propriedade v\xE1lida para gr\xE1fico do tipo "),n(2276,"code"),e(2277,"Gauge"),t(),e(2278,"."),t()()()(),n(2279,"tr",15)(2280,"td",16)(2281,"div",17)(2282,"span",18),e(2283," label"),o(2284,"br"),t()()(),n(2285,"td",19)(2286,"code",35),e(2287,"string"),t()(),n(2288,"td",23)(2289,"em")(2290,"strong"),e(2291,"(opcional)"),t()(),n(2292,"p"),e(2293,"R\xF3tulo refer\xEAncia da s\xE9rie."),t()()(),n(2294,"tr",15)(2295,"td",16)(2296,"div",17)(2297,"span",18),e(2298," stackGroupName"),o(2299,"br"),t()()(),n(2300,"td",19)(2301,"code",35),e(2302,"string"),t()(),n(2303,"td",23)(2304,"em")(2305,"strong"),e(2306,"(opcional)"),t()(),n(2307,"p"),e(2308,"Agrupa as s\xE9ries em barras ou colunas que receberem o mesmo "),n(2309,"code"),e(2310,"stackGroupName"),t(),e(2311,". Exemplo:"),t(),n(2312,"ul")(2313,"li"),e(2314,"Serie A: "),n(2315,"code"),e(2316,"{ data: 500, stackGroupName: 'group1' ... }"),t(),e(2317,";"),t(),n(2318,"li"),e(2319,"S\xE9rie B: "),n(2320,"code"),e(2321,"{ data: 200, stackGroupName: 'group1' ... }"),t(),e(2322,"."),t(),n(2323,"li"),e(2324,"S\xE9rie C: "),n(2325,"code"),e(2326,"{ data: 100, stackGroupName: 'group2' ... }"),t(),e(2327,"."),t(),n(2328,"li"),e(2329,"S\xE9rie D: "),n(2330,"code"),e(2331,"{ data: 400, stackGroupName: 'group2' ... }"),t(),e(2332,"."),t()(),n(2333,"p"),e(2334,"Nesse caso ser\xE1 criado duas barras ou colunas com duas series agrupadas em cada uma por categoria."),t(),n(2335,"blockquote")(2336,"p"),e(2337,"V\xE1lido para gr\xE1fico do tipo "),n(2338,"code"),e(2339,"Column"),t(),e(2340," e "),n(2341,"code"),e(2342,"Bar"),t(),e(2343,". Essa propriedade \xE9 ignorada caso a propriedade "),n(2344,"code"),e(2345,"stacked"),t(),e(2346," da interface "),n(2347,"code"),e(2348,"PoChartOptions"),t(),e(2349," esteja como "),n(2350,"code"),e(2351,"true"),t(),e(2352,"."),t()(),n(2353,"blockquote")(2354,"p"),e(2355,"Essa propriedade habilita a propriedade "),n(2356,"code"),e(2357,"p-data-label"),t(),e(2358," por padr\xE3o, podendo ser desabilitada passando "),n(2359,"code"),e(2360,"[p-data-label]={ fixed: false }"),t(),e(2361,"."),t()()()(),n(2362,"tr",15)(2363,"td",16)(2364,"div",17)(2365,"span",18),e(2366," to"),o(2367,"br"),t()()(),n(2368,"td",19)(2369,"code",27),e(2370,"number"),t()(),n(2371,"td",23)(2372,"em")(2373,"strong"),e(2374,"(opcional)"),t()(),n(2375,"p"),e(2376,"Alcance final da cor."),t(),n(2377,"blockquote")(2378,"p"),e(2379,"Propriedade v\xE1lida para gr\xE1fico do tipo "),n(2380,"code"),e(2381,"Gauge"),t(),e(2382,"."),t()()()(),n(2383,"tr",15)(2384,"td",16)(2385,"div",17)(2386,"span",18),e(2387," tooltip"),o(2388,"br"),t()()(),n(2389,"td",19)(2390,"code",35),e(2391,"string "),t(),n(2392,"code",65),e(2393," ((params: any) => string)"),t()(),n(2394,"td",23)(2395,"em")(2396,"strong"),e(2397,"(opcional)"),t()(),n(2398,"p"),e(2399,"Define o texto que ser\xE1 exibido na tooltip ao passar o mouse por cima das s\xE9ries do "),n(2400,"em"),e(2401,"chart"),t(),e(2402,"."),t(),n(2403,"p"),e(2404,"Formatos aceitos:"),t(),n(2405,"ul")(2406,"li")(2407,"p")(2408,"strong"),e(2409,"string"),t(),e(2410,": pode conter marcadores din\xE2micos e HTML simples."),t()(),n(2411,"li")(2412,"p"),e(2413,"Marcadores dispon\xEDveis:"),t()(),n(2414,"li")(2415,"p")(2416,"code"),e(2417,"{name}"),t(),e(2418," \u2192 Nome do item/categoria."),t()(),n(2419,"li")(2420,"p")(2421,"code"),e(2422,"{seriesName}"),t(),e(2423," \u2192 Nome da s\xE9rie."),t()(),n(2424,"li")(2425,"p")(2426,"code"),e(2427,"{value}"),t(),e(2428," \u2192 Valor correspondente."),t()(),n(2429,"li")(2430,"p")(2431,"strong"),e(2432,"function"),t(),e(2433,": fun\xE7\xE3o que recebe o objeto "),n(2434,"code"),e(2435,"params"),t(),e(2436," e deve retornar uma "),n(2437,"em"),e(2438,"string"),t(),e(2439," com o conte\xFAdo da tooltip."),t()()(),n(2440,"blockquote")(2441,"p"),e(2442,"\xC9 poss\xEDvel utilizar marca\xE7\xE3o HTML simples ("),n(2443,"code"),e(2444,"<b>"),t(),e(2445,", "),n(2446,"code"),e(2447,"<i>"),t(),e(2448,", "),n(2449,"code"),e(2450,"<br>"),t(),e(2451,", "),n(2452,"code"),e(2453,"<hr>"),t(),e(2454,", etc.) que ser\xE1 interpretada via "),n(2455,"code"),e(2456,"innerHTML"),t(),e(2457,"."),t()(),n(2458,"blockquote")(2459,"p"),e(2460,"Formata\xE7\xE3o customizada (ser\xE1 convertido internamente para HTML):"),t()(),n(2461,"ul")(2462,"li")(2463,"code"),e(2464,"\\n"),t(),e(2465," \u2192 quebra de linha ("),n(2466,"code"),e(2467,"<br>"),t(),e(2468,")."),t(),n(2469,"li")(2470,"code"),e(2471,"**texto**"),t(),e(2472," \u2192 negrito ("),n(2473,"code"),e(2474,"<b>"),t(),e(2475,")."),t(),n(2476,"li")(2477,"code"),e(2478,"__texto__"),t(),e(2479," \u2192 it\xE1lico ("),n(2480,"code"),e(2481,"<i>"),t(),e(2482,")."),t()(),n(2483,"blockquote")(2484,"p"),e(2485,"Caso n\xE3o seja informado um valor para o "),n(2486,"em"),e(2487,"tooltip"),t(),e(2488,", ser\xE1 exibido da seguinte forma:"),t()(),n(2489,"ul")(2490,"li")(2491,"code"),e(2492,"donut"),t(),e(2493,", "),n(2494,"code"),e(2495,"label"),t(),e(2496,": valor proporcional ao total em porcentagem."),t(),n(2497,"li")(2498,"code"),e(2499,"radar"),t(),e(2500,": nome da s\xE9rie, o nome do indicator e os valores correspondentes."),t(),n(2501,"li")(2502,"code"),e(2503,"area"),t(),e(2504,", "),n(2505,"code"),e(2506,"bar"),t(),e(2507,", "),n(2508,"code"),e(2509,"column"),t(),e(2510,", "),n(2511,"code"),e(2512,"line"),t(),e(2513," e "),n(2514,"code"),e(2515,"pie"),t(),e(2516,": "),n(2517,"code"),e(2518,"label"),t(),e(2519,": "),n(2520,"code"),e(2521,"data"),t(),e(2522,"."),t()(),n(2523,"h3"),e(2524,"Exemplos:"),t(),n(2525,"p")(2526,"strong"),e(2527,"Usando string com placeholders:"),t()(),n(2528,"pre")(2529,"code",66),e(2530,`tooltip: 'Ano: {name}<br>S\xE9rie: {seriesName}<br>Valor: <b>{value}</b>'
`),t()(),n(2531,"p")(2532,"strong"),e(2533,"Usando fun\xE7\xE3o de callback:"),t()(),n(2534,"pre")(2535,"code",66),e(2536,"tooltip = (params) => {\n  return `Ano: ${params.name}<br><i>Valor:</i> ${params.value}`;\n}\n"),t()()()(),n(2537,"tr",15)(2538,"td",16)(2539,"div",17)(2540,"span",18),e(2541," type"),o(2542,"br"),t()()(),n(2543,"td",19)(2544,"code",36),e(2545,"PoChartType"),t()(),n(2546,"td",23)(2547,"em")(2548,"strong"),e(2549,"(opcional)"),t()(),n(2550,"p"),e(2551,"Define em qual tipo de gr\xE1fico que ser\xE1 exibida a s\xE9rie. \xC9 poss\xEDvel combinar s\xE9ries dos tipos "),n(2552,"code"),e(2553,"column"),t(),e(2554," e "),n(2555,"code"),e(2556,"line"),t(),e(2557," no mesmo gr\xE1fico. Para isso, basta criar as s\xE9ries com as configura\xE7\xF5es:"),t(),n(2558,"ul")(2559,"li"),e(2560,"Serie A: "),n(2561,"code"),e(2562,"{ type: ChartType.Column, data: ... }"),t(),e(2563,";"),t(),n(2564,"li"),e(2565,"S\xE9rie B: "),n(2566,"code"),e(2567,"{ type: ChartType.Line, data: ... }"),t(),e(2568,"."),t()(),n(2569,"p"),e(2570,"Se tanto "),n(2571,"code"),e(2572,"p-type"),t(),e(2573," quanto "),n(2574,"code"),e(2575,"{ type }"),t(),e(2576," forem ignorados, o padr\xE3o gerado pelo componente ser\xE1:"),t(),n(2577,"ul")(2578,"li")(2579,"code"),e(2580,"column"),t(),e(2581,": se "),n(2582,"code"),e(2583,"data"),t(),e(2584," receber "),n(2585,"code"),e(2586,"Array<number>"),t(),e(2587,";"),t(),n(2588,"li")(2589,"code"),e(2590,"pie"),t(),e(2591,": se "),n(2592,"code"),e(2593,"data"),t(),e(2594," for "),n(2595,"em"),e(2596,"number"),t(),e(2597,"."),t()(),n(2598,"blockquote")(2599,"p"),e(2600,"Se utilizada a propriedade "),n(2601,"code"),e(2602,"p-type"),t(),e(2603,", dispensa-se a defini\xE7\xE3o desta propriedade. Por\xE9m, se houver declara\xE7\xE3o para ambas, o valor "),n(2604,"code"),e(2605,"{type}"),t(),e(2606," da primeira s\xE9rie sobrescrever\xE1 o valor definido em "),n(2607,"code"),e(2608,"p-type"),t(),e(2609,"."),t()(),n(2610,"blockquote")(2611,"p"),e(2612,"O componente s\xF3 exibir\xE1 as s\xE9ries que tiverem o mesmo "),n(2613,"code"),e(2614,"type"),t(),e(2615," definido, exceto para mesclagem para tipos "),n(2616,"code"),e(2617,"column"),t(),e(2618," e "),n(2619,"code"),e(2620,"line"),t(),e(2621,"."),t()()()()(),n(2622,"h3"),e(2623,"Enums"),t(),n(2624,"h4",4)(2625,"code",5),e(2626,"PoChartLabelFormat"),t()(),n(2627,"div",2)(2628,"p")(2629,"em"),e(2630,"Enum"),t(),n(2631,"code"),e(2632,"PoChartLabelFormat"),t(),e(2633," para especifica\xE7\xE3o dos tipos de formata\xE7\xE3o do eixo de valor no gr\xE1fico."),t()(),n(2634,"h4",11),e(2635,"Propriedades"),t(),n(2636,"table",12)(2637,"tr",13)(2638,"th",14),e(2639,"Nome"),t(),n(2640,"th",14),e(2641,"Descri\xE7\xE3o"),t()(),n(2642,"tr",15)(2643,"td",16)(2644,"div",17)(2645,"span",18),e(2646," Number"),o(2647,"br"),t()()(),n(2648,"td",23)(2649,"p"),e(2650,"Os valores ser\xE3o exibidos no formato num\xE9rico com duas casas decimais. Equivalente ao formato "),n(2651,"code"),e(2652,"'1.2-2'"),t(),e(2653," da "),n(2654,"a",67),e(2655,"DecimalPipe"),t(),e(2656,"."),t()()(),n(2657,"tr",15)(2658,"td",16)(2659,"div",17)(2660,"span",18),e(2661," Currency"),o(2662,"br"),t()()(),n(2663,"td",23)(2664,"p"),e(2665,"Os valores ser\xE3o exibidos com o s\xEDmbolo monet\xE1rio de acordo com a formata\xE7\xE3o padr\xE3o da aplica\xE7\xE3o, isto \xE9, o valor do token "),n(2666,"a",68),e(2667,"DEFAULT_CURRENCY_CODE"),t(),e(2668,". Para adequar ao padr\xE3o num\xE9rico brasileiro, \xE9 necess\xE1rio configurar o "),n(2669,"a",69),e(2670,"LOCALE_ID"),t(),e(2671," da aplica\xE7\xE3o. A configura\xE7\xE3o pode ser feita da seguinte forma:"),t(),n(2672,"pre")(2673,"code"),e(2674,`import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
})
export class AppModule { }
`),t()()()()(),n(2675,"h4",4)(2676,"code",5),e(2677,"PoChartType"),t()(),n(2678,"div",2)(2679,"p")(2680,"em"),e(2681,"Enum"),t(),n(2682,"code"),e(2683,"PoChartType"),t(),e(2684," para especifica\xE7\xE3o dos tipos de gr\xE1ficos."),t()(),n(2685,"h4",11),e(2686,"Propriedades"),t(),n(2687,"table",12)(2688,"tr",13)(2689,"th",14),e(2690,"Nome"),t(),n(2691,"th",14),e(2692,"Descri\xE7\xE3o"),t()(),n(2693,"tr",15)(2694,"td",16)(2695,"div",17)(2696,"span",18),e(2697," Area"),o(2698,"br"),t()()(),n(2699,"td",23)(2700,"p"),e(2701,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),t()()(),n(2702,"tr",15)(2703,"td",16)(2704,"div",17)(2705,"span",18),e(2706," Donut"),o(2707,"br"),t()()(),n(2708,"td",23)(2709,"p"),e(2710,"Exibe os dados em formato de rosca, dividindo em partes proporcionais."),t()()(),n(2711,"tr",15)(2712,"td",16)(2713,"div",17)(2714,"span",18),e(2715," Pie"),o(2716,"br"),t()()(),n(2717,"td",23)(2718,"p"),e(2719,"Exibe os dados em formato circular, dividindo proporcionalmente em fatias."),t()()(),n(2720,"tr",15)(2721,"td",16)(2722,"div",17)(2723,"span",18),e(2724," Line"),o(2725,"br"),t()()(),n(2726,"td",23)(2727,"p"),e(2728,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),n(2729,"code"),e(2730,"column"),t(),e(2731," e "),n(2732,"code"),e(2733,"area"),t(),e(2734,", definindo-se o tipo atrav\xE9s da propriedade "),n(2735,"code"),e(2736,"PoChartSerie.type"),t(),e(2737,"."),t()()(),n(2738,"tr",15)(2739,"td",16)(2740,"div",17)(2741,"span",18),e(2742," Column"),o(2743,"br"),t()()(),n(2744,"td",23)(2745,"p"),e(2746,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),t()()(),n(2747,"tr",15)(2748,"td",16)(2749,"div",17)(2750,"span",18),e(2751," Bar"),o(2752,"br"),t()()(),n(2753,"td",23)(2754,"p"),e(2755,"Gr\xE1fico que exibe os dados em forma de barras horizontais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo de s\xE9ries e categorias."),t()()(),n(2756,"tr",15)(2757,"td",16)(2758,"div",17)(2759,"span",18),e(2760," Gauge"),o(2761,"br"),t()()(),n(2762,"td",23)(2763,"p"),e(2764,"Gr\xE1fico que prov\xEA a representa\xE7\xE3o de um valor atrav\xE9s de um arco. Possui dois tipos de tratamentos:"),t(),n(2765,"ul")(2766,"li"),e(2767,"\xC9 poss\xEDvel demonstrar um dado percentual simples em conjunto com uma descri\xE7\xE3o resumida em seu interior;"),t(),n(2768,"li"),e(2769,"Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado."),t()()()(),n(2770,"tr",15)(2771,"td",16)(2772,"div",17)(2773,"span",18),e(2774," Radar"),o(2775,"br"),t()()(),n(2776,"td",23)(2777,"p"),e(2778,"Tipo de gr\xE1fico utilizado para visualizar e comparar o desempenho de diferentes itens em m\xFAltiplas categorias."),t()()()()())},dependencies:[M],encapsulation:2})}return r})();var Ae=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,s){this.route=l,this.router=s}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let s=l.view;this.activeTab=s||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(s){return new(s||r)(Y(ie),Y(oe))};static \u0275cmp=f({type:r,selectors:[["ng-component"]],standalone:!1,decls:12,vars:4,consts:[["p-title","Chart",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(s,i){s&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-chart-doc"),t(),n(4,"po-tab",3),g("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-chart-basic-view")(6,"sample-po-chart-labs-view")(7,"sample-po-chart-coffee-ranking-view")(8,"sample-po-chart-stacked-view")(9,"sample-po-chart-summary-view")(10,"sample-po-chart-world-exports-view")(11,"sample-po-chart-technology-skill-view"),t()()()),s&2&&(h("p-actions",i.actions),p(2),h("p-active",i.activeTab==="doc"),p(2),h("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ge,w,L,be,Ce,ve,Pe,we,Me,Ve,De],encapsulation:2})}return r})();var yt=[{path:"",component:Ae}],Re=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275mod=Z({type:r});static \u0275inj=H({imports:[j.forChild(yt),j]})}return r})();var bn=(()=>{class r{static \u0275fac=function(s){return new(s||r)};static \u0275mod=Z({type:r});static \u0275inj=H({imports:[Se,Re]})}return r})();export{bn as DocPoChartModule};
