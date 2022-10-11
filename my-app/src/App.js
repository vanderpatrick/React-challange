import css from './App.module.css';
import SideBar from './components/Sidebar';
// import NavBarSimple from './components/NavBarSimple';
import NavBarForms from './components/NavBarForms';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      <SideBar />
      {/* <NavBarSimple /> */}
      <NavBarForms />
      <Content />
    </div>
    
  );
}

export default App;