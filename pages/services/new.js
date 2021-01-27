import NewServices from 'components/services/newServices/NewServices';
import Layout from '../../components/Base/Layout/Layout';
import Container from '../../components/global/Container';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../firebase/firebase';

const MyProfile = (props) => {
    // const [user] = useAuthState(auth);
    // const router = useRouter();

    // if (user) {
    //   router.push('/dashboard');
    // }
    return (
        <Layout>
            <Container>
                <NewServices />
            </Container>
        </Layout>
    );
};


export default MyProfile;
