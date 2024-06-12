

const HandleDelete=async(id)=>{
  const response= await fetch('https://ecommerce-backend-wx8j.onrender.com/delete/'+id, {
            method: 'DELETE',
          });
        const result= await response.json();
        console.log(result);
        window.location.href = "home.html"
        //window.location.reload()
}

const addToCart= async(id) => {;

  const response= await fetch('https://ecommerce-backend-wx8j.onrender.com/createprocart/'+id, {
      method: 'Post',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  const result= await response.json();
  console.log(result);
  //window.location.reload()
};

onload= async() => {
  
    const content=document.getElementById('content')

    const response = await fetch('https://ecommerce-backend-wx8j.onrender.com/products');
    const result = await response.json();
    
    result.forEach((item)=>{
      const image=item.image
      const container=
      `
         <div class="pro">
             <div class="img">
               ${image ? `<img src="${image}"
                   width="240"
                   height="240"
                   alt="no image"
                  /> ` :
                  `<img src="../../static/imgempty.png"
                     width="240"
                     height="240"
                     alt=""
                    /> `}
              </div>
              <div class="details">
                 <a  href='details.html?id=${item.id}'>
                   <p class="name">${item.name}</p>
                 </a>
                 <p class="cat">Categoery: ${item.cat} </p>
                 <div class="rowPro">
                    <p class="price">${item.price}$</p>
                    <button class="cart" onClick={addToCart(${item.id})}>
                      +<i class="fas fa-shopping-cart"></i>
                    </button>
                    <div class="delete">
                      <button class="delete-button" onClick={HandleDelete(${item.id})}>
                        <i class="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
               </div>
         </div>  
 
      `
        content.innerHTML+=container
    })
  };



