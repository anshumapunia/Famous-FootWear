let addItemId=0;
function addTocart(item){
    addItemId+=1;
    let selectedItem=document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',addItemId);
    let img=document.createElement('img')
    img.setAttribute('src',item.children[0].currentSrc);
    let title=document.createElement('div')
    title.innerText=item.children[1].innerText;
    let label=document.createElement('div')
    label.innerText=item.children[2].children[0].innerText
    let select=document.createElement('span')
    select.innerText=item.children[2].children[1].value
    label.append(select)
    let delBtn=document.createElement('button');
    delBtn.innerText='Delete';
    delBtn.setAttribute('onclick','del('+addItemId+')');
    let cartItems=document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(label);
    selectedItem.append(delBtn);
     cartItems.append(selectedItem)
}
function del(item){
    document.getElementById(item).remove();
}