//获取要操作的元素

let unbutton =document.querySelector('.unfold-button');
let left_box =document.querySelector('.leftnav');

unbutton.addEventListener('click',function(){
    if(this.classList.contains('close')){
        left_box.style.width=240+'px';
        this.classList.remove('close');
    }else{
        left_box.style.width=0;
        this.classList.add('close');
    }
})

