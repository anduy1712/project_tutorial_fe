
const data = JSON.parse(localStorage.getItem('notes'))
const btn = document.querySelector('.btn-success');
const container = document.querySelector('.container');


if(data)
{
    data.forEach((item)=>{

        renderData(item);
    })
    console.log(data);
    
}





function renderData(data){
    const card = document.createElement('div')
    
    card.setAttribute('class','card')
    card.innerHTML = ` <div class="card__top">
                    <h3 class="card--top__title">Ghi chú</h3>
                    <div class="card--top__icon">
                        <i  class="far fa-edit"></i>

                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <div class="card__body">
                    <div class="test"></div>
                    <textarea placeholder="text here..." class="card--body__input" name="" id="" cols="30" rows="10">${data}</textarea>
                </div>`;
    container.appendChild(card);
    
    const edit = card.querySelector('.fa-edit');
    const modal = card.querySelector('.test');

    //delete
    const del = card.querySelector('.fa-times');
    
    //data
    var textarea = card.querySelector('.card--body__input');

    // console.log(cards);
    
    
    
    
    edit.addEventListener('click',function(){
       
        modal.classList.toggle('invalid');
    })
    del.addEventListener('click',function(){
       
        card.remove()
        setStorage()

    })

    textarea.addEventListener('input',function(e){
       

        setStorage()
        console.log(e.target.value);
    })
}
//Create Notes
btn.addEventListener('click',() =>{
    

    const card = document.createElement('div')
    
    card.setAttribute('class','card')
    card.innerHTML = ` <div class="card__top">
                    <h3 class="card--top__title">Lorem ipsum dolor sit amet.</h3>
                    <div class="card--top__icon">
                        <i  class="far fa-edit"></i>

                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <div class="card__body">
                    <div class="test"></div>
                    <textarea placeholder="text here..." class="card--body__input" name="" id="" cols="30" rows="10"></textarea>
                </div>`;
    container.appendChild(card);
    
    const edit = card.querySelector('.fa-edit');
    const modal = card.querySelector('.test');

    //delete
    const del = card.querySelector('.fa-times');
    
    //data
    var textarea = card.querySelector('.card--body__input');

    // console.log(cards);
    
    
    
    
    edit.addEventListener('click',function(){
       
        modal.classList.toggle('invalid');
    })
    del.addEventListener('click',function(){
       
        card.remove()
    })

    textarea.addEventListener('input',function(e){
       

        setStorage()
        console.log(e.target.value);
    })
        

    
})



function setStorage()
{
    var textarea = document.querySelectorAll('.card--body__input');
    var arraydata = [];

    textarea.forEach((data,index) => {
        arraydata.push(data.value)
        
        localStorage.setItem('notes',JSON.stringify(arraydata));
    })

    

}









