import './App.css'

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
function Main({dishes}) {
  return (
    <ul>
      {dishes.map( (dish) => (
        <li style={{ listStyleType: "none"}}>{dish}</li>
      )
      )}
    </ul>
  )
}


function App() {

  return (
    <div>
      <Header name="aniket meena" year={new Date().getFullYear()} />
      <Main dishes={items}/>
      <main>
        <h2>We are served most fasionable cloths around</h2>
      </main>
    </div>
  )
}

export default App
