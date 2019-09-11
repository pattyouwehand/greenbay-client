import * as request from 'superagent'

export const SHOW_ADVERTISEMENTS = 'SHOW_ADVERTISEMENTS'

export function showAdvertisements(advertisements){
  console.log('SHOW_ADVERTISEMENTS:' , SHOW_ADVERTISEMENTS)
  return {
    type: SHOW_ADVERTISEMENTS,
    payload: advertisements
  }
}

export function getAdvertisements(){
  return function(dispatch){
    request('')
    .then(res => {
      console.log('RESPONSE:', res)
      const advertisements = res.body
      dispatch(showAdvertisements({
        advertisements
      }))
      console.log('ADVERTISEMENTS:', advertisements)
    })
    .catch(console.error)
  }
}