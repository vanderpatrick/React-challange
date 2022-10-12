import css from './App.module.css';
import SideBar from './components/Sidebar';
// import NavBarSimple from './components/NavBarSimple';
import NavBarForms from './components/NavBarForms';
// import Content from './components/Content';
import ContentHook from './components/ContentHook';

function App() {
  return (
    <div className={css.App}>
      <SideBar />
      {/* <NavBarSimple /> */}
      <NavBarForms />
      {/* <Content /> */}
      <ContentHook />
    </div>
    
  );
}

export default App;