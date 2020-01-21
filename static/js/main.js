
// INDEX PAGES
function Open_mapei_popup (){let popup = document.getElementById("mapeiPopup");popup.classList.toggle("show");}                                        
function Open_chint_popup (){let popup = document.getElementById("chintPopup");popup.classList.toggle("show");}                                        
function Open_sadolin_popup (){let popup = document.getElementById("myPopup");popup.classList.toggle("show");}
                                        

// AGENCY PAGES
function Load_home_page () {window.location="index.html"}
function Load_agency_entries () {window.location="AgencyEntriesGui.html"}
function Load_agency_view() {window.location="AgencyViewGui.html"}


// MAPAI PAGES
function Load_mapei_entries () {window.location="MapeiEntriesGui.html"};
function Load_mapei_view () {window.location="MapeiViewGui.html"};
function Load_mapei_record () {window.location="MapeiRecordGui.html"}
function Load_mapei_view_adesilexp7 () {window.location="MapeiViewAdesilexp7.html"}
function Load_mapei_view_planiseal_grey () {window.location="MapeiViewPlanisealGrey.html"}
function Load_mapei_view_planiseal_liquid () {window.location="MapeiViewPlanisealLiquid.html"}
function Load_mapei_view_plastimul_dpm () {window.location="MapeiViewPlastimulDpm.html"}
function Load_mapei_view_keracolor () {window.location="MapeiViewKeracolor.html"}




// CHINT PAGES
function Load_chint_entries () {window.location="ChintEntriesGui.html";}
function Load_chint_record () {window.location="ChintRecordGui.html";}
function Load_chint_view () {window.location="ChintViewGui.html";}

// CHINT VIEW GUI
function Load_Mcb1P_View () {window.location="ChintViewMcb1p.html";}
function Load_Mcb2P_View () {window.location="ChintViewMcb2p.html";}
function Load_Mcb3P_View () {window.location="ChintViewMcb3p.html";}
function Load_Mcb4P_View () {window.location="ChintViewMcb4p.html";}
function Load_Mccb_View () {window.location="ChintViewMccb.html";}
function Load_Bulbs_View () {window.location="ChintViewBulbs.html";}
function Load_Cabels_View () {window.location="ChintViewCabels.html";}
function Load_Ceilling_View () {window.location="ChintViewCeilling.html";}
function Load_Contactor_View () {window.location="ChintViewContactor.html";}
function Load_Flood_View () {window.location="ChintViewFlood.html";}
function Load_MainSwitch_View () {window.location="ChintViewMainSwitch.html";}
function Load_Surface_View () {window.location="ChintViewSurface.html";}

function Load_Industrial_Switch_View () {window.location="ChintViewIndustrialSwitch.html";}
function Load_Industrial_Socket_View () {window.location="ChintViewIndustrialSocket.html";}
function Load_Gold_Switch_View () {window.location="ChintViewGoldSwitch.html";}
function Load_Gold_Socket_View () {window.location="ChintViewGoldSocket.html";}
function Load_White_Switch_View () {window.location="ChintViewWhiteSwitch.html";}
function Load_White_Socket_View () {window.location="ChintViewWhiteSocket.html";}
function Load_Silver_Switch_View () {window.location="ChintViewSilverSwitch.html";}
function Load_Silver_Socket_View () {window.location="ChintViewSilverSocket.html";}



// SADOLIN PAGES
function Load_sadolin_entries () {window.location="SadolinEntriesGui.html"}
function Load_sadolin_view() {window.location="SadolinViewGui.html"}
function Load_sadolin_view_emulsion () {window.location="SadolinViewEmulsion.html"}
function Load_sadolin_view_bg_stock() {window.location="SadolinViewBudgetGloss.html"}
function Load_sadolin_view_matt () {window.location="SadolinViewMatt.html"}
function Load_sadolin_view_silk () {window.location="SadolinViewSilk.html"}
function Load_sadolin_view_silk_base () {window.location="SadolinViewBaseSilk.html"}
function Load_sadolin_view_super () {window.location="SadolinViewSuper.html"}
function Load_sadolin_view_super_base () {window.location="SadolinViewBaseSuper.html"}
function Load_sadolin_view_undercoat () {window.location="SadolinViewUndercoat.html"}
function Load_sadolin_view_weather_guard () {window.location="SadolinViewWeather.html"}
function Load_sadolin_view_weather_base () {window.location="SadolinViewBaseWeather.html"}
function Load_sadolin_record() {window.location="SadolinRecordGui.html"}


