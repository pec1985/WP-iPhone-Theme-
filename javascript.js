var start = function(){
	document.ontouchmove = function(e){ e.preventDefault(); }
	setTimeout(function(){window.scrollTo(0, 1);}, 100);
    
    var tabs = document.getElementsByClassName('tab');
    tabCss = '';
    tabCss=tabCss+'width:'+((window.innerWidth/tabs.length)-tabs.length)+'px;';
    var i=0;
    while(i<tabs.length){
        if (i==tabs.length-1){tabCss=tabCss+'margin-right:0px;';}
        var eee = document.getElementsByClassName('tab')[i];
        eee.style.cssText=tabCss;
        i++;
    }

	var x = 0;
	var divName = 0;
	var navigation = document.getElementById('navigation');
	var header = document.getElementById('otro');
	var next = document.getElementById('next');
	var back = document.getElementById('back');
    if(window.navigator.standalone){
        navigation.style.maxHeight='372px';
    } else {
        navigation.style.maxHeight='328px';
    }
	var newContent;
	var http_request = false;
	myScroll = new iScroll('scroll');
	
	var makeRequest = function(e,url) {
     	http_request = false;
      	http_request = new XMLHttpRequest();
      	http_request.open('GET', url, true);
      	http_request.send(null);
 	  	http_request.onreadystatechange = function() { 
       		if (http_request.readyState == 4) {
                newContent.innerHTML = http_request.responseText;
                newContent.height=newContent.scrollHeight+'px';
                myScroll2 = new iScroll(newContent);
                var moveRight = '';
                moveRight=moveRight+'width:'+(navigation.scrollWidth)+'px;';
                moveRight=moveRight+'-webkit-transform: translate(-'+(navigation.scrollWidth - 320)+'px, 0px);';
                moveRight=moveRight+'-webkit-transition-duration: 0.35s, 0.35s;';
                moveRight=moveRight+'-webkit-transition-property: -webkit-transform, opacity;';
                moveRight=moveRight+'-webkit-transition-timing-function: ease-in-out, linear;';
                moveRight=moveRight+'opacity: 1;';
                moveRight=moveRight+'visibility: visible';
                navigation.style.cssText= moveRight;
                document.getElementById('back').style.visibility='visible';
                if(e.target == '[object HTMLDivElement]'){
                    e.target.parentNode.style.backgroundColor='#fff';
                }
                if(e.target == '[object HTMLLiElement]'){
                    e.target.style.backgroundColor='#fff';
                }
                if(window.navigator.standalone){
                    navigation.style.maxHeight='372px';
                } else {
                    navigation.style.maxHeight='328px';
                }

	        };
		};
	};
	nextPage = function(e,writeSomething){
    
        if(e.target == '[object HTMLDivElement]'){
            e.target.parentNode.style.backgroundColor='#0160e7';
        }
        if(e.target == '[object HTMLLiElement]'){
            e.target.style.backgroundColor='#0160e7';
        }
        
    
        console.log(e.target);
        var navWidth = navigation.innerWidth;
		divName++;
		navigation.style.width = navigation.scrollWidth + 320 +'px';
		newContent = document.createElement('div');
		newContent.setAttribute('class','content');
		newContent.setAttribute('name',divName);
		makeRequest(e,writeSomething);
		navigation.appendChild(newContent);
        x=x+320;

		
	};

	next.addEventListener('click',function(){
		nextPage();
	});

	back.addEventListener('click',function(){
		if(navigation.scrollWidth >= 321){
		x=x-320;
        back.style.cssText='-webkit-border-image:url(img/back_button.png) 0 5 0 16 repeat stretch';
        var moveLeft = '';
        moveLeft=moveLeft+'width:'+(x*2+640)+'px;';
        moveLeft=moveLeft+'-webkit-transform: translate(-'+x+'px, 0px);';
        moveLeft=moveLeft+'-webkit-transition-duration: 0.35s, 0.35s;';
        moveLeft=moveLeft+'-webkit-transition-property: -webkit-transform, opacity;';
        moveLeft=moveLeft+'-webkit-transition-timing-function: ease-in-out, linear;';
        moveLeft=moveLeft+'opacity: 1;';
        moveLeft=moveLeft+'visibility: visible;';
        
		navigation.style.cssText= moveLeft;
		var removeDiv = function(){
			var divArray=document.getElementsByName(divName)
       		var getDiv = divArray[divArray.length-1];
			navigation.removeChild(getDiv);
			navigation.style.width = (x*2+320)+'px';
			divName--;
			if(navigation.scrollWidth <= 321){back.style.visibility='hidden';}
		};
		setTimeout(removeDiv,350);
                        if(window.navigator.standalone){
                    navigation.style.maxHeight='372px';
                } else {
                    navigation.style.maxHeight='328px';
                }

		}
	});
};
