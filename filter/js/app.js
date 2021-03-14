const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const btn = $$('.body-filter__item');
const cards = $$('.card');
// const names = $$('.card-profile__title');


btn.forEach((item,index) => {

    item.onclick = function(e){
        e.preventDefault();

        var filter = e.target.textContent;
        cards.forEach((card,index) => {

            
            console.log(filter)
            if (filter == 'All')
            {
                card.style.display = 'block'
            }
            else{
                if(card.classList.contains(filter))
                {
                    card.style.display = 'block'

                }
                else{
                    card.style.display = 'none'
                }
            }
            
    
        })
       
        
    }
})


//search box
const input = $('.filter-input');

input.addEventListener('keyup',(e) => {
    
    value = e.target.value.toLowerCase().trim();
    
    cards.forEach((card,index) => {

        var inputName = card.textContent.toLowerCase().trim();
        if(inputName.includes(value))
        {
            console.log()
            card.style.display = 'block'
        }
        else{
            card.style.display = 'none'
        }
        

    })
    
})
//lll
