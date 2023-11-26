import { useEffect, useState } from "react";
import axios from "axios";
import { cardInformationsAtom, showCardInformationsAtom } from "@/store/cardInformations"
import { cardInformationsProps } from "@/utils/interfaces";
import { useSetRecoilState } from "recoil";
import { Component, Div } from "./style";
import { Spin, Space } from 'antd';

const ListaComponent = () => {
    const [data, setData] = useState<Array<cardInformationsProps>>();
    const setShowInformations = useSetRecoilState(cardInformationsAtom);
    const setShowCard = useSetRecoilState(showCardInformationsAtom);
    useEffect(() => {
        const requestApi = async () => {
            await axios
                .get(
                    "https://api.pokemontcg.io/v2/cards"
                )
                .then((response) => setData(response.data.data));
        };

        requestApi();
    }, []);

    const handleCard = (element: cardInformationsProps) => {
        setShowInformations({
            id: element.id,
            name: element.name,
            supertype: element.supertype,
            level: element.level,
            number: element.number,
            artist: element.artist,
            types: element.types,
            attacks: element.attacks,
            hp: element.hp,
            resistances: element.resistances,
            weaknesses: element.weaknesses,
            images: {
                small: element.images.small,
                large: element.images.large,
            }
        })
        setShowCard(true)
    }

    return data ? (
        <Component>
            {data.map((element: any) => {
                // eslint-disable-next-line @next/next/no-img-element
                return <Div key={element.id} onClick={() => handleCard(element)}><img src={element.images.small} alt={element.name} width={150} /></Div>
            })}
        </Component>
    ) : (
        <Space size="middle">
            <Spin tip="Loading..." />
        </Space >
    );
};

export default ListaComponent;
