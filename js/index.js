    // mouse effect


    window.addEventListener("mousemove", function(event){
        // document.querySelector(".cursor").style.left = event.clientX -20 + "px";
        // document.querySelector(".cursor").style.stop = event.clientY -20 + "px";
        // document.querySelector(".cursor").style.left = event.offsetX -20 + "px";
        // document.querySelector(".cursor").style.stop = event.offsetY -20 + "px";
        document.querySelector(".cursor").style.left = event.pageX -20 + "px";
        document.querySelector(".cursor").style.stop = event.pageY -20 + "px";
        // document.querySelector(".cursor").style.left = event.screenX -20 + "px";
        // document.querySelector(".cursor").style.stop = event.screenY -20 + "px";
    
        // let x = event.clientX -20 + "px";
        // let y = event.clientY -20 + "px";
        
        // let x1 = event.offsetX -20 + "px";
        // let y1 = event.offsetY -20 + "px";
    
            
        let x2 = event.pageX -20 + "px";
        let y2 = event.pageY -20 + "px";
    
            
        // let x3 = event.screenX -20 + "px";
        // let y3 = event.screenY -20 + "px";
    
            
    
    
        // document.querySelector(".cursor").style.cssText = "left:" + x +
        // "; top: " + y;
    
    
        // document.querySelector(".cursor").style.cssText = "left:" + x1 +
        // "; top: " + y1;
    
        document.querySelector(".cursor").style.cssText = "left:" + x2 +
        "; top: " + y2;
    
        // document.querySelector(".cursor").style.cssText = "left:" + x3 +
        // "; top: " + y3;
    
        document.querySelectorAll(".mouseCont span").forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.querySelector(".cursor").classList.add("active");
            });
        });
     
        document.querySelectorAll(".mouseCont span").forEach(elem => {
            elem.addEventListener("mouseleave", () => {
                document.querySelector(".cursor").classList.remove("active");
            });
        });
    
    
        document.querySelectorAll(".style1").forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.querySelector(".cursor").classList.add("active");
            });
        });
     
        document.querySelectorAll(".style1").forEach(elem => {
            elem.addEventListener("mouseleave", () => {
                document.querySelector(".cursor").classList.remove("active");
            });
        });
    
    
        document.querySelectorAll("h1").forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.querySelector(".cursor").classList.add("active1");
            });
        });
     
        document.querySelectorAll("h1").forEach(elem => {
            elem.addEventListener("mouseleave", () => {
                document.querySelector(".cursor").classList.remove("active1");
            });
        });
    
        
        document.querySelectorAll(".title").forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.querySelector(".cursor").classList.add("active1");
            });
        });
     
        document.querySelectorAll(".title").forEach(elem => {
            elem.addEventListener("mouseleave", () => {
                document.querySelector(".cursor").classList.remove("active1");
            });
        });

        document.querySelectorAll(".logo").forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.querySelector(".cursor").classList.add("active2");
            });
        });
     
        document.querySelectorAll(".logo").forEach(elem => {
            elem.addEventListener("mouseleave", () => {
                document.querySelector(".cursor").classList.remove("active2");
            });
        });
    
        document.querySelectorAll(".h_menu").forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.querySelector(".cursor").classList.add("active2");
            });
        });
     
        document.querySelectorAll(".h_menu").forEach(elem => {
            elem.addEventListener("mouseleave", () => {
                document.querySelector(".cursor").classList.remove("active2");
            });
        });

   
        document.querySelectorAll("h3").forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.querySelector(".cursor").classList.add("active");
            });
        });
     
        document.querySelectorAll("h3").forEach(elem => {
            elem.addEventListener("mouseleave", () => {
                document.querySelector(".cursor").classList.remove("active");
            });
        });
    
        document.querySelectorAll(".style2").forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.querySelector(".cursor").classList.add("active3");
            });
        });
     
        document.querySelectorAll(".style2").forEach(elem => {
            elem.addEventListener("mouseleave", () => {
                document.querySelector(".cursor").classList.remove("active3");
            });
        });
    
        document.querySelectorAll(".style3").forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.querySelector(".cursor").classList.add("active4");
            });
        });
    
        document.querySelectorAll(".style3").forEach(elem => {
            elem.addEventListener("mouseleave", () => {
                document.querySelector(".cursor").classList.remove("active4");
            });
        });
     
        document.querySelectorAll(".style4").forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.querySelector(".cursor").classList.add("active5");
            });
        });
    
        document.querySelectorAll(".style4").forEach(elem => {
            elem.addEventListener("mouseleave", () => {
                document.querySelector(".cursor").classList.remove("active5");
            });
        });
    
        document.querySelectorAll(".style5").forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.querySelector(".cursor").classList.add("active6");
            });
        });
    
        document.querySelectorAll(".style5").forEach(elem => {
            elem.addEventListener("mouseleave", () => {
                document.querySelector(".cursor").classList.remove("active6");
            });
        });
    
        document.querySelectorAll(".style6").forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.querySelector(".cursor").classList.add("active7");
            });
        });
    
        document.querySelectorAll(".style6").forEach(elem => {
            elem.addEventListener("mouseleave", () => {
                document.querySelector(".cursor").classList.remove("active7");
            });
        });
    
        document.querySelectorAll(".style7").forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.querySelector(".cursor").classList.add("active8");
            });
        });
    
        document.querySelectorAll(".style7").forEach(elem => {
            elem.addEventListener("mouseleave", () => {
                document.querySelector(".cursor").classList.remove("active8");
            });
        });
    
        document.querySelectorAll(".style8").forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.querySelector(".cursor").classList.add("active9");
            });
        });
    
        document.querySelectorAll(".style8").forEach(elem => {
            elem.addEventListener("mouseleave", () => {
                document.querySelector(".cursor").classList.remove("active9");
            });
        });
    
        document.querySelectorAll(".style9").forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.querySelector(".cursor").classList.add("active10");
            });
        });
    
        document.querySelectorAll(".style9").forEach(elem => {
            elem.addEventListener("mouseleave", () => {
                document.querySelector(".cursor").classList.remove("active10");
            });
        });

        document.querySelectorAll(".chart").forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.querySelector(".cursor").classList.add("active11");
            });
        });
     
        document.querySelectorAll(".chart").forEach(elem => {
            elem.addEventListener("mouseleave", () => {
                document.querySelector(".cursor").classList.remove("active11");
            });
        });

        document.querySelectorAll(".icon").forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.querySelector(".cursor").classList.add("active");
            });
        });
     
        document.querySelectorAll(".icon").forEach(elem => {
            elem.addEventListener("mouseleave", () => {
                document.querySelector(".cursor").classList.remove("active");
            });
        });

    
    })

    //상단 메뉴 고정

 var $header = $('header');
 var $services = $('.containers');
 var $test2 = $('.container6');

 var $about = $('.container2');
 var $port1 = $('.set3');
 var $port2 = $('.set31');
 var $port3 = $('.set32');
 var $port4 = $('.set33');
 var $port5 = $('.set34');
 var $design1 = $('.set4');
 var $logo = $('.set45');
 var $vision = $('.set5');
 var $contact = $('.set6');
 var $last = $('.set7');

 $(window).scroll(function(){
    if($(this).scrollTop() > 0){
        $header.addClass('sticky');
    }else{
        $header.removeClass('sticky');
    }
    // skill-chart effect
    var $serviceThreshold = $services.offset().top -500;
    var $serviceExecuted = false;

    var $aboutThreshold = $about.offset().top - 500;
    var $aboutExecuted = false;

    var $port1Threshold = $port1.offset().top - 500;
    var $port1Executed = false;

    var $port2Threshold = $port2.offset().top - 500;
    var $port2Executed = false;

    var $port3Threshold = $port3.offset().top - 500;
    var $port3Executed = false;

    var $port4Threshold = $port4.offset().top - 500;
    var $port4Executed = false;

    var $port5Threshold = $port5.offset().top - 500;
    var $port5Executed = false;

    var $design1Threshold = $design1.offset().top - 500;
    var $design1Executed = false;

    var $logoThreshold = $logo.offset().top - 500;
    var $logoExecuted = false;

    var $visionThreshold = $vision.offset().top - 500;
    var $visionExecuted = false;

    var $contactThreshold = $contact.offset().top - 500;
    var $contactExecuted = false;

    var $lastThreshold = $last.offset().top - 500;
    var $lastExecuted = false;

    if(!$serviceExecuted){

        if($(this).scrollTop() > $serviceThreshold){
            $services.addClass('modified');
            $serviceExecuted = true;
        }
    }

    if(!$aboutExecuted){

       if($(this).scrollTop() > $aboutThreshold){
            $about.addClass('modified2');
            $aboutExecuted = true;
        }
    }

    if(!$port1Executed){

        if($(this).scrollTop() > $port1Threshold){
             $port1.addClass('modified3');
             $port1Executed = true;
         }
     }

     if(!$port2Executed){

        if($(this).scrollTop() > $port2Threshold){
             $port2.addClass('modified4');
             $port2Executed = true;
         }
     }

     if(!$port3Executed){

        if($(this).scrollTop() > $port3Threshold){
             $port3.addClass('modified5');
             $port3Executed = true;
         }
     }

     if(!$port4Executed){

        if($(this).scrollTop() > $port4Threshold){
             $port4.addClass('modified6');
             $port4Executed = true;
         }
     }

     if(!$port5Executed){

        if($(this).scrollTop() > $port5Threshold){
             $port5.addClass('modified7');
             $port5Executed = true;
         }
     }

     if(!$design1Executed){

        if($(this).scrollTop() > $design1Threshold){
             $design1.addClass('modified8');
             $design1Executed = true;
         }
     }

     if(!$logoExecuted){

        if($(this).scrollTop() > $logoThreshold){
             $logo.addClass('modified9');
             $logoExecuted = true;
         }
     }

     if(!$visionExecuted){

        if($(this).scrollTop() > $visionThreshold){
             $vision.addClass('modified10');
             $visionExecuted = true;
         }
     }

     if(!$contactExecuted){

        if($(this).scrollTop() > $contactThreshold){
             $contact.addClass('modified11');
             $contactExecuted = true;
         }
     }

     if(!$lastExecuted){

        if($(this).scrollTop() > $lastThreshold){
             $last.addClass('modified12');
             $lastExecuted = true;
         }
     }
 // else{
    //     $services.removeClass('modified');
    // }
    
});

    
     // typing-text
    
    const content = "항상 높은 곳을 향해 비상하고 싶은 강정임 입니다.";
    const text = document.querySelector(".cont1");
    let i = 0;
    
    setInterval(typing, 200);
    
    
    function typing(){
        if(i <= content.length) {
            let txt = content.charAt(i); 
            text.innerHTML += txt;
            i++;
        }
    }


    // skill-chart 

    const chart1 = document.querySelector(".doughnut1");
    const chart2 = document.querySelector(".doughnut2");
    const chart3 = document.querySelector(".doughnut3");
    const chart4 = document.querySelector(".doughnut4");
    const chart5 = document.querySelector(".doughnut5");
    const chart6 = document.querySelector(".doughnut6");

    const data1 = document.querySelector(".doughnut1 > span").getAttribute("data");

    const data2 = document.querySelector(".doughnut2 > span").getAttribute("data");

    const data3 = document.querySelector(".doughnut3 > span").getAttribute("data");

    const data4 = document.querySelector(".doughnut4 > span").getAttribute("data");

    const data5 = document.querySelector(".doughnut5 > span").getAttribute("data");

    const data6 = document.querySelector(".doughnut6 > span").getAttribute("data");

    const colorbg = (i, classname, color) => { 
     classname.style.background = "conic-gradient(" + color + " 0%" + i +"%, #dedede " + i + "% 100%)";
}  

