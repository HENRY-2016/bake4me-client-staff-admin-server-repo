
let url = 'http://localhost/';
let html_pages_source_dir = 'bake4me-repos/';
let php_pages_source_dir = 'bake4me-php/';


// BAKERY NAVIGATION ...........
function Load_Client_Register_Page () {window.location = 'bakery_register.html';}
function Load_Cakes_Page () {window.location='bakery_cakes.html'}
function Load_Cakes_Page () {window.location='bakery_cakes.html'}

// STAFFS
function Load_Crud_Page () {window.location='staff_bakery_crud.html'}


// OUTLETS NAVIGATION ......
function Load_Outlets_Page () {window.location='bakery_outlets.html';}

// SCHOOL NAVIGATION ..... 
function Load_School_Index_Page () {window.location = 'school_index.html';}
function Load_School_Login_Register_Page () {window.location = 'school_login_register.html';}
function School_Logout () {window.location = url+php_pages_source_dir+'school_logout.php';}

function Load_School_Notice_Board () {window.location = 'school_notice_board.html';}
// function School_LogIn_Only () {window.location = url+html_pages_source_dir+'school_login.html';}
function Load_School_SubLink_Payment () {window.location = url+html_pages_source_dir+'school_payment.html';}


// BAKING MACHINES .....
function Load_Baking_Machines_Page () {}

// PARTY ACCESSORIES ....
function Load_Party_Accessories_Page () {}


// SCHOOL LOGIN REGISTER PAGE.........
function DisplayUploadedImage ( event, id )
{   
    let image = document.getElementById(id);
	image.src = URL.createObjectURL(event.target.files[0]);
}

function Display_Register_Form () 
{
    document.getElementById("school-login-div-id").style.display="none";
    document.getElementById("school-register-div-id").style.display="block";
}