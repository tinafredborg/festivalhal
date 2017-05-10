import firebase from 'firebase';

export class AuthService{
  opret(brugernavn: string, email: string, password: string){
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
  login(brugernavn: string, email: string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  logout(){
    firebase.auth().signOut();
  }
}
