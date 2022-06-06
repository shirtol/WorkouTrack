import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    setDoc,
    where,
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

export const getAllCollectionData = async (db, collectionName, user) => {
    const q = query(
        collection(db, collectionName),
        where("owner", "==", user?.uid)
    );
    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
    });
    return data;
};

export const addDocument = async (db, collectionName, newDocObj) => {
    try {
        await addDoc(collection(db, collectionName), newDocObj);
    } catch (err) {
        console.error(err);
    }
};
