


 var count1=0; 
 var count2=0;
var hello1;
var hello2;
var myRainbow =[];
var yourRainbow=[];
var mydiv;
var mycolor;
var yourcolor;






function addcolors1(color){ 
    console.log(color);
    myRainbow.push(color)
    console.log(myRainbow);
    document.getElementById('div1').innerHTML="Colors:"+myRainbow;
    document.getElementById('div1').style.color='white';
    document.getElementById('div1').style.fontSize='30px';
}

function addcolors2(color){ 
    console.log(color);
    yourRainbow.push(color)
    console.log(yourRainbow);
    document.getElementById('div2').innerHTML="Colors:"+yourRainbow;
    document.getElementById('div2').style.color='white';
    document.getElementById('div2').style.fontSize='30px';
}

function startRainbow(id){
    
    console.log(id)  
    if(id=='start1'){
        if(myRainbow.length==0){
            alert("Please choose colors to start the rainbow ")
            id==null;
        }
        else{
            hello1= setInterval(start1,1000);
        } 
    
    }
    else if(id=='start2'){
        if(yourRainbow.length==0){
            alert("Please choose colors to start the rainbow");
            id==null;
        }
        else{
            hello2= setInterval(start2,1000)
        } 
      
    }
}

function start1(){
    
    var s = document.getElementById('div1').style;
  
        mycolor=myRainbow[count1];

    if(mycolor=='violot'){
        s.backgroundColor='violot';
    }
    else if(mycolor=='indigo'){
        s.backgroundColor='indigo'
    }
    else if(mycolor=='blue'){
        s.backgroundColor='blue'
    }
    else if(mycolor=='yellow'){
        s.backgroundColor='yellow'
    }
    else if(mycolor=='orange'){
        s.backgroundColor='orange'
    }
    else if(mycolor=='red'){
        s.backgroundColor='red'
    }
    else if(mycolor=='green'){
        s.backgroundColor='green'
        
    }
    console.log("legth:"+myRainbow.length)
    console.log("count:"+count1)

    if(myRainbow.length==count1){
        count1=0;
    }
    else{
        count1=count1+1;
    }
    
    console.log(count1)
   
}

function start2(){
    
    
    var s = document.getElementById('div2').style;
  


 yourcolor=yourRainbow[count2];



    if(yourcolor=='violot'){
        s.backgroundColor='violot'
    }
    else if(yourcolor=='indigo'){
        s.backgroundColor='indigo'
    }
    else if(yourcolor=='blue'){
        s.backgroundColor='blue'
    }
    else if(yourcolor=='yellow'){
        s.backgroundColor='yellow'
    }
    else if(yourcolor=='orange'){
        s.backgroundColor='orange'
    }
    else if(yourcolor=='red'){
        s.backgroundColor='red'
    }
    else if(yourcolor=='green'){
        s.backgroundColor='green'
        
    }
    
    console.log("count:"+count2)

    if(yourRainbow.length==count2){
        count2=0;
    }
    else{
        count2=count2+1;
    }
    
    console.log(count2)
   
}

function stopRainbow1(){

    clearInterval(hello1);
    console.log("stoped")
    document.getElementById('div1').style.backgroundColor='powderblue'
    myRainbow="";
    document.getElementById('div1').innerHTML=myRainbow;
    }

    function stopRainbow2(){

        clearInterval(hello2);
        console.log("stoped")
        document.getElementById('div2').style.backgroundColor='powderblue'
        yourRainbow="";
        document.getElementById('div2').innerHTML=yourRainbow;
        }
    

// class Rainbow{
  
//     constructor(){
//         var myRainbow = new Rainbow(['red', 'green', 'yellow', 'purple']); 
//     };
    
// }





	
