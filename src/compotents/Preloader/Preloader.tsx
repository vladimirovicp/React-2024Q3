import { Component } from 'react';
import './Preloader.css';

class Preloader extends Component<Record<string, never>>{
    render() {
        return <div className="preloader">loading</div>
    }
}

export default Preloader;