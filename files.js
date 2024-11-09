const fs = require('fs');

//fs.readFile('./docs/blog12.txt', (err, data)=>{
//if (err) {
//    console.log(err);
//}
//console.log(data.toString());
//});

//console.log('last line');

//fs.writeFile('./docs/blog1.txt', 'Hello World', () => {
//    console.log ('File was written');
//});
//
//fs.writeFile('./docs/blog2.txt', 'Hello again', () => {
//    console.log ('File was written');
//});

if (!fs.existsSync('./assets')) {
fs.mkdir('./assets', (err)=> {
    if (err) {
        console.log(err);
    }
    console.log('Folder Created');
})
} else {
    fs.rmdir('./assets', (err) => {
        if (err){
            console.log(err);
        }
        console.log('Folder deleted');
    })
}


if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err){
            console.log(err)
        }
        console.log('File Deleted');
    })
}