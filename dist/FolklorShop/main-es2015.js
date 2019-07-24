(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"textOverImage\"\n     style=\"background-image:url(https://i.pinimg.com/originals/af/d5/a8/afd5a80dd05396d2639f8ddba4193df6.jpg)\"\n     data-text=\"Folklor Shop\n                is a unique workshop for making folk costumes. Serbian folk costume occupies a prominent place in the culture and tradition of the Serbian people. Her role through history is very important as a symbol of ethnic identity, and it is also emphasized in visual and aesthetic values. Folklor Shop is located in Novi Ledinci, a village near Novi Sad. For 10 years, he has successfully dealt with online selling folk costumes.\">\n</div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/aboutpage/aboutpage.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/aboutpage/aboutpage.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>About Folklor Shop</h2>\n\n<div class=\"textOverImage\"\n    style=\"background-image:url(https://i.pinimg.com/originals/af/d5/a8/afd5a80dd05396d2639f8ddba4193df6.jpg)\"\n    data-text=\"Folklor Shop\n               is a unique workshop for making folk costumes. Serbian folk costume occupies a prominent place in the culture and tradition of the Serbian people. Her role through history is very important as a symbol of ethnic identity, and it is also emphasized in visual and aesthetic values. Folklor Shop is located in Novi Ledinci, a village near Novi Sad. For 10 years, he has successfully dealt with online selling folk costumes.\">\n</div>\n\n<div>\n    <h5>\n         Here's what our products look like, from idea to end. Everything starts from the idea, through sewing, to the final exposure on the scene.\n     </h5>\n</div>\n\n<div id=\"grid1\">\n    <div class=\"thumbnails group\" >\n        <a href=\"assets/img/about0.jpg\" data-lightbox=\"gallery\" data-title=\"Everything starts from an idea.\"><img src=\"assets/img/about0-thumb.jpg\" alt=\"Image 1\"></a>\n        <a href=\"assets/img/about1.jpg\" data-lightbox=\"gallery\" data-title=\"Than we made a costume.\"><img src=\"assets/img/about1-thumb.jpg\" alt=\"Image 2\"></a>\n        <a href=\"assets/img/about2.jpg\" data-lightbox=\"gallery\" data-title=\"Trying clothes and finishing.\"><img src=\"assets/img/about2-thumb.jpg\" alt=\"Image 3\"></a>\n        <a href=\"assets/img/about4.jpg\" data-lightbox=\"gallery\" data-title=\"Final product on the scene.\"><img src=\"assets/img/about4-thumb.jpg\" alt=\"Image 4\"></a>\n    </div>\n</div>\n\n<div id=\"geo1\">\n    <h3 style=\"padding-bottom:20px;\">Location:</h3>\n    <app-geolocation></app-geolocation>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-blog/add-blog.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-blog/add-blog.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 >Add new blog:</h2>\n\n<div style=\"padding-bottom: 20px;\">\n    <a \n        style=\" margin-bottom:20px; color:#bd8200; font-family: cursive; font-weight: bold;\"\n        class=\"add-to-cart btn btn-warning  \" \n        routerLink='/blog'>Back\n        <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>\n    </a>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n            <form (ngSubmit)=\"addNewBlog(f.value)\" #f=\"ngForm\">\n                <div class=\"form-group div1\">\n                    <label for=\"title\">Title</label>\n                    <input  type=\"text\"\n                            class=\"form-control\"\n                            id=\"title\"\n                            ngModel\n                            required\n                            name=\"title\"\n                            #title=\"ngModel\">\n                    <div class=\"alert alert-danger col-md-12\"\n                         *ngIf=\"!title.valid && title.touched\">\n                          You must insert Title.\n                    </div>\n                </div>\n\n                <div class=\"form-group div1\">\n                    <label for=\"description\">Description</label>\n                    <input  type=\"text\"\n                            class=\"form-control\"\n                            id=\"description\"\n                            ngModel\n                            required\n                            name=\"description\"\n                            #description=\"ngModel\">\n                    <div class=\"alert alert-danger col-md-12\"\n                         *ngIf=\"!description.valid && description.touched\">\n                          You must insert a description.\n                    </div>\n                </div>\n\n                <div class=\"form-group div1\">\n                    <label for=\"date\">Date</label>\n                    <input  type=\"text\"\n                            class=\"form-control\"\n                            id=\"date\"\n                             ngModel\n                            required\n                            name=\"date\"\n                            #date=\"ngModel\">\n                    <div class=\"alert alert-danger col-md-12\"\n                            *ngIf=\"!date.valid && date.touched\">\n                            You must insert a date.\n                    </div>\n                </div>\n\n                <div class=\"form-group div1\">\n                    <label for=\"url\">Url</label>\n                    <input  type=\"text\" \n                            class=\"form-control\" \n                            id=\"url\" \n                            ngModel \n                            name=\"url\">\n                </div>\n\n                <button  type=\"submit\"\n                         class=\"btn btn-danger float-right\"\n                         style=\"color: black; font-weight: bold; font-family: cursive;\"\n                         [disabled]=\"!f.valid\">\n                         Add New Blog\n                </button>\n    \n            </form>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blog/blog.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blog/blog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n    <img src=\"assets/img/newpost.gif\" \n         style=\"height: 50px; width: 300px;\">\n</h2>\n\n<div>\n    <ng-template [ngIf]=\"autentifikacijaService.prijavljen()\">\n        <a \n            style=\"margin-left:20px; margin-bottom:20px; color:black\"\n            class=\"add-to-cart btn btn-danger\" \n            routerLink='/addblog'>\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n            Add New Blog\n        </a>\n    </ng-template>\n</div>\n\n<div *ngFor=\"let blog of bloglist; index as blogId\">\n        <div class=\"col-md-11 row\" \n             id=\"cart\"  >\n            <img class=\"cars-img-top\" \n                [src]=\"blog.url\" >\n            <div class=\"col-md-7\">\n                <div class=\"card-block \">\n                    <h5 class=\"card-title\">{{blog.title}}</h5>\n                    <p>{{blog.description}}</p>\n                    <p id=\"datep\">\n                        <em>{{blog.date}}</em>\n                    </p>\n                    <div id=\"editbtn\">\n                        <ng-template [ngIf]=\"autentifikacijaService.prijavljen()\">\n                            <a \n                                class=\"add-to-cart btn btn-warning\" \n                                [routerLink]=\"['/blog', blogId]\">\n                                <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                                Edit\n                            </a>\n                        </ng-template>\n                    </div>\n                    <p  id=\"bottomrow\" \n                        style=\"text-align: center;\">\n\n                        <a href=\"https://www.facebook.com/\">\n                            <i class=\"fa fa-facebook-square\" aria-hidden=\"true\" style=\"padding-right: 40px; color: #bd8200;\"></i>\n                        </a>\n\n                        <a href=\"https://twitter.com/twitter?lang=en\">\n                            <i class=\"fa fa-twitter-square\" style=\"padding-right: 40px; color: #bd8200;\" ></i>\n                        </a>\n\n                        <a href=\"https://www.instagram.com/\">\n                            <i class=\"fa fa-instagram\" aria-hidden=\"true\" style=\"padding-right: 40px; color: #bd8200;\"></i>\n                        </a>\n\n                        <a href=\"https://www.youtube.com/\">\n                            <i class=\"fa fa-youtube-play\" style=\"padding-right: 40px; color: #bd8200;\" ></i>\n                        </a>\n\n                        <a href=\"https://www.snapchat.com/\">\n                            <i class=\"fa fa-snapchat\" aria-hidden=\"true\" style=\"padding-right: 40px; color: #bd8200;\"></i>\n                        </a>\n                            <i class=\"fa fa-heart\" aria-hidden=\"true\" style=\"padding-right: 40px; color: #bd8200;\"></i>\n                    </p>\n                </div>\n            </div>\n        </div>\n</div>         \n            \n                    \n                    \n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/carousel/carousel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div >\n  <img id=\"sale\" src=\"assets/img/sale.gif\">\n  <img id=\"sale2\" src=\"assets/img/sale2.gif\">\n</div>\n\n<div id=\"bigdiv\" class=\"container py-3\" >\n        <div class=\"carousel slide\" data-ride=\"carousel\" id=\"multi_item\">\n          <div class=\"carousel-inner v-2\" role=\"listbox\">\n            <div class=\"carousel-item active\" >\n              <div class=\"row\">\n                <div class=\"col-12 col-md-4 item\">\n                  <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                    <img class=\"card-img-top\" src=\"./assets/img/nosnja/nosnja1.jpg\" alt=\"Sumadijski jelek\">\n                    <div class=\"card-body\">\n                      <h4 class=\"card-title\">Sumadijski jelek</h4>\n                      <a \n                          class=\"btn btn-warning\" \n                          [routerLink]=\"['/opis', 0]\">\n                          <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                          See details\n                      </a>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-12 col-md-4 item\">\n                    <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                        <img class=\"card-img-top\" src=\"./assets/img/nosnja/nosnja2.jpg\" alt=\"Libada\">\n                        <div class=\"card-body\">\n                          <h4 class=\"card-title\">Libada</h4>\n                          <a \n                              class=\"btn btn-warning\" \n                              [routerLink]=\"['/opis', 1]\">\n                              <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                              See details\n                          </a>\n                        </div>\n                      </div>\n                </div>\n                <div class=\"col-12 col-md-4 item\">\n                    <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                        <img class=\"card-img-top\" src=\"./assets/img/nosnja/rese1a.jpg\" alt=\"Vlaske rese\">\n                        <div class=\"card-body\">\n                          <h4 class=\"card-title\">Vlaske rese</h4>\n                          <a \n                              class=\"btn btn-warning\" \n                              [routerLink]=\"['/opis', 2]\">\n                              <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                              See details\n                          </a>\n                        </div>\n                    </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"carousel-item\">\n              <div class=\"row\">\n                <div class=\"col-12 col-md-4 item\">\n                    <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                        <img class=\"card-img-top\" src=\"./assets/img/nosnja/nosnja4.jpg\" alt=\"Kosulja\">\n                        <div class=\"card-body\">\n                          <h4 class=\"card-title\">Kosulja</h4>\n                          <a \n                              class=\"btn btn-warning\" \n                              [routerLink]=\"['/opis', 3]\">\n                              <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                              See details\n                          </a>\n                        </div>\n                      </div>\n                </div>\n                <div class=\"col-12 col-md-4 item\">\n                    <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                        <img class=\"card-img-top\" src=\"./assets/img/nosnja/kobisnica1aa.jpg\" alt=\"Oglavlje\">\n                        <div class=\"card-body\">\n                          <h4 class=\"card-title\">Oglavlje</h4>\n                          <a \n                              class=\"btn btn-warning\" \n                              [routerLink]=\"['/opis', 4]\">\n                              <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                              See details\n                          </a>\n                        </div>\n                      </div>\n                </div>\n                <div class=\"col-12 col-md-4 item\">\n                    <div class=\"card mb-2\" style=\"width:290px; height:410px;\">\n                        <img class=\"card-img-top\" src=\"./assets/img/nosnja/kosovo1c.jpg\" alt=\"Kosovski jelek\">\n                        <div class=\"card-body\">\n                          <h4 class=\"card-title\">Kosovski jelek </h4>\n                          <a \n                              class=\"btn btn-warning\" \n                              [routerLink]=\"['/opis', 5]\">\n                              <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                              See details\n                          </a>\n                        </div>\n                      </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--Controls-->\n          <div class=\"divcar\" >\n          <a class=\"carousel-control-prev\" href=\"#multi_item\" role=\"button\" data-slide=\"prev\">\n              <i class=\"fa fa-chevron-circle-left\"></i>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n        </div >\n        <div>\n            <a class=\"carousel-control-next\" href=\"#multi_item\" role=\"button\" data-slide=\"next\">\n                <i class=\"fa fa-chevron-circle-right\"></i>\n              <span class=\"sr-only\">Next</span>\n            </a>\n        </div>\n          \n            <!--Indicators-->\n          <div id=\"car-indicators\">\n              <ol class=\"carousel-indicators\">\n                <li data-target=\"#multi_item\" data-slide-to=\"0\" class=\"active\"></li>\n                <li data-target=\"#multi_item\" data-slide-to=\"1\"></li>\n              </ol>\n          </div>\n        </div>\n</div>\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/carouselpocetna/carouselpocetna.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/carouselpocetna/carouselpocetna.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"news\">\n  <img src=\"assets/img/breakingnews.gif\">\n</div>\n\n<h4>\n  Our products carry KUD \"Vinogradar\" from Ledinci. These are just some of the last concerts where they wore a costume from our Folk Shop. This looks like a costume on the scene.\n</h4>\n\n<!--Carousel Wrapper-->\n<div id=\"carousel-example-1z\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n      \n        <!--Slides-->\n        <div class=\"carousel-inner\" role=\"listbox\">\n          <!--First slide-->\n          <div class=\"carousel-item active\">\n            <img class=\"d-block \" src=\"./assets/img/naslovna11.jpg\"\n              alt=\"First slide\">\n              <div class=\"carousel-caption\" style=\"color: #ffa600;\">\n                  <h3 class=\"h3-responsive\">Gajdobra</h3>\n                  <p>jul 2019</p>\n              </div>\n          </div>\n          <!--/First slide-->\n          <!--Second slide-->\n          <div class=\"carousel-item\">\n            <img class=\"d-block \" src=\"./assets/img/naslovna12.jpg\"\n              alt=\"Second slide\">\n              <div class=\"carousel-caption\" style=\"color: #ffa600;\">\n                <h3 class=\"h3-responsive\">Vrdnik</h3>\n                <p>maj 2019</p>\n            </div>\n          </div>\n          <!--/Second slide-->\n          <!--Third slide-->\n          <div class=\"carousel-item\">\n            <img class=\"d-block \" src=\"./assets/img/naslovna13.jpg\"\n              alt=\"Third slide\">\n              <div class=\"carousel-caption\" style=\"color: #ffa600;\">\n                <h3 class=\"h3-responsive\">Adrani</h3>\n                <p>februar 2019</p>\n            </div>\n          </div>\n          <!--/Third slide-->\n          <!--Fourth slide-->\n          <div class=\"carousel-item\">\n            <img class=\"d-block \" src=\"./assets/img/naslovna14.jpg\"\n              alt=\"Fourth slide\">\n              <div class=\"carousel-caption\" style=\"color: #ffa600;\">\n                <h3 class=\"h3-responsive\">Ruma</h3>\n                <p>novembar 2018</p>\n            </div>\n          </div>\n          <!--/Fourth slide-->\n          <!--Fifth slide-->\n          <div class=\"carousel-item\">\n            <img class=\"d-block \" src=\"./assets/img/naslovna15.jpg\"\n              alt=\"Fifth slide\">\n              <div class=\"carousel-caption\" style=\"color: #ffa600;\">\n                <h3 class=\"h3-responsive\">Futog</h3>\n                <p>jun 2018</p>\n            </div>\n          </div>\n          <!--/Fifth slide-->\n        </div>\n        <!--/.Slides-->\n        <!--Controls-->\n        <div class=\"divcar\">\n          <a class=\"carousel-control-prev\" href=\"#carousel-example-1z\" role=\"button\" data-slide=\"prev\">\n            <i class=\"fa fa-chevron-circle-left\"></i>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n        </div>\n       <div class=\"divcar\">\n        <a class=\"carousel-control-next\" href=\"#carousel-example-1z\" role=\"button\" data-slide=\"next\">\n          <i class=\"fa fa-chevron-circle-right\"></i>\n          <span class=\"sr-only\">Next</span>\n        </a>\n       </div>\n          <!--Indicators-->\n          <div id=\"car-indicators\">\n            <ol class=\"carousel-indicators\">\n              <li data-target=\"#carousel-example-1z\" data-slide-to=\"0\" class=\"active\"></li>\n              <li data-target=\"#carousel-example-1z\" data-slide-to=\"1\"></li>\n              <li data-target=\"#carousel-example-1z\" data-slide-to=\"2\"></li>\n              <li data-target=\"#carousel-example-1z\" data-slide-to=\"3\"></li>\n              <li data-target=\"#carousel-example-1z\" data-slide-to=\"4\"></li>\n            </ol>\n          </div>\n          \n          <!--/.Indicators-->\n        <!--/.Controls-->\n</div>\n<!--/.Carousel Wrapper-->\n\n      "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contact1\" >\n    <h3>Contact</h3>\n    <p id=\"p11\"><i class=\"fa fa-address-card\" ></i>Narodne Vojske 24</p>\n    <p id=\"p11\"><i class=\"fa fa-home\" ></i>21 207 Novi Ledinci</p>\n    <p id=\"p11\"><i class=\"fa fa-envelope\" ></i>aleksandar.alimpijevic@yahoo.com</p>\n    <p id=\"p11\"><i class=\"fa fa-phone\" ></i>+381 21/2986 572</p>\n    \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-blog/edit-blog.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-blog/edit-blog.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Edit blog</h2>\n\n<div >\n    <a \n        style=\"margin-left:80px; margin-bottom:20px; \"\n        class=\"add-to-cart btn btn-warning\" \n        routerLink='/blog'>\n        <i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\"></i>\n        Back to blogs\n    </a>\n</div>\n\n<div class=\"row col-md-10\">\n    <div class=\"col-md-12\" >\n        <form id=\"div2\" #f=\"ngForm\" (ngSubmit)=\"save(f.value)\" *ngIf=\"blog\">\n                <div class=\"form-group\" >\n                        <label for=\"title\">Title</label>\n                        <input \n                        ngModel \n                        required\n                        #title=\"ngModel\"\n                        name=\"title\" \n                        id=\"title\" \n                        type=\"text\" \n                        class=\"form-control\"\n                        [(ngModel)]=\"blog.title\" >\n                        <div \n                            class=\"alert alert-danger\" \n                            *ngIf=\"title.touched && title.invalid\">\n                            Title is required.\n                        </div>\n                </div>\n\n                <div class=\"form-group\" >\n                        <label for=\"description\">Description</label>\n                        <textarea \n                        ngModel \n                        required\n                        #description=\"ngModel\"\n                        name=\"description\" \n                        id=\"description\" \n                        type=\"text\" \n                        class=\"form-control\"\n                        [(ngModel)]=\"blog.description\" ></textarea>\n                        <div \n                            class=\"alert alert-danger\" \n                            *ngIf=\"description.touched && description.invalid\">\n                            Description is required.\n                        </div>\n                </div>\n\n                <div class=\"form-group\" >\n                        <label for=\"Date\">Date</label>\n                        <input\n                        ngModel \n                        required\n                        #date=\"ngModel\"\n                        name=\"date\" \n                        id=\"date\" \n                        type=\"text\" \n                        class=\"form-control\"\n                        [(ngModel)]=\"blog.date\" >\n                        <div \n                            class=\"alert alert-danger\" \n                            *ngIf=\"date.touched && date.invalid\">\n                            Date is required.\n                        </div>\n                </div>\n\n                <div class=\"form-group\">\n                        <label for=\"imageUrl\">Image URL</label>\n                        <input \n                        ngModel \n                        required\n                        #imageUrl=\"ngModel\"\n                        name=\"imageUrl\" \n                        id=\"imageUrl\" \n                        type=\"text\" \n                        class=\"form-control\"\n                        [(ngModel)]=\"blog.url\">\n                </div>\n\n                <div class=\"alert alert-danger\" \n                     *ngIf=\"imageUrl.touched && imageUrl.invalid\">\n                     <div *ngIf=\"imageUrl.errors.required\">\n                        Image URL is required.\n                    </div>         \n                </div>\n\n                <img [src]=\"blog.url\" style=\"height: 200px; width: auto; margin-left: 80px; margin-right: 80px;\">\n                <div style=\"margin: 20px; text-align: center;\">\n                    <button  [disabled]=\"!f.valid\" \n                             class=\"btn btn-warning btn-block \" \n                             style=\"font-family: cursive; color:black; text-align: center;\">\n                             Save\n                    </button>\n                </div>    \n        </form>\n    </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/folklorshoppocetna/folklorshoppocetna.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/folklorshoppocetna/folklorshoppocetna.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\" \n     style=\"background-color: white\">\n    <h1> Welcome to {{ title }}!</h1>\n    <img style=\"padding-bottom: 10px;\" alt=\"Logo folklor shop\" src=\"assets/img/naslovna1.png\">\n    <img style=\"padding-bottom: 10px;\" alt=\"Logo folklor shop\" src=\"assets/img/naslovna2.png\">\n    <p id=\"p1\">\n        Welcome to the Folklore Store, a unique place where you will find everything you need for folklore from equipment to folk costumes.\n    </p>\n    <hr class=\"my-4\">\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/form/form.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/form/form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"divForm\" >\n        <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(); userForm.reset()\" novalidate >\n            <fieldset style=\"border: 2px solid black;\">\n            <h3 style=\"text-align: center;\"><b>Customer comment:</b></h3>\n            <div>\n                <div class=\"form-group\">\n                        <i class=\"fa fa-user\" ></i>\n                        <label class=\" col-md-6\"for=\"firstName\">Name:</label>\n                        <input  id=\"firstName\" \n                                type=\"text\"  \n                                class=\"form-control col-md-12 \"\n                                ngModel\n                                #nameRef=\"ngModel\"\n                                required\n                                minlength=\"3\"\n                                name=\"firstName\"\n                                placeholder=\"Marko Markovic\">\n                    <div *ngIf=\"nameRef.errors && (nameRef.dirty || nameRef.touched)\" class=\"alert alert-danger col-md-12\">\n                        <div [hidden]=\"!nameRef.errors.required\">Please enter a name.</div>\n                        <div [hidden]=\"!nameRef.errors.minlength\">Please enter at least 3 characters.</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <i class=\"fa fa-phone\"></i>\n                    <label class=\"control-label col-md-6\" for=\"phone\">Phone:</label>\n                    <input  id=\"phone\" \n                            type=\"text\" \n                            class=\"form-control col-md-12\" \n                            ngModel\n                            #phoneRef=\"ngModel\"\n                            required\n                            name=\"phone\"\n                            placeholder=\"+ (123) 456-7890\"\n                            [textMask]=\"{mask: phoneMask}\">\n                     <div *ngIf=\"phoneRef.errors && (phoneRef.dirty || phoneRef.touched)\" class=\"alert alert-danger col-md-12\">\n                        <div [hidden]=\"!phoneRef.errors.required\">Please enter phone number in this form.</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <i class=\"fa fa-envelope\" ></i>\n                    <label class=\"control-label col-md-6\" for=\"email\">Email:</label>\n                    <input  id=\"email\" \n                            type=\"email\" \n                            class=\"form-control col-md-12\" \n                            ngModel\n                            #emailRef=\"ngModel\"\n                            required\n                            email\n                            name=\"email\"\n                            placeholder=\"aleksandar@gmail.com\">\n                    <div *ngIf=\"emailRef.errors && (emailRef.dirty ||emailRef.touched)\" class=\"alert alert-danger col-md-12\">\n                        <div [hidden]=\"!emailRef.errors.required\">Please enter your email.</div>\n                        <div [hidden]=\"!emailRef.errors.email\">Please enter valid email.</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                        <i class=\"fa fa-home\" ></i>\n                        <label class=\"control-label col-md-6\" for=\"address\">Address:</label>\n                    <input  id=\"address\" \n                            type=\"text\" \n                            class=\"form-control col-md-12\"\n                            ngModel\n                            #addressRef=\"ngModel\"\n                            required\n                            minlength=\"5\"\n                            name=\"address\"\n                            placeholder=\"Bulevar Oslobodjenja 16\">\n                     <div *ngIf=\"addressRef.errors && (addressRef.dirty ||addressRef.touched)\" class=\"alert alert-danger col-md-12\">\n                        <div [hidden]=\"!addressRef.errors.required\">Please enter your address.</div>\n                        <div [hidden]=\"!addressRef.errors.minlength\">Address must have at least 5 characters.</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <i class=\"fa fa-book\" ></i>\n                    <label class=\"control-label col-md-6\" for=\"subject\">Subject:</label>\n                    <input  id=\"subject\" \n                            type=\"text\" \n                            ngModel\n                            #subjectRef=\"ngModel\"\n                            required\n                            class=\"form-control col-md-12\" \n                            name=\"subject\"\n                            placeholder=\"Order number 1\">\n                    <div *ngIf=\"subjectRef.errors && (subjectRef.dirty ||subjectRef.touched)\" class=\"alert alert-danger col-md-12\">\n                        <div [hidden]=\"!subjectRef.errors.required\">Please enter name of your order.</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <i class=\"fa fa-pencil\" ></i>\n                    <label class=\"control-label col-md-6\"  for=\"comment\">Comment:</label>\n                    <textarea   name=\"comment\" \n                                id=\"comment\" \n                                cols=\"25\" \n                                rows=\"6\"\n                                wrap=\"soft\"\n                                class=\"form-control col-md-12\" \n                                placeholder=\"Your text here...\" >\n                    </textarea>\n                </div>\n                \n                <button type=\"submit\" \n                        id=\"btnAlert\"\n                        class=\"btn btn-danger\"\n                        [disabled]=\"!userForm.form.valid\">\n                        Submit\n                </button>\n            </div>\n        </fieldset>\n    </form>    \n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gallerypage/gallerypage.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gallerypage/gallerypage.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"grid1\">\n        <h3> Our costumes for dancers and on stage.</h3> \n        <div class=\"thumbnails group\" >\n            <a href=\"assets/img/Slika1.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Banat\"><img src=\"assets/img/Slika1-thumb.jpg\" alt=\"Image 1\"></a>\n            <a href=\"assets/img/Slika2.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Bac\"><img src=\"assets/img/Slika2-thumb.jpg\" alt=\"Image 2\"></a>\n            <a href=\"assets/img/Slika15.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Belgrade\"><img src=\"assets/img/Slika15-thumb.jpg\" alt=\"Image 3\"></a>\n            <a href=\"assets/img/Slika4.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Prizren\"><img src=\"assets/img/Slika4-thumb.jpg\" alt=\"Image 4\"></a>\n            <a href=\"assets/img/Slika5.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Vranje\"><img src=\"assets/img/Slika5-thumb.jpg\" alt=\"Image 5\"></a>\n            <a href=\"assets/img/Slika6.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Kumanovsko polje\"><img src=\"assets/img/Slika6-thumb.jpg\" alt=\"Image 6\"></a>\n            <a href=\"assets/img/Slika7.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Sabac region\"><img src=\"assets/img/Slika7-thumb.jpg\" alt=\"Image 7\"></a>\n            <a href=\"assets/img/gallery1.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Kumanovsko polje\"><img src=\"assets/img/gallery1-thumb.jpg\" alt=\"Image 8\"></a>\n            <a href=\"assets/img/gallery2.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Nis\"><img src=\"assets/img/gallery2-thumb.jpg\" alt=\"Image 1\"></a>\n            <a href=\"assets/img/gallery3.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Srem\"><img src=\"assets/img/gallery3-thumb.jpg\" alt=\"Image 2\"></a>\n            <a href=\"assets/img/gallery4.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Bac\"><img src=\"assets/img/gallery4-thumb.jpg\" alt=\"Image 3\"></a>\n            <a href=\"assets/img/gallery5.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Sarajevsko polje\"><img src=\"assets/img/gallery5-thumb.jpg\" alt=\"Image 4\"></a>\n            <a href=\"assets/img/gallery6.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Bosilegradsko krajiste\"><img src=\"assets/img/gallery6-thumb.jpg\" alt=\"Image 5\"></a>\n            <a href=\"assets/img/gallery7.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Kalajdzijsko oro\"><img src=\"assets/img/gallery7-thumb.jpg\" alt=\"Image 6\"></a>\n            <a href=\"assets/img/gallery8.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Kosovsko pomoravlje\"><img src=\"assets/img/gallery8-thumb.jpg\" alt=\"Image 7\"></a>\n            <a href=\"assets/img/Slika9.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Banat\"><img src=\"assets/img/Slika9-thumb.jpg\" alt=\"Image 8\"></a>\n        </div>\n</div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/geolocation/geolocation.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/geolocation/geolocation.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"geo1\">\n    <agm-map \n        [latitude]=\"latitude\" \n        [longitude]=\"longitude\" \n        (mapClick)=\"onChoseLocation($event)\" >\n            <agm-marker \n                [latitude]=\"latitude\" \n                [longitude]=\"longitude\">\n            </agm-marker>\n    </agm-map>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/jumbotron/jumbotron.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/jumbotron/jumbotron.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\" style=\"background-color: white\">\n        <h1> {{ title }}!</h1>\n        <img width=\"auto\" height=\"250\" style=\"padding-bottom: 10px;\" alt=\"Logo folklor shop\" src=\"assets/img/naslovnica0.png\">\n        <img width=\"auto\" height=\"250\" style=\"padding-bottom: 10px;\" alt=\"Logo folklor shop\" src=\"assets/img/naslovnica.png\">\n        <img width=\"auto\" height=\"250\" style=\"padding-bottom: 10px;\" alt=\"Logo folklor shop\" src=\"assets/img/naslovnica2.png\">\n        <p id=\"p1\">\n                 At this place you will find reconstructed pieces of folk costumes. For you we have prepared a rich assortment of folk costumes as well as training exercises. Enjoy shopping!\n        </p>\n        <hr >    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/korpa/korpa.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/korpa/korpa.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Shooping Cart</h1>\n\n<div id=\"tableDIV\">\n    <a  class=\"add-to-cart btn btn-warning\" \n        routerLink='/shopp'\n        style= \"color:#bd8200; \n                font-weight: bold; \n                margin-bottom: 10px;\n                font-family: cursive;\">\n        <i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\"></i>\n        Back to Shop\n    </a>\n    <a  class=\"btn btn-danger\"  \n        style= \"color: black; \n                font-weight: bold;\n                margin-left: 20px; \n                margin-bottom: 10px;\n                font-family: cursive;\n                cursor: pointer;\"\n        (click)=\"isprazniKorpu(proizvod)\">\n        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n        Clear cart\n    </a>\n    <table class=\"table table-collapse col-md-10  table-warning table-bordered table-hover \" >\n        <thead>\n            <tr>\n                <td></td>\n                <td>Products</td>\n                <td>Price</td>\n                <td>Quantity</td>\n                <td>Total</td>\n            </tr>\n        </thead>\n        <tbody *ngFor=\"let proizvod of korpa\" >\n            <tr>\n                <td><img class=\"cars-img-top align-middle\" [src]=\"proizvod.url\" style=\"height:80px ; width: auto ;\"></td>\n                <td class=\"align-middle\" style=\"text-align: left;\">{{proizvod.name}}</td>\n                <td class=\"align-middle\">{{proizvod.price}}</td>\n                <td class=\"align-middle\">{{brojStavki()}}</td>\n                <td class=\"align-middle\"></td>\n            </tr>\n        </tbody>\n        <tfoot>\n            <tr>\n                <td colspan=\"5\">\n                    <div style=\" float: right; \">\n                        <a \n                        class=\"btn btn-warning\"  \n                        style=\n                            \"   color: black; \n                                font-weight: bold;\n                                margin-left: 20px; \n                                font-family: cursive;\n                                font-size: 16px;\n                                cursor: pointer;\n                                \"\n                        (click)=\"izvrsiKupovinu()\">\n                        <i class=\"fa fa-shopping-cart\" style=\"font-size:16px; color: black; \"></i>\n                        Kupi\n                        </a>\n                    </div>\n                </td>\n            </tr>\n        </tfoot>\n    </table>\n</div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<nav class=\"navbar navbar-expand-lg  bg-warning \"  >\n    \n    <a class=\"navbar-brand\" routerLink=\"/\">{{appName}}</a>\n    <button class=\"navbar-toggler navbar-light\"  type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\" ></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\"  id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n          \n          <li class=\"nav-item \" >\n              <a class=\"nav-link\" routerLink=\"/pocetna\" routerLinkActive=\"active\">Home </a>\n          </li>\n\n          <li class=\"nav-item \"  >\n            <a class=\"nav-link\" routerLink=\"/blog\" routerLinkActive=\"active\">Blog </a>\n          </li>\n      \n          <li class=\"nav-item\" >\n              <a class=\"nav-link\" routerLink='/about' routerLinkActive=\"active\">About</a>\n          </li>\n\n          <li class=\"nav-item\" >\n              <a class=\"nav-link\" routerLink='/gallery' routerLinkActive=\"active\">Gallery</a>\n          </li>\n\n          \n          <li class=\"nav-item\"  >\n            <a class=\"nav-link\" routerLink=\"/shopp\" routerLinkActive=\"active\" >Shop</a>\n          </li>\n\n          <ng-template [ngIf]=\"autentifikacijaService.prijavljen()\">\n            <a class=\"nav-link\"  routerLink='/korpa' routerLinkActive=\"active\">\n              <i class=\"fa fa-shopping-cart\" style=\"font-size:24px; padding-right: 5px; \"></i>Cart<i  id=\"cart_n\"></i>\n            </a> \n          </ng-template>\n        \n      </ul>\n    \n      \n      <form class=\"form-inline my-2 my-lg-0\">\n\n          <a href=\"https://www.facebook.com/\" >\n            <i class=\"fa fa-facebook\" style=\"font-size:20px; padding-right: 20px; \"></i>\n          </a>\n\n          <a href=\"https://twitter.com/twitter?lang=en\" >\n            <i class=\"fa fa-twitter\" style=\"font-size:20px; padding-right: 20px; \"></i>\n          </a>\n\n          <a href=\"https://www.instagram.com/\" >\n            <i class=\"fa fa-instagram\" style=\"font-size:20px; padding-right: 20px; \"></i>\n          </a>\n\n          <ng-template [ngIf]=\"!autentifikacijaService.prijavljen()\">\n                <a class=\"nav-link\" routerLink='/signin' routerLinkActive=\"active\">\n                  <i class=\"fa fa-user\" style=\"font-size:24px; padding-right: 5px; \"></i>Registration\n                </a>\n                <a class=\"nav-link\" routerLink='/signup' routerLinkActive=\"active\">\n                  <i class=\"fa fa-user\" style=\"font-size:24px; padding-right: 5px; \"></i>Login\n                </a>  \n           </ng-template>\n\n                \n            <ng-template [ngIf]=\"autentifikacijaService.prijavljen()\">\n                <a class=\"nav-link\" style=\"cursor: pointer;\" (click)=\"odjaviSe()\"   >\n                    <i class=\"fa fa-user\" style=\"font-size:24px; padding-right: 5px; cursor: pointer; color: blue;\"></i>Log out\n                  </a> \n            </ng-template>\n    \n      </form>\n    </div>\n</nav>\n\n\n\n \n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/opis-proizvoda/opis-proizvoda.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/opis-proizvoda/opis-proizvoda.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Product Details</h1>\n<div class=\"container\">\n  <div class=\"row\">\n    <div *ngIf=\"proizvod\">\n      <div class=\"col-md-12\">\n          <div class=\"card \">\n              <div id=\"grid1\" >\n                    <div class=\"thumbnails group\" >\n                        <a [href]=\"proizvod.url1\" data-lightbox=\"gallery\"><img [src]=\"proizvod.url1\" alt=\"Image 1\"></a>\n                        <a [href]=\"proizvod.url2\" data-lightbox=\"gallery\"><img [src]=\"proizvod.url2\" alt=\"Image 2\"></a>\n                        <a [href]=\"proizvod.url3\" data-lightbox=\"gallery\"><img [src]=\"proizvod.url3\" alt=\"Image 3\"></a>\n                        <a [href]=\"proizvod.url4\" data-lightbox=\"gallery\"><img [src]=\"proizvod.url4\" alt=\"Image 4\"></a>\n                    </div>\n              </div>\n              <div class=\"card-block \">\n                  <h4 class=\"card-title\">{{proizvod.name}}</h4>\n                  <p \n                      class=\"card-text col-md-3\" \n                      style=\n                          \"font-size: 25px; \n                          color: #c94000; \n                          font-weight: bold; \n                          border: 2px solid #c94000; \n                          background-color: #f1a684;\">\n                      <em>Price: €{{proizvod.price}}</em>\n                  </p>\n                  <p class=\"card-text\" *ngIf=\"proizvod.description\">Description: {{proizvod.description}}</p>\n                  <ng-template [ngIf]=\"autentifikacijaService.prijavljen()\">\n                    <a class=\"add-to-cart btn btn-danger\"\n                        style=\n                          \"color: black; \n                          font-weight: bold;\n                          margin-right: 20px;\"\n                        routerLink=\"/korpa\"\n                        (click)=\"staviUKorpu(proizvod)\">\n                        <i class=\"fa fa-shopping-cart\" style=\"font-size:16px; color: black; \"></i>\n                        Buy Product\n                    </a>\n                  </ng-template>\n                  <a \n                    class=\"add-to-cart btn btn-warning\" \n                    routerLink='/shopp'\n                    style=\"color:#bd8200; font-weight: bold;; margin-right: 10px;\">\n                    <i class=\"fa fa-arrow-circle-o-left\" aria-hidden=\"true\"></i>\n                    Back to Shop\n                </a>\n                </div>\n             \n    </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/photogallery/photogallery.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/photogallery/photogallery.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"grid1\">\n    <div class=\"thumbnails group\" >\n        <a href=\"assets/img/Slika1.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Banat\"><img src=\"assets/img/Slika1-thumb.jpg\" alt=\"Image 1\"></a>\n        <a href=\"assets/img/Slika2.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Bac\"><img src=\"assets/img/Slika2-thumb.jpg\" alt=\"Image 2\"></a>\n        <a href=\"assets/img/Slika15.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Belgrade\"><img src=\"assets/img/Slika15-thumb.jpg\" alt=\"Image 3\"></a>\n        <a href=\"assets/img/Slika4.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Prizren\"><img src=\"assets/img/Slika4-thumb.jpg\" alt=\"Image 4\"></a>\n        <a href=\"assets/img/Slika5.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Vranje\"><img src=\"assets/img/Slika5-thumb.jpg\" alt=\"Image 5\"></a>\n        <a href=\"assets/img/Slika6.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Kumanovsko polje\"><img src=\"assets/img/Slika6-thumb.jpg\" alt=\"Image 6\"></a>\n        <a href=\"assets/img/Slika7.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Sabac region\"><img src=\"assets/img/Slika7-thumb.jpg\" alt=\"Image 7\"></a>\n        <a href=\"assets/img/Slika9.jpg\" data-lightbox=\"gallery\" data-title=\"Folk costume from Srem\"><img src=\"assets/img/Slika9-thumb.jpg\" alt=\"Image 8\"></a>\n    </div>\n    <div id=\"ShowMore\">\n        <a \n           \n            class=\"btn btn-warning\" \n            routerLink='/gallery'\n            style=\"color:#bd8200; font-weight: bold;; font-family: cursive;\">\n            Show more\n            <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i>\n        </a>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pocetna/pocetna.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pocetna/pocetna.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-jumbotron></app-jumbotron>\n<app-carousel></app-carousel>\n<app-carouselpocetna></app-carouselpocetna>\n<app-videofile></app-videofile>\n<app-photogallery></app-photogallery>\n<app-about></app-about>\n<div id=\"div0\">\n    <table>\n        <tr>\n            <td><app-contact></app-contact></td>\n            <td>   </td>\n            <td><app-form></app-form></td>\n        </tr>\n        <tr> </tr>\n    </table>\n</div>\n<div id=\"div1\">\n    <app-geolocation></app-geolocation>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shop/shop.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shop/shop.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>List of products</h1>\n\n<div class=\"row p-4\">\n    <div *ngFor=\"let proizvod of proizvodi; index as proizvodId\">\n       <div class=\"col-md-6\">\n           <div class=\"card\" style=\"width: 20rem\">\n                <img class=\"cars-img-top\" [src]=\"proizvod.url\" >\n                <div class=\"card-block\">\n                    <h5 class=\"card-title\">{{proizvod.name}}</h5>\n                    <p class=\"card-text\" style=\"font-size: 30px; font-weight: bold;\">€{{proizvod.price}}</p>\n                    <a  class=\"add-to-cart btn btn-warning\" \n                        [routerLink]=\"['/opis', proizvodId]\"\n                        style=\"color:#bd8200; font-weight: bold;; margin-right: 10px;\">\n                        <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                        See details\n                    </a>\n                    <ng-template [ngIf]=\"autentifikacijaService.prijavljen()\">\n                        <a  class=\"add-to-cart btn btn-danger\"\n                            (click)=\"staviUKorpu(proizvod)\"\n                            style=\"color: black; font-weight: bold; cursor: pointer;\">\n                            <i class=\"fa fa-shopping-cart\" ></i>\n                            Buy Product\n                        </a>\n                    </ng-template>\n                    <p id=\"bottomrow\">\n                        <i class=\"fa fa-heart\" aria-hidden=\"true\" style=\"padding-right: 40px;\"></i>\n                        <i class=\"fa fa-share-alt\" aria-hidden=\"true\" style=\"padding-right: 40px;\"></i>\n                        <i class=\"fa fa-download\" ></i>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signin/signin.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signin/signin.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"section\">\n    <div class=\"bckg\">\n      <div class=\"container content\">\n        <div class=\"row\">\n          <div class=\"col-md-6 d-none d-md-block \">\n            <h1 class=\"display-4\"><strong>Registration</strong></h1>\n            <h4>Register if you wont to see all content of page</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"card  text-center card-form\">\n              <div class=\"card-body\">\n                <form (ngSubmit)=\"prijaviSe(f)\" #f=\"ngForm\">\n                  <div class=\"form-group\">\n                    <input \n                    type=\"email\" \n                    placeholder=\"Email\" \n                    id=\"email\" \n                    name=\"email\" \n                    ngModel\n                    #emailRef=\"ngModel\"\n                    required\n                    email\n                    class=\"form-control form-control-lg\">\n                  </div>\n                  <div *ngIf=\"emailRef.errors && (emailRef.dirty ||emailRef.touched)\" class=\"alert alert-danger col-md-12\">\n                    <div [hidden]=\"!emailRef.errors.required\">Please enter your email.</div>\n                    <div [hidden]=\"!emailRef.errors.email\">Please enter valid email.</div>\n             </div>\n                  <div class=\"form-group\">\n                    <input \n                    type=\"password\" \n                    placeholder=\"Password\" \n                    id=\"password\" \n                    name=\"sifra\" \n                    ngModel \n                    #passwordRef=\"ngModel\"\n                    required\n                    minlength=\"6\"\n                    class=\"form-control form-control-lg\">\n                  </div>\n                  <div *ngIf=\"passwordRef.errors && (passwordRef.dirty || passwordRef.touched)\" class=\"alert alert-danger col-md-12\">\n                    <div [hidden]=\"!passwordRef.errors.required\">Please enter a password.</div>\n                    <div [hidden]=\"!passwordRef.errors.minlength\">Password must have at least 6 characters.</div>\n                </div>\n                  <button \n                    class=\"btn btn-block btn-warning\"\n                    type=\"submit\"\n                    [disabled]=\"!f.form.valid\" >Register</button>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"section\">\n    <div class=\"bckg\">\n      <div class=\"container content\">\n        <div class=\"row\">\n          <div class=\"col-md-6 d-none d-md-block text-info\">\n            <h1 class=\"display-4\"><strong>Login</strong></h1>\n            <h4>Login if you wont to see all content of page</h4>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"card  text-center card-form\">\n              <div class=\"card-body\">\n                <form (ngSubmit)=\"registrujSe(f)\" #f=\"ngForm\">\n                  <div class=\"form-group\">\n                    <input \n                    type=\"email\" \n                    placeholder=\"Email\" \n                    id=\"email\" \n                    name=\"email\" \n                    ngModel\n                    #emailRef=\"ngModel\"\n                    required\n                    email\n                    class=\"form-control form-control-lg\">\n                  </div>\n                  <div *ngIf=\"emailRef.errors && (emailRef.dirty ||emailRef.touched)\" class=\"alert alert-danger col-md-12\">\n                    <div [hidden]=\"!emailRef.errors.required\">Please enter your email.</div>\n                    <div [hidden]=\"!emailRef.errors.email\">Please enter valid email.</div>\n             </div>\n                  <div class=\"form-group\">\n                    <label for=\"sifra\"></label>\n                    <input \n                    type=\"password\" \n                    placeholder=\"Password\" \n                    id=\"password\" \n                    name=\"sifra\" \n                    ngModel \n                    #passwordRef=\"ngModel\"\n                    required\n                    minlength=\"6\"\n                    class=\"form-control form-control-lg\">\n                  </div>\n                  <div *ngIf=\"passwordRef.errors && (passwordRef.dirty || passwordRef.touched)\" class=\"alert alert-danger col-md-12\">\n                    <div [hidden]=\"!passwordRef.errors.required\">Please enter a password.</div>\n                    <div [hidden]=\"!passwordRef.errors.minlength\">Password must have at least 6 characters.</div>\n                </div>\n                  <button \n                  class=\"btn btn-block btn-warning\" \n                  type=\"submit\"\n                  [disabled]=\"!f.form.valid\">Login</button>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/videofile/videofile.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/videofile/videofile.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <video controls=\"controls\" id=\"video1\" >\n            <source src=\"assets/img/videobanat.mp4\" type=\"video/mp4\" />\n    </video><br/>\n    \n        <table id=\"table1\">\n            <tr>\n                <th></th>\n                <th></th>\n            </tr>\n            <tr>\n                <td>Leskovac kolo</td>\n                <td>\n                    <audio controls=\"controls\" id=\"audio1\">\n                        <source src=\"assets/img/Leskovackolo.mp3\" type=\"audio/mp3\"/>\n                 </audio>\n                </td>\n            </tr>\n            <tr>\n                <td>Nisko kolo</td>\n                <td>\n                    <audio controls=\"controls\" id=\"audio1\">\n                            <source src=\"assets/img/Niskolo.mp3\" type=\"audio/mp3\"/>\n                    </audio>\n                </td>\n            </tr>\n            <tr>\n                <td>Vlasko kolo</td>\n                <td>\n                    <audio controls=\"controls\" id=\"audio1\">\n                        <source src=\"assets/img/Vlasinkakolo.mp3\" type=\"audio/mp3\"/>\n                    </audio></td>\n            </tr>\n            <tr>\n                <td>Vlasinka kolo</td>\n                <td>\n                     <audio controls=\"controls\" id=\"audio1\">\n                          <source src=\"assets/img/Vlasinkakolo.mp3\" type=\"audio/mp3\"/>\n                    </audio>\n                </td>\n            </tr>\n        </table>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .textOverImage{\r\n    position: relative;\r\n    width: 900px;\r\n    height: 200px;\r\n    float: left;\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n    margin-bottom: 100px;\r\n    background-size: 100%;\r\n    background-position: center;\r\n    transition:0.5s ;\r\n    clear: both;\r\n    font-family: cursive;\r\n    font-size: 20px;\r\n    \r\n    \r\n}\r\n\r\n.textOverImage:hover{\r\n    background-size: 110%;\r\n    font-family: cursive;\r\n    font-size: 20px;\r\n}\r\n\r\n.textOverImage:after{\r\n    position: absolute;\r\n    top: 100%;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    white-space: pre-wrap;\r\n    word-wrap: break-word;\r\n    overflow: hidden;\r\n    background-color: rgba(0,0,0,0);\r\n    color: #ffa600;\r\n    padding:8px;\r\n    content: attr(data-text);\r\n    transition: 0.5s ;\r\n    font-family: cursive;\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.textOverImage:hover:after{\r\n    top: 0;\r\n    padding: 8px;\r\n    background-color: rgba(0,0,0,0.6);\r\n}\r\n\r\n.textOverImage:first-line{\r\n    color:#ffa600;\r\n    font-weight: bold;\r\n    font-size: 1.5em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGVBQWU7OztBQUduQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxNQUFNO0lBQ04sWUFBWTtJQUNaLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLnRleHRPdmVySW1hZ2V7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogOTAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOjAuNXMgO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi50ZXh0T3ZlckltYWdlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTAlO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0T3ZlckltYWdlOmFmdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XHJcbiAgICBjb2xvcjogI2ZmYTYwMDtcclxuICAgIHBhZGRpbmc6OHB4O1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyA7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnRleHRPdmVySW1hZ2U6aG92ZXI6YWZ0ZXJ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbn1cclxuXHJcbi50ZXh0T3ZlckltYWdlOmZpcnN0LWxpbmV7XHJcbiAgICBjb2xvcjojZmZhNjAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutComponent);



/***/ }),

