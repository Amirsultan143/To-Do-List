let inp=document.querySelector('input');
let btn=document.querySelector('button');
let ul=document.querySelector('ul');

btn.addEventListener('click',()=>{
    // console.log(inp.value);
    let item=document.createElement('li');
    item.innerText=inp.value;
    item.classList.add('gap');
    ul.appendChild(item);

    inp.value="";

    let btnDel=document.createElement('button');
    btnDel.innerText="delete"
    item.appendChild(btnDel);
    btnDel.classList.add('myDel');
    btnDel.addEventListener('click',()=>{
        item.remove();
    })
});


// ul.addEventListener('click',()=>{
//     btnDel.remove();
// })
