import './Card.css'

// We could name such a component card, because this is a specific card look.
// In web development, when you hear the term card, it's typically means
// some kind of container look with rounded corners, drop shadows,
// and elements like these.

const Card = (props) => {
  const classes = 'card ' + props.className

  // Children is reserved name and the value of this special children prop
  // will always be the content between the opening and closing tags
  // of your custom components.
  return <div className={classes}>{props.children}</div>
}

export default Card
