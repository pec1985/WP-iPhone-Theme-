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
	var $ = function(e){
		return document.getElementById(e);
	} 
	var windowHeight;
	if(window.navigator.standalone){
		windowHeight = window.innerHeight-44-44;
	} else {
        windowHeight = window.innerHeight+20-44;
    }
	
    $('tabbar').style.top=windowHeight+44+'px';
    $('navigation').style.height=windowHeight+'px';
    $('main').style.height=windowHeight+100+'px';
	var newContent;
	var http_request = false;
	myScroll1 = new iScroll('scroll1');
	myScroll2 = new iScroll('scroll2');
	
		document.getElementsByClassName = function(className)
		{
			var hasClassName = new RegExp("(?:^|\\s)" + className + "(?:$|\\s)");
			var allElements = document.getElementsByTagName("*");
			var results = [];

			var element;
			for (var i = 0; (element = allElements[i]) != null; i++) {
				var elementClass = element.className;
				if (elementClass && elementClass.indexOf(className) != -1 && hasClassName.test(elementClass))
					results.push(element);
			}

			return results;
		}
	
	
	var makeRequest = function(e,url) {
     	http_request = false;
      	http_request = new XMLHttpRequest();
      	http_request.open('GET', url, true);
      	http_request.send(null);
 	  	http_request.onreadystatechange = function() { 
       		if (http_request.readyState == 4) {
                newContent.innerHTML = http_request.responseText;
                newContent.height=newContent.scrollHeight+'px';
                myScrollContent = new iScroll(newContent);
                var moveRight = '';
                moveRight=moveRight+'width:'+($('navigation').scrollWidth)+'px;';
                moveRight=moveRight+'-webkit-transform: translate(-'+($('navigation').scrollWidth - 320)+'px, 0px);';
                moveRight=moveRight+'-webkit-transition-duration: 0.35s, 0.35s;';
                moveRight=moveRight+'-webkit-transition-property: -webkit-transform, opacity;';
                moveRight=moveRight+'-webkit-transition-timing-function: ease-in-out, linear;';
                moveRight=moveRight+'opacity: 1;';
                moveRight=moveRight+'visibility: visible';
                $('navigation').style.cssText= moveRight;
                $('back').style.visibility='visible';
		        if(e.target == '[object HTMLDivElement]'){
		            e.target.parentNode.removeAttribute('class','selected');
		        }
		        if(e.target == '[object HTMLLiElement]'){
		            e.target.removeAttribute('class','selected');
		        }
			    $('navigation').style.height=windowHeight+'px';
	        };
		};
	};
	nextPage = function(e,writeSomething){
        if(e.target == '[object HTMLDivElement]'){
            e.target.parentNode.setAttribute('class','selected');
        }
        if(e.target == '[object HTMLLiElement]'){
            e.target.setAttribute('class','selected');
        }
        
    
        var navWidth = $('navigation').innerWidth;
        x=x+320;
		$('navigation').style.width = $('navigation').scrollWidth + 320 +'px';
		newContent = document.createElement('div');
		newContent.setAttribute('class','content new');
		makeRequest(e,writeSomething);
		$('navigation').style.height=windowHeight+'px';
		$('navigation').appendChild(newContent);

		
	};

	next.addEventListener('click',function(){
		nextPage();
	});
	
	var moveLeftToLeft = function(e){
        var moveLeft = '';
        moveLeft=moveLeft+'width:'+(e+1000)+'px;';
        moveLeft=moveLeft+'-webkit-transform: translate(-'+e+'px, 0px);';
        moveLeft=moveLeft+'-webkit-transition-duration: 0.35s, 0.35s;';
        moveLeft=moveLeft+'-webkit-transition-property: -webkit-transform, opacity;';
        moveLeft=moveLeft+'-webkit-transition-timing-function: ease-in-out, linear;';
        moveLeft=moveLeft+'opacity: 1;';
        moveLeft=moveLeft+'visibility: visible;';
        
		$('navigation').style.cssText= moveLeft;
	}

	$('back').addEventListener('click',function(){
		if($('navigation').scrollWidth >= 321){
		x=x-320;
		moveLeftToLeft(x);
		var removeDiv = function(){	
			var divArray=document.getElementsByClassName('content new');
       		var getDiv = divArray[divArray.length-1];
			$('navigation').removeChild(getDiv);			
			$('navigation').style.width = (x+320)+'px';
			if($('navigation').scrollWidth <= 321){$('back').style.visibility='hidden';}
		};
		setTimeout(removeDiv,350);
	    $('navigation').style.height=windowHeight+'px';
		}
	});
	$('scroll2').style.display='none';
	changeTab = function(e,number){
		var i=0;
	    while(i<tabs.length){
	        var eee = document.getElementsByClassName('tab')[i];
	        if (eee.className == 'tab selected'){
				eee.setAttribute('class','tab');
			} 
			i++;
	    }
		while(document.getElementsByClassName('content new').length > 0){
			var divArray=document.getElementsByClassName('content new');
   			var getDiv = divArray[divArray.length-1];
			$('navigation').removeChild(getDiv);		
		}	
		x=0;
		moveLeftToLeft(0);
    	$('navigation').style.width = '0px';
	
    	if(e.target != '[object HTMLDivElement]'){
            e.target.parentNode.setAttribute('class','tab selected');
		} else {
			e.target.setAttribute('class','tab selected');
		}
		
		if(number == 1){
			$('scroll1').style.display='block';
			$('scroll2').style.display='none';
		}
		if(number == 2){
			$('scroll1').style.display='none';
			$('scroll2').style.display='block';
		}
	};
};
