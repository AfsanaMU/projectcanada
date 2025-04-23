import React, { useState } from 'react';
import "../App.css";



function Jobs() {
  const [showJobDetail, setShowJobDetail] = useState(false);
  const [jobCount, setJobCount] = useState("5");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobListings, setJobListings] = useState([
    {
      id: 1,
      logo: "https://via.placeholder.com/80?text=M",
      category: "ENGINEERING, SITE ENGINEER, FULL-TIME",
      title: "Telecom Engineer",
      company: "MADRE INTEGRATED ENGINEERING",
      postedTime: "3 days ago",
      postedBy: "hr_madre",
      promoted: true
    },
    {
      id: 2,
      logo: "https://via.placeholder.com/80?text=M",
      category: "ENGINEERING, RIGGER FOREMAN / SUPERVISOR, FULL-TIME",
      title: "Rigging Supervisor",
      company: "MADRE INTEGRATED ENGINEERING",
      postedTime: "5 days ago",
      postedBy: "hr_madre",
      promoted: true
    }
  ]);

  // Sample job details for when a job is clicked
  const jobDetail = {
    title: "Management Accountant (Accountant Manager)",
    created: "February 10, 2025",
    updated: "2 weeks 5 days ago",
    company: "Pioneers Trading",
    organization: "Qatar Engineering House W.L.L",
    category: "Accounting/Finance",
    position: "Management Accountant",
    salaryRange: "QAR 2,001 - QAR 5,000",
    experience: "3-4 Years",
    gender: "Any",
    location: "In-country Hire Only",
    description: "Job description would appear here. This section appears to be incomplete in the example image."
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    
    if (category === "accounting-finance") {
      setJobCount("13 Accounting/Finance");
      setJobListings([
        {
          id: 3,
          logo: "https://via.placeholder.com/80?text=QEH",
          category: "ACCOUNTING/FINANCE, MANAGEMENT ACCOUNTANT, FULL-TIME",
          title: "Management Accountant (Accountant Manager)",
          company: "QATAR ENGINEERING HOUSE W.L.L",
          postedTime: "20 days ago",
          postedBy: "Pioneers Trading",
          promoted: true
        },
        {
          id: 4,
          logo: "https://via.placeholder.com/80?text=OYYO",
          category: "ACCOUNTING/FINANCE, SENIOR ACCOUNTANT, FULL-TIME",
          title: "ACCOUNTANT",
          company: "OYYO",
          postedTime: "25 days ago",
          postedBy: "OYYO HR",
          promoted: true
        }
      ]);
    }
  };

  const handleSearch = () => {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === 'accountant' || searchTerm === 'accounting') {
      handleCategoryClick('accounting-finance');
    }
  };

  const handleJobClick = () => {
    setShowJobDetail(true);
    window.scrollTo(0, 0);
  };

  const handleBackToJobs = () => {
    setShowJobDetail(false);
  };

  const handleApply = (e) => {
    e.preventDefault();
    alert('Application form would open here.');
  };

  const handleShowContact = (e) => {
    e.preventDefault();
    alert('Contact information would be displayed here.');
  };

  return (
    <div>
      {/* Header with Navigation */}
      <header>
        <div className="container">
          <nav className="navbar">
            <a href="index.html" className="logo">
            <img src="/CD.png" alt="Canada Living" />

            </a>
            
            <ul className="nav-links">
              <li><a href="#">Properties</a></li>
              <li><a href="#">Vehicles</a></li>
              <li><a href="#">Classifieds</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#" className="active">Jobs</a></li>
              <li><a href="#">More</a></li>
            </ul>
            
            <div className="user-actions">
              <a href="#" className="post-ad-btn">
                <i className="fas fa-plus"></i> Post Job
              </a>
              <a href="#" className="icon-btn">
                <i className="far fa-heart"></i>
              </a>
              <a href="#" className="icon-btn">
                <i className="far fa-user"></i>
              </a>
            </div>
          </nav>
        </div>
      </header>
      
      {/* Job Header Section */}
      <section className="job-header">
        <div className="container">
          <h1>Jobs</h1>
          <div className="job-categories">
            <div className="category-col">
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); handleCategoryClick('accounting-finance'); }} data-category="accounting-finance">ACCOUNTING/FINANCE</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>MEDIA</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>ADMINISTRATION</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>HEALTHCARE/MEDICAL</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>LAW/LEGAL</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>PURCHASING/PROCUREMENT</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>SAFETY</a>
              </div>
            </div>
            
            <div className="category-col">
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>AUTOMOBILE MECHANIC</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>SALON & SPA</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>CUSTOMER SERVICE</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>HR/PERSONNEL</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>LOGISTICS</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>QUALITY CONTROL</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>SALES</a>
              </div>
            </div>
            
            <div className="category-col">
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>DOMESTIC WORKERS</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>TECHNICIAN</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>EDUCATION/TRAINING</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>DESIGN</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>MANAGEMENT</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>HOSPITALITY</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>WRITING/EDITING</a>
              </div>
            </div>
            
            <div className="category-col">
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>MACHINE OPERATOR</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>SUPPORT SERVICES</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>ENGINEERING</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>IT/TECHNOLOGY</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>MARKETING/PR</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>TRANSPORTATION</a>
              </div>
              <div className="category">
                <a href="#" onClick={(e) => { e.preventDefault(); }}>OTHER</a>
              </div>
            </div>
          </div>
          
          <div className="search-box">
            <input type="text" className="search-input" placeholder="Search Jobs" />
            <button className="search-btn" onClick={handleSearch}>SEARCH</button>
            <button className="clear-btn" onClick={() => document.querySelector('.search-input').value = ''}>Clear</button>
            <button className="filters-btn">
              <i className="fas fa-filter"></i> View All Filters
            </button>
          </div>
        </div>
      </section>
      
      {/* Main Content - Job Listings */}
      {!showJobDetail && (
        <section className="main-content" id="jobListingsSection">
          <div className="container">
            <div className="breadcrumb">
              <a href="#">Home</a> <span>›</span> <a href="#">Jobs</a>
              {selectedCategory && <><span>›</span> <a href="#">{selectedCategory === 'accounting-finance' ? 'Accounting/Finance' : selectedCategory}</a></>}
            </div>
            
            <h2 className="job-count">{jobCount} Jobs Found</h2>
            
            <div className="job-listings">
              {jobListings.map(job => (
                <div key={job.id} className="job-item" onClick={handleJobClick}>
                  <img src={job.logo} alt={job.company} className="job-logo" />
                  <div className="job-info">
                    <div className="job-category">{job.category}</div>
                    <div className="job-title">{job.title}</div>
                    <div className="job-company">{job.company}</div>
                    <div className="job-meta">
                      {job.postedTime} By {job.postedBy}
                    </div>
                  </div>
                  {job.promoted && <div className="promoted-tag">PROMOTED</div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Job Detail Section */}
      {showJobDetail && (
        <section className="job-detail-section">
          <div className="container">
            <div className="breadcrumb">
              <a href="#" onClick={(e) => { e.preventDefault(); handleBackToJobs(); }}>Home</a> 
              <span>›</span> 
              <a href="#" onClick={(e) => { e.preventDefault(); handleBackToJobs(); }}>Jobs</a> 
              <span>›</span> 
              <a href="#" onClick={(e) => { e.preventDefault(); }}>{jobDetail.category}</a>
            </div>
            
            <h1 className="job-title">{jobDetail.title}</h1>
            
            <div className="job-detail">
              <div className="job-detail-main">
                <div className="job-meta">
                  <p>Created: {jobDetail.created}</p>
                  <p>Updated: {jobDetail.updated}</p>
                </div>
                
                <a href="#" className="job-apply-btn" onClick={handleApply}>Apply for this Job</a>
                
                <div className="job-company">
                  <h3>{jobDetail.company}</h3>
                  <p>Organization: {jobDetail.organization}</p>
                </div>
                
                <a href="#" className="job-contact-btn" onClick={handleShowContact}>View Contact Information</a>
                
                <div className="job-share">
                  <a href="#" className="share-btn share-facebook">
                    <i className="fab fa-facebook-f"></i> Share
                  </a>
                  <a href="#" className="share-btn share-twitter">
                    <i className="fab fa-twitter"></i> Tweet
                  </a>
                </div>
                
                <div className="job-detail-info">
                  <div className="job-detail-col">
                    <div className="job-detail-section">
                      <h3>JOB CATEGORY</h3>
                      <p>{jobDetail.category}</p>
                    </div>
                    
                    <div className="job-detail-section">
                      <h3>POSITION</h3>
                      <p>{jobDetail.position}</p>
                    </div>
                    
                    <div className="job-detail-section">
                      <h3>SALARY RANGE</h3>
                      <p>{jobDetail.salaryRange}</p>
                    </div>
                  </div>
                  
                  <div className="job-detail-col">
                    <div className="job-detail-section">
                      <h3>YEARS OF EXPERIENCE</h3>
                      <p>{jobDetail.experience}</p>
                    </div>
                    
                    <div className="job-detail-section">
                      <h3>GENDER</h3>
                      <p>{jobDetail.gender}</p>
                    </div>
                    
                    <div className="job-detail-section">
                      <h3>APPLICANT LOCATION</h3>
                      <p>{jobDetail.location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="job-detail-section">
                  <h3>DESCRIPTION</h3>
                  <div className="job-description">
                    <p>{jobDetail.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="job-detail-sidebar">
                <div className="job-map">
                  <img src="https://via.placeholder.com/400x200?text=Map" alt="Location Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                
                <a href="#">View location map</a>
                
                <div className="newsletter-form">
                  <h3>Subscribe to our jobs newsletter</h3>
                  <input type="text" placeholder="Your Username" />
                  <input type="email" placeholder="Your E-Mail Address" />
                  <button className="newsletter-btn">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Jobs;