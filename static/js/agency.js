
// var agency_url = "http://127.0.0.1:3000/";
var agency_url = "http://172.105.158.108:3000/";

var seconds = 1000;  // for saving loaded data
var loader_seconds=3000;

function hide_all_agency_divs_and_Load_Offline_Data ()
{
    hide_all_agency_divs ();
    Load_Offline_Data ();
}



function hide_all_agency_divs ()
    {
        document.getElementById("view_all_div").style.display="none";
        document.getElementById("view_by_date_div").style.display="none";
        document.getElementById("from_to_div").style.display="none";
        document.getElementById("yesterday_div").style.display="none";
        document.getElementById("last_week_div").style.display="none";
        document.getElementById("this_month_div").style.display="none";
        document.getElementById("last_month_div").style.display="none";  
        
        // Loaders
        document.getElementById("agency-loader-all-details").style.display="none";
        document.getElementById("agency-loader-all-summary").style.display="none";
        document.getElementById("agency-loader-date-details").style.display="none";
        document.getElementById("agency-loader-date-summary").style.display="none";
        document.getElementById("agency-loader-from-to-details").style.display="none";
        document.getElementById("agency-loader-from-to-summary").style.display="none";
        document.getElementById("agency-loader-yesterday-details").style.display="none";
        document.getElementById("agency-loader-yesterday-summary").style.display="none";
        document.getElementById("agency-loader-last-week-details").style.display="none";
        document.getElementById("agency-loader-last-week-summary").style.display="none";
        document.getElementById("agency-loader-this-month-details").style.display="none";
        document.getElementById("agency-loader-this-month-summary").style.display="none";
        document.getElementById("agency-loader-last-month-details").style.display="none";
        document.getElementById("agency-loader-last-month-summary").style.display="none";


        // Childrens
        document.getElementById("view-all-child-details-div").style.display = "none";
        document.getElementById("date-child-details-div").style.display = "none";
        document.getElementById("from-to-child-details-div").style.display = "none";
        document.getElementById("yesterday-child-details-div").style.display = "none";
        document.getElementById("last-week-child-details-div").style.display = "none";
        document.getElementById("this-month-child-details-div").style.display = "none";
        document.getElementById("last-month-child-details-div").style.display = "none";

        document.getElementById("view-all-child-summary-div").style.display = "none";
        document.getElementById("date-child-summary-div").style.display = "none";
        document.getElementById("from-to-child-summary-div").style.display = "none";
        document.getElementById("yesterday-child-summary-div").style.display = "none";
        document.getElementById("last-week-child-summary-div").style.display = "none";
        document.getElementById("this-month-child-summary-div").style.display = "none";
        document.getElementById("last-month-child-summary-div").style.display = "none";
    }

// childrens
function show_view_all_child_details_div ()
{
    document.getElementById("view-all-child-summary-div").style.display = "none";
    document.getElementById("view-all-child-details-div").style.display = "block"; 
}

function show_date_child_details_div ()
{
    document.getElementById("date-child-summary-div").style.display = "none";
    document.getElementById("date-child-details-div").style.display = "block"; 
}

function show_from_to_child_details_div ()
{
    document.getElementById("from-to-child-summary-div").style.display = "none";
    document.getElementById("from-to-child-details-div").style.display = "block"; 
}

function show_yesterday_child_details_div ()
{
    document.getElementById("yesterday-child-summary-div").style.display = "none";
    document.getElementById("yesterday-child-details-div").style.display = "block"; 
}

function show_last_week_child_details_div ()
{
    document.getElementById("last-week-child-summary-div").style.display = "none";
    document.getElementById("last-week-child-details-div").style.display = "block"; 
}

function show_this_month_child_details_div ()
{
    document.getElementById("this-month-child-summary-div").style.display = "none";
    document.getElementById("this-month-child-details-div").style.display = "block"; 
}

