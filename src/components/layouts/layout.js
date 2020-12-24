import Header from "components/layouts/layout-header";
import Footer from "components/layouts/layout-footer";
import Container from "components/layouts/layout-container";

import "./layout.css";

export default function Layout() {
  return (
    <div className="main-layout">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}
