


/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           STOCK FLOW 
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

// var plastimul_dpm_url = "http://127.0.0.1:3000/";
var plastimul_dpm_url = "http://172.105.158.108:3000/";

var seconds = 1000;
var loader_seconds = 3000;

function Hide_Stock_Flow_Divs_And_Load_Offline_Data ()
{
    hide_stock_flow_divs ();
    Load_stock_flow_offline_data();
}

function show_stock_flow_root_div ()
    {
        document.getElementById("plastimul-dpm-root-div").style.display="none";
        document.getElementById("stock-status-root-div").style.display = "none";
        document.getElementById("stock-flow-root-div").style.display="block";
    }
function close_stock_flow_root_div ()
    { document.getElementById("stock-flow-root-div").style.display="none";}

function show_stock_status_root_div ()
    {
        document.getElementById("plastimul-dpm-root-div").style.display="none";
        document.getElementById("stock-flow-root-div").style.display="none";
        document.getElementById("stock-status-root-div").style.display = "block";
    }
function close_stock_status_root_div (){document.getElementById("stock-status-root-div").style.display = "none";}


function hide_stock_flow_divs ()
{
    document.getElementById("stock-status-root-div").style.display = "none";
    document.getElementById("stock-flow-root-div").style.display="none";
    document.getElementById("stock-flow-view-all-div").style.display="none";
    document.getElementById("stock-flow-by-date-div").style.display="none";
    document.getElementById("stock-flow-from-to-div").style.display="none";
    document.getElementById("stock-flow-last-week-div").style.display="none";
    document.getElementById("stock-flow-this-month-div").style.display="none";
    document.getElementById("stock-flow-last-month-div").style.display="none";

    // Loaders
    document.getElementById("stock-flow-loader-all").style.display="none";
    document.getElementById("stock-flow-loader-date-today").style.display="none";
    document.getElementById("stock-flow-loader-date-date").style.display="none";
    document.getElementById("stock-flow-loader-from-to-all").style.display = "none";
    document.getElementById("stock-flow-loader-last-week-all").style.display="none";
    document.getElementById("stock-flow-loader-this-month-all").style.display="none";
    document.getElementById("stock-flow-loader-last-month-all").style.display="none";

    // status
    document.getElementById("stock-status-loader-all").style.display="none";


    
    // childrens
    document.getElementById("stock-flow-date-today-grand-child-div").style.display = "none";
    document.getElementById("stock-flow-date-date-grand-child-div").style.display="none";
    document.getElementById("stock-flow-from-to-all-grand-child-div").style.display="none";
    document.getElementById("stock-flow-last-week-all-child-div").style.display="none";
    document.getElementById("stock-flow-this-month-all-grand-child-div").style.display="none";
    document.getElementById("stock-flow-last-month-all-grand-child-div").style.display="none";

    // STOCK STATUS
    document.getElementById("stock-status-view-all-div").style.display="none";
}
    
function show_stock_flow_view_all_div ()
{
    document.getElementById("stock-flow-view-all-div").style.display="block";
    document.getElementById("stock-flow-by-date-div").style.display="none";
    document.getElementById("stock-flow-from-to-div").style.display="none";
    document.getElementById("stock-flow-last-week-div").style.display="none";
    document.getElementById("stock-flow-this-month-div").style.display="none";
    document.getElementById("stock-flow-last-month-div").style.display="none";

}
function close_stock_flow_view_all_div (){document.getElementById("stock-flow-view-all-div").style.display="none";}

function show_stock_flow_by_date_div ()
{
    document.getElementById("stock-flow-by-date-div").style.display="block";
    document.getElementById("stock-flow-view-all-div").style.display="none";
    document.getElementById("stock-flow-from-to-div").style.display="none";
    document.getElementById("stock-flow-last-week-div").style.display="none";
    document.getElementById("stock-flow-this-month-div").style.display="none";
    document.getElementById("stock-flow-last-month-div").style.display="none";
}
function close_stock_flow_by_date_div (){document.getElementById("stock-flow-by-date-div").style.display="none";}

