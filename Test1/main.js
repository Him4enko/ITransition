function lcs(str) {
    let s = str.reduce((a, b) => a.length <= b.length ? a : b);
    let maxlen = s.length;
    for (let len = maxlen; len >= 0; len--)
    {
        for (let start = 0; start <= maxlen - len; start++)
        {
            let sstr = shortest.substring(start, len);
            if (str.every(elem => ~elem.indexOf(sstr))) {return sstr;}
        }
    }
    return '';
}
let b = 0;
if (process.argv.length < 3)
    console.log('');
else if (process.argv.slice(2).length <= 64){
    for (let i = 1; i<process.argv.slice(2).length; i++){
        if(process.argv.slice(2)[i].length<=256){
            b += 1;
        }
    }
    if ( b = process.argv.slice(2).length){
        console.log(lcs(process.argv.slice(2)));
    } else console.log('\n');}
