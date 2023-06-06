import { PropsWithChildren } from "react";
import Navigation from "./Navigation";

const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Navigation />
    {children}
  </>
);

export default Layout;
