


// var all_names_url = "http://127.0.0.1:3000/";
var all_names_url =  "http://172.105.158.108:3000/"



function check_agency_staffs_status ()
{
    // Load_agency_staffs () ;
    if (navigator.onLine){Load_agency_staffs ();}
    else {ERROR = "Staffs Not Loaded Connect to Network "; alert (ERROR)}
}


function Load_agency_staffs ()
{
    let staff_names_req = new XMLHttpRequest ();
    staff_names_req.open('post' ,all_names_url + 'agency_staff_names',true);
    staff_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText);
            let html_select_input = document.getElementById("agency-staff-names");
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let staff_names = document.getElementById('agency-staff-names');
    staff_names_req.send(staff_names);
}

function check_sadolin_staffs_status (html_id)
{
    // Load_sadolin_staffs (html_id);
    
    if (navigator.onLine){Load_sadolin_staffs (html_id);}
    else {ERROR = "Staffs Not Loaded Connect to Network "; alert (ERROR)}
}

function Load_sadolin_staffs (html_id)
{
    let staff_names_req = new XMLHttpRequest ();
    staff_names_req.open('post',all_names_url+'sadolin_staff_names',true);
    staff_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let staff_names = document.getElementById(html_id);
    staff_names_req.send(staff_names);
}

function view_keracolor_names_status (html_id)
{
    // View_keracolor_names (html_id) ;
    if (navigator.onLine){View_keracolor_names (html_id);} 
}

function View_keracolor_names (html_id)
{
    let keracolor_names_req = new XMLHttpRequest ();
    keracolor_names_req.open('post',all_names_url+'keracolor_names',true);
    keracolor_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let keracolor_names = document.getElementById(html_id);
    keracolor_names_req.send(keracolor_names);
}


//================================>>>>
function check_bases_status (html_id)
{
    // Load_bases (html_id);
    if (navigator.onLine){Load_bases (html_id);}
}

function Load_bases (html_id)
{
    let bases_req = new XMLHttpRequest ();
    bases_req.open('post',all_names_url+'bases_names',true);
    bases_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let bases = document.getElementById(html_id);
    bases_req.send(bases);
}

//================================>>>>
function check_thinner_names_status ()
{
    // Load_thinner_names () ;
    if (navigator.onLine){Load_thinner_names ();}
}

function Load_thinner_names ()
{
    let thinner_names_req = new XMLHttpRequest ();
    thinner_names_req.open('post',all_names_url+'thinner_names',true);
    thinner_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById("thinner-names");
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let thinner_names = document.getElementById('thinner-names');
    thinner_names_req.send(thinner_names);
}

//================================>>>>

function check_silk_names_status ()
{
    // Load_silk_names () ;
    if (navigator.onLine){Load_silk_names ();}
}

function Load_silk_names ()
{
    let silk_names_req = new XMLHttpRequest ();
    silk_names_req.open('post',all_names_url+'silk_names',true);
    silk_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById("silk-names");
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let silk_names = document.getElementById('silk-names');
    silk_names_req.send(silk_names);
}


//================================>>>>

function check_super_names_status ()
{
    // Load_super_names () ;
    if (navigator.onLine){Load_super_names ();}
}

function Load_super_names ()
{
    let super_names_req = new XMLHttpRequest ();
    super_names_req.open('post',all_names_url+'super_names',true);
    super_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById("super-names");
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let super_names = document.getElementById('super-names');
    super_names_req.send(super_names);
}

//================================>>>>

function check_weather_names_status ()
{
    // Load_weather_names () ;
    if (navigator.onLine){Load_weather_names ();}
}

function Load_weather_names ()
{
    let weather_names_req = new XMLHttpRequest ();
    weather_names_req.open('post',all_names_url+'weather_names',true);
    weather_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById("weather-names");
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let weather_names = document.getElementById('weather-names');
    weather_names_req.send(weather_names);
}

//================================>>>>

function check_roodmarking_names_status ()
{
    // Load_roodmarking_names () ;
    if (navigator.onLine){Load_roodmarking_names ();}
}

function Load_roodmarking_names ()
{
    let roodmarking_names_req = new XMLHttpRequest ();
    roodmarking_names_req.open('post',all_names_url+'roodmarking_names',true);
    roodmarking_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById("roodmarking-names");
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let roodmarking_names = document.getElementById('roodmarking-names');
    roodmarking_names_req.send(roodmarking_names);
}

//================================>>>>

