import firebase from 'firebase';

export class AuthService{
  opret( email: string, password: string){
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
  login( email: string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  logout(){
    firebase.auth().signOut();
  }
}
