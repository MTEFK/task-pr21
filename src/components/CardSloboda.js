import React from 'react';
import avatar from '../image/Cat03.jpg'
const CardSloboda = () => {
    return (
        <div>
            <h2>Sloboda Denus</h2>
            <p>Студент 41-КІ</p>
            <p>Слобода Денис</p>
            <p>Хобі: компютерні ігри , музика</p>
            <img src={avatar} alt="Фото" width="150" />
        </div>
    );
};
export default CardSloboda;