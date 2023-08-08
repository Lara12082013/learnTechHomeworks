arr = [
    {
        name: 'Davit',
        surname: 'Margaryan',
        age: 30,
        gender: 'male'
    },
    {
        name: 'Armen',
        surname: 'Julhakyan',
        age: 28,
        gender: 'male'
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
        name: 'Tatev',
        surname: 'Azaryan',
        age: 24,
        gender: 'female'
    },
    {
        name: 'Zaruhi',
        surname: 'Danielyan',
        age: 24,
        gender: 'female'
    },
    {
        name: 'Areg',
        surname: 'Alaverdyan',
        age: 29,
        gender: 'male'
    },
    {
        name: 'Henri',
        surname: 'Engibaryan',
        age: 20,
        gender: 'male'
    }
]


// 1. Create a new Map from where entries will be array elements like this.
//key - ['name', 'surname', 'age', 'gender]
//value - ['Davit', 'Margaryan', 30, 'male']
//1.1 use map.set
//1.2 don't use map.set (use new Map(put entries here))
 
let users2 = new Map()
users2.set(Object.keys(arr[0]),Object.values(arr[0]))
users2.set(Object.keys(arr[1]),Object.values(arr[1]))
users2.set(Object.keys(arr[2]),Object.values(arr[2]))
users2.set(Object.keys(arr[3]),Object.values(arr[3]))
users2.set(Object.keys(arr[4]),Object.values(arr[4]))
users2.set(Object.keys(arr[5]),Object.values(arr[5]))
users2.set(Object.keys(arr[6]),Object.values(arr[6]))
users2.set(Object.keys(arr[7]),Object.values(arr[7]))


//2.Create an object like this
//    {
//     Davit: {
//         surname: 'Margaryan',
//         age: 30,
//         gender: 'male'
//   },
//  Armen: {
//         surname: 'Julhakyan',
//         age: 28,
//         gender: 'male'
//   },
//  ....
// }
let groups = new Map()
groups.set(arr[0].name,arr[0])
Object.fromEntries(groups)



//3. Create an array like this
// [ ' Davit Margaryan', [30, 'male'], 'Armen Julhakyan', [28, 'male'], 'Hrachya Khachatryan', [27, 'male'], ............ ] 

let user3 = new Map()
user3.set(arr[0].name,[arr[0].age,arr[0].gender])
user3.set(arr[1].name,[arr[1].age,arr[1].gender])
user3.set(arr[2].name,[arr[2].age,arr[2].gender])
user3.set(arr[3].name,[arr[3].age,arr[3].gender])
user3.set(arr[4].name,[arr[4].age,arr[4].gender])
user3.set(arr[5].name,[arr[5].age,arr[5].gender])

Array.from(user3)

