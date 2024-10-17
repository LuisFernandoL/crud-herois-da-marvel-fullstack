import { useContext } from "react";
import { IHero } from "../../Provider/@types";
import { HeroContext } from "../../Provider/HeroContext";
import { StyledCard } from "./style";
import { MdOutlineEdit } from "react-icons/md";
import { TfiTrash } from "react-icons/tfi";

interface IHeroCard {
  hero: IHero;
}

export const HeroCard = ({ hero }: IHeroCard) => {
  const { removeHero, pageUpdate } = useContext(HeroContext);
  return (
    <StyledCard>
      <li key={hero.id} className="li-card">
        <div className="div-typhograf">
          <h2>Nome do herói:</h2>
          <h1>{hero.name}</h1>
          <h2>Habilidades do herói:</h2>
          <h1>{hero.skills}</h1>
          <h2>Origem do herói:</h2>
          <h1>{hero.origin}</h1>
        </div>
        <div className="div-btn">
          <button className="bnt-card-update" onClick={() => pageUpdate(hero)}>
            <MdOutlineEdit size={24} />
          </button>
          <button
            className="bnt-card-delete"
            onClick={() => removeHero(hero.id)}
          >
            <TfiTrash size={22} />
          </button>
        </div>
      </li>
    </StyledCard>
  );
};
