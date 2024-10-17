import { useContext } from "react";
import { HeroContext } from "../../Provider/HeroContext";
import { HeroCard } from "../HeroCard";
import { Container } from "../../Styles/global";
import { StyleListHero } from "./style";

export const ListHero = () => {
  const { heroes } = useContext(HeroContext);

  return (
    <StyleListHero>
      <Container className="div-container-list">
        <ul>
          {heroes?.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </ul>
      </Container>
    </StyleListHero>
  );
};
