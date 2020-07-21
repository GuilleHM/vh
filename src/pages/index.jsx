import React, { useState } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from '../components/TabOverview'
import Card from '../components/Card'
import SEO from '../components/SEO'

import '../fonts/journalregular.css'

import wrapperBg from '../assets/wrapper.jpg'
import heroBgSmall from '../assets/heroBgSmall.jpg'
import heroBgMedium from '../assets/heroBgMedium.jpg'
import heroBgBig from '../assets/heroBgBig.jpg'
import forrestSmall from '../assets/forrestSmall.jpg'
import forrestBig from '../assets/forrestBig.jpg'
import searchBgBig from '../assets/searchBig.svg'
import searchBgSmall from '../assets/searchSmall.svg'
import searchBgMedium from '../assets/searchMedium.svg'

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 3rem 1rem;
  background-image: url(${wrapperBg});
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 600px) {
    padding: 2rem 1rem 1rem;
  }
`

const Header = styled.header`
  min-width: 100%;
  margin-left: 0.5rem;
  background-image: url(${heroBgSmall});
  background-repeat: no-repeat;
  background-size: contain;
  @media (min-width: 500px) {
    background-image: url(${heroBgMedium});
    background-position: right;
  }
  @media (min-width: 992px) {
    margin-left: 1.5rem;
    background-image: url(${heroBgBig});
  }
  @media (min-width: 992px) and (orientation: landscape) {
    height: 60vh;
    margin-left: 3rem;
  }
`

const Title = styled.h1`
  padding-right: 4rem;
  span:first-child {
    font-size: 3rem;
  }
  span:nth-of-type(2) {
    color: var(--primary);
  }
  @media (min-width: 992px) {
    margin-top: 4rem;
  }
`

const Subtitle = styled.p`
  width: 50vw;
  span:first-child {
    font-weight: bold;
  }
  @media (min-width: 992px) {
    width: 33vw;
  }
`

const MainSearchLink = styled.a`
  display: inline-block;
  font-size: 1rem;
  margin: 1rem 8rem 2rem 0;
  padding: 0.5rem 1rem;
  color: var(--white);
  background-color: var(--primary);
  border: none;
  border-radius: var(--br);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: var(--black);
    background-color: var(--secondary);
    transform: translateX(1rem);
  }
  &:active,
  &:focus {
    outline: none;
  }
`

const TopSection = styled.section`
  span:first-child {
    display: inline-block;
    padding-bottom: 2px;
    border-bottom: 5px solid var(--secondary);
  }
`

const SectionTitle = styled.h2`
  color: var(--black);
  font-weight: 700;
  font-size: 1.3rem;
  text-align: center;
  @media (min-width: 400px) {
    margin-top: 2rem;
  }
`

const CentralSection = styled.section`
  background-image: url(${forrestSmall});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  padding-bottom: 2rem;
  *:first-child {
    margin-top: -2rem;
    padding-left: 0;
    text-align: left;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
  }
  span:first-child {
    display: inline-block;
    padding-bottom: 2px;
    border-bottom: 5px solid var(--primary);
  }
  p:last-child {
    width: 30vw;
    margin-top: 3rem;
  }
  @media (min-width: 992px) {
    background-image: url(${forrestBig});
    padding-bottom: 20rem;
  }
  @media (max-width: 340px) {
    padding-bottom: 0;
  }
`

const Cite = styled.cite`
  display: inline-block;
  width: 60vw;
  margin-top: 1rem;
  font-family: 'journalregular';
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 2rem;
  @media (min-width: 400px) {
    margin-top: 2rem;
  }
`

const SearchSection = styled.section`
  min-height: 620px;
  background-image: url(${searchBgSmall});
  background-repeat: no-repeat;
  background-size: contain;
  h2:first-child {
    margin-top: 4rem;
  }
  h2 span {
    display: inline-block;
    padding-bottom: 2px;
    border-bottom: 5px solid var(--secondary);
  }
  p:first-of-type {
    width: 50vw;
    margin-top: 3rem;
  }
  p span {
    font-weight: bold;
  }
  @media (min-width: 500px) {
    min-height: 640px;
    background-image: url(${searchBgBig});
    background-size: cover;
  }
  @media (min-width: 650px) {
    background-image: url(${searchBgMedium});
  }
  @media (min-width: 992px) {
    background-image: url(${searchBgBig});
  }
  @media (min-width: 1100px) {
    min-height: 720px;
  }
`

const SearchBox = styled.div`
  margin: 1rem auto;
`

const SearchInput = styled.input`
  font-size: 0.8rem;
  padding: 0.5rem;
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid var(--black);
  &:active,
  &:focus {
    outline: none;
  }
`

const SearchTotal = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0 1rem 1.5rem 1rem;
  padding: 0.25rem 0.5rem;
  color: var(--black);
  background-color: var(--secondary);
  border-radius: var(--br);
`

const RamdomSearch = styled.button`
  display: inline-block;
  font-size: 0.8rem;
  margin: 1rem 6rem 1rem 0;
  padding: 0.5rem 1rem;
  color: var(--white);
  background-color: var(--primary);
  border: none;
  border-radius: var(--br);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: var(--black);
    background-color: var(--secondary);
    transform: translateX(1rem);
  }
  &:active,
  &:focus {
    outline: none;
  }
`

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 992px) {
    padding: 0 5rem;
  }
