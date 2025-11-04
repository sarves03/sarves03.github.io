import { ExpertiseAreaSchema } from "@data/schema/expertise-area.schema";
import { site, api, database, lock, speed, monitor } from '@icon/regular.icon'

const expertiseAreaData: ExpertiseAreaSchema[] = [
  {
    icon: site,
    percent: '90%',
    name: 'Frontend (Angular)'
  },
  {
    icon: api,
    percent: '85%',
    name: 'Backend (Node.js & Express)'
  },
  {
    icon: database,
    percent: '80%',
    name: 'Database (MongoDB)'
  },
  {
    icon: lock,
    percent: '70%',
    name: 'Cybersecurity Integration'
  },
  {
    icon: speed,
    percent: '75%',
    name: 'Performance Optimization'
  },
  {
    icon: monitor,
    percent: '65%',
    name: 'Functional Safety Systems'
  },
]

export default expertiseAreaData;
