export default function Rating({ rating, setRating }) {
    return (
      <div className="rating">
        <h4>Rate this conversation</h4>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((r) => (
            <span
              key={r}
              className={`star ${r <= rating ? 'filled' : ''}`}
              onClick={() => setRating(r)}
            >
              {r <= rating ? '★' : '☆'}
            </span>
          ))}
        </div>
      </div>
    );
  }