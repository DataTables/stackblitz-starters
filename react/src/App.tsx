{builder-import-esm}

import './App.css';

function App() {
  return (
    <>
      <div>
        <h1>Ajax data source table</h1>
        <h2>DataTables + React example</h2>
        <p>
          This example demonstrates the <code>datatables.net-react</code>
          package being used to display a DataTable with data sourced Ajax.
        </p>
        <p>
          For full documentation for the DataTables React component, please see
          <a href="https://datatables.net/manual/components/react">the React DataTables
          manual</a> which also includes a quick start guide, details on how to use
          components in column cells, reference documentation and more examples.
        </p>

        <DataTable ajax="/data.json" className="display">
          <Column title="Name" data="name" />
          <Column title="Position" data="position" />
          <Column title="Office" data="office" />
          <Column title="Extn." data="extn" />
          <Column title="Start date" data="start_date" />
          <Column title="Salary" data="salary" />
        </DataTable>
      </div>
    </>
  );
}

export default App;
