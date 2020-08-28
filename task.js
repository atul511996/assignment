//QUESTING 1.

const { resolve } = require("path");

let arr = []
let i = 0;
while(i <= 100){
    arr.push(i)
    i++;
}

// console.log(arr)


//QUESTION 2
let findEven = (arr)=>{
    let evenArr = [];
    arr.map(d=>{
        if(d % 2 ==0){
        evenArr.push(d)
        }
    })
    return evenArr
}
let  evenArr= findEven(arr)
// console.log(evenArr)





//QUESTING 3
let evenSquare = (evenArr)=>{
 
    let evenSquareArr=[]
    return new Promise((resolve,reject)=>{
        try{
      evenArr.map(d1=>{
          evenSquareArr.push(d1*d1)
      })
      resolve(evenSquareArr)
    }catch(err){
        reject(err)
    }
    })

}

evenSquare(evenArr).then(data=>{
    // console.log(data)
}).catch(err=>{
    console.log(err)
})

//QUESTION 4

let evenSquareSum = (evenArr)=>{
    let sumofSquare=0
    return new Promise((resolve,reject)=>{
      evenArr.map(d1=>{
          sumofSquare+= d1*d1
      })
      resolve(sumofSquare)
    })
}
evenSquareSum(evenArr).then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})


//QUESTING 5


let j =0 ; 
while(j<=100){
    evenSquare(j).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err)
    })
    j++
}