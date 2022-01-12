import React, { useEffect, useState, useRef } from "react";
import { Auxiliary } from "../../../components";
import { List } from "../../../components/index";
import { API } from "../../../services/index";
import styled from "styled-components";
import DropDownBtn from "../../../components/Generic/DropDownBtn/DropDownBtn";

const StyledTitleBox = styled.div`
  align-items: center;
  margin-bottom: 1.6rem;
  gap: 1rem 0.3rem;
  .text--container {
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem 0.3rem;
    span {
      font-size: 1rem;
    }
  }
  @media (max-width: 670px) {
    flex-direction: column !important;
    align-items: flex-start;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  gap: 1.3rem;
`;

export const Home: React.FC = () => {
  // refs
  const _isMounted = useRef<object | boolean>(true);
  // states                               //object[] | string[]
  const [repoList, setRepoList] = useState<any>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number>(30);
  const [nextPage, setNextPage] = useState<number>(1);
  const [hasError, setErrorState] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState("stars");
  const filterOptions = ["stars", "forks", "help-wanted-issues"];

  const fetchFromGH = ({
    pageNum = 1,
    sortBy = "stars",
  }: {
    pageNum: number;
    sortBy: string;
  }) => {
    const currTime = new Date();
    currTime.setDate(currTime.getDate() - 30);
    const getThirtyDays = new Date(currTime).toISOString().split("T")[0];
    setLoading(true);
    return new Promise<Array<string>>((resolve, reject) => {
      API()
        .get(
          `search/repositories?q=created:>${getThirtyDays}&sort=${sortBy}&order=desc&page=${pageNum}&per_page=30`
        )
        .then((res) => {
          if (_isMounted.current) {
            setLoading(false);
            setErrorState(false);
            if (res.data) {
              resolve(res.data.items);
              setNextPage((prevPage: number) => prevPage + 1);
              setTotalCount(res.data.total_count);
            } else {
              reject([]);
            }
          }
        })
        .catch((err) => {
          if (_isMounted.current) {
            setLoading(false);
            setErrorState(true);
            console.error(err);
            reject([]);
          }
        });
    });
  };
  useEffect(() => {
    fetchFromGH({ pageNum: 1, sortBy: "stars" }).then((res): void => {
      setRepoList(res);
    });
    return (): void => {
      _isMounted.current = false;
    };
  }, []);
  const loadMoreRepos = () => {
    fetchFromGH({ pageNum: nextPage, sortBy }).then((newRepos) => {
      setRepoList((prevRepos: Array<string>) => {
        return [...new Set([...prevRepos, ...newRepos])];
      });
    });
  };
  const onFilterChange = (selectedFilter) => {
    setSortBy(selectedFilter);
    fetchFromGH({ pageNum: 1, sortBy: selectedFilter }).then((res): void => {
      setRepoList(res);
    });
  };
  return (
    <Auxiliary>
      <div id="home">
        {/* home top */}
        <StyledTitleBox className="flex-row">
          <div className="text--container flex-row">
            <h2 className="page--title">Top Repos in the last 30 days</h2>
            <span>by</span>
          </div>
          <DropDownBtn
            onChange={(e) => onFilterChange(e)}
            optionsList={filterOptions}
            defaultOption="stars"
          />
        </StyledTitleBox>
        {/* repos list */}
        <StyledList className="flex-column">
          <List
            repoList={repoList}
            loadMoreRepos={loadMoreRepos}
            isLoading={isLoading}
            hasError={hasError}
            totalCount={totalCount}
          />
        </StyledList>
        {hasError ? (
          <div className="error__msg">
            Oops. Something went wrong! Make sure you have a healthy internet
            connection and try again.
          </div>
        ) : (
          !isLoading &&
          repoList.length <= 0 && (
            <div className="empty--results--container">
              <h5>No results found.</h5>
            </div>
          )
        )}
      </div>
    </Auxiliary>
  );
};

export default Home;
