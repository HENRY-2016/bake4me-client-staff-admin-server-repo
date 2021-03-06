
var data_src_url = "http://127.0.0.1:6060/";
// var data_src_url = "http://192.168.43.140:6060/";

let url = 'http://localhost/';
let html_pages_source_dir = 'bake4me-client-staff-admin-server-repo/';
let php_pages_source_dir = 'bake4me-php/';





function IntializeSetUp ()
{
	CreateDynamicStatusTable ();
}
// MAIN LINKS NAVIGATION ...........
function Load_Cakes_Page () {window.location='bakery_cakes.html';}
function Load_Outlets_Page () {window.location='bakery_outlets.html';}
function Load_Baking_Machines_Page () {window.location='bakery_machines.html';}
function Load_Party_Accessories_Page () {window.location='bakery_accessories.html';}

// SUB LINKS NAVIGATION  CLIENTS ......
function Load_Payment_Page () {window.location='bakery_payment.html';}
function Load_FeedBacks_Page () {window.location='bakery_feedback.html';}
function Load_Deliveries_Page () {window.location='bakery_deliveries.html';}
function Load_History_Page () {window.location='bakery_history.html';}

// BAKERY NAVIGATION
function Bakery_Register () {window.location='bakery_register.html'}
function Bakery_Log_Out () {window.location='clientindex.html'}
function Bakery_Log_In () {window.location='clientindex.html'}


// STAFFS
function Load_Crud_Page () {window.location='staff_bakery_crud.html'}



// SCHOOL NAVIGATION ..... 
function Load_School_Index_Page () {window.location = 'school_index.html';}
function   Load_School_Login_Register_Page () {window.location = 'school_login_register.html';}
// function School_Logout () {window.location = url+php_pages_source_dir+'school_logout.php';}
function School_LogOut () {window.location='school_login_register.html';}
function School_LogIn () {window.location='school_login_register.html';}
function Load_School_Notice_Board () {window.location = 'school_notice_board.html';}
function Load_School_Materials () {window.location = 'school_materials.html';}
function Load_School_Calender () {window.location = 'school_calender.html';}
function Load_School_Payment () {window.location = 'school_payment.html';}




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

function SubmitAjaxCustomerPayment ()
{
    document.forms["customer-payment-form"].submit();
}
function SubmitFeedBackForm ()
{
    document.forms["feedback-form"].submit();
}
function SubmitResponseOnFeedBackForm ()
{
    document.forms["response-feedback-form"].submit();
}
// Menu Gallery
function Add_Gallery_Iframe (endpoint)
{
    // document.getElementById("offline-label-div").style.display = "none";
    let MenuGalleryDiv = document.getElementById("menu-pics-div");
    let photoiframe = document.createElement("iframe");
    photoiframe.className = "menu-iframe";
    photoiframe.setAttribute("src",  data_src_url + endpoint);
    MenuGalleryDiv.appendChild(photoiframe); 
}






