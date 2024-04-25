import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import Container, { ContainerV2 } from '@/components/ui/container';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
AnyReactComponent.propTypes = {
    text: PropTypes.string
}

export default function Map(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
   <Container className='px-1 my-20 h-[40vh] md:my-40'>
    <ContainerV2 className='h-full'>

      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </ContainerV2>
   </Container>

  );
}