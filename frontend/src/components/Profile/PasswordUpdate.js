import React, { useState } from "react";
import { passwordUpdateMenteeThunk } from "../../store/mentee";
import { passwordUpdateMentorThunk } from "../../store/mentor";
import { useDispatch, useSelector } from "react-redux";

const PasswordUpdate = () => {
    const dispatch = useDispatch()
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const sessionUser = useSelector(state => state.session.user)

    const handleUpdatePassword = async (e) => {
        e.preventDefault()
        if (newPassword === confirmPassword) {
            if (sessionUser?.classification === 'Mentee') {
                await dispatch(passwordUpdateMenteeThunk(sessionUser?.id, oldPassword, newPassword))
                setOldPassword('')
                setNewPassword('')
                setConfirmPassword('')
            } else {
                await dispatch(passwordUpdateMentorThunk(sessionUser?.id, oldPassword, newPassword))
                setOldPassword('')
                setNewPassword('')
                setConfirmPassword('')
            }
        } else {
            alert('The new password does not match the confirm password field!')

        }
    }
    return (
        <div className=" bg-light1 p-8 rounded-lg shadow-lg mt-4">
            <div className="flex flex-col items-start justify-center">
                <h2 className="text-lg font-semibold mb-3">Update Password</h2>
                <div className="flex flex-row">
                    <div className="flex flex-row items-center my-2">
                        <label className=" pt-2 text-xs font-normal leading-2 text-gray-500 mr-2">Current Password</label>
                        <input
                            type="password"
                            placeholder="Old Password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </div>
                    <div >
                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <div >
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <button onClick={handleUpdatePassword}>
                Update Password
            </button>
        </div>
    );
};

export default PasswordUpdate;
