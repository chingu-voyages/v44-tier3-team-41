import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import Banner from '../components/MentorDetail/Banner';
import DetailCard from '../components/MentorDetail/DetailCard';
import { getAllMentorsThunk } from '../store/mentor';

const MentorDetail = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [minYrsExp, setMinYrsExp] = useState(1)
  const [maxYrsExp, setMaxYrsExp] = useState(2)
  const [expertise, setExpertise] = useState('python')
  const [role, setRole] = useState('Backend Engineer')
  const [company, setCompany] = useState('')

  useEffect(() => {
    const filters = {
      name,
      city,
      state,
      country,
      // minYrsExp,
      // maxYrsExp,
      expertise,
      role,
      company
    };

    dispatch(getAllMentorsThunk(filters))

  }, [dispatch])

  // const handleSearch = async (e) => {
  //   e.preventDefault()
  // }


  return (
    <div className="flex flex-col">
      <div className="bg-gray-300">
        {' '}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img
              className="mx-auto h-12 w-auto"
              src="../../../public/dm_logo_clear.png"
              alt="Your Company"
            />
          </Link>
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <Banner />
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center pb-12 sm:px-6 lg:px-8">
          <DetailCard />
        </div>
      </div>
    </div>
  );
};

export default MentorDetail;
