import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  bar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    padding: theme.spacing(),
    transition: 'background-color 0.2s',
    '& .MuiButton-root': {
      color: theme.palette.white,
      marginRight: theme.spacing(4),
      '&.active': {
        color: theme.palette.secondary.main,
      }
    },
    '&.dark': {
      backgroundColor: '#162229',
    },
  },
}))

const Menu = ({ dark, router }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const [isDark, setDark] = useState(dark)

  useEffect(() => {
    const onOut = () => setDark(true)
    const onIn = () => setDark(false)
    window.addEventListener('heroOut', onOut)
    window.addEventListener('heroIn', onIn)

    return function cleanup() {
      window.removeEventListener('heroOut', onOut)
      window.removeEventListener('heroIn', onIn)
    }
  })

  const checkActive = name => {
    return  router.asPath === name ? 'active' : ''
  }

  return (
    <div className={clsx(classes.bar, isDark && 'dark')}>
      <Link href="/">
        <Button size="small" className={checkActive('/')}>{t('Home')}</Button>
      </Link>
      {/*<Link href="/estimator">*/}
        {/*<Button size="small" className={checkActive('/estimator')}>{t('Estimator')}</Button>*/}
      {/*</Link>*/}
      <Link href="/contact">
        <Button size="small" className={checkActive('/contact')}>{t('Contact Me')}</Button>
      </Link>
    </div>
  )
}

Menu.propTypes = {
  dark: PropTypes.bool,
}

Menu.defaultProps = {
  dark: false,
}

export default React.memo(withRouter(Menu))
