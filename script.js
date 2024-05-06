// Adding items to the ul list: -
const form=document.getElementById('item-form'); 
// console.log(form);
const listitems=document.getElementById('item-list');
// console.log(listitems);
const btn=form.querySelector('button');
btn.addEventListener('click',AddItems);
function AddItems(e)
{ 
  e.preventDefault();
  const txtinput=document.getElementById('item-input');
  if(txtinput.value ==='')
  {
    alert('please enter the text');
  }
  else
  {
  console.log(txtinput.value);
  const li=document.createElement('li');
  li.appendChild(document.createTextNode(txtinput.value));
  const button=createbutton('remove-item btn-link text-red');
  li.appendChild(button);
  // console.log(li);
  // console.log(listitems);
  listitems.appendChild(li);
  txtinput.value='';
  CheckUI();
  }
}
function createbutton(classes){
  const button=document.createElement('button');
  button.className=classes;
  // console.log(button);
  const icon=icons('fa-solid fa-xmark');
  button.appendChild(icon);
  // console.log(button);
  return button;
}
// Craeting a icons: -
function icons(classes){
  const icon=document.createElement('i');
  icon.className=classes;
  return icon
}
// Removing the values by one by one
listitems.addEventListener('click',removeitems);
function removeitems(e){
  console.log(e.target.parentElement);
  if(e.target.parentElement.classList.contains('remove-item')){
    // console.log('true');
    e.target.parentElement.parentElement.remove();
  }
  CheckUI();
}
// Clearing all the values at once: -
const clr=document.querySelector('#clear');
console.log(clr);
clr.addEventListener('click',removeall);
// clearall
function removeall()
{ 
  const li= listitems.querySelectorAll('li');
  // listitems.remove();
  li.forEach((x)=>{
    x.remove();
  })
  CheckUI();
}
// CheckUI: - 
function CheckUI(){
  const li=listitems.querySelectorAll('li');
  const filtersearch=document.querySelector('#filter');
  // console.log(li.length);
  if(li.length=== 0)
  {
    // console.log(true);
    clr.style.display='none';
    filtersearch.style.display='none';
  }
  else{
    // console.log(false);
    clr.style.display='block';
    filtersearch.style.display='block';
  }
}
CheckUI();
// searchfilter
const filtersearch=document.querySelector('#filter');
filtersearch.addEventListener('input',searchitems);

function searchitems(e){
  const li=document.querySelectorAll('li');
  const text=e.target.value.toLowerCase();
  // console.log(text);

  li.forEach((item)=>{
    const serachitem=item.firstChild.textContent.toLowerCase();
    if(serachitem.indexOf(text)!= -1){
      item.style.display='flex';
    }
    else{
      item.style.display='none';
      
    }
  })
CheckUI();
}