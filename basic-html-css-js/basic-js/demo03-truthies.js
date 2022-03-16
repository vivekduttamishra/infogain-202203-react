

function truthSeeker( value ){

    if(value)
        console.log(value," is considered a Truthy");
    else
        console.error(value, 'is considered a Falsy');
}

truthSeeker(true);
truthSeeker(false);

truthSeeker(17);
truthSeeker(-4);
truthSeeker(0.01);
truthSeeker(0);

truthSeeker(10/0);

truthSeeker("Hello World"/5);  //division will not be NaN

truthSeeker(new Date());

truthSeeker([1,2,3]);

truthSeeker([]);


truthSeeker("false"); //this is not boolean false, it is word 'false'. non empty string is always a truthy.

truthSeeker("");

truthSeeker(null);

truthSeeker(undefined);