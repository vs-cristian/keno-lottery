import React from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import AppHeader from "./components/AppHeader";
import Phone from "./components/Phone";
import GameScreen from "./screens/Game";
import IntroScreen from "./screens/Intro";
import SettingsScreen from "./screens/Settings";

const Root = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const App: React.FC = () => {
  return (
    <Root>
      <Phone>
        <AppContent>
          <AppHeader />
          <Routes>
            <Route index element={<IntroScreen />} />
            <Route path="game/*" element={<GameScreen />} />
            <Route path="options" element={<SettingsScreen />} />
          </Routes>
        </AppContent>
      </Phone>
    </Root>
  );
};

export default App;
