import Image from 'next/image';
import profileImg from '../../../public/assets/icon/man-profile-icon.png';
import {
  Name,
  NoId,
  ProfileContainer,
  ProfileData,
  ProfileImage,
} from './ProfileBadgeElemets';

const ProfileBadge = () => {
  return (
    <ProfileContainer>
      <ProfileImage>
        <Image
          src={profileImg}
          width={40}
          height={40}
          objectFit="cover"
          alt="PROFILE_IMAGE"
        />
      </ProfileImage>
      <ProfileData>
        <Name>Endang Prayoga Hidayatulloh</Name>
        <NoId>2006189</NoId>
      </ProfileData>
    </ProfileContainer>
  );
};

export default ProfileBadge;
