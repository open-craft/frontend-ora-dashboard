import React from 'react';
import PropTypes, { object } from 'prop-types';

import { Table } from '@edx/paragon';

import { sort } from './data/utils';
import tableColumns from './data/columns';

import './index.scss';

export default function OaListingTable({ assessmentData }) {
  const assessmentDataSortable = assessmentData.slice();

  return (
    <Table
      className="ora-assessments-list-table"
      data={assessmentDataSortable.sort(
        (firstElement, secondElement) => sort(firstElement, secondElement, tableColumns[0].key, 'desc'),
      )}
      columns={tableColumns.map(column => ({
        ...column,
        onSort(direction) {
          assessmentDataSortable.sort(
            (firstElement, secondElement) => sort(firstElement, secondElement, column.key, direction),
          );
        },
      }))}
      tableSortable
      defaultSortedColumn={tableColumns[1].key}
      defaultSortDirection="desc"
      hasFixedColumnWidths
    />
  );
}

OaListingTable.propTypes = {
  assessmentData: PropTypes.arrayOf(object),
};

OaListingTable.defaultProps = {
  assessmentData: [],
};
