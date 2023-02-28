import PageLink from './PageLink';

const PagesLinksList = ({active}) => {
  return (
    <nav>
      <ul className='pages-links-list'>
        <li className='page-links-list__item'>
          <PageLink to='chat' active={active}/>
        </li>
        <li className='page-links-list__item'>
          <PageLink to='search' active={active}/>
        </li>
        <li className='page-links-list__item'>
          <PageLink to='settings' active={active}/>
        </li>
      </ul>
    </nav>
  )
}

export default PagesLinksList
