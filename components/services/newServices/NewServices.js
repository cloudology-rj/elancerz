import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import { HeaderThree, HeaderTwo, Bold, PreTitle } from '@/components/global/Text';
import { ButtonPrimary, ButtonTertiary, ButtonSecondary, ButtonIcon } from '@/components/global/Button';
import Input from '@/components/global/Input';
import TextArea from '@/components/global/TextArea';
import Dropdown from '@/components/global/Dropdown';
import Dropzone from '@/components/global/Dropzone';
import {
  GridContainer,
  FlexSpaceBetween,
  FlexCenter,
  Flex40,
  FlexColumn,
  FlexRow,
  Paragraphs,
  FlexLeft,
  FlexRight,
  FlexForm,
  FlexEnd,
  FlexYT,
  FlexTotal,
  FlexIcon, FlexIconR, Flex50L, Flex50R
} from '../newServices/NewServicesStyles';


import { SortableContainer, SortableElement,sortableHandle, } from 'react-sortable-hoc';
import arrayMove from 'array-move';


const options = [
  {
    name: 'Category 1',
    id: 1,
  },
  {
    name: 'Category 2',
    id: 2,
  }
];


const links = [
  {
    id: 1,
    link: '',
  },
];

const services = [
  {
    id: 1,
    desc: '',
    fee: '0'
  },
];


const NewServices = (props) => {

  const router = useRouter();
  const backService = (e) => {
    router.push('/services')
  }


  
  const [ytLinks, setYtLinks] = useState(links)
  const [milestone, setMilestone] = useState(services)
  const [total, setTotal] = useState(0)



  const DragHandle = sortableHandle(() => <Image src={'/icons/drag-gray.svg'} width={18} height={18} />);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setMilestone(arrayMove(milestone, oldIndex, newIndex));
  };

  const SortableItem = SortableElement(props => {
    const { value: item } = props;
    return (
      
      <FlexForm id={'milestone-' + item.id}>
        <Flex50L>
            <DragHandle />          
            &emsp;
            <Input defaultValue={item.desc}  onChange={(e) => { setDesc(e.target.value, item.id) }}  />
        </Flex50L>
        <Flex50R>
          <Image src={'/icons/dollar-gray.svg'} width={16} height={30} />
            &emsp;
            <Input defaultValue={item.fee} id={'fee-' + item.id} onChange={(e) => { countTotal(e.target.value, item.id) }} />
        </Flex50R>
        <FlexIconR>
          <ButtonIcon onClick={() => { delMilestone(item.id) }}>
            <Image src={'/icons/bin-primary.svg'} width={18} height={20} />
          </ButtonIcon>
        </FlexIconR>
      </FlexForm>
    );
  });


  const SortableList = SortableContainer(props => {
    // const { card, ...restProps } = props;
    return (
      <FlexColumn>
        {props.items.map((item, index) => (
          <SortableItem
            id={"item_" + index}
            key={`item-${index + 1}`}
            index={index}
            value={item}
          />
        ))}
      </FlexColumn>
    );
  });


// 




const addLink = (e) => {
  const yt = Object.keys(ytLinks)

  if (yt.length >= 1) {
    const last = ytLinks[yt[yt.length - 1]].id;
    const newlinks = [
      {
        link: '',
        id: last + 1,
      },
    ];
    setYtLinks([...ytLinks, ...newlinks])

  } else {
    setYtLinks([...links])

  }


}

const addMilestone = (e) => {
  const sr = Object.keys(milestone)
  const last = milestone[sr[sr.length - 1]].id;
  const newServices = [
    {
      id: last + 1,
      desc: '',
      fee: '0'
    },
  ];
  
  
  setMilestone([...milestone, ...newServices])

  console.log(milestone);

}


const delMilestone = (id) => {
  
  const sr = Object.keys(milestone)
  if(sr.length >1){
    const r = milestone.filter(item => item.id !== id);  
    setMilestone(r)

    const total = milestone.reduce((total, obj) => parseInt(obj.fee) + parseInt(total), parseInt(0))
    const c = document.getElementById('fee-' + id).value
    const n = Math.abs(total - c)
    document.getElementById('total').innerHTML  = "$ "+n  

    document.getElementById('milestone-' + id).remove()      
  }


}

const countTotal = (e, id) => {
  const r = milestone.filter(item => item.id === id);
  r[0].fee = e
  
  const total = milestone.reduce((total, obj) => parseInt(obj.fee) + parseInt(total), parseInt(0))
  document.getElementById('total').innerHTML  = "$ "+total    
    
}

