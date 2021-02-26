/*
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            ==============
                                            | VIEW GUI   |
                                            ==============
//////////////////////////////////////////////////////////////////////////////////////////////////////

*/

function Hide_view_orders_divs ()
{
    // ROOT DIVS
    // document.getElementById("chips-orders-received-root-div").style.display = "none";
    
    // CHIPS CHILD DIVS
    document.getElementById("veiw-orders-received-view-all-div").style.display ="none";
    document.getElementById("veiw-orders-received-date-div").style.display ="none";
    document.getElementById("veiw-orders-received-date-div").style.display ="none";
    document.getElementById("veiw-orders-received-last-week-div").style.display ="none";
    document.getElementById("veiw-orders-received-from-to-div").style.display ="none";
    document.getElementById("veiw-orders-received-this-month-div").style.display ="none";
    document.getElementById("veiw-orders-received-last-month-div").style.display ="none";
    
    // CHIPS LOADERS ---
    document.getElementById("orders-received-all-loader").style.display = "none";
    document.getElementById("orders-received-by-date-today-loader").style.display = "none";
    document.getElementById("orders-received-date-date-loader").style.display = "none";
    document.getElementById("orders-received-last-week-loader").style.display = "none";
    document.getElementById("orders-received-from-to-loader").style.display = "none";
    document.getElementById("orders-received-this-month-loader").style.display = "none";
    document.getElementById("orders-received-last-month-loader").style.display = "none";
    
}


// ===============================================================
// CHIPS VIEW ............
function show_orders_received_view_all_div ()
{
    document.getElementById("veiw-orders-received-date-div").style.display ="none";
    document.getElementById("veiw-orders-received-last-week-div").style.display ="none";
    document.getElementById("veiw-orders-received-from-to-div").style.display ="none";
    document.getElementById("veiw-orders-received-this-month-div").style.display ="none";
    document.getElementById("veiw-orders-received-last-month-div").style.display ="none";
    document.getElementById("veiw-orders-received-view-all-div").style.display ="block";
}function close_orders_received_view_all_div () {document.getElementById("veiw-orders-received-view-all-div").style.display ="none";}

function show_orders_received_view_date_div ()
{
    document.getElementById("veiw-orders-received-last-week-div").style.display ="none";
    document.getElementById("veiw-orders-received-from-to-div").style.display ="none";
    document.getElementById("veiw-orders-received-this-month-div").style.display ="none";
    document.getElementById("veiw-orders-received-view-all-div").style.display ="none";
    document.getElementById("veiw-orders-received-last-month-div").style.display ="none";
    document.getElementById("veiw-orders-received-date-div").style.display ="block";
}

function show_orders_received_view_last_week_div ()
{
    document.getElementById("veiw-orders-received-date-div").style.display ="none";
    document.getElementById("veiw-orders-received-from-to-div").style.display ="none";
    document.getElementById("veiw-orders-received-this-month-div").style.display ="none";
    document.getElementById("veiw-orders-received-view-all-div").style.display ="none";
    document.getElementById("veiw-orders-received-last-month-div").style.display ="none";
    document.getElementById("veiw-orders-received-last-week-div").style.display ="block";
}

function show_orders_received_from_to_week_div ()
{
    document.getElementById("veiw-orders-received-date-div").style.display ="none";
    document.getElementById("veiw-orders-received-this-month-div").style.display ="none";
    document.getElementById("veiw-orders-received-view-all-div").style.display ="none";
    document.getElementById("veiw-orders-received-last-month-div").style.display ="none";
    document.getElementById("veiw-orders-received-last-week-div").style.display ="none";
    document.getElementById("veiw-orders-received-from-to-div").style.display ="block";
}