function show_last_month_child_details_div ()
{
    document.getElementById("last-month-child-summary-div").style.display = "none";
    document.getElementById("last-month-child-details-div").style.display = "block"; 
}

function show_show_all_child_summary_div ()
{
    document.getElementById("view-all-child-details-div").style.display = "none";
    document.getElementById("view-all-child-summary-div").style.display = "block";
}


function show_date_child_summary_div ()
{
    document.getElementById("date-child-details-div").style.display = "none";
    document.getElementById("date-child-summary-div").style.display = "block";
}

function show_from_to_child_summary_div ()
{
    document.getElementById("from-to-child-details-div").style.display = "none";
    document.getElementById("from-to-child-summary-div").style.display = "block";
}

function show_yesterday_child_summary_div ()
{
    document.getElementById("yesterday-child-details-div").style.display = "none";
    document.getElementById("yesterday-child-summary-div").style.display = "block";
}

function show_last_week_child_summary_div ()
{
    document.getElementById("last-week-child-details-div").style.display = "none";
    document.getElementById("last-week-child-summary-div").style.display = "block";
}

function show_this_month_child_summary_div ()
{
    document.getElementById("this-month-child-details-div").style.display = "none";
    document.getElementById("this-month-child-summary-div").style.display = "block";
}

function show_last_month_child_summary_div ()
{
    document.getElementById("last-month-child-details-div").style.display = "none";
    document.getElementById("last-month-child-summary-div").style.display = "block";
}

// ====== close the agency children

function close_view_all_child_details_div ()
{document.getElementById("view-all-child-details-div").style.display = "none";}

function close_date_child_details_div ()
{document.getElementById("date-child-details-div").style.display = "none";}

function close_from_to_child_details_div ()
{document.getElementById("from-to-child-details-div").style.display = "none";}

function close_yesterday_child_details_div ()
{document.getElementById("yesterday-child-details-div").style.display = "none";}

function close_last_week_child_details_div ()
{document.getElementById("last-week-child-details-div").style.display = "none";}

function close_this_month_child_details_div ()
{document.getElementById("this-month-child-details-div").style.display = "none";}

function close_last_month_child_details_div ()
{document.getElementById("last-month-child-details-div").style.display = "none";}



function close_view_all_child_summary_div ()
{document.getElementById("view-all-child-summary-div").style.display = "none";}

function close_date_child_summary_div ()
{document.getElementById("date-child-summary-div").style.display = "none";}

function close_from_to_child_summary_div ()
{document.getElementById("from-to-child-summary-div").style.display = "none";}

function close_yesterday_child_summary_div ()
{document.getElementById("yesterday-child-summary-div").style.display = "none";}

function close_last_week_child_summary_div ()
{document.getElementById("last-week-child-summary-div").style.display = "none";}

function close_this_month_child_summary_div ()
{document.getElementById("this-month-child-summary-div").style.display = "none";}

function close_last_month_child_summary_div ()
{document.getElementById("last-month-child-summary-div").style.display = "none";}


function show_view_all_agency_div ()
    {
        document.getElementById("view_all_div").style.display="block";
        document.getElementById("view_by_date_div").style.display="none";
        document.getElementById("from_to_div").style.display="none";
        document.getElementById("yesterday_div").style.display="none";
        document.getElementById("last_week_div").style.display="none";
        document.getElementById("this_month_div").style.display="none";
        document.getElementById("last_month_div").style.display="none";  
    }

function close_view_all_div ()
{
    document.getElementById("view_all_div").style.display="none";
}

function show_view_by_date_agency_div ()
    {
        document.getElementById("view_all_div").style.display="none";
        document.getElementById("view_by_date_div").style.display="block";
        document.getElementById("from_to_div").style.display="none";
        document.getElementById("yesterday_div").style.display="none";
        document.getElementById("last_week_div").style.display="none";
        document.getElementById("this_month_div").style.display="none";
        document.getElementById("last_month_div").style.display="none";  
    }

