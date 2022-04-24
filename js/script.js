var menuButton;
var navButtons;
var viewportWidth;

var widthMobilePC = 992;  //display width beetwen PC and Mobile

// function is executed when document is loaded
$(document).ready(() =>{
    //console.log("hello world")    
    menuButton = $("#menuButton");
    navButtons = $(".navButtons");
    menuButton.one("click",hideMenu);
    viewportWidth = window.innerWidth;
    setNav();
});

$(window).resize(() =>{    
    viewportWidth = window.innerWidth;    
    //console.log("resize, viewport width: " + viewportWidth);
    setNav();
}); 

function showMenu(){
    //console.log("showMenu");
    menuButton.one("click",hideMenu);
    navButtons.css("display","block");    
}

function hideMenu(){
    //console.log("hideMenu");    
    menuButton.one("click",showMenu);
    navButtons.css("display","none");
}

// when people resize window on PC, handle navbar displaying
function setNav(){
    if(viewportWidth >= widthMobilePC){   
        // PC version
        navButtons.css("display","inline-block");  
        navButtons.unbind("click");       
    } else { 
        // mobile version
        hideMenu(); 
        navButtons.click(() =>{
            hideMenu();
            return true;
        });
    }
}
