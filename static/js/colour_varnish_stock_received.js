
// var varnish_url = "http://127.0.0.1:3000/";
var varnish_url = "http://172.105.158.108:3000/";


var seconds = 1000;
var loader_seconds = 3000;

function hide_divs_and_Load_offline_data ()
{
    hide_sadolin_veiw_colour_varnish_divs ();
    Load_offline_data ();
}

/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           RECIEVED STOCK  
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

function hide_sadolin_veiw_colour_varnish_divs ()
{
    
    document.getElementById("colour_varnish-root-div").style.display="none";
    document.getElementById("colour_varnish-view-all-div").style.display="none";
    document.getElementById("colour_varnish-search-by-name-div").style.display="none";
    document.getElementById("colour_varnish-search-by-size-div").style.display="none";
    document.getElementById("colour_varnish-search-by-date-div").style.display="none";
    document.getElementById("colour_varnish-from-to-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-week-div").style.display="none";
    document.getElementById("colour_varnish-search-by-this-month-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-month-div").style.display="none";
    
    // Loaders
    document.getElementById("received-stock-loader-all").style.display="none";
    document.getElementById("received-stock-loader-name").style.display="none";
    document.getElementById("received-stock-loader-size").style.display="none";
    document.getElementById("received-stock-loader-date-today").style.display="none";
    document.getElementById("received-stock-loader-date-date").style.display="none";
    document.getElementById("received-stock-loader-date-name-date").style.display="none";
    document.getElementById("received-stock-loader-from-to-all").style.display = "none";
    document.getElementById("received-stock-loader-from-to-name").style.display = "none";
    document.getElementById("received-stock-loader-last-week-all").style.display="none";
    document.getElementById("received-stock-loader-last-week-name").style.display="none";
    document.getElementById("received-stock-loader-this-month-all").style.display="none";
    document.getElementById("received-stock-loader-this-month-name").style.display="none";
    document.getElementById("received-stock-loader-last-month-all").style.display="none";
    document.getElementById("received-stock-loader-last-month-name").style.display="none";

    // grand-childrens
    document.getElementById("date-today-grand-child-div").style.display = "none";
    document.getElementById("date-date-grand-child-div").style.display="none";
    document.getElementById("date-name-date-grand-child-div").style.display= "none";
    document.getElementById("from-to-all-grand-child-div").style.display="none";
    document.getElementById("from-to-by-name-grand-child-div").style.display="none";
    document.getElementById("last-week-all-grand-child-div").style.display="none";
    document.getElementById("last-week-by-name-grand-child-div").style.display="none";
    document.getElementById("this-month-all-grand-child-div").style.display="none";
    document.getElementById("this-month-by-name-grand-child-div").style.display = "none";
    document.getElementById("last-month-all-grand-child-div").style.display="none";
    document.getElementById("last-month-by-name-grand-child-div").style.display="none";
}

function show_budget_gloss_root_div ()
    {
        document.getElementById("stock-status-root-div").style.display = "none";
        document.getElementById("colour-v-stock-flow-root-div").style.display="none";
        document.getElementById("colour_varnish-root-div").style.display="block";
    }
function close_stock_root_div ()
    { document.getElementById("colour_varnish-root-div").style.display="none";}


function show_colour_varnish_view_all_div ()
{
    document.getElementById("colour_varnish-search-by-name-div").style.display="none";
    document.getElementById("colour_varnish-search-by-size-div").style.display="none";
    document.getElementById("colour_varnish-search-by-date-div").style.display="none";
    document.getElementById("colour_varnish-from-to-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-week-div").style.display="none";
    document.getElementById("colour_varnish-search-by-this-month-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-month-div").style.display="none";
    document.getElementById("colour_varnish-view-all-div").style.display="block";

}
function close_colour_varnish_view_all_div ()
    {document.getElementById("colour_varnish-view-all-div").style.display="none";}

