export interface attackProps {
    name: string;
    text: string;
    damage?: string;
}

export interface attributesProps {
    type: string;
    value: string;
}

export interface cardInformationsProps {
    id: string;
    name: string;
    supertype: string;
    level: string;
    hp: string;
    number: string;
    artist: string;
    types: Array<string>;
    attacks?: Array<attackProps>;
    weaknesses?: Array<attributesProps>;
    resistances?: Array<attributesProps>;
    images: {
        small: string;
        large: string;
    }
}