/***/ "./src/app/aboutpage/aboutpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/aboutpage/aboutpage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textOverImage{\r\n    position: relative;\r\n    width: 900px;\r\n    height: 200px;\r\n    float: left;\r\n    margin-top: 30px;\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n    margin-bottom: 20px;\r\n    background-size: 100%;\r\n    background-position: center;\r\n    transition:0.5s ;\r\n    clear: both;\r\n    \r\n    \r\n}\r\n\r\n.textOverImage:hover{\r\n    background-size: 110%;\r\n}\r\n\r\n.textOverImage:after{\r\n    position: absolute;\r\n    top: 100%;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    white-space: pre-wrap;\r\n    word-wrap: break-word;\r\n    overflow: hidden;\r\n    background-color: rgba(0,0,0,0);\r\n    color: #fff;\r\n    padding:8px;\r\n    content: attr(data-text);\r\n    transition: 0.5s ;\r\n    font-family: cursive;\r\n    text-align: center;\r\n}\r\n\r\n.textOverImage:hover:after{\r\n    top: 0;\r\n    padding: 8px;\r\n    background-color: rgba(0,0,0,0.6);\r\n}\r\n\r\n.textOverImage:first-line{\r\n    color:#fff;\r\n    font-weight: bold;\r\n    font-size: 1.5em;\r\n}\r\n\r\nh2, h3{\r\n    padding-top: 20px;\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    color: #bd8200;\r\n    text-align: center;\r\n}\r\n\r\nh5 {\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    color: #bd8200;\r\n    text-align: center;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n}\r\n\r\nimg{\r\n    text-align: center;\r\n    max-width: 100%;\r\n    height: auto;\r\n    border-radius: 5%;\r\n    \r\n  \r\n}\r\n\r\n.thumbnails{\r\n    margin-right: -15px;\r\n}\r\n\r\n.thumbnails a {\r\n    float: left;\r\n    width: 25%;\r\n    padding-right: 20px;\r\n    margin-bottom: 10px;\r\n    box-sizing: border-box;\r\n    \r\n\r\n}\r\n\r\n.thumbnails img {\r\n    display: block;\r\n    transition: all 0.2s ease-in-out;\r\n    \r\n}\r\n\r\n.thumbnails:hover img {\r\n    opacity: 0.6;\r\n    -webkit-transform: scale(0.90) rotate(-2deg);\r\n            transform: scale(0.90) rotate(-2deg);\r\n}\r\n\r\n.thumbnails img:hover {\r\n    opacity: 1.0;\r\n    -webkit-transform: scale(1.0) rotate(3deg);\r\n            transform: scale(1.0) rotate(3deg);\r\n    box-shadow: 0 0 50px #916424;\r\n    \r\n}\r\n\r\n#grid1 {\r\n    height: auto;\r\n    padding-top: 20px;\r\n    padding-right: 100px;\r\n    padding-left: 100px;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n#geo1 {\r\n    clear: both;\r\n    padding-top: 20px;\r\n    height: 100px;\r\n    width: 900px;\r\n    margin-left: 110px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXRwYWdlL2Fib3V0cGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixXQUFXOzs7QUFHZjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksTUFBTTtJQUNOLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjs7O0FBR3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjs7O0FBRzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNENBQW9DO1lBQXBDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWiwwQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLDRCQUE0Qjs7QUFFaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0cGFnZS9hYm91dHBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0T3ZlckltYWdle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjowLjVzIDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuLnRleHRPdmVySW1hZ2U6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCU7XHJcbn1cclxuXHJcbi50ZXh0T3ZlckltYWdlOmFmdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6OHB4O1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyA7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHRPdmVySW1hZ2U6aG92ZXI6YWZ0ZXJ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbn1cclxuXHJcbi50ZXh0T3ZlckltYWdlOmZpcnN0LWxpbmV7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG5oMiwgaDN7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2JkODIwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDUge1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjYmQ4MjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICBcclxuICBcclxufVxyXG5cclxuLnRodW1ibmFpbHN7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG59XHJcblxyXG4udGh1bWJuYWlscyBhIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIFxyXG5cclxufVxyXG5cclxuLnRodW1ibmFpbHMgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBcclxufVxyXG5cclxuLnRodW1ibmFpbHM6aG92ZXIgaW1nIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45MCkgcm90YXRlKC0yZGVnKTtcclxufVxyXG5cclxuLnRodW1ibmFpbHMgaW1nOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDEuMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKSByb3RhdGUoM2RlZyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNTBweCAjOTE2NDI0O1xyXG4gICAgXHJcbn1cclxuXHJcbiNncmlkMSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuI2dlbzEge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogOTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/aboutpage/aboutpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/aboutpage/aboutpage.component.ts ***!
  \**************************************************/
