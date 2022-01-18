const axios = require("axios");
require("dotenv").config();
const BASEURL = `https://vtu.ng/wp-json/api/v1/`;


const getVTUBalance = async (type, username, password) => {
    try {
        const response = await axios.get(`${BASEURL}${type}?username=${process.env.VTU_USERNAME}&password=${process.env.VTU_PASS}`);
        return response.data
        console.log(response.data);
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
}

const purchaseAirtime = async (type, username, password, phone, network, amount) => {
    try {
        const response = await axios.get(`${BASEURL}${type}?username=${username}&password=${password}&phone=${phone}&network_id=${network}&amount=${amount}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
}

const purchaseData = async (type, username, password, phone, network, plan) => {
    try {
        const response = await axios.get(`${BASEURL}${type}?username=${username}&password=${password}&phone=${phone}&network_id=${network}&variation_id=${plan}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
}

const verifyCustomer = async (type, username, password, customer, service, variation) => {
    try {
        const response = await axios.get(`${BASEURL}${type}?username=${username}&password=${password}&customer_id=${customer}&service_id=${service}&variation_id=${variation}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
}

const subscribeCableTV = async (type, username, password, phone, provider, smartcard, plan) => {
    try {
        const response = await axios.get(`${BASEURL}${type}?username=${username}&password=${password}&phone=${phone}&service_id=${provider}&smartcard_number=${smartcard}&variation_id=${plan}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
}

const subscribeElectricity = async (type, username, password, phone, meter, provider, variation, amount) => {
    try {
        const response = await axios.get(`${BASEURL}${type}?username=${username}&password=${password}&phone=${phone}&meter_number=${meter}&service_id=${provider}&variation_id=${variation}&amount=${amount}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        return error.response.data;
    }
}


//getVTUBalance("balance", process.env.VTU_USERNAME, process.env.VTU_PASS);
//purchaseAirtime("airtime", process.env.VTU_USERNAME, process.env.VTU_PASS, "07034696973", "mtn", "3000");
//purchaseData("data", process.env.VTU_USERNAME, process.env.VTU_PASS, "07034696973", "mtn", "M1024");
//purchaseAirtime("airtime", process.env.VTU_USERNAME, process.env.VTU_PASS, "07034696973", "mtn", "3000");
//verifyCustomer("airtime", process.env.VTU_USERNAME, process.env.VTU_PASS, "07034696973", "mtn", "3000");




module.exports = {
    getVTUBalance,
    purchaseAirtime,
    purchaseData,
    verifyCustomer,
    subscribeCableTV,
    subscribeElectricity
}



