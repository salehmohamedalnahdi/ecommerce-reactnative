

const HandleDelete=async(id)=>{
    const response= await fetch('https://ecommerce-backend-wx8j.onrender.com/deleteprocart/'+id, {
              method: 'DELETE',
            });
          //window.location.href = "home.html"
          window.location.reload()
  }
  
  const handleQuantityChange =async ( quantity,id) => {
    if(!quantity || !id){
        return {Error: "id or quantity is not exsisted"}
    }
    const response= await fetch('https://ecommerce-backend-wx8j.onrender.com/updateprocart/'+id, {
      method: 'PATCH',
      body: JSON.stringify({
        qu: parseInt(quantity),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    window.location.reload()
   }
  
  onload= async() => {
    
      const containerProCart=document.getElementById('containerProCart')
      const rowCart=document.getElementById('rowCart')
  
      const response = await fetch('https://ecommerce-backend-wx8j.onrender.com/procarts');
      const result = await response.json();

      const calculateTotal = () => {
        let totalPrice = 0;
    
        result.forEach((item) => {
          const product = item.products[0];
          totalPrice += parseInt(product.price) * parseInt(item.qu);
        });
    
        return totalPrice;
         };

      rowCart.innerHTML=
       `
        <h4 >Total: ${calculateTotal()}$</h4>
        <a href="payment.html?total=${calculateTotal()}">
          <p class="linkPay">Pay Now</p>
        </a>
       `
      result.forEach((item)=>{
        const product=item.products[0]
        const container=
        `
          <div class="proCart">
          ${product.image ? `<img src="${product.image}"
            width="240"
            height="240"
            alt=""
           /> ` :
           `<img src="../../static/imgempty.png"
              width="240"
              height="240"
              alt=""
             /> `}
             <p class="">${product.name} </p>                         
             <p class="price">${product.price}$</p>
             <input
                 class="qu"
                 type="number"
                 value="${item.qu}"
                 onChange="handleQuantityChange((this.value), '${item.id}')"
             />
             <div class="delete">
                 <button class="delete-button" onClick="HandleDelete(${item.id})">
                      <i class="fas fa-trash"></i>
                 </button>
             </div>
          </div>
   
        `
          containerProCart.innerHTML+=container
      })
    };
  
  

  
  