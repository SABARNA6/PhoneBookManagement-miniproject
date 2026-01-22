function calculate(equation){
        let str=equation;
        let value="";
        let tokens=[];
        for (let i=0;i<str.length;i++){
            if ( str[i]>='1' && str[i]<='9'){
                let digit=0;
                while ( str[i]>='1' && str[i]<='9'){
                    digit=(str[i]-'0')+(digit*10);
                }
                console.log(digit);
            }
        }
        // setEquation(tokens);
}
calculate("89")