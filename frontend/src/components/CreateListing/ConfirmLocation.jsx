const ConfirmLocation = ({ coordinates }) => {

    return (
        <h1>{`${coordinates.lat} ${coordinates.lng}`}</h1>

    );
};

export default ConfirmLocation;
