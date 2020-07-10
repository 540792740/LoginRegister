// var MinStack = function() {
//     this.elements = [];
// };
//
// MinStack.prototype.push = function(x) {
//     this.elements.push({
//         value: x,
//         min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
//     });
// };
// MinStack.prototype.pop = function() {
//     return this.elements.pop();
// };
// MinStack.prototype.getMin = function() {
//     return this.elements[this.elements.length - 1].min;
// };
//
// const stack = new MinStack();
// // const lines = '1 2 3 4';
// const res = lines[0].split(' ')
// for(let i = 0; i < res.length; i++){
//     stack.push(res[i])
// }
// const result = []
// for(let i = res.length; i > 0; i = i - 2){
//     result.push(stack.pop().value)
//     stack.pop();
// }
// // console.log(result)
// console.log(result.join(' '))
//


var lengtha = function (s) {
    const a = s.trim().split(' ')
    return a[a.length - 1].length
}

a = ' a '
console.log([a.trim()])