// ---------------
function Load_sadolin_view_thinner() {window.location="SadolinViewThinner.html"}
function Load_sadolin_view_rood_marking(){window.location="SadolinViewRoadmarking.html"}
function Load_sadolin_view_wallguard ()	{window.location="SadolinViewWallguard.html"}
function Load_sadolin_view_roofguard ()	{window.location="SadolinViewRoofguard.html"}
function Load_sadolin_view_rainshild () {window.location="SadolinViewRainshild.html"}
function Load_sadolin_view_dampshild ()	{window.location="SadolinViewDampshild.html"}
function Load_sadolin_view_clear_varnish ()	{window.location="SadolinViewClearVarnish.html"}
function Load_sadolin_view_colour_varnish () {window.location="ViewColourVarnish.html"}
function Load_sadolin_view_ceilling ()	{window.location="SadolinViewCeilling.html"}

function Show_Industrial_View_Switch_Socket ()
{
    document.getElementById("Silver_Switches_Sockets_Div").style.display = "none";
    document.getElementById("White_Switches_Sockets_Div").style.display = "none";
    document.getElementById("Gold_Switches_Sockets_Div").style.display = "none";
    document.getElementById("Industrial_Metal_Clad_Div").style.display="block";
}
function Show_Gold_View_Switch_Socket ()
{
    document.getElementById("Silver_Switches_Sockets_Div").style.display = "none";
    document.getElementById("White_Switches_Sockets_Div").style.display = "none";
    document.getElementById("Industrial_Metal_Clad_Div").style.display="none";
    document.getElementById("Gold_Switches_Sockets_Div").style.display = "block";
}

function Show_White_View_Switch_Socket ()
{
    document.getElementById("Silver_Switches_Sockets_Div").style.display = "none";
    document.getElementById("Industrial_Metal_Clad_Div").style.display="none";
    document.getElementById("Gold_Switches_Sockets_Div").style.display = "none";
    document.getElementById("White_Switches_Sockets_Div").style.display = "block";
}


function Show_Silver_View_Switch_Socket ()
{
    document.getElementById("Industrial_Metal_Clad_Div").style.display="none";
    document.getElementById("Gold_Switches_Sockets_Div").style.display = "none";
    document.getElementById("White_Switches_Sockets_Div").style.display = "none";
    document.getElementById("Silver_Switches_Sockets_Div").style.display = "block";
}

function Hide_All_Chint_Switchs_Socket_Divs ()
{
    document.getElementById("Silver_Switches_Sockets_Div").style.display = "none";
    document.getElementById("White_Switches_Sockets_Div").style.display = "none";
    document.getElementById("Gold_Switches_Sockets_Div").style.display = "none";
    document.getElementById("Industrial_Metal_Clad_Div").style.display="none";
}





function Clear_Weather_Guard_Form_Data (){setTimeout(document.getElementById("weather-guard-form").reset(), 1000);}
function hide_all_divs ()
    {
        
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
    }
    function show_undercoat_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("undercoat_id").style.display="block";
    }
function close_undercoat_div ()
    {document.getElementById("undercoat_id").style.display="none";}

function show_emulsion_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "block";

    }
function close_emulsion_div ()
    {document.getElementById("budget-emulsion-id").style.display = "none";}


    function show_budget_gloss_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="block";
    }function close_budget_gloss_div (){document.getElementById("budget_gloss_id").style.display="none";}