function show_stock_flow_from_to_div ()
{
    document.getElementById("stock-flow-from-to-div").style.display="block";
    document.getElementById("stock-flow-view-all-div").style.display="none";
    document.getElementById("stock-flow-by-date-div").style.display="none";
    document.getElementById("stock-flow-last-week-div").style.display="none";
    document.getElementById("stock-flow-this-month-div").style.display="none";
    document.getElementById("stock-flow-last-month-div").style.display="none";

}
function close_stock_flow_from_to_div (){document.getElementById("stock-flow-from-to-div").style.display="none";}

function show_stock_flow_last_week_div ()
{
    document.getElementById("stock-flow-last-week-div").style.display="block";
    document.getElementById("stock-flow-view-all-div").style.display="none";
    document.getElementById("stock-flow-by-date-div").style.display="none";
    document.getElementById("stock-flow-from-to-div").style.display="none";
    document.getElementById("stock-flow-this-month-div").style.display="none";
    document.getElementById("stock-flow-last-month-div").style.display="none";
}
function close_stock_flow_last_week_div (){document.getElementById("stock-flow-last-week-div").style.display="none";}

function show_stock_flow_this_month_div ()
{
    document.getElementById("stock-flow-this-month-div").style.display="block";
    document.getElementById("stock-flow-view-all-div").style.display="none";
    document.getElementById("stock-flow-by-date-div").style.display="none";
    document.getElementById("stock-flow-last-week-div").style.display="none";
    document.getElementById("stock-flow-from-to-div").style.display="none";
    document.getElementById("stock-flow-last-month-div").style.display="none";
}
function close_stock_flow_this_month_div (){document.getElementById("stock-flow-this-month-div").style.display="none";}

function show_stock_flow_last_month_div ()
{
    document.getElementById("stock-flow-last-month-div").style.display="block";
    document.getElementById("stock-flow-view-all-div").style.display="none";
    document.getElementById("stock-flow-by-date-div").style.display="none";
    document.getElementById("stock-flow-last-week-div").style.display="none";
    document.getElementById("stock-flow-from-to-div").style.display="none";
    document.getElementById("stock-flow-this-month-div").style.display="none";

}
function close_stock_flow_last_moth_div (){document.getElementById("stock-flow-last-month-div").style.display="none";}

// stock status
// =============
function show_stock_status_view_all_div (){document.getElementById("stock-status-view-all-div").style.display="block";}
function close_stock_status_view_all_div (){document.getElementById("stock-status-view-all-div").style.display="none";}

function show_stock_status_view_by_name_div ()
    {
        document.getElementById("stock-status-view-by-name-div").style.display="block";
        document.getElementById("stock-status-view-all-div").style.display="none";
    }
function close_stock_status_view_by_name_div (){document.getElementById("stock-status-view-by-name-div").style.display="none";}
    

    // grand childrens
function stock_flow_date_today_grand_child_div (){document.getElementById("stock-flow-date-today-grand-child-div").style.display="block";}
function close_stock_flow_date_today_grand_child_div (){document.getElementById("stock-flow-date-today-grand-child-div").style.display="none";}
function stock_flow_date_date_grand_child_div (){document.getElementById("stock-flow-date-date-grand-child-div").style.display="block";}
function close_stock_flow_date_date_grand_child_div (){document.getElementById("stock-flow-date-date-grand-child-div").style.display="none";}
function stock_flow_from_to_all_grand_child_div (){document.getElementById("stock-flow-from-to-all-grand-child-div").style.display="block";}
function close_stock_flow_from_to_all_grand_child_div (){document.getElementById("stock-flow-from-to-all-grand-child-div").style.display="none";}
function stock_flow_last_week_all_child_div (){document.getElementById("stock-flow-last-week-all-child-div").style.display="block";}
function close_stock_flow_last_week_all_child_div (){document.getElementById("stock-flow-last-week-all-child-div").style.display="none";}
function stock_flow_this_month_all_grand_child_div (){document.getElementById("stock-flow-this-month-all-grand-child-div").style.display="block";}
function close_stock_flow_this_month_all_grand_child_div (){document.getElementById("stock-flow-this-month-all-grand-child-div").style.display="none";}
function stock_flow_last_month_all_grand_child_div (){document.getElementById("stock-flow-last-month-all-grand-child-div").style.display="block";}
function close_stock_flow_last_month_all_grand_child_div (){document.getElementById("stock-flow-last-month-all-grand-child-div").style.display="none";}

// ======================================

