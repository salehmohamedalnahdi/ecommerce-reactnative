

let create=async(name,desc,price,cat,image)=>{
    
    const response=await fetch('https://ecommerce-backend-wx8j.onrender.com/create', {
      method: 'POST',
      body: JSON.stringify({
        name:name,
        desc:desc,
        price:parseFloat(price),
        cat:cat,
        image:image,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
   const result=await response.json();
   console.log(result);
   window.location.href = "home.html" 
}
   
   const submit=document.getElementById('submit')
   submit.addEventListener("click",(event)=>{
     let name=document.getElementById("name").value
     let desc=document.getElementById("desc").value
     let price=document.getElementById("price").value
     let cat=document.getElementById("cat").value
     let image=document.getElementById("image").value
     if(!name || !desc || !price || !cat || !image)
      {
        return alert("All Fielids Are Required Minimize Or Close Program And Try Again")
      }  
     create(name,desc,price,cat,image)
     event.preventDefault();
   })