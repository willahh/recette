import React from "react"

const withPlaceholder = (WrappedComponent) => (props) => (
  <WrappedComponent placeholder="Nom" {...props} />
)

export default withPlaceholder