function fetch_stock_flow_all_data ()
{
    document.getElementById("stock-flow-loader-all").style.display="block";
    setTimeout(stock_flow_all,loader_seconds)
}
function stock_flow_all ()
    {
        document.getElementById("stock-flow-loader-all").style.display="none";
        let req = new XMLHttpRequest();
        req.open('post', plastimul_dpm_url+'plastimul_dpm_stock_flow_view_all',true)
        req.onload = function ()
            {
                let results = JSON.parse(this.responseText);
                if (! results || !results.length){alert("No results found")}
                else
                    {
                        let tbody = document.getElementById('stock-flow-all-tbody');
                        tbody.innerHTML = ' ';
    
                        // draw table
                        let td,tr;
                        // add table headings
                        let th_names = new Array ();
                        th_names.push(["Uname", "Name", "Unit", "Quatity", "Date"]);
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
            setTimeout(save_stock_flow_all_data,seconds);      
    }


function fetch_stock_flow_date_today_data ()
{
    document.getElementById("stock-flow-loader-date-today").style.display="block";
    setTimeout(stock_flow_date_today,loader_seconds)
}
function stock_flow_date_today ()
{
    document.getElementById("stock-flow-loader-date-today").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', plastimul_dpm_url+'plastimul_dpm_stock_flow_view_by_date_today',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-flow-view-by-date-today-tbody');
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Unit", "Quatity", "Date"]);
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
        let data = document.getElementById('stock-flow-view-by-date-today-div');
        req.send(data); 
        setTimeout (save_stock_flow_by_date_today_data,seconds);       
}

function fetch_stock_flow_date_date_data ()
{
    document.getElementById("stock-flow-loader-date-date").style.display="block";
    setTimeout(stock_flow_date_date,loader_seconds)
}
function stock_flow_date_date ()
{
    document.getElementById("stock-flow-loader-date-date").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', plastimul_dpm_url+'plastimul_dpm_stock_flow_view_by_date_date',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-flow-date-date-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Unit", "Quatity", "Date"]);
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
        let date = new FormData(document.getElementById('stock-flow-date-date-form'));
        req.send(date);        
        setTimeout(save_stock_flow_date_date_data,seconds);
}


// ======================================

function fetch_stock_flow_from_to_all_data ()
{
    document.getElementById("stock-flow-loader-from-to-all").style.display="block";
    setTimeout(stock_flow_from_to_all,loader_seconds)
}
function stock_flow_from_to_all ()
{
     document.getElementById("stock-flow-loader-from-to-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', plastimul_dpm_url+'plastimul_dpm_stock_flow_from_to_all',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-flow-from-to-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Unit", "Quatity", "Date"]);
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
        let date = new FormData(document.getElementById('stock_flow_from-to-form'));
        req.send(date);        
        setTimeout(save_stock_flow_from_to,seconds);
}

// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_stock_flow_last_week_all_data ()
{
    document.getElementById("stock-flow-loader-last-week-all").style.display="block";
    setTimeout(stock_flow_last_week_all,loader_seconds)
}
function stock_flow_last_week_all()
{
    document.getElementById("stock-flow-loader-last-week-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', plastimul_dpm_url+'plastimul_dpm_stock_flow_last_week_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-flow-last-week-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Unit", "Quatity", "Date"]);
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
        let date = document.getElementById('stock-flow-last-week-div');
        req.send(date);        
        setTimeout(save_stock_flow_last_week_all,seconds);
}


// +++++++++++++++++++++++++++++++++++++++>>>

// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_stock_flow_this_month_all_data ()
{
    document.getElementById("stock-flow-loader-this-month-all").style.display="block";
    setTimeout(stock_flow_this_month_all,loader_seconds)
}
function stock_flow_this_month_all ()
{
    document.getElementById("stock-flow-loader-this-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', plastimul_dpm_url+'plastimul_dpm_stock_flow_this_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-flow-this-month-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size", "Quatity", "Date"]);
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
        let date = document.getElementById('stock-flow-this-month-all-grand-child-div');
        req.send(date);        
        setTimeout(save_stock_flow_this_month_all,seconds);
}

// +++++++++++++++++++++++++++++++++++++++ >>>

