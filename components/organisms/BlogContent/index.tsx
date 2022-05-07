import BlogCardGrid from '../BlogCardGrid';
import BlogCarousel from '../BlogCarousel';
import { BlogContentContainer, Section } from './BlogContentElements';

const BlogContent = () => {
  return (
    <BlogContentContainer>
      <Section>
        <BlogCarousel />
      </Section>
      <Section>
        <BlogCardGrid />
      </Section>
    </BlogContentContainer>
  );
};

export default BlogContent;
