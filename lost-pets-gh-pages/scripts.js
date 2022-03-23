const box = document.querySelector('.i-lost-pet')
const modal = document.querySelector('.modalmain')
const closer = document.querySelector('.btn-cancel')
console.log(box)
box.addEventListener('click',() => {
    
    modal.classList.remove('none')
})
closer.addEventListener('click',() => {
    
    modal.classList.add('none')
})
