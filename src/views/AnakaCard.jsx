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
      nameFontSize: 40,
    }
  }



  getImage = async (format) => {
    try {
      let dataURL;
      
      if (format === 'jpeg') {
        dataURL = await toJpeg(this.nodeRef.current);
      } else {
        dataURL = await toPng(this.nodeRef.current);
      }
      
      const imageInstance = new Image();
      imageInstance.src = dataURL;
      
      this.setState({img: imageInstance.src })
      this.download(imageInstance.src, 'Thank you card', format)

    } catch (error) {
      console.error(error);
    }
  }

  download = (data, fileName, extension) => {
    const link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', `${fileName}.${extension}`);
    link.click();
    link.remove();
  }


  handleChangeTemplate = (template) => {
    this.setState({selected: template})
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  render() {
    return (
      <div className="anakacard">
          <div className="card_config">
            <h2>Select a template</h2>
            <div className="template_picker">
              <img src={thankYouV1} alt="" onClick={() => this.handleChangeTemplate(thankYouV1)} className="img-fluid" />
              <img src={thankYouV2} alt="" onClick={() => this.handleChangeTemplate(thankYouV2)} className="img-fluid" />
              <img src={thankYouV3} alt="" onClick={() => this.handleChangeTemplate(thankYouV3)} className="img-fluid" />
            </div>
            <div className="controls">
              <label>Name</label>
              <input type="text" name='name' onChange={e => this.handleInputChange(e)} />
              <label>font size (pixels)</label>
              <input type="number" name='nameFontSize' onChange={e => this.handleInputChange(e)} value={this.state.nameFontSize}/>
              <div className="generate">
                <h2>Generate image</h2>
                <div className="buttons">
                  <button className='btn' onClick={() => this.getImage('jpeg')}>Download jpeg</button>
                  <button className='btn' onClick={() => this.getImage('png')}>Download png</button>
                  <button className='btn' onClick={() => {}}>Copy as html</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className='card_container' ref={this.nodeRef}>
            <img src={this.state.selected} alt="" className='img-fluid' />
            <p className='name' style={{fontSize: this.state.nameFontSize + 'px'}}>{this.state.name}</p>
          </div>
      </div>  
    );
  }
}

