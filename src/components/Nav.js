import React from 'react'


function Nav() {
  const [selectedOrder, setSelectedOrder] = React.useState('asc')
  const [selectedField, setSelectedField] = React.useState('asc')
  return (
    <Menu>
      <Menu.OptionsGroup
        title="Order"
        options={[
          { label: 'Ascending', value: 'asc' },
          { label: 'Descending', value: 'desc' },
        ]}
        selected={selectedOrder}
        onChange={(selected) => setSelectedOrder(selected)}
      />
      <Menu.Divider />
      <Menu.OptionsGroup
        title="Show"
        options={[
          { label: 'Email', value: 'email' },
          { label: 'Phone', value: 'phone' },
          { label: 'State', value: 'state' },
          { label: 'Country', value: 'country' },
          { label: 'Type', value: 'type' },
        ]}
        selected={selectedField}
        onChange={(selected) => setSelectedField(selected)}
      />
    </Menu>
  )
}


export default Nav