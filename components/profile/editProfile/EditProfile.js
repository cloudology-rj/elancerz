import { useRouter } from 'next/router';
import Image from 'next/image';
import { HeaderThree, SmallText, PreTitle } from '@/components/global/Text';
import { ButtonPrimary, ButtonSecondary } from '@/components/global/Button';
import Input from '@/components/global/Input';
import TextArea from '@/components/global/TextArea';
import ProfileCard from '../../Cards/ProfileCard/ProfileCard';
import ProfileServicesCard from '../../Cards/ProfileServicesCard/ProfileServicesCard';
import {
  ProfileContainer,
  ProfileBanner,
  FormContainer,
  HeroImage,
  FlexBetween,
  FlexCenter,
  ProfileServices,
  ProfileServicesItem,
  ProfileServicesContainer,
  FlexName,
  FlexHalf,
  DraggingArea
} from './EditProfileStyles';
import { testData } from './../ProfileStyles';

import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const EditProfile = (props) => {


  const router = useRouter();

  const cancelClick = (e) => {
    router.push('/profile')
  }


  const [card, setCard] = React.useState(testData);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setCard(arrayMove(card, oldIndex, newIndex));
  };

  const SortableItem = SortableElement(props => {
    const { value: item } = props;
    return (
      <ProfileServicesItem>
        <ProfileServicesCard
          serviceImage={item.img}
          serviceName={item.name}
          serviceFee={item.fee}
          serviceCompleted={item.num} />
      </ProfileServicesItem>
    );
  });


  const SortableList = SortableContainer(props => {
    // const { card, ...restProps } = props;
    return (
      <ProfileServices>
        {props.items.map((item, index) => (
          <SortableItem
            id={"item_" + index}
            key={`item-${index + 1}`}
            index={index}
            value={item}
          />
        ))}
      </ProfileServices>
    );
  });



  return (
    <ProfileContainer>


      <HeroImage>
        <ProfileBanner>
          <ButtonPrimary onClick={cancelClick}>
            <FlexBetween>
              <Image src='/icons/check-white.svg' width={20} height={20} />
            &nbsp;&nbsp;SAVE CHANGES
          </FlexBetween>
          </ButtonPrimary>
          <ButtonSecondary onClick={cancelClick}>CANCEL</ButtonSecondary>
        </ProfileBanner>

        <FlexCenter>
          <ProfileCard />
        </FlexCenter>
        <br />
        <ButtonPrimary>
          <FlexBetween>
            <Image src='/icons/edit-white.svg' width={20} height={20} />
            &nbsp;&nbsp;CHANGE COVER IMAGE
          </FlexBetween>
        </ButtonPrimary>

      </HeroImage>

      <FormContainer>
        <FlexName>
          <FlexHalf>
            <SmallText>First Name</SmallText>
            <Input value="Charlie" />
          </FlexHalf>
          <FlexHalf>
            <SmallText>Last Name</SmallText>
            <Input value="Levin" />
          </FlexHalf>
        </FlexName>

        <SmallText>Title</SmallText>
        <Input value="Graphic Designer" />

        <br />
        <SmallText>Username</SmallText>
        <Input value="charlielevin23" />

        <br />
        <SmallText>About</SmallText>
        <TextArea rows="10" cols="33" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh dui, mattis odio sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh dui, mattis odio sit." />
        <br />

        <HeaderThree>Services (12)</HeaderThree>
        <DraggingArea>
          <Image src='/icons/info-gray.svg' width={20} height={20} />
          &nbsp;&nbsp;
          <PreTitle> DRAG CARDS TO CHANGE ORDER</PreTitle>
        </DraggingArea>

      </FormContainer>


      <ProfileServicesContainer>
        <ProfileServices>
          <SortableList
            items={card}
            onSortEnd={onSortEnd}
            axis="xy"
          />
        </ProfileServices>
      </ProfileServicesContainer>

    </ProfileContainer>
  );
};

export default EditProfile;
