import { useEffect, useState } from "react";
import Hero, { ElementType } from "./class/Hero";
import useHero from "./hooks/useHero";
import HeroCard from "./components/HeroCard";

function App() {
  const [hero1, setHero1] = useState<Hero>(
    new Hero({
      name: "hero 1",
      health: 100,
      strength: 10,
      element: ElementType.Fire,
    })
  );
  const [hero2, setHero2] = useState<Hero>(
    new Hero({
      name: "hero 2",
      health: 100,
      strength: 10,
      element: ElementType.Thunder,
    })
  );

  const [hero3, setHero3] = useState<Hero>(
    new Hero({
      name: "hero 3",
      health: 100,
      strength: 10,
      element: ElementType.Water,
    })
  );

  const [hero4, setHero4] = useState<Hero>(
    new Hero({
      name: "hero 4",
      health: 100,
      strength: 10,
      element: ElementType.Thunder,
    })
  );

  return (
    <div className="App">
      <HeroCard hero={hero1} setHero={setHero1} enemy={hero3} />
      <HeroCard hero={hero2} setHero={setHero2} enemy={hero3} />
      <HeroCard hero={hero3} setHero={setHero3} enemy={hero1} />
      <HeroCard hero={hero4} setHero={setHero4} enemy={hero1} />
    </div>
  );
}

export default App;
