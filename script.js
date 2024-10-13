function Menu(e){
    let list = document.querySelector('ul');

    e.class === 'menu' ? (e.class = "close" ,list.classList.add('top-[-80px]'),list.classList.add('opacity-100')) : (e.class = "menu" ,list.classList.remove('top-[-80px]'),list.classList.remove('opacity-100'))
}