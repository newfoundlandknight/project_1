$(document).ready(function(){
    $("#burger").click(function(){// the toggle function using jQuery to listen to click events on the menu burger image and when triggered to toggle the dropdown
    $("#dropdown1").toggle();
});    
    $("#burger").hover(function(){// the toggle function using jQuery to listen to hover events on the menu burger image and when triggered to toggle the dropdown
    $("#dropdown1").toggle();


    
});

    $("#clicker_exmample").click(function(){// the toggle function using jQuery to listen to click events on the clicker_example and when triggered to write innerhtml

    //$("#dropdown1").toggle("slow");
    $("#template_h3").html("Somewhere in NS");
    $("#template_date").html("Date 2023-03-28");
    $("#template_dur").html("Duration 8 days");
    $("#template_h4").html("Summary:");
    $("#template_summary_details").html(" amet consectetur adipisicing elit. Non ratione, at delectus earum sapiente corrupti assumenda pariatur ipsa dolorum laborum ut minus voluptas rem. Odit ducimus consequatur et esse ipsa! here is:");

});



});



