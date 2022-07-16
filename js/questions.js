// function order(words) {
//   const array = [...words.split(" ")];

//   words
//     .split(" ")
//     .forEach(
//       (element) =>
//         (array[
//           element.split("").find((elem) => Number.isInteger(Number(elem))) - 1
//         ] = element)
//     );

//   return array.join(" ");
// }

// console.log(order("is2 Thi1s T4est 3a"));

// function luckCheck(ticket) {
//   const arr = [...ticket.split("")];
//   const left = arr.reduce(
//     (acc, elem, index) => (index < 3 ? (acc += Number(elem)) : acc),
//     0
//   );

//   const right = arr.reduce(
//     (acc, elem, index) => (index > 2 ? (acc += Number(elem)) : acc),
//     0
//   );
//   return left === right;
// }

// function luckCheck(ticket) {
//   if (
//     ticket.split("").every((element) => Number.isInteger(Number(element))) &&
//     ticket !== []
//   )
//     return (
//       ticket
//         .split("")
//         .reduce(
//           (acc, elem, index) => (index < 3 ? (acc += Number(elem)) : acc),
//           0
//         ) ===
//       ticket
//         .split("")
//         .reduce(
//           (acc, elem, index) => (index > 2 ? (acc += Number(elem)) : acc),
//           0
//         )
//     );
// }

console.log(luckCheck("6F43E8"));
