/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

const WithMediaQueries = (WrappedComponent) => {
  function WithMediaQueriesComponent(props) {
    const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'))
    const sm = useMediaQuery((theme) => theme.breakpoints.down('sm'))
    const md = useMediaQuery((theme) => theme.breakpoints.down('md'))
    const lg = useMediaQuery((theme) => theme.breakpoints.down('lg'))
    const xl = useMediaQuery((theme) => theme.breakpoints.down('xl'))

    const injectedProps = {
      media: {
        xs,
        sm,
        md,
        lg,
        xl,
      },
    }
    return <WrappedComponent {...props} {...injectedProps} />
  }
  return WithMediaQueriesComponent
}

export default WithMediaQueries
