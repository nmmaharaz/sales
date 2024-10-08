const loadAllPost = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/categories')
    const data = await response.json()
    loadDisplayButton(data.categories)
}

const loadAllCard = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets')
    const data = await res.json()
    loadDisplayAllCard(data.pets)
}

const callCategory = async (id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    const data = await res.json()
    loadDisplayAllCard(data.data)
}

function dateOfBirth (date){
    return date? date.split('-')[0]:"Not available"
}

function checkPrice (price){
    return price? `${price}$`:"Not available"
}
function checkDescription (des){
    return des? des :"Not available"
}


const loadDisplayButton = (category)=>{
    // console.log('ami ki tumai', category)
    const allButton = document.getElementById('allbutton')
    category.forEach((singleButton) => {
        // console.log('ammu kemon achen?', singleButton)
        const button = document.createElement("div")
        button.innerHTML=`<button onclick = callCategory('${singleButton.category}') class="btn flex flex-rows justify-between px-[40px] border-1 border-solid border-gray-500">
        <div class="flex items-center">
                    <div class="mr-3 w-[30px]"><img class="w-full h-full" src="${singleButton.category_icon}" alt="" srcset=""></div>
                    <p class="text-[18px] font-bold">${singleButton.category}</p>
                </div>
        </button>`
        allButton.append(button)
    });
}


const clickDetails = (image, name, breEd, dateOFBrith, genDer, money, vaccinatedStatus )=>{
    console.log(image, name, breEd, dateOFBrith, genDer, money, vaccinatedStatus)

    // const allButton = document.getElementById('allbutton')
    // category.forEach((singleButton) => {
    //     console.log('ammu kemon achen?', singleButton)
    //     const button = document.createElement("div")
    //     button.innerHTML=`<button onclick = callCategory('${singleButton.category}') class="btn flex flex-rows justify-between px-[40px] border-1 border-solid border-gray-500">
    //     <div class="flex items-center">
    //                 <div class="mr-3 w-[30px]"><img class="w-full h-full" src="${singleButton.category_icon}" alt="" srcset=""></div>
    //                 <p class="text-[18px] font-bold">${singleButton.category}</p>
    //             </div>
    //     </button>`
    //     allButton.append(button)
    // });
}




const loadDisplayAllCard = (pets)=>{
    console.log('total card', pets)
        const allCard = document.getElementById('allcard')
        allCard.innerHTML = ""
        if(pets.length == 0){
            allCard.classList = "my-[60px]"
            allCard.classList.remove ("grid")
            allCard.innerHTML = `
            <div class = "flex flex-col justify-center text-center">
            <div class="flex justify-center"><img src="assets/error.webp" alt=""></div>
            <h2 class="text-[50px] font-bold">No Information Available</h2>
            <p>Animals dominate human conceptions of life on Earth not simply by their size, abundance, and sheer diversity but also by their mobility.</p>
            </div>
            `
        }
        pets.forEach((singleCard) => {
        console.log('total card', singleCard)
        const div = document.createElement("div")
        div.classList = "card bg-base-100 border border-solid border-gray-300"
        div.innerHTML=` 
        <figure class="px-4 pt-4">
    <img class="h-[180px] w-full rounded-lg"
      src="${singleCard.image}"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="p-4">
    <h2 class="card-title font-bold pb-1">${checkDescription(singleCard.pet_name)}</h2>
    <div class="flex items-center">
    <i class="text-gray-600 mr-1 fas fa-border-all"></i>
    <p class="text-[17px] text-gray-600 ">Breed: ${checkDescription(singleCard.breed)}</p>
    </div>
    <div class="flex items-center">
    <i class="text-gray-600 mr-1 far fa-calendar"></i>
    <p class="text-[17px] text-gray-600 ">Birth: ${dateOfBirth(singleCard.date_of_birth)}</p>
    </div>
    <div class="flex items-center">
    <i class="text-gray-600 mr-1 fas fa-venus"></i>
    <p class="text-[17px] text-gray-600 ">Gender: ${checkDescription(singleCard.gender)}</p>
    </div>
    <div>
    <div class="flex items-center pb-2">
    <i class="text-gray-600 mr-1 fas fa-dollar-sign"></i>
    <p class="text-[17px] text-gray-600 ">Birth: ${checkPrice(singleCard.price)}</p>
    </div>
    <hr class="py-2">
    </div>
    <div class="card-actions flex justify-between">
      <button id="like" onclick="likeOnClick('${singleCard.image}')" class="btn bg-base-100 border border-solid border-gray-300 px-4"><i class="text-xl far fa-thumbs-up"></i></button>
      <button class="btn bg-base-100 border border-solid border-gray-300 px-4">Adopt</button>
      <button id="" onclick="clickDetails()" class="btn bg-base-100 border border-solid border-gray-300 px-5">Details</button>
    
      </div>
  </div>`
        allCard.append(div)
    });
}

// '${singleCard.image}', '${singleCard.pet_name}', '${singleCard.breed}', '${singleCard.date_of_birth}', '${singleCard.gender}', '${singleCard.pet_details}'


// '${singleCard.image}', '${singleCard.pet_name}', '${singleCard.breed}', '${singleCard.date_of_birth}', '${singleCard.gender}', ${singleCard.pet_details}


const likeOnClick = (photo)=>{
    const allLikeClickButton = document.getElementById('linkClickSection')
    const div = document.createElement("div")
    div.classList ="card"
    div.innerHTML=`
    <img class="rounded-xl"
    src="${photo}" alt="Shoes" />
    `
    allLikeClickButton.append(div)
}



loadAllPost()
loadAllCard()