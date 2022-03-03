// Write your solution below:

// function shirtSort(str) {
//     let newArr = str.split('')
//     let sortedArr = []
//     for(let i=0; i<newArr.length; i++){
//         if(newArr[i] === 's'){
//             sortedArr.push(newArr[i])
//          return sortedArr
//         }
//     }
// }

function shirtSort(str){
    let newArr = str.split('')
    let dewArr = newArr.sort()
    let sewArr = (dewArr.reverse()).join('')
    return sewArr
}

console.log(shirtSort('smlsmlmls'))

const sorter = (str) => str.split('').sort().reverse().join('')

// function sorter(str) {return str.split('').sort().reverse().join('')}

console.log(sorter('smlsmlmls'))