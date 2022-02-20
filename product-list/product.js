const sliderInp = document.querySelector('.slider-inp');
const sliderValue = document.querySelector('.slider-value');
const AllwishlistBtn = document.querySelectorAll('.wishlist-badge')
AllwishlistBtn.forEach((wishlistBtn)=>{
    wishlistBtn.addEventListener("click",event=>event.target.style.color="var(--secondary-clr)")
})
sliderInp.addEventListener('input',()=>{
    sliderValue.textContent = sliderInp.value
})

const checkBoxContainer = document.querySelectorAll('.checkbox');
const radioBtnContainer = document.querySelectorAll('.radio-inp')
const clearBtn = document.querySelector('.clear-btn')
clearBtn.addEventListener('click',clearAllFilter)


function clearAllFilter(){
    let clear = item => item.checked=false;
    radioBtnContainer.forEach(clear)
    checkBoxContainer.forEach(clear)
    sliderInp.value="0"
    sliderValue.textContent="0"
}

