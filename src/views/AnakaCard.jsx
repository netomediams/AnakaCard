import { Component, createRef } from 'react';
import { toPng, toJpeg } from 'html-to-image';
import thankYouV1 from '../resources/images/cards/Christmas_thank_you_card_v1_800x1075_nameless.jpg'
import thankYouV2 from '../resources/images/cards/Christmas_thank_you_card_v2_800x1075_nameless.jpg'
import thankYouV3 from '../resources/images/cards/Christmas_thank_you_card_v3_800x1075_nameless.jpg'

export default class AnakaCard extends Component {

  constructor(props){
    super(props);
    this.nodeRef = createRef();
    this.state = {
      name: '',
      img: '',
      selected: thankYouV1,
    }
  }



  getImage = async () => {
    try {
      console.log(this.nodeRef)
      const dataURL = await toJpeg(this.nodeRef.current);
      const imageInstance = new Image();
      imageInstance.src = dataURL;
      
      this.setState({img: imageInstance.src, image: imageInstance })
    } catch (error) {
      console.error('you got an error m8ttt', error);
    }
  }


  handleChangeTemplate = (template) => {
    this.setState({selected: template})
  }


  render() {
    return (
      <div className="anakacard">
          <div className="card_config">
            <h2>Select template</h2>
            <div className="template_picker">
              <img src={thankYouV1} alt="" onClick={() => this.handleChangeTemplate(thankYouV1)} className="img-fluid" />
              <img src={thankYouV2} alt="" onClick={() => this.handleChangeTemplate(thankYouV2)} className="img-fluid" />
              <img src={thankYouV3} alt="" onClick={() => this.handleChangeTemplate(thankYouV3)} className="img-fluid" />
            </div>
            <div className="controls">
              <label>Name</label>
              <input type="text" onChange={e => this.setState({name: e.target.value})} />
              <div className="generate">
                <h2>Generate image</h2>
                <div className="buttons">
                  <button className='btn' onClick={this.getImage}>Download jpeg</button>
                  <button className='btn' onClick={this.getImage}>Download png</button>
                  <button className='btn' onClick={this.getImage}>Copy as html</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className='card_container' ref={this.nodeRef}>
            <h1 className='name'>{this.state.name}</h1>
            <img src={this.state.selected} alt="" className='img-fluid' />
          </div>
      </div>  
    );
  }
}

