
// $(document).ready(function(){
//     $("h1").css("color","red");
// })


$("h1").css("color","red");

$("button").addClass("big-text");

setTimeout(function() {
    $("button").removeClass("big-text");    
}, 1000);

// $("button").text("Dont click me")

// $("button").html("<em>Click me</em>")

$("a").attr("href"); // to get the value of a herf (https://www.google.com)

$("a").attr("href","https://www.facebook.com/"); // to set the value of a herf (https://www.facebook.com)

// console.log($("a").attr("class")); // get all the classes of attribute a

// for (var i = 0 ; i<5 ; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "black";
//     });
// };

$("button").click(function(){                               // event listner shorten
    $("h1").css("color","purple");
});


$(document).keypress(function(event){                        // event listner shorten
    $("h1").text(event.key);
});


$("h1").on("mouseover", function(){                         // even shorter version of event listner
    $("button").css("background-color", "black");
    $("button").css("color", "white");
})


// $("h1").before("<button>New</button>").addClass("xyz");                     // adds html item
// $("h1").after("<button>New</button>").addClass("xyz");                      // adds html item
// $("h1").append("<button>New</button>").addClass("xyz");                     // adds html item
// $("h1").prepend("<button>New</button>").addClass("xyz");                    // adds html item
// $("button").remove();                                                       // removes all the buttons



// $("button").on("click" , function(){                                           // hide and show h1 onclick
//     $("h1").hide();

//     setTimeout(function() {
//         $("h1").show();
//     }, 1000);

// });


// $("button").on("click" , function(){                                           // hide and show h1 onclick toggole
//     $("h1").toggle();
// });


// $("button").on("click" , function(){                                           // fade in and out h1 onclick toggole
//     // $("h1").fadeOut();
//     // $("h1").fadeIn();
//     $("h1").fadeToggle();
// });


// $("button").on("click" , function(){                                           // slide in and out h1 onclick toggole
//     // $("h1").slideUp();
//     // $("h1").slideDown();
//     $("h1").slideToggle();
// });


// $("button").on("click" , function(){                                               // animate // can only add things with numeric values
//     $("h1").animate({ opacity: 0.5 }); 
// });


$("button").on("click" , function(){                                               // chain animation
    $("h1").slideUp().slideDown().animate({opacity : 0.2}); 
});