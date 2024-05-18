import './BankCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function BankCard() {
  return (
    <section className="argentbank-card">
      <div className="argentbank-card-info">
          <p className="argentbank-card-title">Argent Bank Checking (x8349)</p>
          <p className="argentbank-card-amount">$2,082.79</p>
          <p className="argentbank-card-amount-description">Available Balance</p>
      </div>
      <FontAwesomeIcon size="2xl" icon={faChevronRight} className="arrow" />
    </section>
  );
}

export default BankCard;