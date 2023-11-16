import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="your-right-container">
				<h1>You have a right to fair housing.</h1>
				<a href="https://www.dos.ny.gov/licensing/docs/FairHousingNotice_new.pdf">
					Learn about New York Fair Housing protections
				</a>
			</div>
			<div className="region-footer-links">
				<ul className="four-links">
					<li className="four-links__link">
						<button>Real Estate</button>
						<FontAwesomeIcon icon={faAngleDown} />
					</li>
					<li className="four-links__link">
						<button>Rentals</button>
						<FontAwesomeIcon icon={faAngleDown} />
					</li>
					<li className="four-links__link">
						<button>Mortgage Rates</button>
						<FontAwesomeIcon icon={faAngleDown} />
					</li>
					<li>
						<button>Browse Homes</button>
						<FontAwesomeIcon icon={faAngleDown} />
					</li>
				</ul>
			</div>

			<hr />
			<div className="footer">
				<ul className="language-links">
					<li>
						<a href="https://ruby-doc.org/">ruby</a>
					</li>
					<li>
						<a href="https://rubyonrails.org/">ruby on rails</a>
					</li>
					<li>
						<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
							JavaScript
						</a>
					</li>
					<li>
						<a href="https://beta.reactjs.org/">React.js</a>
					</li>
					<li>
						<a href="https://beta.reactjs.org/">React.js</a>
					</li>
					<li>
						<a href="https://redux.js.org/">Redux.js</a>
					</li>
					<li>
						<a href="https://webpack.js.org/">webpack</a>
					</li>
					<li>
						<a href="https://www.postgresql.org/docs/">
							postgresql
						</a>
					</li>
					<li>
						<a href="https://sass-lang.com/documentation/">Sass</a>
					</li>
					<li>
						<a href="https://git-scm.com/doc">git</a>
					</li>
				</ul>
				<ul className="language-links">
					<li>
						<a href="https://ruby-doc.org/">GitHub</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/malkhaz-mamulashvili-703a97208/">
							LinkedIn
						</a>
					</li>
					<li>
						<a href="https://wellfound.com/u/malkhaz-mamulashvili">AngelList</a>
					</li>
				</ul>
				<hr />
				<div className="under-footer">
					<p>
						Zillow Group is committed to ensuring digital
						accessibility for individuals with disabilities. We are
						continuously working to improve the accessibility of our
						web experience for everyone, and we welcome feedback and
						accommodation requests. If you wish to report an issue
						or seek an accommodation, please
					</p>

					<p>
						For listings in Canada, the trademarks REALTOR®,
						REALTORS®, and the REALTOR® logo are controlled by The
						Canadian Real Estate Association (CREA) and identify
						real estate professionals who are members of CREA. The
						trademarks MLS®, Multiple Listing Service® and the
						associated logos are owned by CREA and identify the
						quality of services provided by real estate
						professionals who are members of CREA. Used under
						license.
					</p>
				</div>

				<img src="https://s.zillowstatic.com/pfs/static/footer-art.svg" />
			</div>
		</div>
	);
};

export default Footer;
