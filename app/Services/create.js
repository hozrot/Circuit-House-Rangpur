import db from '../Services/firebasebd';
import showToast from './toast';

const createData = async (room)=>{

    try {
        await db.collection('rooms').add(room) ;
        showToast({type:'success',text:'data updated'});
        return true;
        
    } catch (error) {
        showToast({type:'danger',text: error.message});
        return false;
        
    }
}

export default createData;