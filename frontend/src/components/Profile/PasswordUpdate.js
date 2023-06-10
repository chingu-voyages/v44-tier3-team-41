import React, { useState } from 'react';
import { passwordUpdateMenteeThunk } from '../../store/mentee';
import { passwordUpdateMentorThunk } from '../../store/mentor';
import { useDispatch, useSelector } from 'react-redux';

const PasswordUpdate = () => {
    const dispatch = useDispatch();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const sessionUser = useSelector(state => state.session.user);

    const handleUpdatePassword = async e => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            if (sessionUser?.classification === 'Mentee') {
                await dispatch(
                    passwordUpdateMenteeThunk(sessionUser?.id, oldPassword, newPassword)
                );
                setOldPassword('');
                setNewPassword('');
                setConfirmPassword('');
            } else {
                await dispatch(
                    passwordUpdateMentorThunk(sessionUser?.id, oldPassword, newPassword)
                );
                setOldPassword('');
                setNewPassword('');
                setConfirmPassword('');
            }
        } else {
            alert('The new password does not match the confirm password field!');
        }
    };

    const handleCancel = (e) => {
        e.preventDefault()
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
    }
    return (
        <div className=" bg-light1 p-8 rounded-lg shadow-lg mt-4">
            <form onSubmit={handleUpdatePassword}>
                <div className="flex flex-col items-start justify-center">
                    <h2 className="text-sm font-semibold text-gray-600 w-full">
                        Update Password
                    </h2>

                    <div className='flex flex-col items-start justify-center'>
                        <div className='flex flex-row items-center my-2 '>
                            <label className=" pt-2 text-xs font-normal leading-2 text-gray-500 mr-2">
                                Current Password:
                            </label>
                            <input
                                className=" flex-1 bg-white rounded-md shadow-md py-2 pl-2 text-gray-600 text-xs leading-2"
                                type="password"
                                placeholder="Current Password"
                                value={oldPassword}
                                required
                                onChange={e => setOldPassword(e.target.value)}
                            />
                        </div>
                        <div className='flex md:flex-row flex-col'>
                            <div className='flex flex-row items-center my-2 '>
                                <label className=" pt-2 text-xs font-normal leading-2 text-gray-500 mr-2">
                                    New Password:
                                </label>
                                <input
                                    className=" flex-1 bg-white rounded-md shadow-md py-2 pl-2 text-gray-600 text-xs leading-2"
                                    type="password"
                                    placeholder="New Password"
                                    value={newPassword}
                                    required
                                    onChange={e => setNewPassword(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-row items-center my-2 ml-2'>
                                <label className=" pt-2 text-xs font-normal leading-2 text-gray-500 mr-2">
                                    Confirm Password:
                                </label>
                                <input
                                    className=" flex-1 bg-white rounded-md shadow-md py-2 pl-2 text-gray-600 text-xs leading-2"
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    required
                                    onChange={e => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row items-center mt-4 justify-end mr-32'>
                    <button
                        type='submit'
                        className="rounded-md bg-dark1 px-5 py-2 text-xs font-semibold text-white hover:bg-dark3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark3 shadow-md hover:shadow-lg ring-1 ring-offset-4 ring-offset-light2 ring-light4 mr-5"
                    >Sumbit{' '}
                    </button>
                    <button
                        className="rounded-md bg-dark1 px-5 py-2 text-xs font-semibold text-white hover:bg-dark3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark3 shadow-md hover:shadow-lg ring-1 ring-offset-4 ring-offset-light2 ring-light4"
                        onClick={handleCancel}>Cancel{' '}
                    </button>
                </div>
            </form>
        </div >
    );
};

export default PasswordUpdate;
