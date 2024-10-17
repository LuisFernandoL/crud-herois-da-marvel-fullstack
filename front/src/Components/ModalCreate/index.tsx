import { useContext, useEffect, useRef } from "react";
import { HeroContext } from "../../Provider/HeroContext";
import { ModalContainerUpdate } from "./style";
import { FormCreate } from "./FormCreate";

export const ModalCreateHero = () => {
  const { setIsOpen } = useContext(HeroContext);
  const buttonRef = useRef(null as any);
  const modalRef = useRef(null as any);

  useEffect(() => {
    const handleOutclick = (e: { target: any }) => {
      if (!modalRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutclick);
    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  useEffect(() => {
    const handleKeydow = (e: { key: string }) => {
      if (e.key === "Escape") {
        buttonRef.current?.click();
      }
    };
    window.addEventListener("keydown", handleKeydow);
    return () => {
      window.removeEventListener("keydown", handleKeydow);
    };
  });

  return (
    <ModalContainerUpdate role="dialog">
      <div ref={modalRef}>
        <FormCreate />
      </div>
    </ModalContainerUpdate>
  );
};