function show_orders_received_view_last_week_div ()
{
    document.getElementById("veiw-orders-received-date-div").style.display ="none";
    document.getElementById("veiw-orders-received-from-to-div").style.display ="none";
    document.getElementById("veiw-orders-received-this-month-div").style.display ="none";
    document.getElementById("veiw-orders-received-view-all-div").style.display ="none";
    document.getElementById("veiw-orders-received-last-month-div").style.display ="none";
    document.getElementById("veiw-orders-received-last-week-div").style.display ="block";
}

function show_chips_orders_received_view_this_month_div ()
{
    document.getElementById("veiw-orders-received-last-week-div").style.display ="none";
    document.getElementById("veiw-orders-received-from-to-div").style.display ="none";
    document.getElementById("veiw-orders-received-view-all-div").style.display ="none";
    document.getElementById("veiw-orders-received-last-month-div").style.display ="none";
    document.getElementById("veiw-orders-received-date-div").style.display ="none";
    document.getElementById("veiw-orders-received-this-month-div").style.display ="block";
}
function show_chips_orders_received_view_last_month_div ()
{
    document.getElementById("veiw-orders-received-date-div").style.display ="none";
    document.getElementById("veiw-orders-received-from-to-div").style.display ="none";
    document.getElementById("veiw-orders-received-this-month-div").style.display ="none";
    document.getElementById("veiw-orders-received-view-all-div").style.display ="none";
    document.getElementById("veiw-orders-received-last-week-div").style.display ="none";
    document.getElementById("veiw-orders-received-last-month-div").style.display ="block";
}
function show_chips_orders_received_date_today_grand_child_div ()
{
    document.getElementById("chips-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("chips-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("chips-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("chips-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("chips-orders-received-date-today-grand-child-div").style.display="block";
}function close_chips_orders_received_date_today_grand_child_div () {document.getElementById("chips-orders-received-date-today-grand-child-div").style.display="none";}

function show_chips_orders_received_date_grand_child_div ()
{
    document.getElementById("chips-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("chips-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("chips-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("chips-orders-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("chips-orders-received-date-grand-child-div").style.display = "block";
}
function close_chips_orders_received_date_grand_child_div () {document.getElementById("chips-orders-received-date-grand-child-div").style.display="none";}


function show_chips_orders_received_from_to_grand_child_div (){document.getElementById("chips-orders-received-from-to-all-grand-child-div").style.display="block";}
function close_chips_orders_received_from_to_grand_child_div () {document.getElementById("chips-orders-received-from-to-all-grand-child-div").style.display="none";}
function show_chips_orders_received_last_week_all_grand_child_div (){document.getElementById("chips-orders-received-last-week-all-grand-child-div").style.display = "block";}
function close_chips_orders_received_last_week_all_grand_child_div () {document.getElementById("chips-orders-received-last-week-all-grand-child-div").style.display="none";}

function show_chips_orders_received_this_month_grand_child_div ()
{
    document.getElementById("chips-orders-received-date-grand-child-div").style.display = "none";
    document.getElementById("chips-orders-received-date-today-grand-child-div").style.display="none";
    document.getElementById("chips-orders-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("chips-orders-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("veiw-orders-received-last-week-div").style.display = "none";
    document.getElementById("veiw-orders-received-last-month-div").style.display= "none";
    document.getElementById("veiw-orders-received-this-month-div").style.display="block";
}function close_chips_orders_received_this_month_grand_child_div () {document.getElementById("veiw-orders-received-this-month-div").style.display="none";}

function show_chips_orders_received_this_month_all_grand_child_div () {document.getElementById("chips-orders-received-this-month-all-grand-child-div").style.display = "block";}
function close_chips_orders_received_this_month_all_grand_child_div () {document.getElementById("chips-orders-received-this-month-all-grand-child-div").style.display = "none";}

function show_chips_orders_received_last_month_all_grand_child_div (){document.getElementById("chips-orders-received-last-month-by-all-grand-child-div").style.display = "block";}
function close_chips_orders_received_last_month_all_grand_child_div () {document.getElementById("chips-orders-received-last-month-by-all-grand-child-div").style.display="none";}
