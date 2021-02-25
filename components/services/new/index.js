import ServiceForm from '../serviceForm';
import { useQuery, useMutation } from 'react-query';
import { useAuth } from 'context/AuthProvider';
import { useRouter } from 'next/router';

import { createService } from '../../../api/queries';

const NewServices = () => {


    const router = useRouter();
    const { user, token } = useAuth()
    const { mutateAsync, isLoading } = useMutation(createService)

    const onFormSubmit = async (data) => {

        const newData = { ...data, category_id: 2, user_id: user.id }
        await mutateAsync({ newData, token })
        router.push('/services')
    }
    return (
        <ServiceForm onFormSubmit={onFormSubmit} isLoading={isLoading} Type={"New"} />
    )
}

export default NewServices