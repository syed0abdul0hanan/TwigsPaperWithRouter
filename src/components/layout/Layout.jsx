import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function Layout(props) {
  return (
    <>
      <Header />
      <main>
        <div>{props.children}</div>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
