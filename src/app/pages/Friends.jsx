import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllTrainers } from '../shared/providers/Api';

function Friends() {

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getAllTrainers()
      .then((data) => {
        setFriends(data)
      })
  }, []);

  return (
    <div className="Friends">
      <div className="container">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {
            friends.length === 0 ? null
            : friends.map((data, i) => (
              <div className="feature col mb-5" id={i} key={i}>
                <div
                  style={{width: '4rem', height: '4rem', borderRadius: '0.75rem'}}
                  className="d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
                >
                  <i className="bi bi-person"></i>
                </div>
                <h2>{data.name}</h2>
                <div className='d-flex flex-wrap mb-2'>
                  <strong className='mr-5'>Team:  </strong>
                  {
                    data.team.length === 0 ? null
                    : data.team.map((id, i) => (
                      <span className='px-1'>N°{
                        (id).toLocaleString(
                          'en-US', {
                            minimumIntegerDigits: 3,
                            useGrouping:false
                          }
                        )}
                      { i < data.team.length - 1 ? ',' : null}
                      </span>
                    ))
                  }
                </div>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                <Link to="/" className="icon-link d-inline-flex align-items-center">
                  Call to action
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Friends;
