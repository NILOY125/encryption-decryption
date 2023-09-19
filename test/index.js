// const test1 = require('test1.js');
// const test2 = require('test2.js');

// const obj = {
//     TEST1: test1,
//     TEST2: test2
// };

// module.exports = obj;

// const fs = require('fs');
// const path = require('path');
// filenames = fs.readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== __dirname) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))
   
//   });

// const fs = require('fs');
// const path = require('path');
  
// // Function to get current filenames
// // in directory with specific extension
// files = fs.readdirSync(__dirname)
  
// console.log("\Filenames with the .md extension:");
// files.forEach(file => {
//   if (path.extname(file) == ".js")
//     console.log(file);
// })

// const fs = require('fs');
// const path = require('path');
  

// files = fs.readdirSync(__dirname).filter(file => {
//     return (file.indexOf('index.js') !== 0) && (file !== __dirname) && (file.slice(-3) === '.js');
//   }).forEach(file => {
//     console.log(file);
// })



// const fs = require('fs');
// const path = require('path');
  

// files = fs.readdirSync(__dirname)
  
// console.log("\Filenames with the .md extension:");
// files.forEach(file => {
//   if (path.extname(file) == ".js")
//     console.log(file);
// })


// const fs = require('fs');
// const path = require('path');
  

// files = fs.readdirSync(__dirname)
  
// console.log("\Filenames with the .md extension:");
// files.forEach(file => {
//   if (path.extname(file) == ".js")
//     console.log(file);
// })
// const test1 = require('./test1');

// const fs = require('fs');
// const path = require('path');
// let obj ={};
// let importStr = {};

// files = fs.readdirSync(__dirname).filter(file => {
//     return (file.indexOf('index.js') !== 0) && (file !== __dirname) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     // console.log(file.substring(0, (file.length - 3)));
//     let key = file.substring(0, (file.length - 3)).replace(/\./g, '').toLocaleLowerCase();
//     const model = require(path.join(__dirname, file));
//     obj[key] = model;
//     //importStr[key] = `./${file.substring(0, (file.length - 3))}`;
//     // const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     // db[model.name] = model;
//   });
//   const data = [];
//   //Object.keys(importStr).forEach(key => {
//     // console.log(importStr[key]);
//     // let m = require(`${importStr[key]}`);
//     // for(const [key, fn] of Object.entries(m)) {
//     //     data.push(fn)
//     // }    
//   //});
//   module.exports = obj;
// //   console.log(obj);
// //   console.log(importStr);
// //console.log("\Filenames with the .md extension:");

