//SurveyField contains logic to render form fields

import React from 'react';

const SurveyFields = ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }}></input>
            <div className='red-text' style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    );
};

export default SurveyFields;
