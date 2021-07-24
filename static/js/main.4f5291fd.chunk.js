(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1fTh0",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__1Ayqe"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2fZsc",Modal:"Modal_Modal__Cmmk1"}},23:function(e,t,a){e.exports={Button:"Button_Button__3q4kY"}},24:function(e,t,a){e.exports={Container:"Container_Container__3sGhQ"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2l0HX"}},27:function(e,t,a){e.exports={Notification:"Notification_Notification__3FVFB"}},32:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),i=(a(32),a(14)),l=a(4),s=a(5),u=a(7),h=a(6),d=a(11),m=a.n(d);m.a.defaults.baseURL="https://pixabay.com/api/";var g=function(e,t){return m.a.get("?q=".concat(e,"&page=").concat(t,"&key=").concat("20826556-19d7dce6dc96816ed1b7dccf7","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},b=a(23),f=a.n(b),p=a(0),j=function(e){var t=e.onClick;return Object(p.jsx)("button",{type:"button",onClick:t,className:f.a.Button,children:"Load more"})},y=a(24),_=a.n(y),O=function(e){var t=e.children;return Object(p.jsx)("div",{className:_.a.Container,children:t})},v=a(12),I=a.n(v),x=function(e){var t=e.webformatURL,a=e.tags,n=e.largeImageURL;return Object(p.jsx)("li",{className:I.a.ImageGalleryItem,children:Object(p.jsx)("img",{src:t,alt:a,"data-url":n,className:I.a.ImageGalleryItem__image})})},S=a(25),C=a.n(S),k=function(e){var t=e.images,a=e.onClick;return Object(p.jsx)("ul",{className:C.a.ImageGallery,onClick:a,children:t.map((function(e){var t=e.id,a=e.webformatURL,n=e.tags,r=e.largeImageURL;return Object(p.jsx)(x,{webformatURL:a,tags:n,largeImageURL:r},t)}))})},w=a(13),M=a.n(w),N=document.getElementById("modal-root"),L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).closeModalEsc=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModalEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModalEsc)}},{key:"render",value:function(){return Object(o.createPortal)(Object(p.jsx)("div",{className:M.a.Overlay,onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:M.a.Modal,children:this.props.children})}),N)}}]),a}(n.Component),G=a(26),q=a.n(G),B=function(){return Object(p.jsx)(q.a,{type:"Circles",color:"#3f51b5",height:100,width:100})},E=a(27),F=a.n(E),U=function(e){var t=e.message;return Object(p.jsx)("p",{className:F.a.Notification,children:t})},R=a(8),D=a.n(R),A=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleInputChange=function(t){var a=t.target.value;e.setState({query:a})},e.handleFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.setState({query:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(p.jsx)("header",{className:D.a.Searchbar,children:Object(p.jsxs)("form",{className:D.a.SearcForm,onSubmit:this.handleFormSubmit,children:[Object(p.jsx)("button",{type:"submit",className:D.a.button,children:Object(p.jsx)("span",{className:D.a.buttonLabel,children:"Search"})}),Object(p.jsx)("input",{className:D.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleInputChange,value:e})]})})}}]),a}(n.Component),H=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={page:1,query:"",images:[],error:"",loader:!1,showModal:!1,url:"",tag:""},e.fetchImages=function(){var t=e.state,a=t.query,n=t.page;return e.setState({loader:!0}),g(a,n).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),page:e.page+1,error:""}}))}))},e.handleOnButtonClick=function(){e.fetchImages().then((function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loader:!1})}))},e.handleFormData=function(t){var a=t.query;e.setState({page:1,query:a,images:[],error:""})},e.handleImageClick=function(t){var a=t.target;if("IMG"===a.nodeName){var n=a.dataset.url,r=a.alt;e.setState({url:n,tag:r,loader:!0}),e.toggleModal()}},e.toggleModal=function(){return e.setState((function(e){return{showModal:!e.showModal}}))},e.hideLoaderInModal=function(){return e.setState({loader:!1})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.query!==t.query&&this.fetchImages().catch((function(e){return a.setState({error:e})})).finally((function(){return a.setState({loader:!1})}))}},{key:"componentDidCatch",value:function(e){this.setState({error:e})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.error,n=e.loader,r=e.showModal,o=e.url,c=e.tag;return Object(p.jsxs)(O,{children:[r&&Object(p.jsxs)(L,{onClose:this.toggleModal,onClick:this.handleImageClick,children:[n&&Object(p.jsx)(B,{}),Object(p.jsx)("img",{src:o,alt:c,onLoad:this.hideLoaderInModal})]}),Object(p.jsx)(A,{onSubmit:this.handleFormData}),a&&Object(p.jsx)(U,{message:"Something wrong :("}),Object(p.jsx)(k,{images:t,onClick:this.handleImageClick}),n&&!r&&Object(p.jsx)(B,{}),!n&&t[0]&&Object(p.jsx)(j,{onClick:this.handleOnButtonClick})]})}}]),a}(n.Component);a(72),a(73);c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(H,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2b6sz",SearchForm:"Searchbar_SearchForm___rgUs",button:"Searchbar_button__1RLnH",buttonLabel:"Searchbar_buttonLabel__15QsQ",input:"Searchbar_input__1oE73"}}},[[74,1,2]]]);
//# sourceMappingURL=main.4f5291fd.chunk.js.map