"use strict";(self.webpackChunk_plone_volto=self.webpackChunk_plone_volto||[]).push([[2040],{"./src/components/manage/Diff/Diff.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var _home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),lodash_map__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/map.js"),lodash_map__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js"),lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__),lodash_filter__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/filter.js"),lodash_filter__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/helpers/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.12_@types+react@18.2.27_react-dom@18.2.0_react@18.2.0__react@18.2.0_redux@4.2.1/node_modules/react-redux/es/index.js"),redux__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../../../node_modules/.pnpm/redux@4.2.1/node_modules/redux/es/redux.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Container/Container.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Table/Table.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/modules/Dropdown/Dropdown.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../../../node_modules/.pnpm/react-router-dom@5.2.0_react@18.2.0/node_modules/react-router-dom/esm/react-router-dom.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("../../../node_modules/.pnpm/react-router@5.2.0_react@18.2.0/node_modules/react-router/esm/react-router.js"),react_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),react_intl__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/index.js"),react_intl__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/message.js"),react_intl__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/injectIntl.js"),query_string__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../../node_modules/.pnpm/query-string@7.1.0/node_modules/query-string/index.js"),_plone_volto_actions__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/actions/index.js"),_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/index.js"),_plone_volto_components_manage_Diff_DiffField__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/manage/Diff/DiffField.jsx"),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/icons/back.svg"),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_11__),__jsx=react__WEBPACK_IMPORTED_MODULE_3__.createElement;const messages=(0,react_intl__WEBPACK_IMPORTED_MODULE_12__.defineMessages)({diff:{id:"Diff",defaultMessage:"Diff"},back:{id:"Back",defaultMessage:"Back"},split:{id:"Split",defaultMessage:"Split"},unified:{id:"Unified",defaultMessage:"Unified"}});class Diff extends react__WEBPACK_IMPORTED_MODULE_3__.Component{constructor(props){super(props),this.onChangeOne=this.onChangeOne.bind(this),this.onChangeTwo=this.onChangeTwo.bind(this),this.onSelectView=this.onSelectView.bind(this),this.state={isClient:!1}}componentDidMount(){this.props.getSchema(this.props.type),this.props.getHistory((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__.U$)(this.props.pathname)),this.props.getDiff((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__.U$)(this.props.pathname),this.props.one,this.props.two),this.setState({isClient:!0})}UNSAFE_componentWillReceiveProps(nextProps){this.props.pathname===nextProps.pathname&&this.props.one===nextProps.one&&this.props.two===nextProps.two||this.props.getDiff((0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__.U$)(nextProps.pathname),nextProps.one,nextProps.two)}onSelectView(event,{value:value}){this.props.history.push(`${this.props.pathname}?one=${this.props.one}&two=${this.props.two}&view=${value}`)}onChangeOne(event,{value:value}){this.props.history.push(`${this.props.pathname}?one=${value}&two=${this.props.two}&view=${this.props.view}`)}onChangeTwo(event,{value:value}){this.props.history.push(`${this.props.pathname}?one=${this.props.one}&two=${value}&view=${this.props.view}`)}render(){var _this$props$error;const versions=lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(lodash_filter__WEBPACK_IMPORTED_MODULE_2___default()(this.props.historyEntries,(entry=>"version"in entry)),((entry,index)=>({text:__jsx(react__WEBPACK_IMPORTED_MODULE_3__.Fragment,null,0===index?"Current":entry.version," (",__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__.I7U,{date:entry.time,long:!0,className:"text"}),",  ",entry.actor.fullname,")"),value:`${entry.version}`,key:`${entry.version}`})));return 401===(null===(_this$props$error=this.props.error)||void 0===_this$props$error?void 0:_this$props$error.status)?__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__.GsG,null):__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.c,{id:"page-diff"},__jsx(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__.So,{title:this.props.intl.formatMessage(messages.diff)}),__jsx("h1",null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_14__.c,{id:"Difference between revision {one} and {two} of {title}",defaultMessage:"Difference between revision {one} and {two} of {title}",values:{one:this.props.one,two:this.props.two,title:this.props.title}})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Column,{width:9},__jsx("p",{className:"description"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_14__.c,{id:"You can view the difference of the revisions below.",defaultMessage:"You can view the difference of the revisions below."}))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Column,{width:3,textAlign:"right"},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.Group,null,lodash_map__WEBPACK_IMPORTED_MODULE_0___default()([{id:"split",label:this.props.intl.formatMessage(messages.split)},{id:"unified",label:this.props.intl.formatMessage(messages.unified)}],(view=>__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c,{key:view.id,value:view.id,active:this.props.view===view.id,onClick:this.onSelectView},view.label)))))),this.props.historyEntries.length>0&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.c,{basic:"very"},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.c.Header,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.c.HeaderCell,{width:6},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_14__.c,{id:"Base",defaultMessage:"Base"}),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.c,{onChange:this.onChangeOne,value:this.props.one,selection:!0,fluid:!0,options:versions})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.c.HeaderCell,{width:6},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_14__.c,{id:"Compare",defaultMessage:"Compare"}),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.c,{onChange:this.onChangeTwo,value:this.props.two,selection:!0,fluid:!0,options:versions}))))),this.props.schema&&this.props.data.length>0&&lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(this.props.schema.fieldsets,(fieldset=>lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(fieldset.fields,(field=>!lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(this.props.data[0][field],this.props.data[1][field])&&field!==(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__.c$)(this.props.data[0])&&field!==(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__.Ar)(this.props.data[0])&&__jsx(_plone_volto_components_manage_Diff_DiffField__WEBPACK_IMPORTED_MODULE_10__.default,{key:field,one:this.props.data[0][field],two:this.props.data[1][field],schema:this.props.schema.properties[field],view:this.props.view}))))),this.props.schema&&this.props.data.length>0&&(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__.I1)(this.props.data[0])&&(!lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(this.props.data[0][(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__.c$)(this.props.data[0])],this.props.data[1][(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__.c$)(this.props.data[1])])||!lodash_isEqual__WEBPACK_IMPORTED_MODULE_1___default()(this.props.data[0][(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__.Ar)(this.props.data[0])],this.props.data[1][(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__.Ar)(this.props.data[1])]))&&__jsx(_plone_volto_components_manage_Diff_DiffField__WEBPACK_IMPORTED_MODULE_10__.default,{one:this.props.data[0][(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__.c$)(this.props.data[0])],two:this.props.data[1][(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__.c$)(this.props.data[1])],contentOne:this.props.data[0],contentTwo:this.props.data[1],schema:this.props.schema.properties[(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__.c$)(this.props.data[0])],view:this.props.view}),this.state.isClient&&(0,react_dom__WEBPACK_IMPORTED_MODULE_6__.createPortal)(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__.YT3,{pathname:this.props.pathname,hideDefaultViewButtons:!0,inner:__jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.cH,{to:`${(0,_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__.U$)(this.props.pathname)}/historyview`,className:"item"},__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__.GWx,{name:_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_11___default(),className:"contents circled",size:"30px",title:this.props.intl.formatMessage(messages.back)}))}),document.getElementById("toolbar")))}}(0,_home_runner_work_volto_ploneconf_volto_ploneconf_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_20__.c)(Diff,"defaultProps",{schema:null}),__webpack_exports__.default=(0,redux__WEBPACK_IMPORTED_MODULE_21__.compose)(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Ak,react_intl__WEBPACK_IMPORTED_MODULE_23__.cp,(0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(((state,props)=>{var _state$content$data,_state$content$data2;return{data:state.diff.data,historyEntries:state.history.entries,schema:state.schema.schema,error:state.diff.error,pathname:props.location.pathname,one:query_string__WEBPACK_IMPORTED_MODULE_7__.parse(props.location.search).one,two:query_string__WEBPACK_IMPORTED_MODULE_7__.parse(props.location.search).two,view:query_string__WEBPACK_IMPORTED_MODULE_7__.parse(props.location.search).view||"split",title:null===(_state$content$data=state.content.data)||void 0===_state$content$data?void 0:_state$content$data.title,type:null===(_state$content$data2=state.content.data)||void 0===_state$content$data2?void 0:_state$content$data2["@type"]}}),{getDiff:_plone_volto_actions__WEBPACK_IMPORTED_MODULE_8__.EF,getSchema:_plone_volto_actions__WEBPACK_IMPORTED_MODULE_8__.wx,getHistory:_plone_volto_actions__WEBPACK_IMPORTED_MODULE_8__.A3}))(Diff),Diff.__docgenInfo={description:"Diff class.\n@class Diff\n@extends Component",methods:[{name:"onSelectView",docblock:"On select view handler\n@method onSelectView\n@param {object} event Event object\n@param {string} value Value\n@returns {undefined}",modifiers:[],params:[{name:"event",description:"Event object",type:{name:"object"},optional:!1},{name:"{ value }",optional:!1}],returns:{},description:"On select view handler"},{name:"onChangeOne",docblock:"On change one handler\n@method onChangeOne\n@param {object} event Event object\n@param {string} value Value\n@returns {undefined}",modifiers:[],params:[{name:"event",description:"Event object",type:{name:"object"},optional:!1},{name:"{ value }",optional:!1}],returns:{},description:"On change one handler"},{name:"onChangeTwo",docblock:"On change two handler\n@method onChangeTwo\n@param {object} event Event object\n@param {string} value Value\n@returns {undefined}",modifiers:[],params:[{name:"event",description:"Event object",type:{name:"object"},optional:!1},{name:"{ value }",optional:!1}],returns:{},description:"On change two handler"}],displayName:"Diff",props:{schema:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"objectOf",value:{name:"any"}},required:!1},getDiff:{description:"",type:{name:"func"},required:!0},getSchema:{description:"",type:{name:"func"},required:!0},getHistory:{description:"",type:{name:"func"},required:!0},error:{description:"",type:{name:"objectOf",value:{name:"any"}},required:!1},pathname:{description:"",type:{name:"string"},required:!0},one:{description:"",type:{name:"string"},required:!0},two:{description:"",type:{name:"string"},required:!0},view:{description:"",type:{name:"string"},required:!0},data:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{"@id":{name:"string",required:!1}}}},required:!0},historyEntries:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{version:{name:"number",required:!1},time:{name:"string",required:!1},actor:{name:"shape",value:{fullname:{name:"string",required:!1}},required:!1}}}},required:!0},title:{description:"",type:{name:"string"},required:!0},type:{description:"",type:{name:"string"},required:!0}}}},"./src/components/manage/Diff/DiffField.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var lodash_map__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/map.js"),lodash_map__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__),lodash_join__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/join.js"),lodash_join__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_join__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js"),react_dom_server__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/server.browser.js"),react_intl_redux__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/react-intl-redux@2.3.0_@babel+runtime@7.20.6_prop-types@15.7.2_react-intl@3.12.1_react@18.2.0_tgk6nn4hyyhqsgqquyp6ne3siq/node_modules/react-intl-redux/lib/index.js"),history__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../../node_modules/.pnpm/history@4.10.1/node_modules/history/esm/history.js"),connected_react_router__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../../node_modules/.pnpm/connected-react-router@6.8.0_history@4.10.1_immutable@3.8.2_react-redux@8.1.2_@types+react-do_j2nis7fptbvwh33skrc7vt6kli/node_modules/connected-react-router/esm/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.12_@types+react@18.2.27_react-dom@18.2.0_react@18.2.0__react@18.2.0_redux@4.2.1/node_modules/react-redux/es/index.js"),_plone_volto_registry__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/registry.js"),_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/helpers/index.js"),_plone_volto_store__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/store.js"),_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/index.js"),_plone_volto_slate_editor_render__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../volto-slate/src/editor/render.jsx"),_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/helpers/Loadable/Loadable.jsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_2__.createElement;const splitWords=str=>{if("string"!=typeof str)return str;if(!str)return[];const result=[];let currentWord="",insideTag=!1,insideSpecialTag=!1,tagBuffer="";const specialTags=["img","svg"];for(let i=0;i<str.length;i++){const char=str[i];if("<"===char)currentWord&&(result.push(currentWord),currentWord=""),insideTag=!0,tagBuffer+=char;else if(">"===char){tagBuffer+=char,insideTag=!1;const tagNameMatch=tagBuffer.match(/^<\/?([a-zA-Z]+[0-9]*)\b/);if(tagNameMatch&&specialTags.includes(tagNameMatch[1])){insideSpecialTag=tagNameMatch[0].startsWith("<")&&!tagNameMatch[0].startsWith("</"),result.push(tagBuffer),tagBuffer="";continue}result.push(tagBuffer),tagBuffer=""}else insideTag||insideSpecialTag?tagBuffer+=char:" "!==char||insideTag||insideSpecialTag?","===char&&i<str.length-1&&" "!==str[i+1]&&!insideTag&&!insideSpecialTag?(currentWord&&(result.push(currentWord+char),currentWord=""),result.push(" ")):currentWord+=char:(currentWord&&(result.push(currentWord),currentWord=""),result.push(" "))}return currentWord&&result.push(currentWord),tagBuffer&&result.push(tagBuffer),result},formatDiffPart=(part,value,side)=>/^<([a-zA-Z]+[0-9]*)\b[^>]*>|^<\/([a-zA-Z]+[0-9]*)\b[^>]*>$|^<([a-zA-Z]+[0-9]*)\b[^>]*\/>$/.test(value)?"unified"===side&&part.added?value:"unified"===side&&part.removed?"":part.removed&&"left"===side?value:part.removed?"":part.added&&"right"===side?value:part.added?"":value:!part.removed||"left"!==side&&"unified"!==side?part.removed?"":!part.added||"right"!==side&&"unified"!==side?part.added?"":value:`<span class="addition">${value}</span>`:`<span class="deletion">${value}</span>`,DiffField=({one:one,two:two,contentOne:contentOne,contentTwo:contentTwo,view:view,schema:schema,diffLib:diffLib})=>{var _config$widgets,_config$widgets$views,_config$widgets$views2;const language=(0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state=>state.intl.locale)),readable_date_format={dateStyle:"full",timeStyle:"short"},diffWords=(oneStr,twoStr)=>diffLib.diffArrays(splitWords(String(oneStr)),splitWords(String(twoStr)));let parts,oneArray,twoArray;if(schema.widget)switch(schema.widget){case"richtext":parts=diffWords(null==one?void 0:one.data,null==two?void 0:two.data);break;case"datetime":parts=diffWords(new Intl.DateTimeFormat(language,readable_date_format).format(new Date(one)).replace(" "," "),new Intl.DateTimeFormat(language,readable_date_format).format(new Date(two)).replace(" "," "));break;case"json":{const api=new _plone_volto_helpers__WEBPACK_IMPORTED_MODULE_7__.Sk,history=(0,history__WEBPACK_IMPORTED_MODULE_12__.iU)(),store=(0,_plone_volto_store__WEBPACK_IMPORTED_MODULE_8__.c)(window.__data,history,api);parts=diffWords(react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToStaticMarkup(__jsx(react_intl_redux__WEBPACK_IMPORTED_MODULE_4__.C_,{store:store},__jsx(connected_react_router__WEBPACK_IMPORTED_MODULE_13__.wE,{history:history},__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__.m6,{content:contentOne})))),react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToStaticMarkup(__jsx(react_intl_redux__WEBPACK_IMPORTED_MODULE_4__.C_,{store:store},__jsx(connected_react_router__WEBPACK_IMPORTED_MODULE_13__.wE,{history:history},__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_9__.m6,{content:contentTwo})))));break}case"slate":{const api=new _plone_volto_helpers__WEBPACK_IMPORTED_MODULE_7__.Sk,history=(0,history__WEBPACK_IMPORTED_MODULE_12__.iU)(),store=(0,_plone_volto_store__WEBPACK_IMPORTED_MODULE_8__.c)(window.__data,history,api);parts=diffWords(react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToStaticMarkup(__jsx(react_intl_redux__WEBPACK_IMPORTED_MODULE_4__.C_,{store:store},__jsx(connected_react_router__WEBPACK_IMPORTED_MODULE_13__.wE,{history:history},(0,_plone_volto_slate_editor_render__WEBPACK_IMPORTED_MODULE_10__.M7)(one)))),react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToStaticMarkup(__jsx(react_intl_redux__WEBPACK_IMPORTED_MODULE_4__.C_,{store:store},__jsx(connected_react_router__WEBPACK_IMPORTED_MODULE_13__.wE,{history:history},(0,_plone_volto_slate_editor_render__WEBPACK_IMPORTED_MODULE_10__.M7)(two)))));break}default:const Widget=null===(_config$widgets=_plone_volto_registry__WEBPACK_IMPORTED_MODULE_6__.default.widgets)||void 0===_config$widgets||null===(_config$widgets$views=_config$widgets.views)||void 0===_config$widgets$views||null===(_config$widgets$views2=_config$widgets$views.widget)||void 0===_config$widgets$views2?void 0:_config$widgets$views2[schema.widget];if(Widget){const api=new _plone_volto_helpers__WEBPACK_IMPORTED_MODULE_7__.Sk,history=(0,history__WEBPACK_IMPORTED_MODULE_12__.iU)(),store=(0,_plone_volto_store__WEBPACK_IMPORTED_MODULE_8__.c)(window.__data,history,api);parts=diffWords(react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToStaticMarkup(__jsx(react_intl_redux__WEBPACK_IMPORTED_MODULE_4__.C_,{store:store},__jsx(connected_react_router__WEBPACK_IMPORTED_MODULE_13__.wE,{history:history},__jsx(Widget,{value:one})))),react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToStaticMarkup(__jsx(react_intl_redux__WEBPACK_IMPORTED_MODULE_4__.C_,{store:store},__jsx(connected_react_router__WEBPACK_IMPORTED_MODULE_13__.wE,{history:history},__jsx(Widget,{value:two})))))}else parts=diffWords(one,two)}else"object"===schema.type?parts=diffWords((null==one?void 0:one.filename)||one,(null==two?void 0:two.filename)||two):"array"===schema.type?(oneArray=(one||[]).map((i=>(null==i?void 0:i.title)||i)),twoArray=(two||[]).map((j=>(null==j?void 0:j.title)||j)),parts=diffWords(oneArray,twoArray)):parts=diffWords((null==one?void 0:one.title)||one,(null==two?void 0:two.title)||two);return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c,{"data-testid":"DiffField"},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Column,{width:12},schema.title)),"split"===view&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Column,{width:6,verticalAlign:"top"},__jsx("span",{dangerouslySetInnerHTML:{__html:lodash_join__WEBPACK_IMPORTED_MODULE_1___default()(lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(parts,(part=>(part.value||[]).reduce(((acc,value)=>acc+formatDiffPart(part,value,"left")),""))),"")}})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Column,{width:6,verticalAlign:"top"},__jsx("span",{dangerouslySetInnerHTML:{__html:lodash_join__WEBPACK_IMPORTED_MODULE_1___default()(lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(parts,(part=>(part.value||[]).reduce(((acc,value)=>acc+formatDiffPart(part,value,"right")),""))),"")}}))),"unified"===view&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Column,{width:16,verticalAlign:"top"},__jsx("span",{dangerouslySetInnerHTML:{__html:lodash_join__WEBPACK_IMPORTED_MODULE_1___default()(lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(parts,(part=>(part.value||[]).reduce(((acc,value)=>acc+formatDiffPart(part,value,"unified")),""))),"")}}))))};__webpack_exports__.default=(0,_plone_volto_helpers_Loadable_Loadable__WEBPACK_IMPORTED_MODULE_11__.yM)("diffLib")(DiffField),DiffField.__docgenInfo={description:"Diff field component.\n@function DiffField\n@param {*} one Field one\n@param {*} two Field two\n@param {Object} schema Field schema\n@returns {string} Markup of the component.",methods:[],displayName:"DiffField",props:{one:{description:"",type:{name:"any"},required:!0},two:{description:"",type:{name:"any"},required:!0},contentOne:{description:"",type:{name:"any"},required:!1},contentTwo:{description:"",type:{name:"any"},required:!1},view:{description:"",type:{name:"string"},required:!0},schema:{description:"",type:{name:"shape",value:{widget:{name:"string",required:!1},type:{name:"string",required:!1},title:{name:"string",required:!1}}},required:!0}}}}}]);