import { Appwrite } from 'appwrite';
import { Server } from "../utils/config";

const appwrite = new Appwrite();

class AppwriteService {
  constructor() {
    appwrite.setEndpoint(Server.endpoint).setProject(Server.project);
    this.account = appwrite.account;
    this.database = appwrite.database;
    this.avatars= appwrite.avatars;
  }

  doCreateAccount = (email, password, name) => {
      return this.account.create(email, password, name);
  }

  doLogin = (email, password) => {
      return this.account.createSession(email, password);
  }

  doLogout = () => {
      return this.account.deleteSession('current');
  }

  doGetCurrentUser = () => {
    return this.account.get();
  }

  createDocument= (collectionId, data, read, write) => {
    return this.database.createDocument(collectionId, data, read, write);
  }

  getDocument= (collectionId, documentId) => {
    return this.database.getDocument(collectionId, documentId);
  }

  listDocuments= (collectionId) => {
    return this.database.listDocuments(collectionId);
  }

  updateDocument=(collectionId, documentId, data, read, write) => {
    return this.database.updateDocument(collectionId, documentId, data, read, write);
  }

  deleteDocument= (collectionId, documentId) => {
    return this.database.deleteDocument(collectionId,documentId);
  }

  createCreditAvatar =(cardname) =>{
    return this.avatars.getCreditCard(cardname);
  }

  createFlagAvatar =(flagname) =>{
    return this.avatars.getFlag(flagname);
  }
  createQrAvatar =(text,size) =>{
    return this.avatars.getQR(text,size);
  }
}

export default AppwriteService;