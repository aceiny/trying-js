let tit = document.getElementById('title')
window.onload = () => {tit.focus()}
function tot(){
let price = document.getElementById('price').value
let tax = document.getElementById('taxe').value
let ads = document.getElementById('ads').value
let disc = document.getElementById('disc').value
let total = document.getElementById('total') 
if (price.length > 0 ) { 
    let u = ( Number(price) + Number(tax) + Number(ads) ) - Number(disc)
    console.log(Number(tax))
    total.value = u
}}
if (localStorage.item != null ) {
    data = JSON.parse(localStorage.item) 
}
else {
    data = []
}
function cleardata() {
    document.getElementById('title').value = '';
    document.getElementById('price').value = '';
    document.getElementById('taxe').value = '';
    document.getElementById('disc').value = '';
    document.getElementById('ads').value = '';
    document.getElementById('cat').value = '';
    document.getElementById('count').value = '';
}
function create () { 
    let item = { 
        title : document.getElementById('title').value ,
        total : document.getElementById('total').value , 
        count : document.getElementById('count').value ,
        catg : document.getElementById('cat').value
    }
    data.push(item)
    localStorage.item = JSON.stringify(data)
    cleardata()
    showdata()

}
function showdata() { 
    table = ''
    for(i=0; i<data.length;i++) {  
        table += `<tr>
        <td>${i+1}</td>
        <td>${data[i].title}</td>
        <td>${data[i].count}</td>
        <td>${data[i].total}</td>
        <td>${data[i].catg}</td>
        <td><button onclick="upd(${i})" id="update" class ="btnn" >UPDATE</button></td>
        <td><button onclick="dlt(${i})" id="delete" class ="btnn" >DELETE</button></td>
        </tr>`
    }
    document.getElementById('tbody').innerHTML = table
}
function deleteAll(){
    data.splice(0,data.length)
    localStorage.item = JSON.stringify(data)
    showdata()
}
function dlt(i){ 
    data.splice(i,1)
    localStorage.item = JSON.stringify(data)
    showdata()
}
function upd(i){
    document.getElementById('title').value = data[i].title;
    document.getElementById('total').value = data[i].total;
    document.getElementById('taxe').value = data[i].tax;
    document.getElementById('disc').value = data[i].disc;
    document.getElementById('ads').value = data[i].ads;
    document.getElementById('cat').value = data[i].catg;
    document.getElementById('count').value = data[i].count;
    let btn = document.getElementById('crtbtn')
    btn.style.display = 'none';
    let btnn = document.getElementById('crtbtnn')
    btnn.style.display = 'block' ;
    btnn.onclick = () => {
        data[i].title = document.getElementById('title').value
        data[i].price = document.getElementById('price').value
        data[i].tax = document.getElementById('taxe').value
        data[i].disc = document.getElementById('disc').value
        data[i].ads = document.getElementById('ads').value
        data[i].catg = document.getElementById('cat').value
        data[i].count = document.getElementById('count').value
        data[i].total = document.getElementById('total').value
        btn.style.display = 'block'
        btnn.style.display = 'none'
        localStorage.item = JSON.stringify(data)
        showdata()
    }
}
showdata()
