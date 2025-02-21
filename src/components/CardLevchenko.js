import React from 'react';
import avatar from '../images/photo.jpg'
const CardLevchenko = () => {
    return (
        <div>
            <h2>Roman Levchenko</h2>
            <p>Студент 41-КІ</p>
            <p>Хобі: читання, музика</p>
            <img src={avatar} alt="Фото" width="120" />
        </div>
    );
};
export default CardLevchenko;