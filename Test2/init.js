var fs = require('fs');
const {sha3_256} = require("js-sha3");
let string = new Array();
fs.readdirSync("./files/").forEach((file) => {
    let files = fs.readFileSync(`./files/${file}`);
    string.push(`${sha3_256(files)}`);

})
let b = string.sort().join('');
let temp = [b, 'him4e@vk.com'];
console.log(sha3_256(temp.join('')));