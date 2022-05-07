import styled from 'styled-components';

const BlogGridContainer = styled.div`
  padding: 0 120px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  gap: 20px;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, 280px);
    padding: 0 80px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, 150px);
    padding: 0 20px;
  }
`;

export default BlogGridContainer;
