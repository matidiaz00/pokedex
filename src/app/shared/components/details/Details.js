import React from 'react';

function Details({data, color}) {

  return (
    <div className="Details">
      <div className="card w-100">
        <img src={data.sprites.other.home.front_default} className="mx-auto w-50" alt={'hola mundo'} />
        <div className="card-body" style={{backgroundColor: color}}>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
              <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
              <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
              <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
              <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
            </div>
            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
              <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
            </div>
            <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabIndex="0">
              <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
            </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Details;
