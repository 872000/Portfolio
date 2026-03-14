import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>MCCSS - CYSSC</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and deployed Java integration modules processing 10,000+ daily API
              calls with 30% improved efficiency. Implemented JSON data exchange services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Operations Associate</h4>
                <h5>Amazon Fulfillment Centre</h5>
              </div>
              <h3>2022-24</h3>
            </div>
            <p>
              Analyzed 10,000+ daily events to identify system bottlenecks improving
              throughput by 20%. Partnered with teams resolving platform incidents.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSc in Computer Science</h4>
                <h5>Sheridan College</h5>
              </div>
              <h3>2022-25</h3>
            </div>
            <p>
              Maintained GPA: 3.8 while completing advanced coursework in distributed
              systems, cloud computing, and software architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
