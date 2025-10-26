import './App.css';
import logo from './images/logo.png';

function Header({name, year}) {
  let brand_name = "a-one collection";
  let brand_icon = "👔";
  return ( 
    <header>
      <h1>{brand_name.toUpperCase()}{brand_icon}</h1>
      <h2>Co. Founder : {name.toUpperCase()}</h2>
      <span>©️ {year}</span>
    </header>
  )
}

const items = [
  "Men's wear",
  "Kid's wear",
  "Shirts",
  "Tshirts",
  "Jeans",
  "Lowers"
];

const menuObj = items.map((item, i) => ({
id: i,
title: item
}));

function Main({menuItems}) {
  return (
    <>
    <div>
      <h2>Welcome to the your collection!</h2>
    </div>
    <main>
      <img src={logo} alt="A-One collection brand logo" height={200}/>
      <ul>
        {menuItems.map( (menu) => (
          <li key={menu.id} style={{ listStyleType: "none"}}>{menu.title}</li>
        )
        )}
      </ul>
    </main>
    </>
  )
}


function App() {

  return (
    <div>
      <Header name="aniket meena" year={new Date().getFullYear()} />
      <Main menuItems={menuObj}/>
      <main>
        <h2>We are served most fasionable cloths around</h2>
      </main>
    </div>
  )
}

export default App
