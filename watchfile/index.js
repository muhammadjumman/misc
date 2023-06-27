const fs = require('fs')
const path = require('path')

fs.watchFile('text.txt', (curr, prev)=>{
    console.count('The file is changed')
    console.log("Previous",prev)  //fs.stat
    console.log("Current",curr)   //fs.stat
})


const stat = fs.statSync('text.txt')
console.log(stat)

const folderPath = path.join(__dirname, 'watchFolder')

if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);

fs.watch(folderPath,(eventType, filename)=>{
    console.log("EventType", eventType)
    console.log("FileName", filename)

})

for( i = 0; i< 10 ; i++){

    var p = path.join(folderPath, `${i}.js`)
    fs.writeFileSync(p, `console.log("This file name is ",i)`)
}

