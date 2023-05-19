import ProfileMentor from "../components/Profile/ProfileMentor";
import ProfileMentee from "../components/Profile/ProfileMentee";

const Profile = () => {
  const classification = "mentor";

  if (classification === "mentor") {
    return <ProfileMentor />;
  }
  return <ProfileMentee />;
};

export default Profile;
