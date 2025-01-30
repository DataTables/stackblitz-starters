import './style.css';

import DataTable from 'datatables.net-dt';

new DataTable('#myTable', {
  ajax: '/data.json',
  columns: [
    { data: 'name' },
    { data: 'position' },
    { data: 'office' },
    { data: 'extn' },
    { data: 'start_date' },
    { data: 'salary' },
  ],
});
