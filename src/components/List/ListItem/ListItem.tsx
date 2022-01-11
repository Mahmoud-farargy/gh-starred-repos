import React from "react";
import Moment from "react-moment";
import { numFormatter, trimText } from "../../../utilities/index";

interface ListItemProps {
  repoItem: {
    owner: {
      avatar_url: string;
      login: string;
    };
    name: string;
    description: string;
    stargazers_count: number;
    open_issues_count: number;
    created_at: string;
    html_url: string;
    ref?: React.Ref<HTMLLIElement>;
  };
}

const ListItem: React.FC<ListItemProps> = ({ repoItem }) => {
  const {
    owner = { avatar_url: "", login: "" },
    name = "",
    description = "",
    stargazers_count = 0,
    open_issues_count = 0,
    created_at = "",
    html_url = "",
  } = repoItem;
  return (
    <>
      <div className="repo--img--container">
        <img
          src={owner?.avatar_url}
          title="Avatar"
          loading="lazy"
          aria-label={owner?.login}
          alt={`${owner?.login}'s avatar`}
        />
      </div>
      <div className="repo--info flex-column">
        <a
          href={html_url}
          rel="noopener noreferrer"
          title={`Go to ${name}'s repo`}
          target="_blank"
          className="repo__name"
        >
          <h4>{name}</h4>
        </a>
        <p className="repo__description" title="description">
          {description
            ? trimText(description, 300)
            : `No description available for this repo`}
        </p>
        <div className="repo--bottom flex-column">
          <div className="repo--bottom--inner flex-row">
            <em title={`Number of stars: ${stargazers_count}`}>
              {stargazers_count > 0 ? (
                <>
                  <span>Stars: </span>
                  <span>{numFormatter(Number(stargazers_count))}</span>
                </>
              ) : (
                <span>No stars</span>
              )}
            </em>
            <em title={`Number of stars: ${open_issues_count}`}>
              {open_issues_count > 0 ? (
                <>
                  <span>Issues: </span>
                  <span>{numFormatter(Number(open_issues_count))}</span>
                </>
              ) : (
                <span>No issues</span>
              )}
            </em>
          </div>

          <span className="submission--time" title="Time interval">
            Submitted{" "}
            <Moment fromNow withTitle>
              {new Date(created_at).toISOString()}
            </Moment>{" "}
            by {name}
          </span>
        </div>
      </div>
    </>
  );
};

export default ListItem;
