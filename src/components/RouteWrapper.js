import React from 'react';
import { Route } from 'react-router-dom';
import { Layout, Page } from 'tailwindcss';

const RouteWrapper = ({ page: Page, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        <Layout {...props}>
          <Page {...props}></Page>
        </Layout>;
      }}></Route>
  );
};

export default RouteWrapper;
