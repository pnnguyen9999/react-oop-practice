import Hero from "../class/Hero";

type UseHeroReturn = {
  upgradeStrength: () => void;
  attack: (enemy: Hero) => void;
};

const useHero = (
  initialHero: Hero,
  setHero: React.Dispatch<React.SetStateAction<Hero>>
): UseHeroReturn => {
  const attack = (enemy: Hero) => {
    initialHero.attack(enemy);
    setHero(new Hero({ ...initialHero })); // Trigger state update to re-render component
  };

  const upgradeStrength = () => {
    initialHero.upgradeStrength();
    setHero(new Hero({ ...initialHero }));
  };

  return { attack, upgradeStrength };
};

export default useHero;
