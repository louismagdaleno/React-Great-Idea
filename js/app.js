const header = function() {
        return (<header>
         <nav className="nav">
            <a href="services.html">Services</a>
            <a href="#">Product</a>
            <a href="#">Vision</a>
            <a href="#">Features</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
         </nav>
         <img className="logo" src="img/logo.png" alt="Great Idea! Company logo."/>
      </header>);
};


ReactDOM.render(<header/>, document.getElementsByClassName('main-container'));