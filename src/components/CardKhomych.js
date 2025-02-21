import React from 'react';
import avatar from '../images/Roman.jpg'
const CardKhomych = () => {
    return (
        <div>
            <h2>Roman Khomych</h2>
            <p>Студент 41-КІ</p>
            <p>Хобі: ігри, музика</p>
            <img src={avatar} alt="Фото" width="120" />
        </div>
    );
};
export default CardKhomych;