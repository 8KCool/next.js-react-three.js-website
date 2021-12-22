import type { NextPage } from "next";
import { ReactNode } from "react";

interface HelloProps {
  children?: ReactNode;
}

const Hello: NextPage<HelloProps> = () => {
  return <div>Hello World!</div>;
};

export default Hello;
