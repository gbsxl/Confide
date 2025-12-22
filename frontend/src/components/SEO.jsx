import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export const SEO = ({
    title,
    description,
    canonical,
    noindex = false,
    openGraph = {}
}) => {
    const siteTitle = 'Confide';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

    // Logic to prevent indexing on Vercel preview URLs
    const isVercelPreview = window.location.hostname.includes('vercel.app') &&
        window.location.hostname !== 'www.confide.website'; // Replace with actual prod domain if known

    const shouldNoIndex = noindex || isVercelPreview;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}
            {shouldNoIndex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content={openGraph.type || 'website'} />
            <meta property="og:title" content={openGraph.title || fullTitle} />
            <meta property="og:description" content={openGraph.description || description} />
            <meta property="og:image" content={openGraph.image || "https://www.confide.website/LogoConfidePreto.png"} />
            <meta property="og:url" content={window.location.href} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={openGraph.title || fullTitle} />
            <meta name="twitter:description" content={openGraph.description || description} />
            <meta name="twitter:image" content={openGraph.image || "https://www.confide.website/LogoConfidePreto.png"} />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    canonical: PropTypes.string,
    noindex: PropTypes.bool,
    openGraph: PropTypes.shape({
        type: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
    }),
};
