function airlinesSearch(name, params, cb){

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

    let i=0;
    let iid= setInterval(()=>{
        result.flights.push(`${name.toUpperCase().substring(0,3)}${i+1}-${params.from.toLowerCase().substring(0,3)}-${params.to.toLowerCase().substring(0,3)} `);  //[IND-1, IND-2, IND-3]
        i++;
        if(i==5){
            clearInterval(iid);
            cb(result); //result will be sent after 5 seconds
        }           

    },1000);

}




function mmtSearch( param , cb){ 

    let result=[];

    let r1= airlinesSearch("INDIGO", param, airlineResult=>{

        result=result.concat(airlineResult.flights);

        cb(result);

    });   

}


console.warn("searching del-kol");
let result= mmtSearch({from:"delhi",to:"kolkatta", date:Date.parse("2022/04/18")}, console.log);


console.log('searching kol-delhi');
let result2=mmtSearch({from:"kolkatta",to:"delhi", date:Date.parse("2022/04/22")}, console.log);


