import "./Header.css";

const Header = ({ user }) => {
  return (
    <div className="headerWraper">
      <img src={user?.picture?.large} alt="image" />
      <p>
        {user?.name?.first} {user?.name?.last}
      </p>
    </div>
  );
};

export default Header;
