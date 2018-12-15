function minus(a,b){
    return a-b;
}
function low(data,lowa,lowb){
    if(data<=lowa) 
        return 1;
    else if(data<lowb){
        return minus(lowb,data)/minus(lowb,lowa);
    }else return 0;
}
function mid(data,meda,medb,medc,medd){
    if ((data<=meda) || data>=medd)
        return 0;
    else if(data<medb){
        return minus(data,meda)/minus(medb,meda);
    }else if(data<=medc)
        return 1;
    else
        return minus(medd,data)/minus(medd,medc);
}
function hig(data,higa,higb){
    if (data<=higa)
        return 0;
    else if (data<higb){
        return minus(data,higa)/minus(higb,higa);
    }else
        return 1;
}
function fuzzi(data,lowa,lowb,meda,medb,medc,medd,higa,higb){
    return ", "+low(data,lowa,lowb).toString()+", "+mid(data,meda,medb,medc,medd).toString()+", "+hig(data,higa,higb).toString();
}
function fuzzisation(data1,lowa,lowb,meda,medb,medc,medd,higa,higb,data2,lowa2,lowb2,meda2,medb2,medc2,medd2,higa2,higb2){
    return fuzzi(data1,lowa,lowb,meda,medb,medc,medd,higa,higb)+fuzzi(data2,lowa2,lowb2,meda2,medb2,medc2,medd2,higa2,higb2);
}
function rejected(cell){
    return Math.max(Math.min(cell[6],cell[5]),Math.min(cell[6],cell[4]));
}
function considered(cell){
    return Math.max(Math.min(cell[8],cell[5]),Math.min(cell[7],cell[5]),Math.min(cell[7],cell[4]),Math.min(cell[6],cell[3]));
}
function accepted(cell){
    return Math.max(Math.min(cell[8],cell[4]),Math.min(cell[8],cell[3]),Math.min(cell[7],cell[3]));
}
function inference(data){
    var cell = data.split(",");
    return ", "+rejected(cell)+", "+considered(cell)+", "+accepted(cell);
}