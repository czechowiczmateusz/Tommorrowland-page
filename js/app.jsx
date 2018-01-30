import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header/';
import Main from './components/Main/';
import Article from './components/Article/';
import Background from './components/Background/';
import Gallery from './components/Gallery/';
import Footer from './components/Footer/';
require('.././styles/style.scss');

class App extends React.Component {
    render(){
        return <div>
            <Header></Header>
            <Main></Main>
            <Article years="2017"></Article>
            <Background background="firstbackground"></Background>
            <Background background="firstbackground"></Background>
            <Article years="2016"></Article>
            <Background background="secondbackground"></Background>
            <Gallery></Gallery>
            <Background background="thirdbackground"></Background>
            <Footer></Footer>
        </div>
    }
}

document.addEventListener("DOMContentLoaded",function(){
    ReactDOM.render(
        <App/>,
        document.getElementById("app"),
    )
});