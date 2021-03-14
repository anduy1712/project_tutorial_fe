const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item');
const pans = $$('.tab-pane');

const tabActive = $('.tab-item.active');
const line = $('.tabs .line');


line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';






tabs.forEach((tab,index) =>{
    tab.onclick = function(){

        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.add('active');
        pans[index].classList.add('active');
    }
})
