import firebase from '../Services/firebasebd'

export function  addSingleRoom(room,addComplete){
    firebase.firestore()
    .collection("SingleRooms")
    .add(room) 
    .then((snapshot) => {
        room.id=snapshot.id
        snapshot.set(room)
    })
    .then(()=> addComplete())
    .catch((error)=> console.log(error))

}