import React from 'react';
import PlaceMap from './place_map';
import { Link } from 'react-router';
import ReactTooltip from 'react-tooltip'
import SuggestionCreateContainer from '../suggestions/suggestion_create_container';
import Modal from 'react-modal';


class PlaceMainTop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render () {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        padding               : '0px',
        borderRadius          : '0px',
      }
    };

    let city = this.props.city;

    let mapComponent = <PlaceMap lat={city.lat} lng={city.lng} />;
    let fullMapLink = `http://maps.google.com/?ie=UTF8&hq=&ll=${city.lat},${city.lng}&z=13`;
    let writeText = `Add a suggestion about ${city.name}`;
    let followText = `Add ${city.name} to My Places`;

    return (
			<section className="place-main-top group">
        <section className="place-main-top-left">
          <div className="place-main-top-image-and-info group">
            <div className="place-main-top-image"></div>
            <div className="place-main-top-info">
              <h1>{city.name}</h1>
              <Link to={city.secondary_link}>{city.secondary_place}</Link>
              <p>{city.num_suggestions}</p>
            </div>
          </div>
          <div className="place-main-top-buttons group">
            <div className="place-main-top-write" onClick={this.openModal} data-tip={writeText}></div>
            <div className="place-main-top-book" data-tip={followText}></div>
            <ReactTooltip />
          </div>
        </section>
        <section className="place-main-top-map">
          {mapComponent}
  				<a href={fullMapLink} target="_blank">Full Map</a>
        </section>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <SuggestionCreateContainer placeType={city.place_type_name} placeId={city.id} closeModal={this.closeModal}/>
        </Modal>

			</section>
    );
  }
}

export default PlaceMainTop;
