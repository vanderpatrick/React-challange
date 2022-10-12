import css from './App.module.css';
import SideBar from './components/Sidebar';
// import NavBarSimple from './components/NavBarSimple';
import NavBarForms from './components/NavBarForms';
// import Content from './components/Content';
// import ContentHook from './components/ContentHook';
// import ContentAPI from './components/ContentAPI';
import ContentAPIHooks from './components/ContentAPIHooks';

function App() {
  return (
    <div className={css.App}>
      <SideBar />
      {/* <NavBarSimple /> */}
      <NavBarForms />
      {/* <Content /> */}
      {/* <ContentHook /> */}
      {/* <ContentAPI /> */}
      <ContentAPIHooks />
    </div>
    
  );
}

export default App;