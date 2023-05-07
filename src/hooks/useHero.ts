import Hero, { ElementEffectStatus } from "../class/Hero";

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
    const doNegativeEffect = () => {
      if (enemy.currentStatus !== ElementEffectStatus.NONE) {
        enemy.negativeEffect();
        console.log(
          `tấn công hệ ${enemy.currentStatus} vào ${enemy.name}, máu hiện tại ${enemy.health}`
        );
        setHero(new Hero({ ...initialHero }));
      }
    };

    const intervalId = setInterval(doNegativeEffect, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      enemy.removeElementAttack();
      setHero(new Hero({ ...initialHero }));
    }, 3000);
    setHero(new Hero({ ...initialHero })); // Trigger state update to re-render component
  };

  const upgradeStrength = () => {
    initialHero.upgradeStrength();
    setHero(new Hero({ ...initialHero }));
  };

  return { attack, upgradeStrength };
};

export default useHero;
