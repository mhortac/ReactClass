import "./layout.css";

import Header from "./header-component";
import Container from "./container-component";
import Footer from "./footer-component";

export default function Layout() {
  return (
    <div className="main-layout">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}