/*! exports provided: AboutpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutpageComponent", function() { return AboutpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutpageComponent = class AboutpageComponent {
};
AboutpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aboutpage',
        template: __webpack_require__(/*! raw-loader!./aboutpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/aboutpage/aboutpage.component.html"),
        styles: [__webpack_require__(/*! ./aboutpage.component.css */ "./src/app/aboutpage/aboutpage.component.css")]
    })
], AboutpageComponent);



/***/ }),

/***/ "./src/app/add-blog/add-blog.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-blog/add-blog.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    padding-top: 20px;\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    color: #bd8200;\r\n    text-align: center;\r\n}\r\n\r\n.div1 {\r\n    font-family: cursive;\r\n    color: #bd8200;\r\n    font-weight: bold;\r\n    \r\n}\r\n\r\n.container {\r\n    background-color: #ffebbf;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    margin-top: 20px;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.alert{\r\n    background-color: rgb(230, 89, 89);\r\n    color: black;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n}\r\n\r\n.add-to-cart {\r\n    float: right;\r\n    top:20px;\r\n    right:20px;\r\n    margin-right: 70px;\r\n    font-family: monospace;\r\n\r\n}\r\n\r\nlabel {\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWJsb2cvYWRkLWJsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRkLWJsb2cvYWRkLWJsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjYmQ4MjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2MSB7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiAjYmQ4MjAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmJmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5hbGVydHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDg5LCA4OSk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmFkZC10by1jYXJ0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRvcDoyMHB4O1xyXG4gICAgcmlnaHQ6MjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcblxyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/add-blog/add-blog.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-blog/add-blog.component.ts ***!
  \************************************************/
