clickBut=()=>  // function arrow When press on Calculator button,  executed the code 
{ //start function arrow
    /**
     * During calling up the elements
     * And naming the elements
     */
    let inputtext = document.getElementById("input_text"); //call up input id="input_text" and get value  
    let inputType = document.getElementById("input_type");// call up  input id="input_type" and get value 
    let dropService = document.getElementById("drop_service");// call up  select id="drop_service" and get value 
    
   /**
    * During Enter the value in a variables
    * And naming the variables
    */
    let Money= inputtext.value; //Enter the value in a variable Money
    let People= inputType.value;//Enter the value in a variable People
    let Service= dropService.value;//Enter the value in a variable Service
/**
 * during Calculating the final value
 */
    let total=Service/100*Money/People; //Calculating the final value
/**
 * during Create Element SPAN and 
 * append element inside other element
 */
    let spanNum = document.createElement("SPAN"); //Create Element SPAN on spanNum
    spanNum.innerHTML = total; //set  total inside spanNum 
    document.getElementById("num_").appendChild(spanNum); // set spanNum inside num_ or /" <h2 id="num_"><sup>$</sup>  </h2>"/
}   //End function arrow
