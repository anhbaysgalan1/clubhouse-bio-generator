import db from "."



const getId = () => db.collection("bios").add({
        text: "",
    })
    .then((docRef => {
        console.log("Таны BIO хадгалагдлаа ID: ", docRef.id);
        return docRef.id
    }))
    .catch((error) => {
        console.error("Bio үүсгэхэд алдаа гарлаа: ", error);
        return Error("DB Error")
    })

const updateDocument = (id: string, text: string)=> db.collection("bios").doc(id).set({
        text
    })
    .then(() => {
        console.log("Document амжилттай хадагалагдлаа!");
    })
    .catch((error) => {
        console.error("Document шинэчлэхэд алдаа гарлаа: ", error);
    })

const getDocument = (id: string) => {

    const docRef = db.collection("bios").doc(id);

return docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document мэдээлэл:", doc.data());
        return doc.data()
    }
        // doc.data() will be undefined in this case
        console.log("Ийм bio байхгүй байна!");
        return Error("DB Error")
}).catch((error) => {
    console.log("Document ийг татахад алдаа гарлаа:", error);
});

}

export default {getId, getDocument, updateDocument}