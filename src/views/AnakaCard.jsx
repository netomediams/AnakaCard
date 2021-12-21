import { Component, createRef } from 'react';
import { toPng, toJpeg } from 'html-to-image';
import thankYouV1 from '../resources/images/cards/Christmas_thank_you_card_v1_800x1075_nameless.jpg'
import thankYouV2 from '../resources/images/cards/Christmas_thank_you_card_v2_800x1075_nameless_s.jpeg'
import thankYouV3 from '../resources/images/cards/Christmas_thank_you_card_v3_800x1075_nameless_s.jpeg'
import {copyToClipboard} from '../utils/copyToClipboard'

export default class AnakaCard extends Component {

  constructor(props){
    super(props);
    this.nodeRef = createRef();
    this.state = {
      name: '',
      img: '',
      selected: thankYouV1,
      nameFontSize: 40,
      nameSpacingOffset: 40,
      nameVerticalOffset: 38,
      // templateName: 'v1',
      // imageLinks: {
      //   'v1': 'https://raw.githubusercontent.com/netomediams/AnakaCard/main/src/resources/images/cards/Christmas_thank_you_card_v1_800x1075_nameless.jpg',
      //   'v2': 'https://raw.githubusercontent.com/netomediams/AnakaCard/main/src/resources/images/cards/Christmas_thank_you_card_v2_800x1075_nameless_s.jpeg',
      //   'v3': 'https://raw.githubusercontent.com/netomediams/AnakaCard/main/src/resources/images/cards/Christmas_thank_you_card_v3_800x1075_nameless_s.jpeg',
      // }
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


  handleChangeTemplate = (e, template) => {
    this.setState({selected: template, templateName: e.target.name})
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
              <img src={thankYouV1} name='v1' alt="" onClick={(e) => this.handleChangeTemplate(e, thankYouV1)} className="img-fluid" />
              <img src={thankYouV2} name='v2' alt="" onClick={(e) => this.handleChangeTemplate(e, thankYouV2)} className="img-fluid" />
              <img src={thankYouV3} name='v3' alt="" onClick={(e) => this.handleChangeTemplate(e, thankYouV3)} className="img-fluid" />
            </div>
            <div className="controls">
              <div className="group">
                <label>Name</label>
                <input type="text" name='name' onChange={e => this.handleInputChange(e)} />
              </div>

              <div className="offsets">

                <div className="group">
                  <label>font size (pixels)</label>
                  <input type="number" name='nameFontSize' onChange={e => this.handleInputChange(e)} value={this.state.nameFontSize}/>
                </div>

                <div className="group">  
                  <label>horizontal   offset</label>
                  <input type="number" name='nameSpacingOffset' onChange={e => this.handleInputChange(e)} value={this.state.nameSpacingOffset}/>
                </div>

                <div className="group">
                  <label>vertical offset</label>
                  <input type="number" name='nameVerticalOffset' onChange={e => this.handleInputChange(e)} value={this.state.nameVerticalOffset}/>
                </div>
              </div>

              <div className="generate">
                <h2>Generate image</h2>
                <div className="buttons"> 
                  <button className='btn' onClick={() => this.getImage('jpeg')}>Download jpeg</button>
                  <button className='btn' onClick={() => this.getImage('png')}>Download png</button>
                  {/* <button className='btn' onClick={() => copyToClipboard('card_container_table')}>Copy as html</button> */}
                </div>
              </div>
            </div>
          </div>
          
          <div id='card_container' className='card_container' ref={this.nodeRef}>
            <img src={this.state.selected} alt="" className='img-fluid' />
            <p className='name' style={{
              fontSize: this.state.nameFontSize + 'px',
              left: this.state.nameSpacingOffset + '%',
              bottom: this.state.nameVerticalOffset + '%',
              }}>{this.state.name}</p>
          </div>
          {/* <div id='card_container' className='card_container' ref={this.nodeRef}>
            <img src={this.state.selected} alt="" className='img-fluid' />
            <p className='name' style={{fontSize: this.state.nameFontSize + 'px'}}>{this.state.name}</p>
          </div>
          <table id='card_container_table' style={{ 
            background: `url(${this.state.imageLinks[this.state.templateName]})`, 
            fontSize: `${this.state.nameFontSize}px`,
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}>
            <tr style={{height: '54%'}}></tr>
            <td style={{
                paddingLeft: '40%',
              }}>  
              <tr style={{
                fontSize: `${this.state.nameFontSize}px`,
                color: 'white'
              }}>
                {this.state.name} 
              </tr>
            </td>
            <tr></tr>

          </table> */}
      </div>  
    );
  }
}

