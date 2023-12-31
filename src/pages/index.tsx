import React, { useState } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import { Company, companiesList } from '../companies-list';

const TH = styled.th({
  textAlign: 'left',
});

const HeadingOne = styled.h1({
  color: '#075985',
});

const uniqueRegions = new Set(
  companiesList
    .map((company) => company.region.split(',').map((region) => region.trim()))
    .flat(),
);

console.log([...uniqueRegions]);
const regions = Array.from(uniqueRegions).sort();

const IndexPage: React.FC<PageProps> = () => {
  const [filteredCompanies, setFilteredCompanies] = useState(companiesList);

  const filterCompaniesList = (event) => {
    const region =
      event.target.textContent !== 'Clear' ? event.target.textContent : '';
    const filtered = companiesList.filter((company) =>
      company.region.includes(region),
    );
    setFilteredCompanies(filtered);
  };

  return (
    <Layout>
      <header>
        <HeadingOne>
          {companiesList.length} companies that hire remote workers
        </HeadingOne>

        <p>
          The list below is from a post in LinkedIn. The idea is to keep
          updating and improving the list, so anyone can find a company that
          matches their values and needs. Please share any other companies you
          know hire remote workers by creating a pull request in repository or
          sending an email to TODO add an email account.
        </p>
      </header>
      <main>
        {regions.map((region) => (
          <button key={region} type="button" onClick={filterCompaniesList}>
            {region}
          </button>
        ))}
        <br />
        <button type="button" onClick={filterCompaniesList}>
          Clear
        </button>

        <table>
          <thead>
            <tr>
              <TH>Name</TH>
              <TH>Website</TH>
              <TH>Regions</TH>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((company: Company) => (
              <tr key={company.name}>
                <td>{company.name}</td>
                <td>
                  <a href={company.website} target="_blank">
                    {company.website}
                  </a>
                </td>
                <td>{company.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer>
        Made with
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
      </footer>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Companies that hire remote workers</title>
    <meta
      name="description"
      content="A list of companies that hire remote workers and the regions where they are looking to hire."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link
      href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    ></link>
  </>
);