function show_matt_vinyl_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="block";
    }function close_matt_vinyl_div (){document.getElementById("matt-vinyl-id").style.display="none";}

function show_silk_vinyl_div ()
{
    document.getElementById("thinner_id").style.display="none";
    document.getElementById("road_marking_id").style.display="none";
    document.getElementById("roof_guard_id").style.display="none";
    document.getElementById("wall_guard_id").style.display="none";
    document.getElementById("rain_shild_id").style.display="none";
    document.getElementById("dampshild_id").style.display="none";
    document.getElementById("clear_varnish_id").style.display="none";
    document.getElementById("colour_varnish_id").style.display="none";
    document.getElementById("ceilling_id").style.display="none";
    document.getElementById("budget-emulsion-id").style.display = "none";
    document.getElementById("silk-vinyl-base-id").style.display="none";
    document.getElementById("matt-vinyl-id").style.display="none";
    document.getElementById("budget_gloss_id").style.display="none";
    document.getElementById("super_gloss_id").style.display="none";
    document.getElementById("super-base-id").style.display="none";
    document.getElementById("undercoat_id").style.display="none";
    document.getElementById("weather_gaurd_id").style.display="none";
    document.getElementById("weather-base-id").style.display="none";
    document.getElementById("silk_vinyl_id").style.display="block";
}function close_silk_vinyl_div (){document.getElementById("silk_vinyl_id").style.display="none";}

function show_silk_vinyl_base_div ()
{
    document.getElementById("thinner_id").style.display="none";
    document.getElementById("road_marking_id").style.display="none";
    document.getElementById("roof_guard_id").style.display="none";
    document.getElementById("wall_guard_id").style.display="none";
    document.getElementById("rain_shild_id").style.display="none";
    document.getElementById("dampshild_id").style.display="none";
    document.getElementById("clear_varnish_id").style.display="none";
    document.getElementById("colour_varnish_id").style.display="none";
    document.getElementById("ceilling_id").style.display="none";
    document.getElementById("budget-emulsion-id").style.display = "none";
    document.getElementById("budget_gloss_id").style.display="none";
    document.getElementById("matt-vinyl-id").style.display="none";
    document.getElementById("super_gloss_id").style.display="none";
    document.getElementById("super-base-id").style.display="none";
    document.getElementById("undercoat_id").style.display="none";
    document.getElementById("weather_gaurd_id").style.display="none";
    document.getElementById("weather-base-id").style.display="none";
    document.getElementById("silk_vinyl_id").style.display="none";
    document.getElementById("silk-vinyl-base-id").style.display="block";
}function close_silk_vinyl_base_div (){document.getElementById("silk-vinyl-base-id").style.display="none";}

function show_super_gloss_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("super_gloss_id").style.display="block";
    }
function close_super_gloss_div (){document.getElementById("super_gloss_id").style.display="none";}

function show_super_base_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super-base-id").style.display="block";
    }
function close_super_base_div (){document.getElementById("super-base-id").style.display="none";}


function show_weather_gaurd_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="block";
    }
function close_weather_gaurd_div ()
    {document.getElementById("weather_gaurd_id").style.display="none";}

function show_weather_base_div ()
    {
         document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("weather-base-id").style.display="block";
    }
function close_weather_base_div ()
    {document.getElementById("weather-base-id").style.display="none";}


function show_thinner_div ()
    {
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("thinner_id").style.display="block";
    }
function close_thinner_div ()
    {document.getElementById("thinner_id").style.display="none";}

function show_road_marking_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("road_marking_id").style.display="block";
    }
function close_road_marking_div ()
    {document.getElementById("road_marking_id").style.display="none";}

function show_roof_guard_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("roof_guard_id").style.display="block";
    }
function close_roof_guard_div ()
    {document.getElementById("roof_guard_id").style.display="none";}

function show_wall_guard_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("wall_guard_id").style.display="block";
    }
function close_wall_guard_div ()
    {document.getElementById("wall_guard_id").style.display="none";}

