import React from 'react';
import classes from './users.module.css';
import   axios from 'axios';


const Users = (props) => {
    if(props.users === 0){
       
        
        
    }
    return <div className={classes.users}> 
    
        {props.users.map(u => <div key={u.id}> 
            <div>
                <div>
                    <img src={u.photoUrl} className={classes.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}

                </div>
            </div>
            <div className={classes.user_inf}>
                <div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>
            </div>
        </div>)}
    
</div>
}
export default Users;