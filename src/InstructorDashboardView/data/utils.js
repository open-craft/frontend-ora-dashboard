/**
 *
 */
export const sort = function sort(firstElement, secondElement, key, direction) {
  const directionIsAsc = direction === 'asc';

  if (firstElement[key] > secondElement[key]) {
    return directionIsAsc ? 1 : -1;
  } if (firstElement[key] < secondElement[key]) {
    return directionIsAsc ? -1 : 1;
  }
  return 0;
};

/**
 * Aggregate ORA data from all rows into a single one.
 *
 * TODO
 *
 * This is used to show the `overview` table in the
 * Open Responses tab.
 */
export const aggregateOraMetrics = (data) => {
  const aggregateColumns = [
    'total',
    'training',
    'peer_assessment',
    'self_assessment',
    'waiting',
    'staff_assessment',
    'done',
  ];

  const aggregatedData = {
    units: 0,
    assessments: 0,
    total: 0,
    training: 0,
    peer_assessment: 0,
    self_assessment: 0,
    waiting: 0,
    staff_assessment: 0,
    done: 0,
  };

  const unitSet = new Set();

  // This seems too convoluted
  data.map(row => {
    unitSet.add(row.parent_name);

    aggregateColumns.map(column => {
      aggregatedData[column] += row[column];
      return null;
    });

    return null;
  });

  aggregatedData.assessments = data.length;
  aggregatedData.units = unitSet.size;

  return [aggregatedData];
};
