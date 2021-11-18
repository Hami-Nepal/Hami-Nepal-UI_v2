import { useState, useEffect } from 'react';

import API from '../../utils/API';

import './homeTransparency.scss';

const HomeTransparency = () => {
  const [donors, setDonors] = useState([]);
  const [transparency, setTransparency] = useState({});

  useEffect(async () => {
    const promises = [
      API.get('/donations?sort=-donation_amount&limit=5&page=1'),
      API.get('/find/totalDonations'),
      API.get('/find/totalExpenses'),
    ];

    const res = await Promise.all(promises);

    const sortDonors = [...res[0].data.data];
    setDonors(sortDonors.sort((a, b) => b.donation_amount - a.donation_amount));

    setTransparency({
      total: res[1].data.data[0].donation,
      expense: res[2].data.data[0].total_expenses,
      remaining:
        res[1].data.data[0].donation - res[2].data.data[0].total_expenses,
    });
  }, []);

  return (
    <div className="homeTransparency">
      <h1 className="homeTransparency__heading">Transparency</h1>

      <div className="homeTransparency__threeColumns">
        <div className="donations">
          <div className="donations__data">
            <h2>${transparency.total}</h2>
            <p>DONATION RECIEVED</p>
          </div>
          <hr className="donations__hr" />
          <div className="donations__data">
            <h2>${transparency.expense}</h2>
            <p>EXPENDITURE</p>
          </div>
          <hr className="donations__hr" />
          <div className="donations__data">
            <h2>${transparency.remaining}</h2>
            <p>REMAINING DONATION</p>
          </div>
        </div>

        <hr className="hr" />

        <div className="topDonors">
          <h2>Top Donors</h2>
          <div className="topDonors__map">
            {donors.map((user) => (
              <div className="topDonors__card" key={user._id}>
                <picture>
                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="donor avatar"
                  />
                </picture>
                <p>
                  {user.first_name} {user.last_name}
                </p>
                <span>Rs. {user.donation_amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTransparency;
