import ProfileMentor from '../components/Profile/ProfileMentor';
import ProfileMentee from '../components/Profile/ProfileMentee';
import {useSelector} from 'react-redux';

const Profile = () => {
	const currentUser = useSelector(state => state.session.user.user);

	if (currentUser.classification === 'mentor') {
		return <ProfileMentor currentUser={currentUser} />;
	}
	return <ProfileMentee currentUser={currentUser} />;
};

export default Profile;
