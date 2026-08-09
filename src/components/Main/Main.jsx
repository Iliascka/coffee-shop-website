import ReservationForm from "../ReservationForm/ReservationForm";
import "./Main.css";
import Menu from "../Menu/Menu";
import Recipes from "../Recipes/Recipes";
import About from "../About/About";

function Main() {
  return (
    <main className="content">
      <Recipes />
      <ReservationForm />
      <Menu />
      <About />
    </main>
  );
}

export default Main;
