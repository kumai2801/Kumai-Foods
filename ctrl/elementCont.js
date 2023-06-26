do_load_pro();
do_load_blog();
do_load_bread();
do_load_drink();

// load pro
function do_load_pro() {
    $.get("./tmpl/singlePro.html", function(html){
        var tmpl 	= Handlebars.compile(html);
        var rs 		= tmpl(pro_item);

        //---------------------------------------
        do_gl_showContent ("#allPro .row", rs);       
    });
};

// load bread
function do_load_bread() {
    $.get("./tmpl/singlePro.html", function(html){
        var tmpl 	= Handlebars.compile(html);

        var data = [];

        for (let index = 0; index < pro_item.length; index++) {
            if (pro_item[index].type_pro == "bread") {
                data.push(pro_item[index]);
            }
            
        }

        var rs 		= tmpl(data);

        //---------------------------------------
        do_gl_showContent ("#breadKF .row", rs);       
    });
};

// load bread
function do_load_drink() {
    $.get("./tmpl/singlePro.html", function(html){
        var tmpl 	= Handlebars.compile(html);

        var data = [];

        for (let index = 0; index < pro_item.length; index++) {
            if (pro_item[index].type_pro == "drink") {
                data.push(pro_item[index]);
            }
            
        }

        var rs 		= tmpl(data);

        //---------------------------------------
        do_gl_showContent ("#drinkKF .row", rs);       
    });
};

// load blog

function do_load_blog() {
    $.get("./tmpl/singleBlog.html", function(html){
        var tmpl 	= Handlebars.compile(html);
        var rs 		= tmpl(blog);
        
        //---------------------------------------
        do_gl_showContent ("#element_blog_KF .row", rs);       
    });
}

var blog = [{
    "blog_path" : "./images/Products/KF.png",
    "date_publish" : "20 June, 2023. Tuesday",
    "title_blog" : "Kumai Food"
},

{
    "blog_path" : "./images/me.jpg",
    "date_publish" : "28 January, 2004. Wednesday",
    "title_blog" : "Ngo Quoc Vinh | 22IT.EB090"
},

{
    "blog_path" : "./images/Products/blog-banh-mi.jpg",
    "date_publish" : "22 July, 2020. Monday",
    "title_blog" : "Viet Nam's Bread"
}];