/*! exports provided: AddBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlogComponent", function() { return AddBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_bloglist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/bloglist */ "./src/app/bloglist.ts");
/* harmony import */ var src_app_postblog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/postblog.service */ "./src/app/postblog.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);







let AddBlogComponent = class AddBlogComponent {
    constructor(route, router, postblogService) {
        this.route = route;
        this.router = router;
        this.postblogService = postblogService;
        this.bloglist = src_app_bloglist__WEBPACK_IMPORTED_MODULE_3__["bloglist"];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.blog = this.bloglist[+params.get('blogId')];
        });
    }
    addNewBlog(blog) {
        this.postblogService.dodajUBlogKorpu(blog);
        this.router.navigate(['/blog']);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            position: 'top-end',
            type: 'success',
            title: 'You add a blog!',
            showConfirmButton: false,
            timer: 2000
        });
    }
};
AddBlogComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_postblog_service__WEBPACK_IMPORTED_MODULE_4__["PostblogService"] }
];
AddBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-blog',
        template: __webpack_require__(/*! raw-loader!./add-blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-blog/add-blog.component.html"),
        styles: [__webpack_require__(/*! ./add-blog.component.css */ "./src/app/add-blog/add-blog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_postblog_service__WEBPACK_IMPORTED_MODULE_4__["PostblogService"]])
], AddBlogComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutpage/aboutpage.component */ "./src/app/aboutpage/aboutpage.component.ts");
/* harmony import */ var _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pocetna/pocetna.component */ "./src/app/pocetna/pocetna.component.ts");
/* harmony import */ var _folklorshoppocetna_folklorshoppocetna_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./folklorshoppocetna/folklorshoppocetna.component */ "./src/app/folklorshoppocetna/folklorshoppocetna.component.ts");
/* harmony import */ var _gallerypage_gallerypage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallerypage/gallerypage.component */ "./src/app/gallerypage/gallerypage.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _zastita_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zastita.service */ "./src/app/zastita.service.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _opis_proizvoda_opis_proizvoda_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./opis-proizvoda/opis-proizvoda.component */ "./src/app/opis-proizvoda/opis-proizvoda.component.ts");
/* harmony import */ var _korpa_korpa_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./korpa/korpa.component */ "./src/app/korpa/korpa.component.ts");
/* harmony import */ var _add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-blog/add-blog.component */ "./src/app/add-blog/add-blog.component.ts");
/* harmony import */ var _edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit-blog/edit-blog.component */ "./src/app/edit-blog/edit-blog.component.ts");





















