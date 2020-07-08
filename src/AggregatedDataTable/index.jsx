import React from 'react';
import PropTypes, { object } from 'prop-types';

import { Table } from '@edx/paragon';

import { aggregateOraMetrics, sort } from './data/utils';
import { tableColumns, metricsTableColumns } from './data/columns';


export default function AggregatedDataTable({ assessmentData }) {
  const assessmentDataSortable = assessmentData.slice();

  return (
    <main>
      <div className="ora-row">
        <Table
          data={aggregateOraMetrics(assessmentData)}
          columns={metricsTableColumns}
        />
      </div>
      <div>
        <Table
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
          caption="This table shows all Open Response Assesments in the current course."
          tableSortable
          defaultSortedColumn={tableColumns[1].key}
          defaultSortDirection="desc"
        />
      </div>
    </main>
  );
}

AggregatedDataTable.propTypes = {
  assessmentData: PropTypes.arrayOf(object),
};

AggregatedDataTable.defaultProps = {
  assessmentData: [],
};
