const Shimmer = () => {
  return (
    <div className="res-container d-flex">
      {Array(10)
        .fill("")
        .map((e,index) => (
          <div key={index} className="shimmer-card">
            <h5 className="shimmerBG"></h5>
            <p className="shimmerBG title-line"></p>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