const appRoutes = [
    { path: '', component: _folklorshoppocetna_folklorshoppocetna_component__WEBPACK_IMPORTED_MODULE_5__["FolklorshoppocetnaComponent"] },
    { path: 'pocetna', component: _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_4__["PocetnaComponent"] },
    { path: 'about', component: _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_3__["AboutpageComponent"] },
    { path: 'gallery', component: _gallerypage_gallerypage_component__WEBPACK_IMPORTED_MODULE_6__["GallerypageComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"] },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__["BlogComponent"] },
    { path: 'shopp', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_16__["ShopComponent"] },
    { path: 'opis/:proizvodId', component: _opis_proizvoda_opis_proizvoda_component__WEBPACK_IMPORTED_MODULE_17__["OpisProizvodaComponent"] },
    { path: 'korpa', component: _korpa_korpa_component__WEBPACK_IMPORTED_MODULE_18__["KorpaComponent"], canActivate: [_zastita_service__WEBPACK_IMPORTED_MODULE_9__["ZastitaService"]] },
    { path: 'addblog', component: _add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_19__["AddBlogComponent"] },
    { path: 'blog/:blogId', component: _edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_20__["EditBlogComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
            angularfire2__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
            angularfire2_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
            ng2_validation__WEBPACK_IMPORTED_MODULE_15__["CustomFormsModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponents = [_folklorshoppocetna_folklorshoppocetna_component__WEBPACK_IMPORTED_MODULE_5__["FolklorshoppocetnaComponent"],
    _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_4__["PocetnaComponent"],
    _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_3__["AboutpageComponent"],
    _gallerypage_gallerypage_component__WEBPACK_IMPORTED_MODULE_6__["GallerypageComponent"],
    _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
    _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"],
    _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__["BlogComponent"],
    _shop_shop_component__WEBPACK_IMPORTED_MODULE_16__["ShopComponent"],
    _opis_proizvoda_opis_proizvoda_component__WEBPACK_IMPORTED_MODULE_17__["OpisProizvodaComponent"],
    _korpa_korpa_component__WEBPACK_IMPORTED_MODULE_18__["KorpaComponent"],
    _add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_19__["AddBlogComponent"],
    _edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_20__["EditBlogComponent"],
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autentifikacija.service */ "./src/app/autentifikacija.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AppComponent = class AppComponent {
    constructor(autentifikacijaService, router) {
        this.autentifikacijaService = autentifikacijaService;
        this.router = router;
        this.title = "FolklorShop";
    }
    ngOnInit() {
        firebase__WEBPACK_IMPORTED_MODULE_2__["initializeApp"]({
            apiKey: "AIzaSyBhCuHK7hqvzEVx4peOFdK9t6bKwVzN-Mg",
            authDomain: "autentifikacija-52a34.firebaseapp.com",
        });
    }
    odjaviSe() {
        this.autentifikacijaService.odjaviSe();
        this.router.navigate(['/signin']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_3__["AutentifikacijaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_autentifikacija_service__WEBPACK_IMPORTED_MODULE_3__["AutentifikacijaService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jumbotron/jumbotron.component */ "./src/app/jumbotron/jumbotron.component.ts");
/* harmony import */ var _videofile_videofile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./videofile/videofile.component */ "./src/app/videofile/videofile.component.ts");
/* harmony import */ var _photogallery_photogallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photogallery/photogallery.component */ "./src/app/photogallery/photogallery.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/fesm2015/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./geolocation/geolocation.component */ "./src/app/geolocation/geolocation.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./aboutpage/aboutpage.component */ "./src/app/aboutpage/aboutpage.component.ts");
/* harmony import */ var _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pocetna/pocetna.component */ "./src/app/pocetna/pocetna.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _gallerypage_gallerypage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./gallerypage/gallerypage.component */ "./src/app/gallerypage/gallerypage.component.ts");
/* harmony import */ var _folklorshoppocetna_folklorshoppocetna_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./folklorshoppocetna/folklorshoppocetna.component */ "./src/app/folklorshoppocetna/folklorshoppocetna.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./autentifikacija.service */ "./src/app/autentifikacija.service.ts");
/* harmony import */ var _zastita_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./zastita.service */ "./src/app/zastita.service.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _serveri_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./serveri.service */ "./src/app/serveri.service.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _korpa_korpa_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./korpa/korpa.component */ "./src/app/korpa/korpa.component.ts");
/* harmony import */ var _opis_proizvoda_opis_proizvoda_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./opis-proizvoda/opis-proizvoda.component */ "./src/app/opis-proizvoda/opis-proizvoda.component.ts");
/* harmony import */ var _shopping_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shopping.service */ "./src/app/shopping.service.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _carouselpocetna_carouselpocetna_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./carouselpocetna/carouselpocetna.component */ "./src/app/carouselpocetna/carouselpocetna.component.ts");
/* harmony import */ var _postblog_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./postblog.service */ "./src/app/postblog.service.ts");
/* harmony import */ var _add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./add-blog/add-blog.component */ "./src/app/add-blog/add-blog.component.ts");
/* harmony import */ var _edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./edit-blog/edit-blog.component */ "./src/app/edit-blog/edit-blog.component.ts");












































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
            _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_6__["JumbotronComponent"],
            _videofile_videofile_component__WEBPACK_IMPORTED_MODULE_7__["VideofileComponent"],
            _photogallery_photogallery_component__WEBPACK_IMPORTED_MODULE_8__["PhotogalleryComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
            _form_form_component__WEBPACK_IMPORTED_MODULE_11__["FormComponent"],
            _geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_16__["GeolocationComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
            _aboutpage_aboutpage_component__WEBPACK_IMPORTED_MODULE_19__["AboutpageComponent"],
            _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_20__["PocetnaComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__["PageNotFoundComponent"],
            _gallerypage_gallerypage_component__WEBPACK_IMPORTED_MODULE_22__["GallerypageComponent"],
            _folklorshoppocetna_folklorshoppocetna_component__WEBPACK_IMPORTED_MODULE_23__["FolklorshoppocetnaComponent"],
            _signin_signin_component__WEBPACK_IMPORTED_MODULE_24__["SigninComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_25__["SignupComponent"],
            _blog_blog_component__WEBPACK_IMPORTED_MODULE_28__["BlogComponent"],
            _shop_shop_component__WEBPACK_IMPORTED_MODULE_35__["ShopComponent"],
            _korpa_korpa_component__WEBPACK_IMPORTED_MODULE_36__["KorpaComponent"],
            _opis_proizvoda_opis_proizvoda_component__WEBPACK_IMPORTED_MODULE_37__["OpisProizvodaComponent"],
            _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_39__["CarouselComponent"],
            _carouselpocetna_carouselpocetna_component__WEBPACK_IMPORTED_MODULE_40__["CarouselpocetnaComponent"],
            _add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_42__["AddBlogComponent"],
            _edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_43__["EditBlogComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_13__["TextMaskModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_14__["SweetAlert2Module"].forRoot({
                buttonsStyling: false,
                customClass: 'modal-content',
                confirmButtonClass: 'btn btn-primary',
                cancelButtonClass: 'btn'
            }),
            _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBvXUcJrl0zNEoGOxpsfhR9Z9rYejVwgqk'
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"],
            angularfire2__WEBPACK_IMPORTED_MODULE_30__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_31__["environment"].firebase),
            angularfire2_database__WEBPACK_IMPORTED_MODULE_32__["AngularFireDatabaseModule"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_33__["AngularFireAuthModule"],
            ng2_validation__WEBPACK_IMPORTED_MODULE_34__["CustomFormsModule"],
        ],
        providers: [
            _serveri_service__WEBPACK_IMPORTED_MODULE_29__["ServeriService"],
            _autentifikacija_service__WEBPACK_IMPORTED_MODULE_26__["AutentifikacijaService"],
            _zastita_service__WEBPACK_IMPORTED_MODULE_27__["ZastitaService"],
            _shopping_service__WEBPACK_IMPORTED_MODULE_38__["ShoppingService"],
            _postblog_service__WEBPACK_IMPORTED_MODULE_41__["PostblogService"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/autentifikacija.service.ts":
/*!********************************************!*\
  !*** ./src/app/autentifikacija.service.ts ***!
  \********************************************/
/*! exports provided: AutentifikacijaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutentifikacijaService", function() { return AutentifikacijaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let AutentifikacijaService = class AutentifikacijaService {
    constructor(router) {
        this.router = router;
    }
    prijaviKorisnika(email, sifra) {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, sifra)
            .then((response) => {
            this.router.navigate(['/']);
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.getIdToken()
                .then((token) => this.token = token);
        })
            .catch((error) => console.log(error));
    }
    vratiToken() {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.getIdToken()
            .then((token) => this.token = token);
        return this.token;
    }
    registrujKorisnika(email, sifra) {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, sifra)
            .catch((error) => console.log(error));
    }
    prijavljen() {
        return this.token != null;
    }
    odjaviSe() {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
        this.token = null;
    }
};
AutentifikacijaService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AutentifikacijaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AutentifikacijaService);



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    color: #bd8200;\r\n    text-align: center;\r\n}\r\n\r\n img  {\r\n    height: 300px;\r\n    width: 350px;\r\n    margin: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\n #cart {\r\n    background-color: #ffebbf;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n h5 {\r\n    font-family: cursive;\r\n    color: #bd8200;\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n    font-weight: bold;\r\n    text-align: left;\r\n    font-size: 25px;\r\n    text-shadow: 1px 1px black;\r\n    text-decoration: underline;\r\n}\r\n\r\n p {\r\n    font-family: cursive;\r\n    color: #bd8200;\r\n    font-weight: bold;\r\n    text-align: justify;\r\n}\r\n\r\n #datep {\r\n    font-family: cursive;\r\n    color: #bd8200;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    font-size: 20px;\r\n\r\n}\r\n\r\n #editbtn {\r\n    text-align: right;\r\n  \r\n}\r\n\r\n .add-to-cart {\r\n    color:#bd8200; \r\n    font-family: cursive;\r\n    font-weight: bold; \r\n    margin-right: 10px;\r\n    text-align: right;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7Q0FFQztJQUNHLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7Q0FFQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztDQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQiwwQkFBMEI7QUFDOUI7O0NBRUE7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0NBRUE7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTs7QUFFbkI7O0NBRUE7SUFDSSxpQkFBaUI7O0FBRXJCOztDQUNBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNiZDgyMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiBpbWcgIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4jY2FydCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmJmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5oNSB7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiAjYmQ4MjAwO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBjb2xvcjogI2JkODIwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuI2RhdGVwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgY29sb3I6ICNiZDgyMDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbn1cclxuXHJcbiNlZGl0YnRuIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIFxyXG59XHJcbi5hZGQtdG8tY2FydCB7XHJcbiAgICBjb2xvcjojYmQ4MjAwOyBcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_bloglist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/bloglist */ "./src/app/bloglist.ts");
/* harmony import */ var src_app_postblog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/postblog.service */ "./src/app/postblog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../autentifikacija.service */ "./src/app/autentifikacija.service.ts");






let BlogComponent = class BlogComponent {
    constructor(postblogService, autentifikacijaService, router) {
        this.postblogService = postblogService;
        this.autentifikacijaService = autentifikacijaService;
        this.router = router;
        this.bloglist = src_app_bloglist__WEBPACK_IMPORTED_MODULE_2__["bloglist"];
    }
    ngOnInit() {
    }
};
BlogComponent.ctorParameters = () => [
    { type: src_app_postblog_service__WEBPACK_IMPORTED_MODULE_3__["PostblogService"] },
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_5__["AutentifikacijaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog',
        template: __webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/blog/blog.component.html"),
        styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_postblog_service__WEBPACK_IMPORTED_MODULE_3__["PostblogService"],
        _autentifikacija_service__WEBPACK_IMPORTED_MODULE_5__["AutentifikacijaService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], BlogComponent);



/***/ }),

/***/ "./src/app/bloglist.ts":
/*!*****************************!*\
  !*** ./src/app/bloglist.ts ***!
  \*****************************/
/*! exports provided: bloglist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bloglist", function() { return bloglist; });
const bloglist = [
    {
        'title': 'Special prize for the costume!',
        'description': 'KUD Vinogradar from Ledinci received a special national folk costume award at the prestigious regional festival in Ruma for which Folklore Shop was in charge. This is just another confirmation that our products are of high quality.',
        'url': 'assets/img/naslovna14.jpg',
        'date': '20.11.2018.'
    },
    {
        'title': 'Exhibition of folk costumes - full hall of the Master Center!',
        'description': 'Filled in the hall of the Master Center in Novi Sad, an exhibition of folk costumes from our Folk Shop Šop impressed the visitors. Never demand for folk costumes. Cooperation with KUDs from the Diaspora was achieved.',
        'url': 'assets/img/vlog2.jpg',
        'date': '16.06.2019.'
    },
];


/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    text-align: center;\r\n    border: 2px solid #ffebbf;\r\n    background-color: #ffebbf;\r\n}\r\n\r\n.btn {\r\n    border-radius: 5%;\r\n    text-align: center;\r\n    margin-right: 10px;\r\n    font-weight: bold;\r\n    font-family: cursive;\r\n    color: #5f4203;\r\n    font-size: 15px;\r\n    \r\n\r\n}\r\n\r\n.card-title{\r\n    font-weight: bold;\r\n    font-family: cursive;\r\n    font-size: 20px;\r\n    color: #bd8200;\r\n    padding-bottom: 10px\r\n}\r\n\r\n.card-img-top {\r\n    height: 300px;\r\n    width: 290x;\r\n}\r\n\r\n#car-indicators {\r\n    border: 2px solid #ffebbf;\r\n    margin-top: 50px;\r\n}\r\n\r\n.carousel-indicators li {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin: 10px;\r\n    text-indent: 0;\r\n    cursor: pointer;\r\n    border: none;\r\n    border-radius: 50%;\r\n    background-color: #dbae7b;\r\n    box-shadow: inset 1px 1px 1px 1px rgba(0,0,0,0.5); \r\n    border: 1px solid black;   \r\n}\r\n\r\n.carousel-indicators .active {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin: 10px;\r\n    background-color: #ffa600;\r\n}\r\n\r\n.divcar .carousel-control-prev,  .carousel-control-next  {\r\n    font-size: 60px;\r\n    border-radius: 10px;\r\n    color:#ffa600;\r\n    height: 470px;\r\n    width: 80px;\r\n    box-shadow: inset 1px 10px 10px 50px rgba(0,0,0,0.5);\r\n\r\n}\r\n\r\n#bigdiv {\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n    background-color:#ffebbf;\r\n    margin-bottom: 30px;\r\n    margin-top: 5px;\r\n}\r\n\r\n#sale  {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin-left: 80px;\r\n    margin-right: 150px;\r\n}\r\n\r\n#sale2  {\r\n    width: 500px;\r\n    height: auto;\r\n    \r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZUFBZTs7O0FBR25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsY0FBYztJQUNkO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGlEQUFpRDtJQUNqRCx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0lBQ2IsV0FBVztJQUNYLG9EQUFvRDs7QUFFeEQ7O0FBS0E7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZOzs7QUFHaEIiLCJmaWxlIjoic3JjL2FwcC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZlYmJmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJiZjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBjb2xvcjogIzVmNDIwMztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIFxyXG5cclxufVxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNiZDgyMDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG4uY2FyZC1pbWctdG9wIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogMjkweDtcclxufVxyXG5cclxuI2Nhci1pbmRpY2F0b3JzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmViYmY7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHRleHQtaW5kZW50OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiYWU3YjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuNSk7IFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICAgXHJcbn1cclxuLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZSB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE2MDA7XHJcbn1cclxuXHJcbi5kaXZjYXIgLmNhcm91c2VsLWNvbnRyb2wtcHJldiwgIC5jYXJvdXNlbC1jb250cm9sLW5leHQgIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjojZmZhNjAwO1xyXG4gICAgaGVpZ2h0OiA0NzBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDEwcHggMTBweCA1MHB4IHJnYmEoMCwwLDAsMC41KTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiNiaWdkaXYge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZlYmJmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuXHJcbiNzYWxlICB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4jc2FsZTIgIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIFxyXG4gICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarouselComponent = class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carousel',
        template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html"),
        styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CarouselComponent);



/***/ }),

/***/ "./src/app/carouselpocetna/carouselpocetna.component.css":
/*!***************************************************************!*\
  !*** ./src/app/carouselpocetna/carouselpocetna.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item img {\r\n    height: 400px;\r\n    width: 1000px;\r\n    border-radius: 10px;\r\n}\r\n\r\n#carousel-example-1z {\r\n    margin-left: 60px;\r\n    margin-right: 60px;\r\n    margin-bottom: 100px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.carousel-indicators li {\r\n    display: inline-block;\r\n    width: 10px;\r\n    height: 10px;\r\n    text-indent: 0;\r\n    cursor: pointer;\r\n    border: none;\r\n    border-radius: 50%;\r\n    background-color: #dbae7b;\r\n    box-shadow: inset 1px 1px 1px 1px rgba(0,0,0,0.5); \r\n    border: 1px solid black;  \r\n    margin-right: 10px; \r\n   \r\n}\r\n\r\n.carousel-indicators .active {\r\n    width: 10px;\r\n    height: 10px;\r\n    margin-right: 10px;\r\n    background-color: #ffa600;\r\n}\r\n\r\n.divcar .carousel-control-prev,  .carousel-control-next  {\r\n    font-size: 60px;\r\n    border-radius: 10px;\r\n    color:#ffa600;\r\n    height: 400px;\r\n    width: 80px;\r\n    box-shadow: inset 1px 10px 10px 50px rgba(0,0,0,0.5);\r\n\r\n}\r\n\r\nh3, p{\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n}\r\n\r\nh4 {\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    color: #bd8200;\r\n    text-align: center;\r\n    margin-left: 80px;\r\n    margin-right: 80px;\r\n    margin-top: 20px;\r\n\r\n}\r\n\r\n#car-indicators {\r\n    border: 2px solid #ffebbf;\r\n    \r\n}\r\n\r\n#news img{\r\n    margin-left: 90px;\r\n    margin-right: 90px;\r\n    margin-top: 50px;\r\n    width: 900px;\r\n    height: 80px;\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWxwb2NldG5hL2Nhcm91c2VscG9jZXRuYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGlEQUFpRDtJQUNqRCx1QkFBdUI7SUFDdkIsa0JBQWtCOztBQUV0Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsb0RBQW9EOztBQUV4RDs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0kseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL2Nhcm91c2VscG9jZXRuYS9jYXJvdXNlbHBvY2V0bmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1pdGVtIGltZyB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiNjYXJvdXNlbC1leGFtcGxlLTF6IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHRleHQtaW5kZW50OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiYWU3YjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuNSk7IFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICBcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgXHJcbiAgIFxyXG59XHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIC5hY3RpdmUge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNjAwO1xyXG59XHJcblxyXG4uZGl2Y2FyIC5jYXJvdXNlbC1jb250cm9sLXByZXYsICAuY2Fyb3VzZWwtY29udHJvbC1uZXh0ICB7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6I2ZmYTYwMDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxMHB4IDEwcHggNTBweCByZ2JhKDAsMCwwLDAuNSk7XHJcblxyXG59XHJcblxyXG5oMywgcHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2JkODIwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbn1cclxuXHJcbiNjYXItaW5kaWNhdG9ycyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZlYmJmO1xyXG4gICAgXHJcbn1cclxuXHJcbiNuZXdzIGltZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/carouselpocetna/carouselpocetna.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/carouselpocetna/carouselpocetna.component.ts ***!
  \**************************************************************/
/*! exports provided: CarouselpocetnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselpocetnaComponent", function() { return CarouselpocetnaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarouselpocetnaComponent = class CarouselpocetnaComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarouselpocetnaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carouselpocetna',
        template: __webpack_require__(/*! raw-loader!./carouselpocetna.component.html */ "./node_modules/raw-loader/index.js!./src/app/carouselpocetna/carouselpocetna.component.html"),
        styles: [__webpack_require__(/*! ./carouselpocetna.component.css */ "./src/app/carouselpocetna/carouselpocetna.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CarouselpocetnaComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contact1{\r\n    width: 350px;\r\n    height: 250px;\r\n    font-family: cursive;\r\n    position: relative;\r\n    float: left;\r\n    left: 15%;\r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n    margin-right: 150px;\r\n    clear: left;\r\n    background-color: #ffebbf;\r\n    border-radius: 5%;\r\n    border: 2px solid black;\r\n}\r\n\r\nh3{\r\n    font-weight: bold;\r\n    color:#bd8200;\r\n    text-align: center;\r\n    font-family: cursive;\r\n}\r\n\r\n.fa{\r\n    color:#bd8200;\r\n    font-size: 30px;\r\n    padding-left:10px;\r\n    padding-right:10px;\r\n    \r\n}\r\n\r\n#p11 {\r\n    font-family: cursive;\r\n    color:#bd8200;\r\n    padding-left:10px;\r\n    padding-right:10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFjdDF7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGxlZnQ6IDE1JTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcclxuICAgIGNsZWFyOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJiZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbmgze1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjojYmQ4MjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuXHJcbi5mYXtcclxuICAgIGNvbG9yOiNiZDgyMDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICAgIFxyXG59XHJcblxyXG4jcDExIHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgY29sb3I6I2JkODIwMDtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContactComponent);



/***/ }),

/***/ "./src/app/edit-blog/edit-blog.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-blog/edit-blog.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    color: #bd8200;\r\n    text-align: center;\r\n}\r\n\r\n.add-to-cart {\r\n    color:#bd8200; \r\n    font-family: cursive;\r\n    font-weight: bold; \r\n    margin-right: 10px;\r\n    text-align: right;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n}\r\n\r\n.row {\r\n    background-color: #ffebbf;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n    font-family: cursive;\r\n    color: #bd8200;\r\n    margin-left: 80px;\r\n    margin-right: 80px;\r\n    margin-bottom: 80px;\r\n    \r\n}\r\n\r\n#div2 {\r\n margin-left: 100px;\r\n margin-right: 100px;\r\n\r\n}\r\n\r\nlabel {\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}\r\n\r\n.form-control {\r\n    font-family: cursive;\r\n    font-size: 12px;\r\n}\r\n\r\n.alert{\r\n    font-family: cursive;\r\n    background-color: rgb(230, 89, 89);\r\n    color: black;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1ibG9nL2VkaXQtYmxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7O0FBRXBCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1ibG9nL2VkaXQtYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjYmQ4MjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWRkLXRvLWNhcnQge1xyXG4gICAgY29sb3I6I2JkODIwMDsgXHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmJmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBjb2xvcjogI2JkODIwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICAgIFxyXG59XHJcblxyXG4jZGl2MiB7XHJcbiBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG5cclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uYWxlcnR7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDg5LCA4OSk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/edit-blog/edit-blog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-blog/edit-blog.component.ts ***!
  \**************************************************/
/*! exports provided: EditBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogComponent", function() { return EditBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_bloglist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/bloglist */ "./src/app/bloglist.ts");
/* harmony import */ var src_app_postblog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/postblog.service */ "./src/app/postblog.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);







let EditBlogComponent = class EditBlogComponent {
    constructor(route, router, postblogService) {
        this.route = route;
        this.router = router;
        this.postblogService = postblogService;
        this.bloglist = src_app_bloglist__WEBPACK_IMPORTED_MODULE_3__["bloglist"];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.blog = this.bloglist[+params.get('blogId')];
        });
    }
    save() {
        this.postblogService.uzmiBlog();
        this.router.navigate(['/blog']);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            position: 'top-end',
            type: 'success',
            title: 'You changes are saved!',
            showConfirmButton: false,
            timer: 2000
        });
    }
    delete() {
        this.postblogService.ocistiBlogKorpu();
        this.router.navigate(['/blog']);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            position: 'top-end',
            type: 'success',
            title: 'You delete a blog!',
            showConfirmButton: false,
            timer: 2000
        });
    }
};
EditBlogComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_postblog_service__WEBPACK_IMPORTED_MODULE_4__["PostblogService"] }
];
EditBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-blog',
        template: __webpack_require__(/*! raw-loader!./edit-blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-blog/edit-blog.component.html"),
        styles: [__webpack_require__(/*! ./edit-blog.component.css */ "./src/app/edit-blog/edit-blog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_postblog_service__WEBPACK_IMPORTED_MODULE_4__["PostblogService"]])
], EditBlogComponent);



