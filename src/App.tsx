import { useEffect, useState } from "react";
import Hero from "./class/Hero";
import useHero from "./hooks/useHero";

const HeroCard = ({
  hero,
  setHero,
  enemy,
}: {
  hero: Hero;
  setHero: React.Dispatch<React.SetStateAction<Hero>>;
  enemy: Hero;
}) => {
  const { attack, upgradeStrength } = useHero(hero, setHero);

  useEffect(() => {
    console.log("updated !", hero.name);
  });

  if (hero.isAlive) {
    return (
      <div>
        <ul>
          <li>name: {hero.name}</li>
          <li>health: {hero.health}</li>
          <li>strength: {hero.strength}</li>
        </ul>
        <br />
        <button onClick={() => attack(enemy)}>Attack</button>
        <button onClick={() => upgradeStrength()}>Upgrade Strength</button>
      </div>
    );
  } else {
    return <div>died</div>;
  }
};

function App() {
  const [hero1, setHero1] = useState<Hero>(
    new Hero({ name: "hero 1", health: 100, strength: 10 })
  );
  const [hero2, setHero2] = useState<Hero>(
    new Hero({ name: "hero 2", health: 100, strength: 10 })
  );

  return (
    <div className="App">
      <HeroCard key={1} hero={hero1} setHero={setHero1} enemy={hero2} />
      <HeroCard key={2} hero={hero2} setHero={setHero2} enemy={hero1} />
    </div>
  );
}

export default App;
