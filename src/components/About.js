import React from 'react'
// import mode from '../App'

export default function About(props) {
    // const [myStyle, setmyStyle] = useState({
    //     color: '#1d2633',
    //     backgroundColor: 'white',
    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#1d2633',
        backgroundColor: props.mode === 'dark' ? '#1d2633' : 'white',
        borderColor: props.mode === 'dark' ? 'white' : '#1d2633',
        '.accordion-button.color': props.mode === 'dark' ? 'white !important' : '#1d2633 !important',
        '.accordion-button.backgroundColor': props.mode === 'dark' ? '#1d2633 !important' : 'white !important'
    }



    // const changeMode = (props) => {
    //     if (mode === 'light') {
    //         setmyStyle({
    //             color: '#1d2633',
    //             backgroundColor: 'white',

    //         })
    //     }
    //     else {
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: '#1d2633',
    //         })
    //     }
    // }


    // const [btnText, setbtnText] = useState('Enable Dark Mode')

    // const toggleStyle = () => {
    //     if (myStyle.color === '#1d2633') {
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: '#1d2633',
    //             // border: '1px solid white'
    //         })
    //         setbtnText('Enable Light Mode')
    //     }
    //     else {
    //         setmyStyle({
    //             color: '#1d2633',
    //             backgroundColor: 'white'
    //         })
    //         setbtnText('Enable Dark Mode')
    //     }
    // }

    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong>
                                {/* Browser Compatible */}
                                Analyse your text
                            </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                            {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>
                                Free to use
                                {/* Browser Compatible */}
                            </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                            {/* <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <strong>
                                Browser Compatible
                            </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                            {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button onClick={toggleStyle} className="btn btn-primary ">{btnText}</button>
            </div> */}
        </div>
    )
}
