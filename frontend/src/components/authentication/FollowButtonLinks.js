import React from "react";
import { Button } from "@chakra-ui/react";
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
          <Button
            className={"gitbug-btn positioning"}
            leftIcon={<FontAwesomeIcon icon={faGithub} />}
          >
            Follow me on Github
          </Button>

          <Button
            className={"linkedIn-btn positioning"}
            leftIcon={<FontAwesomeIcon icon={faLinkedin} />}
          >
            Follow me on LinkedIn
          </Button>

          <Button
            className={"angelList-btn positioning"}
            leftIcon={<FontAwesomeIcon icon={faAngellist} />}
          >
            Follow me on AngelList
          </Button>
        </div>
      </div>
    </>
  );
};

export default FollowButtonLinks;
