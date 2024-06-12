///////////ASYNCHRONOUS JAVA SCRIPT////////////////////////
///////////////sychnoronous means code execxute line by line//////
///////////////asyncronous run code paralell//////
/////////////////////settimeout is use to  set delay T
//////////kisi bhi function ka argument ma dosra argument deta ha to call back kahta ha //
console.log("first");
setTimeout(()=>{
    console.log("second")
},3000)
console.log("third");
////////////parameter ka ander jab function pass larta ha to isa kehat aha call back/
///////////////set time out ma return nhi karai ga //////////////

type fn=()=>void
let placeorder=(preparepizzacb:fn)=>{
    setTimeout(()=>{
        console.log("order is place")
        preparepizzacb()
    },2000)
}
let preparepizza=()=>{
    setTimeout(()=>{
        console.log("pizza is prepared");
    },5000)
}
placeorder(preparepizza);//////////////order is placed
///////////////prepare pizza is call back /ya prepare pizza jo ha hamna isko yaha call nhi karaya yha mna isko function ka reference diya ha then uper function ka ander argument pass kiya ha preparepizzacb then preparew pizzacb ko call karaya ha
///////////////miltipe nested function sa bachna ka liya hm promise use karta ha /
/////////////////////callback ka second method ha promises//////////
/////promises ma new thing ha .then kar ka hm multile function da deta ha isma hm callback hell sa bach jata ha call back hell means multiple nested functions//
////////PROMISES////////////////////////////
///////agar reject banai ga ti cathch bhi karana hoga warna error ai ga////

let placeorder2=()=>
    {return new Promise((resolve,reject) => {
        setTimeout(()=>{
            let isopen="false";
            if(isopen){
            console.log("order is place")
            resolve("");
        }else{
            reject("shop is close!")

        }
         
        },2000)
    
})

}
let preparepizza2=()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("pizza is prepared");
            resolve("")
        },5000)
    })
 
}
let deliverpizza=()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("pizza is  delivered succesfully");
            resolve("")
        },5000)
    })
 
}
let eat=()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("i eat pizza..pizza is yummy");
            resolve("")
        },5000)
    })
 
}
placeorder2()
.then(preparepizza2)
.catch((err)=>{
    console.log('shop is close!');
})
//////////////////////ASYNCS AWAIT///////////////////
let dotask=async ()=>{
    await placeorder2();
    await preparepizza2();

}
 dotask();

// HOME WORK
//  project =08
//  -call stack 
//  -eent queue
//  -event loop
//  -heap
//////CAL STACK//////////
//////////synchronous ma call stack///////////////
////////cal stack just suchronous java script ka code ko run karta ha agar asychrous code aiga to wo web api ma convert kardega////////
// JO BHI HMARA CODE CHALTA HA WO SARA CALL STACKMA CHALTA HA 
/////call stack ma agar ak code chal gya phir wo remove hogya then secnd function ko chlai ga call stack just code excute karta ha ///////
// java script is a  single thread programming language///////////
/////////asychronous java script ka sara kam web api ma hota ha/////////
/////////web api asychronous ka task perform karti ha////////
/////////then web api sa call back queue ma a gai ga code ///////
//////////////event loop////event loop watch karta ha jis time par isna dekha ka call stack free hogya to ya call back queue sa transfer karka call stack ma laka gai ga
//////////////call stack ka ander pehla sara scyncrous taskperform karai ga then wo call stack queueko dekha ga pehla poora synchronous ka code execute karai ga////////