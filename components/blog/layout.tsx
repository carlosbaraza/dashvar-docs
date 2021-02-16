import { Navbar } from "../docs/Navbar";
import Footer from "./footer";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <div className="min-h-screen">
        <div className="container mx-auto px-5">
          <Navbar />
        </div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
