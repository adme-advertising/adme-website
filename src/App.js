import React, { Component } from 'react';
import wordpress from './api/wordpress'
import SlideShow from './components/SlideShow'
import NavBar from './components/NavBar'

class App extends Component {
    state = {
        slideshowItems: []
    }

    componentDidMount = async () => {
        const response = await wordpress.get('/wp/v2/pages/2294258')
        this.setState({
            slideshowItems: response.data.acf.slideshow_items
        })
    }

    render = () => {
        return (
            <div>
                <NavBar />
                <SlideShow images={this.state.slideshowItems} which='image' />
                <SlideShow images={this.state.slideshowItems} which='background_image' />
            </div>
        )
    }
}

export default App;