addEventListener('DOMContentLoaded', () => {
  let table = new DataTable('#example', {
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
});
