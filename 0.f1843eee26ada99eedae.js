(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{MuAm:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=function(){},i=t("pMnS"),o=t("bujt"),a=t("UodH"),c=t("dWZg"),r=t("lLAP"),d=t("wFw1"),s=t("ZYCi"),g=t("Ip0R"),p=t("cyVl"),h=function(){function n(n,l){this.router=n,this.spinnerService=l,this.categories=[new m("fruits","Fruits & Veg","https://goo.gl/BUbbn1"),new m("meat","Meat","https://goo.gl/iYqPTy"),new m("dairy","Dairy & Eggs","https://goo.gl/Se4cDv")]}return n.prototype.ngOnInit=function(){this.currentUrl=this.router.url},n.prototype.onNavigate=function(n){this.router.navigate([this.currentUrl,n])},n.prototype.ngAfterViewInit=function(){var n=this;setTimeout(function(){n.spinnerService.spinnerOff()})},n}(),m=function(n,l,t){this.linkName=n,this.name=l,this.img=t},f=e.Na({encapsulation:0,styles:[["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{width:100%}body[_ngcontent-%COMP%]{font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;padding:0;margin:0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:700}a[_ngcontent-%COMP%]{color:#000}a[_ngcontent-%COMP%]:hover{text-decoration:none}.green-text[_ngcontent-%COMP%]{color:#5cb85c}.white-text[_ngcontent-%COMP%]{color:#fff}ul[_ngcontent-%COMP%]{list-style-type:none}.temp-border[_ngcontent-%COMP%]{border:thin solid}.modal-content[_ngcontent-%COMP%]{border:none;border-radius:0}.product-intro[_ngcontent-%COMP%]{width:100%;min-height:80vh}.header[_ngcontent-%COMP%]{width:100%;height:5rem;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#e8f5e9}.header[_ngcontent-%COMP%]   #header__title[_ngcontent-%COMP%]{color:#1b5e20;text-align:center;font-weight:500;font-size:2rem}.header2[_ngcontent-%COMP%]{padding-top:1rem;display:flex;align-items:center}.header2[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{width:30%}.header2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:400;font-size:1.25rem}.main-body[_ngcontent-%COMP%]{padding-top:2rem;width:100%;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:space-between}.category-card[_ngcontent-%COMP%]{margin-bottom:2rem;min-width:15rem;min-height:18rem;height:30vw}@media (max-width:575px){.header[_ngcontent-%COMP%]   #header__title[_ngcontent-%COMP%]{font-size:1.5rem}.category-card[_ngcontent-%COMP%]{min-width:10rem}}.category-card[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{height:80%;width:100%}.image-container[_ngcontent-%COMP%]{background-position:center;background-size:cover}.image-container[_ngcontent-%COMP%]:hover{opacity:.9;cursor:pointer}.category-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;height:20%;font-weight:400;background-color:#1b5e20;color:#fff;text-align:left;display:flex;align-items:center}.category-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1rem}"]],data:{}});function P(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,8,"div",[["class","category-card"]],null,null,null,null,null)),(n()(),e.Pa(1,0,null,null,0,"div",[["class","image-container"]],[[4,"backgroundImage",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onNavigate(n.context.$implicit.linkName)&&e),e},null,null)),(n()(),e.Pa(2,0,null,null,6,"a",[["mat-button",""]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null],[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Za(n,3)._haltDisabledEvents(t)&&u),"click"===l&&(u=!1!==e.Za(n,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},o.c,o.a)),e.Oa(3,180224,null,0,a.a,[c.a,r.c,e.k,[2,d.a]],null,null),e.Oa(4,671744,null,0,s.p,[s.m,s.a,g.j],{routerLink:[0,"routerLink"]},null),e.ab(5,2),(n()(),e.Pa(6,0,null,0,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),e.gb(-1,null,[" arrow_forward_ios "])),(n()(),e.gb(8,0,[" "," "]))],function(n,l){n(l,4,0,n(l,5,0,"/productPage",l.context.$implicit.linkName))},function(n,l){n(l,1,0,"url("+l.context.$implicit.img+")"),n(l,2,0,e.Za(l,3).disabled?-1:e.Za(l,3).tabIndex||0,e.Za(l,3).disabled||null,e.Za(l,3).disabled.toString(),"NoopAnimations"===e.Za(l,3)._animationMode,e.Za(l,4).target,e.Za(l,4).href),n(l,8,0,l.context.$implicit.name)})}function O(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,11,"div",[["class","product-intro"]],null,null,null,null,null)),(n()(),e.Pa(1,0,null,null,2,"div",[["class","header"]],null,null,null,null,null)),(n()(),e.Pa(2,0,null,null,1,"h1",[["id","header__title"]],null,null,null,null,null)),(n()(),e.gb(-1,null,[" Hello. Welcome to StoreName "])),(n()(),e.Pa(4,0,null,null,4,"div",[["class","header2"]],null,null,null,null,null)),(n()(),e.Pa(5,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),e.Pa(6,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.gb(-1,null,[" Aisles "])),(n()(),e.Pa(8,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),e.Pa(9,0,null,null,2,"div",[["class","container-fluid main-body"]],null,null,null,null,null)),(n()(),e.Ga(16777216,null,null,1,null,P)),e.Oa(11,278528,null,0,g.l,[e.O,e.L,e.q],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,11,0,l.component.categories)},null)}var C=e.La("app-product-intro",h,function(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,1,"app-product-intro",[],null,null,null,O,f)),e.Oa(1,4308992,null,0,h,[s.m,p.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),_=t("Knwb"),M=t("Q/Px"),b=t("nJhX"),v=(t("eUd/"),t("flj8")),y=t("2nlz"),w=(t("4Sfc"),t("Fodx")),x=function(){function n(n,l,t,e){this.accountService=n,this.modalService=l,this.productCardModal=t,this.itemsCatalogueService=e}return n.prototype.ngOnInit=function(){var n=this;this.user=this.accountService.user,this.addButtonDisplay=0!=this.item.quantity,this.itemsCatalogueService.quantityChangeEvent.subscribe(function(l){l.id===n.item.id&&(n.item=l)}),this.itemsCatalogueService.displayFlagEvent.subscribe(function(l){l.id===n.item.id&&(n.addButtonDisplay=l.flag)})},n.prototype.itemAdded=function(){this.addButtonDisplay=!this.addButtonDisplay,this.itemsCatalogueService.itemInitialAdd(this.item.id)},n.prototype.updateButtonDisplay=function(n){this.addButtonDisplay=n},n.prototype.openModal=function(){this.productCardModal.loadProduct(this.item),this.modalService.open(w.a,{size:"lg"})},n}(),k=t("iCtU"),S=e.Na({encapsulation:0,styles:[["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{width:100%}body[_ngcontent-%COMP%]{font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;padding:0;margin:0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:700}a[_ngcontent-%COMP%]{color:#000}a[_ngcontent-%COMP%]:hover{text-decoration:none}.green-text[_ngcontent-%COMP%]{color:#5cb85c}.white-text[_ngcontent-%COMP%]{color:#fff}ul[_ngcontent-%COMP%]{list-style-type:none}.temp-border[_ngcontent-%COMP%]{border:thin solid}.modal-content[_ngcontent-%COMP%]{border:none;border-radius:0}.product-card[_ngcontent-%COMP%]{margin:0 0 1rem;width:100%;height:75vw;min-height:30rem;max-height:35rem;display:flex;justify-content:center}.product-container[_ngcontent-%COMP%]{padding:.5rem .1rem;width:95%;height:100%;display:flex;flex-direction:column;justify-content:center}.image-container[_ngcontent-%COMP%]{height:60%;background-color:#e8f5e9;display:flex;flex-direction:column;justify-content:flex-end;align-items:center}.image-container[_ngcontent-%COMP%]:hover{cursor:pointer}.image-sizing[_ngcontent-%COMP%]{padding:0;height:55%;max-height:170px;width:auto}.product-container[_ngcontent-%COMP%]   #vertical-spacer[_ngcontent-%COMP%]{height:5%}.product-card-info[_ngcontent-%COMP%]{padding:.5rem 0;height:35%;display:flex;flex-direction:column;justify-content:space-between;text-align:center}.product-card-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-weight:500}.product-card-info[_ngcontent-%COMP%]   #product-card-specific-cost[_ngcontent-%COMP%]{font-size:1rem;font-weight:200;color:#81c784}.product-card-info[_ngcontent-%COMP%]   #product-card-cost[_ngcontent-%COMP%]{margin-top:.5rem;margin-bottom:.25rem}.product-card-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:10rem;height:36px;border:none;border-radius:0;background-color:#4caf50;font-weight:300!important}.product-card-info[_ngcontent-%COMP%]   .product-card-button[_ngcontent-%COMP%]{display:flex;justify-content:center;height:2rem}"]],data:{}});function I(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.itemAdded()&&e),e},null,null)),(n()(),e.gb(-1,null,[" Add to cart "]))],null,null)}function N(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e.Pa(1,0,null,null,1,"app-add-remove-button",[],null,null,null,_.b,_.a)),e.Oa(2,114688,null,0,M.a,[b.a],{item:[0,"item"]},null)],function(n,l){n(l,2,0,l.component.item)},null)}function A(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,18,"div",[["class","product-card"]],null,null,null,null,null)),(n()(),e.Pa(1,0,null,null,17,"div",[["class","product-container"]],null,null,null,null,null)),(n()(),e.Pa(2,0,null,null,1,"div",[["class","image-container"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.openModal()&&e),e},null,null)),(n()(),e.Pa(3,0,null,null,0,"img",[["class","img-responsive image-sizing"],["style","cursor:pointer"]],[[8,"src",4]],null,null,null,null)),(n()(),e.Pa(4,0,null,null,0,"span",[["id","vertical-spacer"]],null,null,null,null,null)),(n()(),e.Pa(5,0,null,null,13,"div",[["class","product-card-info"]],null,null,null,null,null)),(n()(),e.Pa(6,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.Pa(7,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.gb(8,null,[" "," "])),(n()(),e.Pa(9,0,null,null,1,"p",[["id","product-card-specific-cost"]],null,null,null,null,null)),(n()(),e.gb(10,null,[" ","$ /lbs "])),(n()(),e.Pa(11,0,null,null,7,"div",[],null,null,null,null,null)),(n()(),e.Pa(12,0,null,null,1,"p",[["id","product-card-cost"]],null,null,null,null,null)),(n()(),e.gb(13,null,[" ",""])),(n()(),e.Pa(14,0,null,null,4,"div",[["class","product-card-button"]],null,null,null,null,null)),(n()(),e.Ga(16777216,null,null,1,null,I)),e.Oa(16,16384,null,0,g.m,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.Ga(16777216,null,null,1,null,N)),e.Oa(18,16384,null,0,g.m,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,16,0,!t.addButtonDisplay),n(l,18,0,t.addButtonDisplay)},function(n,l){var t=l.component;n(l,3,0,e.Ra(1,"",t.item.itemImg,"")),n(l,8,0,t.item.itemName),n(l,10,0,t.item.specificCost),n(l,13,0,t.item.itemCost)})}var D=function(){function n(){this.elRefs=[]}return n.prototype.addElRef=function(n){this.elRefs.push(n),console.log(this.elRefs)},n.prototype.compareElRef=function(n){var l=this;if(this.elRefs===[])return this.addElRef(n),!0;this.elRefs.find(function(t){return t!==n&&(l.addElRef(n),!0)})},n}(),X=function(){function n(){this.productDrop=!0,this.displayFlag=!1}return n.prototype.ngOnInit=function(){},n.prototype.filterOptionsDisplay=function(){this.displayFlag=!this.displayFlag},n}(),F=e.Na({encapsulation:0,styles:[["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{width:100%}body[_ngcontent-%COMP%]{font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;padding:0;margin:0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:700}a[_ngcontent-%COMP%]{color:#000}a[_ngcontent-%COMP%]:hover{text-decoration:none}.green-text[_ngcontent-%COMP%]{color:#5cb85c}.white-text[_ngcontent-%COMP%]{color:#fff}ul[_ngcontent-%COMP%]{list-style-type:none}.temp-border[_ngcontent-%COMP%]{border:thin solid}.modal-content[_ngcontent-%COMP%]{border:none;border-radius:0}.filter[_ngcontent-%COMP%]{margin:0;padding:0;width:100%}.filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0;width:100%;position:relative}.filter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 1rem;display:flex;justify-content:space-between;align-items:baseline;cursor:pointer;font-weight:100}.filter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#5cb85c}.sort-container[_ngcontent-%COMP%]{position:absolute;width:inherit;background-color:#fff;z-index:10}.sort-options[_ngcontent-%COMP%]{background-color:#a4e1a1}.drop-down-child[_ngcontent-%COMP%]{padding:0 2rem;display:none}.drop-down-child[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0}.drop-down-child[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:active{color:#5cb85c}.animate_chevron[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.animate_chevron[_ngcontent-%COMP%]   .drop-down-child[_ngcontent-%COMP%]{display:inherit}.drop-down-child[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#4caf50}"]],data:{}});function L(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,33,"div",[["class","sort-container"]],null,null,null,null,null)),(n()(),e.Pa(1,0,null,null,9,"div",[["appAnimateDirective",""]],[[8,"className",0]],null,null,null,null)),(n()(),e.Pa(2,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),e.Pa(3,0,null,null,1,"span",[["class","filter-text"]],null,null,null,null,null)),(n()(),e.gb(-1,null,["Product Type"])),(n()(),e.Pa(5,0,null,null,0,"i",[["class","fa fa-chevron-right"]],null,null,null,null,null)),(n()(),e.Pa(6,0,null,null,4,"div",[["class","drop-down-child"]],null,null,null,null,null)),(n()(),e.Pa(7,0,null,null,1,"li",[["appFilterSelected",""],["data-category","'productType'"]],null,null,null,null,null)),(n()(),e.gb(-1,null,[" Citrus "])),(n()(),e.Pa(9,0,null,null,1,"li",[["appFilterSelected",""]],null,null,null,null,null)),(n()(),e.gb(-1,null,[" Berries "])),(n()(),e.Pa(11,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),e.Pa(12,0,null,null,8,"div",[["appAnimateDirective",""]],[[8,"className",0]],null,null,null,null)),(n()(),e.Pa(13,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),e.gb(-1,null,[" Dietery Needs "])),(n()(),e.Pa(15,0,null,null,0,"i",[["class","fa fa-chevron-right"]],null,null,null,null,null)),(n()(),e.Pa(16,0,null,null,4,"div",[["class","drop-down-child"]],null,null,null,null,null)),(n()(),e.Pa(17,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),e.gb(-1,null,[" Lactose Free "])),(n()(),e.Pa(19,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),e.gb(-1,null,[" Organic "])),(n()(),e.Pa(21,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),e.Pa(22,0,null,null,10,"div",[["appAnimateDirective",""]],[[8,"className",0]],null,null,null,null)),(n()(),e.Pa(23,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),e.gb(-1,null,[" Sort by "])),(n()(),e.Pa(25,0,null,null,0,"i",[["class","fa fa-chevron-right"]],null,null,null,null,null)),(n()(),e.Pa(26,0,null,null,6,"div",[["class","drop-down-child sort-options"]],null,null,null,null,null)),(n()(),e.Pa(27,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),e.gb(-1,null,[" Default "])),(n()(),e.Pa(29,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),e.gb(-1,null,[" Price - Low to High "])),(n()(),e.Pa(31,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),e.gb(-1,null,[" Price - High to Low "])),(n()(),e.Pa(33,0,null,null,0,"hr",[],null,null,null,null,null))],null,function(n,l){n(l,1,0,"animate_chevron"),n(l,12,0,"animate_chevron"),n(l,22,0,"animate_chevron")})}function H(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,11,"div",[["class","filter"]],null,null,null,null,null)),(n()(),e.Pa(1,0,null,null,10,"ul",[],null,null,null,null,null)),(n()(),e.Pa(2,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),e.Pa(3,0,null,null,5,"li",[["appAnimateDirective",""],["class","sort-toggler"],["style","padding-bottom: .5rem"]],[[8,"className",0]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.filterOptionsDisplay()&&e),e},null,null)),(n()(),e.Pa(4,0,null,null,0,"div",[["style","width: 20%"]],null,null,null,null,null)),(n()(),e.Pa(5,0,null,null,1,"div",[["style","width: 60%; text-align: center"]],null,null,null,null,null)),(n()(),e.gb(-1,null,[" Filter & Sort by "])),(n()(),e.Pa(7,0,null,null,1,"div",[["style","width: 20%; text-align: right"]],null,null,null,null,null)),(n()(),e.Pa(8,0,null,null,0,"i",[["class","fa fa-chevron-right"]],null,null,null,null,null)),(n()(),e.Pa(9,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),e.Ga(16777216,null,null,1,null,L)),e.Oa(11,16384,null,0,g.m,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,11,0,l.component.displayFlag)},function(n,l){n(l,3,0,"animate_chevron")})}var j=t("YOfp"),Z=t("fREI"),z=function(){function n(n,l,t,e,u,i){var o=this;this.itemsCatalogueService=n,this.modalService=l,this.dataStorageService=t,this.route=e,this.router=u,this.spinnerService=i,this.itemsCatalogue=[],this.itemsCatSubscription=this.itemsCatalogueService.itemsCatSubject.subscribe(function(n){o.itemsCatalogue=n}),this.newItemForm="newItemForm"}return n.prototype.ngOnInit=function(){this.getQueryData(),this.itemsCatalogueService.httpRequestFlag?this.getItems():this.itemsCatalogue=this.itemsCatalogueService.getItemsCatalogue()},n.prototype.getItems=function(){this.dataStorageService.getItemsCatalogue()},n.prototype.openFormModal=function(){this.modalService.open(j.a,{size:"lg",centered:!0})},n.prototype.onNavigateBack=function(){this.router.navigate(["../"],{relativeTo:this.route})},n.prototype.getQueryData=function(){var n=this;this.route.params.subscribe(function(l){n.categorySelected=l.id,console.log(n.categorySelected)})},n.prototype.ngAfterViewInit=function(){var n=this;setTimeout(function(){n.spinnerService.spinnerOff()})},n.prototype.ngOnDestroy=function(){this.itemsCatSubscription.unsubscribe()},n}(),B=e.Na({encapsulation:0,styles:[["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{width:100%}body[_ngcontent-%COMP%]{font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;padding:0;margin:0}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-family:Lato,'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:700}a[_ngcontent-%COMP%]{color:#000}a[_ngcontent-%COMP%]:hover{text-decoration:none}.green-text[_ngcontent-%COMP%]{color:#5cb85c}.white-text[_ngcontent-%COMP%]{color:#fff}ul[_ngcontent-%COMP%]{list-style-type:none}.temp-border[_ngcontent-%COMP%]{border:thin solid}.modal-content[_ngcontent-%COMP%]{border:none;border-radius:0}.product-main[_ngcontent-%COMP%]{width:100%;min-height:100vh;position:relative}@media (min-width:576px){.product-main[_ngcontent-%COMP%]{padding-left:1%;padding-right:1%}}@media (min-width:768px){.product-main[_ngcontent-%COMP%]{padding-left:1%;padding-right:1%}}@media (max-width:575px){.product-main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{padding:0}}.navigation-header[_ngcontent-%COMP%]{width:100%;padding:1rem 1rem 0}.filter-container[_ngcontent-%COMP%]{margin:0;padding:0;width:100%;background-color:#fff}.product-card-col[_ngcontent-%COMP%]{padding:0;position:relative}.product-card-container[_ngcontent-%COMP%]{margin:0;padding:0;width:100%;display:flex;flex-direction:row}.product-card[_ngcontent-%COMP%]{padding:0;width:50%}@media (min-width:576px){.product-card[_ngcontent-%COMP%]{width:50%}}@media (min-width:992px){.product-card[_ngcontent-%COMP%]{width:33.33%}}@media (min-width:1200px){.product-card[_ngcontent-%COMP%]{width:25%}}.create-item-container[_ngcontent-%COMP%]{margin-top:.5rem;width:90%;height:55%;min-height:278px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#81c784;cursor:pointer}.create-item-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:400}#plus-sign[_ngcontent-%COMP%]{font-size:2rem}"]],data:{}});function R(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,4,"div",[["class","product-card"]],null,null,null,null,null)),(n()(),e.Pa(1,0,null,null,3,"div",[["class","container create-item-container"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.openFormModal()&&e),e},null,null)),(n()(),e.Pa(2,0,null,null,0,"i",[["class","fa fa-plus"],["id","plus-sign"]],null,null,null,null,null)),(n()(),e.Pa(3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.gb(-1,null,[" Add new item "]))],null,null)}function q(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,1,"app-product-card",[["class","product-card"]],null,null,null,A,S)),e.Oa(1,114688,null,0,x,[v.a,k.a,y.a,b.a],{item:[0,"item"],itemIndex:[1,"itemIndex"]},null)],function(n,l){n(l,1,0,l.context.$implicit,l.context.index)},null)}function E(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,18,"div",[["class","container product-main"]],null,null,null,null,null)),(n()(),e.Pa(1,0,null,null,4,"div",[["class","row navigation-header"]],null,null,null,null,null)),(n()(),e.Pa(2,0,null,null,3,"a",[["mat-button",""]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var u=!0,i=n.component;return"click"===l&&(u=!1!==e.Za(n,3)._haltDisabledEvents(t)&&u),"click"===l&&(u=!1!==i.onNavigateBack()&&u),u},o.c,o.a)),e.Oa(3,180224,null,0,a.a,[c.a,r.c,e.k,[2,d.a]],null,null),(n()(),e.Pa(4,0,null,0,0,"i",[["class","fa fa-chevron-left"]],null,null,null,null,null)),(n()(),e.gb(-1,0,[" back to Aisles "])),(n()(),e.Pa(6,0,null,null,12,"div",[["class","row main-content"]],null,null,null,null,null)),(n()(),e.Pa(7,0,null,null,4,"div",[["class","col-12 col-md-3"]],null,null,null,null,null)),(n()(),e.Pa(8,0,null,null,3,"div",[["class","filter-container"],["style","width: 100%;"]],null,null,null,null,null)),(n()(),e.Pa(9,0,null,null,2,"app-sort-filter",[],null,null,null,H,F)),e.db(4608,null,D,D,[]),e.Oa(11,114688,null,0,X,[],null,null),(n()(),e.Pa(12,0,null,null,6,"div",[["class","col-12 col-md-9 product-card-col"]],null,null,null,null,null)),(n()(),e.Pa(13,0,null,null,5,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),e.Pa(14,0,null,null,4,"div",[["class","row product-card-container"]],null,null,null,null,null)),(n()(),e.Ga(16777216,null,null,1,null,R)),e.Oa(16,16384,null,0,g.m,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.Ga(16777216,null,null,1,null,q)),e.Oa(18,278528,null,0,g.l,[e.O,e.L,e.q],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,11,0),n(l,16,0,!1),n(l,18,0,t.itemsCatalogue)},function(n,l){n(l,2,0,e.Za(l,3).disabled?-1:e.Za(l,3).tabIndex||0,e.Za(l,3).disabled||null,e.Za(l,3).disabled.toString(),"NoopAnimations"===e.Za(l,3)._animationMode)})}var G=e.La("app-product-main",z,function(n){return e.ib(0,[(n()(),e.Pa(0,0,null,null,1,"app-product-main",[],null,null,null,E,B)),e.Oa(1,4440064,null,0,z,[b.a,k.a,Z.a,s.a,s.m,p.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),T=t("gIcY"),U=t("Wf4p"),$=t("Fzqc"),K=t("Blfk"),V=t("seP3"),Y=t("9It4"),W=t("/VYK"),J=t("b716"),Q=t("SMsm"),nn=t("atfC"),ln=t("mrSG"),tn=[{path:"",component:h},{path:":id",component:z}],en=function(){return Object(ln.b)([Object(e.t)({imports:[s.q.forChild(tn)],exports:[s.q]})],function(){})}();t.d(l,"ProductMainModuleNgFactory",function(){return un});var un=e.Ma(u,[],function(n){return e.Wa([e.Xa(512,e.j,e.Ba,[[8,[i.a,C,G]],[3,e.j],e.w]),e.Xa(4608,g.o,g.n,[e.s,[2,g.C]]),e.Xa(4608,T.s,T.s,[]),e.Xa(4608,U.b,U.b,[]),e.Xa(1073742336,g.c,g.c,[]),e.Xa(1073742336,T.p,T.p,[]),e.Xa(1073742336,T.e,T.e,[]),e.Xa(1073742336,$.a,$.a,[]),e.Xa(1073742336,U.j,U.j,[[2,U.c]]),e.Xa(1073742336,K.c,K.c,[]),e.Xa(1073742336,V.d,V.d,[]),e.Xa(1073742336,c.b,c.b,[]),e.Xa(1073742336,U.t,U.t,[]),e.Xa(1073742336,Y.c,Y.c,[]),e.Xa(1073742336,W.c,W.c,[]),e.Xa(1073742336,J.b,J.b,[]),e.Xa(1073742336,a.c,a.c,[]),e.Xa(1073742336,Q.b,Q.b,[]),e.Xa(1073742336,nn.a,nn.a,[]),e.Xa(1073742336,s.q,s.q,[[2,s.w],[2,s.m]]),e.Xa(1073742336,en,en,[]),e.Xa(1073742336,u,u,[]),e.Xa(1024,s.k,function(){return[[{path:"",component:h},{path:":id",component:z}]]},[])])})}}]);