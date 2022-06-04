import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    setDoc,
} from "firebase/firestore";

export const setDocument = async (db, collectionName, newDocObj, id) => {
    try {
        await setDoc(doc(db, collectionName, id), newDocObj);
    } catch (err) {
        console.error("Error adding / changing document: ", err);
    }
};

export const deleteDocument = async (db, collectionName, id) => {
    try {
        await deleteDoc(doc(db, collectionName, id));
    } catch (err) {
        console.error("Error deleting document: ", err);
    }
};

export const getAllCollectionData = async (db, collectionName) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
    });
    return data;
};
