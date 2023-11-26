/* eslint-disable @next/next/no-img-element */
import { Col, Row, Typography } from "antd";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
    cardInformationsAtom,
    showCardInformationsAtom,
} from "@/store/cardInformations";
import { LogoutOutlined } from "@ant-design/icons";
import { CardComponent, Img } from "./style";

const App: React.FC = () => {
    const information = useRecoilValue(cardInformationsAtom);
    const setShowCard = useSetRecoilState(showCardInformationsAtom);

    return (
        <CardComponent title={`${information.name}`} bordered={true}>
            <Row>
                <Col>
                    <Img src={information.images.large} alt={`${information.name}`} />
                </Col>
                <Col>
                    <Typography>Artist: {information.artist}</Typography>
                    <Typography>HP: {information.hp}</Typography>
                    <Typography>Number: {information.number}</Typography>
                    <Typography>Supertype: {information.supertype}</Typography>
                    <Typography>Types: {information.types.at(0)}</Typography>
                    <Typography>Level: {information.level}</Typography>
                    {information.attacks ? (
                        <Typography>
                            Attack: {information.attacks.at(0)!.name} -{" "}
                            {information.attacks.at(0)!.text}{" "}
                            {information.attacks.at(0)!.damage ? <p>Damage: {information.attacks.at(0)!.damage}</p> : <></>}
                        </Typography>
                    ) : (
                        <></>
                    )}
                    {information.resistances ? (
                        <Typography>
                            Resistances: {information.resistances.at(0)!.type}; Value:
                            {information.resistances.at(0)!.value}
                        </Typography>
                    ) : (
                        <></>
                    )}
                    {information.weaknesses ? (
                        <Typography>
                            Weaknesses: {information.weaknesses?.at(0)!.type}; Value:
                            {information.weaknesses?.at(0)!.value}
                        </Typography>
                    ) : (
                        <></>
                    )}
                </Col>
                <LogoutOutlined onClick={() => setShowCard(false)} />
            </Row>
        </CardComponent>
    );
};

export default App;