function close_view_by_date_div ()
{
    document.getElementById("view_by_date_div").style.display="none";
}

function show_from_to_agency_div ()
    {
        document.getElementById("view_all_div").style.display="none";
        document.getElementById("view_by_date_div").style.display="none";
        document.getElementById("from_to_div").style.display="block";
        document.getElementById("yesterday_div").style.display="none";
        document.getElementById("last_week_div").style.display="none";
        document.getElementById("this_month_div").style.display="none";
        document.getElementById("last_month_div").style.display="none";  
    }

function close_from_to_div ()
{
    document.getElementById("from_to_div").style.display="none";
}

function show_yesterday_agency_div ()
    {
        document.getElementById("view_all_div").style.display="none";
        document.getElementById("view_by_date_div").style.display="none";
        document.getElementById("from_to_div").style.display="none";
        document.getElementById("yesterday_div").style.display="block";
        document.getElementById("last_week_div").style.display="none";
        document.getElementById("this_month_div").style.display="none";
        document.getElementById("last_month_div").style.display="none";  
    }

function close_yesterday_div ()
{
    document.getElementById("yesterday_div").style.display="none";
}


function show_last_week_agency_div ()
    {
        document.getElementById("view_all_div").style.display="none";
        document.getElementById("view_by_date_div").style.display="none";
        document.getElementById("from_to_div").style.display="none";
        document.getElementById("yesterday_div").style.display="none";
        document.getElementById("last_week_div").style.display="block";
        document.getElementById("this_month_div").style.display="none";
        document.getElementById("last_month_div").style.display="none";  
    }

function close_last_week_div ()
{
    document.getElementById("last_week_div").style.display="none";
}

function show_this_month_agency_div ()
    {
        document.getElementById("view_all_div").style.display="none";
        document.getElementById("view_by_date_div").style.display="none";
        document.getElementById("from_to_div").style.display="none";
        document.getElementById("yesterday_div").style.display="none";
        document.getElementById("last_week_div").style.display="none";
        document.getElementById("this_month_div").style.display="block";
        document.getElementById("last_month_div").style.display="none";  
    }

function close_this_month_div ()
{
    document.getElementById("this_month_div").style.display="none";
}

function show_last_month_agency_div ()
    {
        document.getElementById("view_all_div").style.display="none";
        document.getElementById("view_by_date_div").style.display="none";
        document.getElementById("from_to_div").style.display="none";
        document.getElementById("yesterday_div").style.display="none";
        document.getElementById("last_week_div").style.display="none";
        document.getElementById("this_month_div").style.display="none";
        document.getElementById("last_month_div").style.display="block";  
    }

function close_last_month_div ()
{
    document.getElementById("last_month_div").style.display="none";
}

function fetch_agency_all_details_data ()
{
    document.getElementById("agency-loader-all-details").style.display="block";
    setTimeout(agency_all_details,loader_seconds)
}

