function airlinesSearch(name, params){

    let cities=["delhi","mumbai","bangalore","kolkatta","chennai","hyderabad","jaipur"]

    let flights=[] ; //we should return 5 results. 

    if( !params || !params.from || !cities.includes(params.from) || !params.to || !cities.includes(params.to) )
        return null; // we don't have result. It has failed.

    if(params.date < new Date())
        return null; //no flight for the past date

    let result= {
        airlines:name,
        date: params.date,
        flights:[]
    };

    for(var i=0;i<5;i++){
        result.flights.push(`${name.toUpperCase().substring(0,3)}${i+1}-${params.from.toLowerCase().substring(0,3)}-${params.to.toLowerCase().substring(0,3)} `);  //[IND-1, IND-2, IND-3]
        //we may take some time to search this out
        for(let x=0;x<100000000;x++)
            ; //to show long running task

    }
    
    return result;
}




function mmtSearch( param ){ 

    let result=[];

    let r1= airlinesSearch("INDIGO", param);
    if(r1){        
        
        result=result.concat(r1.flights);
    }
    let r2= airlinesSearch("GoAir",param);
    if(r2)
        result=result.concat(r2.flights);

    return result;

}
console.warn("please wait for the result");
let result= mmtSearch({from:"delhi",to:"kolkatta", date:Date.parse("2022/04/18")});
console.warn(result);


let result2=mmtSearch({from:"kolkatta",to:"delhi", date:Date.parse("2022/04/22")});
console.warn(result);
