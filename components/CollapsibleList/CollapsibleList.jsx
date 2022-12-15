import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Collapsible = ({ label }) => {
    // eslint-disable-next-line
    const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false)
  const hideContent = {
    font: 'inherit',
    width: '350px',
    height: 'auto',
    marginTop: '5px',
    display: 'none',
    justifyContent: 'left',
    borderRadius: '10px',
    color: 'var(--color-fg-default)',
    backgroundColor: 'var(--color-canvas-default)',
    border: '1px solid var(--color-border-default)',
  }
  
  const showContent = {
    display: 'flex',
    font: 'inherit',
    width: '350px',
    height: '120px',
    overflowY: 'auto',
    marginTop: '5px',
    paddingTop: '5px',
    justifyContent: 'left',
    borderRadius: '10px',
    color: 'var(--color-fg-default)',
    backgroundColor: 'var(--color-canvas-default)',
    border: '1px solid var(--color-border-default)',
  }
  return (
    <div className="container">
      <button 
      style={{ 
        marginTop: "15px", 
        padding: "10px 10px 10px 10px", 
        WebkitAppearance: 'none',
        borderRadius: '6px',
        border: '1px solid var(--color-border-default)',
        fontSize: '12px' 
        }}
        className='toggle' 
        onClick={() => setIsOpen(!isOpen)}
        >
        {label}
      </button>
      <div style={isOpen ? showContent : hideContent}>
        <ul>
          <li><a href="#otc">{t('menu-1')}</a></li>
          <li><a href="#invest">{t('menu-2')}</a></li>
          <li><a href="#project">{t('menu-3')}</a></li>
          <li><a href="#exchange">{t('menu-4')}</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Collapsible;