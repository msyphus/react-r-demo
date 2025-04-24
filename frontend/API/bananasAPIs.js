import instance from '../axiosSetup';

export const getSeasonalData = () => instance.get('/bananas/seasons');
