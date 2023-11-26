import { Card } from "antd";
import styled from "styled-components";

export const CardComponent = styled(Card)`
  background: #fff;
  color: #000;
  position: absolute;
  border-radius: 15px;
  height: auto;
  padding: 10px 15px;
  width: auto;
  & .ant-card-head{
    padding: 5px 5px;
  }
  & .ant-row{
    width:100%;
    display:flex;
    justify-content: space-evenly;
  }
`;

export const Img = styled.img`
    width:auto;
    height:250px;
    margin-right:10px;
  }
`;
