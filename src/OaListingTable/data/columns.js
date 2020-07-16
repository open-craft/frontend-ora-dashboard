const tableColumns = [
  {
    label: 'Unit Name',
    key: 'parent_name',
    columnSortable: false,
    onSort: () => {},
    width: 'col-2',
  },
  {
    label: 'Assessment',
    key: 'name',
    columnSortable: true,
    onSort: () => {},
    width: 'col-3',
  },
  {
    label: 'Total Responses',
    key: 'total',
    columnSortable: true,
    onSort: () => {},
    width: 'col-1',
  },
  {
    label: 'Training',
    key: 'training',
    columnSortable: true,
    onSort: () => {},
    width: 'col-1',
  },
  {
    label: 'Peer',
    key: 'peer_assessment',
    columnSortable: true,
    onSort: () => {},
    width: 'col-1',
  },
  {
    label: 'Self',
    key: 'self_assessment',
    columnSortable: true,
    onSort: () => {},
    width: 'col-1',
  },
  {
    label: 'Waiting',
    key: 'waiting',
    columnSortable: true,
    onSort: () => {},
    width: 'col-1',
  },
  {
    label: 'Staff',
    key: 'staff_assessment',
    columnSortable: true,
    onSort: () => {},
    width: 'col-1',
  },
  {
    label: 'Final Grade Received',
    key: 'done',
    columnSortable: true,
    onSort: () => {},
    width: 'col-1',
  },
];

export default tableColumns;
