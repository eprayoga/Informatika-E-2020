import Image from 'next/image';
import Link from 'next/link';
import {
  Author,
  AuthorDescription,
  CardContainer,
  CarouselItemContainer,
  Content,
  ContentContainer,
  CreatedAt,
  Description,
  Name,
  ProfileImage,
  ThumbnailImage,
  Title,
  Type,
} from './BlogCarouselElements';
import profileImg from '../../../public/assets/icon/man-profile-icon.png';

const BlogCarouselItem = () => {
  return (
    <CarouselItemContainer>
      <CardContainer>
        <Link href="/blog/cara-install-ulang-windows">
          <ThumbnailImage>
            <Image
              src="/assets/img/video-blog-thumbnail.png"
              className="image"
              layout="fill"
              alt="IMAGE_BLOG"
            />
          </ThumbnailImage>
        </Link>
        <ContentContainer>
          <Content>
            <Type blogType="article">article</Type>
            <Link href="/blog/cara-install-ulang-windows">
              <Title>Cara Install Ulang Windows 10 dengan Mudah</Title>
            </Link>
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              dolores voluptates similique eveniet modi quis. Provident velit
              laborum, neque non saepe atque, quisquam cupiditate ipsa
              recusandae iusto alias suscipit beatae inventore maiores
              molestias. Ab dolor soluta, dolorem praesentium similique unde
              natus tempora quis hic. Animi, expedita quos esse in facere
              inventore at. Atque nesciunt sunt obcaecati itaque alias
              doloremque, provident tenetur! Id nulla iure accusantium maxime
              minima fuga sint incidunt fugiat illum iusto, quo exercitationem
              ullam provident sunt cum doloribus facilis in, distinctio quas
              eius esse temporibus fugit voluptatum? Sed unde mollitia corrupti
              doloribus libero esse eum neque! Aperiam ipsa atque consectetur
              vitae quis ad beatae? Impedit doloremque tempora perspiciatis
              soluta corporis aliquid, repellendus corrupti eveniet totam enim
              reiciendis voluptate officiis eaque accusantium nulla sunt,
              tenetur, sit modi facilis. Omnis, non quos perspiciatis expedita
              obcaecati similique eligendi ut quo iure quod alias, laboriosam
              eum optio dignissimos provident voluptates reprehenderit vitae
              blanditiis cumque magnam voluptatum dicta culpa excepturi.
              Pariatur libero consequuntur dolorum. Et, voluptas mollitia dicta
              quisquam totam natus ullam vero culpa doloribus tenetur quos
              blanditiis, temporibus beatae omnis iusto animi magnam minus
              labore in possimus! Quo eius, ipsum nisi quaerat voluptatum,
              dolorum temporibus excepturi tempore quasi commodi non veniam
              quidem?
            </Description>
          </Content>
          <Author>
            <ProfileImage>
              <Image src={profileImg} className="image" layout="fill" />
            </ProfileImage>
            <AuthorDescription>
              <Name>by: Endang Prayoga Hidayatulloh</Name>
              <CreatedAt>May 20, 2022</CreatedAt>
            </AuthorDescription>
          </Author>
        </ContentContainer>
      </CardContainer>
    </CarouselItemContainer>
  );
};

export default BlogCarouselItem;
