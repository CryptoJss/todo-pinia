import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase'

async function GetAllTodos (document = 'todos') {
    const querySnapshot = await getDocs(collection(db, document));
    const todosList = []
    querySnapshot.forEach((doc) => {
        const { descripcion, estado } = doc.data();

        const todoListObj = { descripcion, estado, id: doc.id }
        todosList.push(todoListObj)
    });
    return todosList
}

async function AddTodo (todoToAdd = {},document = 'todos') {
    const docRef = doc(collection(db, document))
    await setDoc(docRef, todoToAdd);
}

async function DeleteTodo (todoToDeletePerId, document = 'todos' ) {
    await deleteDoc(doc(db, document, todoToDeletePerId));
}

async function DeleteCompletedTodo (document = 'todos' ) {
    const querySnapshot = await getDocs(collection(db, document));
    querySnapshot.forEach((element) => {
        const { estado } = element.data()
        if(estado)
        {
            deleteDoc(doc(db, document, element.id))
        }
    });
}

export { GetAllTodos, AddTodo, DeleteTodo, DeleteCompletedTodo }