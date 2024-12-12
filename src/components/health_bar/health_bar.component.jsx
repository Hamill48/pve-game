import "./health_bar.styles.css"

const HealthBar = ({ currentHealth, maxHealth }) => {
    const healthPercentage = (currentHealth / maxHealth) * 100;
  
    return (

        <div
          className="health-bar"
          style={{ width: `${healthPercentage}%` }}
        >{currentHealth}</div>

    );
  };
  
  export default HealthBar;  