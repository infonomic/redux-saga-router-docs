---
sidebar_position: 7
---

# Components

Navigate from links and buttons

## Buttons

### Router button

```PUSH``` param here is used here to add this route ```locationStack```

For more information on ```locationStack``` variable check [this doc](/docs/sagas/#setlocation)

```
<Button
  component={RouterButton}
  mode={PUSH}
  to={L.LocationModuleName.locationName({ id })} // Here you can pass parameters defined in locations file
>
  Cancel
</Button>
```                

### Return button

ReturnButton and [ReturnLink](#return-link) are navigating you to previous location in ```locationStack```

For more information on ```locationStack``` variable check [this doc](/docs/sagas/#setlocation)

```
<ReturnButton>
  Back
</ReturnButton>
```

## Links

### Router link

```CLEAR``` param here is used here to clear ```locationStack```

For more information on ```locationStack``` variable check [this doc](/docs/sagas/#setlocation)

```
<RouterLink
  to={L.LocationModuleName.locationName()}
  mode={CLEAR} 
  exact
>
  Link text
</RouterLink>
```
### Return link

ReturnLink and [ReturnButton](#return-button) are navigating you to previous location in ```locationStack```

For more information on ```locationStack``` variable check [this doc](/docs/sagas/#setlocation)

```
<ReturnLink>
  Back
</ReturnLink>
```

## Breadcrumbs
For more information on ```useBreadcrumbs``` hook check [this doc](/hooks.md/#useBreadcrumbs)


```
function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs()
  const theme = useTheme()

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(({ title, location, current }) => (
        current
          ? <span key={location.name}>{title}</span>
          : (
            <React.Fragment key={location.name}>
              <Link to={location}>{title}</Link>
              {' > '}
            </React.Fragment>
          )
      ))}
    </div>
  )
}
```



