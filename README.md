## STR:

1. Clone this repo
2. `yarn`
3. `yarn start`
4. In the browser tab that is then opened, open the devtools console
5. Edit `src/App.jsx` (eg adjust the text within the `<div>`)
6. Check the browser console for prop type errors

## Expected:

No prop-type errors.

## Actual:

An unexpected prop type error shown (only) on the first hot reload.

```
Warning: Failed prop type: The prop `notifications` is marked as required in `NotificationsMenu`, but its value is `undefined`.
    in NotificationsMenu (at Notifications.jsx:43)
    in HotExportedApp (at src/index.jsx:6)
```
