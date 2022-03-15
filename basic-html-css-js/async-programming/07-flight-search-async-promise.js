
/* what is a search parameter? 

    {
        from : 'bangalore',
        to: 'jaipur',
        date: '12/12/20219'
    
    }

*/




function airlinesSearch(name, params){

    const p = new Promise ( function(resolve, reject){

        //the real long running task. should be schduled for later
        setTimeout(function(){
            //do your logic here

            let cities=["delhi","mumbai","bangalore","kolkatta","chennai","hyderabad","jaipur"]

            let flights=[] ; //we should return 5 results. 
        
            if( !params)
                return reject(new Error("No parameter"));
            
            if(!params.from || !cities.includes(params.from))
                return reject(new Error("Missing invalid from city:"+params.from));
            
            if( !params.to || !cities.includes(params.to) )
                return reject( new Error('Missing Invalid to city:'+params.to));
        
            if(params.date < new Date())
                return reject(new Error("Invalid Date."));
        
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
                    return resolve(result); //result will be sent after 5 seconds
                }           
        
            },1000);
        





        },10) // do it after 10ms
    });


    return p;
    
}




function mmtSearch( param ){ 

    let result=[];

    let mmtPromise= new Promise((resolve,reject)=>{

        let airlinePromise= airlinesSearch("INDIGO", param);

        airlinePromise
            .then( r =>{
                result= result.concat(r.flights);
                resolve(result);
        }).catch(err=>{
            reject(err);
        });
    })

    return mmtPromise;

}


console.log("searching del-kol");

mmtSearch({from:"delhi",to:"kolkatta", date:Date.parse("2022/04/18")})
    .then(console.log)
    .catch(e=>console.log(e.message));



console.log('searching kol-delhi');
mmtSearch({from:"kolkatta",to:"dehi", date:Date.parse("2022/04/22")})
    .then(console.log)
    .catch(e=>console.log(e.message));







