import { get } from './api';

get('/websites')
  .then(({ data }) => {
    console.log(data)
  })
  .catch(console.error);

get('/websites/info')
  .then(({ data }) => {
    console.log(data)
  })
  .catch(console.error);

get('/listings/cities')
  .then(({ data }) => {
    console.log(data)
  })
  .catch(console.error);
