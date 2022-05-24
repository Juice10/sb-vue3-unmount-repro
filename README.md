# Storybook unmounts Vue components when args change, stopping css transitions from working.

## Reproduce
To reproduce the issue run the following:

Setup project and start storybook
```
yarn install; yarn storybook
```

Go to the `Button` story and in the controls panel you can change one of the props. For example you can toggle `Primary` on and off. Notice that every time you change a prop the number on the button changes, indicated the component was un-mounted and remounted again.

## Expected result

Whenever a prop changes, the component should stay mounted, keeping its internal data.
