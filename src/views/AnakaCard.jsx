import { Component, createRef } from 'react';
import { toPng, toJpeg } from 'html-to-image';

export default class AnakaCard extends Component {

  constructor(props){
    super(props);
    this.nodeRef = createRef();
    this.state = {
      img: '',
      image: null
    }
  }


  getImage = async () => {
    console.log('fired')
    try {
      console.log(this.nodeRef)
      const dataURL = await toPng(this.nodeRef.current);
      const imageInstance = new Image();
      imageInstance.src = dataURL;
      
      this.setState({img: imageInstance.src, image: imageInstance })
    } catch (error) {
      console.error('you got an error m8ttt', error);
    }
  }


  render() {
    return (
      <div className="homepage">
          <a
            ref={this.nodeRef}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{backgroundColor: '#282c34'}}
          >
            Learn React
          </a>
          <button onClick={this.getImage}>make image</button>
          <img src={this.state.img} alt='image here' />
          {this.image && this.image}
      </div>  
    );
  }
}

