(self.webpackChunkreact_star_wars=self.webpackChunkreact_star_wars||[]).push([[383],{"./src/components/UI/UiButton/UiButton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Disabled:()=>Disabled,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UiButton_stories});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);let UiButton_module={button:"UiButton_button__1Ld+z",dark:"UiButton_dark__534IG",light:"UiButton_light__AOCbT"};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let UiButton=_ref=>{let{text,onClick,disabled,theme="dark",classes}=_ref;return(0,jsx_runtime.jsx)("button",{onClick:onClick,disabled:disabled,className:classnames_default()("UiButton_button__1Ld+z",UiButton_module[theme],classes),children:text})};UiButton.__docgenInfo={description:"",methods:[],displayName:"UiButton",props:{theme:{defaultValue:{value:"'dark'",computed:!1},description:"",type:{name:"string"},required:!1},text:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},classes:{description:"",type:{name:"string"},required:!1}}};let UiButton_stories={title:"Ui-Kit/UiButton",component:UiButton},Template=args=>(0,jsx_runtime.jsx)(UiButton,{...args}),props={text:"Hello",onClick:()=>console.log("Button Click"),disabled:"false",theme:"dark",classes:""},Light=Template.bind({});Light.args={...props,theme:"light"};let Dark=Template.bind({});Dark.args={...props,theme:"dark"};let Disabled=Template.bind({});Disabled.args={...props,disabled:"true"},Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"args => <UiButton {...args} />",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"args => <UiButton {...args} />",...Dark.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <UiButton {...args} />",...Disabled.parameters?.docs?.source}}};let __namedExportsOrder=["Light","Dark","Disabled"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0!==(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return classNames}).apply(exports,[]))&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),m=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-UI-UiButton-UiButton-stories.2557ee8d.iframe.bundle.js.map