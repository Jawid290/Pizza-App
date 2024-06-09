import "./App.css";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  // const hour = new Date().getHours();
  // const openHour = 8;
  // const closeHour = 20;
  // const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're cueently opned");
  // else alert("Sorry. We're currebtly closed");
  // console.log(hour);

  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];

  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <div className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaOjb={pizza} />
          ))}
        </div>
      ) : (
        <p>Sorry we;re working on our menu coma back later :)</p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        photo="./pizzas/Spinaci.jpg"
        ingredients="Tomato and bread"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        photo="./pizzas/Funghi.jpg"
        ingredients="Potato and bread"
        price={20}
      /> */}
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.pizzaOjb.photoName} alt={props.pizzaOjb.name} />
      <div>
        <h3>{props.pizzaOjb.name}</h3>
        <p>{props.pizzaOjb.ingredients}</p>
        <span>{props.pizzaOjb.price}</span>
      </div>
      {/* <h1>Pizza Spinaci</h1>
      <h1>Ingredients:Tomato, mozarella, spinach, and ricotta cheese </h1>
      <img src="./pizzas/spinaci.jpg" alt=" spinici" /> */}
    </div>
  );
}

function Footer() {
  <h2>This is the footer</h2>;
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen
        ? `We're open until ${closeHour}:00 come and see or order online  `
        : `We're closed now, please come tomorrow between ${openHour}:00 and ${closeHour}:00. `}
      {/* {new Date().toLocaleTimeString()} We'er Currently open */}
    </footer>
  );
}

export default App;
