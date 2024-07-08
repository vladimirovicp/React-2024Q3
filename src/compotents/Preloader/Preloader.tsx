import { Component } from 'react';

class Preloader extends Component<Record<string, never>>{
    render() {
        return <div className="preloader">loading</div>
    }
}

export default Preloader;