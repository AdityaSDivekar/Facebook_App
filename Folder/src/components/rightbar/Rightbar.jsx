import './rightbar.css'
import {Users} from '../../dummyData'
import OnlineFriends from '../onlineFriends/OnlineFriends'
const Rightbar = ({profile}) => {
  const HomeRightbar =()=>{
    return(
      <>
      <div className="birthdayContainer">
        <img className='birthdayImg' src="src\assets\person\gift.png" alt="" />
        <span className="birthdayText">
        <b>ABCD</b> and <b>23 other friends</b> have a birthday today.
        </span>
      </div>
          <img className='rightbarAd' src="src\assets\person\2.jpg" alt="" />
          <h4 className='rigthbarTitle'>Online Friends</h4>
          <ul className='rightbarFriendList'>
          {Users.map((u)=>(
            <OnlineFriends key={u.id} user={u}/>
            ))}
          </ul>
      </>
    )
  }
 const ProfileRightbar=()=>{
    return(
    <>
    <h4 className="rightbarTitle">User Information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">Pune</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">ABC</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">RelationShip:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
    </div>
    <h4 className="rightbarInfoItem">User Friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\person\1.jpg" alt="" />
        <span className="rightbarFollowingName">MIKE</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\person\2.jpg" alt="" />
        <span className="rightbarFollowingName">AMMY</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\person\3.jpg" alt="" />
        <span className="rightbarFollowingName">DAVID</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\person\4.jpg" alt="" />
        <span className="rightbarFollowingName">HARRY</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\person\5.jpg" alt="" />
        <span className="rightbarFollowingName">SID</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\person\6.jpg" alt="" />
        <span className="rightbarFollowingName">SAM</span>
      </div>
      <div className="rightbarFollowing">
        <img className='rightbarFollowingImg' src="src\assets\person\7.jpg" alt="" />
        <span className="rightbarFollowingName">BLUE</span>
      </div>
    </div>
    </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
      </div>
  )
}

export default Rightbar;
