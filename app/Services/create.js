import db from '../Services/firebasebd';
import showToast from './toast';

const createData = async (dbname)=>{

    try {
        await db.collection('tessss').add(dbname);
        showToast({type:'success',text:'data updated'});
        return true;
        
    } catch (error) {
        showToast({type:'danger',text: error.message});
        return false;
        
    }
}

export default create;