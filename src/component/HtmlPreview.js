import { useState } from 'react';
import { saveAs } from 'file-saver';
import { Parser } from 'html-to-react';
import ReactDOMServer from 'react-dom/server';
import Preview from './Preview';
// import downloadBtn from '../../public/download-html-icon.png'


function HtmlPreview() {

  const [companyName, setComapnyName] = useState('Company Name');
  const [headerBgcolor, setHeaderBgcolor] = useState('#1f618d');
  const [headerTextcolor, setHeaderTextcolor] = useState('#000000');
  const handleDownload = () => {
    const parser = new Parser();
    const reactElement = parser.parse(`<html> <head> <style> /* Styles for the page layout */ body { margin: 0; font-family: sans-serif; } .header { background-color: ${headerBgcolor}; color: ${headerTextcolor}; padding: 10px; text-align: center; } .content { padding: 20px; max-width: 800px; margin: 0 auto; } h1 { margin-top: 0; } p { line-height: 1.5; } ul { margin: 0; padding-left: 20px; } li { list-style-type: disc; } </style> </head> <body> <div class="header"> <h1>${companyName}</h1></div> <div class="content"> <h2>About Us</h2> <p> Our company has been providing high-quality products and services for over 20 years. We are committed to delivering the best possible experience for our customers and to creating a positive impact in our community. </p> <h2>Our Services</h2> <ul> <li>Service 1</li> <li>Service 2</li> <li>Service 3</li> </ul> <h2>Our Team</h2> <p> Our team is made up of experienced professionals who are dedicated to delivering top-notch service and support to our customers. We are always looking for talented individuals to join our team. </p> </div> </body> </html>`);
    const htmlString = `<!DOCTYPE html>${ReactDOMServer.renderToStaticMarkup(reactElement)}`;
    const blob = new Blob([htmlString], { type: 'text/html;charset=utf-8' });
    saveAs(blob, 'example.html');
  };
  const handleChange = (e) => {
    setHeaderBgcolor(e.target.value)
  }
  const handleTextColorChange = (e) => {
    setHeaderTextcolor(e.target.value)
  }
  return (
    <>
      <div style={{ display: 'flex', width: 'auto', border: '1px solid black' }}>
        <div style={{ width: '30%', border: '1px solid black' }}>
          <div style={{ padding: "5px", margin: '5px' }}>
            <label htmlFor='headerBgColor'>
              Header Background Color
            </label>
            <input type='color' id="headerBgColor" style={{ float: 'right' }} value={headerBgcolor} onChange={handleChange} />
          </div>
          <div style={{ padding: "5px", margin: '5px' }}>
            <label htmlFor='headerTextcolor'>
              Header Text Color
            </label>
            <input type='color' id="headerTextcolor" value={headerTextcolor} style={{ float: 'right' }} onChange={handleTextColorChange} />
          </div>
          <div style={{ padding: "5px", margin: '5px' }}>
            <label htmlFor='companyName'>
              Company Name
            </label>
            <input type='text' id='companyName' style={{ float: 'right' }} value={companyName} onChange={e => setComapnyName(e.target.value)} />
          </div>
        </div>
        <div style={{ width: '70%', border: '1px solid black' }}>
          <div>
            <Preview srcDoc={`<style> /* Styles for the page layout */ body { margin: 0; font-family: sans-serif; } .header { background-color: ${headerBgcolor}; color: ${headerTextcolor}; padding: 10px; text-align: center; } .content { padding: 20px; max-width: 800px; margin: 0 auto; } h1 { margin-top: 0; } p { line-height: 1.5; } ul { margin: 0; padding-left: 20px; } li { list-style-type: disc; } </style> </head> <body> <div class="header"> <h1>${companyName}</h1></div> <div class="content"> <h2>About Us</h2> <p> Our company has been providing high-quality products and services for over 20 years. We are committed to delivering the best possible experience for our customers and to creating a positive impact in our community. </p> <h2>Our Services</h2> <ul> <li>Service 1</li> <li>Service 2</li> <li>Service 3</li> </ul> <h2>Our Team</h2> <p> Our team is made up of experienced professionals who are dedicated to delivering top-notch service and support to our customers. We are always looking for talented individuals to join our team. </p> </div>`} />
          </div>
        </div>



      </div>
      <div style={{
        textAlign: 'center', fontSize: '1rem', lineHeight: '1.5',
        borderRadius: '0.25rem', padding:'5px', position: 'absolute', right: 0, bottom: '10px'
      }}>
        <button style={{ backgroundColor: 'gray', color: 'white', padding: '10px', cursor: 'pointer' }} onClick={handleDownload}>Download HTML </button>
      </div>
    </>
  );
}

export default HtmlPreview;
