
// var src_url = "http://127.0.0.1:6060/";
var src_url = "http://192.168.43.140:6060/";


            // Menu Gallery
function Add_Gallery_Iframe (endpoint)
{
    // document.getElementById("offline-label-div").style.display = "none";
    let MenuGalleryDiv = document.getElementById("menu-pics-div");
    let MenuIframe = document.createElement("iframe");
    MenuIframe.className = "menu-iframe";
    MenuIframe.setAttribute("src",  src_url + endpoint);
    MenuGalleryDiv.appendChild(MenuIframe); 
}
