import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import styles from "./App.scss";

const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      This is the Inforamation Page
      <Footer />
    </div>
  );
};

export default App;
