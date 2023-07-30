
//1.Given an array, get only unique elements from that array. (don't use for loop, use only array methods)

let arr = [1,"2",2,3,4,56,6,152,3]
let unique3= arr.filter((el,i,array) => array.indexOf(el) === i)


 // 2.Implement bubble sort with while/for loop.
let arr1 = [1,15,5,7,6,8,12,9,10,11]
let j = 0
while(j < arr1.length){

    for (let i = 0; i < arr1.length - 1; i++) {
        if(arr1[i] > arr1[i + 1]){
            let temp = arr1[i]
            arr1[i] = arr1[i + 1]
            arr1[i + 1] = temp
        }
    }
    j++
}
console.log(arr1)

// 3.Implement bubble sort with while/while loop.

let arr = [1, 15, 5, 0, 7, 6, 8, 12, 9, 10, 11, 125, 2, 5, 0, 6]
let j = 0

while (j < arr.length) {
  let i = 0
  while (i < arr.length - j - 1) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
    }
    i++
  }
  j++
}
console.log(arr)


// 4.Implement bubble sort with for/while loop.

let arr = [1, 15, 5, 0, 7, 6, 8, 12, 9, 10, 11, 125, 2, 5, 0, 6]

for (let j = 0; j < arr.length; j++) {
  let i = 0
  while (i < arr.length - j - 1) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
    }
    i++
  }

}
console.log(arr)


//5.Given an array of objects (like {name, surname, age, gender} as in previous lesson). Return only girls "names" sorted by their age.
arr = [
    {
        name: 'Davit',
        surname: 'Margaryan',
        age: 30,
        gender: 'male'
    },
    {
        name: 'Tatev',
        surname: 'Azaryan',
        age: 24,
        gender: 'female'
    },
    {
        name: 'Armen',
        surname: 'Julhakyan',
        age: 28,
        gender: 'male'
    },
    {
        name: 'Zaruhi',
        surname: 'Danielyan',
        age: 24,
        gender: 'female'
    },
    {
        name: 'Hrachya',
        surname: 'Khachatryan',
        age: 27,
        gender: 'male'
    },
    {
        name: 'Larisa',
        surname: 'Shahnazaryan',
        age: 23,
        gender: 'female'
    },
    {
        name: 'Mane',
        surname: 'Poghosyan',
        age: 18,
        gender: 'female'
    }
   
]

let newArr = arr.filter(el => el.gender === "female").sort((a,b) => a.age - b.age).map(el => el.name)