import Image from 'next/image';
import aboutUsImg from '../../../public/assets/img/aboutus-img.png';
import {
  AboutUsContainer,
  AboutUsContent,
  AboutUsImage,
} from './AboutUsElements';

const AboutUs = () => {
  return (
    <AboutUsContainer id="aboutUs">
      <h1>About us</h1>
      <AboutUsImage>
        <Image src={aboutUsImg} width={423} height={572} />
      </AboutUsImage>
      <AboutUsContent>
        <h1>About us</h1>
        <p>
          Kenalin para Mahasiswa/i Institut Teknologi Garut jurusan Teknik
          Informatika Angkatan tahun 2020 dari kelas E, yang memiliki ikatan
          kebersamaan yang kuat diantara kita.
          <br />
          Website ini dibuat untuk meyalurkan kreatifitas para mahasiwa/i yang
          harapanya para teman-teman kelas E bisa meyalurkan kreatifitasnya dan
          cerita ispiratif bagi para pembaca ,dan bukan hanya cerita tapi juga
          anda bisa melihat moment-moment kebersamaan dari kelas kami ini.
          <br />
          Berangkat dari mimpi orang-orang yang mempuyai semangat besar untuk
          meraih Pendidikan yang lebih tinggi dan harapan orang tua kepada
          anaknya supaya menjadi seorang sarjanawan,dengan keterbatasan ekonomi
          ,orang-orang ini memberanikan diri dengan bermodalkan tekad yang kuat
          dan doa dari orang tua untuk masuk salasatu universitas dan akhirnya
          menjadi seorang mahasiswa dan dipertemukan kedalam satu kelas yang
          berisi teman-teman yang mempuyai mimpi yang sama.
        </p>
      </AboutUsContent>
    </AboutUsContainer>
  );
};

export default AboutUs;
