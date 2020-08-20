import React from 'react';
import './homepage.styles.css'
import Header from '../../components/header/header.component'
import Footer from '../../components/footer/footer.component'
import Content from '../../components/content/content.component'

function Homepage() {
  return (
        <div className="container-fluid">
        <Header />
        <Content />
        <Footer />
        </div>
  );
}

export default Homepage;