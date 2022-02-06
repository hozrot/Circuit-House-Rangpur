 import {Toast } from 'native-base';

 const showToast =(valid) => Toast.show({
     text: valid.text,
     buttonText:'Okey',
     position:'top',
     duration: 3000,
     type: valid.type
 });

 export default showToast;