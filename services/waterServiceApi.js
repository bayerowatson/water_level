const axios = require('axios');

const getDries = async () => {
  try {
    const response = await axios.get('https://waterservices.usgs.gov/nwis/iv/?site=380649081083301&format=json');
    return response.data.value.timeSeries[0].values[0].value[0];
  } catch (error) {
    console.log(error.message)
  }
}

const getGauley = async () => {
  try {
    const response = await axios.get('https://waterservices.usgs.gov/nwis/iv/?site=03189600&format=json');
    return response.data.value.timeSeries[2].values[0].value[0];
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  getDries,
  getGauley
};