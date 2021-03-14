const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function onSubmit(){
    
    

    const list = $('.list-group');
    const item = document.createElement('li');
    
    
    const name = $('.inputext');

    item.className = 'list-group-item';
    item.innerHTML = `<div class="list__group">
                        
                        <span class="name">${name.value}</span>
                        </div>
                        <i  class="fas fa-times"></i>`


    
    list.appendChild(item);
    
    const close = item.querySelector('.fas');
    const input = item.querySelector('.checkbox');
    

    
    
    close.addEventListener('click',(e) => {
    
        item.remove();


    })
    item.addEventListener('click',(e) => {
    
        item.classList.toggle('disable');


    })
    
    
    

}




