import React, { Component }from "react";
import Card from "../components/Card/Index";
import Container from "../components/Container/Index";
import Project from "../components/Project/Index";




class Portfolio extends Component {

    state = [
        {
        title: "Burger-logger",
        image: "image/burger.png",
        alt: "Burger",
        deployed: "https://infinite-dawn-87221.herokuapp.com/",
        code: "https://github.com/Trattana95/burger-logger.git",
    },
    {
        title: "Weather-Dashboard",
        image: "image/Weather.png",
        alt: "Weather-Dashboard",
        deployed: "https://trattana95.github.io/Weather-Dashboard/",
        code: "https://github.com/Trattana95/Weather-Dashboard.git",
    },
    {
        title: "Travel-Advisory",
        image: "image/HHH.png",
        alt: "Travel",
        deployed: "https://hhh-603.github.io/Project-1_Travel-Advisory-Website/",
        code: "https://github.com/HHH-603/Project-1_Travel-Advisory-Website.git",
    },
    {
        title: "Day-Planner",
        image: "image/DayPlanner.png",
        alt: "Day-planner",
        deployed: "https://guarded-inlet-46841.herokuapp.com/",
        code: "https://github.com/Trattana95/Day-Planner.git",
    },
    {
        title: "Employee-Directory",
        image: "image/Emp-Dir.png",
        alt: "Employee-Directory",
        deployed: "https://trattana95.github.io/employee-directory/",
        code: "https://github.com/Trattana95/employee-directory.git",
    },
    {
        title: "online-offline Budget Tracker",
        image: "image/Online-Offline.png",
        alt: "Budget Tracker",
        deployed: "https://pure-refuge-02314.herokuapp.com/",
        code: "https://github.com/Trattana95/Online-Offline-Budget-Tracker.git",
    },
    ];

    render() {
        return (
          <div>
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Projects!</h1>
          <p class="lead">Here you can view some projects i have comepleted.</p>
        </div>
        </div>
          
                <Container>
                    <Card>
                       
                            <Project
                                title={this.state[0].title}
                                image={this.state[0].image}
                                alt={this.state[0].alt}
                                deployed={this.state[0].deployed}
                                code={this.state[0].code}
                            ></Project>
                            <Project
                                title={this.state[1].title}
                                image={this.state[1].image}
                                alt={this.state[1].alt}
                                deployed={this.state[1].deployed}
                                code={this.state[1].code}
                            ></Project>
                            <Project
                                title={this.state[2].title}
                                image={this.state[2].image}
                                alt={this.state[2].alt}
                                deployed={this.state[2].deployed}
                                code={this.state[2].code}
                            ></Project>
                      
                            <Project
                                title={this.state[3].title}
                                image={this.state[3].image}
                                alt={this.state[3].alt}
                                deployed={this.state[3].deployed}
                                code={this.state[3].code}
                            ></Project>
                            <Project
                                title={this.state[4].title}
                                image={this.state[4].image}
                                alt={this.state[4].alt}
                                deployed={this.state[4].deployed}
                                code={this.state[4].code}
                            ></Project>
                            <Project
                                title={this.state[5].title}
                                image={this.state[5].image}
                                alt={this.state[5].alt}
                                deployed={this.state[5].deployed}
                                code={this.state[5].code}
                            ></Project>
                    </Card>
                </Container>
            </div >
        );
    }
}
export default Portfolio;