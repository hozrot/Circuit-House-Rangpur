import firebase from '../Services/firebasebd'

export function  addSingleRoom(rooms,addComplete){
    firebase.firestore()
    .collection("rooms")
    .add(rooms) 
    .then((snapshot) => {
        rooms.id=snapshot.id
        snapshot.set(rooms)
    })
    .then(()=> addComplete())
    .catch((error)=> console.log(error))

}