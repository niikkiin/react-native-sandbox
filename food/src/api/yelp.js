import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 2zxTa6GidDU7ExV0vPUPKwxyVGStINRCGkiw96qmoDpxD_G2p5a0noyceyJorFcTSwvUR_5Cwaq9COeeSmsX09NGo0rdDnWlmAcder0vz1PZerJzoO8r6o8aFQtfYHYx',
  },
});
