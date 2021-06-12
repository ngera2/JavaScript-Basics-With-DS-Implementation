//Different ways to iterate an object in JS

const items = {
    'first': new Date(),
    'second': 2,
    'third': 'test'
  }
for(var item in items){
    console.log(item,items[item]);
}
Object.entries(items).map(item => {
    console.log(item,items[item]);
})
// Object.entries(items).map(item => {
//     console.log(item,items[item])
//   })
  