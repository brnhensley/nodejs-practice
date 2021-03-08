// const getUser = (id) => {
//     setTimeout(() => {
//         console.log("reading database");
//         return { id: id };
//     }, 2000);
//     return "get user done";
// };

// console.log('before');
// const user = getUser(5);
// console.log(user);
// console.log('after');

const user = getUser();
console.log(user);

function getUser() {
    return "get user done";
};
