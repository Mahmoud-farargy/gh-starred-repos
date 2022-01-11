import { Fragment, useState, useRef, useCallback, useEffect } from "react";
import { JsxElement } from "typescript";
import ListItem from "./ListItem/ListItem";
import styled from "styled-components";
import loadingImg from "../../design/assets/loadingGif.gif";

interface IRepoItem {
  id: number;
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
}

interface IProps {
  repoList: object;
  loadMoreRepos: () => void;
  totalCount: number;
  isLoading: boolean;
  hasError: boolean;
}
const StyledListItem = styled.li`
  box-shadow: 0px 10px 30px -15px rgba(0, 0, 0, 0.2);
  background-color: var(--ultra-white);
  transition: background-color var(--trans-05);
  border-radius: 0.25rem;
  height: 100%;
  width: 100%;
  padding: 1.6rem 1.5rem;
  margin-bottom: 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem 1rem;
  align-items: flex-start;
  &:last-of-type {
    margin-bottom: 0px;
  }
  .repo--img--container {
    flex-basis: 10%;
    min-height: 100px;
    margin: auto;
    img {
      width: 100%;
      height: 300px;
      object-fit: contain;
    }
  }
  .repo--info {
    padding: 1rem 0.6rem 0.5rem;
    min-height: auto;
    .repo__name {
      white-space: pre-wrap;
      display: inline;
      width: max-content;
      font-size: var(--font-size-medium-x);
      text-transform: capitalize;
      text-align: center;
      text-decoration: none;
      margin-bottom: 0.7rem;
      color: var(--darker-black);
      h4 {
        color: inherit;
      }
    }
    .repo__description {
      padding-bottom: 0.7rem;
    }
    .repo--bottom {
      padding: 0;
      margin-top: auto;
      justify-self: center;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 0.8rem 0;
      .repo--bottom--inner {
        align-items: center;
        flex-wrap: wrap;
        gap: 0.4rem 0;
        em {
          font-size: var(--font-size-medium);
          display: inline-block;
          padding: 0.3rem 0.5rem;
          font-style: normal;
          border: 2px solid var(--tertiary-clr);
          margin-right: 0.7rem;
        }
      }
    }
    span.submission--time {
      font-size: var(--font-size-sm);
    }
  }
  // 670px and above
  @media (min-width: 670px) {
    padding: 2rem;
    flex-direction: row;
    .repo--info {
      min-height: 130px;
      padding: 0.1rem 0;
      flex-grow: 1;
      .repo__name {
        text-align: start;
      }
      .repo__description {
        max-width: 800px;
      }
    }
    .repo--bottom {
      flex-direction: row;
      align-items: center !important;
    }
    .repo--img--container {
      img {
        width: 130px;
        height: 130px;
      }
    }
  }
  // 430px and less
  @media (max-width: 430px) {
    .repo--img--container {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
//  string | Array<Object>
const List: React.FC<IProps> = ({
  repoList,
  loadMoreRepos,
  totalCount,
  isLoading,
  hasError,
}: {
  repoList: any;
  loadMoreRepos: Function;
  totalCount: number;
  isLoading: boolean;
  hasError: boolean;
}) => {
  // refs
  const observer = useRef<any>(null);
  const _isMounted = useRef<object | boolean>(true);
  // states
  const [hasMore, setHasMore] = useState<boolean>(true);
  const lastPostElementRef = useCallback(
    (node): void => {
      if (isLoading || hasError) return;
      if (observer?.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((enteries) => {
        if (_isMounted.current && enteries[0].isIntersecting && hasMore) {
          loadMoreRepos();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, loadMoreRepos, hasMore, hasError]
  );

  useEffect(
    () => (): void => {
      _isMounted.current = false;
    },
    []
  );

  useEffect((): void => {
    const currLimit: number | null = repoList.length || null;
    setHasMore(typeof currLimit === "number" ? currLimit < totalCount : false);
  }, [repoList.length, totalCount]);

  const renderList = (): JsxElement[] => {
    return (
      repoList?.length > 0 &&
      repoList.map((repoItem: IRepoItem, idx: number) => {
        if (repoList.length === idx + 1) {
          return (
            <StyledListItem key={repoItem.id || idx} ref={lastPostElementRef}>
              <ListItem repoItem={repoItem} />
            </StyledListItem>
          );
        } else {
          return (
            <StyledListItem key={repoItem.id || idx}>
              <ListItem repoItem={repoItem} />
            </StyledListItem>
          );
        }
      })
    );
  };
  return (
    <Fragment>
      {renderList()}
      {isLoading && !hasError && (
        <div className="loading--container">
          <img
            src={loadingImg}
            alt="loading..."
            aria-label="loading"
            loading="lazy"
          />
        </div>
      )}
    </Fragment>
  );
};
export default List;