/***/ }),

/***/ "./src/app/folklorshoppocetna/folklorshoppocetna.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/folklorshoppocetna/folklorshoppocetna.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    color: black;\r\n    \r\n    -webkit-animation: colorchange 5s infinite; \r\n    animation: colorchange 5s infinite;\r\n}\r\n@-webkit-keyframes colorchange {\r\n     0%  {background: #e7cc81;}\r\n    25%  {background: #f7aa04;}\r\n    50%  {background: #f00a02;}\r\n    75%  {background: #b3e95c;}\r\n    100% {background: #e7cc81;}\r\n}\r\n@keyframes colorchange {\r\n    0%  {background: #e7cc81;}\r\n    25%  {background: #f7aa04;}\r\n    50%  {background: #f00a02;}\r\n    75%  {background: #b3e95c;}\r\n    100% {background: #e7cc81;}\r\n}\r\n#p1 {\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    color: #bd8200;\r\n    padding-left: 100px;\r\n    padding-right: 100px;\r\n    padding-top: 20px;\r\n}\r\nimg {\r\n    width: 400px;\r\n    height: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sa2xvcnNob3Bwb2NldG5hL2ZvbGtsb3JzaG9wcG9jZXRuYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixZQUFZOztJQUVaLDBDQUEwQztJQUMxQyxrQ0FBa0M7QUFDdEM7QUFDQTtLQUNLLEtBQUssbUJBQW1CLENBQUM7SUFDMUIsTUFBTSxtQkFBbUIsQ0FBQztJQUMxQixNQUFNLG1CQUFtQixDQUFDO0lBQzFCLE1BQU0sbUJBQW1CLENBQUM7SUFDMUIsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QjtBQUNBO0lBQ0ksS0FBSyxtQkFBbUIsQ0FBQztJQUN6QixNQUFNLG1CQUFtQixDQUFDO0lBQzFCLE1BQU0sbUJBQW1CLENBQUM7SUFDMUIsTUFBTSxtQkFBbUIsQ0FBQztJQUMxQixNQUFNLG1CQUFtQixDQUFDO0FBQzlCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZm9sa2xvcnNob3Bwb2NldG5hL2ZvbGtsb3JzaG9wcG9jZXRuYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGNvbG9yY2hhbmdlIDVzIGluZmluaXRlOyBcclxuICAgIGFuaW1hdGlvbjogY29sb3JjaGFuZ2UgNXMgaW5maW5pdGU7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGNvbG9yY2hhbmdlIHtcclxuICAgICAwJSAge2JhY2tncm91bmQ6ICNlN2NjODE7fVxyXG4gICAgMjUlICB7YmFja2dyb3VuZDogI2Y3YWEwNDt9XHJcbiAgICA1MCUgIHtiYWNrZ3JvdW5kOiAjZjAwYTAyO31cclxuICAgIDc1JSAge2JhY2tncm91bmQ6ICNiM2U5NWM7fVxyXG4gICAgMTAwJSB7YmFja2dyb3VuZDogI2U3Y2M4MTt9XHJcbn1cclxuQGtleWZyYW1lcyBjb2xvcmNoYW5nZSB7XHJcbiAgICAwJSAge2JhY2tncm91bmQ6ICNlN2NjODE7fVxyXG4gICAgMjUlICB7YmFja2dyb3VuZDogI2Y3YWEwNDt9XHJcbiAgICA1MCUgIHtiYWNrZ3JvdW5kOiAjZjAwYTAyO31cclxuICAgIDc1JSAge2JhY2tncm91bmQ6ICNiM2U5NWM7fVxyXG4gICAgMTAwJSB7YmFja2dyb3VuZDogI2U3Y2M4MTt9XHJcbn1cclxuXHJcbiNwMSB7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNiZDgyMDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/folklorshoppocetna/folklorshoppocetna.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/folklorshoppocetna/folklorshoppocetna.component.ts ***!
  \********************************************************************/
/*! exports provided: FolklorshoppocetnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolklorshoppocetnaComponent", function() { return FolklorshoppocetnaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FolklorshoppocetnaComponent = class FolklorshoppocetnaComponent {
    constructor() {
        this.title = 'Folklor Shop';
    }
    ngOnInit() {
    }
};
FolklorshoppocetnaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-folklorshoppocetna',
        template: __webpack_require__(/*! raw-loader!./folklorshoppocetna.component.html */ "./node_modules/raw-loader/index.js!./src/app/folklorshoppocetna/folklorshoppocetna.component.html"),
        styles: [__webpack_require__(/*! ./folklorshoppocetna.component.css */ "./src/app/folklorshoppocetna/folklorshoppocetna.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FolklorshoppocetnaComponent);



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#divForm {\r\n    width: 450px;\r\n    height: 650px;\r\n    font-family: cursive;\r\n    position: relative;\r\n    left: 50px;\r\n    top: 50px;\r\n    right: 50px;\r\n    color:#bd8200;\r\n    \r\n \r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n    background-color: white;\r\n    border-radius: 5%;\r\n}\r\n\r\n.fa{\r\n    color:#bd8200;\r\n    font-size: 30px;\r\n    padding-left:10px;\r\n}\r\n\r\n.btn {\r\n    padding-left: 100px;\r\n    padding-right: 100px;\r\n    text-align: center;\r\n    position: relative;\r\n    left: 75px;\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n\r\n.form-control.ng-pristine.ng-invalid.ng-touched{\r\n    border: 2px solid red;\r\n}\r\n\r\n.alert{\r\n    background-color: rgb(230, 89, 89);\r\n    color: black;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n}\r\n\r\nfieldset {\r\n    padding: 20px;\r\n    border: 2px solid black;\r\n    background-color:  #ffebbf;\r\n    border-radius: 3%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYTs7O0lBR2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkaXZGb3JtIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICByaWdodDogNTBweDtcclxuICAgIGNvbG9yOiNiZDgyMDA7XHJcbiAgICBcclxuIFxyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG59XHJcblxyXG4uZmF7XHJcbiAgICBjb2xvcjojYmQ4MjAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNzVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLm5nLXByaXN0aW5lLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmFsZXJ0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgODksIDg5KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2ZmZWJiZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



let FormComponent = class FormComponent {
    constructor() {
        this.phoneMask = ['+', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
    onSubmit() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Thank you for comment! :)', '', 'success');
    }
};
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/form/form.component.html"),
        styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
    })
], FormComponent);



/***/ }),

/***/ "./src/app/gallerypage/gallerypage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/gallerypage/gallerypage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    max-width: 100%;\r\n    height: auto;\r\n    border-radius: 10px;\r\n  \r\n}\r\n\r\n.thumbnails{\r\n    margin-right: -15px;\r\n  \r\n    \r\n\r\n}\r\n\r\n.thumbnails a {\r\n    float: left;\r\n    width: 25%;\r\n    padding-right: 15px;\r\n    margin-bottom: 15px;\r\n    box-sizing: border-box;\r\n    \r\n\r\n}\r\n\r\n.thumbnails img {\r\n    display: block;\r\n    transition: all 0.2s ease-in-out;\r\n    \r\n}\r\n\r\n.thumbnails:hover img {\r\n    opacity: 0.6;\r\n    -webkit-transform: scale(0.92) rotate(-3deg);\r\n            transform: scale(0.92) rotate(-3deg);\r\n}\r\n\r\n.thumbnails img:hover {\r\n    opacity: 1.0;\r\n    -webkit-transform: scale(1.1) rotate(2deg);\r\n            transform: scale(1.1) rotate(2deg);\r\n    box-shadow: 0 0 40px orange;\r\n    \r\n}\r\n\r\n#grid1 {\r\n    height: auto;\r\n    padding-top: 20px;\r\n    padding-right: 100px;\r\n    padding-left: 100px;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n#ShowMore {\r\n    float: right;\r\n    background-color: white;\r\n    padding-bottom: 100px;\r\n    \r\n\r\n}\r\n\r\nh3 {\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    color: #bd8200 ;\r\n    text-align: center;\r\n    padding-bottom: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeXBhZ2UvZ2FsbGVyeXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLG1CQUFtQjs7OztBQUl2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7OztBQUcxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDRDQUFvQztZQUFwQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMENBQWtDO1lBQWxDLGtDQUFrQztJQUNsQywyQkFBMkI7O0FBRS9COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIscUJBQXFCOzs7QUFHekI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeXBhZ2UvZ2FsbGVyeXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi50aHVtYm5haWxze1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICBcclxuICAgIFxyXG5cclxufVxyXG5cclxuLnRodW1ibmFpbHMgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi50aHVtYm5haWxzIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgXHJcbn1cclxuXHJcbi50aHVtYm5haWxzOmhvdmVyIGltZyB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTIpIHJvdGF0ZSgtM2RlZyk7XHJcbn1cclxuXHJcbi50aHVtYm5haWxzIGltZzpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDJkZWcpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggb3JhbmdlO1xyXG4gICAgXHJcbn1cclxuXHJcbiNncmlkMSB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuI1Nob3dNb3JlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNiZDgyMDAgO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/gallerypage/gallerypage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/gallerypage/gallerypage.component.ts ***!
  \******************************************************/
/*! exports provided: GallerypageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallerypageComponent", function() { return GallerypageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GallerypageComponent = class GallerypageComponent {
    constructor() { }
    ngOnInit() {
    }
};
GallerypageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallerypage',
        template: __webpack_require__(/*! raw-loader!./gallerypage.component.html */ "./node_modules/raw-loader/index.js!./src/app/gallerypage/gallerypage.component.html"),
        styles: [__webpack_require__(/*! ./gallerypage.component.css */ "./src/app/gallerypage/gallerypage.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GallerypageComponent);



/***/ }),

/***/ "./src/app/geolocation/geolocation.component.css":
/*!*******************************************************!*\
  !*** ./src/app/geolocation/geolocation.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 400px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VvbG9jYXRpb24vZ2VvbG9jYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9nZW9sb2NhdGlvbi9nZW9sb2NhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/geolocation/geolocation.component.ts":
/*!******************************************************!*\
  !*** ./src/app/geolocation/geolocation.component.ts ***!
  \******************************************************/
/*! exports provided: GeolocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationComponent", function() { return GeolocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GeolocationComponent = class GeolocationComponent {
    constructor() {
        this.latitude = 45.212928;
        this.longitude = 19.806239;
    }
    onChoseLocation(event) {
        this.latitude = event.coords.lat;
        this.longitude = event.coords.lng;
    }
};
GeolocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-geolocation',
        template: __webpack_require__(/*! raw-loader!./geolocation.component.html */ "./node_modules/raw-loader/index.js!./src/app/geolocation/geolocation.component.html"),
        styles: [__webpack_require__(/*! ./geolocation.component.css */ "./src/app/geolocation/geolocation.component.css")]
    })
], GeolocationComponent);



/***/ }),

/***/ "./src/app/jumbotron/jumbotron.component.css":
/*!***************************************************!*\
  !*** ./src/app/jumbotron/jumbotron.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    color: black;\r\n    \r\n    -webkit-animation: colorchange 2s infinite; \r\n    animation: colorchange 2s infinite;\r\n}\r\n@-webkit-keyframes colorchange {\r\n     0%  {background: #e7cc81;}\r\n    25%  {background: #f7aa04;}\r\n    50%  {background: #f00a02;}\r\n    75%  {background: #b3e95c;}\r\n    100% {background: #e7cc81;}\r\n}\r\n@keyframes colorchange {\r\n    0%  {background: #e7cc81;}\r\n    25%  {background: #f7aa04;}\r\n    50%  {background: #f00a02;}\r\n    75%  {background: #b3e95c;}\r\n    100% {background: #e7cc81;}\r\n}\r\n#p1 {\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    color: #bd8200;\r\n    font-size: 20px;\r\n    padding-left: 100px;\r\n    padding-right: 100px;\r\n    padding-top: 20px;\r\n   \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanVtYm90cm9uL2p1bWJvdHJvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixZQUFZOztJQUVaLDBDQUEwQztJQUMxQyxrQ0FBa0M7QUFDdEM7QUFDQTtLQUNLLEtBQUssbUJBQW1CLENBQUM7SUFDMUIsTUFBTSxtQkFBbUIsQ0FBQztJQUMxQixNQUFNLG1CQUFtQixDQUFDO0lBQzFCLE1BQU0sbUJBQW1CLENBQUM7SUFDMUIsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QjtBQUNBO0lBQ0ksS0FBSyxtQkFBbUIsQ0FBQztJQUN6QixNQUFNLG1CQUFtQixDQUFDO0lBQzFCLE1BQU0sbUJBQW1CLENBQUM7SUFDMUIsTUFBTSxtQkFBbUIsQ0FBQztJQUMxQixNQUFNLG1CQUFtQixDQUFDO0FBQzlCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixpQkFBaUI7O0FBRXJCIiwiZmlsZSI6InNyYy9hcHAvanVtYm90cm9uL2p1bWJvdHJvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGNvbG9yY2hhbmdlIDJzIGluZmluaXRlOyBcclxuICAgIGFuaW1hdGlvbjogY29sb3JjaGFuZ2UgMnMgaW5maW5pdGU7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGNvbG9yY2hhbmdlIHtcclxuICAgICAwJSAge2JhY2tncm91bmQ6ICNlN2NjODE7fVxyXG4gICAgMjUlICB7YmFja2dyb3VuZDogI2Y3YWEwNDt9XHJcbiAgICA1MCUgIHtiYWNrZ3JvdW5kOiAjZjAwYTAyO31cclxuICAgIDc1JSAge2JhY2tncm91bmQ6ICNiM2U5NWM7fVxyXG4gICAgMTAwJSB7YmFja2dyb3VuZDogI2U3Y2M4MTt9XHJcbn1cclxuQGtleWZyYW1lcyBjb2xvcmNoYW5nZSB7XHJcbiAgICAwJSAge2JhY2tncm91bmQ6ICNlN2NjODE7fVxyXG4gICAgMjUlICB7YmFja2dyb3VuZDogI2Y3YWEwNDt9XHJcbiAgICA1MCUgIHtiYWNrZ3JvdW5kOiAjZjAwYTAyO31cclxuICAgIDc1JSAge2JhY2tncm91bmQ6ICNiM2U5NWM7fVxyXG4gICAgMTAwJSB7YmFja2dyb3VuZDogI2U3Y2M4MTt9XHJcbn1cclxuXHJcbiNwMSB7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNiZDgyMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgXHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/jumbotron/jumbotron.component.ts":
/*!**************************************************!*\
  !*** ./src/app/jumbotron/jumbotron.component.ts ***!
  \**************************************************/
/*! exports provided: JumbotronComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumbotronComponent", function() { return JumbotronComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JumbotronComponent = class JumbotronComponent {
    constructor() {
        this.title = 'Folklor Shop';
    }
    ngOnInit() {
    }
};
JumbotronComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jumbotron',
        template: __webpack_require__(/*! raw-loader!./jumbotron.component.html */ "./node_modules/raw-loader/index.js!./src/app/jumbotron/jumbotron.component.html"),
        styles: [__webpack_require__(/*! ./jumbotron.component.css */ "./src/app/jumbotron/jumbotron.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], JumbotronComponent);



/***/ }),

/***/ "./src/app/korpa/korpa.component.css":
/*!*******************************************!*\
  !*** ./src/app/korpa/korpa.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-family: cursive;\r\n    color: #bd8200;\r\n    padding-top: 20px;\r\n    padding-left: 50px;\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n#tableDIV {\r\n    margin: 5%;\r\n    \r\n}\r\n\r\n\r\n\r\nthead {\r\n    font-family: cursive;\r\n    color: #bd8200;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    font-size: 25px;\r\n}\r\n\r\n\r\n\r\ntbody {\r\n    font-family: cursive;\r\n    color: #bd8200;\r\n    text-align: center;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva29ycGEva29ycGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7OztBQUlBO0lBQ0ksVUFBVTs7QUFFZDs7OztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7Ozs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2Qsa0JBQWtCOztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL2tvcnBhL2tvcnBhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiAjYmQ4MjAwO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4jdGFibGVESVYge1xyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIFxyXG59XHJcblxyXG50aGVhZCB7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiAjYmQ4MjAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbnRib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgY29sb3I6ICNiZDgyMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/korpa/korpa.component.ts":
/*!******************************************!*\
  !*** ./src/app/korpa/korpa.component.ts ***!
  \******************************************/
