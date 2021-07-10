import React, { useEffect, useState } from 'react';
import LenderProfile from '../../lender-profile';
import '../../lender-profile.css';
import './add-comments.css';

const IAddComments = () => {

    const [comments, setComments] = useState(null);
    const [error, setError] = useState("");
    const [nxtBtn, setNxtBtn] = useState(false);

    const handleUserComments = (e) => {
        const { value } = e.target;
        setComments(value);
        if (value.length === 1000) {
            setError("Sorry! You can not enter more than 1000 characters.")
            setTimeout(() => {
                setError("")
            }, 3 * 1000)
        } else {setError("")}
    }

    useEffect(() => {
        validateUserComments()
    },[comments])

    const validateUserComments = () => {
        console.log("comments------", comments)
        if (comments && comments.length) {
            setNxtBtn(true);
        } else {
            console.log("its false")
            setNxtBtn(false)
        }
    }

    return (
        <React.Fragment>
            <LenderProfile btnEnable={nxtBtn} displayBtn={true} navPageID={6} data={{comments : comments}}>
                <section className="add-comments-section">
                    <h2 className="add-comments-subheader">Add Comments/Instructions</h2>
                    <div className="add-comments-wrapper" >
                        <textarea className="comments-block" name="comments" maxLength="1000" onChange={handleUserComments}>

                        </textarea>
                        <span className={`error-span ${error ? 'error' : ''}`}>{error}</span>

                    </div>
                </section>
            </LenderProfile>
        </React.Fragment>
    );
}

export default IAddComments;