import { useContext } from "react";
import { HeroContext } from "../../Provider/HeroContext";
import { ModalCreateHero } from "../ModalCreate";
import { HeaderStyle } from "./style";
import { Container } from "../../Styles/global";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const Header = () => {
  const { isOpen, setIsOpen } = useContext(HeroContext);

  return (
    <HeaderStyle>
      <Container className="div-container">
        <div className="div-internal">
          <h1 className="h1-header">Heróis da Marvel 2.0</h1>
          <button className="btn-header" onClick={() => setIsOpen(true)}>
            <AiOutlinePlusCircle size={24} />
          </button>
          {isOpen ? <ModalCreateHero /> : null}
        </div>
      </Container>
    </HeaderStyle>
  );
};