function Fetch_Selected_Payment_Data  ( endpoint)
    {
        let req = new XMLHttpRequest();
        req.open('post', data_src_url+endpoint,true)
        req.onload = function ()
            {
                let results = JSON.parse(this.responseText);
                if (! results || !results.length)
                    {
                        alert("No results found")
                        console.log(results)
                    }
                else
                    {
                        // results = [["Henry", "Queen Cake1", "4", "add more sugar", "Car", "2021-03-05", "b05:53:01"], ["Henry", "Queen Cake1", "4", "add more sugar", "Car", "2021-03-05", "05:50:42"]]

                        // console.log(results)
                        // let orders = results.length;
                        // document.getElementById("chips-status-id").innerText = orders;

                        let tbody = document.getElementById('results-table-tbody');
                        tbody.innerHTML = ' ';

                        // draw table
                        let td,tr;
                        // add table headings
                        let th_names = new Array ();
                        th_names.push(["Name","Order No","Amount","Date"]);
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
            let myform = new FormData (document.getElementById('details-form'));
            req.send(myform);
    }

function Fetch_Selected_Data  ( endpoint)
    {
        let req = new XMLHttpRequest();
        req.open('post', data_src_url+endpoint,true)
        req.onload = function ()
            {
                let results = JSON.parse(this.responseText);
                if (! results || !results.length)
                    {
                        alert("No results found")
                        console.log(results)
                    }
                else
                    {
                        // results = [["Henry", "Queen Cake1", "4", "add more sugar", "Car", "2021-03-05", "b05:53:01"], ["Henry", "Queen Cake1", "4", "add more sugar", "Car", "2021-03-05", "05:50:42"]]

                        // console.log(results)
                        // let orders = results.length;
                        // document.getElementById("chips-status-id").innerText = orders;

                        let tbody = document.getElementById('results-table-tbody');
                        tbody.innerHTML = ' ';

                        // draw table
                        let td,tr;
                        // add table headings
                        let th_names = new Array ();
                        th_names.push(["Id","Customername","Cakename", "Quantity","Flavours","Design","Delivery","Orderno"]);
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
            let myform = new FormData (document.getElementById('details-form'));
            req.send(myform);
    }


    function Fetch_Selected_Feedback_Data  ( endpoint)
    {
        let req = new XMLHttpRequest();
        req.open('post', data_src_url+endpoint,true)
        req.onload = function ()
            {
                let results = JSON.parse(this.responseText);
                if (! results || !results.length)
                    {
                        alert("No results found")
                        console.log(results)
                    }
                else
                    {
                        // results = [["Henry", "Queen Cake1", "4", "add more sugar", "Car", "2021-03-05", "b05:53:01"], ["Henry", "Queen Cake1", "4", "add more sugar", "Car", "2021-03-05", "05:50:42"]]

                        // console.log(results)
                        // let orders = results.length;
                        // document.getElementById("chips-status-id").innerText = orders;

                        let tbody = document.getElementById('results-table-tbody');
                        tbody.innerHTML = ' ';

                        // draw table
                        let td,tr;
                        // add table headings
                        let th_names = new Array ();
                        th_names.push(["Id","Name", "Reference","Date","Response"]);
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
            let myform = new FormData (document.getElementById('details-form'));
            req.send(myform);
    }

function Fetch_Customer_Selected_Data ( endpoint)
{
    let req = new XMLHttpRequest();
        req.open('post', data_src_url+endpoint,true)
        req.onload = function ()
            {
                let results = JSON.parse(this.responseText);
                if (! results || !results.length)
                    {
                        alert("No results found")
                        // console.log(results)
                    }
                else
                    {
                        console.log("results")
                        console.log(results)
                        document.getElementById("selected-name").innerHTML = results[0][0]
                        // document.getElementById("selected-id").innerHTML = results[0][2]
                        document.getElementById("selected-cake-name").innerHTML = results[0][1]
                        document.getElementById("selected-quantity").innerHTML = results[0][2]
                        document.getElementById("selected-flavours").innerHTML = results[0][3]
                        document.getElementById("selected-design").innerHTML = results[0][4]
                        document.getElementById("selected-delivery").innerHTML = results[0][5]
                        document.getElementById("selected-oderno").innerHTML = results[0][6]
                        document.getElementById("selected-design-photo-name").innerHTML = results[0][7]
                    }
            }
        let myform = new FormData (document.getElementById('customer-details-form'));
        req.send(myform);
        document.getElementById("customer-selected-details-div-id").style.display='block';
        setTimeout(Create_Estimate_Iframe_Photo,1000)
}
function Create_Estimate_Iframe_Photo ()
{
    document.getElementById("iframe-photo-div").innerHTML = '';

    // let designphotoname = document.getElementById("selected-oderno").innerText
    let designphotoname = document.getElementById("selected-design-photo-name").innerText
    console.log(designphotoname)
    let MenuGalleryDiv = document.getElementById("iframe-photo-div");
    let photoiframe = document.createElement("iframe");
    photoiframe.className = "order-pic-iframe";
    photoiframe.setAttribute("src",  data_src_url + 'get_image/'+designphotoname);
    photoiframe.setAttribute("scrolling","no");
    MenuGalleryDiv.appendChild(photoiframe);
}

function Fetch_Customer_Selected_Feedback_Data ( endpoint)
{
    let req = new XMLHttpRequest();
        req.open('post', data_src_url+endpoint,true)
        req.onload = function ()
            {
                let results = JSON.parse(this.responseText);
                if (! results || !results.length)
                    {
                        alert("No results found")
                        // console.log(results)
                    }
                else
                    {
                        console.log("results")
                        console.log(results)
                        document.getElementById("selected-name").innerHTML = results[0][0]
                        document.getElementById("selected-id").innerHTML = results[0][1]
                        document.getElementById("selected-date").innerHTML = results[0][2]
                        document.getElementById("selected-feedback").innerHTML = results[0][3]
                        document.getElementById("selected-reference").innerHTML = results[0][4]
                        document.getElementById("selected-response").innerHTML = results[0][5]
                    }
            }
        let myform = new FormData (document.getElementById('customer-details-form'));
        req.send(myform);
        document.getElementById("customer-selected-details-div-id").style.display='block';
}
function Fetch_Customer_Payment_Selected_Data ( endpoint)
{
    let req = new XMLHttpRequest();
        req.open('post', data_src_url+endpoint,true)
        req.onload = function ()
            {
                let results = JSON.parse(this.responseText);
                if (! results || !results.length)
                    {
                        alert("No results found")
                        // console.log(results)
                    }
                else
                    {
                        console.log("results")
                        console.log(results)
                        document.getElementById("selected-name").innerHTML = results[0][0]
                        // document.getElementById("selected-id").innerHTML = results[0][2]
                        document.getElementById("selected-cake-name").innerHTML = results[0][1]
                        document.getElementById("selected-quantity").innerHTML = results[0][2]
                        document.getElementById("selected-flavours").innerHTML = results[0][3]
                        document.getElementById("selected-design").innerHTML = results[0][4]
                        document.getElementById("selected-order-date").innerHTML = results[0][7]
                        document.getElementById("selected-delivery").innerHTML = results[0][5]
                        document.getElementById("selected-oderno").innerHTML = results[0][6]
                    }
            }
        let myform = new FormData (document.getElementById('customer-details-form'));
        req.send(myform);
        document.getElementById("customer-selected-details-div-id").style.display='block';
}


    function CreateDynamicStatusTable () {
        // var myName = document.getElementById("name");
        // var age = document.getElementById("age");
		let results = 6
		for (i=0;i<results;i++)
		{
		let table = document.getElementById("status-table-data-id");
		let rowCount = table.rows.length;
		let row = table.insertRow(rowCount);
		let name = "Wedding Cake";
		let spannum = 5;
		row.className='status-table-tr'; 

	
			row.insertCell(0).innerHTML= '<label class="status-table-td"> '+ name +'</label>';
			row.insertCell(1).innerHTML= '<center><span class=" status-table-td w3-badge w3-blue w3-padding-small"> '+ spannum +'</span></center>';
		}
    }

function CreateDynamicStatusTable2 (endpoint) 
{
    
    let req = new XMLHttpRequest();
    req.open('post', data_src_url+endpoint,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {
                    alert("No results found")
                    console.log(results)
                }
            else
                {
                    let table = document.getElementById("status-table-data-id");
                    let rowCount = table.rows.length;

                    for (i=0;i<results.length;i++)
                        {
                            let row = table.insertRow(rowCount);
                            row.className='status-table-tr';
                            row.insertCell(0).innerHTML= '<label class="status-table-td"> '+ results[i][0] +'</label>';
                            row.insertCell(1).innerHTML= '<center><span class=" status-table-td w3-badge w3-blue w3-padding-small"> '+ results[i][1] +'</span></center>';
                        }
                }
                
        }
        let div_tag = document.getElementById('status-table-div-request-id');
        req.send(div_tag);
}
function CreateBakeryPaymentDynamicStatusTable (endpoint) 
{
    
    let req = new XMLHttpRequest();
    req.open('post', data_src_url+endpoint,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {
                    alert("No results found")
                    console.log(results)
                }
            else
                {
                    let table = document.getElementById("status-table-data-id");
                    let rowCount = table.rows.length;

                    for (i=0;i<results.length;i++)
                        {
                            let row = table.insertRow(rowCount);
                            row.className='status-table-tr';
                            row.insertCell(0).innerHTML= '<label class="status-table-td"> '+ results[i][0] +'</label>';
                            row.insertCell(1).innerHTML= '<label class="status-table-td">'+ results[i][1] +'</label>';
                            row.insertCell(2).innerHTML= '<label class="status-table-td"> '+ results[i][2] +'</label>';

                        }
                }
                
        }
        let div_tag = document.getElementById('status-table-div-request-id');
        req.send(div_tag);
}


function LoadImageFromServer ()
{
    let namesrequest = new XMLHttpRequest ();
    namesrequest.onreadystatechange = function ()
        {
            if ( namesrequest.readyState == 4 && namesrequest.status == 200)
                {
                    items_names = JSON.parse(namesrequest.responseText)
                    console.log(items_names)
                }
        }
    namesrequest.open("GET", data_src_url + 'get_image');    
    namesrequest.send();
}

var items_names;
function LoadNamesFromServer (endpoint)
{
    let namesrequest = new XMLHttpRequest ();
    namesrequest.onreadystatechange = function ()
        {
            if ( namesrequest.readyState == 4 && namesrequest.status == 200)
                {
                    items_names = JSON.parse(namesrequest.responseText)
                    console.log(items_names)
                }
        }
    namesrequest.open("GET", data_src_url + endpoint );    
    namesrequest.send();
}

var customer_names;
function LoadCustomerNamesFromServer (endpoint)
{
    let namesrequest = new XMLHttpRequest ();
    namesrequest.onreadystatechange = function ()
        {
            if ( namesrequest.readyState == 4 && namesrequest.status == 200)
                {
                    customer_names = JSON.parse(namesrequest.responseText)
                }
        }
    namesrequest.open("GET", data_src_url + endpoint );    
    namesrequest.send();
}
var feedback_customer_names;
function LoadFeedBackCustomerNamesFromServer (endpoint)
{
    let namesrequest = new XMLHttpRequest ();
    namesrequest.onreadystatechange = function ()
        {
            if ( namesrequest.readyState == 4 && namesrequest.status == 200)
                {
                    feedback_customer_names = JSON.parse(namesrequest.responseText)
                }
        }
    namesrequest.open("GET", data_src_url + endpoint );    
    namesrequest.send();
}
var machines_names;
function LoadMachineNamesFromServer (endpoint)
{
    let namesrequest = new XMLHttpRequest ();
    namesrequest.onreadystatechange = function ()
        {
            if ( namesrequest.readyState == 4 && namesrequest.status == 200)
                {
                    machines_names = JSON.parse(namesrequest.responseText)
                }
        }
    namesrequest.open("GET", data_src_url + endpoint );    
    namesrequest.send();
}
var payment_order_numbers;
function LoadCustomerPaymentOrderNumbersFromServer (endpoint)
{
    let namesrequest = new XMLHttpRequest ();
    namesrequest.onreadystatechange = function ()
        {
            if ( namesrequest.readyState == 4 && namesrequest.status == 200)
                {
                    payment_order_numbers = JSON.parse(namesrequest.responseText)
                }
        }
    namesrequest.open("GET", data_src_url + endpoint );    
    namesrequest.send();
}
var customer_order_numeber;
function LoadCustomerOrderNumbersFromServer (endpoint)
{
    let namesrequest = new XMLHttpRequest ();
    namesrequest.onreadystatechange = function ()
        {
            if ( namesrequest.readyState == 4 && namesrequest.status == 200)
                {
                    customer_order_numeber = JSON.parse(namesrequest.responseText)
                }
        }
    namesrequest.open("GET", data_src_url + endpoint );    
    namesrequest.send();
}


/**
 *  =====================================================================
 *  
 *  SCHOOL 
 * 
 * =======================================================================
 */
function Fetch_School_Selected_Data () 
{
	let htmldiv = document.getElementById("student-display-details-div-id");
	
	/*
	National Id <br>
	Names<br>
	Contacts<br>
	Email<br>
	Next of Kin <br>
	Contacts<br>
	Pasport Photo <br>
	Front Side<br>
	Back Side <br>
	*/
	htmldiv.innerHTML = "Student info";
	
}

function Fetch_School_Approval_Selected_Data () 
{
	document.getElementById("student-credentials-setup-div-id").style.display="block";
	
}


function CreateSchoolDynamicStatusTable () {
        // var myName = document.getElementById("name");
        // var age = document.getElementById("age");
		let results = 6
		for (i=0;i<results;i++)
		{
		let table = document.getElementById("status-table-data-id");
		let rowCount = table.rows.length;
		let row = table.insertRow(rowCount);
		let name = "Wedding Cake";
		let spannum = 5;
		let mydate = "06/3/2021"
		row.className='status-table-tr'; 

	
			row.insertCell(0).innerHTML= '<label class="status-table-td"> '+ name +'</label>';
			row.insertCell(1).innerHTML= '<label class="status-table-td"> '+ mydate +'</label>';
			row.insertCell(2).innerHTML= '<center><span class=" status-table-td w3-badge w3-blue w3-padding-small"> '+ spannum +'</span></center>';
		}
    }

function Fetch_School_Make_Active_Selected_Data () 
{
	document.getElementById("student-display-details-div-id").style.display='block';
	document.getElementById("student-make-active-details-div-id").innerHTML = "Student"
}


function Fetch_School_View_Student_Selected_Data () 
{
document.getElementById("student-view-details-div-id").innerHTML = "Student details"	
}


function Fetch_School_View_Status_Selected_Data () 
{
document.getElementById("student-view-status-div-id").innerHTML = "Student status"	
}




// let customer_names = 
// 				[
//                     'Peter',
//                     'John'
//                 ]
let students_names = 
                [
                    'Peter',
                    'John',
                    'henry'
                ]


				
let school_description =
				
				[
					'Fees',
					'Theory',
					'Practical'
				]
							
function autocomplete(inp, arr) 
{
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    console.log('autocomplete fun called...')
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) 
        {
            var a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) { return false;}
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) 
                {
                /*check if the item starts with the same letters as the text field value:*/
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) 
                    {
                        /*create a DIV element for each matching element:*/
                        b = document.createElement("DIV");
                        /*make the matching letters bold:*/
                        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                        b.innerHTML += arr[i].substr(val.length);
                        /*insert a input field that will hold the current array item's value:*/
                        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                        /*execute a function when someone clicks on the item value (DIV element):*/
                            b.addEventListener("click", function(e) {
                            /*insert the value for the autocomplete text field:*/
                            inp.value = this.getElementsByTagName("input")[0].value;
                            /*close the list of autocompleted values,
                            (or any other open lists of autocompleted values:*/
                            closeAllLists();
                        });
                        a.appendChild(b);
                    }
                }
        });
        

    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) 
        {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) 
                {
                    /*If the arrow DOWN key is pressed,
                    increase the currentFocus variable:*/
                    currentFocus++;
                    /*and and make the current item more visible:*/
                    addActive(x);
                } 
            else if (e.keyCode == 38) 
            { //up
                /*If the arrow UP key is pressed,
                decrease the currentFocus variable:*/
                currentFocus--;
                /*and and make the current item more visible:*/
                addActive(x);
            } 
            else if (e.keyCode == 13) 
            {
                /*If the ENTER key is pressed, prevent the form from being submitted,*/
                e.preventDefault();
                if (currentFocus > -1) 
                    {
                        /*and simulate a click on the "active" item:*/
                        if (x) x[currentFocus].click();
                    }
            }
        });

    function addActive(x) 
        {
            /*a function to classify an item as "active":*/
            if (!x) return false;
            /*start by removing the "active" class on all items:*/
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("autocomplete-active");
        }
    function removeActive(x) 
        {
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < x.length; i++) 
                {
                    x[i].classList.remove("autocomplete-active");
                }
        }
    function closeAllLists(elmnt) 
        {
            /*close all autocomplete lists in the document,
            except the one passed as an argument:*/
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) 
                {
                    if (elmnt != x[i] && elmnt != inp) 
                    {
                        x[i].parentNode.removeChild(x[i]);
                    }
                }
        }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {closeAllLists(e.target);});
} 