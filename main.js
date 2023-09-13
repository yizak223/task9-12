const DOG_ARRAY = [{
    nameDog: 'chichi',
    age: 7,
    type: 'chiwawa'
},
{
    nameDog: 'chichi',
    age: 7,
    type: 'chiwawa'
},
{
    nameDog: 'chichi',
    age: 7,
    type: 'chiwawa'
}]

DOG_ARRAY.forEach(element => {
    console.log(element);
});


for (const key in DOG_ARRAY[1]) {
    console.log(key);
}
//seif 3
for (const DOGItem of DOG_ARRAY) {
    mainDiv.innerHTML += `<div id='dog_item_${DOG_ARRAY.indexOf(DOGItem)}'></div>`
    let thisDIv = document.querySelector(`#dog_item_${DOG_ARRAY.indexOf(DOGItem)}`)
    for (const key in DOG_ARRAY[DOG_ARRAY.indexOf(DOGItem)]) {
        thisDIv.innerHTML += `<p>${DOG_ARRAY[DOG_ARRAY.indexOf(DOGItem)][key]}</p>`
    }
}
//10
const STUDENT_ARRAY = [
    {
        full_name: 'yizak alaluf',
        date: '22.02.00',
        email: 'yizak@gmail.com',
        ispassthetest: true
    },
    {
        full_name: 'yizak alaluf',
        date: '22.02.00',
        email: 'yizak@gmail.com',
        ispassthetest: true
    },
    {
        full_name: 'yizak alaluf',
        date: '22.02.00',
        email: 'yizak@gmail.com',
        ispassthetest: true
    },
    {
        full_name: 'yizak alaluf',
        date: '22.02.00',
        email: 'yizak@gmail.com',
        ispassthetest: true
    }
]

function printStudent() {
    for (const iterator of STUDENT_ARRAY) {
        console.log(iterator);
    }
}
// printStudent()

() => {
    for (const key in STUDENT_ARRAY[2]) {
        console.log(STUDENT_ARRAY[2][key]);
    }
}

for (const studetItem of STUDENT_ARRAY) {
    t10.innerHTML += `<div id='student_item${STUDENT_ARRAY.indexOf(studetItem)}'></div>`
    let thisDivT10 = document.querySelector(`#student_item${STUDENT_ARRAY.indexOf(studetItem)}`)
    for (const key in STUDENT_ARRAY[STUDENT_ARRAY.indexOf(studetItem)]) {
        thisDivT10.innerHTML += `<p>${STUDENT_ARRAY[STUDENT_ARRAY.indexOf(studetItem)][key]}</p>`
    }
}

//11
const office_array=[]
let counter=0

const btn = document.querySelector('button')
btn.addEventListener('click',createArrayOffice)
       
     
    
  
function createArrayOffice() {
    let inputUser=document.querySelectorAll('input')
    let OBJECT_OFFICE = {
        num_workers:inputUser[0].value ,
        class: inputUser[1].value,
        name_maneger: inputUser[2].value,
    }
    office_array.push(OBJECT_OFFICE)
    counter++
    console.log(OBJECT_OFFICE);
    console.log(office_array);
    if(counter>=3)
        btn.disabled=true
    console.log(counter);
}

//12
showFormDriving.addEventListener('click',
()=>{
formDriving.innerHTML+=`
<form>
<input id='startStation' type="text" placeholder="what station start">
<input id='endStation' type="text" placeholder="what station get of">
<input id='TimeDriving' type="text" placeholder="time">
<button id="btnCreateObject">sent</button>
</form>
`
btnCreateObject.addEventListener('click',
(e)=>{
    e.preventDefault()
    const OBJECT_DRIVING={
        Aliastation:startStation.value,
        Dropstation:endStation.value,
        Traveltime:TimeDriving.value
    }
    console.log(OBJECT_DRIVING);
})})



