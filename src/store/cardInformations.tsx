import { atom, selector } from "recoil";
import { cardInformationsProps } from "@/utils/interfaces";

export const cardInformationsAtom = atom<cardInformationsProps>({
    key: "cardInformations",
    default: {
        id: "",
        name: "",
        supertype: "",
        level: "",
        number: "",
        artist: "",
        types: [],
        attacks: [],
        weaknesses: [],
        hp: "",
        resistances: [],
        images: {
            small: "",
            large: "",
        }
    },
});

export const showCardInformationsAtom = atom({
    key: "showCardInformations",
    default: false
});