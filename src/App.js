import * as React from 'react';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import { registerLicense } from '@syncfusion/ej2-base';

/* Add Syncfusion license key or use environment variable below */
registerLicense(process.env.REACT_APP_SYNCFUSION_LICENSE_KEY);

export default function App() {

  const data = [
    { OrderID: 10248, CustomerID: 'VINET', ShipCountry: 'France' },
    { OrderID: 10249, CustomerID: 'TOMSP', ShipCountry: 'Germany' },
    { OrderID: 10250, CustomerID: 'HANAR', ShipCountry: 'Brazil' },
    { OrderID: 10251, CustomerID: 'VICTE', ShipCountry: 'Venezuela' },
    { OrderID: 10252, CustomerID: 'SUPRD', ShipCountry: 'Belgium' },
    { OrderID: 10253, CustomerID: 'CHOPS', ShipCountry: 'Switzerland' }
  ];

  return (<React.Fragment>
    <h2>Syncfusion React Grid Component</h2>
    <GridComponent dataSource={data} allowPaging={true} pageSettings={{ pageSize: 5 }}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' width='100'/>
        <ColumnDirective field='CustomerID' width='100'/>
        <ColumnDirective field='ShipCountry' width='100'/>
      </ColumnsDirective>
      <Inject services={[Page, Sort]}/>
    </GridComponent>
  </React.Fragment>);
};