/*! exports provided: KorpaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KorpaComponent", function() { return KorpaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shopping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shopping.service */ "./src/app/shopping.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let KorpaComponent = class KorpaComponent {
    constructor(shoppingservice, router) {
        this.shoppingservice = shoppingservice;
        this.router = router;
        this.suma = 0;
        this.cene = [];
        this.korpa = this.shoppingservice.uzmiPredmete();
    }
    ngOnInit() {
    }
    isprazniKorpu() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            position: 'top-end',
            type: 'success',
            title: 'Your shopping cart is empty now!',
            showConfirmButton: false,
            timer: 2000
        });
    }
    brojStavki() {
        return this.korpa.length;
    }
    izvrsiKupovinu() {
        const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false,
        });
        swalWithBootstrapButtons.fire({
            title: 'Do you want to make a purchase?',
            text: "You will not be able to cancel your purchase!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, make a purchase!',
            cancelButtonText: 'No, cancel a purchase!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                swalWithBootstrapButtons.fire('You made a purchase!', 'Thank you for your purchase. Expect the shipment within 5 business days.', 'success'),
                    this.korpa = this.shoppingservice.ocistiKorpu();
                this.router.navigate(['/pocetna']);
            }
            else if (
            // Read more about handling dismissals
            result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('You cancel a purchase.', 'Now you can change your shopping cart. :)', 'error');
            }
        });
    }
};
KorpaComponent.ctorParameters = () => [
    { type: src_app_shopping_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
KorpaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-korpa',
        template: __webpack_require__(/*! raw-loader!./korpa.component.html */ "./node_modules/raw-loader/index.js!./src/app/korpa/korpa.component.html"),
        styles: [__webpack_require__(/*! ./korpa.component.css */ "./src/app/korpa/korpa.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shopping_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], KorpaComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav .navbar-nav  li a{\r\n    font-family: cursive !important;\r\n    }\r\n\r\n.nav-link, .navbar-brand {\r\n    font-family: cursive !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9COztBQUVKO0lBQ0ksK0JBQStCO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IC5uYXZiYXItbmF2ICBsaSBhe1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbi5uYXYtbGluaywgLm5hdmJhci1icmFuZCB7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autentifikacija.service */ "./src/app/autentifikacija.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let NavbarComponent = class NavbarComponent {
    constructor(autentifikacijaService, router) {
        this.autentifikacijaService = autentifikacijaService;
        this.router = router;
        this.appName = 'Folklor Shop';
    }
    ngOnInit() {
    }
    odjaviSe() {
        this.autentifikacijaService.odjaviSe();
        this.router.navigate(['/signin']);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            position: 'top-end',
            type: 'success',
            title: 'You log out!',
            showConfirmButton: false,
            timer: 2000
        });
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_3__["AutentifikacijaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_autentifikacija_service__WEBPACK_IMPORTED_MODULE_3__["AutentifikacijaService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/opis-proizvoda/opis-proizvoda.component.css":
/*!*************************************************************!*\
  !*** ./src/app/opis-proizvoda/opis-proizvoda.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-family: cursive;\r\n    color: #bd8200;\r\n    padding-top: 20px;\r\n    padding-left: 50px;\r\n    padding-bottom: 10px;\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.card{\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n    margin-top: 2px;\r\n    margin-right: 2px;\r\n    margin-left: 2px;\r\n    padding: 10px;\r\n    color: #bd8200;\r\n    background-color: rgb(255, 228, 194);\r\n    font-family: cursive;\r\n    border: 1px solid rgb(165, 88, 0);\r\n    border-radius: 5%;\r\n\r\n}\r\n\r\nimg{\r\n    height: 300px;\r\n     width: 300px;\r\n     border: 2px solid black;\r\n     border-radius: 5%;\r\n}\r\n\r\n.card-title{\r\n    padding-top: 10px;\r\n    font-weight: bold;\r\n    text-align: left;\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n}\r\n\r\n.card-text{\r\n    padding-left: 10px;\r\n    font-weight: bold;\r\n    text-align: left;\r\n    font-size: 16px;\r\n}\r\n\r\n.textOverImage{\r\n    position: relative;\r\n    width: 900px;\r\n    height: 200px;\r\n    float: left;\r\n    margin-top: 30px;\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n    margin-bottom: 20px;\r\n    background-size: 100%;\r\n    background-position: center;\r\n    transition:0.5s ;\r\n    clear: both;\r\n    \r\n    \r\n}\r\n\r\n.textOverImage:hover{\r\n    background-size: 110%;\r\n}\r\n\r\n.textOverImage:after{\r\n    position: absolute;\r\n    top: 100%;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    white-space: pre-wrap;\r\n    word-wrap: break-word;\r\n    overflow: hidden;\r\n    background-color: rgba(0,0,0,0);\r\n    color: #fff;\r\n    padding:8px;\r\n    content: attr(data-text);\r\n    transition: 0.5s ;\r\n    font-family: cursive;\r\n    text-align: center;\r\n}\r\n\r\n.textOverImage:hover:after{\r\n    top: 0;\r\n    padding: 8px;\r\n    background-color: rgba(0,0,0,0.6);\r\n}\r\n\r\n.textOverImage:first-line{\r\n    color:#fff;\r\n    font-weight: bold;\r\n    font-size: 1.5em;\r\n}\r\n\r\nh2 {\r\n    padding-top: 20px;\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    color: #bd8200;\r\n    text-align: center;\r\n}\r\n\r\nh5 {\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    color: #bd8200;\r\n    text-align: center;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n}\r\n\r\nimg{\r\n    text-align: center;\r\n    max-width: 100%;\r\n    height: auto;\r\n    border-radius: 5%;\r\n    \r\n  \r\n}\r\n\r\n.thumbnails{\r\n    margin-right: -15px;\r\n}\r\n\r\n.thumbnails a {\r\n    float: left;\r\n    width: 25%;\r\n    padding-right: 20px;\r\n    margin-bottom: 10px;\r\n    box-sizing: border-box;\r\n    \r\n\r\n}\r\n\r\n.thumbnails img {\r\n    display: block;\r\n    transition: all 0.2s ease-in-out;\r\n    \r\n}\r\n\r\n.thumbnails:hover img {\r\n    opacity: 0.6;\r\n    -webkit-transform: scale(0.90) rotate(-2deg);\r\n            transform: scale(0.90) rotate(-2deg);\r\n}\r\n\r\n.thumbnails img:hover {\r\n    opacity: 1.0;\r\n    -webkit-transform: scale(1.1) rotate(3deg);\r\n            transform: scale(1.1) rotate(3deg);\r\n    box-shadow: 0 0 50px #472b03;\r\n    \r\n}\r\n\r\n#grid1 {\r\n    height: auto;\r\n    padding-top: 20px;\r\n    padding-right: 100px;\r\n    padding-left: 100px;\r\n    padding-bottom: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3Bpcy1wcm9penZvZGEvb3Bpcy1wcm9penZvZGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsY0FBYztJQUNkLG9DQUFvQztJQUNwQyxvQkFBb0I7SUFDcEIsaUNBQWlDO0lBQ2pDLGlCQUFpQjs7QUFFckI7O0FBR0E7SUFDSSxhQUFhO0tBQ1osWUFBWTtLQUNaLHVCQUF1QjtLQUN2QixpQkFBaUI7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1Q0FBK0I7WUFBL0IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsV0FBVzs7O0FBR2Y7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE1BQU07SUFDTixZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7OztBQUdyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7OztBQUcxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDRDQUFvQztZQUFwQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMENBQWtDO1lBQWxDLGtDQUFrQztJQUNsQyw0QkFBNEI7O0FBRWhDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL29waXMtcHJvaXp2b2RhL29waXMtcHJvaXp2b2RhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiAjYmQ4MjAwO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjYmQ4MjAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjI4LCAxOTQpO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTY1LCA4OCwgMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuXHJcbn1cclxuXHJcblxyXG5pbWd7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgIHdpZHRoOiAzMDBweDtcclxuICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5jYXJkLXRleHR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnRleHRPdmVySW1hZ2V7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogOTAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOjAuNXMgO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4udGV4dE92ZXJJbWFnZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTEwJTtcclxufVxyXG5cclxuLnRleHRPdmVySW1hZ2U6YWZ0ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzo4cHg7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIDtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dE92ZXJJbWFnZTpob3ZlcjphZnRlcntcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxufVxyXG5cclxuLnRleHRPdmVySW1hZ2U6Zmlyc3QtbGluZXtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjYmQ4MjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNiZDgyMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIFxyXG4gIFxyXG59XHJcblxyXG4udGh1bWJuYWlsc3tcclxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbn1cclxuXHJcbi50aHVtYm5haWxzIGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4udGh1bWJuYWlscyBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIFxyXG59XHJcblxyXG4udGh1bWJuYWlsczpob3ZlciBpbWcge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkwKSByb3RhdGUoLTJkZWcpO1xyXG59XHJcblxyXG4udGh1bWJuYWlscyBpbWc6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgzZGVnKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1MHB4ICM0NzJiMDM7XHJcbiAgICBcclxufVxyXG5cclxuI2dyaWQxIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/opis-proizvoda/opis-proizvoda.component.ts":
/*!************************************************************!*\
  !*** ./src/app/opis-proizvoda/opis-proizvoda.component.ts ***!
  \************************************************************/
/*! exports provided: OpisProizvodaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpisProizvodaComponent", function() { return OpisProizvodaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_proizvodi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/proizvodi */ "./src/app/proizvodi.ts");
/* harmony import */ var src_app_shopping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shopping.service */ "./src/app/shopping.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../autentifikacija.service */ "./src/app/autentifikacija.service.ts");








let OpisProizvodaComponent = class OpisProizvodaComponent {
    constructor(route, shoppingService, autentifikacijaService, router) {
        this.route = route;
        this.shoppingService = shoppingService;
        this.autentifikacijaService = autentifikacijaService;
        this.router = router;
        this.proizvodi = src_app_proizvodi__WEBPACK_IMPORTED_MODULE_3__["proizvodi"];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.proizvod = this.proizvodi[+params.get('proizvodId')];
        });
    }
    staviUKorpu(proizvod) {
        this.shoppingService.dodajUKorpu(proizvod);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            position: 'top-end',
            type: 'success',
            title: 'Your product has been added to the cart!',
            showConfirmButton: false,
            timer: 2000
        });
    }
};
OpisProizvodaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shopping_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingService"] },
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_6__["AutentifikacijaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
OpisProizvodaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-opis-proizvoda',
        template: __webpack_require__(/*! raw-loader!./opis-proizvoda.component.html */ "./node_modules/raw-loader/index.js!./src/app/opis-proizvoda/opis-proizvoda.component.html"),
        styles: [__webpack_require__(/*! ./opis-proizvoda.component.css */ "./src/app/opis-proizvoda/opis-proizvoda.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_shopping_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingService"],
        _autentifikacija_service__WEBPACK_IMPORTED_MODULE_6__["AutentifikacijaService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], OpisProizvodaComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: `
    <h3>Page not found.</h3>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/photogallery/photogallery.component.css":
/*!*********************************************************!*\
  !*** ./src/app/photogallery/photogallery.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data-title {\r\n    font-family: cursive;\r\n    \r\n}\r\n\r\nimg{\r\n    max-width: 100%;\r\n    height: auto;\r\n    border-radius: 10px;\r\n  \r\n}\r\n\r\n.thumbnails{\r\n    margin-right: -15px;\r\n  \r\n    \r\n\r\n}\r\n\r\n.thumbnails a {\r\n    float: left;\r\n    width: 25%;\r\n    padding-right: 15px;\r\n    margin-bottom: 15px;\r\n    box-sizing: border-box;\r\n    \r\n\r\n}\r\n\r\n.thumbnails img {\r\n    display: block;\r\n    transition: all 0.2s ease-in-out;\r\n    \r\n}\r\n\r\n.thumbnails:hover img {\r\n    opacity: 0.6;\r\n    -webkit-transform: scale(0.90);\r\n            transform: scale(0.90);\r\n}\r\n\r\n.thumbnails img:hover {\r\n    opacity: 1.0;\r\n    -webkit-transform: scale(1.05) rotate(2deg);\r\n            transform: scale(1.05) rotate(2deg);\r\n    box-shadow: 0 0 20px rgba(0, 0, 0, .9);\r\n    \r\n}\r\n\r\n#grid1 {\r\n    height: auto;\r\n    padding: 100px;\r\n}\r\n\r\n#ShowMore {\r\n    float: right;\r\n    background-color: white;\r\n    padding-bottom: 100px;\r\n    clear: both;\r\n\r\n}\r\n\r\n.btn {\r\n    color: #5f4203;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9nYWxsZXJ5L3Bob3RvZ2FsbGVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9COztBQUV4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLG1CQUFtQjs7OztBQUl2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7OztBQUcxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyxzQ0FBc0M7O0FBRTFDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixXQUFXOztBQUVmOztBQUVBO0lBQ0ksY0FBYzs7QUFFbEIiLCJmaWxlIjoic3JjL2FwcC9waG90b2dhbGxlcnkvcGhvdG9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkYXRhLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgXHJcbn1cclxuXHJcbmltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi50aHVtYm5haWxze1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICBcclxuICAgIFxyXG5cclxufVxyXG5cclxuLnRodW1ibmFpbHMgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi50aHVtYm5haWxzIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgXHJcbn1cclxuXHJcbi50aHVtYm5haWxzOmhvdmVyIGltZyB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTApO1xyXG59XHJcblxyXG4udGh1bWJuYWlscyBpbWc6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSByb3RhdGUoMmRlZyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIC45KTtcclxuICAgIFxyXG59XHJcblxyXG4jZ3JpZDEge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTAwcHg7XHJcbn1cclxuXHJcbiNTaG93TW9yZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG5cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBjb2xvcjogIzVmNDIwMztcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/photogallery/photogallery.component.ts":
/*!********************************************************!*\
  !*** ./src/app/photogallery/photogallery.component.ts ***!
  \********************************************************/
/*! exports provided: PhotogalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotogalleryComponent", function() { return PhotogalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhotogalleryComponent = class PhotogalleryComponent {
    constructor() { }
    ngOnInit() {
    }
};
PhotogalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photogallery',
        template: __webpack_require__(/*! raw-loader!./photogallery.component.html */ "./node_modules/raw-loader/index.js!./src/app/photogallery/photogallery.component.html"),
        styles: [__webpack_require__(/*! ./photogallery.component.css */ "./src/app/photogallery/photogallery.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PhotogalleryComponent);



/***/ }),

/***/ "./src/app/pocetna/pocetna.component.css":
/*!***********************************************!*\
  !*** ./src/app/pocetna/pocetna.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#div1 {\r\n \r\n    position: relative;\r\n    top: 300px;\r\n   \r\n}\r\n\r\n#div0 {\r\n    padding-bottom: 100px;\r\n    margin-bottom: 100px;\r\n    clear: both;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9jZXRuYS9wb2NldG5hLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BvY2V0bmEvcG9jZXRuYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RpdjEge1xyXG4gXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDMwMHB4O1xyXG4gICBcclxufVxyXG5cclxuI2RpdjAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICBjbGVhcjogYm90aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pocetna/pocetna.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pocetna/pocetna.component.ts ***!
  \**********************************************/
/*! exports provided: PocetnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocetnaComponent", function() { return PocetnaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PocetnaComponent = class PocetnaComponent {
    constructor() { }
    ngOnInit() {
    }
};
PocetnaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pocetna',
        template: __webpack_require__(/*! raw-loader!./pocetna.component.html */ "./node_modules/raw-loader/index.js!./src/app/pocetna/pocetna.component.html"),
        styles: [__webpack_require__(/*! ./pocetna.component.css */ "./src/app/pocetna/pocetna.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PocetnaComponent);



/***/ }),

/***/ "./src/app/postblog.service.ts":
/*!*************************************!*\
  !*** ./src/app/postblog.service.ts ***!
  \*************************************/
/*! exports provided: PostblogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostblogService", function() { return PostblogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bloglist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bloglist */ "./src/app/bloglist.ts");