function show_colour_varnish_search_by_name_div ()
{
    document.getElementById("colour_varnish-search-by-size-div").style.display="none";
    document.getElementById("colour_varnish-search-by-date-div").style.display="none";
    document.getElementById("colour_varnish-from-to-div").style.display="none";
    document.getElementById("colour_varnish-view-all-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-week-div").style.display="none";
    document.getElementById("colour_varnish-search-by-this-month-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-month-div").style.display="none";
    document.getElementById("colour_varnish-search-by-name-div").style.display="block";
}
function close_colour_varnish_search_by_name_div ()
    {document.getElementById("colour_varnish-search-by-name-div").style.display="none";}

function show_colour_varnish_search_by_size_div ()
{
    document.getElementById("colour_varnish-search-by-date-div").style.display="none";
    document.getElementById("colour_varnish-from-to-div").style.display="none";
    document.getElementById("colour_varnish-view-all-div").style.display="none";
    document.getElementById("colour_varnish-search-by-name-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-week-div").style.display="none";
    document.getElementById("colour_varnish-search-by-this-month-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-month-div").style.display="none";
    document.getElementById("colour_varnish-search-by-size-div").style.display="block";
}
function close_colour_varnish_search_by_size_div ()
    {document.getElementById("colour_varnish-search-by-size-div").style.display="none";}

function show_colour_varnish_search_by_date_div ()
{
    document.getElementById("colour_varnish-from-to-div").style.display="none";
    document.getElementById("colour_varnish-view-all-div").style.display="none";
    document.getElementById("colour_varnish-search-by-name-div").style.display="none";
    document.getElementById("colour_varnish-search-by-size-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-week-div").style.display="none";
    document.getElementById("colour_varnish-search-by-this-month-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-month-div").style.display="none";
    document.getElementById("colour_varnish-search-by-date-div").style.display="block";
}
function close_colour_varnish_search_by_date_div ()
    {document.getElementById("colour_varnish-search-by-date-div").style.display="none";}

function show_colour_varnish_from_to_div ()
{
    document.getElementById("colour_varnish-view-all-div").style.display="none";
    document.getElementById("colour_varnish-search-by-name-div").style.display="none";
    document.getElementById("colour_varnish-search-by-size-div").style.display="none";
    document.getElementById("colour_varnish-search-by-date-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-week-div").style.display="none";
    document.getElementById("colour_varnish-search-by-this-month-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-month-div").style.display="none";
    document.getElementById("colour_varnish-from-to-div").style.display="block";
}
function close_colour_varnish_from_to_div ()
    {document.getElementById("colour_varnish-from-to-div").style.display="none";}



function show_colour_varnish_search_by_last_week_div ()
{
    document.getElementById("colour_varnish-view-all-div").style.display="none";
    document.getElementById("colour_varnish-search-by-name-div").style.display="none";
    document.getElementById("colour_varnish-search-by-size-div").style.display="none";
    document.getElementById("colour_varnish-search-by-date-div").style.display="none";
    document.getElementById("colour_varnish-from-to-div").style.display="none";
    document.getElementById("colour_varnish-search-by-this-month-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-month-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-week-div").style.display="block";
}
function close_colour_varnish_search_by_last_week_div ()
    {document.getElementById("colour_varnish-search-by-last-week-div").style.display="none";}


function show_colour_varnish_search_by_this_month_div ()
{
document.getElementById("colour_varnish-view-all-div").style.display="none";
    document.getElementById("colour_varnish-search-by-name-div").style.display="none";
    document.getElementById("colour_varnish-search-by-size-div").style.display="none";
    document.getElementById("colour_varnish-search-by-date-div").style.display="none";
    document.getElementById("colour_varnish-from-to-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-week-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-month-div").style.display="none"; 
    document.getElementById("colour_varnish-search-by-this-month-div").style.display="block";
}
function close_colour_varnish_search_by_this_month_div ()
    {document.getElementById("colour_varnish-search-by-this-month-div").style.display="none";}

function show_colour_varnish_search_by_last_month_div ()
{
    document.getElementById("colour_varnish-view-all-div").style.display="none";
    document.getElementById("colour_varnish-search-by-name-div").style.display="none";
    document.getElementById("colour_varnish-search-by-size-div").style.display="none";
    document.getElementById("colour_varnish-search-by-date-div").style.display="none";
    document.getElementById("colour_varnish-from-to-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-week-div").style.display="none";
    document.getElementById("colour_varnish-search-by-this-month-div").style.display="none";
    document.getElementById("colour_varnish-search-by-last-month-div").style.display="block";
}
function close_colour_varnish_search_by_last_month_div ()
    {document.getElementById("colour_varnish-search-by-last-month-div").style.display="none";}

