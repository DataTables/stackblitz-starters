<script setup lang="ts">
{builder-import-esm}

const options = {};
</script>

<template>
  <div>
    <h1>Ajax data source table</h1>
    <h2>DataTables + Vue3 example</h2>
    <p>
      In this example the <code>datatables.net-vue3</code> package is used to
      load JSON data and display it in an interactive table. In this case we use
      object based row data, rather than arrays, so the `data` property of the
      <code>&lt;Column&gt;</code> component is used to tell DataTables which
      property to read from the objects for each column. An <code>options</code>
      property is also available so you can set DataTables initialisation
      options.
    </p>
    <p>
      For full documentation for the DataTables Vue component, please see
      <a href="https://datatables.net/manual/components/vue">the Vue DataTables
      manual</a> which also includes a quick start guide, details on how to use
      components in column cells, reference documentation and more examples.
    </p>

    <DataTable
      :options="options"
      ajax="/data.json"
      class="display"
      width="100%"
    >
      <Column title="Name" data="name" />
      <Column title="Position" data="position" />
      <Column title="Office" data="office" />
      <Column title="Extn." data="extn" />
      <Column title="Start date" data="start_date" />
      <Column title="Salary" data="salary" />
    </DataTable>
  </div>
</template>

<style>
{builder-import-css}
</style>
