import Image from 'next/image';
import blogIllustratorImg from '../../../public/assets/img/header-blog-illustrator.png';
import {
  BlogHeaderContainer,
  BlogHeaderDescription,
  BlogIllustratorImage,
  Brand,
  InputButton,
  SearchButton,
  SearchContainer,
  Title,
} from './BlogHeaderElements';

const BlogHeader = () => {
  return (
    <BlogHeaderContainer>
      <BlogHeaderDescription>
        <Brand>TEKNIK INFORMATIKA E</Brand>
        <Title>
          <span>"</span>
          Blog
          <span>"</span>
        </Title>
        <SearchContainer>
          <InputButton type="text" />
          <SearchButton>Go</SearchButton>
        </SearchContainer>
      </BlogHeaderDescription>
      <BlogIllustratorImage>
        <Image
          src={blogIllustratorImg}
          objectFit="cover"
          alt="IMG_HEADER_BlOG"
        />
      </BlogIllustratorImage>
    </BlogHeaderContainer>
  );
};

export default BlogHeader;
