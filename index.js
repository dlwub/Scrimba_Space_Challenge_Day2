const galaxy = document.getElementById('galaxy');
let arr = ['✨', '⭐', '✨', '⭐', '✨', '⭐', '✨', '⭐']
let newArr = new Array(13);

for(let i=0; i <newArr.length; i++){
    if(i%2==0){
        newArr.fill(arr.join(""), i, i+1)
    }else{
       newArr.fill(arr.reverse().join(""), i, i+1);
    }
}

for(let elem of newArr){
    galaxy.innerHTML +=`<p class="glow">${elem} </p>`;
}