`

const Column = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-basis: 100%;
  max-width: 100%;
  width: 100%;
  margin-bottom: 2.5rem;
  @media screen and (min-width: 321px) {
    flex-basis: calc(99.9% * 1 / 2 - 0.5rem);
    max-width: calc(99.9% * 1 / 2 - 0.5rem);
    width: calc(99.9% * 1 / 2 - 0.5rem);
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 700px) {
    flex-basis: calc(99.9% * 1 / 3 - 1rem);
    max-width: calc(99.9% * 1 / 3 - 1rem);
    width: calc(99.9% * 1 / 3 - 1rem);
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 1000px) {
    flex-basis: calc(99.9% * 1 / 3 - 1.5rem);
    max-width: calc(99.9% * 1 / 3 - 1.5rem);
    width: calc(99.9% * 1 / 3 - 1.5rem);
    margin-bottom: 2.5rem;
  }
`

const BigTab = styled(Tab)`
  display: none;
`

const IndexPage = ({ data: { favMovies, watchedMovies } }) => {
  // Handling functions for movie search
  const emptyQuery = ''

  const [state, setState] = useState({
    query: emptyQuery,
    filteredMovies: [],
    listedMovies: watchedMovies.nodes.length,
    randomMovies: [],
  })

  const handleInputChange = event => {
    const query = event.target.value
    const filteredMovies = watchedMovies.nodes.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase().trim())
    )
    const listedMovies = filteredMovies.length
    const randomMovies = []

    setState({
      query,
      filteredMovies,
      listedMovies,
      randomMovies,
    })
  }

  const handleClick = () => {
    const searchInput = document.querySelector('#searchInput')
    searchInput.value = emptyQuery
    const query = emptyQuery
    const filteredMovies = []
    const listedMovies = 50
    const randomMovies = [watchedMovies.nodes[Math.floor(Math.random() * 50)]]

    setState({
      query,
      filteredMovies,
      listedMovies,
      randomMovies,
    })
  }

  // Constants for movie display at search section
  const { filteredMovies, query, listedMovies, randomMovies } = state
  const hasSearchResults = filteredMovies.length === 1 && query.toLowerCase() === filteredMovies[0].title.toLowerCase()
  const MoviesToRender = hasSearchResults ? filteredMovies : []

  return (
    <Wrapper>
      <SEO />
      <Header>
        <Title>
          <span>Movies</span> that <span>do</span> matter
        </Title>
        <Subtitle>
          Here at <span>VideoHead</span> you'll find a selection of best 50 films ever. We hope you enjoy them!
        </Subtitle>
        <MainSearchLink href="/#searchSection">Find a film</MainSearchLink>
      </Header>
      <main>
        <TopSection>
          <SectionTitle>
            <span>Our</span> top ones
          </SectionTitle>
          <Tabs forceRenderTabPanel>
            <TabList>
              <BigTab>Favorites</BigTab>
            </TabList>
            <TabPanel>
              <Tabs forceRenderTabPanel>
                <TabList>
                  <Tab style={{ display: 'none' }}>Movies ({favMovies.totalCount})</Tab>
                </TabList>
                <TabPanel>
                  <Row>
                    {favMovies.nodes.map(movie => (
                      <Column key={movie.title}>
                        <Card
                          link={`movie/${movie.accountFavoriteMoviesId}`}
                          cover={movie.poster_path.childImageSharp.fixed}
                          name={movie.title}
                          rating={movie.vote_average}
                          release={movie.release_date}
                        />
                      </Column>
                    ))}
                  </Row>
                </TabPanel>
              </Tabs>
            </TabPanel>
          </Tabs>
        </TopSection>
        <CentralSection>
          <SectionTitle>
            <span>film</span> of the week
          </SectionTitle>
          <Cite>A movie heart-breaker of oddball wit and startling grace.</Cite>
          <p>
            <small>- RollingStone</small>
          </p>
          <p>
            If want to know more about this master piece, click <a href="detail/movie/13">here</a>
          </p>
        </CentralSection>
        <SearchSection id="searchSection">
          <SectionTitle>
            <span>Find</span> a film
          </SectionTitle>
          <p>
            Get a recommendation from us... Or just check if that movie you`ve got on mind is among{' '}
            <span>"The 50 Greatest"</span>
          </p>
          <SearchBox>
            <RamdomSearch onClick={handleClick}>Get a ramdom one</RamdomSearch>
            <SearchInput
              id="searchInput"
              type="text"
              aria-label="Search"
              placeholder="Search for your movie..."
              onChange={handleInputChange}
            />
            <SearchTotal>{listedMovies}</SearchTotal>
          </SearchBox>
          <Row>
            {MoviesToRender.map(movie => (
              <Column key={movie.title}>
                <Card
                  link={`movie/${movie.accountMovieWatchlistId}`}
                  cover={movie.poster_path.childImageSharp.fixed}
                  name={movie.title}
                  rating={movie.vote_average}
                  release={movie.release_date}
                />
              </Column>
            ))}
          </Row>
          <Row>
            {randomMovies.map(movie => (
              <Column key={movie.title}>
                <Card
                  link={`movie/${movie.accountMovieWatchlistId}`}
                  cover={movie.poster_path.childImageSharp.fixed}
                  name={movie.title}
                  rating={movie.vote_average}
                  release={movie.release_date}
                />
              </Column>
            ))}
          </Row>
        </SearchSection>
      </main>
    </Wrapper>
  )
}

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    favMovies: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      nodes: PropTypes.array.isRequired,
    }).isRequired,
    watchedMovies: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    favMovies: allTmdbAccountFavoriteMovies(sort: { fields: [vote_average], order: DESC }) {
      totalCount
      nodes {
        release_date
        vote_average
        title
        accountFavoriteMoviesId
        poster_path {
          childImageSharp {
            fixed(height: 525, quality: 90) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
    watchedMovies: allTmdbAccountMovieWatchlist(sort: { fields: [release_date], order: DESC }) {
      totalCount
      nodes {
        release_date
        vote_average
        accountMovieWatchlistId
        title
        poster_path {
          childImageSharp {
            fixed(height: 525, quality: 90) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`