function fetch_stock_flow_last_month_all_data ()
{
    document.getElementById("stock-flow-loader-last-month-all").style.display="block";
    setTimeout(stock_flow_last_month_all,loader_seconds)
}
function stock_flow_last_month_all ()
{
    document.getElementById("stock-flow-loader-last-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', plastimul_dpm_url+'plastimul_dpm_stock_flow_last_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-flow-last-month-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size", "Quatity", "Date"]);
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
        let date = document.getElementById('stock-flow-last-month-all-div');
        req.send(date);        
        setTimeout(save_stock_flow_last_month_all,seconds);
}

/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           STOCK STATUS 
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

// +++++++++++++++++++++++++++++++++++++++>>>
function fetch_stock_status_all_data ()
{
    document.getElementById("stock-status-loader-all").style.display="block";
    setTimeout(stock_status_all,loader_seconds)
}
function stock_status_all ()
{
    document.getElementById("stock-status-loader-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', plastimul_dpm_url+'plastimul_dpm_stock_status_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-status-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push([ "Name","Quantity"]);
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
        let date = document.getElementById('stock-status-all-grand-child-div');
        req.send(date);        
        setTimeout(save_stock_status_all,seconds);
}


/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           SAVING DATA  ------ STORAGE
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

function save_stock_flow_all_data ()
{
    let data = document.getElementById ("stock-flow-all-tbody").innerHTML;
    localStorage.setItem("plastimul_dpm_stock_flow_all", data);
}


function save_stock_flow_by_date_today_data ()
{
    let data = document.getElementById ("stock-flow-view-by-date-today-tbody").innerHTML;
    localStorage.setItem("plastimul_dpm_stock_flow_date_today", data);
}
function save_stock_flow_date_date_data ()
{
    let data = document.getElementById ("stock-flow-date-date-tbody").innerHTML;
    localStorage.setItem("plastimul_dpm_stock_flow_date_date", data);
}
function save_stock_flow_from_to ()
{
    let data = document.getElementById("stock-flow-from-to-all-tbody").innerHTML;
    localStorage.setItem("plastimul_dpm_stock_flow_from_to",data);
}
function save_stock_flow_last_week_all ()
{
    let data = document.getElementById ("stock-flow-last-week-all-tbody").innerHTML;
    localStorage.setItem("plastimul_dpm_stock_flow_last_week_all", data);
}

function save_stock_flow_this_month_all ()
{
    let data = document.getElementById ("stock-flow-this-month-all-tbody").innerHTML;
    localStorage.setItem("plastimul_dpm_stock_flow_dis_mth_all", data);
}
function save_stock_flow_last_month_all ()
{
    let data = document.getElementById ("stock-flow-last-month-all-tbody").innerHTML;
    localStorage.setItem("plastimul_dpm_stock_flow_lst_mth_all", data);
}

// STOCK STATUS
function save_stock_status_all ()
{
    let data = document.getElementById ("stock-status-all-tbody").innerHTML;
    localStorage.setItem("plastimul_dpm_stock_status_all", data);
}


/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @          LOADING OFFINE LINE DATA 
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Load_stock_flow_offline_data () 
{
    document.getElementById("stock-flow-all-tbody").innerHTML = localStorage.getItem("plastimul_dpm_stock_flow_all");
    document.getElementById("stock-flow-view-by-date-today-tbody").innerHTML = localStorage.getItem("plastimul_dpm_stock_flow_date_today");
    document.getElementById("stock-flow-date-date-tbody").innerHTML = localStorage.getItem("plastimul_dpm_stock_flow_date_date");
    document.getElementById("stock-flow-from-to-all-tbody").innerHTML = localStorage.getItem("plastimul_dpm_stock_flow_from_to")
    document.getElementById("stock-flow-last-week-all-tbody").innerHTML = localStorage.getItem("plastimul_dpm_stock_flow_last_week_all");
    document.getElementById("stock-flow-this-month-all-tbody").innerHTML = localStorage.getItem("plastimul_dpm_stock_flow_dis_mth_all");
    document.getElementById("stock-flow-last-month-all-tbody").innerHTML = localStorage.getItem("plastimul_dpm_stock_flow_lst_mth_all");

    // STOCK STATUS
    document.getElementById("stock-status-all-tbody").innerHTML = localStorage.getItem("plastimul_dpm_stock_status_all");
}



