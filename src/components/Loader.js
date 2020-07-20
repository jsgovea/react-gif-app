import React from 'react';
import ContentLoader from "react-content-loader";

const Loader = (props) => (
    <ContentLoader
        speed={2}
        width={200}
        height={200}
        viewBox="0 0 400 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >

        <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
        <rect x="1" y="60" rx="2" ry="2" width="400" height="400" />
    </ContentLoader>
);

export default Loader;