function show_clear_varnish_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="block";
    }
function close_clear_varnish_div ()
    {document.getElementById("clear_varnish_id").style.display="none";}

function show_colour_varnish_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="block";
    }
function close_colour_varnish_div ()
    {document.getElementById("colour_varnish_id").style.display="none";}

function show_ceilling_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("ceilling_id").style.display="block";
    }
function close_ceilling_div ()
    {document.getElementById("ceilling_id").style.display="none";}

function show_rain_shild_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("rain_shild_id").style.display="block";
    }
function close_rain_shild_div ()
    {document.getElementById("rain_shild_id").style.display="none";}

function show_dampshild_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("dampshild_id").style.display="block";
    }
function close_dampshild_div ()
    {document.getElementById("dampshild_id").style.display="none";}












    /*=======================================================================================================*/
                                            /*
                                               +++++++++++++++++++++++++ ++
                                               +                          +
                                               +   mapei_entries_page   +
                                               +                          + 
                                               ++++++++++++++++++++++++++++
                                            */
function Hide_All_Mapei_Divs ()
{
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="none";
    document.getElementById("Adesilex-P7-Id").style.display="none";
}


function Show_Adesilex_P7_Id ()
{
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="none";
    document.getElementById("Adesilex-P7-Id").style.display="block";

}function Close_Adesilex_P7_Id (){document.getElementById("Adesilex-P7-Id").style.display="none";}

