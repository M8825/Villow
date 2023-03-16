import React from "react";
import { Button, Link } from "@chakra-ui/react";
import {
  faAngellist,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FollowButtonLinks = () => {
  return (
    <>
      <hr className="line-separator" />
      <div className="personal-links">
        <div className="personal-links__title">
          <p>Or connect with:</p>
        </div>

        <div className="personal-links__buttons">
          <Link className="external-links" href="https://github.com/M8825">
            <Button
              className={"gitbug-btn positioning"}
              leftIcon={<FontAwesomeIcon icon={faGithub} />}
            >
              Follow me on Github
            </Button>
          </Link>

          <Link
            className="external-links"
            href="https://www.linkedin.com/in/malkhaz-mamulashvili-703a97208/?trk=public_profile-settings_edit-profile-content"
          >
            <Button
              className={"linkedIn-btn positioning"}
              leftIcon={<FontAwesomeIcon icon={faLinkedin} />}
            >
              Follow me on LinkedIn
            </Button>
          </Link>

          <Link
            className={"external-links"}
            href="https://wellfound.com/u/malkhaz-mamulashvili"
          >
            <Button
              className={"angelList-btn positioning"}
              leftIcon={<FontAwesomeIcon icon={faAngellist} />}
            >
              Follow me on AngelList
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FollowButtonLinks;