function check_Roofguard_names_status ()
{
    // Load_Roofguard_names () ;
    if (navigator.onLine){Load_Roofguard_names ();}
}

function Load_Roofguard_names ()
{
    let Roofguard_names_req = new XMLHttpRequest ();
    Roofguard_names_req.open('post',all_names_url+'roofguard_names',true);
    Roofguard_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById("roofguard-names");
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let Roofguard_names = document.getElementById('roofguard-names');
    Roofguard_names_req.send(Roofguard_names);
}

//================================>>>>

function check_emulsion_names_status ()
{
    // Load_emulsion_names () ;
    if (navigator.onLine){Load_emulsion_names ();}
}

function Load_emulsion_names ()
{
    let emulsion_names_req = new XMLHttpRequest ();
    emulsion_names_req.open('post',all_names_url+'emulsion_names',true);
    emulsion_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById("emulsion-names");
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let emulsion_names = document.getElementById('emulsion-names');
    emulsion_names_req.send(emulsion_names);
}

//================================>>>>

function check_budget_names_status ()
{
    // Load_budget_names () ;
    if (navigator.onLine){Load_budget_names ();}
}

function Load_budget_names ()
{
    let budget_names_req = new XMLHttpRequest ();
    budget_names_req.open('post',all_names_url+'glose_names',true);
    budget_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById("budget-names");
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let budget_names = document.getElementById('budget-names');
    budget_names_req.send(budget_names);
}



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ view @@@@@@@@@@@@@@@@@@@@@@@@@@
function view_emulsion_names_status (html_id)
{
    // View_emulsion_names (html_id) ;
    if (navigator.onLine){View_emulsion_names (html_id);}
}

function View_emulsion_names (html_id)
{
    let emulsion_names_req = new XMLHttpRequest ();
    emulsion_names_req.open('post',all_names_url+'emulsion_names',true);
    emulsion_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let emulsion_names = document.getElementById(html_id);
    emulsion_names_req.send(emulsion_names);
}

function view_thinner_names_status (html_id)
{
    // View_thinner_names (html_id) ;
   if (navigator.onLine){View_thinner_names (html_id);}
}

function View_thinner_names (html_id)
{
    let thinner_names_req = new XMLHttpRequest ();
    thinner_names_req.open('post',all_names_url+'thinner_names',true);
    thinner_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let thinner_names = document.getElementById(html_id);
    thinner_names_req.send(thinner_names);
}

function view_roodmarking_names_status (html_id)
{
    // View_roodmarking_names (html_id) ;
    if (navigator.onLine){View_roodmarking_names (html_id);} 

}

function View_roodmarking_names (html_id)
{
    let roodmarking_names_req = new XMLHttpRequest ();
    roodmarking_names_req.open('post',all_names_url+'roodmarking_names',true);
    roodmarking_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let roodmarking_names = document.getElementById(html_id);
    roodmarking_names_req.send(roodmarking_names);
}


function view_silk_names_status (html_id)
{
    // View_silk_names (html_id) ;
    if (navigator.onLine){View_silk_names (html_id);}
}

function View_silk_names (html_id)
{
    let silk_names_req = new XMLHttpRequest ();
    silk_names_req.open('post',all_names_url+'silk_names',true);
    silk_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let silk_names = document.getElementById(html_id);
    silk_names_req.send(silk_names);
}



function view_glose_names_status (html_id)
{
    // View_glose_names (html_id) ;
    if (navigator.onLine){View_glose_names (html_id);}
}

function View_glose_names (html_id)
{
    let glose_names_req = new XMLHttpRequest ();
    glose_names_req.open('post',all_names_url+'glose_names',true);
    glose_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let glose_names = document.getElementById(html_id);
    glose_names_req.send(glose_names);
}

function view_super_names_status (html_id)
{
    // View_super_names (html_id) ;
    if (navigator.onLine){Load_super_names (html_id);}
}

function View_super_names (html_id)
{
    let super_names_req = new XMLHttpRequest ();
    super_names_req.open('post',all_names_url+'super_names',true);
    super_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let super_names = document.getElementById(html_id);
    super_names_req.send(super_names);
}


function view_bases_status (html_id)
{
    // View_bases (html_id) ;
    if (navigator.onLine){View_bases (html_id);}
}

function View_bases (html_id)
{
    let weather_bases_req = new XMLHttpRequest ();
    weather_bases_req.open('post',all_names_url+'all_bases',true);
    weather_bases_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let weather_bases = document.getElementById(html_id);
    weather_bases_req.send(weather_bases);
}









