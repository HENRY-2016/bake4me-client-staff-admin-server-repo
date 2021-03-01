
var data_src_url = "http://127.0.0.1:6060/";
// var data_src_url = "http://192.168.43.140:6060/";

let url = 'http://localhost/';
let html_pages_source_dir = 'bake4me-client-staff-admin-server-repo/';
let php_pages_source_dir = 'bake4me-php/';


// BAKERY NAVIGATION ...........
function Load_Cakes_Page () {window.location='bakery_cakes.html'}
function Bakery_Register () {window.location='bakery_register.html'}
function Bakery_Log_Out () {window.location='clientindex.html'}
function Bakery_Log_In () {window.location='clientindex.html'}


// STAFFS
function Load_Crud_Page () {window.location='staff_bakery_crud.html'}


// OUTLETS NAVIGATION ......
function Load_Outlets_Page () {window.location='bakery_outlets.html';}

// SCHOOL NAVIGATION ..... 
// function Load_School_Index_Page () {window.location = 'school_index.html';}
function  Load_School_Login_Register () {window.location = 'school_login_register.html';}
// function School_Logout () {window.location = url+php_pages_source_dir+'school_logout.php';}
function School_LogOut () {window.location='school_login_register.html';}
function School_LogIn () {window.location='school_login_register.html';}
function Load_School_Notice_Board () {window.location = 'school_notice_board.html';}
function Load_School_Materials () {window.location = 'school_materials.html';}
function Load_School_Calender () {window.location = 'school_calender.html';}
function Load_School_Payment () {window.location = 'school_payment.html';}


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



// Menu Gallery
function Add_Gallery_Iframe (endpoint)
{
    // document.getElementById("offline-label-div").style.display = "none";
    let MenuGalleryDiv = document.getElementById("menu-pics-div");
    let MenuIframe = document.createElement("iframe");
    MenuIframe.className = "menu-iframe";
    MenuIframe.setAttribute("src",  data_src_url + endpoint);
    MenuGalleryDiv.appendChild(MenuIframe); 
}