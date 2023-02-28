import { Link } from "wouter";

const PageLink = ({to, active}) => {
  let address = `./${to}`
  let classes = `page-link page-link--${to}`;
  if (active == to) classes += ' page-link--active';


  return (
    <Link href={address}>
      <a className={classes}>
        <span className='page-link__text'>{to}</span>
      </a>
    </Link>
  )
}

export default PageLink
