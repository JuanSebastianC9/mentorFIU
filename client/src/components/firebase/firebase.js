import 'firebase/auth';
import app, { auth } from 'firebase'
import config from './config';

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }
    createAccountWithCredentials = (email, password) => this.auth.createUserWithEmailAndPassword(email,password);

    signInWithCredentials = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    signOutWithCredentials = () => this.auth.signOut();
}


export default Firebase;