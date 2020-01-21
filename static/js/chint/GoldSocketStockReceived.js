


// var goldSocket_sr_url = "http://127.0.0.1:3000/";
var goldSocket_sr_url = "http://172.105.158.108:3000/";


var seconds = 1000;
var loader_seconds = 3000;

/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           RECIEVED STOCK  
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

function fetch_stock_received_all_data ()
{
    document.getElementById("stock-received-loader-all").style.display="block";
    setTimeout(stock_view_all,loader_seconds)
}

    // ==================
function stock_view_all ()
    {
        document.getElementById("stock-received-loader-all").style.display="none";
        let req = new XMLHttpRequest();
        req.open('post', goldSocket_sr_url+'goldSocket_stock_view_all',true)
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
                        th_names.push(["Uname", "Name", "Quatity", "Date"]);
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
    
// ============================= view by name
function fetch_stock_received_name_data ()
{
    document.getElementById("stock-received-loader-name").style.display="block";
    setTimeout(stock_view_by_name,loader_seconds)
}
function stock_view_by_name ()
{
    document.getElementById("stock-received-loader-name").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', goldSocket_sr_url+'goldSocket_stock_view_by_name',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {
                    alert("No results found")
                }
            else
                {
                    let tbody = document.getElementById('stock-received-view-by-name-tbody');
                    tbody.innerHTML = ' ';

                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Quatity", "Date"]);
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
        let stock_view_by_name = new FormData(document.getElementById('stock-received-view-by-name-form'));
        req.send(stock_view_by_name);   
        setTimeout(save_stock_view_by_name_data,seconds);     
}

// ============================= view by name

function fetch_stock_received_date_today_data ()
{
    document.getElementById("stock-received-loader-date-today").style.display="block";
    setTimeout(stock_view_by_date_today,loader_seconds)
}
function stock_view_by_date_today ()
{
    document.getElementById("stock-received-loader-date-today").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', goldSocket_sr_url+'goldSocket_stock_view_by_date_today',true)
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
                    th_names.push(["Uname", "Name","Quatity", "Date"]);
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

function fetch_stock_received_date_date_data ()
{
    document.getElementById("stock-received-loader-date-date").style.display="block";
    setTimeout(stock_view_by_date_date,loader_seconds)
}
function stock_view_by_date_date ()
{
    document.getElementById("stock-received-loader-date-date").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', goldSocket_sr_url+'goldSocket_stock_view_by_date_date',true)
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
                    th_names.push(["Uname", "Name","Quatity", "Date"]);
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
function fetch_stock_received_date_name_date_data ()
{
    document.getElementById("stock-received-loader-date-name-date").style.display="block";
    setTimeout(stock_view_by_date_name_date,loader_seconds)
}

function stock_view_by_date_name_date ()
{
    document.getElementById("stock-received-loader-date-name-date").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', goldSocket_sr_url+'goldSocket_stock_view_by_date_date_name',true)
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
                    th_names.push(["Uname", "Name", "Quatity", "Date"]);
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

function fetch_stock_received_from_to_all_data ()
{
    document.getElementById("stock-received-loader-from-to-all").style.display="block";
    setTimeout(stock_from_to_all,loader_seconds)
}
function stock_from_to_all ()
{
    document.getElementById("stock-received-loader-from-to-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', goldSocket_sr_url+'goldSocket_from_to_all',true)
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
                    th_names.push(["Uname", "Name","Quatity", "Date"]);
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

function fetch_stock_received_from_to_name_data ()
{
    document.getElementById("stock-received-loader-from-to-name").style.display="block";
    setTimeout(stock_from_to_name,loader_seconds)
}
function stock_from_to_name ()
{
    document.getElementById("stock-received-loader-from-to-name").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', goldSocket_sr_url+'goldSocket_from_to_name',true)
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
                    th_names.push(["Uname", "Name", "Quatity", "Date"]);
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
        let date = new FormData(document.getElementById('from-to-name-form'));
        req.send(date);        
        setTimeout(save_from_to_name,seconds);
}
// +++++++++++++++++++++++++++++++++++++++>>>
function fetch_stock_received_last_week_all_data ()
{
    document.getElementById("stock-received-loader-last-week-all").style.display="block";
    setTimeout(stock_last_week_all,loader_seconds)
}

function stock_last_week_all ()
{
    document.getElementById("stock-received-loader-last-week-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', goldSocket_sr_url+'goldSocket_last_week_all_data',true)
    req.onload = function ()
        {
            document.getElementById("stock-received-loader-last-week-all").style.display="none";
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('last-week-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Quatity", "Date"]);
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

function fetch_stock_received_last_week_name_data ()
{
    document.getElementById("received-stock-loader-last-week-name").style.display="block";
    setTimeout(stock_last_week_name,loader_seconds)
}

function stock_last_week_name ()
{
    document.getElementById("received-stock-loader-last-week-name").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', goldSocket_sr_url+'goldSocket_last_week_name_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('last-week-name-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name","Quatity", "Date"]);
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
        let data = new FormData(document.getElementById("stock-view-by-name-form"));
        req.send(data);        
        setTimeout(save_show_last_week_name,seconds);
}
// +++++++++++++++++++++++++++++++++++++++>>>


// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_stock_received_this_month_all_data ()
{
    document.getElementById("stock-received-loader-this-month-all").style.display="block";
    setTimeout(stock_this_month_all,loader_seconds)
}

function stock_this_month_all ()
{
    document.getElementById("stock-received-loader-this-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', goldSocket_sr_url+'goldSocket_this_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

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
                    th_names.push(["Uname", "Name","Quatity", "Date"]);
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

function fetch_stock_received_this_month_name_data ()
{
    document.getElementById("stock-received-loader-this-month-name").style.display="block";
    setTimeout(stock_this_month_name,loader_seconds)
}
function stock_this_month_name ()
{
    document.getElementById("stock-received-loader-this-month-name").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', goldSocket_sr_url+'goldSocket_this_month_by_name_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('this-month-by-name-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name","Quatity", "Date"]);
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
        let date = new FormData(document.getElementById('stock-view-by-name-form'));
        req.send(date);        
        setTimeout(save_show_this_month_by_name_data,seconds);
}


// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_stock_received_last_month_all_data ()
{
    document.getElementById("stock-received-loader-last-month-all").style.display="block";
    setTimeout(stock_last_month_all,loader_seconds)
}

function stock_last_month_all ()
{
    document.getElementById("stock-received-loader-last-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', goldSocket_sr_url+'goldSocket_last_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

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

function fetch_stock_received_last_month_name_data ()
{
    document.getElementById("stock-received-loader-last-month-name").style.display="block";
    setTimeout(stock_last_month_name,loader_seconds)
}
function stock_last_month_name ()
{
    document.getElementById("stock-received-loader-last-month-name").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', goldSocket_sr_url+'goldSocket_last_month_name_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('last-month-by-name-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Quatity", "Date"]);
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
    localStorage.setItem("goldSocket_all", data);
}
function save_stock_view_by_name_data ()
{
    let data = document.getElementById ("stock-received-view-by-name-tbody").innerHTML;
    localStorage.setItem("goldSocket_by_name", data);
}

function save_by_date_today_data ()
{
    let data = document.getElementById ("stock-view-by-date-today-tbody").innerHTML;
    localStorage.setItem("goldSocket_date_today", data);
}
function save_date_date_data ()
{
    let data = document.getElementById ("date-date-tbody").innerHTML;
    localStorage.setItem("goldSocket_date_date", data);
}
function save_date_date_name ()
{
    let data = document.getElementById ("date-date-name-tbody").innerHTML;
    localStorage.setItem("goldSocket_date_date_name", data);
}

function save_from_to ()
{
    let data = document.getElementById("from-to-all-tbody").innerHTML;
    localStorage.setItem("goldSocket_from_to",data);
}
function save_from_to_name ()
{
    let data = document.getElementById("from-to-name-tbody").innerHTML;
    localStorage.setItem("goldSocket_from_to_name",data);
}
function save_show_last_week_all ()
{
    let data = document.getElementById ("last-week-all-tbody").innerHTML;
    localStorage.setItem("goldSocket_last_week_all", data);
}
function save_show_last_week_name ()
{
    let data = document.getElementById ("last-week-name-tbody").innerHTML;
    localStorage.setItem("goldSocket_last_week_name", data);
}
function save_show_this_month_all ()
{
    let data = document.getElementById ("show-all-tbody").innerHTML;
    localStorage.setItem("goldSocket_dis_mth_all", data);
}
function save_show_this_month_by_name_data ()
{
    let data = document.getElementById ("this-month-by-name-tbody").innerHTML;
    localStorage.setItem("goldSocket_dis_mth_name", data);
}
function save_show_last_month_all ()
{
    let data = document.getElementById ("last-month-all-tbody").innerHTML;
    localStorage.setItem("goldSocket_lst_mth_all", data);
}
function save_show_last_month_by_name_data ()
{
    let data = document.getElementById ("last-month-by-name-tbody").innerHTML;
    localStorage.setItem("goldSocket_lst_mth_name", data);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Load_Stock_Received_Offline_Data () 
{
    document.getElementById("show-all-tbody").innerHTML = localStorage.getItem("goldSocket_all");
    document.getElementById("stock-received-view-by-name-tbody").innerHTML = localStorage.getItem("goldSocket_by_name");
    document.getElementById("stock-view-by-date-today-tbody").innerHTML = localStorage.getItem("goldSocket_date_today");
    document.getElementById("date-date-tbody").innerHTML = localStorage.getItem("goldSocket_date_date");
    document.getElementById("date-date-name-tbody").innerHTML = localStorage.getItem("goldSocket_date_date_name");
    document.getElementById("from-to-all-tbody").innerHTML = localStorage.getItem("goldSocket_from_to")
    document.getElementById("from-to-name-tbody").innerHTML = localStorage.getItem("goldSocket_from_to_name")
    document.getElementById("last-week-all-tbody").innerHTML = localStorage.getItem("goldSocket_last_week_all");
    document.getElementById("last-week-name-tbody").innerHTML = localStorage.getItem("goldSocket_last_week_name");
    document.getElementById("this-month-all-tbody").innerHTML = localStorage.getItem("goldSocket_dis_mth_all");
    document.getElementById("this-month-by-name-tbody").innerHTML = localStorage.getItem("goldSocket_dis_mth_name");
    // document.getElementById("last-month-all-tbody").innerHTML = localStorage.getItem("goldSocket_lst_mth_all");
    // document.getElementById("last-month-by-name-tbody").innerHTML = localStorage.getItem("goldSocket_lst_mth_name");
}

