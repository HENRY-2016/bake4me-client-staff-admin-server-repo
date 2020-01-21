
// var chint_names_url = "http://127.0.0.1:3000/";
var chint_names_url =  "http://172.105.158.108:3000/"

function view_mcb1p_names_status (html_id)
{
    View_mcb1p_names (html_id) ;
    // if (navigator.onLine){View_mcb1p_names (html_id);} 
    // else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_mcb1p_names (html_id)
{
    let mcb1p_names_req = new XMLHttpRequest ();
    mcb1p_names_req.open('post',chint_names_url+'read_mcb1p_names',true);
    mcb1p_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let mcb1p_names = document.getElementById(html_id);
    mcb1p_names_req.send(mcb1p_names);
}


function view_mcb2p_names_status (html_id)
{
    // View_mcb2p_names (html_id) ;
    if (navigator.onLine){View_mcb2p_names (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_mcb2p_names (html_id)
{
    let mcb2p_names_req = new XMLHttpRequest ();
    mcb2p_names_req.open('post',chint_names_url+'read_mcb2p_names',true);
    mcb2p_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let mcb2p_names = document.getElementById(html_id);
    mcb2p_names_req.send(mcb2p_names);
}


function view_mcb3p_names_status (html_id)
{
    // View_mcb3p_names (html_id) ;
    if (navigator.onLine){View_mcb3p_names (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_mcb3p_names (html_id)
{
    let mcb3p_names_req = new XMLHttpRequest ();
    mcb3p_names_req.open('post',chint_names_url+'read_mcb3p_names',true);
    mcb3p_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let mcb3p_names = document.getElementById(html_id);
    mcb3p_names_req.send(mcb3p_names);
}

function view_mcb4p_names_status (html_id)
{
    // View_mcb4p_names (html_id) ;
    if (navigator.onLine){View_mcb4p_names (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_mcb4p_names (html_id)
{
    let mcb4p_names_req = new XMLHttpRequest ();
    mcb4p_names_req.open('post',chint_names_url+'read_mcb4p_names',true);
    mcb4p_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let mcb4p_names = document.getElementById(html_id);
    mcb4p_names_req.send(mcb4p_names);
}


function view_led_bulbs_names_status (html_id)
{
    // View_led_bulbs_names (html_id) ;
    if (navigator.onLine){View_led_bulbs_names (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_led_bulbs_names (html_id)
{
    let led_bulbs_names_req = new XMLHttpRequest ();
    led_bulbs_names_req.open('post',chint_names_url+'read_led_bulbs_names',true);
    led_bulbs_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let led_bulbs_names = document.getElementById(html_id);
    led_bulbs_names_req.send(led_bulbs_names);
}


function view_led_flood_names_status (html_id)
{
    // View_led_flood_names (html_id) ;
    if (navigator.onLine){View_led_flood_names (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_led_flood_names (html_id)
{
    let led_flood_names_req = new XMLHttpRequest ();
    led_flood_names_req.open('post',chint_names_url+'read_led_flood_names',true);
    led_flood_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let led_flood_names = document.getElementById(html_id);
    led_flood_names_req.send(led_flood_names);
}


function view_led_ceiling_names_status (html_id)
{
    // View_led_ceiling_names (html_id) ;
    if (navigator.onLine){View_led_ceiling_names (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_led_ceiling_names (html_id)
{
    let led_ceiling_names_req = new XMLHttpRequest ();
    led_ceiling_names_req.open('post',chint_names_url+'read_led_ceiling_names',true);
    led_ceiling_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let led_ceiling_names = document.getElementById(html_id);
    led_ceiling_names_req.send(led_ceiling_names);
}


function view_led_panel_names_status (html_id)
{
    // View_led_panel_names (html_id) ;
    if (navigator.onLine){View_led_panel_names (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_led_panel_names (html_id)
{
    let led_panel_names_req = new XMLHttpRequest ();
    led_panel_names_req.open('post',chint_names_url+'read_led_panel_names',true);
    led_panel_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let led_panel_names = document.getElementById(html_id);
    led_panel_names_req.send(led_panel_names);
}


function view_mccb_names_status (html_id)
{
    // View_mccb_names (html_id) ;
    if (navigator.onLine){View_mccb_names (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_mccb_names (html_id)
{
    let mccb_names_req = new XMLHttpRequest ();
    mccb_names_req.open('post',chint_names_url+'read_mccb_names',true);
    mccb_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let mccb_names = document.getElementById(html_id);
    mccb_names_req.send(mccb_names);
}

function view_main_switch_names_status (html_id)
{
    // View_main_switch_names (html_id) ;
    if (navigator.onLine){View_main_switch_names (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_main_switch_names (html_id)
{
    let main_switch_names_req = new XMLHttpRequest ();
    main_switch_names_req.open('post',chint_names_url+'read_main_switch_names',true);
    main_switch_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let main_switch_names = document.getElementById(html_id);
    main_switch_names_req.send(main_switch_names);
}


function view_cables_names_status (html_id)
{
    // View_cables_names (html_id) ;
    if (navigator.onLine){View_cables_names (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_cables_names (html_id)
{
    let cables_names_req = new XMLHttpRequest ();
    cables_names_req.open('post',chint_names_url+'read_cables_names',true);
    cables_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let cables_names = document.getElementById(html_id);
    cables_names_req.send(cables_names);
}

function view_contactor_names_status (html_id)
{
    // View_contactor_names (html_id) ;
    if (navigator.onLine){View_contactor_names (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_contactor_names (html_id)
{
    let contactor_names_req = new XMLHttpRequest ();
    contactor_names_req.open('post',chint_names_url+'read_contactor_names',true);
    contactor_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let contactor_names = document.getElementById(html_id);
    contactor_names_req.send(contactor_names);
}


function view_industrial_switch_status (html_id)
{
    // View_industrial_switch (html_id) ;
    if (navigator.onLine){View_industrial_switch (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_industrial_switch (html_id)
{
    let industrial_switch_req = new XMLHttpRequest ();
    industrial_switch_req.open('post',chint_names_url+'read_industrial_switch_names',true);
    industrial_switch_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let industrial_switch = document.getElementById(html_id);
    industrial_switch_req.send(industrial_switch);
}


function view_industrial_socket_status (html_id)
{
    // View_industrial_socket (html_id) ;
    if (navigator.onLine){View_industrial_socket (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_industrial_socket (html_id)
{
    let industrial_socket_req = new XMLHttpRequest ();
    industrial_socket_req.open('post',chint_names_url+'read_industrial_socket_names',true);
    industrial_socket_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let industrial_socket = document.getElementById(html_id);
    industrial_socket_req.send(industrial_socket);
}


function view_gold_switch_status (html_id)
{
    // View_switch_socket (html_id) ;
    if (navigator.onLine){View_gold_switch (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_gold_switch (html_id)
{
    let gold_switch_req = new XMLHttpRequest ();
    gold_switch_req.open('post',chint_names_url+'read_gold_switch_names',true);
    gold_switch_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let gold_switch = document.getElementById(html_id);
    gold_switch_req.send(gold_switch);
}


function view_gold_socket_status (html_id)
{
    // View_gold_socket (html_id) ;
    if (navigator.onLine){View_gold_socket (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_gold_socket (html_id)
{
    let gold_socket_req = new XMLHttpRequest ();
    gold_socket_req.open('post',chint_names_url+'read_gold_socket_names',true);
    gold_socket_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let gold_socket = document.getElementById(html_id);
    gold_socket_req.send(gold_socket);
}

function view_silver_switch_status (html_id)
{
    // View_switch_socket (html_id) ;
    if (navigator.onLine){View_silver_switch (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function view_white_switch_status (html_id)
{
    // View_switch_socket (html_id) ;
    if (navigator.onLine){View_white_switch (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_white_switch (html_id)
{
    let white_switch_req = new XMLHttpRequest ();
    white_switch_req.open('post',chint_names_url+'read_white_switch_names',true);
    white_switch_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let white_switch = document.getElementById(html_id);
    white_switch_req.send(white_switch);
}


function view_white_socket_status (html_id)
{
    // View_white_socket (html_id) ;
    if (navigator.onLine){View_white_socket (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_white_socket (html_id)
{
    let white_socket_req = new XMLHttpRequest ();
    white_socket_req.open('post',chint_names_url+'read_white_socket_names',true);
    white_socket_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let white_socket = document.getElementById(html_id);
    white_socket_req.send(white_socket);
}

function view_silver_switch_status (html_id)
{
    // View_switch_socket (html_id) ;
    if (navigator.onLine){View_silver_switch (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}


function View_silver_switch (html_id)
{
    let silver_switch_req = new XMLHttpRequest ();
    silver_switch_req.open('post',chint_names_url+'read_silver_switch_names',true);
    silver_switch_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let silver_switch = document.getElementById(html_id);
    silver_switch_req.send(silver_switch);
}


function view_silver_socket_status (html_id)
{
    // View_silver_socket (html_id) ;
    if (navigator.onLine){View_silver_socket (html_id);} 
    else {ERROR = "Names Not Loaded Connect to Network "; alert (ERROR)}

}

function View_silver_socket (html_id)
{
    let silver_socket_req = new XMLHttpRequest ();
    silver_socket_req.open('post',chint_names_url+'read_silver_socket_names',true);
    silver_socket_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let silver_socket = document.getElementById(html_id);
    silver_socket_req.send(silver_socket);
}
