import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #5A68E6;
  padding-top: 0px;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 390px;
  z-index: 5;
`;

export const Card = styled.View`
  flex: 1;
  background: #fff;
  border-radius: 25px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #eee;;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 0 0 25px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #444;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const CardFooter = styled.View`
  padding: 15px;
  background: #eee;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #444;
`;
