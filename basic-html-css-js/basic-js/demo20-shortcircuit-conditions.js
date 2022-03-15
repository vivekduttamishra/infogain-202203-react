

function truthSeeker(value){

    value && console.log(value," is a truty");

    value || console.error(value, 'is a  falsy');
}


truthSeeker(17);

truthSeeker(null);

truthSeeker(undefined);

truthSeeker("hello");