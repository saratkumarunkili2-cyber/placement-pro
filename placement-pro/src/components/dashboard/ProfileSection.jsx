function ProfileSection({ profile }) {

  return (

    <div>

      <h1>Profile Section</h1>

      <p>Name: {profile.name}</p>

      <p>Branch: {profile.branch}</p>

    </div>

  );
}

export default ProfileSection;