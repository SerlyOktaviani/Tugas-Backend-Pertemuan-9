const fruits = require('./data.js');

const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    
    }
}

const insert = (nama_buah) => {
    fruits.push(nama_buah);
    index()
    
}

const update = (id_buah, newValue) => {
    fruits[id_buah] = newValue;
    index()
  }

const destroy = (id_buah) => {
    fruits.splice(id_buah,1)
    index()
}

module.exports = { update, index, insert, destroy};