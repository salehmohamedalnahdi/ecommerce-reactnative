

onload=async()=>{
  
  const urlParams = new URLSearchParams(window.location.search);
  const total = urlParams.get('total');
 document.getElementById('totalPayment').innerHTML=`Total Of Amount: ${total}$`
}

let handleSubmit=async()=>{
   const result=await response.json();
   console.log(result);
   window.location.href = "home.html" 
}
   
   const submit=document.getElementById('submit')
   submit.addEventListener("click",(event)=>{
     let shipmentAddress=document.getElementById("shipmentAddress").value
     let shipmentPhone=document.getElementById("shipmentPhone").value
     let securityCode=document.getElementById("securityCode").value
     let cardNumber=document.getElementById("cardNumber").value
     let expire=document.getElementById("expire").value
     if(!shipmentAddress || !shipmentPhone || !cardNumber || !securityCode ||!expire)
      {
        return alert("All Fielids Are Required Minimize Or Close Program And Try Again")
      }  
     handleSubmit()
     event.preventDefault();
   })