const setDesc = (e, id) => {
  const r = milestone.filter(item => item.id === id);
  r[0].desc = e
}


  return (
    <GridContainer>
      {/* title and add button */}
      <FlexSpaceBetween>
        <HeaderThree>Add new service</HeaderThree>
        <ButtonPrimary>
          Quick Tips
        </ButtonPrimary>
      </FlexSpaceBetween>

      <FlexCenter>
        <Flex40>
          <FlexColumn>
            <HeaderThree>Details</HeaderThree>
            <br />
            <FlexForm>
              <FlexLeft>
                <Paragraphs>Name of Service</Paragraphs>
                <Input placeholder='Enter name of service here' />
              </FlexLeft>
              <br></br>
              <FlexRight>
                <Paragraphs>Price</Paragraphs>
                <FlexForm>
                  &emsp;
                  <FlexRow>
                    <HeaderThree>$&nbsp;</HeaderThree>
                    <Input placeholder='20.00' />
                  </FlexRow>
                </FlexForm>
              </FlexRight>
            </FlexForm>

            <FlexForm>
              <FlexColumn>
                <Paragraphs>Description</Paragraphs>
                <TextArea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh dui, mattis odio sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh dui, mattis odio sit.' />
              </FlexColumn>
            </FlexForm>

            <FlexForm>
              <FlexColumn>
                <Paragraphs>Category</Paragraphs>
                <Dropdown title={'-Choose a category-'} resetThenSet={() => { }} list={options} />
              </FlexColumn>
            </FlexForm>

          </FlexColumn>
          <br />
          <br />

          <FlexColumn>
            <HeaderThree>Add images and videos</HeaderThree>
            <br />
            <FlexForm>
              <Dropzone />
            </FlexForm>
            <FlexForm>
              <FlexColumn>
                <FlexRow>
                  <Image src={'/icons/youtube-black.svg'} width={22} height={15.46} />
                  &nbsp;
                  <Bold>YouTube URL</Bold>
                </FlexRow>
                <Paragraphs>Paste a link to the content you want to display on this service</Paragraphs>
              </FlexColumn>
            </FlexForm>


            {ytLinks.map((data, index) => (
              <FlexForm key={index}>
                <FlexLeft>
                  <Input />
                </FlexLeft>
                <FlexYT>
                  &emsp;
                <ButtonSecondary>Embed</ButtonSecondary>
                </FlexYT>
              </FlexForm>
            ))}

            <FlexForm >
              <ButtonPrimary  onClick={addLink}>
                <Image src={'/icons/add-white.svg'} width={12.83} height={12.83} />
                &nbsp;
                MORE
              </ButtonPrimary>
            </FlexForm>
          </FlexColumn>

          <br />
          <br />

          <FlexColumn>
            <HeaderThree>Milestones</HeaderThree>
            <br />

            {/* {milestone.map((data, index) => (
              <FlexForm key={index} id={'milestone-' + data.id}>
                <Flex50L>
                  <Image src={'/icons/drag-gray.svg'} width={18} height={18} />
                &emsp;
                <Input value={data.desc} />
                </Flex50L>
                <Flex50R>
                  <Image src={'/icons/dollar-gray.svg'} width={16} height={30} />
                &emsp;
                <Input value={data.fee} id={'fee-' + data.id} onChange={(e) => { countTotal(e.target.value, data.id) }} />
                </Flex50R>
                <FlexIconR>
                  <ButtonIcon onClick={() => { delMilestone(data.id) }}>
                    <Image src={'/icons/bin-primary.svg'} width={18} height={20} />
                  </ButtonIcon>
                </FlexIconR>
              </FlexForm>
            ))} */}

            <FlexRow>
              <SortableList
                useDragHandle
                items={milestone}
                onSortEnd={onSortEnd}
                axis="y"
                lockAxis="y"
              />
            </FlexRow>

            <FlexForm>
              <FlexRow>
                <FlexTotal>
                  <Paragraphs>Total</Paragraphs>
                </FlexTotal>
                <FlexTotal>
                  <HeaderThree id="total"></HeaderThree>
                </FlexTotal>
              </FlexRow>
            </FlexForm>
            <FlexForm>
              <ButtonPrimary onClick={addMilestone}>
                <Image src={'/icons/add-white.svg'} width={12.83} height={12.83} />
                &nbsp;
                MORE
              </ButtonPrimary>
            </FlexForm>
          </FlexColumn>

          <FlexEnd>
            <ButtonTertiary onClick={backService}>CANCEL</ButtonTertiary>
            &emsp;
            <ButtonPrimary >ADD</ButtonPrimary>
          </FlexEnd>
        </Flex40>
      </FlexCenter>


    </GridContainer>
  );
};



export default NewServices;
