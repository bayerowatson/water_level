const waterServiceApi = require('./services/waterServiceApi.js');


const testFunction = async () => {
    try {
        let gauleyLevel = await waterServiceApi.getGauley();
        let dries = await waterServiceApi.getDries();

    console.log(dries)
    return 'success';
    ;}

    catch(err) {
        throw Error(err)
    }
}


testFunction().then(res=>console.log(res)).catch(err=>console.log(err));