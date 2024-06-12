let age: any; //all types are accepted because main type is "any"

age = "18";
age = 18;

age = true;
age = [];

age = () => {}

//

let num1: any;
let num2: number =18;

num1 = num2; //correct
num2=num1; //correct                                                                                                                    UNKNOWN
                                                                                                                    //

// we use unknown as datatype when we dont know the data type of an variable

let num3: unknown;

num3 = "18";
num3
18;

num3
num3
[];
true;

num3 = () => {}

//                                                                                                                           //

let num4:unknown;

let num5: number 18;

num4 num5 //no error, because num4 is unknown and we can store anytype of data

num5 = num4 //error because we donot know the type of num4

//

let num6: unknown;

let num7: unknown = 18;

num7 num6 // no error
console.log(num7); // it will print "undefined" because we are storing num6 in num7 and value of num6 is undefined


//                                                                                                                                                      REST PARAMETER

function invite(...friends: string[]) {
  return You are invited ${friends.join(', ')};
}

invite("Ali", "Arham", "Osama");

console.log(invite("Ali", "Arham", "Osama")); //we can pass unlimited number of items as arguments because we are using rest parameter.

                                                                                                                                                                        11

function inviteHostandFriends(host: string, ...friends: string[]) {
  console.log(host);

  return You are invited ${friends.join(', ')};
}

console.log(inviteHostandFriends("Ali", "Arham", "Osama")); //we can pass unlimited number of items as arguments because we are using rest parameter.

function inviteFriendsOnly(...friends: string[]) {
  return Welcome ${friends.join(', ')};
}

console.log(inviteFriendsOnly("Ali", "Arham", "Osama")); // This line has a syntax error because '|' is not a valid function for joining strings. 

                                                                                                                                                                        -11

function inviteFriendsAgain(...friends: string[]) {
  // return Welcome $(friends);  // This line is commented out in the original code
  console.log("Welcome", friends.join("|"));
}

invite("anas", "tehseen");
                                                                                   STRUCTURAL TYPING-

type Deal1 ={

                                          food: string

                                          drink: string

}

type Deal2 ={

                                          food: string

}

let shahbazOrder: Deal1
=
{

                                          food: "Biryani",

                                          drink: "ColaNext"

}

let kashifOrder: Deal2 = {

                                          food: "Biryani"

}

//                                                                                                     stale object--it allows extra property

let kashifTable: Deal2 = shahbazOrder; //no error

let shahbazTable: Deal1 = kashifOrder; //error-missing drink

//                                                            |fresh object|  ---                            -it doesnot allow extra property

let kashiftable: Deal2
=
{

                                          food: "Biryani",

                                          drink: "ColaNext"

}; //error it doesnot allow extra property

// stale object allows extra property

// fresh object doesnot allow extra property


//


FUNCTION OVERLOADS

function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
  return a + b;
}

add("hamzah", "syed"); //correct
add(18, 20); //correct

add("hamzah", 18); // error, function will not work because we haven't created any function overload for this pair of parameter types.

                                                                                                                                                                                            -1/

function signIn(email: string, password: string): void;
function signIn(email: string, password?: string): void;

function signIn(email: any, password: any): any {
  if (!password) {
    console.log("You are logged in with Google");
  } else if (email && password) {
    console.log("You are logged in with Email;");
  }
  return;
}

// console.log(signIn("anas@gmail.com"));
console.log(signIn("anas@gmail.com", "123abc"));