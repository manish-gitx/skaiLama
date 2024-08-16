import './index.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import AccountSetting from './Components/Layout/project/AccountSettings/AccountSetting';
import AddYourPodcasts from './Components/Layout/project/AddYourPocasts/AddYourPodcasts';
import ComingSoon from './Components/Layout/project/ComingSoon';
import Transcript from './Components/Layout/project/AddYourPocasts/Transcript';
import Login from './pages/Signin';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="login" element={<Login/>} />
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectPage />}>
          <Route index element={<AddYourPodcasts />} />
          <Route path="file/:fileId" element={<Transcript />} />
          <Route path="accountSetting" element={<AccountSetting />} />
          <Route path="comingSoon" element={<ComingSoon />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;