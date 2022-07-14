import React from "react";
import { ResumeItem } from "../ResumeItem";
import * as C from "./styles";
import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaDollarSign,
} from "react-icons/fa";

export const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
      />
      <ResumeItem
        title="Saidas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};