function Show_Planiseal_288_A_Grey_Id ()
{
    document.getElementById("Adesilex-P7-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="none";
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="block";
}function Close_Planiseal_288_A_Grey_Id (){document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";}

function Show_Planiseal_288_B_Id ()
{
    document.getElementById("Adesilex-P7-Id").style.display="none";
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="block";
}function Close_Planiseal_288_B_Id (){document.getElementById("Planiseal-288-B-Id").style.display="none";}

function Show_Plastimul_DPM_Id ()
{
    document.getElementById("Adesilex-P7-Id").style.display="none";
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="block";
}function Close_Plastimul_DPM_Id (){document.getElementById("Plastimul-DPM-Id").style.display="none";}

function Show_Keracolor_Id ()
{
    document.getElementById("Adesilex-P7-Id").style.display="none";
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="block";
}function Close_Keracolor_Id (){document.getElementById("Keracolor-Id").style.display="none";}



























// /*
// ////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                             AGENCY GUI
// //////////////////////////////////////////////////////////////////////////////////////////////////////

// */

// /*
//     +++++++++++++++++++++++++ ++
//     +                          +
//     +   AGENCY ENTRIES PAGE   +
//     +                          + 
//     ++++++++++++++++++++++++++++
// */

// // function fatch_agency_staff_names ()
// // {
// //     let req = new XMLHttpRequest();
// //     req.open('post','http://127.0.0.1:5000/agency_staff_names',true)
// //     req.onload = function ()
// //         {
// //             let results = JSON.parse(this.responseText);
            
// //             if (! results || ! results.length)
// //                 {
// //                     alert ("No Results found");
// //                 }
// //             else
// //                 {
// //                     console.log(results)

// //                 }
// //         }
// //         let names = document.getElementById('agency-staff-names');
// //         req.send(names);
// //         // setTimeout(Save_last_week_data,seconds);
// // }
// // data_source_url = "http://127.0.0.1:3000/"
// data_source_url = "http://172.105.158.108:3000/"

// function fatch_agency_yesterday_float ()
// {
    
//     var yesterday_float = new XMLHttpRequest();
//     yesterday_float.onreadystatechange = function()
//     {
//         if (this.readyState == 4 && this.status == 200)
//             {
//                 document.getElementById("prev_float_input").innerHTML = this.responseText;
//             }
//     };
//     yesterday_float.open("GET",data_source_url + "agency_prev_float",true);
//     yesterday_float.send();
// }

// function write_zeros ()
// {
//     // let name = document.getElementById("name");
//     // let my_day = document.getElementById("my_day");
//     // if (name.value.length == 0){name.value = "None";}
//     // if (my_day.value == 0){my_day.value = "None";}


//     // Terminals
//     // let input1 = document.getElementById("input1")
//     // let input2 = document.getElementById("input2")
//     // let input3 = document.getElementById("input3")
//     // let input4 = document.getElementById("input4")
//     // let input5 = document.getElementById("input5")
//     // let input6 = document.getElementById("input6")
//     // let input7 = document.getElementById("input7")
//     // let input8 = document.getElementById("input8")

//     // if (input1.value.length == 0){input1.value = "00";}
//     // if (input2.value.length == 0){input2.value = "00";}
//     // if (input3.value.length == 0){input3.value = "00";}
//     // if (input4.value.length == 0){input4.value = "00";}
//     // if (input5.value.length == 0){input5.value = "00";}
//     // if (input6.value.length == 0){input6.value = "00";}
//     // if (input7.value.length == 0){input7.value = "00";}
//     // if (input8.value.length == 0){input8.value = "00";}

//     // validating numbers
//     // let input221 = document.getElementById("input1").value
//     // if ( isNaN(input221)) {alert ("Must be a number"); }
    


//     // Cash at hand
//     let input11 = document.getElementById("input11")
//     let input12 = document.getElementById("input12")
//     let input13 = document.getElementById("input13")
//     let input14 = document.getElementById("input14")
//     let input15 = document.getElementById("input15")
//     let input16 = document.getElementById("input16")
//     let input17 = document.getElementById("input17")
//     let input18 = document.getElementById("input18")
//     let input19 = document.getElementById("input19")
//     let input20 = document.getElementById("input20")
//     let input21 = document.getElementById("input21")
//     let input22 = document.getElementById("input22")

//     if (input11.value.length == 0){input11.value = "00";}
//     if (input12.value.length == 0){input12.value = "00";}
//     if (input13.value.length == 0){input13.value = "00";}
//     if (input14.value.length == 0){input14.value = "00";}
//     if (input15.value.length == 0){input15.value = "00";}
//     if (input16.value.length == 0){input16.value = "00";}
//     if (input17.value.length == 0){input17.value = "00";}
//     if (input18.value.length == 0){input18.value = "00";}
//     if (input19.value.length == 0){input19.value = "00";}
//     if (input20.value.length == 0){input20.value = "00";}
//     if (input21.value.length == 0){input21.value = "00";}
//     if (input22.value.length == 0){input22.value = "00";}
// }




// function find_terminal_total ()
// {

// let arr = document.getElementsByClassName("terminal_inputs");
//     let total=0;
//     total_input = document.getElementById("terminal-total");
//     for(let i=0;i<arr.length;i++)
//     {
//         if(parseInt(arr[i].value))
//             total += parseInt(arr[i].value);
//     }
//     total_input.value = total.toLocaleString();
// }

// function findTotal ()
// {
    
// let arr = document.getElementsByClassName("agency_form_input_cash")
//     let total=0;
//     total_input = document.getElementById("total_input");
//     for(let i=0;i<arr.length;i++)
//     {
//         if(parseInt(arr[i].value))
//             total += parseInt(arr[i].value);
//     }
//     total_input.value = total.toLocaleString();
// }


// function find_grand_total ()
// {

//     let agency_sub_total = document.getElementById("total_input").value.replace(/\,/g,'');
//     let terminal_sub_total = document.getElementById("terminal-total").value.replace(/\,/g,'');
//     console.log(agency_sub_total);
//     console.log(terminal_sub_total);

//     let total_input = document.getElementById("todays_total_input");
//     let total,total2;
//     // total = agency_sub_total + terminal_sub_total;
//     total = parseInt(agency_sub_total) + parseInt(terminal_sub_total);
//     total2 = total.toLocaleString()
//     total_input.value = total2;

//     console.log(total);
    
// }






