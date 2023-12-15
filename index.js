
  var btn=document.getElementById("btn")
  var input=document.querySelector("#input");
 var st=document.getElementById("status")
  var regx= new RegExp('/^[a-z][A-Z]*/')
  input.addEventListener("input",()=>{
    console.log(input.value);
   
    if((input.value).match('/^[a-z][A-Z]*/')){
      input.style.border="1px solid green"
      st.innerHTML="Success"
      st.style.color="lightgreen"
    }

    else if(input.value==""){
      input.style.border="1px solid grey"
      st.innerHTML=""
     
    }
    else if((input.value).length<4 || (input.value).length<1 ){
      input.style.border="1px solid yellow"
      st.innerHTML="Warning"
      st.style.color="yellow"
    }
    else {
      input.style.border="1px solid red"  
      st.innerHTML="!Error"
      st.style.color="red"
        }
  })
  console.log(input.value)
