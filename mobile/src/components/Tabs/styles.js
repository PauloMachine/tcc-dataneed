import styled from "styled-components/native";

export const Container = styled.View`
  height: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 25, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  margin-left: 10px;
  padding: 20px;
  justify-content: space-between;
`;

export const TabText = styled.Text`
  font-size: 12px;
  color: #fff;
`;
