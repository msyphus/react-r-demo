import instance from '../axiosSetup';

export const getHistogram = (data) => instance.get('/RRoutes/histogram', {params: data});
export const getMax = (data) => instance.get('/RRoutes/max', {params: data});