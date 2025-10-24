export const API_KEY = "AIzaSyDabQeeEKSZfDrHB4QXe9vhN4KaW_CEpWg";


export const value_convertor = (value) => {
    if(value > 1000000) {
        return Math.floor(value/1000000) + 'M';
    }
    else if (value > 1000) {
        return Math.floor(value/1000) + 'k';
    } 
    else return value;
}