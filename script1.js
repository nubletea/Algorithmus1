function print(str){
    if(str.length == 1){
        return console.log(str);
    }else{
        for(let i=0;i<str.length;i++){
            let x=str.split('');
            x.unshift(x[i]);
            x.splice(i+1,1);
            let y=x.concat();
            y.splice(3,0,y[1]);
            y.splice(1,1);
            console.log(y.join(''));
            for(let j=2;j<str.length+1;j++){
                if(x.join('')==y.join('')){
                    break;
                }else if(j==str.length-1){
                    j=1;
                    y.splice(j+2,0,y[j]);
                    y.splice(j,1);
                    console.log(y.join(''));
                }else{
                    y.splice(j+2,0,y[j]);
                    y.splice(j,1);
                    console.log(y.join(''));
                }
            }
        }  
    }
}
print('ABCD');