// grand childrens
function show_date_today_grand_child_div ()
    {document.getElementById("date-today-grand-child-div").style.display="block";}
function close_date_today_grand_child_div ()
    {document.getElementById("date-today-grand-child-div").style.display="none";}
function show_date_date_grand_child_div ()
    {document.getElementById("date-date-grand-child-div").style.display="block";}
function close_date_date_grand_child_div ()
    {document.getElementById("date-date-grand-child-div").style.display="none";}
function show_date_name_date_grand_child_div ()
    {document.getElementById("date-name-date-grand-child-div").style.display="block";}
function close_date_name_date_grand_child_div ()
    {document.getElementById("date-name-date-grand-child-div").style.display="none";}
function show_from_to_all_grand_child_div ()
    {document.getElementById("from-to-all-grand-child-div").style.display="block";}
function close_from_to_all_grand_child_div ()
    {document.getElementById("from-to-all-grand-child-div").style.display="none";}
function show_from_to_by_name_grand_child_div ()
    {document.getElementById("from-to-by-name-grand-child-div").style.display="block";}
function close_from_to_by_name_grand_child_div ()
    {document.getElementById("from-to-by-name-grand-child-div").style.display="none";}
function show_last_week_all_grand_child_div ()
    {document.getElementById("last-week-all-grand-child-div").style.display="block";}
function close_last_week_all_grand_child_div ()
    {document.getElementById("last-week-all-grand-child-div").style.display="none";}
function show_last_week_by_name_grand_child_div ()
    {document.getElementById("last-week-by-name-grand-child-div").style.display="block";}
function close_last_week_by_name_grand_child_div ()
    {document.getElementById("last-week-by-name-grand-child-div").style.display="none";}
function show_this_month_all_grand_child_div ()
    {document.getElementById("this-month-all-grand-child-div").style.display="block";}
function close_this_month_all_grand_child_div ()
    {document.getElementById("this-month-all-grand-child-div").style.display="none";}
function show_this_month_by_name_grand_child_div ()
    {document.getElementById("this-month-by-name-grand-child-div").style.display="block";}
function close_this_month_by_name_grand_child_div ()
    {document.getElementById("this-month-by-name-grand-child-div").style.display="none";}
function show_last_month_all_grand_child_div ()
    {document.getElementById("last-month-all-grand-child-div").style.display="block";}
function close_last_month_all_grand_child_div ()
    {document.getElementById("last-month-all-grand-child-div").style.display="none";}
    function show_last_month_by_name_grand_child_div ()
    {document.getElementById("last-month-by-name-grand-child-div").style.display="block";}
function close_last_month_by_name_grand_child_div ()
    {document.getElementById("last-month-by-name-grand-child-div").style.display="none";}



function fetch_received_stock_all_data ()
{
    document.getElementById("received-stock-loader-all").style.display="block";
    setTimeout(stock_view_all,loader_seconds)
}

    // ==================
function stock_view_all ()
    {
        document.getElementById("received-stock-loader-all").style.display="none";
        let req = new XMLHttpRequest();
        req.open('post', varnish_url+'colour_varnish_stock_view_all',true)
        req.onload = function ()
            {
                let results = JSON.parse(this.responseText);
                if (! results || !results.length)
                    {
                        alert("No results found")
                    }
                else
                    {
                        let tbody = document.getElementById('show-all-tbody');
                        tbody.innerHTML = ' ';
    
                        // draw table
                        let td,tr;
                        // add table headings
                        let th_names = new Array ();
                        th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                        let columns_to_count = th_names[0].length;
                        row = tbody.insertRow(-1); 
                        for (let looper =0; looper<columns_to_count; ++looper)
                            {
                                let headerNames = document.createElement("th");
                                headerNames.className='js_table_headers'
                                headerNames.innerHTML = th_names[0][looper];
                                row.appendChild(headerNames)
                            }
    
                        for (let table_row = 0; table_row < results.length; ++table_row)
                            {
                                tr = document.createElement('tr');
                                tr.className='js_table_row';
                                for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                    {
                                        td = document.createElement('td');
                                        td.setAttribute("align", "center"); 
                                        td.innerHTML = results[table_row][table_data];
                                        tr.appendChild(td)
                                    }
                                    tbody.appendChild(tr)
                            }
                    }
            }
            let div_tag = document.getElementById('show-all-tbody-div');
            req.send(div_tag);  
            setTimeout(save_show_all_data,seconds);      
    }
    
    // +++++++++++++++++++++++++++++++++++++++>>>
    






