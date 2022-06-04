import { addDoc, collection } from "firebase/firestore";

export const addNewDoc = async (db, newDocObj) => {
    try {
        const docRef = await addDoc(collection(db, "workout"), newDocObj);
        return docRef;
    } catch (err) {
        console.error("Error adding document: ", err);
    }
};
