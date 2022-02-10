import firebase from '../Services/firebasebd'

export function  addSingleGuest(guests,addComplete){
    firebase.firestore()
    .collection("guests")
    .add(guests) 
    .then((snapshot) => {
        guests.id=snapshot.id
        snapshot.set(guests)
    })
    .then(()=> addComplete())
    .catch((error)=> console.log(error))

}