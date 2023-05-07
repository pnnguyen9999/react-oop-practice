import React, { useEffect, useState } from "react";
import Hero, { ElementType } from "../class/Hero";
import useHero from "../hooks/useHero";

type Props = {};

const HeroCard = ({
  hero,
  setHero,
  enemy,
}: {
  hero: Hero;
  setHero: React.Dispatch<React.SetStateAction<Hero>>;
  enemy: Hero;
}) => {
  const [testState, setTestState] = useState(1);
  const { attack, upgradeStrength } = useHero(hero, setHero);

  useEffect(() => {
    // console.log("updated => !", hero.name);
  });

  if (hero.isAlive) {
    return (
      <div>
        {hero.negativeElement.length > 0 && (
          <div>
            [
            {hero.negativeElement.map((element, index) => (
              <div key={index}>{element},&nbsp;</div>
            ))}
            ]
          </div>
        )}
        <div style={{ color: "#ff0000", fontWeight: "bold" }}>
          {hero.currentStatus && (
            <div>{hero.currentStatus.toUpperCase()} negative effect !!</div>
          )}
        </div>
        <ul>
          <li>{testState}</li>
          <li>name: {hero.name}</li>
          <li>health: {hero.health}</li>
          <li>strength: {hero.strength}</li>
        </ul>
        <br />
        <button onClick={() => setTestState((prev) => prev + 1)}>test</button>
        <button onClick={() => attack(enemy)}>Attack</button>
        <button onClick={() => upgradeStrength()}>Upgrade Strength</button>
      </div>
    );
  } else {
    return <div>died</div>;
  }
};

export default HeroCard;
