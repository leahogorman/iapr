import React from "react";

 
function ScholarshipPage(props) {
    return (
        <div>
            <div className="scholarshipObject">
                <object id="pdf" className="pdf" alt="ScholarshpPDF" data="https://iapr.org/docs/IAPR-EC-RS-Call-2018.pdf">Scholarship PDF</object>
            </div>
            <div className='btnContainer'>
                <a className="btn" type="button" href="https://iapr.org/docs/IAPR-EC-RS-Call-2018.pdf" target="_blank" rel="noopener noreferrer">Click for Full Page PDF</a>            </div>
            <style jsx>{`
                .scholarshipObject {
                    height: 100vh;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }
                .pdf {
                    height: 100%;
                    width: 50%;
                }
                .btnContainer {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }
                .btn {
                    font-size: 1.5rem;
                }

            `}</style>
        </div>
        );
}
export default ScholarshipPage;