const {index, insert, update, destroy } = require("./FruitsController.js")
index()
insert("Durian");



console.log('ini update');
update(0,"Banana")

console.log('ini destroy');
destroy(0)