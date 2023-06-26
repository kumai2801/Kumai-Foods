do_load_slides();
do_load_content();

// show slides
function do_load_slides() {
    $.get("./tmpl/slides.html", function(html){
        var tmpl 	= Handlebars.compile(html);
        var rs 		= tmpl();
        
        //---------------------------------------
        do_gl_showContent ("#slidesKF", rs);       
    });
}

// show content
function do_load_content() {
    $.get("./tmpl/contents.html", function(html){
        var tmpl 	= Handlebars.compile(html);
        var rs 		= tmpl();
        
        //---------------------------------------
        do_gl_showContent ("#contentKF", rs);       
    });
}

//  value of products
var pro_item = [{
    "type_pro"        : "bread",
    "path_pro_detail" : "/product.html",
    "img_pro"         : "/images/Products/banh-mi.jpg",
    "img_pro_hover"   : "/images/Products/R.jpg",
    "name_pro"        : "Banh Mi Thap Cam",
    "price"           : "40.000 VND"
},

{
    "type_pro"        : "drink",
	"path_pro_detail" : "product-details.html",
    "img_pro"         : "/images/Products/R.jpg",
    "img_pro_hover"   : "/images/white.png",
    "name_pro"        : "Lemon Tea",
    "price"           : "10.000 VND"
},

{
    "type_pro"        : "bread",
    "path_pro_detail" : "product-details.html",
    "img_pro"         : "./images/Products/banh-mi.jpg",
    "img_pro_hover"   : "https://via.placeholder.com/550x750",
    "name_pro"        : "Banh Mi Heo Quay",
    "price"           : "25.000 VND"
},

{
    "type_pro"        : "drink",
	"path_pro_detail" : "product-details.html",
    "img_pro"         : "./images/Products/R.jpg",
    "img_pro_hover"   : "https://via.placeholder.com/550x750",
    "name_pro"        : "Coffee",
    "price"           : "20.000 VND"
},

{
    "type_pro"        : "bread",
    "path_pro_detail" : "product-details.html",
    "img_pro"         : "./images/Products/banh-mi.jpg",
    "img_pro_hover"   : "https://via.placeholder.com/550x750",
    "name_pro"        : "Banh Mi xa xiu",
    "price"           : "30.000 VND"
},

{
    "type_pro"        : "drink",
	"path_pro_detail" : "product-details.html",
    "img_pro"         : "./images/Products/R.jpg",
    "img_pro_hover"   : "https://via.placeholder.com/550x750",
    "name_pro"        : "Milk Tea",
    "price"           : "10.000 VND"
},

{
    "type_pro"        : "bread",
    "path_pro_detail" : "product-details.html",
    "img_pro"         : "./images/Products/banh-mi.jpg",
    "img_pro_hover"   : "https://via.placeholder.com/550x750",
    "name_pro"        : "Banh Mi Trung",
    "price"           : "15.000 VND"
},

{
    "type_pro"        : "drink",
	"path_pro_detail" : "product-details.html",
    "img_pro"         : "./images/Products/R.jpg",
    "img_pro_hover"   : "https://via.placeholder.com/550x750",
    "name_pro"        : "Juice",
    "price"           : "15.000 VND"
}];
