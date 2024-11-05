(self.webpackChunk_plone_volto=self.webpackChunk_plone_volto||[]).push([[3340],{"./src/components/manage/Widgets/FormFieldWrapper.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),lodash_map__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/map.js"),lodash_map__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Label/Label.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Form/Form.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js"),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/classnames@2.2.6/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),react_intl__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/index.js"),react_intl__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/injectIntl.js"),_plone_volto_icons_language_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/icons/language.svg"),_plone_volto_icons_language_svg__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_plone_volto_icons_language_svg__WEBPACK_IMPORTED_MODULE_3__),_plone_volto_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_1__.createElement;const messages=(0,react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages)({edit:{id:"Edit",defaultMessage:"Edit"},delete:{id:"Delete",defaultMessage:"Delete"},language_independent:{id:"Language independent field.",defaultMessage:"Language independent field."},language_independent_icon_title:{id:"Language independent icon title",defaultMessage:"This is a language independent field. Any value you enter here will overwrite the corresponding field of all members of the translation group when you save this form."}});class FormFieldWrapper extends react__WEBPACK_IMPORTED_MODULE_1__.Component{render(){const{id:id,title:title,description:description,fieldSet:fieldSet,required:required,error:error,wrapped:wrapped,columns:columns,draggable:draggable,onEdit:onEdit,className:className,isDisabled:isDisabled,onDelete:onDelete,intl:intl,noForInFieldLabel:noForInFieldLabel,multilingual_options:multilingual_options}=this.props,languageIndependent=null==multilingual_options?void 0:multilingual_options.language_independent,wdg=__jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,this.props.children,lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(error,(message=>__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.c,{key:message,basic:!0,color:"red",className:"form-error-label"},message))));return wrapped?__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.c.Field,{inline:!0,required:required,error:error&&error.length>0,className:classnames__WEBPACK_IMPORTED_MODULE_2___default()(description?"help":"",className,`field-wrapper-${id}`,languageIndependent?"language-independent-field":null)},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.c.Row,{stretched:!0},2===columns&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.c.Column,{width:"4"},__jsx("div",{className:"wrapper"},__jsx("label",{id:`fieldset-${fieldSet}-field-label-${id}`,htmlFor:noForInFieldLabel?null:`field-${id}`},draggable&&onEdit&&__jsx("i",{"aria-hidden":"true",className:"grey bars icon drag handle"}),title,languageIndependent&&__jsx("div",{className:"languageIndependent-icon"},__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_4__.GWx,{title:intl.formatMessage(messages.language_independent_icon_title),name:_plone_volto_icons_language_svg__WEBPACK_IMPORTED_MODULE_3___default(),size:"24px",color:"#555"}))))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.c.Column,{width:2===columns?8:12},onEdit&&!isDisabled&&__jsx("div",{className:"toolbar",style:{zIndex:"2"}},__jsx("button",{"aria-label":intl.formatMessage(messages.edit),className:"item ui noborder button",onClick:evt=>{evt.preventDefault(),onEdit(id)}},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.c,{name:"write square",size:"large",color:"blue"})),__jsx("button",{"aria-label":intl.formatMessage(messages.delete),className:"item ui noborder button",onClick:evt=>{evt.preventDefault(),onDelete(id)}},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.c,{name:"close",size:"large",color:"red"}))),wdg)),description&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.c.Row,{stretched:!0},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.c.Column,{stretched:!0,width:"12"},__jsx("p",{className:"help"},this.props.multilingual_options?`${intl.formatMessage(messages.language_independent)} `:null,description))))):__jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,wdg)}}(0,_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__.c)(FormFieldWrapper,"defaultProps",{description:null,required:!1,error:[],wrapped:!0,columns:2,onDelete:null,intl:null,isDisabled:null,draggable:null}),__webpack_exports__.default=(0,react_intl__WEBPACK_IMPORTED_MODULE_11__.cp)(FormFieldWrapper),FormFieldWrapper.__docgenInfo={description:"FormFieldWrapper component class.\n@class FormFieldWrapper\n@extends Component",methods:[],displayName:"FormFieldWrapper",props:{description:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"element"}]},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},error:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},wrapped:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},columns:{defaultValue:{value:"2",computed:!1},description:"",type:{name:"number"},required:!1},onDelete:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},intl:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"object"},required:!1},isDisabled:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"bool"},required:!1},draggable:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"bool"},required:!1},id:{description:"",type:{name:"string"},required:!0},title:{description:"",type:{name:"string"},required:!0},onEdit:{description:"",type:{name:"func"},required:!1},className:{description:"",type:{name:"string"},required:!1}}}},"./src/components/manage/Widgets/ObjectBrowserWidget.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ObjectBrowserWidgetComponent:function(){return ObjectBrowserWidgetComponent},ObjectBrowserWidgetMode:function(){return ObjectBrowserWidgetMode}});var _home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),lodash_remove__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/remove.js"),lodash_remove__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_remove__WEBPACK_IMPORTED_MODULE_0__),lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEmpty.js"),lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__),lodash_isArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArray.js"),lodash_isArray__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_2__),lodash_includes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/includes.js"),lodash_includes__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_3__),lodash_compact__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/compact.js"),lodash_compact__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(lodash_compact__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),redux__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("../../../node_modules/.pnpm/redux@4.2.1/node_modules/redux/es/redux.js"),react_redux__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.12_@types+react@18.2.27_react-dom@18.2.0_react@18.2.0__react@18.2.0_redux@4.2.1/node_modules/react-redux/es/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/modules/Popup/Popup.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Label/Label.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Image/Image.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/helpers/Url/Url.js"),_plone_volto_actions_search_search__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/actions/search/search.js"),_plone_volto_components_manage_Sidebar_ObjectBrowser__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/manage/Sidebar/ObjectBrowser.jsx"),react_intl__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/index.js"),react_intl__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/injectIntl.js"),_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/theme/Icon/Icon.jsx"),_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/manage/Widgets/FormFieldWrapper.jsx"),_plone_volto_registry__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/registry.js"),_plone_volto_icons_nav_svg__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/icons/nav.svg"),_plone_volto_icons_nav_svg__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_plone_volto_icons_nav_svg__WEBPACK_IMPORTED_MODULE_13__),_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/icons/clear.svg"),_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_14__),_plone_volto_icons_home_svg__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/icons/home.svg"),_plone_volto_icons_home_svg__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(_plone_volto_icons_home_svg__WEBPACK_IMPORTED_MODULE_15__),_plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/icons/ahead.svg"),_plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(_plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_16__),_plone_volto_icons_blank_svg__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/icons/blank.svg"),_plone_volto_icons_blank_svg__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(_plone_volto_icons_blank_svg__WEBPACK_IMPORTED_MODULE_17__),react_router__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("../../../node_modules/.pnpm/react-router@5.2.0_react@18.2.0/node_modules/react-router/esm/react-router.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_5__.createElement;const messages=(0,react_intl__WEBPACK_IMPORTED_MODULE_18__.defineMessages)({placeholder:{id:"No items selected",defaultMessage:"No items selected"},edit:{id:"Edit",defaultMessage:"Edit"},delete:{id:"Delete",defaultMessage:"Delete"},openObjectBrowser:{id:"Open object browser",defaultMessage:"Open object browser"}});class ObjectBrowserWidgetComponent extends react__WEBPACK_IMPORTED_MODULE_5__.Component{constructor(props){super(props),(0,_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_19__.c)(this,"state",{manualLinkInput:"",validURL:!1}),(0,_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_19__.c)(this,"removeItem",(item=>{let value=[...this.props.value];lodash_remove__WEBPACK_IMPORTED_MODULE_0___default()(value,(function(_item){return _item["@id"]===item["@id"]})),this.props.onChange(this.props.id,value)})),(0,_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_19__.c)(this,"onChange",(item=>{var _this$props$widgetOpt,_this$props$widgetOpt2;let value="multiple"===this.props.mode&&this.props.value?[...this.props.value]:[];value=value.filter((item=>null!=item));1===((null===(_this$props$widgetOpt=this.props.widgetOptions)||void 0===_this$props$widgetOpt||null===(_this$props$widgetOpt2=_this$props$widgetOpt.pattern_options)||void 0===_this$props$widgetOpt2?void 0:_this$props$widgetOpt2.maximumSelectionSize)||-1)&&1===value.length&&(value=[]);let exists=!1,index=-1;if(value.forEach(((_item,_index)=>{(0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_7__._c)(_item["@id"])===(0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_7__._c)(item["@id"])&&(exists=!0,index=_index)})),exists)value.splice(index,1),this.props.onChange(this.props.id,value);else{let resultantItem=item;if(this.props.selectedItemAttrs){const allowedItemKeys=[...this.props.selectedItemAttrs,"@id","title"];resultantItem=Object.keys(item).filter((key=>allowedItemKeys.includes(key))).reduce(((obj,key)=>(obj[key]=item[key],obj)),{})}resultantItem=(0,_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_20__.c)((0,_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_20__.c)({},resultantItem),{},{"@id":item["@id"]}),value.push(resultantItem),"single"===this.props.return?this.props.onChange(this.props.id,value[0]):this.props.onChange(this.props.id,value)}})),(0,_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_19__.c)(this,"onManualLinkInput",(e=>{this.setState({manualLinkInput:e.target.value}),this.validateManualLink(e.target.value)?this.setState({validURL:!0}):this.setState({validURL:!1})})),(0,_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_19__.c)(this,"validateManualLink",(url=>this.props.allowExternals?(0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_7__.g9)(url):(0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_7__.Q5)(url))),(0,_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_19__.c)(this,"onSubmitManualLink",(()=>{if(this.validateManualLink(this.state.manualLinkInput)){if((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_7__.Q5)(this.state.manualLinkInput)){const link=this.state.manualLinkInput;this.props.searchContent("/",{"path.query":(0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_7__._c)(this.state.manualLinkInput),"path.depth":"0",sort_on:"getObjPositionInParent",metadata_fields:"_all",b_size:1e3},`${this.props.block}-${this.props.mode}`).then((resp=>{var _resp$items;(null===(_resp$items=resp.items)||void 0===_resp$items?void 0:_resp$items.length)>0?this.onChange(resp.items[0]):this.props.onChange(this.props.id,[{"@id":(0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_7__._c)(link),title:(0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_7__.Uf)(link)}])}))}else this.props.onChange(this.props.id,[{"@id":(0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_7__.mq)(this.state.manualLinkInput),title:(0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_7__.Uf)(this.state.manualLinkInput)}]);this.setState({validURL:!0,manualLinkInput:""})}})),(0,_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_19__.c)(this,"onKeyDownManualLink",(e=>{"Enter"===e.key?(e.preventDefault(),e.stopPropagation(),this.onSubmitManualLink()):"Escape"===e.key&&(e.preventDefault(),e.stopPropagation())})),(0,_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_19__.c)(this,"showObjectBrowser",(ev=>{var _this$props$widgetOpt3,_this$props$widgetOpt4,_this$props$widgetOpt5,_this$props$widgetOpt6;ev.preventDefault(),this.props.openObjectBrowser({mode:this.props.mode,currentPath:this.props.initialPath||this.props.location.pathname,propDataName:"value",onSelectItem:(url,item)=>{this.onChange(item)},selectableTypes:(null===(_this$props$widgetOpt3=this.props.widgetOptions)||void 0===_this$props$widgetOpt3||null===(_this$props$widgetOpt4=_this$props$widgetOpt3.pattern_options)||void 0===_this$props$widgetOpt4?void 0:_this$props$widgetOpt4.selectableTypes)||this.props.selectableTypes,maximumSelectionSize:(null===(_this$props$widgetOpt5=this.props.widgetOptions)||void 0===_this$props$widgetOpt5||null===(_this$props$widgetOpt6=_this$props$widgetOpt5.pattern_options)||void 0===_this$props$widgetOpt6?void 0:_this$props$widgetOpt6.maximumSelectionSize)||this.props.maximumSelectionSize})})),(0,_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_19__.c)(this,"handleSelectedItemsRefClick",(e=>{this.props.isDisabled||(e.target.contains(this.selectedItemsRef.current)||e.target.contains(this.placeholderRef.current))&&this.showObjectBrowser(e)})),this.selectedItemsRef=react__WEBPACK_IMPORTED_MODULE_5__.createRef(),this.placeholderRef=react__WEBPACK_IMPORTED_MODULE_5__.createRef()}renderLabel(item){const href=item["@id"];return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_21__.c,{key:(0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_7__._c)(href),content:__jsx("div",{style:{display:"flex"}},(0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_7__.Q5)(href)?__jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__.c,{name:_plone_volto_icons_home_svg__WEBPACK_IMPORTED_MODULE_15___default(),size:"18px"}):__jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__.c,{name:_plone_volto_icons_blank_svg__WEBPACK_IMPORTED_MODULE_17___default(),size:"18px"})," ",(0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_7__._c)(href)),trigger:__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_22__.c,null,__jsx("div",{className:"item-title"},lodash_includes__WEBPACK_IMPORTED_MODULE_3___default()(_plone_volto_registry__WEBPACK_IMPORTED_MODULE_12__.default.settings.imageObjects,item["@type"])?__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_23__.c,{size:"small",src:`${item["@id"]}/@@images/image/thumb`}):item.title),__jsx("div",null,"multiple"===this.props.mode&&__jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__.c,{name:_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_14___default(),size:"12px",className:"right",onClick:event=>{event.preventDefault(),this.removeItem(item)}})))})}render(){var _this$props$placehold,_this$props$placehold2;const{id:id,description:description,fieldSet:fieldSet,value:value,mode:mode,onChange:onChange,isDisabled:isDisabled}=this.props;let items=lodash_compact__WEBPACK_IMPORTED_MODULE_4___default()(!lodash_isArray__WEBPACK_IMPORTED_MODULE_2___default()(value)&&value?[value]:value||[]),icon="multiple"===mode||0===items.length?_plone_volto_icons_nav_svg__WEBPACK_IMPORTED_MODULE_13___default():_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_14___default(),iconAction="multiple"===mode||0===items.length?this.showObjectBrowser:e=>{e.preventDefault(),onChange(id,"single"===this.props.return?null:[])};return __jsx(_plone_volto_components_manage_Widgets_FormFieldWrapper__WEBPACK_IMPORTED_MODULE_11__.default,(0,_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_24__.c)({},this.props,{className:description?"help text":"text"}),__jsx("div",{className:"objectbrowser-field","aria-labelledby":`fieldset-${fieldSet||"default"}-field-label-${id}`},__jsx("div",{className:"selected-values",onClick:this.handleSelectedItemsRefClick,onKeyDown:this.handleSelectedItemsRefClick,role:"searchbox",tabIndex:0,ref:this.selectedItemsRef},items.map((item=>this.renderLabel(item))),0===items.length&&"multiple"===this.props.mode&&__jsx("div",{className:"placeholder",ref:this.placeholderRef},null!==(_this$props$placehold=this.props.placeholder)&&void 0!==_this$props$placehold?_this$props$placehold:this.props.intl.formatMessage(messages.placeholder)),this.props.allowExternals&&0===items.length&&"multiple"!==this.props.mode&&__jsx("input",{onKeyDown:this.onKeyDownManualLink,onChange:this.onManualLinkInput,value:this.state.manualLinkInput,placeholder:null!==(_this$props$placehold2=this.props.placeholder)&&void 0!==_this$props$placehold2?_this$props$placehold2:this.props.intl.formatMessage(messages.placeholder)})),this.state.manualLinkInput&&lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(items)&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__.c.Group,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__.c,{basic:!0,className:"cancel",onClick:e=>{e.stopPropagation(),this.setState({manualLinkInput:""})}},__jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__.c,{name:_plone_volto_icons_clear_svg__WEBPACK_IMPORTED_MODULE_14___default(),size:"18px",color:"#e40166"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__.c,{basic:!0,primary:!0,disabled:!this.state.validURL,onClick:e=>{e.stopPropagation(),this.onSubmitManualLink()}},__jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__.c,{name:_plone_volto_icons_ahead_svg__WEBPACK_IMPORTED_MODULE_16___default(),size:"18px"}))),!this.state.manualLinkInput&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_25__.c,{"aria-label":this.props.intl.formatMessage(messages.openObjectBrowser),onClick:iconAction,className:"action",disabled:isDisabled},__jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_10__.c,{name:icon,size:"18px"}))))}}(0,_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_19__.c)(ObjectBrowserWidgetComponent,"defaultProps",{description:null,required:!1,error:[],value:[],mode:"multiple",return:"multiple",initialPath:"",allowExternals:!1});const ObjectBrowserWidgetMode=mode=>(0,redux__WEBPACK_IMPORTED_MODULE_26__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_27__.cp,_plone_volto_components_manage_Sidebar_ObjectBrowser__WEBPACK_IMPORTED_MODULE_9__.c,react_router__WEBPACK_IMPORTED_MODULE_28__.Ak,(0,react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(null,{searchContent:_plone_volto_actions_search_search__WEBPACK_IMPORTED_MODULE_8__.M}))((props=>__jsx(ObjectBrowserWidgetComponent,(0,_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_24__.c)({},props,{mode:mode}))));__webpack_exports__.default=(0,redux__WEBPACK_IMPORTED_MODULE_26__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_27__.cp,_plone_volto_components_manage_Sidebar_ObjectBrowser__WEBPACK_IMPORTED_MODULE_9__.c,react_router__WEBPACK_IMPORTED_MODULE_28__.Ak,(0,react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(null,{searchContent:_plone_volto_actions_search_search__WEBPACK_IMPORTED_MODULE_8__.M}))(ObjectBrowserWidgetComponent),ObjectBrowserWidgetComponent.__docgenInfo={description:"ObjectBrowserWidget component class.\n@class ObjectBrowserWidget\n@extends Component",methods:[{name:"renderLabel",docblock:null,modifiers:[],params:[{name:"item",optional:!1,type:null}],returns:null},{name:"removeItem",docblock:null,modifiers:[],params:[{name:"item",optional:!1,type:null}],returns:null},{name:"onChange",docblock:null,modifiers:[],params:[{name:"item",optional:!1,type:null}],returns:null},{name:"onManualLinkInput",docblock:null,modifiers:[],params:[{name:"e",optional:!1,type:null}],returns:null},{name:"validateManualLink",docblock:null,modifiers:[],params:[{name:"url",optional:!1,type:null}],returns:null},{name:"onSubmitManualLink",docblock:null,modifiers:[],params:[],returns:null},{name:"onKeyDownManualLink",docblock:null,modifiers:[],params:[{name:"e",optional:!1,type:null}],returns:null},{name:"showObjectBrowser",docblock:null,modifiers:[],params:[{name:"ev",optional:!1,type:null}],returns:null},{name:"handleSelectedItemsRefClick",docblock:null,modifiers:[],params:[{name:"e",optional:!1,type:null}],returns:null}],displayName:"ObjectBrowserWidgetComponent",props:{description:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},error:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},value:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"object"}},{name:"object"}]},required:!1},mode:{defaultValue:{value:"'multiple'",computed:!1},description:"",type:{name:"string"},required:!1},return:{defaultValue:{value:"'multiple'",computed:!1},description:"",type:{name:"string"},required:!1},initialPath:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},allowExternals:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},id:{description:"",type:{name:"string"},required:!0},title:{description:"",type:{name:"string"},required:!0},onChange:{description:"",type:{name:"func"},required:!0},openObjectBrowser:{description:"",type:{name:"func"},required:!0},placeholder:{description:"",type:{name:"string"},required:!1}}}},"./src/icons/blank.svg":function(module){module.exports={attributes:{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36"},content:'<g fill-rule="evenodd"><path d="M16 5 16 7 27.586 7 13.293 21.293 14.707 22.707 29 8.414 29 20 31 20 31 5z"/><path d="M23 29 7 29 7 13 18 13 18 11 5 11 5 31 25 31 25 18 23 18z"/></g>'}}}]);