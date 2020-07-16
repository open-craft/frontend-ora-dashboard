import React from 'react';
import PropTypes, { object } from 'prop-types';

import OaListingMetricsTable from '../OaListingMetricsTable';
import OaListingTable from '../OaListingTable';

import { aggregateOraMetrics } from './data/utils';


export default function InstructorDashboardView({ assessmentData }) {
  const assessmentMetrics = aggregateOraMetrics(assessmentData);

  return (
    <main>
      <OaListingMetricsTable assessmentMetrics={assessmentMetrics} />
      <OaListingTable assessmentData={assessmentData} />
    </main>
  );
}

InstructorDashboardView.propTypes = {
  assessmentData: PropTypes.arrayOf(object),
};

InstructorDashboardView.defaultProps = {
  assessmentData: [],
};
