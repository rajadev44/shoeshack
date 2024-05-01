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
      lat: 51.5072,
      lng: 0.1276
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
   <Container className='px-1 my-10 h-[40vh] md:my-20 md:mt-28'>
    <ContainerV2 className='h-full'>

      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={51.5072}
          lng={0.1276}
          text="My Marker"
        />
      </GoogleMapReact>
    </ContainerV2>
   </Container>

  );
}