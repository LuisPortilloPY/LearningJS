// como unir dos listas con concat
let l1 = [1,3,5,7]
let l2 = [2,4,6,8]
let l = l1.concat(l2)
let aux = 0
console.log(l);
for (let i = 0; i < l.length; i++) {
    for (let i = 0; i <= l.length; i++) {
        if (l[i]>l[i+1]){
           aux=l[i]
           l[i]=l[i+1]
           l[i+1]=aux
        }
    }    
}
console.log(l)

// ordenar listas

// como unir dos listas con el factor de propagacion
const l4 = [...l1,...l2]
console.log(l4)
// tambien se puede hacer de esta forma la concatenacion
const l5 = [l1, l2]
console.log(l5)
// forma errornea de realizar la progagacion de listas