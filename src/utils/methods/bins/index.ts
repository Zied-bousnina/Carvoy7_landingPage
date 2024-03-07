export const binsIsFilled=(bins:any[])=>{
    let isFilled=false;
    for(let i=0;i<bins.length;i++){
        if(bins[i].niv>=80){
            isFilled=true;
            return isFilled;
        }
    }
    return isFilled;
    }

