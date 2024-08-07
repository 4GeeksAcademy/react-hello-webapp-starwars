import React from 'react';
import DetailView from '../component/detailview';

const Single = ({ match }) => {
    const type = match.path.includes('characters') ? 'people' : match.path.includes('vehicles') ? 'vehicles' : 'planets';
    return <DetailView match={match} type={type} />;
};

export default Single;
