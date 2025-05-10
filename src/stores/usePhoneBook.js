import {create} from "zustand"


const usePhoneBookStores = create((set)=>({
    phoneBook:[],
    addContent:(name, phone_num)=>set((state)=>({
        phoneBook:[...state.phoneBook, {id: Date.now(), name, phone_num}],
    })),
}));

export default usePhoneBookStores;