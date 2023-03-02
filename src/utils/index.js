import Cookies from 'universal-cookie';

const cookies = new Cookies();


export const getCookies = (key) => {
    const cookie = cookies.get(key);
    if (cookie) {
        return cookie;
    }
    return null;
}


export const setCookies = (key, value, options) => {
    const cookie = cookies.get(key);
    const expiryDate= cookie?.expiryDate
    // delete value['expiryDate']
    // console.log(value,'deleted');
    if (cookie) {
    // if (cookie && options.timer !== 'dont update') {
        cookies.set(key, {...value, expiryDate}, {
            ...options,
            path: '/',
            
            expires: new Date(cookie?.expiryDate)
        });
    } 
    else {
        const expiryDate = new Date(new Date().getTime() + 1000 * 60 * 120);
        cookies.set(key, { ...value, expiryDate }, {
            ...options,
            path: '/',
            expires: expiryDate
        });
    }

}



    export const delCookies = (key, options) => {
          
            cookies.remove(key, {
                options,
               
            });
        }
    