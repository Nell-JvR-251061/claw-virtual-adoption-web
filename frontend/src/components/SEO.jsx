import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, path = '', image = 'https://claw-virtual-adoption.co.za/', noIndex = false }) {
  const siteName = "CVA";
  const baseUrl = "https://claw-virtual-adoption.co.za/";
  const fullUrl = `${baseUrl}${path}`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{`${siteName} | ${title}`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Prevent search engines from indexing private pages (like Dashboard/Login) */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${siteName} | ${title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${siteName} | ${title}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
