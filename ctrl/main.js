// preloader
function myFunction() {
    var myVar = setTimeout(show, 2000);
};

function show() {
    document.getElementById("preloader").style.display = "none";
};

// add html to div
var do_gl_showContent = function (div, content) {
    $(div).html(content);
};

// load header
$.get("./tmpl/header.html", function(html){
	var tmpl 	= Handlebars.compile(html);
	var rs 		= tmpl(lct);
  
	//---------------------------------------
	do_gl_showContent ("#headerKF", rs);
});

// load home
$.get("./tmpl/home.html", function(html){
	var tmpl 	= Handlebars.compile(html);
	var rs 		= tmpl();

	//---------------------------------------
	do_gl_showContent ("#homeKF", rs);       
});

// load footer
$.get("./tmpl/footer.html", function(html){
	var tmpl 	= Handlebars.compile(html);
	var rs 		= tmpl();

	//---------------------------------------
	do_gl_showContent ("#footerKF", rs);     
});

// location
var lct = [{
    "location": "Quy Nhon"
},

{
	"location": "Da Nang"
},

{   
    "location": "Ha Noi"
},

{
	"location": "Ho Chi Minh"
}];
