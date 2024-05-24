import './HomeCard.css';

/**
 * Ce composant sert à afficher une carte
 * @param {Object} param0 
 * @param {*} param0.image 
 * @param {*} param0.title 
 * @param {*} param0.subtitle 
 * @param {*} param0.alt 
 */
function HomeCard({ image, title, subtitle, alt }) {
  return (
    <div className="card">
      <img src={image} alt={alt} />
      <h3 className="card__title">{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}

export default HomeCard;