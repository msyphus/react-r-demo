import instance from '../axiosSetup';

export const getSeasonalData = () => instance.get('/bananas/seasons');
export const getBananaTypes = () => instance.get('/bananas/types');