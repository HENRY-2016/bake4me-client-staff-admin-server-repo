// var src_url = "http://192.168.43.140:6060/";
var src_url = "http://127.0.0.1:6060/";



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

            // Menu Gallery
function Add_Menu_Gallery_Iframe (endpoint)
{
    document.getElementById("offline-label-div").style.display = "none";
    let MenuGalleryDiv = document.getElementById("menu-pics-div");
    let MenuIframe = document.createElement("iframe");
    MenuIframe.className = "menu-iframe";
    MenuIframe.setAttribute("src",  src_url + endpoint);
    MenuGalleryDiv.appendChild(MenuIframe);
}

function GetProductsPrices ( urlendpoint)
{
    let pricesrequest = new XMLHttpRequest ();
    pricesrequest.onreadystatechange = function ()
        {
            if ( pricesrequest.readyState == 4 && pricesrequest.status == 200)
                {
                    products_prices = JSON.parse(pricesrequest.responseText)
                    console.log(products_prices)
                }
        }
    pricesrequest.open("GET", src_url + urlendpoint );    
    pricesrequest.send();
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    

function SubmitAjaxCustomerEstimate ()
{
    document.forms["customer-estimate-form"].submit();
    // customername = 'Henry';
    // $.ajax({

    //     data :
    //         {
    //             // customername:$(customername),//.val(),
    //             cakename:$("#cake-name-input-id").val(),
    //             flavours:$("#flavours-input-id").val(),
    //             design:$("#design-name-input-id").val(),
    //             quatity:$("#quantity-input-id").val(),
    //             delivery_date:$("#delivery-date-input-id").val(),
    //         },
    //         url : src_url + "estimateorders_process_request",
    //         type : "POST",
    //         encode : true
    // })
    // .done(function (data){
    //     stringtoobject = JSON.parse(data);
    //     respons_text = stringtoobject.success
    //     respons_string = respons_text;
            
    //     if(data.error)
    //     {
    //         $('#error-post-alert').text(data.error).show();
    //         $('#success-post-alert').hide();
    //     }
    //     else 
    //     {
            
    //         $('#success-post-alert').text(respons_string).show();
    //         success = '<center>'+name + '<br>'+'<br>'+'Success : Your Posted Well' +'<center>';
    //         // $('#success-post-alert').text( success).show();
    //         $('#error-post-alert').hide();    
    //     }
    // });

}


                // =========================
                // ON CUSTOMER DYNAMIC LIST
                // =========================
// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) 
{
    let span = document.createElement("SPAN");
    // let txt = document.createTextNode("\u00D7");
    let txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
    let close = document.getElementsByClassName("close-x-on-lists");
for (i = 0; i < close.length; i++) 
{
    close[i].onclick = function() 
    {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

function DisplayCostPrice (nameinputid,qtyinputid,cost_input_id)
{
    machinenameinput = document.getElementById(nameinputid).value;
    qty = document.getElementById(qtyinputid).value;

    console.log(machinenameinput)
    console.log(products_prices)

    // Get the product type name selected.....
    machin_name = Object.keys(products_prices).filter(key => key == machinenameinput)
    machin_name_string = machin_name.toString() // convert from arrary to string

    // Get the product cost basesing on the size
    if (machinenameinput !== '' || qty !== '')
        {
            productprice = Object.values(products_prices[machin_name_string]) // fst index
            // convert from arrary to string & rmv commas
            price = productprice.toString().split(",").join("");
            document.getElementById(cost_input_id).value = price;
        }
    else {alert("...Enter Machine Name and Quantity ...");}
}

// Create a new list item when clicking on the "Add" button
function CreatCustomerList(nameinputid,qtyinputid,costpriceid,totalinputid,deliverydateinputid,unorderedlistid) 
{
    let li = document.createElement("li");
    li.className= "list-class"
    // get input values
    let machine = document.getElementById(nameinputid).value;
    let qty = document.getElementById(qtyinputid).value;
    let sellingprice = document.getElementById(costpriceid).value;
    let total = document.getElementById(totalinputid).value;
    let deliverydate = document.getElementById(deliverydateinputid).value;
    // creat a string
    let liststring = machine + " " + qty + " "+sellingprice + " "+ total + " " + deliverydate; 
    console.log(liststring)
    let customerlist = document.createTextNode(liststring);
    li.appendChild(customerlist);
    if (machine === '' || qty === '') 
        {
            alert("Enter Machine Name, Quantity");
        } 
    else {document.getElementById(unorderedlistid).appendChild(li);}
    
    // clear the inputs
    machine = document.getElementById(nameinputid).value ="";
    qty = document.getElementById(qtyinputid).value ="";
    sellingprice = document.getElementById(costpriceid).value ="";
    total = document.getElementById(totalinputid).value ="";
    deliverydate = document.getElementById(deliverydateinputid).value ="";
    
    let span = document.createElement("SPAN");
    let x_txt = document.createTextNode("\u00D7");
    span.className = "close-x-on-lists";
    // span.
    span.appendChild(x_txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) 
        {
            close[i].onclick = function() 
            {
                console.log("Clossing a div body")
                let div = this.parentElement;
                div.style.display = "none";
                div.remove()
            }
        }
}



// collecting data
var customer_order_list;
function CreateArray ()
{
    let listarrary =[]
    $("#un-ordered-list-id li").each((id, elem) => {console.log(elem.innerText); listarrary.push(elem.innerText) });

console.log(listarrary)
console.log("listarrary.join(' ').trim()")
let stringfromarray =  listarrary.join(' ').trim()

customer_order_list = stringfromarray
}

function SubmiteData ( urlendpoint)
{
    // collecting data
    let customer_order_list;
    let listarrary =[]
    $("#un-ordered-list-id li").each((id, elem) => {listarrary.push(elem.innerText) });
    let stringfromarray =  listarrary.join(' ').trim() // make a string from array
    customer_order_list = stringfromarray


    // process data submision
    $.ajax({
            data :
                {
                    name : $("#name").val(),
                    contact : $("#contact").val(),
                    total : $("#final-total-id").val(),
                    items_list: customer_order_list
                },

                url : bookings_url + urlendpoint,
                type : 'POST',
                // dataType : 'json', // what type of data do we expect back from the server
                encode : true
            })

    // callback function 
    .done(function (data)
        {
            if(data.error)
                {
                    console.log("Something went wrong")
                }
            else {console.log("sumited well..")}

        }
    );
            
}


function CalculateSubtotalAutomatically ()
{
    // this computs the sub - tatol automatically
    let qty_input_id  = document.getElementById("qty-input-id").value;
    let cost_price_id = document.getElementById("cost-price-id").value;

    if (!cost_price_id == '' & !qty_input_id =='')
        {
            // qty_input_id.isInteger()    
            let price = parseFloat(qty_input_id) * parseFloat(cost_price_id);    
            let formatedprice = price.toLocaleString();
            document.getElementById("total-input-id").value =  formatedprice;

        }
    // else{alert("feild cost_price_id or qty_price_id is empty")}
}

function CalculateGrandtotalAutomatically ()
    {
        let total = 0;
        $("li").each( function () 
            {
                str = $(this).text().replace(" ", "-")
                len = str.length
                for (let i =0; i< len; i++)
                    {
                        str = str.replace(" ", "-")
                    }
                // alert(str) 
                subtotal = str.split("-").pop()                            
                subtotal1  = subtotal.slice(0, -1)
                comasoutnum =  subtotal1.replace(/,/g,"")
                subtotalint = parseInt(comasoutnum)
                total += subtotalint 
                document.getElementById("final-total-id").value = total.toLocaleString()+' /=';
                console.log(total);
            });
    }
