import './HomeCard.css';

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