// ============================= view by name
function fetch_received_stock_name_data ()
{
    document.getElementById("received-stock-loader-name").style.display="block";
    setTimeout(stock_view_by_name,loader_seconds)
}
function stock_view_by_name ()
{
    document.getElementById("received-stock-loader-name").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', varnish_url+'colour_varnish_stock_view_by_name',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {
                    alert("No results found")
                }
            else
                {
                    let tbody = document.getElementById('stock-view-by-name-tbody');
                    tbody.innerHTML = ' ';

                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let stock_view_by_name = new FormData(document.getElementById('stock-view-by-name-form'));
        req.send(stock_view_by_name);   
        setTimeout(save_stock_view_by_name_data,seconds);     
}

// +++++++++++++++++++++++++++++++++++++++>>>

// ============================= view by name

function fetch_received_stock_size_data ()
{
    document.getElementById("received-stock-loader-size").style.display="block";
    setTimeout(stock_view_by_size,loader_seconds)
}

function stock_view_by_size ()
{
    document.getElementById("received-stock-loader-size").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', varnish_url+'colour_varnish_stock_view_by_size',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-view-by-size-tbody');
                    tbody.innerHTML = ' ';

                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 

                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let stock_view_by_size = new FormData(document.getElementById('stock-view-by-size-form'));
        req.send(stock_view_by_size);        
        setTimeout(save_stock_view_by_size_data,seconds);
}


function fetch_received_stock_date_today_data ()
{
    document.getElementById("received-stock-loader-date-today").style.display="block";
    setTimeout(stock_view_by_date_today,loader_seconds)
}
function stock_view_by_date_today ()
{
    document.getElementById("received-stock-loader-date-today").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', varnish_url+'colour_varnish_stock_view_by_date_today',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-view-by-date-today-tbody');
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let data = document.getElementById('stock-view-by-date-today-div');
        req.send(data); 
        setTimeout (save_by_date_today_data,seconds);       
}

function fetch_received_stock_date_date_data ()
{
    document.getElementById("received-stock-loader-date-date").style.display="block";
    setTimeout(stock_view_by_date_date,loader_seconds)
}
function stock_view_by_date_date ()
{
    document.getElementById("received-stock-loader-date-date").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', varnish_url+'colour_varnish_stock_view_by_date_date',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('date-date-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = new FormData(document.getElementById('stock-date-date-form'));
        req.send(date);        
        setTimeout(save_date_date_data,seconds);
}

// ======================================
function fetch_received_stock_date_name_date_data ()
{
    document.getElementById("received-stock-loader-date-name-date").style.display="block";
    setTimeout(stock_view_by_date_name_date,loader_seconds)
}

function stock_view_by_date_name_date ()
{
    document.getElementById("received-stock-loader-date-name-date").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', varnish_url+'colour_varnish_stock_view_by_date_date_name',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('date-date-name-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = new FormData(document.getElementById('stock-date-name-form'));
        req.send(date);        
        setTimeout(save_date_date_name,seconds);
}

// ======================================

