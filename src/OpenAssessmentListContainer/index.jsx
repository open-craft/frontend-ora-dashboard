import React from 'react';

import PageLoading from '../PageLoading';
import AggregatedDataTable from '../AggregatedDataTable';

export default function OpenAssessmentListContainer() {
  const [loading, setLoading] = React.useState(false);

  setLoading(false);

  if (loading) {
    return <PageLoading />;
  }

  const data = [
    {
      id: 'block-v1:OpenCraft+OC-ORA-101+2020+type@openassessment+block@d3ea9b356d124b748fd64b353a0991a9',
      name: 'A',
      parent_id: 'block-v1:OpenCraft+OC-ORA-101+2020+type@vertical+block@f786cfd0bb2b49e084c36fab7341d70f',
      parent_name: 'First',
      peer_assessment: 0,
      waiting: 1,
      training: 0,
      self_assessment: 0,
      staff_assessment: 0,
      cancelled: 0,
      done: 0,
      teams: 0,
      total: 1,
    },
    {
      id: 'block-v1:OpenCraft+OC-ORA-101+2020+type@openassessment+block@b0f8c0d271c54162a2ec1c12bd962024',
      name: 'B',
      parent_id: 'block-v1:OpenCraft+OC-ORA-101+2020+type@vertical+block@66abb1eee7c7498389f8bd633c960e9b',
      parent_name: 'Unit',
      peer_assessment: 0,
      waiting: 0,
      training: 0,
      self_assessment: 0,
      staff_assessment: 0,
      cancelled: 0,
      done: 0,
      teams: 0,
      total: 0,
    },
  ];

  return (
    <AggregatedDataTable assessmentData={data} />
  );
}
