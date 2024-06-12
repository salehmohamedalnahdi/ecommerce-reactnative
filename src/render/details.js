
  
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
  
  
  const HandleComment= async(id)=>{
   const inputComment = document.querySelector('.inputComment')
   const rate = document.querySelector('input[name="rating"]:checked')
if (!rate || !inputComment){
    return alert(" please enter rate and Type Comment")
   }
const response= await fetch('https://ecommerce-backend-wx8j.onrender.com/createinteraction/'+id, {
        method: 'POST',
        body: JSON.stringify({
          comment:inputComment.value,
          rate: parseInt(rate.value),
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const result= await response.json();
      console.log(result)
      window.location.reload()
  }

// start to handlerating
  let stars =  document.getElementsByClassName("star"); 
  function handleClick(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
  }
 
  function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
  }

  onload= async() => {
     const urlParams = new URLSearchParams(window.location.search);
     const id = urlParams.get('id');
      const containerInteractions=document.getElementById('interactions')
      const pro=document.getElementById('pro')
      const containerFormComment=document.getElementById('containerFormComment')
  
      const response = await fetch('https://ecommerce-backend-wx8j.onrender.com/product/'+id);
      const result = await response.json();

      const calculateStars = () => {
        let stars = 0;
        let num = 0;
        result[0].interactions.forEach((item) => {
          num += 1;
          const star = item.rate;
          stars += star;
        });
    
        const averageStars = stars / num;
        const starIcons = [];
    
        for (let i = 0; i < 5; i++) {
          if (i < averageStars) {
            starIcons.push(`<span class="rate">&#9733</span>`)
          } else {
            starIcons.push(`<span >&#9733</span>`)
          }
        }
        const starIconsJoin=starIcons.join('')
        return {starIconsJoin: starIconsJoin, num: num};
      };

      pro.innerHTML=
      `
         ${result[0].image ? ` <img src="${result[0].image}"
                       width="320"
                       height="320"
                       alt=""
                     /> ` :
                     `<img src="../../static/imgempty.png"
                       width="320"
                       height="320"
                       alt=""
                     /> `
            }
        <div class="details">
           <p class="name">${result[0].name}</p>
           <p class="cat">Categoery: ${result[0].cat}</p>
           <div class="rowPro">                 
             <p class="price">${result[0].price}$</p>
             <p >${calculateStars().starIconsJoin} <small>${calculateStars().num}Persons</small></p>
             <button class="cart" onClick={addToCart(${result[0].id})}>
              +<i class="fas fa-shopping-cart"></i>
             </button>                         
           </div>
           ${result[0].desc ? `<p class="desc">${result[0].desc} </p>`: "" }
        </div>
      `
      containerFormComment.innerHTML=
      `
        <div class='formComment'>
            <input
              id="inputComment"
              class='inputComment'
              type="text"
              placeholder="Type comment..."
            />
            <div class="inputRatingDiv">
              <div class="divStarInput">
               <input type="radio" name="rating" id="star1" class="starInput" value="1" />
               <label for="star1" class="star"  onMouseEnter={handleClick(1)} onClick={handleClick(1)}>&#9733;</label>

               <input type="radio" name="rating" id="star2" class="starInput" value="2" />
               <label for="star2" class="star"  onMouseEnter={handleClick(2)} onClick={handleClick(2)}>&#9733;</label>

               <input type="radio" name="rating" id="star3" class="starInput" value="3" />
               <label for="star3" class="star"  onMouseEnter={handleClick(3)} onClick={handleClick(3)}>&#9733;</label>

               <input type="radio" name="rating" id="star4" class="starInput" value="4" />
               <label for="star4" class="star"  onMouseEnter={handleClick(4)} onClick={handleClick(4)}>&#9733;</label 
               <input type="radio" name="rating" id="star5" class="starInput" value="5" />
               <label for="star5" class="star"  onMouseEnter={handleClick(5)} onClick={handleClick(5)}>&#9733;</label>
             </div>
             <button id='submit' class='submit' type="submit" onClick={HandleComment(${result[0].id})}>Submit</button>
           </div>
        </div>
      `
      
      result[0].interactions.forEach((item)=>{
      const createdAt = new Date(item.createdAt);
      const formattedDate = createdAt.toLocaleString('en-US', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
        });
        const container=
        `
         <div class="comment">
            <p>${item.comment}</p>
            <div class="createdAt">
               <p class="rate">${"&#9733".repeat(item.rate )} </p> 
              <small>${formattedDate}</small>
             </div>
         </div>         
        `
        containerInteractions.innerHTML+=container
      })
    };
  
  
  


