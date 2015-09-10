# Issue with redux-form

When using `DynamicForms` in certain situations I am unable to access `inputs`.


```bash
npm i
npm start
```

Open `localhost:3000`

There are two forms, `DefinedForm` with hardcoded fields and `DynamicForm` with fields passed in.

These two forms are then rendered inside two different container components.  First is
a standard `Component` that simple renders each `FormComponent` and the second is the same container `Component` but wrapped with `react-redux`'s `connect`.

The `DefinedForm` in the `UnconnectedContainer` works fine.
The `DynamicForm` in the `UnconnectedContainer` works fine.
The `DefinedForm` in the `ConnectedContainer` works fine.
The `DynamicForm` in the `ConnectedContainer` does not work correctly.

Clicking in the Connected Dynamic form triggers a `redux-form/FOCUS` however the
input does not receive focus and you cannot type in it.
