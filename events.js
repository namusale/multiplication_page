// Function for updating practice Area with button click

function mbtnsClick(wow){
    //alert("we are good");
    const wow1 = document.getElementById("pZone");
    wow1.innerHTML = multiply(wow);
    
}


// Function to populate the practice area with correct times tabl
// Function to populate the practice area with correct times table

function multiply(numb){
    text ="";
    for(i = 1; i < 13; i++){
        //text += ` ${i}  x ${numb} =  <input type="text" id="myText" style="width: 1%;"  style=><br> `; 
        text += `<p class="practice_multiples" id = "${i}X${numb}a">    ${i}  X  ${numb}  = 
         <input type="text" id="${i}X${numb}" style="width: 25%;" oninput= "tableCheck(id)"> </p>`     
    
    }
    return text;
}

function tableCheck(wow){
    var test = document.getElementById(wow).value;
    test = Number(test);
    var entries = wow.split('X');
    var entry1 = Number(entries[0]);
    var entry2 = Number(entries[1]);
    var product = entry1 * entry2;

     if(test == product){
        document.getElementById("checking").innerHTML = 'Correct. Well Done!!';
        //alert("we are good")
        }
    else{
      document.getElementById("checking").innerHTML = "Try Again. You can do it!!";
    }

   // document.getElementById("checking").innerHTML = product;
}

var count = 0;
var multiple = 0;
var checkCount = 1;

var innerMultiple = 0; 


function counting(){
    if (count < 11){
        count+=1;
    }
    else{

        count = 0;
    } 
    my_list= [10,5,12,6,3,1,2,4,8,11,9,7];
    var minorMultipleInput = innerMultiple = my_list[count];
    document.getElementById("minorMultiple").innerHTML = minorMultipleInput;
    document.getElementById("c_answer").innerHTML = `<input type="text" id="${innerMultiple}X${multiple}" style="width: 10%;" oninput= "answerCheck(id)"></input>`
    
}
 
function checkTable(numb){
    multiple = numb
    my_list= [10,5,12,6,3,1,2,4,8,11,9,7];
    
   
    document.getElementById("multiple").innerHTML = numb;
    document.getElementById("minorMultiple").innerHTML = 1;
    
    setInterval(counting,6000);

}

    

function countingNumbers(multi){
    document.getElementById("Xtable").innerHTML = multi;
    const countingElements = document.querySelectorAll('.countingInd');
    for (let i = 0; i < countingElements.length; i++) {
    const element = countingElements[i];
    //alert(Number(element.innerHTML)* Number(multi));
    element.innerHTML = ` ${(i + 1) * multi} `;
    
    
  
    }
    
}

function counter(){
    if(checkCount === 3){
        checkCount = 1;
    }
}


function checkCounting(multiple){
    checkCount +=1;
    const check = document.querySelectorAll('.countingCheck');
    for (let i = 0;i < check.length;i++){
        var element = check[i];

        //element.innerHTML = ` ${(i + 1) * Number(multiple)} `
        //element.innerHTML =``
        //alert(element.innerHTML);
        element.innerHTML = `<input type="text" id="${i}X${(multiple)}" style="width: 25%;" oninput = "countVerify(id)"> `
        
    }
}
function testing(){
    alert("well done")
}
function countVerify(iddy){ 
    var iddy = iddy.split('X');
    var iddy1 = Number(iddy[0]);
    var iddy2 = Number(iddy[1]);
    var ourInput = document.querySelectorAll(".countingCheck")[0].innerHTML;
    //var ourInput = document.querySelectorAll('check1')[iddy1].value;
    alert(ourInput);
}

function populateCounting(multiple = Number(2)){
    text1="";
    for (i=0;i>13;i++){
        //text1 += `<span id = "countingCheck + ${i+1}">wow<input type="text" id="${i}X${Number(multiple)}" style="width: 25%;" oninput = "countVerify(id)"> </span>`
        text1 += "testing";
    }
    return text1;
}
//document.getElementById("interactiveCounting").innerHTML = populateCounting(2);

//alert(populateCounting(2));



// Function to populate the practice area with correct times table

function testingWork(numb){
    const check = document.querySelectorAll('.countingCheck');
    text ="";
    for(i = 1; i < 13; i++){
       
            //element.innerHTML = ` ${(i + 1) * Number(multiple)} `
        
        //text += ` ${i}  x ${numb} =  <input type="text" id="myText" style="width: 1%;"  style=><br> `; 
        text += `<p class="practice_multiples" id = "${i}X${numb}a">   
         <input type="text" id="${i}X${numb}" style="width: 80%;" size="2" oninput= "countCheck(id)"> </p>`     
    
}
    //return text;00=
    document.getElementById("countYY").innerHTML = numb;
    document.getElementById("interactiveCounting").innerHTML = text;
} 



function countingCheck(numb){
    var iddy = numb.split('X');
    var iddy1 = Number(iddy[0]);
    var iddy2 = Number(iddy[1]);

}


function countCheck(wow){
    var test = document.getElementById(wow).value;
    //test.classList.add("timed");
    //alert(test);
    test = Number(test);
    var entries = wow.split('X');
    var entry1 = Number(entries[0]);
    var entry2 = Number(entries[1]);
    var product = entry1 * entry2;

    const element = document.getElementById("countVerify");
     if(test == product){
        element.innerHTML = 'Correct. Well Done!!';
        element.style.color = "green";
        //document.getElementById("countVerify").style.color = "#ff0000";
        
        }
    else{
      element.innerHTML = "Try Again. You can do it!!";
      element.style.color ="red";
    }

   // document.getElementById("checking").innerHTML = product;
}


function answerCheck(iddy){
    var iddy = iddy.split('X');
    var iddy1 = Number(iddy[0]);
    var iddy2 = Number(iddy[1]);

    return iddy1 * iddy2;

}

function answerCheck(wow){
    var test = document.getElementById(wow).value;
    // alert(test);
    test = Number(test);
    var entries = wow.split('X');
    var entry1 = Number(entries[0]);
    var entry2 = Number(entries[1]);
    var product = entry1 * entry2;

    const element = document.getElementById("timedAnswer");
     if(test == product){
        element.innerHTML = 'Correct. Well Done!!';
        element.style.color = "green";
        
        }
    else{
        element.innerHTML = "Try Again. You can do it!!";
        element.style.color ="red";
    }

   // document.getElementById("checking").innerHTML = product;
}