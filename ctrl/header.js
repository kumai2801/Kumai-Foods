// load home
function loadHomeKF() {
    $.get("./tmpl/home.html", function(html){
        var tmpl 	= Handlebars.compile(html);
        var rs 		= tmpl();
        
        //---------------------------------------
        do_gl_showContent ("#homeKF", rs);

        // show slides
        do_load_slides();

        // show content
        do_load_content();

        // show pro
        do_load_pro();
        do_load_bread();
        do_load_drink();

        // show blog
        do_load_blog();
        
    });
}

// load cart
function do_load_cart() {
    $.get("./tmpl/cart.html", function(html){
        var tmpl 	= Handlebars.compile(html);
        var rs 		= tmpl();
        
        //---------------------------------------
        do_gl_showContent ("#homeKF", rs);
    });
}

// load contact
function loadContactKF() {
    $.get("./tmpl/contact.html", function(html){
        var tmpl 	= Handlebars.compile(html);
        var rs 		= tmpl();
        
        //---------------------------------------
        do_gl_showContent ("#homeKF", rs);
    });
}

// load blog
function loadBlogKF() {
    $.get("./tmpl/blog-single-sidebar.html", function(html){
        var tmpl 	= Handlebars.compile(html);
        var rs 		= tmpl();
        
        //---------------------------------------
        do_gl_showContent ("#homeKF", rs);
    });
}