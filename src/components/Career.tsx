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
                <h4>Software Developer</h4>
                <h5>MCCSS - CYSSC</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered backend components for the Child Protection Information Network (CPIN)
              supporting thousands of daily case processing workflows using Java and Spring.
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
              Monitored high-volume operational workflows supporting 10,000+ daily events.
              Diagnosed process inefficiencies contributing to 20% improvement in efficiency.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2020-21</h3>
            </div>
            <p>
              Developed custom full-stack web applications for local businesses using React,
              Node.js, and SQL, enabling digital booking and inventory tracking.
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
              Capstone: WalkinWatch (100% Evaluation). Delivered a real-time clinic queue
              and token management platform using React, Node.js, WebSockets, and PostgreSQL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
