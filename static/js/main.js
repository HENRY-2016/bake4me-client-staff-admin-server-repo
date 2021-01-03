


function CreateCustomAlertBox()
{
    this.render = function(dialog){
        let winW = window.innerWidth;
        let winH = window.innerHeight;
        let AlertBoxDisplayArea = document.getElementById('alert-box-display-area');
        let HtmlAlertBox = document.getElementById('alert-box');
        AlertBoxDisplayArea.style.display = "block";
        AlertBoxDisplayArea.style.height = winH+"px";
        HtmlAlertBox.style.left = (winW/2) - (550 * .5)+"px";
        HtmlAlertBox.style.top = "100px";
        HtmlAlertBox.style.display = "block";
        document.getElementById('alert-box-header').innerHTML = "Network Error ";
        document.getElementById('alert-box-body').innerHTML = dialog;
        document.getElementById('alert-box-footer').innerHTML = '<button class="ok-alert-btn" onclick="Alert.ok()">OK</button>';
    }
    this.ok = function()
        {
            document.getElementById('alert-box').style.display = "none";
            document.getElementById('alert-box-display-area').style.display = "none";
        }
}
var Alert = new CreateCustomAlertBox();

function ShowAlertBox (){Alert.render('<center>Please turn on <br> your network <br>and <br> Try Again</center>')}


function Load_developer () {window.location="developer.html"}
function Load_index () 
{
    window.location="index.html"
    if(!navigator.onLine) {ShowAlertBox ()}
    else if (navigator.onLine) {window.location="index.html"}

}
function Load_Boxes_view () 
{
    // window.location="boxes.html";
    window.location="index.html";    
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="boxes.html";}

}
function Load_Baskets_View () 
{
    window.location="baskets.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="boxes.html";}
}
function Load_Funeral_View () 
{
    window.location="funeral.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="funeral.html";}
}

function Load_Bouquets_Hand_View () 
{
    window.location="bouquets_hand.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="bouquets_hand.html";}
}
function Load_Bouquets_Standing_View () 
{
    window.location="bouquets_standing.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="bouquets_standing.html";}
}
function Load_Functional_Trollies_View () 
{
    window.location="functional_trollies.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="functional_trollies.html";}
}
function Load_Functional_Introduction_View () 
{
    window.location="functional_introduction.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="functional_introduction.html";}
}
function Load_Decoratives_Interior_Conrer_View () 
{
    window.location="decoratives_interior_conrer.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_interior_conrer.html";}
}
function Load_Decoratives_Interior_Entrana_View () 
{
    window.location="decoratives_interior_entrana.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_interior_entrana.html";}
}
function Load_Decoratives_Interior_Plonters_View () 
{
    window.location="decoratives_interior_plonters.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_interior_plonters.html";}
}
function Load_Decoratives_Interior_Walkway_View () 
{
    window.location="decoratives_interior_walkway.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_interior_walkway.html";}
}
function Load_Decoratives_Interior_Wallunit_View () 
{
    window.location="decoratives_interior_wallunit.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_interior_wallunit.html";}
}
function Load_Decoratives_Functional_Birthday_View () 
{
    window.location="decoratives_functional_birthday.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_functional_birthday.html";}
}
function Load_Decoratives_Functional_Weddings_View () 
{
    window.location="decoratives_functional_weddings.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_functional_weddings.html";}
}
function Load_Decoratives_Functional_babyshower_View () 
{
    window.location="decoratives_functional_babyshower.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_functional_babyshower.html";}
}
function Load_Decoratives_Functional_Introduction_View () 
{
    window.location="decoratives_functional_introduction.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_functional_introduction.html";}
}

