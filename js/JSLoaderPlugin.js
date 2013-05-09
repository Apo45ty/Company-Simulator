function loadContent(path){
//alert(path);
$('#main').html("Loading Data");
      var jqxhrM = $.get(path,{ ajax:"main" },  function(xhr, status, errorCode) {
    	try{
         var data = xhr;
	 //alert(data);
	 console.log("success main");
	 $('#main').html(data);
 	//Handle all anchors within the main
	// $("#main a").click(function(e){
	//	 console.log($(this).attr('href'))
                 //e.preventDefault(); // cancel navigation
		 //loadContent($(this).attr('href')); // load all links within main with ajax
	//});

	}catch(err)
	{
	   console.log(err);
	}	
	  })
	  .error(function() { 
		console.log("error"); 
	   })
	  .complete(function() { 
	      console.log("complete"); 
	   });


$('#sidebar1').html("Loading Data");
  var jqxhrS = $.get(path,{ ajax:"side" },  function(xhr, status, errorCode) {
    	try{
         var data = xhr;
	 console.log("success side");
         //alert(data);
	 $('#sidebar1').html(data);
         //handle all anchors within the sidebar
	 $("#sidebar1 a").click(function(e){
                 location.hash = 'Ajax';// get the clicked link id
                 e.preventDefault(); // cancel navigation
		 console.log($(this).attr('href'))
		 loadContent($(this).attr('href'));
	});

	}catch(err)
	{
	   console.log(err);
	}	
	  })
	  .error(function(xhr, status, errorCode) { 
		console.log("error"+errorCode+"\nStatus:"+status); 
	   })
	  .complete(function() { 
	      console.log("complete"); 
	   });

}
function startLoad(path, loadPage){
     $("a").click(function(e){
                 location.hash = 'Ajax'; // get the clicked link id
                 e.preventDefault(); // cancel navigation
		 console.log($(this).attr('href'))
		 loadContent($(this).attr('href'));
     });
     if(loadPage)
        loadContent(path);

}