const makeChart = (percent, classname, color) => {
    let i = 1;
    let chartbg = setInterval(function(){
        if (i < percent) {
            colorbg(i, classname, color);
            i++;
            classname.firstChild.innerText = i + "%";
        } else {
            clearInterval(chartbg);
        }
    },90);
}

makeChart(data1,chart1, "#272727");
makeChart(data2,chart2, "#272727");
makeChart(data3,chart3, "#272727");
makeChart(data4,chart4, "#272727");
makeChart(data5,chart5, "#272727");
makeChart(data6,chart6, "#272727");



// loading 로딩화면

// $(window).load(function(){
//     $('.loading-wrapper').delay('30000').fadeOut();
// });

// var myVar;

// function myFunction() {
//   myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("wrap").style.display = "block";
// }

function myF(){
    setTimeout(function(){
  document.getElementById('wrap').style.display="block";
  document.getElementById('loader').style.display="none";
      },3000);
 }

 
 //버튼 클릭
 document.querySelectorAll(".paraNav ul li a").forEach( li => {
    li.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


  window.addEventListener("scroll", function(){
        // let scrollTop = window.pageYOffset;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY; 

    if( scrollTop >= document.getElementById("section1").offsetTop -2 ){
        document.querySelectorAll(".paraNav ul li").forEach(li => {
            li.classList.remove("reactive");
        });
        document.querySelector(".paraNav ul li:nth-child(1)").classList.add("reactive");
    }

    if( scrollTop >= document.getElementById("section2").offsetTop -2 ){
        document.querySelectorAll(".paraNav ul li").forEach(li => {
            li.classList.remove("reactive");
        });
        document.querySelector(".paraNav ul li:nth-child(2)").classList.add("reactive");
    }

    if( scrollTop >= document.getElementById("section3").offsetTop -2 ){
        document.querySelectorAll(".paraNav ul li").forEach(li => {
            li.classList.remove("reactive");
        });
        document.querySelector(".paraNav ul li:nth-child(3)").classList.add("reactive");
    }

    if( scrollTop >= document.getElementById("section4").offsetTop -2 ){
        document.querySelectorAll(".paraNav ul li").forEach(li => {
            li.classList.remove("reactive");
        });
        document.querySelector(".paraNav ul li:nth-child(4)").classList.add("reactive");
    }

    if( scrollTop >= document.getElementById("section5").offsetTop -2 ){
        document.querySelectorAll(".paraNav ul li").forEach(li => {
            li.classList.remove("reactive");
        });
        document.querySelector(".paraNav ul li:nth-child(5)").classList.add("reactive");
    }

    if( scrollTop >= document.getElementById("section6").offsetTop -2 ){
        document.querySelectorAll(".paraNav ul li").forEach(li => {
            li.classList.remove("reactive");
        });
        document.querySelector(".paraNav ul li:nth-child(6)").classList.add("reactive");
    }



    document.querySelector(".paraScroll span").innerText = parseInt(scrollTop);

    document.querySelector(".offset1").innerText = parseInt(document.getElementById("section1").offsetTop) + "px";
    document.querySelector(".offset2").innerText = parseInt(document.getElementById("section2").offsetTop) + "px";
    document.querySelector(".offset3").innerText = parseInt(document.getElementById("section3").offsetTop) + "px";
    document.querySelector(".offset4").innerText = parseInt(document.getElementById("section4").offsetTop) + "px";
    document.querySelector(".offset5").innerText = parseInt(document.getElementById("section5").offsetTop) + "px";
    document.querySelector(".offset6").innerText = parseInt(document.getElementById("section6").offsetTop) + "px";
    // document.querySelector(".offset7").innerText = parseInt(document.getElementById("section7").offsetTop) + "px";
    // document.querySelector(".offset8").innerText = parseInt(document.getElementById("section8").offsetTop) + "px";
    // document.querySelector(".offset9").innerText = parseInt(document.getElementById("section9").offsetTop) + "px";
        
    });


    // $(".toggle").click(function(){
    //     $(".h_menu").slideToggle();
    // }); 

    const toggleBtn = document.querySelector('.toggle');
    const menu = document.querySelector('.h_menu');
    const icons = document.querySelector('.navbar__icons');

    toggleBtn.addEventListener('click', ()=> {
        menu.classList.toggle('res');
        icons.classList.toggle('res');
    });


    $('.hamburger-button').click(function(ev){

        ev.preventDefault();
        $(this).toggleClass('rea');
    });



    
    // light-box

    const lightbox = document.createElement('div')
    lightbox.id = 'lightbox'
    document.body.appendChild(lightbox)

    const images = document.querySelectorAll('img')
    images.forEach(image => {
        image.addEventListener('click', e => {
            lightbox.classList.add('light')
            const img = document.createElement('img')
            img.src = image.src
            while (lightbox.firstChild){
                lightbox.removeChild(lightbox.firstChild)
            }
            lightbox.appendChild(img)
        })
    })

    lightbox.addEventListener('click', e => {
        if(e.target !==e.currentTarget) return
        lightbox.classList.remove('light')
    })

