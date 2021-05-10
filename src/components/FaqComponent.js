import React from "react";
import { Fade, Stagger } from 'react-animation-components';

function RenderQuestions({faqitems}) {
    if (faqitems) {
        return (
            <div className="col m-1 text-light">
                <Stagger in>
                    {faqitems.map(faqitem => {
                        return (
                            <Fade in key={faqitem.id}>
                                <div>
                                    <p><strong>{faqitem.question}</strong></p>
                                    <p className="text-muted">{faqitem.answer}</p><br />
                                </div>
                            </Fade>
                        );
                    })}
                </Stagger>
            </div>
        );
    }
    return (<div />);
}

function Faq({faqitems}) {
    if (faqitems) {
        return(
            <div className="container mt-5">
                <div className="row row-noseparator align-items-top">
                    <div className="col-sm-6">
                        <h3>Frequently Asked Questions</h3>
                        <p className="text-light">We know there are a lot of questions regarding tattoos, fortunately you are not alone. Below we have gathered some of the most common questions regarding your new tattoo. If you comb through this and don't see your answer, please feel free to reach out to us through the contact page.
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <img className="img-fluid border" src="/assets/images/questionmark.png" alt="Question mark face" />
                    </div>
                    <RenderQuestions faqitems={faqitems} />
                </div>
            </div>
        );
    }
    return( <div /> );
}

export default Faq;