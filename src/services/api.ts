import axios from 'axios';

const api = axios.create({ baseURL: 'https://piupiuwer.polijrinternal.com' });

const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjgxMjM4NTMsImV4cCI6MTY2ODIxMDI1Mywic3ViIjoiM2MwZTU4OWQtZGFhMi00N2Q2LTg5MGItM2EyNGMxMzZiNDIzIn0.0G-HWod56zGw0jUdEbCzLXU27TDwpvmg5-9b08YtVrw';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(api.defaults.headers as any).Authorization = `Bearer ${token}`;

export default api;