function fetch_received_stock_from_to_all_data ()
{
    document.getElementById("received-stock-loader-from-to-all").style.display="block";
    setTimeout(stock_from_to_all,loader_seconds)
}
function stock_from_to_all ()
{
    document.getElementById("received-stock-loader-from-to-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', varnish_url+'colour_varnish_from_to_all',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('from-to-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = document.getElementById('from-to-div');
        req.send(date);        
        setTimeout(save_from_to,seconds);
}
// ======================================

function fetch_received_stock_from_to_name_data ()
{
    document.getElementById("received-stock-loader-from-to-name").style.display="block";
    setTimeout(stock_from_to_name,loader_seconds)
}
function stock_from_to_name ()
{
    document.getElementById("received-stock-loader-from-to-name").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', varnish_url+'colour_varnish_from_to_name',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('from-to-name-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 1; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = new FormData(document.getElementById('from-to-name-form'));
        req.send(date);        
        setTimeout(save_from_to_name,seconds);
}
// +++++++++++++++++++++++++++++++++++++++>>>
function fetch_received_stock_last_week_all_data ()
{
    document.getElementById("received-stock-loader-last-week-all").style.display="block";
    setTimeout(stock_last_week_all,loader_seconds)
}

function stock_last_week_all ()
{
    document.getElementById("received-stock-loader-last-week-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', varnish_url+'colour_varnish_last_week_all_data',true)
    req.onload = function ()
        {
            document.getElementById("received-stock-loader-last-week-all").style.display="none";
            let results = JSON.parse(this.responseText);
            console.log(results);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('last-week-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 1; table_data< (results[table_row].length-1);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = document.getElementById('last-week-all-grand-child-div');
        req.send(date);        
        setTimeout(save_show_last_week_all,seconds);
}
// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_received_stock_last_week_name_data ()
{
    document.getElementById("received-stock-loader-last-week-name").style.display="block";
    setTimeout(stock_last_week_name,loader_seconds)
}

function stock_last_week_name ()
{
    document.getElementById("received-stock-loader-last-week-name").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', varnish_url+'colour_varnish_last_week_name_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            console.log(results);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('last-week-name-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = document.getElementById('last-week-name-grand-child-div');
        req.send(date);        
        setTimeout(save_show_last_week_name,seconds);
}
// +++++++++++++++++++++++++++++++++++++++>>>


// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_received_stock_this_month_all_data ()
{
    document.getElementById("received-stock-loader-this-month-all").style.display="block";
    setTimeout(stock_this_month_all,loader_seconds)
}

function stock_this_month_all ()
{
    document.getElementById("received-stock-loader-this-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', varnish_url+'colour_varnish_this_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            console.log(results);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('this-month-all-tbody');
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            // class="w3-hover-black"
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            // tr.className='js_table';
                            //draw td
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 

                                    // put in data
                                    console.log("td created well...")
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = document.getElementById('this-month-all-grand-child-div');
        req.send(date);        
        setTimeout(save_show_this_month_all,seconds);
}

// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_received_stock_this_month_name_data ()
{
    document.getElementById("received-stock-loader-this-month-name").style.display="block";
    setTimeout(stock_this_month_name,loader_seconds)
}
function stock_this_month_name ()
{
    document.getElementById("received-stock-loader-this-month-name").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', varnish_url+'colour_varnish_this_month_by_name_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            console.log(results);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('this-month-by-name-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = document.getElementById('this-month-all-grand-child-div');
        req.send(date);        
        setTimeout(save_show_this_month_by_name_data,seconds);
}


// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_received_stock_last_month_all_data ()
{
    document.getElementById("received-stock-loader-last-month-all").style.display="block";
    setTimeout(stock_last_month_all,loader_seconds)
}

function stock_last_month_all ()
{
    document.getElementById("received-stock-loader-last-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', varnish_url+'colour_varnish_last_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            console.log(results);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('last-month-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = document.getElementById('last-month-all-grand-child-div');
        req.send(date);        
        setTimeout(save_show_last_month_all,seconds);
}

// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_received_stock_last_month_name_data ()
{
    document.getElementById("received-stock-loader-last-month-name").style.display="block";
    setTimeout(stock_last_month_name,loader_seconds)
}
function stock_last_month_name ()
{
    document.getElementById("received-stock-loader-last-month-name").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', varnish_url+'colour_varnish_last_month_name_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            console.log(results);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('last-month-by-name-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Invoice", "Quatity", "Date"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = document.getElementById('last-month-by-name-grand-child-div');
        req.send(date);        
        setTimeout(save_show_last_month_by_name_data,seconds);
}




// ========================================================================
// On storage
function save_show_all_data ()
{
    let data = document.getElementById ("show-all-tbody").innerHTML;
    localStorage.setItem("colour_varnish_all", data);
}
function save_stock_view_by_name_data ()
{
    let data = document.getElementById ("stock-view-by-name-tbody").innerHTML;
    localStorage.setItem("colour_varnish_by_name", data);
}
function save_stock_view_by_size_data ()
{
    let data = document.getElementById ("stock-view-by-size-tbody").innerHTML;
    localStorage.setItem("colour_varnish_by_size", data);
}
function save_by_date_today_data ()
{
    let data = document.getElementById ("stock-view-by-date-today-tbody").innerHTML;
    localStorage.setItem("colour_varnish_date_today", data);
}
function save_date_date_data ()
{
    let data = document.getElementById ("date-date-tbody").innerHTML;
    localStorage.setItem("colour_varnish_date_date", data);
}
function save_date_date_name ()
{
    let data = document.getElementById ("date-date-name-tbody").innerHTML;
    localStorage.setItem("colour_varnish_date_date_name", data);
}

function save_from_to ()
{
    let data = document.getElementById("from-to-all-tbody").innerHTML;
    localStorage.setItem("colour_varnish_from_to",data);
}
function save_from_to_name ()
{
    let data = document.getElementById("from-to-name-tbody").innerHTML;
    localStorage.setItem("colour_varnish_from_to_name",data);
}
function save_show_last_week_all ()
{
    let data = document.getElementById ("last-week-all-tbody").innerHTML;
    localStorage.setItem("colour_varnish_last_week_all", data);
}
function save_show_last_week_name ()
{
    let data = document.getElementById ("last-week-name-tbody").innerHTML;
    localStorage.setItem("colour_varnish_last_week_name", data);
}
function save_show_this_month_all ()
{
    let data = document.getElementById ("show-all-tbody").innerHTML;
    localStorage.setItem("colour_varnish_dis_mth_all", data);
}
function save_show_this_month_by_name_data ()
{
    let data = document.getElementById ("this-month-by-name-tbody").innerHTML;
    localStorage.setItem("colour_varnish_dis_mth_name", data);
}
function save_show_last_month_all ()
{
    let data = document.getElementById ("last-month-all-tbody").innerHTML;
    localStorage.setItem("colour_varnish_lst_mth_all", data);
}
function save_show_last_month_by_name_data ()
{
    let data = document.getElementById ("last-month-by-name-tbody").innerHTML;
    localStorage.setItem("colour_varnish_lst_mth_name", data);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Load_offline_data () 
{
    document.getElementById("show-all-tbody").innerHTML = localStorage.getItem("colour_varnish_all");
    document.getElementById("stock-view-by-name-tbody").innerHTML = localStorage.getItem("colour_varnish_by_name");
    document.getElementById("stock-view-by-size-tbody").innerHTML = localStorage.getItem("colour_varnish_by_size");
    document.getElementById("stock-view-by-date-today-tbody").innerHTML = localStorage.getItem("colour_varnish_date_today");
    document.getElementById("date-date-tbody").innerHTML = localStorage.getItem("colour_varnish_date_date");
    document.getElementById("date-date-name-tbody").innerHTML = localStorage.getItem("colour_varnish_date_date_name");
    document.getElementById("from-to-all-tbody").innerHTML = localStorage.getItem("colour_varnish_from_to")
    document.getElementById("from-to-name-tbody").innerHTML = localStorage.getItem("colour_varnish_from_to_name")
    document.getElementById("last-week-all-tbody").innerHTML = localStorage.getItem("colour_varnish_last_week_all");
    document.getElementById("last-week-name-tbody").innerHTML = localStorage.getItem("colour_varnish_last_week_name");
    document.getElementById("this-month-all-tbody").innerHTML = localStorage.getItem("colour_varnish_dis_mth_all");
    document.getElementById("this-month-by-name-tbody").innerHTML = localStorage.getItem("colour_varnish_dis_mth_name");
    document.getElementById("last-month-all-tbody").innerHTML = localStorage.getItem("colour_varnish_lst_mth_all");
    document.getElementById("last-month-by-name-tbody").innerHTML = localStorage.getItem("colour_varnish_lst_mth_name");
}
