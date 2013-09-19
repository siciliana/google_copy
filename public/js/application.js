// $(document).ready(function() {
// 	$('.nav li').click(function(event){
//     event.preventDefault();

// 	$(".nav li").hover(function(){
//         $(this).css("background-color","rgb(115,169,157)");},
//         function(){$(this).css("background-color","white");});

//   });
// });
    // $('li').removeClass('active');
    // $(this).addClass('active'); 

    // var liID = $(this).children('li').attr('#id=1')   /* li is the parent, anchor is the child */ 
    
    // $('.tab').hide();
    // $(divId).show();

  // });



// var sPath=window.location.pathname;
//  var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
//   if(sPage == "home.html")
//    {
//      $("#menu a").removeClass("Active-Link"); // reset all links
//      $("#home").addClass("Active-Link"); // get current page link the class
//    }




//         $(document).ready(function(){
            
//             $("#homeLink").css("background-color","rgb(115,169,157)");
            
//             $(".nav").hover(function(){
//                 $(this).css("background-color","rgb(115,169,157)");},
//                 function(){$(this).css("background-color","grey");});
//             $(".circlegrey").hover(function(){
//                 $(this).css("background-color","rgb(115,169,157)");},
//                 function(){$(this).css("background-color","grey");});
            
//             var fadeTime = 750;
//             var itemInterval = 5000;
//             var numberOfItems = $('.rotating-item').length;
//             var numberOfCircles = $('.circlegrey').length;
//             var currentItem = 0;
            
//             console.log(numberOfCircles);
        
//             var infiniteLoop = setInterval(function(){
//                 $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
//                 currentItem == numberOfItems -1 ? currentItem = 0 : currentItem++;
//                 $('.rotating-item').eq(currentItem).fadeIn(fadeTime);}, itemInterval);
            
//             $("#circlegrey1").click(function(){
//                 clearInterval(infiniteLoop);
//                 $("#description").fadeIn(fadeTime);
//                 $("#socialLinks").fadeOut(fadeTime);
//                 $("#dob").fadeOut(fadeTime);
//             });
            
//             $("#circlegrey2").click(function(){
//                 clearInterval(infiniteLoop);
//                 $("#description").fadeOut(fadeTime);
//                 $("#socialLinks").fadeIn(fadeTime);
//                 $("#dob").fadeOut(fadeTime);
//             });
            
//             $("#circlegrey3").click(function(){
//                 clearInterval(infiniteLoop);
//                 $("#description").fadeOut(fadeTime);
//                 $("#socialLinks").fadeOut(fadeTime);
//                 $("#dob").fadeIn(fadeTime);
//             });
            
            
//         });
        
            
    
    