function agency_all_details ()
{
    document.getElementById("agency-loader-all-details").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',agency_url+'query_agency_show_all_report',true)
    req.onload = function ()
        {
            if (this.status != 200)
                {
                    console.log('ERROR :: On query_agency_view_report',+ this.status);
                }
            let results = JSON.parse(this.responseText);
            if (! results || ! results.length)
                {
                    alert ("No Results found");
                }

            else
                {
                    let tbody = document.getElementById("show-all-tbody");
                    tbody.innerHTML = ' '; 

                    let th_names = new Array ();
                    th_names.push(["NAME","DATE","AIRTEL","MTN","CENTENARY","EQUITY","CASH","DRAWINGS","FLOAT"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    let tr, td;
                    for (let table_row = 0; table_row<results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row'
                            for (let table_data = 0; table_data<(results[table_row].length); ++table_data)
                            {
                                td = document.createElement('td');
                                td.innerHTML = results[table_row][table_data];
                                tr.appendChild(td);
                            }
                            tbody.appendChild(tr);
                        }
                }
        }
        let last_month = document.getElementById('show-all-tbody-div');
        req.send(last_month);

        setTimeout(Save_show_all_data ,seconds)
}

function fetch_agency_all_summary_data ()
{
    document.getElementById("agency-loader-all-summary").style.display="block";
    setTimeout(agency_all_summary,loader_seconds)
}

function agency_all_summary ()
{
    document.getElementById("agency-loader-all-summary").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',agency_url+'query_agency_summary_show_all_report',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || ! results.length)
                {
                    alert ("No Results found");
                }

            else
                {
                    let tbody = document.getElementById("show-all-summary-tbody");
                    tbody.innerHTML = ' '; 

                    let th_names = new Array ();
                    th_names.push(["NAME","DATE","BANKS","CASH","DRAWINGS","FLOAT"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    let tr, td;
                    for (let table_row = 0; table_row<results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row'
                            for (let table_data = 0; table_data<(results[table_row].length); ++table_data)
                            {
                                td = document.createElement('td');
                                td.innerHTML = results[table_row][table_data];
                                tr.appendChild(td);
                            }
                            tbody.appendChild(tr);
                        }
                }
        }
        let data = document.getElementById('show-all-summary-tbody-div');
        req.send(data);
        setTimeout(Save_show_all_summary_data, seconds)
}


function fetch_agency_date_details_data ()
{
    document.getElementById("agency-loader-date-details").style.display="block";
    setTimeout(agency_date_details,loader_seconds)
}

function agency_date_details ()
{
    document.getElementById("agency-loader-date-details").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', agency_url+'agency_view_by_date_details',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {
                    alert("No results found")
                }
            else
                {
                    let tbody = document.getElementById('agency-view-by-date-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["NAME","DATE","AIRTEL","MTN","CENTENARY","EQUITY","CASH","DRAWINGS","FLOAT"]);
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
        let agency_view_by_date = new FormData(document.getElementById('agency-view-by-date-form'));
        req.send(agency_view_by_date);  
        setTimeout(Save_view_by_date_data,seconds);
}

function fetch_agency_date_summary_data ()
{
    document.getElementById("agency-loader-date-summary").style.display="block";
    setTimeout(agency_date_summary,loader_seconds)
}

function agency_date_summary ()
{
    document.getElementById("agency-loader-date-summary").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', agency_url+'agency_view_by_date_summary',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {
                    alert("No results found")
                }
            else
                {
                    let tbody = document.getElementById('date-summary-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["NAME","DATE","BANKS","CASH","DRAWINGS","FLOAT"]);
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
        let data = new FormData(document.getElementById('agency-summary-view-by-date-form'));
        req.send(data);       
        setTimeout(Save_view_by_date_data_summary,seconds);
}


function fetch_agency_from_to_details_data ()
{
    document.getElementById("agency-loader-from-to-details").style.display="block";
    setTimeout(agency_from_to_details,loader_seconds)
}

function agency_from_to_details ()
{
    document.getElementById("agency-loader-from-to-details").style.display="none";
    let req = new XMLHttpRequest ();
    req.open('post', agency_url+'agency_query_From_and_To_dates',true);
    req.onload = function ()
    {
        // parse my json
        let results = JSON.parse(this.responseText);
        if (! results || ! results.length)
            {
                alert ("No Results found");
            }
        else
            {
                let tbody = document.getElementById("from-and-to-date-search-tbody");
                tbody.innerHTML = ' '; 

                let th_names = new Array ();
                    th_names.push(["NAME","DATE","AIRTEL","MTN","CENTENARY","EQUITY","CASH","DRAWINGS","FLOAT"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }
                        
                let tr, td;
                for (let table_row = 0; table_row<results.length; ++table_row)
                    {
                        tr = document.createElement('tr');
                        tr.className='js_table_row'
                        for (let table_data = 0; table_data<(results[table_row].length); ++table_data)
                        {
                            td = document.createElement('td');
                            td.innerHTML = results[table_row][table_data];
                            tr.appendChild(td);
                        }
                        tbody.appendChild(tr);
                    }
            }

    }
    let from_to_form = new FormData(document.getElementById('From_and_To_dates_form'));
    req.send(from_to_form)
    setTimeout(Save_from_to_data,seconds);
}

function fetch_agency_from_to_summary_data ()
{
    document.getElementById("agency-loader-from-to-summary").style.display="block";
    setTimeout(agency_from_to_summary,loader_seconds)
}
function agency_from_to_summary ()
{
    document.getElementById("agency-loader-from-to-summary").style.display="none";
    let req = new XMLHttpRequest ();
    req.open('post', agency_url+'agency_query_From_To_date_summary',true);
    req.onload = function ()
    {
        let results = JSON.parse(this.responseText);
        if (! results || ! results.length)
            {
                alert ("No Results found");
            }
        else
            {

                let tbody = document.getElementById("from-to-summary-tbody");
                tbody.innerHTML = ' '; 

                let th_names = new Array ();
                    th_names.push(["UNAME","DATE","BANKS","CASH","DRAWINGS","FLOAT"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }
                        
                let tr, td;
                for (let table_row = 0; table_row<results.length; ++table_row)
                    {
                        tr = document.createElement('tr');
                        tr.className='js_table_row'
                        for (let table_data = 0; table_data<(results[table_row].length); ++table_data)
                        {
                            td = document.createElement('td');
                            td.innerHTML = results[table_row][table_data];
                            tr.appendChild(td);
                        }
                        tbody.appendChild(tr);
                    }
            }
    }
    let from_to_form = new FormData(document.getElementById('From_To_dates_sumamary'));
    req.send(from_to_form)
    setTimeout (Save_from_to_summary_data,seconds);
}


function fetch_agency_yesterday_details_data ()
{
    document.getElementById("agency-loader-yesterday-details").style.display="block";
    setTimeout(agency_yesterday_details,loader_seconds)
}
function agency_yesterday_details ()
{
    document.getElementById("agency-loader-yesterday-details").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',agency_url+'agency_query_yestardays_report',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || ! results.length)
                {
                    alert ("No Results found");
                }
            else
                {
                    let tbody = document.getElementById("agency-view-yesterday-tbody");
                    tbody.innerHTML = ' '; 
                    let th_names = new Array ();
                    th_names.push(["NAME","DATE","AIRTEL","MTN","CENTENARY","EQUITY","CASH","DRAWINGS","FLOAT"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    let tr, td;
                    for (let table_row = 0; table_row<results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row'
                            for (let table_data = 0; table_data<(results[table_row].length); ++table_data)
                            {
                                td = document.createElement('td');
                                td.innerHTML = results[table_row][table_data];
                                tr.appendChild(td);
                            }
                            tbody.appendChild(tr);
                        }
                }
        }
        let replay = document.getElementById('agency-view-yesterday-div');
        req.send(replay);
        setTimeout(Save_yesterday_data,seconds);
}

function fetch_agency_yesterday_summary_data ()
{
    document.getElementById("agency-loader-yesterday-summary").style.display="block";
    setTimeout(agency_yesterday_summary,loader_seconds)
}
function agency_yesterday_summary ()
{
    document.getElementById("agency-loader-yesterday-summary").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',agency_url+'agency_query_yestardays_summary_report',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || ! results.length)
                {
                    alert ("No Results found");
                }
            else
                {
                    let tbody = document.getElementById("yesterday-summary-tbody");
                    tbody.innerHTML = ' '; 

                    let th_names = new Array ();
                    th_names.push(["NAME","DATE","BANKS","CASH","DRAWINGS","FLOAT"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    let tr, td;
                    for (let table_row = 0; table_row<results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row'
                            for (let table_data = 0; table_data<(results[table_row].length); ++table_data)
                            {
                                td = document.createElement('td');
                                td.innerHTML = results[table_row][table_data];
                                tr.appendChild(td);
                            }
                            tbody.appendChild(tr);
                        }
                }
        }
        let replay = document.getElementById('yesterday-summary-tbody-div');
        req.send(replay);
        setTimeout(Save_yesterday_summary_data,seconds);
}

// ------------------------------->

function fetch_agency_last_week_details_data ()
{
    document.getElementById("agency-loader-last-week-details").style.display="block";
    setTimeout(agency_last_week_details,loader_seconds)
} 

function agency_last_week_details ()
{
    document.getElementById("agency-loader-last-week-details").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',agency_url+'query_agency_week_report',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || ! results.length)
                {
                    alert ("No Results found");
                }
            else
                {

                    let tbody = document.getElementById("agency-last-week-tbody");
                    tbody.innerHTML = ' '; 

                    let th_names = new Array ();
                    th_names.push(["NAME","DATE","AIRTEL","MTN","CENTENARY","EQUITY","CASH","DRAWINGS","FLOAT"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    let tr, td;
                    for (let table_row = 0; table_row<results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row'
                            for (let table_data = 0; table_data<(results[table_row].length); ++table_data)
                            {
                                td = document.createElement('td');
                                td.innerHTML = results[table_row][table_data];
                                tr.appendChild(td);
                            }
                            tbody.appendChild(tr);
                        }
                }
        }
        let week = document.getElementById('agency-view-week-div');
        req.send(week);
        setTimeout(Save_last_week_data,seconds);
}

function fetch_agency_last_week_summary_data ()
{
    document.getElementById("agency-loader-last-week-summary").style.display="block";
    setTimeout(agency_last_week_summary,loader_seconds)
}
function agency_last_week_summary ()
{
    document.getElementById("agency-loader-last-week-summary").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',agency_url+'query_agency_week_summary_report',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || ! results.length)
                {
                    alert ("No Results found");
                }
            else
                {
                    let tbody = document.getElementById("last-week-summary-tbody");
                    tbody.innerHTML = ' '; 
                    let th_names = new Array ();
                    th_names.push(["NAME","DATE","BANKS","CASH","DRAWINGS","FLOAT"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    let tr, td;
                    for (let table_row = 0; table_row<results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row'
                            for (let table_data = 0; table_data<(results[table_row].length); ++table_data)
                            {
                                td = document.createElement('td');
                                td.innerHTML = results[table_row][table_data];
                                tr.appendChild(td);
                            }
                            tbody.appendChild(tr);
                        }
                }
        }
        let week = document.getElementById('agency-view-week-div');
        req.send(week);
        setTimeout(Save_last_week_summary_data,seconds);
}

function fetch_agency_this_month_details_data ()
{
    document.getElementById("agency-loader-this-month-details").style.display="block";
    setTimeout(agency_this_month_details,loader_seconds)
}
function agency_this_month_details ()
{
    document.getElementById("agency-loader-this-month-details").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',agency_url+'query_agency_this_month_report',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || ! results.length)
                {
                    alert ("No Results found");
                }
            else
                {
                    let tbody = document.getElementById("this-month-report-tbody");
                    tbody.innerHTML = ' '; 

                    let th_names = new Array ();
                    th_names.push(["NAME","DATE","AIRTEL","MTN","CENTENARY","EQUITY","CASH","DRAWINGS","FLOAT"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    let tr, td;
                    for (let table_row = 0; table_row<results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row'
                            for (let table_data = 0; table_data<(results[table_row].length); ++table_data)
                            {
                                td = document.createElement('td');
                                td.innerHTML = results[table_row][table_data];
                                tr.appendChild(td);
                            }
                            tbody.appendChild(tr);
                        }
                }
        }
        let this_month = document.getElementById('this-month-report-div');
        req.send(this_month);
        setTimeout(Save_view_this_month_data,seconds);
}

function fetch_agency_this_month_summary_data ()
{
    document.getElementById("agency-loader-this-month-summary").style.display="block";
    setTimeout(agency_this_month_summary,loader_seconds)
}
function agency_this_month_summary ()
{
    document.getElementById("agency-loader-this-month-summary").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',agency_url+'query_agency_this_month_summary_report',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || ! results.length)
                {
                    alert ("No Results found");
                }
            else
                {
                    let tbody = document.getElementById("this-month-summary-tbody");
                    tbody.innerHTML = ' '; 

                    let th_names = new Array ();
                    th_names.push(["NAME","DATE","BANKS","CASH","DRAWINGS","FLOAT"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    let tr, td;
                    for (let table_row = 0; table_row<results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row'
                            for (let table_data = 0; table_data<(results[table_row].length); ++table_data)
                            {
                                td = document.createElement('td');
                                td.innerHTML = results[table_row][table_data];
                                tr.appendChild(td);
                            }
                            tbody.appendChild(tr);
                        }
                }
        }
        let this_month = document.getElementById('this-month-summary-tbody-div');
        req.send(this_month);
        setTimeout(Save_view_this_month_summary_data,seconds);
}

function fetch_agency_last_momth_details_data ()
{
    document.getElementById("agency-loader-last-month-details").style.display="block";
    setTimeout(agency_last_month_details,loader_seconds)
}
function agency_last_month_details ()
{
    document.getElementById("agency-loader-last-month-details").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',agency_url+'query_agency_last_month_report',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || ! results.length)
                {
                    alert ("No Results found");
                }

            else
                {
                    let tbody = document.getElementById("last-month-report-tbody");
                    tbody.innerHTML = ' '; 

                    let th_names = new Array ();
                    th_names.push(["NAME","DATE","AIRTEL","MTN","CENTENARY","EQUITY","CASH","DRAWINGS","TOTAL"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    let tr, td;
                    for (let table_row = 0; table_row<results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row'
                            for (let table_data = 0; table_data<(results[table_row].length); ++table_data)
                            {
                                td = document.createElement('td');
                                td.innerHTML = results[table_row][table_data];
                                tr.appendChild(td);
                            }
                            tbody.appendChild(tr);
                        }
                }
        }
        let last_month = document.getElementById('last-month-report-div');
        req.send(last_month);
        setTimeout(Save_view_last_month_data,seconds);
}

function fetch_agency_last_month_summary_data ()
{
    document.getElementById("agency-loader-last-month-summary").style.display="block";
    setTimeout(agency_last_month_summary,loader_seconds)
}
function agency_last_month_summary ()
{
    document.getElementById("agency-loader-last-month-summary").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post',agency_url+'query_agency_last_month_summary_report',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || ! results.length)
                {
                    alert ("No Results found");
                }
            else
                {
                    let tbody = document.getElementById("last-month-summary-tbody");
                    tbody.innerHTML = ' '; 

                    let th_names = new Array ();
                    th_names.push(["NAME","DATE","BANKS","CASH","DRAWINGS","FLOAT"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    let tr, td;
                    for (let table_row = 0; table_row<results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row'
                            for (let table_data = 0; table_data<(results[table_row].length); ++table_data)
                            {
                                td = document.createElement('td');
                                td.innerHTML = results[table_row][table_data];
                                tr.appendChild(td);
                            }
                            tbody.appendChild(tr);
                        }
                }
        }
        let last_month = document.getElementById('last-month-summary-tbody-div');
        req.send(last_month);
        setTimeout(Save_view_last_month_summary_data,seconds);
}








// handling storage of data ==================

function Save_show_all_data()
{
    let data = document.getElementById ("show-all-tbody").innerHTML;
    localStorage.setItem("agency_all", data);
}
function Save_show_all_summary_data ()
{
    let data = document.getElementById ("show-all-summary-tbody").innerHTML;
    localStorage.setItem("agency_all_summary", data);
}

function Save_view_by_date_data()
{
    let data = document.getElementById ("agency-view-by-date-tbody").innerHTML;
    localStorage.setItem("agency_date_data", data);
}

function Save_view_by_date_data_summary ()
{
    let data = document.getElementById ("date-summary-tbody").innerHTML;
    localStorage.setItem("agency_date_summary", data);
}
function Save_from_to_data ()
{
    let data = document.getElementById ("from-and-to-date-search-tbody").innerHTML;
    localStorage.setItem("agency_from_to", data);
}
function Save_from_to_summary_data ()
{
    let data = document.getElementById ("from-to-summary-tbody").innerHTML;
    localStorage.setItem("agency_from_to_summary", data);
}
function Save_yesterday_data ()
{
    let data = document.getElementById ("agency-view-yesterday-tbody").innerHTML;
    localStorage.setItem("agency_yesterday", data);
}
function Save_yesterday_summary_data ()
{
    let data = document.getElementById ("yesterday-summary-tbody").innerHTML;
    localStorage.setItem("agency_yesterday_summary", data);
}
function Save_last_week_data ()
{
    let data = document.getElementById ("agency-last-week-tbody").innerHTML;
    localStorage.setItem("agency_last_week", data);
}
function Save_last_week_summary_data ()
{
    let data = document.getElementById ("last-week-summary-tbody").innerHTML;
    localStorage.setItem("agency_lst_wk_summary", data);
}
function Save_view_this_month_data()
{
    let data = document.getElementById ("this-month-report-tbody").innerHTML;
    localStorage.setItem("agency_this_month", data);
}
function Save_view_this_month_summary_data  ()
{
    let data = document.getElementById ("this-month-summary-tbody").innerHTML;
    localStorage.setItem("agency_dis_mth_summary", data);
}
function Save_view_last_month_data()
{
    let data = document.getElementById ("last-month-report-tbody").innerHTML;
    localStorage.setItem("agency_last_month", data);
}
function Save_view_last_month_summary_data()
{
    let data = document.getElementById ("last-month-summary-tbody").innerHTML;
    localStorage.setItem("agency_lst_mth_summary", data);
}


function Load_Offline_Data ()
{
    document.getElementById("show-all-tbody").innerHTML = localStorage.getItem("agency_all");
    document.getElementById("show-all-summary-tbody").innerHTML = localStorage.getItem("agency_all_summary");
    document.getElementById("agency-view-by-date-tbody").innerHTML = localStorage.getItem("agency_date_data");
    document.getElementById("date-summary-tbody").innerHTML = localStorage.getItem("agency_date_summary");
    document.getElementById("from-and-to-date-search-tbody").innerHTML = localStorage.getItem("agency_from_to");
    document.getElementById("from-to-summary-tbody").innerHTML = localStorage.getItem("agency_from_to_summary");
    document.getElementById("agency-view-yesterday-tbody").innerHTML = localStorage.getItem("agency_yesterday");
    document.getElementById("yesterday-summary-tbody").innerHTML = localStorage.getItem("agency_yesterday_summary");
    document.getElementById("agency-last-week-tbody").innerHTML = localStorage.getItem("agency_last_week");
    document.getElementById("last-week-summary-tbody").innerHTML = localStorage.getItem("agency_lst_wk_summary");
    document.getElementById("this-month-report-tbody").innerHTML = localStorage.getItem("agency_this_month");
    document.getElementById("this-month-summary-tbody").innerHTML = localStorage.getItem("agency_dis_mth_summary");
    document.getElementById("last-month-report-tbody").innerHTML = localStorage.getItem("agency_last_month");
    document.getElementById("last-month-summary-tbody").innerHTML = localStorage.getItem("agency_lst_mth_summary");
}
