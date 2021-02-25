import styled from 'styled-components';
import ServiceForm from '../serviceForm';
import { useQuery, useMutation } from 'react-query';
import { useAuth } from 'context/AuthProvider';
import { HeaderTwo } from '@/components/global/Text';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { getService, updateService } from '../../../api/queries';

const EditServices = ({ srvID }) => {

    const router = useRouter()
    const { user, token } = useAuth()

    const { data: servicesData, error, isLoading, isError } = useQuery(
        ['services'], () => getService(token, srvID)
    )


    if (error) {

        return (
            <NotFound>
                <HeaderTwo>
                    Sorry, something went wrong with your request
                </HeaderTwo>
            </NotFound>
        )

    }

    const { mutateAsync, isLoading: isMutating } = useMutation(updateService)

    const onFormSubmit = async (data) => {

        const newData = { ...data, category_id: 2, user_id: user.id }
        await mutateAsync({ newData, token, srvID })
        router.push('/services')
    }

    // return null
    return (
        <ServiceForm defaultValues={servicesData} onFormSubmit={onFormSubmit} isLoading={isLoading} Type={"Edit"} />
    )
}

export default EditServices


export const NotFound = styled.div`
  width: 100%;
  height: 50vh;
  display: grid;
  align-items:center;
  justify-content:center;
  place-items: center;
`;