let PostblogService = class PostblogService {
    constructor() {
        this.bloglist = _bloglist__WEBPACK_IMPORTED_MODULE_2__["bloglist"];
        this.bloglistkorpa = [];
    }
    dodajUBlogKorpu(blog) {
        this.bloglistkorpa.push(blog);
    }
    uzmiBlog() {
        return this.bloglistkorpa;
    }
    ocistiBlogKorpu() {
        this.bloglistkorpa = [];
        return this.bloglistkorpa;
    }
};
PostblogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PostblogService);



/***/ }),

/***/ "./src/app/proizvodi.ts":
/*!******************************!*\
  !*** ./src/app/proizvodi.ts ***!
  \******************************/
/*! exports provided: proizvodi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proizvodi", function() { return proizvodi; });
const proizvodi = [
    { 'name': 'Zenski sumadijski jelek',
        'price': '45',
        'description': 'Reconstruction of a female jelek. A combination of bordeaux plush with a golden cord. Relief work with golden heart and spangles. Available in all sizes, bordeaux, black or dark plush and work with gold or silver heart. You choose.',
        'url': 'assets/img/nosnja/nosnja1.jpg',
        'url1': 'assets/img/nosnja/jelek1b.jpg',
        'url2': 'assets/img/nosnja/jelek1a.jpg',
        'url3': 'assets/img/nosnja/jelek1c.jpg',
        'url4': 'assets/img/nosnja/nosnja1.jpg',
    },
    { 'name': 'Zenska libada',
        'price': '90',
        'description': 'Reconstruction of the libade by the model of the original. Available in all sizes. Working with a golden / silver heart and a flat wire, on the plush (purple, black, bordeaux, white, dark blue, blue, green) and set with a silk setting.',
        'url': 'assets/img/nosnja/nosnja2.jpg',
        'url1': 'assets/img/nosnja/libada1b.jpg',
        'url2': 'assets/img/nosnja/libada1a.jpg',
        'url3': 'assets/img/nosnja/libada1c.jpg',
        'url4': 'assets/img/nosnja/nosnja2.jpg',
    },
    { 'name': 'Sukure',
        'price': '60',
        'description': 'Reconstruction of the Vlaški sukura. A combination of woven furniture and wool. Available in all sizes and colors.',
        'url': 'assets/img/nosnja/rese1a.jpg',
        'url1': 'assets/img/nosnja/rese1a.jpg',
        'url2': 'assets/img/nosnja/rese1b.jpg',
        'url3': 'assets/img/nosnja/rese1c.jpg',
        'url4': 'assets/img/nosnja/rese1d.jpg',
    },
    { 'name': 'Kosulja',
        'price': '15',
        'description': 'Reconstruction of women shirts for vlaske (universal type). A combination of chiffon cloth and tape with ornaments and herbal motifs. Available in all sizes, red, blue and green color.',
        'url': 'assets/img/nosnja/nosnja4.jpg',
        'url1': 'assets/img/nosnja/nosnja4.jpg',
        'url2': 'assets/img/nosnja/kosulja1a.jpg',
        'url3': 'assets/img/nosnja/kosulja1b.jpg',
        'url4': 'assets/img/nosnja/kosulja1c.jpg',
    },
    { 'name': 'Oglavlje',
        'price': '20',
        'description': 'The reconstruction is made by Kobisnica. Scarves (in any color), lace, flowers, ears (fronds), peacock feathers, needles (in different colors).',
        'url': 'assets/img/nosnja/kobisnica1aa.jpg',
        'url1': 'assets/img/nosnja/kobisnica1a.jpg',
        'url2': 'assets/img/nosnja/kobisnica1b.jpg',
        'url3': 'assets/img/nosnja/kobisnica1c.jpg',
        'url4': 'assets/img/nosnja/kobisnica1d.jpg',
    },
    { 'name': 'Gnjilane jelek',
        'price': '30',
        'description': 'Reconstruction of the firs for Gnjilane / Kosovo Pomoravlje. The combinations of blue silk, golden flat cord, white cord and gold strips. Set siphon with canvas. Available in all sizes.',
        'url': 'assets/img/nosnja/kosovo1a.jpg',
        'url1': 'assets/img/nosnja/kosovo1aa.jpg',
        'url2': 'assets/img/nosnja/kosovo1b.jpg',
        'url3': 'assets/img/nosnja/kosovo1c.jpg',
        'url4': 'assets/img/nosnja/kosovo1d.jpg'
    }
];


/***/ }),

/***/ "./src/app/serveri.service.ts":
/*!************************************!*\
  !*** ./src/app/serveri.service.ts ***!
  \************************************/
/*! exports provided: ServeriService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServeriService", function() { return ServeriService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autentifikacija.service */ "./src/app/autentifikacija.service.ts");




let ServeriService = class ServeriService {
    constructor(httpClient, autentifikacijaService) {
        this.httpClient = httpClient;
        this.autentifikacijaService = autentifikacijaService;
    }
    vratiServere() {
        const token = this.autentifikacijaService.vratiToken();
        return this.httpClient.get('https://autentifikacija-52a34.firebaseio.com/data.json?auth=' + token);
    }
    skladistiServere(serveri) {
        const token = this.autentifikacijaService.vratiToken();
        return this.httpClient.put('https://autentifikacija-52a34.firebaseio.com/data.json?auth=' + token, serveri);
    }
};
ServeriService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_3__["AutentifikacijaService"] }
];
ServeriService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _autentifikacija_service__WEBPACK_IMPORTED_MODULE_3__["AutentifikacijaService"]])
], ServeriService);



/***/ }),

/***/ "./src/app/shop/shop.component.css":
/*!*****************************************!*\
  !*** ./src/app/shop/shop.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    margin-right: 20px;\r\n    margin-left: 100px;\r\n    margin-bottom: 20px;\r\n    padding-top: 20px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n   \r\n    color: #bd8200;\r\n    background-color: rgb(255, 228, 194);\r\n    font-family: cursive;\r\n    border: 1px solid rgb(165, 88, 0);\r\n    border-radius: 10%;\r\n}\r\n\r\nimg{\r\n    height: 250px;\r\n     width: auto;\r\n     border: 2px solid black;\r\n     border-radius: 50%;\r\n}\r\n\r\n.card-title{\r\n    padding-top: 10px;\r\n    font-weight: bold;\r\n}\r\n\r\nh1 {\r\n    font-family: cursive;\r\n    color: #bd8200;\r\n    padding-top: 20px;\r\n    padding-left: 50px;\r\n    padding-bottom: 10px;\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n#bottomrow {\r\n    text-align: center;\r\n    font-size: 20px;\r\n    padding-top: 15px;\r\n   \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1COztJQUVuQixjQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtLQUNaLFdBQVc7S0FDWCx1QkFBdUI7S0FDdkIsa0JBQWtCO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjs7O0FBR3JCIiwiZmlsZSI6InNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICBcclxuICAgIGNvbG9yOiAjYmQ4MjAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjI4LCAxOTQpO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTY1LCA4OCwgMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZXtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgY29sb3I6ICNiZDgyMDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNib3R0b21yb3cge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgIFxyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_proizvodi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/proizvodi */ "./src/app/proizvodi.ts");
/* harmony import */ var src_app_shopping_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shopping.service */ "./src/app/shopping.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../autentifikacija.service */ "./src/app/autentifikacija.service.ts");







let ShopComponent = class ShopComponent {
    constructor(shoppingService, autentifikacijaService, router) {
        this.shoppingService = shoppingService;
        this.autentifikacijaService = autentifikacijaService;
        this.router = router;
        this.proizvodi = src_app_proizvodi__WEBPACK_IMPORTED_MODULE_2__["proizvodi"];
    }
    ngOnInit() {
    }
    staviUKorpu(proizvod) {
        this.shoppingService.dodajUKorpu(proizvod);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            position: 'top-end',
            type: 'success',
            title: 'Your product has been added to the cart!',
            showConfirmButton: false,
            timer: 2000,
        });
    }
};
ShopComponent.ctorParameters = () => [
    { type: src_app_shopping_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingService"] },
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_6__["AutentifikacijaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: __webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/index.js!./src/app/shop/shop.component.html"),
        styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/shop/shop.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shopping_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingService"],
        _autentifikacija_service__WEBPACK_IMPORTED_MODULE_6__["AutentifikacijaService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ShopComponent);



/***/ }),

/***/ "./src/app/shopping.service.ts":
/*!*************************************!*\
  !*** ./src/app/shopping.service.ts ***!
  \*************************************/
/*! exports provided: ShoppingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingService", function() { return ShoppingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _proizvodi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proizvodi */ "./src/app/proizvodi.ts");



let ShoppingService = class ShoppingService {
    constructor() {
        this.proizvodi = _proizvodi__WEBPACK_IMPORTED_MODULE_2__["proizvodi"];
        this.korpa = [];
    }
    dodajUKorpu(proizvod) {
        this.korpa.push(proizvod);
    }
    uzmiPredmete() {
        return this.korpa;
    }
    ocistiKorpu() {
        this.korpa = [];
        return this.korpa;
    }
};
ShoppingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ShoppingService);



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#section{\r\n    background: url(/assets/img/naslovna.jpg) no-repeat;\r\n    background-size: cover;\r\n    height: 100%;\r\n}\r\n#section .bckg{\r\n    background-color: rgba(12, 12, 12, 0.712);\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    padding: 150px;\r\n}\r\n.card-form{\r\n   opacity: 0.9;\r\n   background-color: rgb(134, 90, 7);\r\n   border-radius: 5%;\r\n}\r\n#email, #password {\r\n    font-family: cursive;\r\n    font-size: 16px;\r\n}\r\n.btn {\r\n    color: black;\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    border: 2px solid black;\r\n}\r\n.display-4, h4 {\r\n    color: #bd8200;\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n\r\n}\r\n.alert {\r\n    font-size: 11px;\r\n    font-weight: bold;\r\n    color: red;\r\n    font-family: cursive;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbURBQW1EO0lBQ25ELHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtHQUNHLFlBQVk7R0FDWixpQ0FBaUM7R0FDakMsaUJBQWlCO0FBQ3BCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGlCQUFpQjs7QUFFckI7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL25hc2xvdm5hLmpwZykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4jc2VjdGlvbiAuYmNrZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIsIDEyLCAxMiwgMC43MTIpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNTBweDtcclxufVxyXG4uY2FyZC1mb3Jte1xyXG4gICBvcGFjaXR5OiAwLjk7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzQsIDkwLCA3KTtcclxuICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbn1cclxuXHJcbiNlbWFpbCwgI3Bhc3N3b3JkIHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmRpc3BsYXktNCwgaDQge1xyXG4gICAgY29sb3I6ICNiZDgyMDA7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autentifikacija.service */ "./src/app/autentifikacija.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let SigninComponent = class SigninComponent {
    constructor(autentifikacijaService) {
        this.autentifikacijaService = autentifikacijaService;
    }
    ngOnInit() {
    }
    prijaviSe(form) {
        const email = form.value.email;
        const sifra = form.value.sifra;
        this.autentifikacijaService.prijaviKorisnika(email, sifra);
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('You register in! Now you can enjoy shopping.', '', 'success');
    }
};
SigninComponent.ctorParameters = () => [
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__["AutentifikacijaService"] }
];
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/signin/signin.component.html"),
        styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__["AutentifikacijaService"]])
], SigninComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#section{\r\n    background: url(/assets/img/naslovna.jpg) no-repeat;\r\n    background-size: cover;\r\n    height: 100%;\r\n}\r\n#section .bckg{\r\n    background-color: rgba(12, 12, 12, 0.712);\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    padding: 150px;\r\n}\r\n.card-form{\r\n   opacity: 0.9;\r\n   background-color: rgb(134, 90, 7);\r\n   border-radius: 5%;\r\n}\r\n#email, #password {\r\n    font-family: cursive;\r\n    font-size: 16px;\r\n}\r\n.btn {\r\n    color: black;\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    border: 2px solid black;\r\n}\r\n.display-4, h4 {\r\n    color: #bd8200;\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n\r\n}\r\n.alert {\r\n    font-size: 11px;\r\n    font-weight: bold;\r\n    color: red;\r\n    font-family: cursive;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbURBQW1EO0lBQ25ELHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtHQUNHLFlBQVk7R0FDWixpQ0FBaUM7R0FDakMsaUJBQWlCO0FBQ3BCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGlCQUFpQjs7QUFFckI7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL25hc2xvdm5hLmpwZykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4jc2VjdGlvbiAuYmNrZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIsIDEyLCAxMiwgMC43MTIpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNTBweDtcclxufVxyXG4uY2FyZC1mb3Jte1xyXG4gICBvcGFjaXR5OiAwLjk7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzQsIDkwLCA3KTtcclxuICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbn1cclxuXHJcbiNlbWFpbCwgI3Bhc3N3b3JkIHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmRpc3BsYXktNCwgaDQge1xyXG4gICAgY29sb3I6ICNiZDgyMDA7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autentifikacija.service */ "./src/app/autentifikacija.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let SignupComponent = class SignupComponent {
    constructor(autentifikacijaService) {
        this.autentifikacijaService = autentifikacijaService;
    }
    ngOnInit() {
    }
    registrujSe(form) {
        const email = form.value.email;
        const sifra = form.value.sifra;
        this.autentifikacijaService.registrujKorisnika(email, sifra);
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('You login! Now you can enjoy shopping.', '', 'success');
    }
};
SignupComponent.ctorParameters = () => [
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__["AutentifikacijaService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__["AutentifikacijaService"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/videofile/videofile.component.css":
/*!***************************************************!*\
  !*** ./src/app/videofile/videofile.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#video1 {\r\n    height: 300px;\r\n    width: 600px;\r\n    padding: 10px;\r\n}\r\n\r\n#audio1 {\r\n    width: 400px;\r\n   \r\n}\r\n\r\n#table1 {\r\n    \r\n        margin-left:auto; \r\n        margin-right:auto;\r\n      \r\n}\r\n\r\ntd {\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n    color: #bd8200;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9maWxlL3ZpZGVvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTs7QUFFaEI7O0FBRUE7O1FBRVEsZ0JBQWdCO1FBQ2hCLGlCQUFpQjs7QUFFekI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC92aWRlb2ZpbGUvdmlkZW9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdmlkZW8xIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jYXVkaW8xIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgXHJcbn1cclxuXHJcbiN0YWJsZTEge1xyXG4gICAgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bzsgXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICAgIFxyXG59XHJcblxyXG50ZCB7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNiZDgyMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/videofile/videofile.component.ts":
/*!**************************************************!*\
  !*** ./src/app/videofile/videofile.component.ts ***!
  \**************************************************/
/*! exports provided: VideofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideofileComponent", function() { return VideofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VideofileComponent = class VideofileComponent {
    constructor() { }
    ngOnInit() {
    }
};
VideofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-videofile',
        template: __webpack_require__(/*! raw-loader!./videofile.component.html */ "./node_modules/raw-loader/index.js!./src/app/videofile/videofile.component.html"),
        styles: [__webpack_require__(/*! ./videofile.component.css */ "./src/app/videofile/videofile.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VideofileComponent);



/***/ }),

/***/ "./src/app/zastita.service.ts":
/*!************************************!*\
  !*** ./src/app/zastita.service.ts ***!
  \************************************/
/*! exports provided: ZastitaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZastitaService", function() { return ZastitaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autentifikacija.service */ "./src/app/autentifikacija.service.ts");



let ZastitaService = class ZastitaService {
    constructor(autentifikacijaService) {
        this.autentifikacijaService = autentifikacijaService;
    }
    canActivate(route, state) {
        return this.autentifikacijaService.prijavljen();
    }
};
ZastitaService.ctorParameters = () => [
    { type: _autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__["AutentifikacijaService"] }
];
ZastitaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_autentifikacija_service__WEBPACK_IMPORTED_MODULE_2__["AutentifikacijaService"]])
], ZastitaService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBhCuHK7hqvzEVx4peOFdK9t6bKwVzN-Mg",
        authDomain: "autentifikacija-52a34.firebaseapp.com",
        databaseURL: "https://autentifikacija-52a34.firebaseio.com",
        projectId: "autentifikacija-52a34",
        storageBucket: "autentifikacija-52a34.appspot.com",
        messagingSenderId: "159945846809",
        appId: "1:159945846809:web:3dcb086e31d40e5e"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tosa\Desktop\FRONTEND kurs\Web Shop Angular Aleksandar Alimpijevic\FolklorShop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map