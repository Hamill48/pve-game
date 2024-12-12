import { useNavigate } from 'react-router-dom';

import "./back_button.styles.css";

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button className='back-button' onClick={handleClick}>Vissza</button>
  );
};

export default BackButton;
