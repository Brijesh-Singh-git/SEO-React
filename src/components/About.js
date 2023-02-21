import React from 'react'


export default function About(props) {

let myStyle = {

    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    

}





  return (
    <div>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 className='my-3'>About Us</h1>
       
                <div className="accordion" id="accordionExample" style={myStyle}>
                    
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong> Analyse Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                   <p>SEO Tools gives you a way to analyse your text quickly and efficiently. Be it word count, character count or anything.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle}data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use </strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>SEO Tools is a free character counter tool that provides insatant character cound & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word / character limit.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle}data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>This word counter application works in any web browser such as Chrome, Firefox, Safari, Edge, Opera. It suits to count characters in facebook, blogs, books, excel document, pdf document, essays, etc.</p>
                </div>
                </div>
            </div>
            </div>
            
    </div>
    </div>
  )
}
