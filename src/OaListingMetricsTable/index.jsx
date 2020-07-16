import React from 'react';
import PropTypes, { object } from 'prop-types';

import { Table } from '@edx/paragon';

import metricsTableColumns from './data/columns';
import './index.scss';

export default function OaListingMetricsTable({ assessmentMetrics }) {
  return (
    <Table
      className="ora-assessments-metrics-table"
      data={assessmentMetrics}
      columns={metricsTableColumns}
      hasFixedColumnWidths
    />
  );
}

OaListingMetricsTable.propTypes = {
  assessmentMetrics: PropTypes.arrayOf(object),
};

OaListingMetricsTable.defaultProps = {
  assessmentMetrics: [],
};
